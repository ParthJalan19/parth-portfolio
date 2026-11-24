import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles,
  Building2,
  GitBranch
} from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState(experiences[0].id);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-300 mb-2">
              <span className="w-6 h-[1px] bg-amber-400"></span>
              <span>02 / PROFESSIONAL JOURNEY</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
              WORK EXPERIENCE <span className="text-gold-gradient font-serif italic lowercase font-normal">&</span> IMPACT.
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full glass-pill border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              3 Professional Engagements
            </span>
          </div>
        </div>

        {/* Experience Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Role Selector Cards */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {experiences.map((exp, index) => {
              const isSelected = selectedExp === exp.id;
              return (
                <div
                  key={exp.id}
                  onClick={() => setSelectedExp(exp.id)}
                  className={`cursor-pointer p-5 rounded-2xl transition-all duration-300 border ${
                    isSelected 
                      ? 'glass-panel bg-white/[0.08] border-amber-400/50 shadow-[0_0_30px_rgba(245,158,11,0.18)] translate-x-1' 
                      : 'glass-card border-white/10 hover:border-white/25 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className={`p-2.5 rounded-xl border mt-0.5 transition-colors ${
                        isSelected 
                          ? 'bg-amber-500/20 border-amber-400/40 text-amber-300' 
                          : 'bg-white/[0.03] border-white/10 text-zinc-400'
                      }`}>
                        <Building2 size={18} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className={`font-display font-bold text-base transition-colors ${
                            isSelected ? 'text-white' : 'text-zinc-200'
                          }`}>
                            {exp.role}
                          </h3>
                        </div>
                        <div className="text-xs font-semibold text-amber-200/90 mt-0.5">
                          {exp.company}
                        </div>
                        <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-500 mt-1">
                          <Calendar size={11} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded-full border ${
                      exp.badge === 'Active'
                        ? 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10'
                        : 'border-white/10 text-zinc-400 bg-white/[0.02]'
                    }`}>
                      {exp.badge}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Quick Summary Pill */}
            <div className="mt-2 p-4 rounded-2xl glass-card border border-white/5 bg-white/[0.01] text-xs text-zinc-400 leading-relaxed font-light">
              <span className="font-semibold text-zinc-200">Engineering Standard:</span> Hands-on experience across the entire Software Development Lifecycle (SDLC), agile sprint rituals, Git version control, and code reviews.
            </div>
          </div>

          {/* Right Column: Detailed Achievement Breakdown Panel */}
          <div className="lg:col-span-7">
            {experiences
              .filter((exp) => exp.id === selectedExp)
              .map((exp) => (
                <div 
                  key={exp.id}
                  className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl relative overflow-hidden animate-in fade-in slide-in-from-right-4 duration-300"
                >
                  {/* Subtle Glow */}
                  <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Header Detail */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-amber-300 uppercase tracking-wider mb-1">
                        <span>{exp.type}</span>
                        <span>•</span>
                        <span>{exp.period}</span>
                      </div>
                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                        {exp.role}
                      </h3>
                      <div className="text-base text-zinc-300 font-medium mt-1 flex items-center gap-2">
                        <span>{exp.company}</span>
                        <span className="text-zinc-600">•</span>
                        <span className="text-xs text-zinc-400 font-mono">Mumbai & Remote</span>
                      </div>
                    </div>

                    <div className="px-3.5 py-1.5 rounded-xl glass-pill border border-amber-400/30 text-amber-200 text-xs font-mono">
                      Verified Experience
                    </div>
                  </div>

                  {/* Executive Overview */}
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                    {exp.description}
                  </p>

                  {/* Key Contributions & Achievements */}
                  <div className="mb-6">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-1.5">
                      <Sparkles size={12} className="text-amber-400" />
                      <span>Key Responsibilities & Deliverables</span>
                    </h4>

                    <div className="space-y-3">
                      {exp.achievements.map((ach, i) => (
                        <div 
                          key={i}
                          className="flex items-start gap-3 p-3.5 rounded-xl glass-card border border-white/5 bg-white/[0.015]"
                        >
                          <div className="p-1 rounded-md bg-amber-400/10 text-amber-300 mt-0.5">
                            <CheckCircle2 size={14} />
                          </div>
                          <span className="text-xs sm:text-sm text-zinc-300 leading-snug">
                            {ach}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Employed */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-1.5">
                      <GitBranch size={12} className="text-amber-400" />
                      <span>Technologies & Workflows</span>
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full glass-pill border border-white/10 text-xs font-medium text-zinc-200 hover:border-amber-400/30 hover:text-amber-200 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
          </div>

        </div>

      </div>
    </section>
  );
}
