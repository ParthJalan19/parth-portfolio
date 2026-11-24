import React from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import BackgroundOrbs from './components/BackgroundOrbs';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import ExperienceFlow from './components/ExperienceFlow';
import Projects3D from './components/Projects3D';
import TechnicalEcosystem from './components/TechnicalEcosystem';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#faf8f5] text-zinc-950 selection:bg-zinc-950 selection:text-white font-sans antialiased overflow-x-clip">
      {/* Dynamic Refreshing Sunlit Ambient Glows */}
      <BackgroundOrbs />

      {/* Floating Spatial Light Navigation Bar */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Redesigned Hero: Dominic & James Lux Style with 3D Depth & Cursor Parallax */}
        <Hero />

        {/* 2. Continuous Marquee Ribbon */}
        <Marquee />

        {/* 3. About & Engineering Philosophy */}
        <About />

        {/* 4. Experience Flow (Flowing Scroll Journey) */}
        <ExperienceFlow />

        {/* 5. 3D Project Showcase Carousel */}
        <Projects3D />

        {/* 6. Technical Ecosystem (Architectural Bento Showcase) */}
        <TechnicalEcosystem />

        {/* 7. Direct Contact Lounge */}
        <Contact />
      </main>

      {/* Luxury Footer */}
      <Footer />
    </div>
  );
}
