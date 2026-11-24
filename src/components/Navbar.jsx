import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: "home", name: "Home", href: "#home" },
    { id: "about", name: "About", href: "#about" },
    { id: "experience", name: "Experience", href: "#experience" },
    { id: "projects", name: "Projects", href: "#projects" },
    { id: "skills", name: "Skills", href: "#skills" },
    { id: "contact", name: "Contact", href: "#contact" }
  ];

  // Dynamic Scroll Spy: Updates active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];

      // At bottom of page: highlight contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70) {
        setActiveSection('contact');
        return;
      }

      // Near top of page: highlight home
      if (window.scrollY < 120) {
        setActiveSection('home');
        return;
      }

      // Check section bounding rects
      let currentSection = 'home';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // When top of section enters upper 45% of screen and hasn't scrolled completely off
          if (rect.top <= window.innerHeight * 0.45 && rect.bottom > 80) {
            currentSection = id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -85; // 85px headroom so fixed navbar doesn't clip top headings
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1400px] h-20 flex items-center justify-between">
        
        {/* Brand Logo - FYNVERSE Style Striped Circle Icon */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home', 'home')}
          className="flex items-center gap-2.5 group shrink-0 whitespace-nowrap"
        >
          <svg className="w-6 h-6 text-zinc-950 transition-transform group-hover:rotate-45 duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="10" />
            <line x1="8" y1="5" x2="8" y2="19" strokeWidth="2" />
            <line x1="12" y1="2" x2="12" y2="22" strokeWidth="2" />
            <line x1="16" y1="5" x2="16" y2="19" strokeWidth="2" />
          </svg>
          <span className="font-display font-black text-xl tracking-wider uppercase text-zinc-950">
            {personalInfo.brand}
          </span>
        </a>

        {/* Desktop Navigation Links: Visible from lg (1024px+), tablets/mobile use mobile drawer */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-11 2xl:gap-14">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                className={`text-base lg:text-[17px] font-semibold tracking-tight transition-all duration-200 relative py-1.5 whitespace-nowrap ${
                  isActive 
                    ? 'text-zinc-950 font-black' 
                    : 'text-zinc-500 hover:text-zinc-950'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-zinc-950 rounded-full animate-in fade-in zoom-in-95 duration-200" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile / Tablet Hamburger Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-zinc-800 hover:text-zinc-950 p-2 rounded-xl hover:bg-zinc-100 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile / Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md px-6 py-5 shadow-xl animate-in slide-in-from-top-3 duration-200 border-b border-zinc-100">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`py-2 text-lg font-bold flex items-center justify-between ${
                    isActive ? 'text-zinc-950' : 'text-zinc-500'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-zinc-950" />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
