import React, { useState } from 'react';
import { 
  ExternalLink, 
  Sparkles, 
  Code2, 
  Layers, 
  Eye, 
  Boxes, 
  ChevronRight, 
  X, 
  Check, 
  ArrowUpRight,
  SlidersHorizontal,
  ChevronLeft
} from 'lucide-react';
import { Github } from './Icons';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const categories = ['All', '3D & Creative Animations', 'Full Stack Web Apps', 'Glassmorphic Concepts', 'Software & IoT Solutions'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-300 mb-2">
              <span className="w-6 h-[1px] bg-amber-400"></span>
              <span>03 / SELECTED WORKS</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
              FEATURED <span className="text-gold-gradient font-serif italic lowercase font-normal">engineering</span> <br />
              & 3D SHOWCASES.
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-zinc-400 text-sm md:text-base max-w-md font-light leading-relaxed">
            From scroll-driven 3D web choreographies to production full-stack platforms with persistent databases.
          </p>
        </div>

        {/* VisionOS Floating 3D Arc Card Feature Banner */}
        <div className="mb-14 relative rounded-3xl glass-panel p-6 sm:p-8 border border-white/15 overflow-hidden shadow-2xl">
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Label */}
          <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-white font-semibold">FEATURED SPOTLIGHT // SPATIAL SHOWCASE</span>
            </div>
            
            {/* Carousel navigation buttons */}
            <div className="flex items-center gap-2">
              <button 
                onClick={prevSlide}
                className="w-8 h-8 rounded-full glass-pill flex items-center justify-center text-zinc-300 hover:text-white hover:border-white/30"
                aria-label="Previous Project"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="text-xs font-mono text-zinc-400 px-1">
                {carouselIndex + 1} / {projects.length}
              </span>
              <button 
                onClick={nextSlide}
                className="w-8 h-8 rounded-full glass-pill flex items-center justify-center text-zinc-300 hover:text-white hover:border-white/30"
                aria-label="Next Project"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Current Slide Display */}
          {(() => {
            const p = projects[carouselIndex];
            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Description */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-amber-400/30 text-amber-200 text-xs font-mono mb-4 w-fit">
                    <Sparkles size={12} className="text-amber-300" />
                    <span>{p.statBadge}</span>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-4xl text-white mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light mb-6">
                    {p.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6">
                    {p.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                        <Check size={14} className="text-amber-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.technologies.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-full text-xs font-mono glass-pill text-zinc-300 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(p)}
                      className="px-5 py-2.5 rounded-full bg-white text-zinc-950 font-bold text-xs flex items-center gap-1.5 hover:bg-amber-200 transition-colors"
                    >
                      <span>Deep Dive Architecture</span>
                      <ArrowUpRight size={14} />
                    </button>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-full glass-pill text-xs font-medium text-zinc-200 hover:text-white flex items-center gap-1.5 border border-white/15"
                    >
                      <Github size={14} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>

                {/* Right Interactive Visual Card */}
                <div className="lg:col-span-6 relative">
                  <div className="relative rounded-2xl overflow-hidden glass-card border border-white/20 p-2 sm:p-4 shadow-2xl group">
                    {/* Simulated 3D Card Window */}
                    <div className={`w-full h-64 sm:h-80 rounded-xl bg-gradient-to-br ${p.color} border border-white/10 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`}>
                      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
                      
                      {/* Interactive Floating Badge in Card Center */}
                      <div className="relative z-10 p-5 rounded-2xl glass-panel border border-white/30 shadow-[0_20px_40px_rgba(0,0,0,0.6)] max-w-sm backdrop-blur-2xl">
                        <div className="w-10 h-10 mx-auto rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-amber-300 mb-3 shadow-inner">
                          <Code2 size={20} />
                        </div>
                        <div className="text-xs font-mono uppercase tracking-wider text-amber-300 font-semibold">
                          {p.category}
                        </div>
                        <h4 className="font-display font-bold text-lg text-white mt-1">
                          {p.title}
                        </h4>
                        <p className="text-[11px] text-zinc-300 mt-2 line-clamp-2">
                          {p.tagline}
                        </p>
                      </div>

                      <div className="absolute bottom-4 right-4 flex items-center gap-1 text-[11px] font-mono text-zinc-400 glass-pill px-2.5 py-1 rounded-full border border-white/10">
                        <span>Click to view breakdown</span>
                        <ChevronRight size={12} />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })()}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mr-2">
            <SlidersHorizontal size={13} />
            <span>Filter By:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-amber-400/20 text-amber-200 border border-amber-400/40 shadow-[0_0_15px_rgba(230,175,101,0.25)]'
                  : 'glass-pill text-zinc-400 hover:text-white border border-white/5 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p, index) => (
            <div
              key={p.id}
              onClick={() => setSelectedProject(p)}
              className="group cursor-pointer glass-card rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between hover:border-amber-400/40 transition-all duration-500 shadow-xl"
            >
              {/* Card Header Preview Area */}
              <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${p.color} border-b border-white/10 p-5 flex flex-col justify-between`}>
                <div className="absolute inset-0 bg-grid-pattern opacity-15" />
                
                <div className="flex items-center justify-between relative z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider glass-pill border border-white/20 text-white">
                    {p.category}
                  </span>
                  <span className="text-[10px] font-mono text-amber-300">
                    0{index + 1}
                  </span>
                </div>

                <div className="relative z-10">
                  <span className="text-xs font-mono text-amber-200 font-semibold block mb-1">
                    {p.statBadge}
                  </span>
                  <h3 className="font-display font-extrabold text-xl text-white group-hover:text-amber-200 transition-colors">
                    {p.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-light mb-4 line-clamp-3">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-full text-[11px] font-mono glass-pill text-zinc-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {p.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-mono glass-pill text-amber-300 border border-amber-400/20">
                        +{p.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Action Strip */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-medium text-zinc-400 group-hover:text-white transition-colors flex items-center gap-1">
                    <span>Inspect details</span>
                    <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>

                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-full glass-pill flex items-center justify-center text-zinc-400 hover:text-white border border-white/10"
                      aria-label="GitHub Repository"
                    >
                      <Github size={13} />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep Dive Project Architecture Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="w-full max-w-2xl rounded-3xl glass-nav bg-[#0c0e18]/95 border border-white/20 p-6 sm:p-8 shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Ambient Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-start justify-between border-b border-white/10 pb-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full glass-pill border border-amber-400/30 text-amber-300 text-xs font-mono mb-2">
                  <Sparkles size={11} />
                  <span>{selectedProject.category}</span>
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-1">
                  {selectedProject.tagline}
                </p>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 rounded-full glass-pill flex items-center justify-center text-zinc-400 hover:text-white border border-white/10 hover:border-white/30"
              >
                <X size={16} />
              </button>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-light">
              {selectedProject.description}
            </p>

            {/* Architectural Highlights */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-1.5">
                <Boxes size={13} className="text-amber-400" />
                <span>Architecture & Features</span>
              </h4>

              <div className="space-y-2.5">
                {selectedProject.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-200 p-2.5 rounded-xl glass-card border border-white/5">
                    <Check size={14} className="text-amber-300 mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                Tech Stack Implemented
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.technologies.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full text-xs font-mono glass-pill text-zinc-200 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-end gap-3">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full glass-pill border border-white/15 text-xs font-medium text-white hover:border-amber-400/40 flex items-center gap-1.5"
              >
                <Github size={14} />
                <span>View on GitHub</span>
              </a>
              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-zinc-950 font-bold text-xs flex items-center gap-1.5 shadow-lg hover:shadow-amber-500/20"
              >
                <span>Live Netlify Platform</span>
                <ExternalLink size={14} />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
