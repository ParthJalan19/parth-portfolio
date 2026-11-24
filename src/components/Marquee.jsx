import React from 'react';
import { Sparkles, Code2, Cpu, Database, Flame, Terminal, Layers, Palette } from 'lucide-react';

export default function Marquee() {
  const stackItems = [
    { text: "FULL STACK DEVELOPER", icon: Terminal, color: "text-zinc-950" },
    { text: "REACT.JS & NEXT.JS", icon: Code2, color: "text-zinc-800" },
    { text: "UI / UX DESIGNER", icon: Palette, color: "text-zinc-900" },
    { text: "GSAP 3D MOTION", icon: Sparkles, color: "text-zinc-800" },
    { text: "TAILWIND CSS", icon: Layers, color: "text-zinc-900" },
    { text: "JAVA & PYTHON", icon: Terminal, color: "text-zinc-950" },
    { text: "MONGODB ATLAS & SQL", icon: Database, color: "text-zinc-800" },
    { text: "SHAH & ANCHOR (CGPA 8.3)", icon: Flame, color: "text-amber-600" },
    { text: "ANDEVENTS SOFTWARE DEV", icon: Cpu, color: "text-zinc-950" },
    { text: "POWER BI & ANALYTICS", icon: Cpu, color: "text-zinc-800" }
  ];

  return (
    <div className="py-5 bg-[#faf8f5] overflow-hidden relative select-none pointer-events-none">
      {/* Side Vignette Fades in Warm Ivory */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#fbf9f6] to-transparent z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#fbf9f6] to-transparent z-10" />

      <div className="flex flex-col gap-2.5">
        {/* Row 1 - Forward */}
        <div className="animate-marquee flex items-center gap-8 text-xs font-mono tracking-widest font-semibold uppercase">
          {[...stackItems, ...stackItems].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-center gap-3 shrink-0 text-zinc-800">
                <Icon size={14} className={item.color} />
                <span className="hover:text-zinc-950 transition-colors font-bold">{item.text}</span>
                <span className="text-zinc-400 font-normal">✦</span>
              </div>
            );
          })}
        </div>

        {/* Row 2 - Reverse */}
        <div className="animate-marquee-rev flex items-center gap-8 text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
          {[...stackItems, ...stackItems].reverse().map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-center gap-3 shrink-0">
                <Icon size={12} className={item.color} />
                <span className="text-zinc-600">{item.text}</span>
                <span className="text-zinc-300">/</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
