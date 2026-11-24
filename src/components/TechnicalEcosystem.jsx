import React, { useRef, useState, useEffect } from 'react';
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring 
} from 'framer-motion';
import { 
  Layout, 
  Sparkles, 
  Code2, 
  Database, 
  BarChart3, 
  Layers, 
  Terminal, 
  Cpu, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight,
  GitBranch,
  Bot
} from 'lucide-react';

export default function TechnicalEcosystem() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [maxScroll, setMaxScroll] = useState(1800);
  const touchStartX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.touches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
  };

  // 8 Curated Tech Stack Cards
  const techStacks = [
    {
      id: "stack-01",
      number: "01",
      tag: "TECH-01 // ARCHITECTURE",
      category: "Frontend Architecture",
      title: "React 19 & Next.js",
      subtitle: "Virtual DOM, Server Components & Hooks",
      icon: Layout,
      accentHex: "#ff5500",
      accentBg: "bg-orange-50 text-orange-700 border-orange-200",
      accentDot: "bg-[#ff5500]",
      skills: ["React 19", "Next.js 15", "TypeScript", "JavaScript (ES6+)"],
      highlights: [
        "Sub-50ms interaction latency with modular component hierarchies.",
        "Production SSR and client-side rendering optimizations."
      ],
      metrics: [
        { label: "Render Latency", val: "Sub-50ms" }
      ],
      project: {
        name: "3D Fanta Website",
        url: "https://3d-fanta-website.netlify.app/"
      }
    },
    {
      id: "stack-02",
      number: "02",
      tag: "TECH-02 // 3D & MOTION",
      category: "3D Motion & Kinematics",
      title: "GSAP 3D & Three.js",
      subtitle: "Interactive Shaders, Timelines & Physics",
      icon: Sparkles,
      accentHex: "#f59e0b",
      accentBg: "bg-amber-50 text-amber-800 border-amber-200",
      accentDot: "bg-amber-500",
      skills: ["GSAP ScrollTrigger", "Three.js", "WebGL", "Canvas Shaders"],
      highlights: [
        "Silky 60-120 FPS scroll-driven choreographed camera animations.",
        "Interactive 3D mesh deformation and dynamic light shaders."
      ],
      metrics: [
        { label: "Target Motion", val: "60-120 FPS" }
      ],
      project: {
        name: "Clothing Website",
        url: "https://jacketscrolleffect.netlify.app/"
      }
    },
    {
      id: "stack-03",
      number: "03",
      tag: "TECH-03 // CORE SYSTEMS",
      category: "Backend & Systems",
      title: "Java & Python Systems",
      subtitle: "OOP Principles, REST APIs & Logic",
      icon: Code2,
      accentHex: "#10b981",
      accentBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
      accentDot: "bg-emerald-500",
      skills: ["Java (Core & Adv)", "Python 3", "RESTful APIs", "OOP Design"],
      highlights: [
        "Robust multithreaded backend services and clean design patterns.",
        "Algorithmic efficiency backed by 8.3 CGPA Computer Engineering rigor."
      ],
      metrics: [
        { label: "Academic Standing", val: "8.3 CGPA" }
      ],
      project: {
        name: "EduCampus ERP",
        url: "https://edusphere-erp.netlify.app/"
      }
    },
    {
      id: "stack-04",
      number: "04",
      tag: "TECH-04 // PERSISTENCE",
      category: "Cloud Databases",
      title: "MongoDB & PostgreSQL",
      subtitle: "NoSQL Clusters & ACID Relational Integrity",
      icon: Database,
      accentHex: "#3b82f6",
      accentBg: "bg-blue-50 text-blue-800 border-blue-200",
      accentDot: "bg-blue-500",
      skills: ["MongoDB Atlas", "PostgreSQL", "MySQL Server", "SQL Queries"],
      highlights: [
        "High-throughput aggregation pipelines and document indexing.",
        "Relational foreign keys and normalized database architectures."
      ],
      metrics: [
        { label: "Uptime Reliability", val: "99.99%" }
      ],
      project: {
        name: "Nexovain CRM",
        url: "https://nexovain-crm.netlify.app/"
      }
    },
    {
      id: "stack-05",
      number: "05",
      tag: "TECH-05 // INTELLIGENCE",
      category: "Data Analytics & BI",
      title: "Power BI & Analytics",
      subtitle: "Business Intelligence & Telemetry Dashboards",
      icon: BarChart3,
      accentHex: "#8b5cf6",
      accentBg: "bg-purple-50 text-purple-800 border-purple-200",
      accentDot: "bg-purple-500",
      skills: ["Power BI", "DAX Formulas", "Pandas & NumPy", "Advanced Excel"],
      highlights: [
        "Interactive enterprise executive dashboards and trend forecasting.",
        "Statistical data wrangling and clean aggregation pipelines."
      ],
      metrics: [
        { label: "Telemetry Engine", val: "Power BI / DAX" }
      ],
      project: {
        name: "StockPilot",
        url: "https://stockpilot-io.netlify.app/"
      }
    },
    {
      id: "stack-06",
      number: "06",
      tag: "TECH-06 // DESIGN SYSTEM",
      category: "Styling & UI Tokens",
      title: "Tailwind CSS & Design Tokens",
      subtitle: "Modern Responsive Tokens & Grids",
      icon: Layers,
      accentHex: "#06b6d4",
      accentBg: "bg-cyan-50 text-cyan-800 border-cyan-200",
      accentDot: "bg-cyan-500",
      skills: ["Tailwind CSS", "CSS3 / Flexbox", "CSS Grids", "Responsive UI"],
      highlights: [
        "Pixel-perfect responsive typography, auto-layout geometry, and tokens.",
        "Ultra-clean luxury streetwear aesthetics with fluid animations."
      ],
      metrics: [
        { label: "Design Geometry", val: "Mobile-1st Tokens" }
      ],
      project: {
        name: "Saffron Table",
        url: "https://saffron-table.netlify.app/"
      }
    },
    {
      id: "stack-07",
      number: "07",
      tag: "TECH-07 // PIPELINES",
      category: "DevOps & Tooling",
      title: "Git, Vite & Modern Tooling",
      subtitle: "Version Control, Postman & Fast Bundling",
      icon: GitBranch,
      accentHex: "#ec4899",
      accentBg: "bg-pink-50 text-pink-800 border-pink-200",
      accentDot: "bg-pink-500",
      skills: ["Git & GitHub", "Vite Bundler", "Postman API", "Netlify & Vercel"],
      highlights: [
        "Automated production build checks, git branching, and pull requests.",
        "Sub-second hot module replacement and lightning fast asset deployment."
      ],
      metrics: [
        { label: "Build Engine", val: "Vite HMR" }
      ],
      project: {
        name: "MedCarePlus",
        url: "https://medcarepluss.netlify.app/"
      }
    },
    {
      id: "stack-08",
      number: "08",
      tag: "TECH-08 // AI TOOLING",
      category: "AI Acceleration",
      title: "AI Tools & Velocity Workflows",
      subtitle: "Copilot Workflows, Automated Scaffolding & Prompting",
      icon: Bot,
      accentHex: "#64748b",
      accentBg: "bg-zinc-100 text-zinc-800 border-zinc-200",
      accentDot: "bg-zinc-700",
      skills: ["GitHub Copilot", "Prompt Engineering", "VS Code Custom Config", "AI Telemetry"],
      highlights: [
        "3x engineering speed via AI-assisted scaffolding and instant test generation.",
        "Continuous refinement of complex logic and modern code quality standards."
      ],
      metrics: [
        { label: "Engineering Boost", val: "3x Prototyping" }
      ],
      project: {
        name: "Iron Pulse Gym",
        url: "https://iron-pulse-fitnes.netlify.app/"
      }
    }
  ];

  // Pinned Scroll-Driven Horizontal Translation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate dynamic pixel scroll distance based on track's real scrollWidth
  useEffect(() => {
    const calculateMaxScroll = () => {
      if (trackRef.current) {
        const scrollW = trackRef.current.scrollWidth;
        const clientW = window.innerWidth;
        // Total distance needed to bring the last card (Card 8) comfortably into view
        setMaxScroll(Math.max(0, scrollW - clientW + 80));
      }
    };

    calculateMaxScroll();
    const timer = setTimeout(calculateMaxScroll, 300);
    window.addEventListener('resize', calculateMaxScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateMaxScroll);
    };
  }, []);

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });

  const xTransform = useTransform(smoothProgress, [0, 1], [0, -maxScroll]);

  // Track active card index based on progress
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      const idx = Math.min(Math.floor(latest * techStacks.length), techStacks.length - 1);
      setActiveIdx(idx);
    });
  }, [scrollYProgress, techStacks.length]);

  // Click handler to scroll to a specific card index
  const scrollToCard = (index) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerTop + (index / (techStacks.length - 1)) * containerHeight;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  const handlePrev = () => {
    const nextIdx = Math.max(0, activeIdx - 1);
    scrollToCard(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = Math.min(techStacks.length - 1, activeIdx + 1);
    scrollToCard(nextIdx);
  };

  return (
    <section 
      id="skills" 
      ref={containerRef}
      className="relative h-[220vh] bg-[#faf8f5] text-zinc-950 select-none"
    >
      {/* Sticky Viewport Container - Comfortably fits below 80px fixed navbar with ample headroom */}
      <div className="sticky top-20 h-[calc(100dvh-80px)] flex flex-col justify-between pt-3 sm:pt-4 pb-3 sm:pb-4 overflow-hidden">
        
        {/* =========================================================================
            CLEAN SECTION HEADER & CONTROLS (Removed clunky pills & gray scrollbar)
        ========================================================================== */}
        <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-[1400px] z-20 shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 gap-3">
            
            <div>
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-0.5">
                <span className="w-5 h-[1.5px] bg-zinc-950"></span>
                <span>CHAPTER 04 // TECHNICAL ECOSYSTEM</span>
              </div>
              <h2 className="font-sans font-black text-2xl sm:text-3xl text-zinc-950 tracking-tight uppercase leading-tight">
                SKILLS <span className="font-serif italic lowercase font-normal text-zinc-500">carousel</span>.
              </h2>
            </div>

            {/* Stepper Controls, Live Stack Name & Counter */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="text-xs font-mono text-zinc-500 hidden md:flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-bold text-zinc-900">{techStacks[activeIdx].title}</span>
                <span className="text-zinc-400">•</span>
                <span>Scroll or click &rarr;</span>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrev}
                  disabled={activeIdx === 0}
                  className="w-8 h-8 rounded-full bg-white border border-zinc-200/90 flex items-center justify-center text-zinc-700 hover:text-zinc-950 hover:border-zinc-400 disabled:opacity-40 disabled:hover:border-zinc-200 shadow-2xs transition-all"
                  title="Previous Tech Stack"
                >
                  <ChevronLeft size={15} />
                </button>
                <button
                  onClick={handleNext}
                  disabled={activeIdx === techStacks.length - 1}
                  className="w-8 h-8 rounded-full bg-white border border-zinc-200/90 flex items-center justify-center text-zinc-700 hover:text-zinc-950 hover:border-zinc-400 disabled:opacity-40 disabled:hover:border-zinc-200 shadow-2xs transition-all"
                  title="Next Tech Stack"
                >
                  <ChevronRight size={15} />
                </button>
              </div>

              {/* Progress Count */}
              <div className="text-xs font-mono font-bold text-zinc-900 bg-white px-3 py-1 rounded-full border border-zinc-200 shadow-2xs">
                0{activeIdx + 1} / 0{techStacks.length}
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            SLIDING HORIZONTAL CARDS RUNWAY (Cards 100% visible & properly aligned)
        ========================================================================== */}
        <div className="relative w-full overflow-hidden my-auto py-3">
          <motion.div
            ref={trackRef}
            style={{ x: xTransform }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="flex items-center gap-4 sm:gap-6 pl-4 sm:pl-8 lg:pl-16 pr-16 will-change-transform py-1"
          >
            {techStacks.map((stack, idx) => {
              const Icon = stack.icon;
              const isActive = activeIdx === idx;

              return (
                <div
                  key={stack.id}
                  className={`w-[285px] sm:w-[325px] md:w-[350px] min-h-[380px] sm:min-h-[395px] shrink-0 rounded-3xl p-4 sm:p-5.5 bg-white border-2 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md ${
                    isActive 
                      ? 'border-zinc-950 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.12)] ring-1 ring-zinc-950/10 scale-[1.01]' 
                      : 'border-zinc-200/90 hover:border-zinc-400'
                  }`}
                >
                  <div className="flex-1 flex flex-col">
                    {/* Card Top Pill & Header */}
                    <div className="flex items-center justify-between pb-2 sm:pb-2.5 mb-2.5 sm:mb-3 border-b border-zinc-100">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${stack.accentDot}`} />
                        <span className="text-[10px] font-mono uppercase font-bold text-zinc-500">
                          {stack.tag}
                        </span>
                      </div>

                      <span className={`text-[9.5px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full border font-bold uppercase ${stack.accentBg}`}>
                        {stack.category}
                      </span>
                    </div>

                    {/* Stack Identity */}
                    <div className="mb-2 sm:mb-2.5">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-zinc-950 text-white flex items-center justify-center shadow-2xs mb-1.5 sm:mb-2">
                        <Icon size={16} />
                      </div>

                      <h3 className="font-sans font-black text-base sm:text-xl text-zinc-950 tracking-tight leading-snug">
                        {stack.title}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-zinc-500 font-normal leading-tight mt-0.5">
                        {stack.subtitle}
                      </p>
                    </div>

                    {/* Skill Pills */}
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2 sm:mb-2.5">
                      {stack.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-1.5 sm:px-2 py-0.5 rounded-md bg-[#faf8f5] border border-zinc-200/80 text-zinc-800 text-[9.5px] sm:text-[10px] font-mono font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Verified Capabilities */}
                    <div className="space-y-1 mt-auto mb-2">
                      {stack.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-1.5 text-[10.5px] sm:text-[11px] text-zinc-600 leading-snug">
                          <CheckCircle2 size={11} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Metric & Live Project Link (Always comfortable padding) */}
                  <div className="pt-2 sm:pt-2.5 border-t border-zinc-100 flex items-center justify-between mt-auto shrink-0">
                    <div>
                      <div className="text-[9px] font-mono text-zinc-400 uppercase font-semibold">
                        {stack.metrics[0].label}
                      </div>
                      <div className="text-xs font-mono font-bold text-zinc-950">
                        {stack.metrics[0].val}
                      </div>
                    </div>

                    <a
                      href={stack.project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-[10px] font-mono font-bold flex items-center gap-1 shadow-2xs transition-colors shrink-0"
                      title={`Open ${stack.project.name}`}
                    >
                      <span>{stack.project.name}</span>
                      <ExternalLink size={9} />
                    </a>
                  </div>

                </div>
              );
            })}
          </motion.div>
        </div>

        {/* =========================================================================
            SLIM BOTTOM PROGRESS & DOTS DOCK (Compact, no vertical crowding)
        ========================================================================== */}
        <div className="container mx-auto px-4 sm:px-8 max-w-7xl shrink-0 z-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1 text-[11px] sm:text-xs font-mono text-zinc-500 gap-2">
            <div className="flex items-center gap-2 truncate">
              <span className="font-bold text-zinc-900 shrink-0">Stack 0{activeIdx + 1}:</span>
              <span className="text-zinc-600 truncate">
                {techStacks[activeIdx].title} ({techStacks[activeIdx].category})
              </span>
            </div>

            {/* Clickable Step Indicator Dots */}
            <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-auto">
              {techStacks.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToCard(i)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    activeIdx === i 
                      ? 'w-6 sm:w-7 bg-zinc-950' 
                      : 'w-2 bg-zinc-300 hover:bg-zinc-400'
                  }`}
                  title={`Jump to stack ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
