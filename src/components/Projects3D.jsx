import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Maximize2, 
  X, 
  Check, 
  Code2, 
  Layers, 
  ChevronLeft, 
  ChevronRight,
  Play,
  Pause
} from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects3D() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [viewportWidth, setViewportWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const autoPlayTimer = useRef(null);
  const touchStartX = useRef(0);

  // Monitor viewport width for responsive 3D transforms
  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter projects based on category
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const activeProject = filteredProjects[activeIndex] || filteredProjects[0];

  // Auto rotation
  useEffect(() => {
    if (isAutoPlay && !selectedProject) {
      autoPlayTimer.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
      }, 4500);
    }
    return () => clearInterval(autoPlayTimer.current);
  }, [isAutoPlay, filteredProjects.length, selectedProject]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.touches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
  };

  // Responsive step sizes according to screen resolution
  const stepX = viewportWidth < 640 ? 150 : viewportWidth < 1024 ? 210 : 270;
  const stepZ = viewportWidth < 640 ? 90 : 130;
  const stepRotate = viewportWidth < 640 ? 12 : 18;

  return (
    <section id="projects" className="pt-12 pb-14 sm:pt-14 sm:pb-16 relative overflow-hidden bg-[#faf8f5]">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-[1400px]">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-3 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
              <span className="w-6 h-[1.5px] bg-zinc-950"></span>
              <span>03 / 3D INTERACTIVE SHOWCASE</span>
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-zinc-950 tracking-tight uppercase">
              FEATURED <span className="font-serif italic lowercase font-normal text-zinc-500">works</span> <br />
              & PRODUCTION APPS.
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-zinc-600 text-xs sm:text-sm md:text-base max-w-md font-normal leading-relaxed">
            Drag, swipe, or spin through 10 production-deployed web applications, interactive 3D choreographies, and enterprise SaaS systems.
          </p>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8">
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {['All', '3D & Creative Web', 'Full Stack Web Apps', 'Enterprise SaaS & ERP', 'Fintech & Analytics'].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveFilter(cat);
                  setActiveIndex(0);
                }}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-medium transition-all ${
                  activeFilter === cat
                    ? 'bg-zinc-950 text-white shadow-sm font-bold'
                    : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border border-zinc-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Auto-rotation indicator */}
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-xs font-mono text-zinc-700 transition-colors"
          >
            {isAutoPlay ? <Pause size={12} className="text-zinc-950" /> : <Play size={12} />}
            <span>{isAutoPlay ? 'Auto-Orbit: ON' : 'Auto-Orbit: OFF'}</span>
          </button>
        </div>

        {/* Browser Floating Bar */}
        <div className="max-w-2xl mx-auto mb-6 sm:mb-8 px-4 py-2 rounded-full bg-white/90 border border-zinc-200 flex items-center justify-between text-xs font-mono text-zinc-600 shadow-sm">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
          </div>

          <div className="px-3 py-0.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-[11px] truncate max-w-[220px] sm:max-w-[280px]">
            parthjalan.dev/projects/{activeProject?.id}
          </div>

          <div className="flex items-center gap-1.5 text-zinc-500 font-semibold">
            <span className="text-zinc-950 font-bold">{activeIndex + 1}</span>
            <span>/</span>
            <span>{filteredProjects.length}</span>
          </div>
        </div>

        {/* 3D Arc Perspective Carousel Container */}
        <div 
          className="relative w-full h-[410px] sm:h-[450px] md:h-[480px] flex items-center justify-center perspective-container select-none cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Ambient center sand glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-[#ece1d3]/80 rounded-full blur-[140px] pointer-events-none" />

          {/* Cards Arc */}
          <div className="relative w-full h-full flex items-center justify-center preserve-3d">
            {filteredProjects.map((p, index) => {
              const count = filteredProjects.length;
              let offset = index - activeIndex;

              // Wrap offset to keep circular relative distance
              if (offset > count / 2) offset -= count;
              if (offset < -count / 2) offset += count;

              const isCenter = offset === 0;
              const isVisible = Math.abs(offset) <= 2;

              if (!isVisible) return null;

              // Responsive 3D Arc Transform calculation
              const translateX = offset * stepX;
              const translateZ = -Math.abs(offset) * stepZ;
              const rotateY = offset * -stepRotate;
              const scale = isCenter ? 1.03 : 0.88;
              const opacity = isCenter ? 1 : Math.max(0.35, 1 - Math.abs(offset) * 0.4);
              const zIndex = 30 - Math.abs(offset) * 5;

              return (
                <div
                  key={p.id}
                  onClick={() => {
                    if (isCenter) setSelectedProject(p);
                    else setActiveIndex(index);
                  }}
                  className={`absolute w-[270px] sm:w-[330px] md:w-[370px] rounded-3xl transition-all duration-700 ease-out cursor-pointer overflow-hidden ${
                    isCenter 
                      ? 'bg-white border-2 border-zinc-950 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.14)]' 
                      : 'bg-white/90 border border-zinc-200/90 shadow-md backdrop-blur-md'
                  }`}
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity,
                    zIndex,
                  }}
                >
                  {/* Card Visual Header */}
                  <div className={`h-36 sm:h-44 rounded-t-3xl bg-gradient-to-br ${p.color} border-b border-zinc-200/60 p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden`}>
                    <div className="flex items-center justify-between relative z-10">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/85 border border-zinc-200 text-zinc-950 font-semibold shadow-2xs">
                        {p.category}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(p);
                        }}
                        className="w-7 h-7 rounded-full bg-white/85 border border-zinc-200 flex items-center justify-center text-zinc-800 hover:text-zinc-950 shadow-2xs"
                        title="Expand Blueprint"
                      >
                        <Maximize2 size={13} />
                      </button>
                    </div>

                    <div className="relative z-10">
                      <div className="text-[11px] font-mono text-zinc-800 font-bold mb-0.5">
                        {p.statBadge}
                      </div>
                      <h3 className="font-sans font-black text-lg sm:text-xl md:text-2xl text-zinc-950 leading-tight">
                        {p.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 sm:p-5 flex flex-col justify-between bg-white rounded-b-3xl">
                    <p className="text-xs text-zinc-600 line-clamp-2 sm:line-clamp-3 leading-relaxed font-normal mb-3 sm:mb-4">
                      {p.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4">
                      {p.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-zinc-100 text-zinc-700 border border-zinc-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Action Strip (Live Link Only, No GitHub) */}
                    <div className="flex items-center justify-between pt-2.5 border-t border-zinc-100">
                      <span className="text-[11px] font-mono text-zinc-500 font-semibold flex items-center gap-1">
                        <span>Details</span>
                        <ArrowUpRight size={12} />
                      </span>

                      <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-1.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white font-mono font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors"
                          title="Open Live Website"
                        >
                          <span>Live Site</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Floating Bottom Dock */}
        <div className="max-w-md mx-auto mt-6 sm:mt-8 p-2.5 sm:p-3 rounded-full bg-white/95 border border-zinc-200 flex items-center justify-between shadow-md">
          <button
            onClick={handlePrev}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 flex items-center justify-center text-zinc-800 transition-colors"
            aria-label="Previous Project"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Active Project Mini-Card */}
          <div 
            onClick={() => setSelectedProject(activeProject)}
            className="flex items-center gap-2 sm:gap-2.5 px-3 py-1 rounded-full hover:bg-zinc-50 cursor-pointer transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-[#f4ece1] border border-[#dfd3c3] flex items-center justify-center text-zinc-950 font-bold text-xs shrink-0">
              ✦
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-zinc-950 max-w-[140px] sm:max-w-[190px] truncate">
                {activeProject?.title}
              </div>
              <div className="text-[10px] font-mono text-zinc-500 truncate">
                {activeProject?.category}
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 flex items-center justify-center text-zinc-800 transition-colors"
            aria-label="Next Project"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Project Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-3 sm:mt-4">
          {filteredProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex 
                  ? 'w-6 bg-zinc-950 shadow-xs' 
                  : 'w-2 bg-zinc-300 hover:bg-zinc-400'
              }`}
            />
          ))}
        </div>

      </div>

      {/* Deep Dive Architecture Modal with Proper Navbar Clearance & Responsiveness */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-zinc-950/70 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="w-full max-w-2xl max-h-[85vh] my-auto flex flex-col rounded-3xl bg-white border border-zinc-200 shadow-2xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient background glow inside modal */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#ece1d3]/60 rounded-full blur-3xl pointer-events-none" />

            {/* Scrollable Container inside modal */}
            <div className="overflow-y-auto p-5 sm:p-7 md:p-8 custom-scrollbar">
              <div className="flex items-start justify-between border-b border-zinc-200/80 pb-4 mb-5">
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#f4ece1] border border-[#dfd3c3] text-zinc-800 font-semibold">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-sans font-black text-xl sm:text-2xl md:text-3xl text-zinc-950 mt-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-500 mt-1">
                    {selectedProject.tagline}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-950 shrink-0"
                >
                  <X size={16} />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed mb-5 font-normal">
                {selectedProject.description}
              </p>

              {/* Architecture Highlights */}
              <div className="mb-5">
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-900 font-bold mb-2.5 flex items-center gap-1.5">
                  <Code2 size={13} className="text-zinc-950" />
                  <span>Architecture & Engineering Highlights</span>
                </h4>

                <div className="space-y-2">
                  {selectedProject.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-700 p-2.5 rounded-xl bg-[#faf8f5] border border-zinc-200/60">
                      <Check size={14} className="text-zinc-950 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-5">
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold mb-2">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full text-xs font-mono bg-zinc-100 text-zinc-800 border border-zinc-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions (Live Link Only, No GitHub) */}
              <div className="pt-4 border-t border-zinc-200/80 flex items-center justify-end">
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-colors"
                >
                  <span>Launch Live Project</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
