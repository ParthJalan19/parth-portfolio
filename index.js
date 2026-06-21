document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Mobile Navigation & Scroll Header
  // ==========================================
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const navLinkItems = document.querySelectorAll('.nav-link-item, .nav-cta');

  // Sticky Navbar on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveNavLink();

    // Scroll Progress bar
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      const progBar = document.getElementById('scroll-progress');
      if (progBar) progBar.style.width = `${progress}%`;
    }
  });

  // Theme Toggler Cycle logic
  const themeBtn = document.getElementById('theme-btn');
  const themes = ['cyberpunk', 'emerald', 'gold'];
  let currentThemeIndex = 0;
  
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      currentThemeIndex = (currentThemeIndex + 1) % themes.length;
      const nextTheme = themes[currentThemeIndex];
      document.body.setAttribute('data-theme', nextTheme);
      
      const themeText = themeBtn.querySelector('.theme-text');
      if (themeText) {
        if (nextTheme === 'cyberpunk') themeText.textContent = 'Neon';
        else if (nextTheme === 'emerald') themeText.textContent = 'Emerald';
        else if (nextTheme === 'gold') themeText.textContent = 'Gold';
      }
    });
  }

  // Toggle Hamburger Menu
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-active');
    hamburger.classList.toggle('active');
    
    // Animate hamburger spans
    const spans = hamburger.querySelectorAll('span');
    if (hamburger.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });

  // Close Mobile Menu on Click
  navLinkItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('mobile-active');
      hamburger.classList.remove('active');
      const spans = hamburger.querySelectorAll('span');
      spans.forEach(span => span.style.transform = 'none');
      spans[1].style.opacity = '1';
    });
  });

  // Active Nav Link based on Viewport Scroll
  const sections = document.querySelectorAll('section');
  function updateActiveNavLink() {
    let current = '';
    const scrollPos = window.scrollY + 150;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinkItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  }

  // ==========================================
  // 2. Typed Role Text Rotation (Hero Section)
  // ==========================================
  const rotateElement = document.getElementById('hero-rotator');
  const roles = [
    'Data Analyst',
    'Software Developer',
    'Web Developer',
    'Full Stack Developer'
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeRole() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      rotateElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50; // speed up when deleting
    } else {
      rotateElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at full word
      isDeleting = true;
      typingSpeed = 2000; // Pause for 2s
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 500; // brief pause before next word
    }

    setTimeout(typeRole, typingSpeed);
  }
  
  // Start the typing loop
  setTimeout(typeRole, 1000);


  // ==========================================
  // 3. Scroll Reveal Animations (IntersectionObserver)
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal-up, .reveal-scale, .reveal-left, .reveal-right');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Unobserve once revealed
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));


  // ==========================================
  // 4. Stats Counters Increment Transition
  // ==========================================
  const statsSection = document.getElementById('stats');
  const statNumbers = document.querySelectorAll('.stat-num');
  let statsAnimated = false;

  const statsObserver = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (entry.isIntersecting && !statsAnimated) {
      animateCounters();
      statsAnimated = true;
    }
  }, { threshold: 0.2 });

  if (statsSection) {
    statsObserver.observe(statsSection);
  }

  function animateCounters() {
    statNumbers.forEach(stat => {
      const target = parseFloat(stat.getAttribute('data-target'));
      const isDecimal = target % 1 !== 0;
      const duration = 1500; // 1.5s
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Easing curve (easeOutQuad)
        const easeProgress = progress * (2 - progress);
        
        let currentValue = easeProgress * target;
        
        if (isDecimal) {
          stat.textContent = currentValue.toFixed(1);
        } else {
          stat.textContent = Math.floor(currentValue);
        }

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          stat.textContent = isDecimal ? target.toFixed(1) : target;
        }
      }
      
      requestAnimationFrame(updateCounter);
    });
  }


  // ==========================================
  // 5. Interactive Domain/Role Selector & Filters
  // ==========================================
  const roleTabs = document.querySelectorAll('.role-tab');
  const panels = document.querySelectorAll('.role-panel-content');
  const skillTags = document.querySelectorAll('.skill-tag');
  const projFilterBtns = document.querySelectorAll('.proj-filter-btn');
  const skillFilterChips = document.querySelectorAll('.filter-chip');

  roleTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // 1. Toggle Active Tab
      roleTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // 2. Toggle Active Detail Panel
      const selectedRole = tab.getAttribute('data-role');
      panels.forEach(panel => {
        panel.classList.remove('active');
        if (panel.getAttribute('id') === `panel-${selectedRole}`) {
          panel.classList.add('active');
        }
      });

      // 3. Highlight relevant skills and auto-filter projects
      adaptSkillsAndProjectsForRole(selectedRole);
    });
  });

  function adaptSkillsAndProjectsForRole(role) {
    // Reset all highlights
    skillTags.forEach(tag => tag.classList.remove('highlight'));
    
    // Auto-update skill category filters & projects
    if (role === 'data-analyst') {
      // Highlight analytics skills
      skillTags.forEach(tag => {
        if (tag.getAttribute('data-category') === 'analytics' || tag.getAttribute('data-category') === 'databases') {
          tag.classList.add('highlight');
        }
      });
      // Filter projects to analytics
      triggerProjectFilter('analytics');
      triggerSkillCategoryFilter('analytics');
    } 
    else if (role === 'software-developer') {
      // Highlight languages and database skills
      skillTags.forEach(tag => {
        if (tag.getAttribute('data-category') === 'languages' || tag.getAttribute('data-category') === 'databases') {
          tag.classList.add('highlight');
        }
      });
      triggerProjectFilter('software');
      triggerSkillCategoryFilter('languages');
    }
    else if (role === 'web-developer') {
      // Highlight web development skills
      skillTags.forEach(tag => {
        if (tag.getAttribute('data-category') === 'web') {
          tag.classList.add('highlight');
        }
      });
      triggerProjectFilter('fullstack');
      triggerSkillCategoryFilter('web');
    }
    else if (role === 'fullstack-developer') {
      // Highlight Web & Database skills
      skillTags.forEach(tag => {
        if (tag.getAttribute('data-category') === 'web' || tag.getAttribute('data-category') === 'databases') {
          tag.classList.add('highlight');
        }
      });
      triggerProjectFilter('fullstack');
      triggerSkillCategoryFilter('web');
    }
  }


  // ==========================================
  // 6. Skills Category Filter
  // ==========================================
  skillFilterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const category = chip.getAttribute('data-cat');
      triggerSkillCategoryFilter(category);
    });
  });

  function triggerSkillCategoryFilter(category) {
    // Set active chip
    skillFilterChips.forEach(c => {
      c.classList.remove('active');
      if (c.getAttribute('data-cat') === category) {
        c.classList.add('active');
      }
    });

    // Toggle skill visibility with transition
    skillTags.forEach(tag => {
      const tagCat = tag.getAttribute('data-category');
      if (category === 'all' || tagCat === category) {
        tag.style.display = 'flex';
        setTimeout(() => tag.style.opacity = '1', 50);
      } else {
        tag.style.opacity = '0';
        tag.style.display = 'none';
      }
    });
  }


  // ==========================================
  // 7. Projects Domain Filter
  // ==========================================
  const projectCards = document.querySelectorAll('.project-card');

  projFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filterValue = btn.getAttribute('data-filter');
      triggerProjectFilter(filterValue);
    });
  });

  function triggerProjectFilter(filterValue) {
    // Update active button
    projFilterBtns.forEach(b => {
      b.classList.remove('active');
      if (b.getAttribute('data-filter') === filterValue) {
        b.classList.add('active');
      }
    });

    // Filter project cards
    projectCards.forEach(card => {
      const cardDomain = card.getAttribute('data-domain');
      if (filterValue === 'all' || cardDomain === filterValue) {
        card.style.display = 'flex';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0) scale(1)';
        }, 50);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px) scale(0.95)';
        setTimeout(() => card.style.display = 'none', 300);
      }
    });
  }


  // ==========================================
  // 8. Certificates Gallery & Modal Handler
  // ==========================================
  const certCards = document.querySelectorAll('.cert-card');
  const certModal = document.getElementById('cert-modal');
  const closeModal = document.getElementById('close-modal');

  const modalTitle = document.getElementById('modal-title');
  const modalIssuer = document.getElementById('modal-issuer');
  const modalSummary = document.getElementById('modal-summary');
  const modalTag = document.getElementById('modal-tag');

  const certBadgeLogo = document.getElementById('cert-badge-logo');
  const certBadgeRole = document.getElementById('cert-badge-role');
  const certBadgeIssuer = document.getElementById('cert-badge-issuer');
  const certBadge = document.getElementById('cert-badge');

  // Certificate DB Metadata
  const certificatesData = {
    'bluestock': {
      title: 'SDE Internship Certificate',
      issuer: 'Bluestock Fintech',
      summary: 'Awarded for successfully completing the SDE (Software Development Engineer) internship program. Developed backend components, designed secure API architectures, linked database entities via Mongoose schemas, and verified data integration pipelines.',
      date: '28/02/2026',
      tag: 'Professional Experience',
      badgeLogo: 'BLUESTOCK FINTECH',
      badgeRole: 'Software Development Engineer (SDE)',
      badgeIssuer: 'Verification Code: BFSD221763',
      color: 'linear-gradient(135deg, #0e1e38 0%, #173873 100%)',
      border: '3px double #3b82f6'
    },
    'webpage-design': {
      title: 'Webpage Design Credentials',
      issuer: 'Academic Certification',
      summary: 'Certified in modern web development methodologies, focusing on semantic HTML5 structure, responsive stylesheet properties, typography systems, user experience best practices, and layout grid styling.',
      date: 'Dec 2024',
      tag: 'Development',
      badgeLogo: 'ACADEMIC BOARD',
      badgeRole: 'Certified Web Designer',
      badgeIssuer: 'Credential ID: AC-WD-2024',
      color: 'linear-gradient(135deg, #1f102e 0%, #4c1d95 100%)',
      border: '3px double #a78bfa'
    },
    'java': {
      title: 'Java Core & Advanced Programming',
      issuer: 'Academic Board',
      summary: 'Proficient in Java programming including object-oriented concepts, exception handling, data structures, multithreading, and relational database connections via JDBC APIs.',
      date: 'Oct 2024',
      tag: 'Languages',
      badgeLogo: 'ORACLE TECH ACADEMY',
      badgeRole: 'Advanced Java Architect',
      badgeIssuer: 'Credential ID: AC-JA-998',
      color: 'linear-gradient(135deg, #2d1313 0%, #7f1d1d 100%)',
      border: '3px double #f87171'
    },
    'python': {
      title: 'Python Programming Foundation',
      issuer: 'Academic Verification',
      summary: 'Demonstrated proficiency in Python, scripting concepts, functional programming, data operations with Pandas, scientific computation with NumPy, and custom diagram creation via Matplotlib.',
      date: 'Nov 2024',
      tag: 'Languages',
      badgeLogo: 'PYTHON DEVELOPMENT FOUNDATION',
      badgeRole: 'Python Certified Developer',
      badgeIssuer: 'Credential ID: AC-PY-5562',
      color: 'linear-gradient(135deg, #0f272a 0%, #115e59 100%)',
      border: '3px double #2dd4bf'
    },
    'c-programming': {
      title: 'C Programming Certification',
      issuer: 'Academic Verification',
      summary: 'Credential validating knowledge of memory allocations, pointer operations, procedural flow, structures, file handling, and algorithmic programming fundamentals.',
      date: 'July 2024',
      tag: 'Languages',
      badgeLogo: 'CORE SYSTEMS INC',
      badgeRole: 'C Certified Programmer',
      badgeIssuer: 'Credential ID: AC-CP-1102',
      color: 'linear-gradient(135deg, #1c1c1c 0%, #4b5563 100%)',
      border: '3px double #9ca3af'
    },
    'mysql': {
      title: 'MySQL Database Management',
      issuer: 'Relational DB Board',
      summary: 'Certified in writing complex SQL queries, building databases, optimizing performance, and handling tables, indexes, transactions, and triggers in MySQL and MySQL Workbench.',
      date: 'Jan 2025',
      tag: 'Databases',
      badgeLogo: 'SQL WORLD WIDE',
      badgeRole: 'Database Administrator',
      badgeIssuer: 'Credential ID: AC-MY-8849',
      color: 'linear-gradient(135deg, #1a2e3a 0%, #0369a1 100%)',
      border: '3px double #38bdf8'
    },
    'excel': {
      title: 'Advanced Microsoft Excel',
      issuer: 'Data Analysis Board',
      summary: 'Credential for advanced spreadsheet operations. Experienced in Pivot Tables, VLOOKUPs, XLOOKUPs, data formatting, financial dashboards, and KPI analysis dashboards.',
      date: 'Feb 2025',
      tag: 'Data Analytics',
      badgeLogo: 'ANALYTICS INSTITUTE',
      badgeRole: 'Excel Data Analyst',
      badgeIssuer: 'Credential ID: AC-EX-3401',
      color: 'linear-gradient(135deg, #0d2818 0%, #15803d 100%)',
      border: '3px double #4ade80'
    },
    'cert-data-analyst': {
      title: 'Data Analyst Certificate',
      issuer: 'Data Science & Analytics Institute',
      summary: 'Professional certification demonstrating expertise in designing data-driven pipelines, cleaning complex databases, performing structured query filtering, modeling data clusters, and translating stats into operational business reports.',
      date: 'Mar 2025',
      tag: 'Data Analytics',
      badgeLogo: 'ANALYTICS INSTITUTE',
      badgeRole: 'Certified Data Analyst',
      badgeIssuer: 'Verification ID: AC-DA-3049',
      color: 'linear-gradient(135deg, #0d324d 0%, #7f5a83 100%)',
      border: '3px double #00f2fe'
    },
    'cert-smart-it': {
      title: 'Smart Information Technology Professional Certificate',
      issuer: 'Smart IT Systems Association',
      summary: 'Professional IT certification validating knowledge in smart computing methodologies, cloud architectures, automated database scripting, advanced network engineering workflows, and system optimization.',
      date: 'Apr 2025',
      tag: 'Professional Cert',
      badgeLogo: 'SMART IT SYSTEM',
      badgeRole: 'Smart IT Professional',
      badgeIssuer: 'Verification ID: AC-SIT-7182',
      color: 'linear-gradient(135deg, #13547a 0%, #80d0c7 100%)',
      border: '3px double #00ff87'
    }
  };

  certCards.forEach(card => {
    card.addEventListener('click', () => {
      const certKey = card.getAttribute('data-cert');
      const data = certificatesData[certKey];

      if (data) {
        // Populate modal data
        modalTitle.textContent = data.title;
        modalIssuer.textContent = `Issued by ${data.issuer}`;
        modalSummary.textContent = data.summary;
        modalTag.textContent = `Domain: ${data.tag}`;

        // Populate visual badge details
        certBadgeLogo.textContent = data.badgeLogo;
        certBadgeRole.textContent = data.badgeRole;
        certBadgeIssuer.textContent = data.badgeIssuer;

        // Apply customized colors/styling to badge
        certBadge.style.background = data.color;
        certBadge.style.border = data.border;
        if (certKey === 'bluestock') {
          certBadge.style.boxShadow = 'inset 0 0 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)';
        } else {
          certBadge.style.boxShadow = 'inset 0 0 40px rgba(0, 0, 0, 0.5), var(--glow-cyan)';
        }

        // Open modal
        certModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // prevent scrolling underneath
      }
    });
  });

  // Close Modal Handler
  function closeCertModal() {
    certModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  closeModal.addEventListener('click', closeCertModal);
  certModal.addEventListener('click', (e) => {
    if (e.target === certModal) {
      closeCertModal();
    }
  });

  // Close Modal on Escape Key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && certModal.classList.contains('active')) {
      closeCertModal();
    }
  });

  // ==========================================
  // 9. 3D Tilt Hover Animation for Cards
  // ==========================================
  const cards = document.querySelectorAll('.project-card, .timeline-card, .cert-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xc = rect.width / 2;
      const yc = rect.height / 2;
      
      const angleX = (yc - y) / 18; // rotation range
      const angleY = (x - xc) / 18;
      
      card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-6px)`;
    });
    
    card.style.transition = 'transform 0.1s ease, border-color 0.2s ease, box-shadow 0.2s ease';
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      card.style.transition = 'transform 0.5s ease, border-color 0.2s ease, box-shadow 0.2s ease';
    });
  });

  // Hero Image 3D Tilt & Cursor Follow
  const heroImageCard = document.getElementById('hero-image-card');
  if (heroImageCard) {
    document.addEventListener('mousemove', (e) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      const centerX = windowWidth / 2;
      const centerY = windowHeight / 2;
      
      // Calculate rotation angles based on cursor offset from screen center
      const tiltX = (centerY - mouseY) / centerY * 15; // max 15deg
      const tiltY = (mouseX - centerX) / centerX * 15; // max 15deg
      
      heroImageCard.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-5px)`;
    });
    
    document.addEventListener('mouseleave', () => {
      heroImageCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      heroImageCard.style.transition = 'transform 0.5s ease';
    });
  }

  // ==========================================
  // 10. Contact Form Submission (Express & MongoDB)
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Clear previous feedback
      formFeedback.className = 'form-feedback';
      formFeedback.textContent = '';
      formFeedback.style.display = 'none';
      
      // Get form fields
      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const subject = document.getElementById('form-subject').value.trim();
      const message = document.getElementById('form-message').value.trim();
      
      const submitBtn = contactForm.querySelector('.submit-btn');
      const originalBtnHtml = submitBtn.innerHTML;
      
      try {
        // Change button state
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending Inquiry... <span class="hero-tag-pulse" style="display:inline-block; width:6px; height:6px; background:#fff; border-radius:50%; margin-left:0.5rem; animation:pulseGlow 1s infinite;"></span>';
        
        // Determine the API URL: use local port 5000 if running locally, otherwise use relative path
        let apiUrl = '/api/contact';
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:') {
          apiUrl = 'http://localhost:5000/api/contact';
        }

        // POST to backend API
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, email, subject, message })
        });
        
        const result = await response.json();
        
        if (response.ok) {
          formFeedback.textContent = result.message || 'Thank you! Your message has been saved to the database.';
          formFeedback.classList.add('success');
          alert('Your message was successfully sent to the database!');
          contactForm.reset();
        } else {
          formFeedback.textContent = result.error || 'Failed to submit message. Please try again.';
          formFeedback.classList.add('error');
        }
      } catch (err) {
        console.error('Contact submission error:', err);
        formFeedback.textContent = 'Server connection error. Please ensure the backend is running.';
        formFeedback.classList.add('error');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
      }
    });
  }

});
