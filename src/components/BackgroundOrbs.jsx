import React, { useEffect, useState } from 'react';

export default function BackgroundOrbs() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Refreshing sunlit ambient background glows */}
      <div 
        className="absolute -top-[15%] left-[20%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-orange-200/40 via-amber-100/30 to-transparent blur-[140px] transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)` }}
      />
      <div 
        className="absolute top-[30%] -right-[12%] w-[750px] h-[750px] rounded-full bg-gradient-to-bl from-sky-100/50 via-amber-50/40 to-transparent blur-[160px] transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${-mousePos.x * 0.6}px, ${-mousePos.y * 0.6}px)` }}
      />
      <div 
        className="absolute bottom-[5%] left-[5%] w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-amber-100/40 via-orange-100/30 to-transparent blur-[150px] transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
      />

      {/* Subtle crisp geometric grid */}
      <div className="absolute inset-0 bg-grid-pattern-light opacity-60" />
      
      {/* Soft vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f5]/40 via-transparent to-[#faf8f5]/80 pointer-events-none" />
    </div>
  );
}