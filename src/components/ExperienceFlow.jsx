import React, { useRef } from 'react';
import { 
  motion, 
  useScroll, 
  useTransform 
} from 'framer-motion';
import { 
  Calendar, 
  Building2, 
  CheckCircle2, 
  GitBranch, 
  Sparkles, 
  Layers,
  ArrowDownRight,
  ExternalLink
} from 'lucide-react';
import { experiences } from '../data/portfolioData';

// 3 Milestones in STRICT Chronological Order: Oldest to Present
const milestones = [
  {
    id: "elevanceskills",
    index: 0,
    chapter: "01",
    code: "EXP-01 // FOUNDATION",
    company: experiences[2]?.company || "ElevanceSkills",
    role: experiences[2]?.role || "Full Stack Development Intern",
    period: experiences[2]?.period || "Feb 2026 – May 2026",
    badge: "Full Stack Foundation",
    image: "/exp-elevance.jpg",
    theme: "Full-Stack Web Engineering & Database Persistence",
    summary: "Engineered responsive full-stack applications connecting modern user interfaces to database storage, REST endpoints, and Git workflows.",
    bullets: [
      "Built clean, modular frontend component hierarchies and responsive layouts.",
      "Integrated web interfaces with database persistence and structured REST APIs.",
      "Practiced collaborative Git version control, branch management, and code reviews."
    ],
    skills: ["React.js", "HTML5 & CSS3", "JavaScript (ES6+)", "REST APIs", "SQL Databases"],
    cardBg: "bg-white",
    badgeStyle: "bg-amber-50 text-amber-800 border-amber-300",
    accentColor: "#f59e0b"
  },
  {
    id: "bluestock",
    index: 1,
    chapter: "02",
    code: "EXP-02 // FINTECH PLATFORM",
    company: experiences[1]?.company || "Bluestock Fintech",
    role: experiences[1]?.role || "Software Development Engineer (SDE) Intern",
    period: experiences[1]?.period || "Jan 2026 – Feb 2026",
    badge: "Fintech SDE",
    image: "/exp-bluestock.jpg",
    theme: "Market Telemetry & SDLC Optimization",
    summary: "Engineered fintech platform solutions handling live market feeds, tuned data-heavy dashboard views, and practiced rigorous SDLC.",
    bullets: [
      "Profiled and optimized data-heavy dashboard views to eliminate rendering latency.",
      "Collaborated with senior SDEs on debugging, testing, and rapid agile sprint deliverables.",
      "Gained deep practical exposure to the Software Development Lifecycle and agile sprint cadences."
    ],
    skills: ["React.js", "State Management", "Performance Profiling", "Agile SDLC", "Git"],
    cardBg: "bg-white",
    badgeStyle: "bg-blue-50 text-blue-800 border-blue-300",
    accentColor: "#3b82f6"
  },
  {
    id: "andevents",
    index: 2,
    chapter: "03",
    code: "EXP-03 // CURRENT ACTIVE ROLE",
    company: experiences[0]?.company || "ANDEvents",
    role: experiences[0]?.role || "Jr. Software Developer",
    period: experiences[0]?.period || "20 July 2026 – Present",
    badge: "Active Present Role",
    image: "/exp-andevents.jpg",
    theme: "Enterprise Platforms & Frontend Architecture",
    summary: "Spearheading frontend software engineering workflows, implementing reusable modular UI component hierarchies, and collaborating with cross-functional product teams.",
    bullets: [
      "Architecting responsive client-facing digital platforms and reusable UI component libraries.",
      "Engineering modular state management and REST API integrations, improving data freshness.",
      "Enforcing code maintainability, cross-browser consistency, and sub-100ms UI interactions via CI/CD."
    ],
    skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "REST APIs", "Production CI/CD"],
    cardBg: "bg-white",
    badgeStyle: "bg-emerald-50 text-emerald-800 border-emerald-300",
    accentColor: "#10b981"
  }
];

function StackingCard({ item, index, total, containerRef }) {
  const cardRef = useRef(null);

  // Scroll tracking for each individual card relative to container
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"]
  });

  // Calculate dynamic sticky top position so cards stack with exposed headers
  // Desktop: 96px + index * 32px | Mobile: 80px + index * 20px
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const stickyTop = isMobile ? 80 + index * 20 : 96 + index * 32;

  return (
    <div
      ref={cardRef}
      style={{
        position: 'sticky',
        top: `${stickyTop}px`,
        zIndex: 10 + index * 10
      }}
      className="mb-8 sm:mb-12 w-full max-w-6xl mx-auto will-change-transform"
    >
      <div 
        className={`w-full rounded-2xl sm:rounded-3xl border-2 border-zinc-200/90 bg-white p-4 sm:p-7 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.12)] transition-shadow duration-300 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.16)] overflow-hidden`}
      >
        {/* Top Card Navigation Bar / Index Tab */}
        <div className="flex items-center justify-between pb-3 sm:pb-3.5 mb-4 sm:mb-5 border-b border-zinc-100 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-zinc-950" />
            <span className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-wider">
              {item.code}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className={`text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 rounded-full border font-bold ${item.badgeStyle}`}>
              {item.badge}
            </span>
            <span className="text-zinc-400 font-mono text-[11px] hidden sm:inline">
              Stack 0{index + 1} of 0{total}
            </span>
          </div>
        </div>

        {/* Card Content Grid: Image Preview Left + Detailed Experience Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-7 items-center">
          
          {/* Cover Media Preview (Left, col-span-5) */}
          <div className="md:col-span-5">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[4/3] bg-zinc-100 border border-zinc-200/80 shadow-xs group">
              <img 
                src={item.image} 
                alt={`${item.company} experience preview`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />
              
              {/* Overlay Metadata */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-300 font-semibold mb-0.5">
                  {item.period}
                </div>
                <div className="font-sans font-black text-base sm:text-lg text-white leading-tight">
                  {item.company}
                </div>
              </div>

              {/* Number Badge */}
              <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-zinc-950/80 backdrop-blur-xs text-white text-[10px] font-mono font-bold">
                {item.chapter}
              </div>
            </div>
          </div>

          {/* Experience Details (Right, col-span-7) */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold mb-1">
                {item.theme}
              </div>

              <h3 className="font-sans font-black text-xl sm:text-2xl text-zinc-950 tracking-tight leading-snug">
                {item.role}
              </h3>

              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mt-1 mb-3">
                <Building2 size={13} className="text-zinc-700" />
                <span className="font-bold text-zinc-800">{item.company}</span>
                <span>•</span>
                <Calendar size={13} className="text-zinc-700" />
                <span>{item.period}</span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mb-4">
                {item.summary}
              </p>

              {/* Verified Achievements */}
              <div className="space-y-1.5 mb-4">
                {item.bullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-zinc-700 leading-snug">
                    <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack Tags */}
            <div className="pt-3 border-t border-zinc-100 flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] font-mono text-zinc-400 font-bold mr-1">
                Stack:
              </span>
              {item.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2 py-0.5 rounded-md bg-[#faf8f5] border border-zinc-200/90 text-zinc-700 text-[10px] font-mono font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default function ExperienceFlow() {
  const containerRef = useRef(null);

  return (
    <section 
      id="experience" 
      ref={containerRef}
      className="relative pt-12 sm:pt-14 pb-14 sm:pb-16 bg-[#faf8f5] text-zinc-950 select-none overflow-visible"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-[1400px] relative z-10">
        
        {/* =========================================================================
            HEADER: Chapter 02 // CAREER JOURNEY
        ========================================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-3 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 mb-1.5">
              <span className="w-5 h-[1.5px] bg-zinc-950"></span>
              <span>CHAPTER 02 / CAREER TIMELINE</span>
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-zinc-950 tracking-tight uppercase">
              EXPERIENCE{' '}
              <span className="font-serif italic lowercase font-normal text-zinc-500">deck</span>.
            </h2>
          </div>

          <div className="mt-3 md:mt-0 flex items-center gap-2 text-xs font-mono text-zinc-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Scroll down to stack cards (Oldest &rarr; Present)</span>
          </div>
        </div>

        {/* =========================================================================
            STICKY CARD STACKING RUNWAY (Oldest -> Present)
        ========================================================================== */}
        <div className="relative">
          {milestones.map((item, idx) => (
            <StackingCard 
              key={item.id}
              item={item}
              index={idx}
              total={milestones.length}
              containerRef={containerRef}
            />
          ))}
        </div>

        {/* =========================================================================
            COMPACT SUMMARY STRIP (Transitions cleanly into #projects)
        ========================================================================== */}
        <div className="mt-6 p-4 rounded-2xl bg-white border border-zinc-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-zinc-600 max-w-6xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-zinc-950" />
            <span className="font-bold text-zinc-950">3 Verified Career Chapters</span>
            <span className="text-zinc-400">•</span>
            <span className="text-zinc-500">ElevanceSkills &rarr; Bluestock Fintech &rarr; ANDEvents</span>
          </div>

          <a 
            href="#projects" 
            className="text-zinc-950 font-bold hover:underline flex items-center gap-1 shrink-0"
          >
            <span>Proceed to Projects</span>
            <ArrowDownRight size={13} />
          </a>
        </div>

      </div>
    </section>
  );
}
