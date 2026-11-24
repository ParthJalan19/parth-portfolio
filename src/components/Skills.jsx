import React, { useState } from 'react';
import { 
  Layout, 
  Code, 
  Database, 
  BarChart3, 
  Wrench, 
  Sparkles, 
  Cpu, 
  CheckCircle2, 
  Flame
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  const iconMap = {
    Layout: Layout,
    Code: Code,
    Database: Database,
    BarChart3: BarChart3,
    Wrench: Wrench
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-300 mb-2">
              <span className="w-6 h-[1px] bg-amber-400"></span>
              <span>04 / CAPABILITIES & TOOLS</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
              TECHNICAL <span className="text-gold-gradient font-serif italic lowercase font-normal">arsenal</span> <br />
              & ARCHITECTURE DOCK.
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-zinc-400 text-sm md:text-base max-w-md font-light leading-relaxed">
            A comprehensive breakdown of frameworks, core languages, databases, analytics tools, and AI workflows.
          </p>
        </div>

        {/* VisionOS Floating Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {skillCategories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Cpu;
            const isActive = activeCategory === idx;
            return (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(idx)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'glass-panel bg-white/[0.1] border-amber-400/50 text-amber-200 shadow-[0_0_20px_rgba(245,158,11,0.25)] scale-105'
                    : 'glass-card text-zinc-400 hover:text-white border-white/10 hover:border-white/20'
                }`}
              >
                <Icon size={16} className={isActive ? 'text-amber-300' : 'text-zinc-500'} />
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display Panel */}
        {(() => {
          const current = skillCategories[activeCategory];
          const Icon = iconMap[current.icon] || Cpu;

          return (
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/15 shadow-2xl relative overflow-hidden animate-in fade-in zoom-in-95 duration-300">
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-amber-500/15 border border-amber-400/30 text-amber-300 shadow-inner">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                      {current.category}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light mt-0.5">
                      {current.description}
                    </p>
                  </div>
                </div>

                <div className="text-xs font-mono text-zinc-400 flex items-center gap-1.5 glass-pill px-3 py-1.5 rounded-full border border-white/10 self-start sm:self-auto">
                  <Flame size={13} className="text-amber-400" />
                  <span>Production Ready Toolset</span>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {current.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="glass-card p-4 rounded-2xl border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-400/80 group-hover:scale-125 transition-transform" />
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-amber-200 transition-colors">
                          {skill.name}
                        </div>
                        <div className="text-[11px] font-mono text-zinc-500">
                          {skill.level} Proficiency
                        </div>
                      </div>
                    </div>

                    {skill.hot && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono border border-amber-500/30 text-amber-300 bg-amber-500/10 flex items-center gap-1">
                        <Sparkles size={10} />
                        Core
                      </span>
                    )}
                  </div>
                ))}
              </div>

            </div>
          );
        })()}

        {/* Global Bento Grid Overview (Inspired by Aarav Mehta "Tools I Use" section) */}
        <div className="mt-14 pt-10 border-t border-white/10">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              KEY TECHNOLOGIES AT A GLANCE
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { name: "React.js", category: "Frontend", level: "95%" },
              { name: "Next.js", category: "Full Stack", level: "88%" },
              { name: "Tailwind CSS", category: "Styling", level: "95%" },
              { name: "GSAP Motion", category: "Animations", level: "85%" },
              { name: "Java (Adv)", category: "Language", level: "90%" },
              { name: "Python / Data", category: "Analytics", level: "85%" },
              { name: "MongoDB Atlas", category: "NoSQL DB", level: "90%" },
              { name: "PostgreSQL", category: "SQL DB", level: "85%" },
              { name: "Power BI", category: "BI Reporting", level: "82%" },
              { name: "Tableau", category: "Visualization", level: "80%" },
              { name: "Git / GitHub", category: "Version Control", level: "92%" },
              { name: "REST APIs", category: "Integration", level: "92%" },
            ].map((item) => (
              <div 
                key={item.name}
                className="glass-card p-3.5 rounded-2xl border border-white/10 text-center flex flex-col justify-between hover:border-amber-400/30 transition-all group"
              >
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">{item.category}</div>
                  <div className="font-display font-bold text-sm text-white group-hover:text-amber-200 mt-1 transition-colors">
                    {item.name}
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>Proficiency</span>
                  <span className="text-amber-300 font-semibold">{item.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
