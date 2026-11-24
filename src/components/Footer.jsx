import React from 'react';
import { 
  ArrowUp, 
  MapPin, 
  Mail, 
  Phone
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative pt-10 pb-8 sm:pt-12 sm:pb-10 overflow-hidden bg-[#faf8f5] text-zinc-950">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-[1400px]">
        
        {/* =========================================================================
            FOOTER MAIN GRID (Brand Info, Quick Links, Address - Services Removed)
        ========================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-8 sm:pb-9 border-b border-zinc-200/80">
          
          {/* Column 1: Brand Logo, Subtitle & Bio (Col span 6) */}
          <div className="md:col-span-6 flex flex-col justify-start">
            <div className="flex items-center gap-2.5 mb-3">
              <svg className="w-6 h-6 text-zinc-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <line x1="8" y1="5" x2="8" y2="19" strokeWidth="2" />
                <line x1="12" y1="2" x2="12" y2="22" strokeWidth="2" />
                <line x1="16" y1="5" x2="16" y2="19" strokeWidth="2" />
              </svg>
              <span className="font-display font-black text-xl tracking-wider uppercase text-zinc-950">
                {personalInfo.brand}
              </span>
            </div>

            <div className="text-sm font-bold text-zinc-900 mb-2">
              Parth S Jalan | Software Developer
            </div>

            <p className="text-xs text-zinc-500 font-normal leading-relaxed max-w-md">
              I specialize in web development, focusing on creating dynamic and visually stunning digital solutions. Let me bring your ideas to life.
            </p>
          </div>

          {/* Column 2: Quick Links (Col span 3) */}
          <div className="md:col-span-3">
            <h4 className="font-sans font-bold text-sm text-zinc-950 mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-600">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="hover:text-zinc-950 transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Address & Direct Contact (Col span 3) */}
          <div className="md:col-span-3">
            <h4 className="font-sans font-bold text-sm text-zinc-950 mb-4 tracking-wide">
              Address
            </h4>
            <div className="space-y-3.5 text-xs text-zinc-600">
              
              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-zinc-950 shrink-0 mt-0.5" />
                <span className="leading-snug font-medium text-zinc-800">
                  Mumbai, Maharashtra, India
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-zinc-950 shrink-0" />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-zinc-950 transition-colors truncate font-medium text-zinc-800"
                >
                  {personalInfo.email}
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-zinc-950 shrink-0" />
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="hover:text-zinc-950 transition-colors font-mono font-medium text-zinc-800"
                >
                  {personalInfo.phone}
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* =========================================================================
            BOTTOM SUB-STRIP: Copyright & Social Links
        ========================================================================== */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            Copyright © 2026 {personalInfo.name} | All Rights Reserved
          </div>

          <div className="flex items-center gap-6">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-950 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-950 transition-colors"
            >
              GitHub
            </a>
            <a
              href={personalInfo.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-950 transition-colors"
            >
              Netlify
            </a>
            <a
              href="https://wa.me/917738704634"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-950 transition-colors"
            >
              WhatsApp
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:border-zinc-400 shadow-2xs transition-all ml-2"
              title="Scroll to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
