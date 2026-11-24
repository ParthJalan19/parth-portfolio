export const personalInfo = {
  name: "Parth S Jalan",
  preferredName: "Parth",
  title: "Creative Software Developer & Full Stack Engineer",
  subtitle: "Engineering responsive web applications, interactive 3D web experiences, and scalable digital solutions with modern frameworks.",
  brand: "PARTH JALAN",
  handle: "@parth_jalan",
  location: "Mumbai, India",
  availability: "Available for High-Impact SDE Roles & Freelance",
  status: "Open to New Opportunities",
  phone: "+91 7738704634",
  email: "parthjalan19@gmail.com",
  github: "https://github.com/ParthJalan19",
  githubUsername: "ParthJalan19",
  linkedin: "https://linkedin.com/in/parth-jalan-773870sm",
  portfolioUrl: "https://parthjalan-portfolio.netlify.app",
  bio: "Software developer with hands-on production experience building responsive web applications and user interfaces using JavaScript, React.js, Next.js, GSAP, and Tailwind CSS. Proficient in full-stack architecture, REST API design, database modeling (MongoDB, PostgreSQL, MySQL), and data analytics (Python, Power BI). Driven by craft, clean design systems, and silky-smooth user interactions.",
  highlights: [
    { label: "B.Tech CGPA", value: "8.3", desc: "Computer Engineering (Sem 6)" },
    { label: "Industry Experience", value: "3+", desc: "Software & Intern Roles" },
    { label: "Featured Projects", value: "10+", desc: "Production & 3D Interactive" },
    { label: "Core Competency", value: "Full Stack", desc: "React, Next.js, Python, SQL" }
  ]
};

export const experiences = [
  {
    id: "andevents",
    role: "Jr. Software Developer",
    company: "ANDEvents",
    period: "20 July 2026 – Present",
    type: "Current Role",
    badge: "Active",
    description: "Contributing to enterprise software development activities, core frontend application architecture, and team delivery workflows in an agile environment.",
    skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "REST APIs", "Git"],
    achievements: [
      "Contributing to software development activities and client-facing digital platforms in a professional team environment.",
      "Collaborating on responsive UI component libraries and modular frontend architectures.",
      "Ensuring code maintainability, cross-browser consistency, and rapid feature rollouts."
    ]
  },
  {
    id: "bluestock",
    role: "Software Development Engineer (SDE) Intern",
    company: "Bluestock Fintech",
    period: "January 2026 – February 2026",
    type: "Internship",
    badge: "Fintech",
    description: "Engineered fintech platform solutions, streamlined application performance, supported debugging, and actively participated in Agile/SDLC sprints.",
    skills: ["React.js", "State Management", "Performance Optimization", "Agile/SDLC", "Debugging"],
    achievements: [
      "Assisted with the end-to-end design, development, and maintenance of fintech software applications.",
      "Supported debugging, comprehensive testing, and application performance improvements for data-heavy views.",
      "Collaborated closely with senior developers to implement critical features and resolve technical issues.",
      "Gained deep practical exposure to the Software Development Lifecycle (SDLC) and agile sprint practices."
    ]
  },
  {
    id: "elevanceskills",
    role: "Full Stack Development Intern",
    company: "ElevanceSkills",
    period: "February 2026 – May 2026",
    type: "Internship",
    badge: "Full Stack",
    description: "Built and maintained responsive full-stack web applications, integrating user interfaces with backend databases and version-controlled deployments.",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Databases", "Version Control"],
    achievements: [
      "Developed and maintained high-performance responsive web applications using modern web technologies.",
      "Contributed across frontend UI/UX and backend API development for scalable web-based solutions.",
      "Implemented clean component hierarchies, structured database operations, and Git workflows."
    ]
  }
];

export const projects = [
  {
    id: "3d-fanta-website",
    title: "3D Fanta Product Showcase",
    category: "3D & Creative Web",
    tagline: "Interactive 3D scroll-driven product experience built with GSAP and Three.js.",
    description: "An immersive, scroll-triggered 3D beverage showcase featuring dynamic bottle kinematics, fluid flavor choreography, and lighting transitions synchronized to viewport scroll.",
    technologies: ["React.js", "GSAP", "Three.js", "ScrollTrigger", "Tailwind CSS"],
    features: [
      "Scroll-driven 3D animation choreography with high-fps timeline synchronization.",
      "Dynamic lighting, depth of field effects, and smooth camera angle shifts.",
      "Fully responsive layout optimized for desktop, tablet, and mobile touch interactions."
    ],
    demo: "https://3d-fanta-website.netlify.app/",
    featured: true,
    visualType: "3d-interactive",
    color: "from-amber-500/20 via-orange-500/20 to-red-500/20",
    glowColor: "rgba(245, 158, 11, 0.4)",
    statBadge: "Cinematic GSAP 3D"
  },
  {
    id: "iron-pulse-fitnes",
    title: "Iron Pulse Gym & Fitness",
    category: "Full Stack Web Apps",
    tagline: "High-energy fitness platform with workout programs, trainer rosters, and membership portals.",
    description: "A production-grade fitness and wellness platform designed with mobile-first responsiveness, smooth animated transitions, and interactive sections for workout programs and trainers.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "REST APIs", "Modern UI"],
    features: [
      "Modular component architecture for memberships, trainer profiles, and service cards.",
      "High-performance responsive UI with dynamic session filters and modern typography.",
      "Silky-smooth scrolling, intuitive micro-animations, and clean touch-friendly UI."
    ],
    demo: "https://iron-pulse-fitnes.netlify.app/",
    featured: true,
    visualType: "fitness-platform",
    color: "from-rose-500/20 via-red-500/20 to-amber-500/20",
    glowColor: "rgba(244, 63, 94, 0.4)",
    statBadge: "Fitness Platform"
  },
  {
    id: "stockpilot-io",
    title: "Stock Pilot Financial Analytics",
    category: "Fintech & Analytics",
    tagline: "Stock market intelligence platform with live chart telemetry and predictive analytics.",
    description: "Real-time fintech dashboard tracking equity indices, technical candlestick formations, and market telemetry with sub-second data streaming views.",
    technologies: ["React.js", "Financial APIs", "Chart.js", "Tailwind CSS", "State Management"],
    features: [
      "Real-time stock ticker updates and technical candlestick chart visualizations.",
      "Market screener with multi-factor filtration across volatility, volume, and sector.",
      "Ultra-responsive desktop and mobile financial analytics dashboard."
    ],
    demo: "https://stockpilot-io.netlify.app/",
    featured: true,
    visualType: "fintech-analytics",
    color: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    glowColor: "rgba(16, 185, 129, 0.4)",
    statBadge: "Fintech Telemetry"
  },
  {
    id: "saffron-table",
    title: "Saffron Table Fine Dining",
    category: "Full Stack Web Apps",
    tagline: "Luxury culinary dining experience with digital table reservations and interactive gourmet menus.",
    description: "High-end restaurant web platform delivering immersive sensory visuals, digital reservation booking workflows, and interactive dietary menu filtering.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Booking APIs", "UI/UX"],
    features: [
      "Interactive gourmet menu with dietary filtration and dynamic dish spotlighting.",
      "Streamlined real-time table reservation and guest booking pipeline.",
      "Warm luxury editorial styling with smooth ambient micro-interactions."
    ],
    demo: "https://saffron-table.netlify.app/",
    featured: true,
    visualType: "saffron-table",
    color: "from-amber-600/20 via-orange-500/20 to-yellow-500/20",
    glowColor: "rgba(217, 119, 6, 0.4)",
    statBadge: "Fine Dining UI"
  },
  {
    id: "parth-portfolio",
    title: "Parth Jalan Editorial Portfolio",
    category: "3D & Creative Web",
    tagline: "Award-winning streetwear editorial developer portfolio with 3D turnaround and interactive GSAP animations.",
    description: "Cutting-edge personal portfolio inspired by modern luxury streetwear lookbooks, featuring a 3D 360° avatar turnaround, torn paper marquee, and horizontal scroll experience runway.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion", "GSAP", "3D Turnaround"],
    features: [
      "Streetwear editorial design system with 3D 360° avatar turnaround and torn paper marquee.",
      "Pinned horizontal scroll-driven experience runway and 3D arc project carousel.",
      "Production-grade performance scoring 95+ across Google Lighthouse metrics."
    ],
    demo: "https://parthjalan-portfolio.netlify.app/",
    featured: true,
    visualType: "portfolio-showcase",
    color: "from-zinc-800/20 via-neutral-700/20 to-stone-500/20",
    glowColor: "rgba(24, 24, 27, 0.4)",
    statBadge: "3D Lookbook Editorial"
  },
  {
    id: "edusphere-erp",
    title: "EduCampus / EduSphere ERP",
    category: "Enterprise SaaS & ERP",
    tagline: "Comprehensive campus management ERP with student rosters, academic tracking, and administrative portals.",
    description: "Enterprise education resource planning system built for universities and academies, managing student lifecycles, faculty scheduling, fee structures, and attendance.",
    technologies: ["React.js", "Tailwind CSS", "RESTful APIs", "Role-Based Access", "Data Tables"],
    features: [
      "Multi-tier administrative dashboard for admissions, grading, attendance, and faculty records.",
      "Role-based authentication architecture ensuring secure data partitioning.",
      "Dynamic data tables with instant search, bulk filtering, and report generation."
    ],
    demo: "https://edusphere-erp.netlify.app/",
    featured: false,
    visualType: "educampus-erp",
    color: "from-blue-600/20 via-indigo-500/20 to-violet-500/20",
    glowColor: "rgba(37, 99, 235, 0.4)",
    statBadge: "Campus ERP Platform"
  },
  {
    id: "nexovain-crm",
    title: "Nexovain CRM & Business Intelligence",
    category: "Enterprise SaaS & ERP",
    tagline: "Modular enterprise customer relationship platform with lead pipelines, analytics, and team workflows.",
    description: "Modern enterprise CRM solution equipped with visual deal stages, customer telemetry tracking, automated follow-up cadences, and conversion analytics.",
    technologies: ["React.js", "Next.js", "REST APIs", "Tailwind CSS", "Analytics Engine"],
    features: [
      "Interactive Kanban sales pipeline with drag-and-drop lead stage management.",
      "Real-time conversion analytics, revenue forecasting, and activity tracking feeds.",
      "Team collaboration tools with customer communication history and automated reminders."
    ],
    demo: "https://nexovain-crm.netlify.app/",
    featured: false,
    visualType: "nexovain-crm",
    color: "from-violet-600/20 via-purple-500/20 to-fuchsia-500/20",
    glowColor: "rgba(147, 51, 234, 0.4)",
    statBadge: "Enterprise CRM"
  },
  {
    id: "medcarepluss",
    title: "MedCarePlus Healthcare Portal",
    category: "Full Stack Web Apps",
    tagline: "Patient-first digital healthcare system with doctor scheduling, telemedicine, and medical records.",
    description: "A centralized digital health portal allowing patients to discover doctors, book consultation slots, access diagnostic reports, and manage health insurance records.",
    technologies: ["React.js", "Tailwind CSS", "Appointment Engine", "REST APIs", "Healthcare UI"],
    features: [
      "Doctor consultation booking engine with real-time specialty filtering and slot booking.",
      "Secure digital medical record storage and prescription review dashboard.",
      "Accessible, empathetic healthcare design system compliant with high-contrast UI standards."
    ],
    demo: "https://medcarepluss.netlify.app/",
    featured: false,
    visualType: "medcare-plus",
    color: "from-teal-500/20 via-emerald-500/20 to-cyan-500/20",
    glowColor: "rgba(20, 184, 166, 0.4)",
    statBadge: "HealthTech Portal"
  },
  {
    id: "skilineestate",
    title: "Skiline Estate Real Estate",
    category: "Full Stack Web Apps",
    tagline: "Modern luxury property acquisition platform with interactive filtration and virtual property showcases.",
    description: "Intuitive real estate browsing and property acquisition platform featuring multi-parameter search filtering, high-resolution interactive galleries, and verified listings.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "Interactive Maps", "REST APIs"],
    features: [
      "Multi-parameter property search and filtration by price range, neighborhood, and amenities.",
      "High-resolution property detail viewports with panoramic photo galleries and inquiry modals.",
      "Lightweight, snappy frontend architecture optimized for mobile homebuyers."
    ],
    demo: "https://skilineestate.netlify.app/",
    featured: false,
    visualType: "real-estate",
    color: "from-sky-500/20 via-blue-500/20 to-indigo-500/20",
    glowColor: "rgba(56, 189, 248, 0.4)",
    statBadge: "PropTech Platform"
  },
  {
    id: "jacketscrolleffect",
    title: "Streetwear Clothing & Jacket Scroll",
    category: "3D & Creative Web",
    tagline: "Kinetic streetwear fashion showcase with interactive jacket scroll choreography and 3D product inspection.",
    description: "High-octane e-commerce showcase demonstrating frame-by-frame 3D jacket inspection driven by user scroll, dynamic fit selectors, and tactile streetwear typography.",
    technologies: ["React.js", "GSAP ScrollTrigger", "Tailwind CSS", "Canvas Animations"],
    features: [
      "Scroll-driven canvas frame sequencing showcasing multi-angle apparel inspection.",
      "Futuristic cyberpunk streetwear aesthetics with interactive colorway selectors.",
      "Silky smooth 60fps scroll transitions optimized for modern GPUs."
    ],
    demo: "https://jacketscrolleffect.netlify.app/",
    featured: false,
    visualType: "jacket-scroll",
    color: "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
    glowColor: "rgba(249, 115, 22, 0.4)",
    statBadge: "Kinetic Streetwear"
  }
];

export const skillCategories = [
  {
    category: "Frontend & Web Animations",
    icon: "Layout",
    description: "Building responsive, silky-smooth, fluid interfaces and design systems.",
    skills: [
      { name: "React.js", level: "Advanced", hot: true },
      { name: "Next.js", level: "Proficient", hot: true },
      { name: "JavaScript (ES6+)", level: "Advanced", hot: true },
      { name: "Tailwind CSS", level: "Advanced", hot: true },
      { name: "GSAP / Animations", level: "Proficient", hot: true },
      { name: "HTML5 / CSS3", level: "Expert" },
      { name: "React Router", level: "Proficient" },
      { name: "Responsive UI/UX", level: "Advanced" },
      { name: "REST APIs / Fetch", level: "Advanced" },
      { name: "WordPress / jQuery", level: "Comfortable" }
    ]
  },
  {
    category: "Programming & Backend",
    icon: "Code",
    description: "Core algorithms, object-oriented software design, and backend structures.",
    skills: [
      { name: "Java (Core & Adv)", level: "Advanced", hot: true },
      { name: "Python", level: "Proficient", hot: true },
      { name: "SQL", level: "Advanced", hot: true },
      { name: "C Language", level: "Proficient" },
      { name: "OOP & Data Structures", level: "Advanced" },
      { name: "SDLC & Agile", level: "Proficient" }
    ]
  },
  {
    category: "Databases & Cloud",
    icon: "Database",
    description: "Data persistence, schema design, and cloud storage architectures.",
    skills: [
      { name: "MongoDB Atlas", level: "Advanced", hot: true },
      { name: "PostgreSQL", level: "Proficient", hot: true },
      { name: "MySQL", level: "Advanced" },
      { name: "SQL Server", level: "Proficient" },
      { name: "SQLite", level: "Proficient" },
      { name: "DBMS Concepts", level: "Advanced" }
    ]
  },
  {
    category: "Data Analytics & Insights",
    icon: "BarChart3",
    description: "Transforming raw data into clear business intelligence dashboards.",
    skills: [
      { name: "Power BI", level: "Proficient", hot: true },
      { name: "Tableau", level: "Proficient", hot: true },
      { name: "Advanced Excel", level: "Advanced" },
      { name: "Pandas & NumPy", level: "Proficient" },
      { name: "Matplotlib & Seaborn", level: "Proficient" },
      { name: "KPI Dashboards", level: "Advanced" },
      { name: "Exploratory Data Analysis", level: "Advanced" }
    ]
  },
  {
    category: "Developer Tools & AI",
    icon: "Wrench",
    description: "Modern productivity accelerators and collaboration workflows.",
    skills: [
      { name: "Git & GitHub", level: "Advanced", hot: true },
      { name: "VS Code", level: "Expert" },
      { name: "Postman", level: "Proficient" },
      { name: "GitHub Copilot", level: "Advanced" },
      { name: "AI-Augmented Dev", level: "Advanced" }
    ]
  }
];

export const education = {
  degree: "Bachelor of Technology in Computer Engineering",
  institution: "Shah and Anchor Kutchhi Engineering College, Mumbai",
  duration: "August 2023 – May 2027",
  cgpa: "8.3 (through Semester 6)",
  highlights: [
    "Focus on Software Engineering, Data Structures, Algorithms, and Database Management.",
    "Active participant in technical symposiums, hackathons, and creative software builds.",
    "Consistent high academic standing across engineering semesters."
  ]
};

export const certifications = [
  { name: "Java Programming", issuer: "Technical Certification", year: "2024", badge: "Core Java" },
  { name: "Python Programming", issuer: "Technical Certification", year: "2024", badge: "Python" },
  { name: "Advanced Excel", issuer: "Data Analytics Institute", year: "2024", badge: "Analytics" },
  { name: "MySQL & Database Engineering", issuer: "Database Systems", year: "2024", badge: "SQL" },
  { name: "Full Stack Web Development", issuer: "Web Tech Program", year: "2024", badge: "Web Dev" },
  { name: "C Programming Specialization", issuer: "Computer Science Dept", year: "2023", badge: "Systems" },
  { name: "Data Analytics Mastery", issuer: "Analytics Academy", year: "2024", badge: "Data" },
  { name: "SIP Certification", issuer: "Industry Program", year: "2024", badge: "Professional" }
];

export const testimonials = [
  {
    quote: "Parth's sharp eye for interface precision, smooth micro-interactions, and reliable engineering made delivering our web solutions effortless.",
    author: "Technical Team Lead",
    role: "Engineering Mentor",
    company: "Bluestock Fintech"
  },
  {
    quote: "A remarkably proactive developer who bridges design aesthetics with solid backend and database logic. Always goes the extra mile.",
    author: "Project Manager",
    role: "Full Stack Division",
    company: "ElevanceSkills"
  }
];
