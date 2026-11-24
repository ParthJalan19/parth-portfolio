import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { topTearPath, topTearLine, botTearPath, botTearLine } from '../data/tornPaths';

export default function About() {
  return (
    <section id="about" className="relative overflow-visible bg-[#faf8f5] select-none pt-4 sm:pt-6 lg:pt-8 pb-0">
      
      {/* ================= EDITORIAL GRAPH PAPER PATTERN ================= */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px] relative z-10 pb-10 sm:pb-14 lg:pb-16">
        
        {/* ================= COMPACT EDITORIAL POSTER HEADER ================= */}
        <div className="flex flex-col items-center justify-center text-center mb-4 sm:mb-6">
          
          {/* Top Info Bar */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-zinc-500 pb-2 gap-1.5">
            <span className="font-semibold text-zinc-900 text-center sm:text-left flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              CREATIVE SOFTWARE DEVELOPER & FULL STACK SDE
            </span>
            
            {/* Hand-drawn Signature & Scribble */}
            <div className="hidden sm:flex items-center gap-2">
              <span className="font-serif italic text-xs sm:text-sm text-zinc-800 font-bold tracking-normal">
                ~ Parth Jalan
              </span>
              <svg className="w-7 h-3.5 text-zinc-950" viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2,15 Q12,2 22,14 T38,8" />
              </svg>
            </div>

            <span className="font-semibold text-zinc-900 text-center sm:text-right">2026 EDITION • MUMBAI, IN</span>
          </div>

          {/* Star Dividers */}
          <div className="flex items-center justify-center gap-3 text-zinc-900 text-sm sm:text-base w-full pt-1.5 border-t border-zinc-200/80">
            <span>✦</span>
            <span className="text-base sm:text-lg">✦</span>
            <span>✦</span>
          </div>
        </div>

        {/* ================= BALANCED VIEWPORT-FITTED SCROLL REVEAL CARDS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 xl:gap-8 items-stretch overflow-hidden py-1">
          
          {/* ================= 1. AVATAR FROSTED GLASS DISPLAY (COL 5 / 12) ================= */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="relative w-full h-[460px] sm:h-[500px] lg:h-[520px] xl:h-[540px] rounded-3xl bg-white/45 backdrop-blur-2xl border border-white/80 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] flex flex-col justify-between items-center overflow-hidden p-4 sm:p-5 lg:p-6 select-none group">
              
              {/* Soft Ambient Inner Radiance */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-50"
                style={{
                  background: 'radial-gradient(ellipse at 50% 40%, rgba(255, 255, 255, 0.8) 0%, rgba(248, 244, 238, 0.3) 60%, transparent 100%)'
                }}
              />

              {/* Delicate Gloss Reflection Flare in Corner */}
              <div 
                className="absolute -top-16 -left-16 w-52 h-52 rounded-full opacity-40 pointer-events-none blur-2xl"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, transparent 70%)'
                }}
              />

              {/* Studio Grid Underlay */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-[0.035]"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #000000 1px, transparent 1px),
                    linear-gradient(to bottom, #000000 1px, transparent 1px)
                  `,
                  backgroundSize: '28px 28px'
                }}
              />

              {/* Top Studio Meta Badge */}
              <div className="w-full flex items-center justify-between z-10 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-zinc-900">PARTH JALAN • SDE</span>
                </span>
                <span className="text-zinc-500 font-medium">MUMBAI, IN</span>
              </div>

              {/* Full-Body Front-Facing Studio Cutout Image */}
              <div className="relative flex-1 flex items-end justify-center w-full z-10 my-1 overflow-hidden">
                {/* Natural Soft Contact Shadow Beneath Feet */}
                <div 
                  className="absolute bottom-1 w-44 sm:w-52 h-5 rounded-full opacity-25 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.45) 0%, transparent 70%)'
                  }}
                />

                <img 
                  src="/parth-front-studio.png" 
                  alt="Parth Jalan - Front Facing Full Body Streetwear Portrait" 
                  className="w-auto h-full max-h-[360px] sm:max-h-[390px] lg:max-h-[415px] xl:max-h-[435px] object-contain select-none transition-transform duration-500 group-hover:scale-[1.02] filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)]"
                />
              </div>

              {/* Bottom Card Footer */}
              <div className="w-full pt-2.5 border-t border-zinc-200/60 flex items-center justify-between z-10 text-[10px] font-mono text-zinc-500">
                <span>STREETWEAR TECH EDITION</span>
                <span className="text-zinc-700 font-semibold">2026</span>
              </div>
            </div>
          </motion.div>

          {/* ================= 2. INTRODUCTION FROSTED GLASS DISPLAY (COL 7 / 12) ================= */}
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="p-5 sm:p-7 lg:p-7 xl:p-8 rounded-3xl bg-white/55 backdrop-blur-2xl border border-white/80 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.95)] flex-1 h-[460px] sm:h-[500px] lg:h-[520px] xl:h-[540px] flex flex-col justify-between overflow-hidden">
              
              <div className="flex flex-col justify-between flex-1">
                {/* Top Dossier Pill Tag */}
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-zinc-200/60">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono tracking-wider text-zinc-500 uppercase">
                    <Sparkles size={13} className="text-emerald-500" />
                    <span className="font-semibold text-zinc-900">ABOUT // SDE PROFILE</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-white/80 border border-zinc-200/70 px-2.5 py-0.5 rounded-full text-zinc-800 shadow-2xs">
                    FULL STACK SDE
                  </span>
                </div>

                {/* Massive Bold Heading: HELLO */}
                <div>
                  <h3 className="font-sans font-black text-4xl sm:text-5xl lg:text-[54px] xl:text-6xl text-zinc-950 tracking-tight leading-none mb-1">
                    HELLO
                  </h3>

                  {/* Subtitle */}
                  <h4 className="text-xs sm:text-sm font-bold text-zinc-900 mb-2 flex items-center gap-1.5">
                    <span>Hi, I'm Parth S Jalan</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 inline-block" />
                  </h4>

                  {/* Bio Paragraph */}
                  <p className="text-zinc-600 text-xs sm:text-[13px] leading-relaxed font-normal line-clamp-3 sm:line-clamp-none">
                    Creating has never felt like just a hobby or a job to me. It's the craft of turning complex systems into fluid, high-performance web products that feel intuitive, interactive, and weightless. Currently developing full-stack applications at <strong className="text-zinc-950 font-semibold">ANDEvents</strong>, with previous software engineering engagements at <strong className="text-zinc-950 font-semibold">Bluestock Fintech</strong> and <strong className="text-zinc-950 font-semibold">Elevance</strong>.
                  </p>
                </div>

                {/* Divider Line */}
                <div className="w-full h-px bg-zinc-200/70 my-2.5" />

                {/* EDUCATION SECTION IN FROSTED GLASS PILL */}
                <div className="bg-white/65 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-white/90 shadow-[0_4px_16px_rgba(0,0,0,0.02)]">
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-bold mb-1">
                    <GraduationCap size={14} className="text-zinc-900" />
                    <span>EDUCATION</span>
                  </div>

                  <h5 className="font-sans font-bold text-xs sm:text-sm text-zinc-950">
                    Bachelor of Technology in Computer Engineering
                  </h5>

                  <p className="text-[11px] sm:text-xs text-zinc-600 mt-0.5 leading-tight">
                    Shah & Anchor Kutchhi Engineering College, Mumbai <br />
                    <span className="font-mono font-bold text-zinc-950 bg-white/90 border border-zinc-200/80 px-2 py-0.5 rounded text-[10px] inline-block mt-1 shadow-2xs">
                      CGPA: 8.3 &bull; Class of 2021 – 2025
                    </span>
                  </p>

                  <p className="text-[10px] sm:text-[11px] text-zinc-500 mt-1.5 leading-normal hidden sm:block">
                    Specialized in Distributed Databases, Agile SDLC, Scalable Web Systems & Cloud Architecture.
                  </p>
                </div>
              </div>

              {/* Bottom Quick Contact Action Bar */}
              <div className="pt-3 border-t border-zinc-200/60 flex items-center justify-between gap-3 mt-2">
                <span className="text-[10px] sm:text-xs font-mono text-zinc-500 tracking-wider">
                  FULL-STACK &bull; UI/UX &bull; SDE &bull; MUMBAI
                </span>
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-xs tracking-tight transition-all duration-300 shadow-sm hover:shadow-md group flex-shrink-0"
                >
                  <span>GET IN TOUCH</span>
                  <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </div>
          </motion.div>

        </div>

      </div>

      {/* ================= TORN PAPER TRANSITION (RIPPED PAPER EDGE) ================= */}
      <div className="w-full overflow-hidden leading-none relative z-20 pointer-events-none -mb-1">
        <svg 
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none" 
          className="w-full h-10 sm:h-14 md:h-16 block filter drop-shadow-[0_-6px_10px_rgba(0,0,0,0.08)]"
        >
          {/* Exposed white/cream torn paper core fiber highlight */}
          <path 
            d={topTearLine} 
            fill="none" 
            stroke="#ffffff" 
            strokeWidth="4" 
            strokeLinecap="round" 
            opacity="0.9" 
          />
          <path 
            d={topTearLine} 
            fill="none" 
            stroke="#e8dec8" 
            strokeWidth="2" 
            strokeLinecap="round" 
            opacity="0.7" 
          />
          {/* Dark charcoal torn paper body */}
          <path 
            d={topTearPath} 
            fill="#0c0c0e" 
          />
        </svg>
      </div>

      {/* ================= EDITORIAL STREETWEAR STRIP WITH RUNNING TICKER & RED-LAYER AVATAR ================= */}
      <div 
        className="relative w-full text-white py-3 sm:py-5 overflow-visible flex items-center justify-center min-h-[160px] sm:min-h-[180px] md:min-h-[200px]"
        style={{
          background: 'radial-gradient(ellipse 85% 85% at 50% 50%, #17171d 0%, #0c0c0e 65%, #060608 100%)'
        }}
      >
        
        {/* Soft Ambient Red Spotlight Glow directly centered behind Parth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[420px] md:w-[540px] h-[320px] sm:h-[420px] md:h-[540px] rounded-full bg-red-600/25 blur-[90px] pointer-events-none" />

        {/* Continuous Running Marquee Tape BEHIND Parth's Cutout (Bold White & Streetwear Card Icons) */}
        <div className="flex whitespace-nowrap animate-marquee select-none opacity-85 z-10 pointer-events-none">
          {[1, 2, 3, 4].map((item) => (
            <span key={item} className="font-sans font-black text-5xl sm:text-6xl md:text-7xl lg:text-[90px] tracking-tight uppercase mx-6 flex items-center gap-5 sm:gap-6">
              <span className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">PARTH JALAN</span>
              <span className="text-white/80 text-2xl sm:text-4xl lg:text-5xl">✦</span>
              <span className="text-white/25">FULL STACK SDE</span>
              <span className="text-red-500 text-2xl sm:text-4xl lg:text-5xl drop-shadow-[0_0_12px_rgba(239,20,38,0.5)]">♣</span>
              <span className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">SOFTWARE DEVELOPER</span>
              <span className="text-white/80 text-2xl sm:text-4xl lg:text-5xl">✦</span>
              <span className="text-white/25">CREATIVE CODE</span>
              <span className="text-red-500 text-2xl sm:text-4xl lg:text-5xl drop-shadow-[0_0_12px_rgba(239,20,38,0.5)]">♣</span>
              <span className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">MUMBAI 2026</span>
              <span className="text-white/80 text-2xl sm:text-4xl lg:text-5xl">✦</span>
            </span>
          ))}
        </div>

        {/* CENTER PARTH AVATAR CUTOUT WITH VIBRANT RED STICKER/SILHOUETTE LAYER */}
        <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-7 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex items-end justify-center">
          <div className="relative flex items-end justify-center">
            {/* Parth Chest Cutout with Solid Vibrant Red Offset Silhouette Layer - Clean with no background shadow */}
            <img 
              src="/parth-red-avatar.png" 
              alt="Parth Jalan with Red Silhouette Layer" 
              className="w-auto h-[220px] sm:h-[260px] md:h-[300px] lg:h-[330px] max-w-none object-contain select-none relative z-10 transition-transform duration-300 hover:scale-[1.01]"
              style={{
                maskImage: 'linear-gradient(to bottom, black 94%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 94%, transparent 100%)'
              }}
            />
          </div>
        </div>

      </div>

      {/* ================= BOTTOM TORN PAPER EDGE (TEARING BACK INTO LIGHT CANVAS) ================= */}
      <div className="w-full overflow-hidden leading-none relative z-20 pointer-events-none -mt-1">
        <svg 
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none" 
          className="w-full h-10 sm:h-14 md:h-16 block filter drop-shadow-[0_6px_10px_rgba(0,0,0,0.08)]"
        >
          {/* Dark charcoal torn paper body */}
          <path 
            d={botTearPath} 
            fill="#0c0c0e" 
          />
          {/* Exposed white/cream torn paper core fiber highlight */}
          <path 
            d={botTearLine} 
            fill="none" 
            stroke="#ffffff" 
            strokeWidth="4" 
            strokeLinecap="round" 
            opacity="0.9" 
          />
          <path 
            d={botTearLine} 
            fill="none" 
            stroke="#e8dec8" 
            strokeWidth="2" 
            strokeLinecap="round" 
            opacity="0.7" 
          />
        </svg>
      </div>

    </section>
  );
}
