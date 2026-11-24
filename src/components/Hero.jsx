import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowUpRight, 
  Play, 
  Globe
} from 'lucide-react';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const heroRef = useRef(null);

  // 4 Auto-cycling roles matching Parth Jalan's expertise
  const roles = [
    { 
      primary: "software", 
      secondary: "developer", 
      cardTitle: "Software Developer",
      tagline: "Scalable Full Stack Architecture & High-Performance Engineering",
      badge: "SDE DROP 2026 +"
    },
    { 
      primary: "web", 
      secondary: "developer", 
      cardTitle: "Web Developer",
      tagline: "Production Next.js, React Applications & Fluid Interactions",
      badge: "WEB DROP 2026 +"
    },
    { 
      primary: "ui / ux", 
      secondary: "designer", 
      cardTitle: "UI / UX Designer",
      tagline: "Modern Design Systems, Silky Micro-Interactions & Clean UI",
      badge: "DESIGN DROP 2026 +"
    },
    { 
      primary: "full", 
      secondary: "stack", 
      cardTitle: "Full Stack Engineer",
      tagline: "Robust Cloud APIs, Modern Databases & 60fps Frontend Motion",
      badge: "FULL STACK 2026 +"
    }
  ];

  // Auto-cycle role every 3.2 seconds unless paused on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isPaused, roles.length]);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setIsPaused(false);
  };

  const currentRole = roles[activeRoleIndex];

  return (
    <section 
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100dvh] lg:h-screen lg:min-h-[660px] lg:max-h-[960px] pt-28 sm:pt-32 lg:pt-20 pb-8 sm:pb-10 lg:pb-4 flex flex-col justify-between overflow-x-hidden lg:overflow-hidden bg-white select-none"
    >
      {/* ================= BACKGROUND AUTHENTIC STREETWEAR PAINT BRUSH SPLASH (FYNVERSE MATCH) ================= */}
      <div 
        className="pointer-events-none absolute top-[44%] sm:top-[46%] lg:top-[47%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] sm:w-[800px] md:w-[1000px] lg:w-[1400px] xl:w-[1550px] h-[340px] sm:h-[480px] md:h-[560px] lg:h-[680px] z-0 transition-transform duration-700 ease-out select-none"
        style={{
          transform: `translate(-50%, -50%) translate3d(${-mousePos.x * 12}px, ${-mousePos.y * 8}px, 0)`
        }}
      >
        <svg viewBox="0 0 1300 700" className="w-full h-full fill-[#eadbc8]">
          <defs>
            <filter id="brushRoughness" x="-5%" y="-5%" width="110%" height="110%">
              <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>

          {/* Group with roughness filter to simulate dry paint edges & angled streetwear brush sweep */}
          <g filter="url(#brushRoughness)" transform="rotate(-3 650 350)">
            {/* Primary bold sweeping acrylic paint stroke - asymmetric diagonal flow */}
            <path 
              d="M 140,380 
                 C 170,260 270,185 390,155 
                 C 510,125 660,115 800,105 
                 C 940,95 1090,130 1180,190 
                 C 1240,230 1260,300 1220,380 
                 C 1170,470 1060,535 940,575 
                 C 810,615 650,625 500,605 
                 C 370,590 260,560 180,490 
                 C 120,440 125,405 140,380 Z" 
              fill="#ebdccb" 
              opacity="0.95" 
            />

            {/* Upper-right brush sweep flare (rising behind shoulder like FYNVERSE) */}
            <path 
              d="M 720,110 
                 C 860,85 1020,95 1160,135 
                 C 1240,160 1280,205 1270,255 
                 C 1240,250 1180,215 1100,180 
                 C 980,135 840,120 720,110 Z" 
              fill="#dfceba" 
              opacity="0.85" 
            />

            {/* Bottom-left dry bristle drag trails */}
            <path 
              d="M 170,480 
                 C 290,560 430,605 590,625 
                 C 740,640 900,615 1040,560 
                 C 1070,545 1020,575 940,600 
                 C 810,635 650,635 490,610 
                 C 340,585 230,540 170,480 Z" 
              fill="#e3d2be" 
              opacity="0.9" 
            />

            {/* Distinct dry brush bristle lines at extremities */}
            <path d="M 100,360 Q 180,330 280,310" stroke="#ebdccb" strokeWidth="12" strokeLinecap="round" fill="none" opacity="0.7" />
            <path d="M 80,400 Q 150,380 230,370" stroke="#dfceba" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.6" />
            <path d="M 120,430 Q 190,420 260,420" stroke="#e5d5c2" strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.5" />
            
            <path d="M 1140,260 Q 1230,290 1280,330" stroke="#dfceba" strokeWidth="9" strokeLinecap="round" fill="none" opacity="0.75" />
            <path d="M 1170,330 Q 1240,365 1270,410" stroke="#ebdccb" strokeWidth="12" strokeLinecap="round" fill="none" opacity="0.7" />
            <path d="M 1120,410 Q 1190,450 1240,490" stroke="#e5d5c2" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.65" />
          </g>

          {/* Streetwear paint splatter dots & flick specks */}
          <circle cx="75" cy="340" r="14" fill="#dfceba" opacity="0.7" />
          <circle cx="55" cy="395" r="7" fill="#e5d5c2" opacity="0.6" />
          <circle cx="95" cy="445" r="16" fill="#ebdccb" opacity="0.65" />
          <circle cx="140" cy="235" r="11" fill="#dfceba" opacity="0.55" />
          <circle cx="220" cy="150" r="9" fill="#e5d5c2" opacity="0.6" />
          <circle cx="330" cy="95" r="11" fill="#dfceba" opacity="0.65" />
          <circle cx="680" cy="70" r="9" fill="#ebdccb" opacity="0.55" />
          <circle cx="1020" cy="110" r="14" fill="#dfceba" opacity="0.6" />
          <circle cx="1120" cy="150" r="16" fill="#e5d5c2" opacity="0.65" />
          <circle cx="1210" cy="205" r="10" fill="#dfceba" opacity="0.7" />
          <circle cx="1265" cy="290" r="13" fill="#ebdccb" opacity="0.55" />
          <circle cx="1280" cy="400" r="15" fill="#dfceba" opacity="0.6" />
          <circle cx="1220" cy="495" r="14" fill="#e5d5c2" opacity="0.65" />
          <circle cx="1150" cy="565" r="11" fill="#dfceba" opacity="0.55" />
          <circle cx="1030" cy="620" r="13" fill="#ebdccb" opacity="0.6" />
          <circle cx="870" cy="640" r="9" fill="#dfceba" opacity="0.5" />
          <circle cx="370" cy="620" r="12" fill="#e5d5c2" opacity="0.55" />
          <circle cx="240" cy="575" r="15" fill="#dfceba" opacity="0.65" />
        </svg>
      </div>

      {/* ================= MAIN HERO CONTAINER ================= */}
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-[1360px] relative z-10 flex-1 flex flex-col justify-between pt-1">
        
        {/* Tightly Connected 3-Zone Grid: Left Typography, Big Middle Avatar, Right Auto-Role */}
        <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 items-center flex-1 my-3 lg:my-auto gap-6 lg:gap-0">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end z-10 order-1 pt-2 lg:pt-0 lg:pr-4 xl:pr-6 text-center lg:text-right">
            <div className="w-full max-w-sm sm:max-w-md flex flex-col items-center lg:items-end text-center lg:text-right">
              {/* Monospace Tag (Direct FYNVERSE Match) */}
              <div className="text-xs sm:text-sm font-mono tracking-wider text-zinc-500 uppercase mb-2">
                // NEW ARRIVAL 2026
              </div>

              {/* BIG BOLD Lowercase Typography: "parth" (Black) & "-jalan" (Slate Gray) */}
              <div className="flex flex-col items-center lg:items-end -space-y-3 sm:-space-y-5 lg:-space-y-7 xl:-space-y-8 mb-2 sm:mb-4">
                <span className="font-sans font-black text-5xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[98px] 2xl:text-[108px] tracking-tight leading-[0.84] text-zinc-950">
                  parth
                </span>
                <span className="font-sans font-black text-5xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[98px] 2xl:text-[108px] tracking-tight leading-[0.84] text-[#71717a]">
                  -jalan
                </span>
              </div>

              {/* Mobile / Tablet Role Interactive Pill */}
              <div 
                onClick={() => setActiveRoleIndex((prev) => (prev + 1) % roles.length)}
                className="lg:hidden inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100/90 border border-zinc-200/90 my-2 cursor-pointer text-xs font-mono select-none"
                title="Tap to cycle active role"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-zinc-500 uppercase">{currentRole.badge}:</span>
                <span className="font-bold text-zinc-950">{currentRole.cardTitle}</span>
              </div>

              {/* Subtitle / Description */}
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed max-w-xs sm:max-w-sm mb-4 font-normal text-center lg:text-right">
                Software developer, web developer, and UI/UX designer crafting high-performance digital products and silky web experiences.
              </p>

              {/* Solid Black Pill Button - Desktop */}
              <a
                href="#projects"
                className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-xs sm:text-sm tracking-tight shadow-md hover:shadow-lg transition-all duration-300 w-max group"
              >
                <span>Discover The Projects</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* ================= BIG PROPERLY ALIGNED CENTER AVATAR ================= */}
          <div className="lg:col-span-4 relative flex items-end justify-center z-20 order-2 px-1 pointer-events-none self-end h-full my-2 lg:my-0">
            <div 
              className="relative transition-transform duration-300 ease-out flex justify-center pointer-events-auto cursor-grab active:cursor-grabbing -translate-x-0 lg:-translate-x-2"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 4}deg) rotateX(${-mousePos.y * 4}deg) translate3d(${mousePos.x * 8}px, ${mousePos.y * 5}px, 0)`
              }}
            >
              <img 
                src="/parth-streetwear.png" 
                alt="Parth Jalan Streetwear Cutout" 
                className="w-auto h-[320px] sm:h-[400px] md:h-[480px] lg:h-[630px] xl:h-[680px] 2xl:h-[720px] max-h-[55vh] lg:max-h-[74vh] max-w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)] select-none transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div 
            className="lg:col-span-4 flex flex-col justify-center items-center lg:items-start z-10 order-3 text-center lg:text-left pt-2 lg:pt-0 lg:pl-4 xl:pl-6 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Top Right: Rotating Circular Stamp Badge (Built Different) */}
            <div className="hidden lg:flex absolute -top-12 sm:-top-14 right-2 xl:right-4 items-center justify-end pointer-events-none">
              <div className="relative w-18 h-18 xl:w-20 xl:h-20 flex items-center justify-center">
                <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                  <path
                    id="stampCirclePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[7.2px] font-mono uppercase tracking-[0.22em] fill-zinc-800 font-bold">
                    <textPath href="#stampCirclePath" startOffset="0%">
                      • BUILT DIFFERENT • MADE TO STAND OUT •
                    </textPath>
                  </text>
                </svg>

                <div className="absolute inset-0 flex items-center justify-center text-zinc-700">
                  <svg className="w-4 h-4 xl:w-4.5 xl:h-4.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Desktop Auto-Changing Role Typography */}
            <div 
              key={activeRoleIndex}
              onClick={() => setActiveRoleIndex((prev) => (prev + 1) % roles.length)}
              className="hidden lg:flex flex-col items-start -space-y-4 sm:-space-y-6 lg:-space-y-7 xl:-space-y-8 mb-3 sm:mb-4 w-full cursor-pointer animate-in fade-in duration-300"
              title="Click to cycle role"
            >
              <span className="font-sans font-black text-6xl sm:text-7xl lg:text-[76px] xl:text-[88px] 2xl:text-[98px] tracking-tight leading-[0.84] text-[#71717a]">
                {currentRole.primary}
              </span>
              <span className="font-sans font-black text-6xl sm:text-7xl lg:text-[76px] xl:text-[88px] 2xl:text-[98px] tracking-tight leading-[0.84] text-zinc-950">
                {currentRole.secondary}
              </span>
            </div>

            {/* Desktop Subtitle Underneath Role */}
            <p className="hidden lg:block text-zinc-600 text-xs sm:text-sm leading-relaxed max-w-xs sm:max-w-sm mb-4 font-normal text-left">
              {currentRole.tagline}
            </p>

            {/* Solid Black Pill Button - Mobile / Tablet */}
            <a
              href="#projects"
              className="inline-flex lg:hidden items-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-xs sm:text-sm tracking-tight shadow-md hover:shadow-lg transition-all duration-300 w-max group mb-4"
            >
              <span>Discover The Projects</span>
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Floating Mini-Card / Preview Widget (Direct FYNVERSE Match) */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-3.5 border border-zinc-200/90 shadow-[0_12px_30px_-8px_rgba(0,0,0,0.08)] flex items-center gap-3 sm:gap-3.5 w-full sm:w-auto max-w-sm transition-all duration-300 hover:shadow-[0_18px_40px_-8px_rgba(0,0,0,0.12)] hover:-translate-y-1 text-left mx-auto lg:mx-0">
              <div className="flex flex-col">
                <span className="text-[9px] sm:text-[10px] font-mono tracking-wider uppercase text-zinc-400 font-semibold mb-0.5">
                  {currentRole.badge}
                </span>
                <h3 className="font-sans font-bold text-xs sm:text-sm text-zinc-950 leading-snug">
                  {currentRole.cardTitle}
                </h3>
                <span className="text-[10px] sm:text-[11px] text-zinc-500 font-medium mb-1.5 sm:mb-2">
                  Available for High-Impact Roles
                </span>
                
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 hover:text-zinc-600 transition-colors w-max"
                >
                  <Play size={9} className="fill-current" />
                  <span>Explore Featured Work</span>
                </a>
              </div>

              {/* Small Thumbnail Card with Parth in Hoodie */}
              <div className="w-14 h-18 sm:w-16 sm:h-20 rounded-xl sm:rounded-2xl bg-[#efe5d8] overflow-hidden shrink-0 border border-zinc-100 flex items-center justify-center">
                <img 
                  src="/parth-streetwear.png" 
                  alt="Thumbnail Preview" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

          </div>

        </div>

        {/* ================= BOTTOM BAR (Stats on Left, Worldwide Shipping & Dots on Right) ================= */}
        <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 items-end pt-5 sm:pt-6 lg:pt-4 pb-1 border-t border-zinc-100 lg:border-t-0 gap-4 lg:gap-0">
          
          {/* Bottom Left Metrics (3+ Industry Roles, 8.3 CGPA, 10+ Projects) */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-3 sm:gap-6 text-center lg:text-left">
            <div>
              <div className="font-sans font-black text-xl sm:text-2xl text-zinc-950">
                3+
              </div>
              <div className="text-[11px] sm:text-xs text-zinc-500 font-medium leading-tight mt-0.5">
                Industry <br /> Engagements
              </div>
            </div>

            <div>
              <div className="font-sans font-black text-xl sm:text-2xl text-zinc-950 flex items-center justify-center lg:justify-start gap-1">
                <span>8.3</span>
                <span className="text-amber-500 text-lg leading-none">★</span>
              </div>
              <div className="text-[11px] sm:text-xs text-zinc-500 font-medium leading-tight mt-0.5">
                B.Tech CGPA <br /> (Computer Engg)
              </div>
            </div>

            <div>
              <div className="font-sans font-black text-xl sm:text-2xl text-zinc-950">
                10+
              </div>
              <div className="text-[11px] sm:text-xs text-zinc-500 font-medium leading-tight mt-0.5">
                Production & <br /> Web Projects
              </div>
            </div>
          </div>

          {/* Center spacer */}
          <div className="hidden lg:block lg:col-span-2" />

          {/* Bottom Right Info (Worldwide Shipping & 4 Role Sync Pagination Dots) */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-center justify-between lg:justify-end gap-3 sm:gap-5 text-xs font-mono text-zinc-500 pt-2 lg:pt-0">
            <div className="flex items-center gap-2">
              <Globe size={13} className="text-zinc-600" />
              <span className="uppercase tracking-wider text-[10px] sm:text-xs">/ MUMBAI, INDIA • WORLDWIDE AVAILABILITY</span>
            </div>

            {/* Pagination Dots that indicate and control the active role */}
            <div className="flex items-center gap-1.5" title="Active role indicator">
              {roles.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveRoleIndex(idx);
                    setIsPaused(true);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    activeRoleIndex === idx
                      ? 'w-2.5 h-2.5 bg-zinc-950 scale-110'
                      : 'w-2 h-2 bg-zinc-300 hover:bg-zinc-400'
                  }`}
                  aria-label={`Switch to role ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
