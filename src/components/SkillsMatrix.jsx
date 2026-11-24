import React, { useState } from 'react';
import { 
  Layout, 
  Code, 
  Database, 
  BarChart3, 
  Wrench, 
  Sparkles, 
  Cpu, 
  Flame,
  CheckCircle2
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

export default function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState(0);

  const iconMap = {
    Layout: Layout,
    Code: Code,
    Database: Database,
    BarChart3: BarChart3,
    Wrench: Wrench
  };

  const keyTechs = [
    { name: "React.js", category: "Frontend Core", level: 95, color: "from-cyan-400 to-blue-500" },
    { name: "Next.js", category: "Full Stack", level: 90, color: "from-white to-zinc-400" },
    { name: "GSAP 3D", category: "Web Motion", level: 88, color: "from-emerald-400 to-green-500" },
    { name: "Tailwind CSS", category: "Design Systems", level: 96, color: "from-teal-400 to-cyan-500" },
    { name: "Java (Core/Adv)", category: "Systems OOP", level: 92, color: "from-amber-400 to-orange-500" },
    { name: "Python / Data", category: "Analytics & ML", level: 86, color: "from-blue-400 to-indigo-500" },
    { name: "MongoDB Atlas", category: "NoSQL DB", level: 90, color: "from-emerald-400 to-teal-500" },
    { name: "PostgreSQL / SQL", category: "Relational DB", level: 88, color: "from-sky-400 to-blue-600" },
    { name: "Power BI & Tableau", category: "BI Intelligence", level: 85, color: "from-amber-400 to-yellow-500" },
    { name: "RESTful APIs", category: "Architecture", level: 94, color: "from-purple-400 to-pink-500" },
    { name: "Git & GitHub", category: "Version Control", level: 95, color: "from-red-400 to-rose-500" },
    { name: "Agile SDLC", category: "Delivery Workflow", level: 90, color: "from-indigo-400 to-purple-500" }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-300 mb-2">
              <span className="w-6 h-[1px] bg-amber-400"></span>
              <span>04 / CAPABILITIES & SYSTEM ARCHITECTURE</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
              TECHNICAL <span className="text-gold-gradient font-serif italic lowercase font-normal">arsenal</span> <br />
              & PROFICIENCY DOCK.
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-zinc-400 text-xs sm:text-sm md:text-base max-w-md font-light leading-relaxed">
            Hover to trigger interactive laser highlights across production frameworks, algorithms, databases, and analytics suites.
          </p>
        </div>

        {/* Spatial Category Dock */}
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
                    ? 'glass-panel bg-white/[0.12] border-amber-400/50 text-amber-200 shadow-[0_0_20px_rgba(245,158,11,0.25)] scale-105'
                    : 'glass-card text-zinc-400 hover:text-white border-white/10 hover:border-white/20'
                }`}
              >
                <Icon size={16} className={isActive ? 'text-amber-300' : 'text-zinc-500'} />
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Bento Deck */}
        {(() => {
          const current = skillCategories[activeCategory];
          const Icon = iconMap[current.icon] || Cpu;

          return (
            <SpotlightCard className="p-6 sm:p-10 border-white/15 mb-14">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-300">
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

                <div className="text-xs font-mono text-zinc-300 glass-pill px-3 py-1.5 rounded-full border border-white/15 flex items-center gap-1.5 self-start sm:self-auto">
                  <Flame size={13} className="text-amber-400" />
                  <span>Production Ready</span>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {current.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-400/50 hover:bg-white/[0.05] transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-400 group-hover:scale-125 transition-transform" />
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-amber-200 transition-colors">
                          {skill.name}
                        </div>
                        <div className="text-[10px] font-mono text-zinc-500">
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
            </SpotlightCard>
          );
        })()}

        {/* Interactive Progress Meter Grid */}
        <div>
          <div className="text-center mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              KEY METRICS & PRODUCTION PROFICIENCIES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {keyTechs.map((tech) => (
              <SpotlightCard key={tech.name} className="p-4 border-white/10 hover:border-amber-400/40">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">{tech.category}</div>
                  <span className="text-xs font-bold font-mono text-amber-300">{tech.level}%</span>
                </div>
                <div className="font-display font-bold text-sm text-white mb-2">
                  {tech.name}
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div 
                    className={`h-full rounded-full bg-gradient-to-r ${tech.color} transition-all duration-1000`}
                    style={{ width: `${tech.level}%` }}
                  />
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
