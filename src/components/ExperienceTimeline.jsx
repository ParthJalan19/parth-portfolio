import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  GitBranch, 
  Sparkles, 
  ChevronDown, 
  ChevronUp,
  ArrowRight
} from 'lucide-react';
import { experiences } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

export default function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState(experiences[0].id);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-300 mb-2">
              <span className="w-6 h-[1px] bg-amber-400"></span>
              <span>02 / PROVEN TRACK RECORD</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
              WORK EXPERIENCE <span className="text-gold-gradient font-serif italic lowercase font-normal">&</span> IMPACT.
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full glass-pill border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              3 Professional Roles
            </span>
          </div>
        </div>

        {/* Experience Interactive Circuit Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Laser Circuit Line */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-[2px] bg-white/10">
            <div className="w-full h-24 bg-gradient-to-b from-transparent via-amber-400 to-transparent laser-pulse" />
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const isExpanded = expandedId === exp.id;

              return (
                <div key={exp.id} className="relative md:pl-20">
                  
                  {/* Timeline Glowing Node (Desktop) */}
                  <div className={`hidden md:flex absolute left-[26px] top-6 w-3.5 h-3.5 rounded-full -translate-x-1/2 items-center justify-center transition-all duration-300 ${
                    isExpanded 
                      ? 'bg-amber-400 ring-4 ring-amber-400/20 shadow-[0_0_15px_#f59e0b]' 
                      : 'bg-zinc-700 border-2 border-zinc-500'
                  }`} />

                  {/* Spotlight Card */}
                  <SpotlightCard 
                    tilt={false}
                    className={`cursor-pointer transition-all duration-500 border ${
                      isExpanded 
                        ? 'border-amber-400/40 shadow-[0_20px_50px_rgba(245,158,11,0.15)] bg-white/[0.04]' 
                        : 'border-white/10 hover:border-white/20 hover:bg-white/[0.02]'
                    }`}
                    onClick={() => toggleExpand(exp.id)}
                  >
                    <div className="p-6 sm:p-7">
                      
                      {/* Top Header Row */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`p-2.5 rounded-2xl border transition-colors ${
                            isExpanded 
                              ? 'bg-amber-500/20 border-amber-400/40 text-amber-300' 
                              : 'bg-white/[0.03] border-white/10 text-zinc-400'
                          }`}>
                            <Building2 size={20} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-display font-extrabold text-lg sm:text-xl text-white">
                                {exp.role}
                              </h3>
                              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                                exp.badge === 'Active' 
                                  ? 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10' 
                                  : 'border-white/10 text-zinc-400'
                              }`}>
                                {exp.badge}
                              </span>
                            </div>
                            <div className="text-xs sm:text-sm text-amber-200/90 font-medium">
                              {exp.company}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-3">
                          <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                            <Calendar size={13} />
                            <span>{exp.period}</span>
                          </div>

                          <div className="w-8 h-8 rounded-full glass-pill flex items-center justify-center text-zinc-400 hover:text-white">
                            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                          </div>
                        </div>
                      </div>

                      {/* Summary Narrative */}
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light mt-2">
                        {exp.description}
                      </p>

                      {/* Expandable Dossier */}
                      {isExpanded && (
                        <div className="mt-6 pt-6 border-t border-white/10 space-y-5 animate-in fade-in duration-300">
                          
                          <div>
                            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-300 mb-3 flex items-center gap-1.5">
                              <Sparkles size={12} />
                              <span>Key Contributions & Verified Impact</span>
                            </h4>

                            <div className="space-y-2.5">
                              {exp.achievements.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                  <CheckCircle2 size={15} className="text-amber-400 mt-0.5 shrink-0" />
                                  <span className="text-xs sm:text-sm text-zinc-200 leading-snug">
                                    {item}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Tech Stack Employed */}
                          <div>
                            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2 flex items-center gap-1.5">
                              <GitBranch size={12} />
                              <span>Stack Employed</span>
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((s) => (
                                <span key={s} className="px-3 py-1 rounded-full text-xs font-mono glass-pill text-zinc-200 border border-white/10">
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>

                        </div>
                      )}

                    </div>
                  </SpotlightCard>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
