import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  FileCheck 
} from 'lucide-react';
import { education, certifications } from '../data/portfolioData';

export default function EducationCertifications() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#faf8f5]">
      <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-200/80 pb-8 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
              <span className="w-6 h-[1.5px] bg-zinc-950"></span>
              <span>05 / ACADEMICS & CREDENTIALS</span>
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-5xl md:text-6xl text-zinc-950 tracking-tight uppercase">
              EDUCATION <span className="font-serif italic lowercase font-normal text-zinc-500">&</span> ACCREDITATIONS.
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full bg-[#f4ece1] border border-[#dfd3c3] text-zinc-900 text-xs font-mono flex items-center gap-1.5 font-bold shadow-2xs">
              <Award size={14} className="text-zinc-950" />
              <span>CGPA 8.3 Honors Standing</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Degree Card - Left 6 Cols */}
          <div className="lg:col-span-6 bg-white/90 p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.04)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ece1d3]/60 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-start justify-between gap-4 border-b border-zinc-200/70 pb-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-[#f4ece1] border border-[#dfd3c3] text-zinc-950 shadow-2xs">
                  <GraduationCap size={26} />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                    Undergraduate Degree
                  </span>
                  <h3 className="font-sans font-black text-xl sm:text-2xl text-zinc-950 mt-0.5">
                    {education.degree}
                  </h3>
                  <div className="text-sm text-zinc-700 font-medium mt-1">
                    {education.institution}
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-3.5 rounded-2xl bg-[#faf8f5] border border-zinc-200/70">
                <div className="text-[11px] font-mono text-zinc-500 flex items-center gap-1.5 font-semibold">
                  <Calendar size={12} />
                  <span>Duration</span>
                </div>
                <div className="text-sm font-bold text-zinc-950 mt-1">
                  {education.duration}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#f4ece1] border border-[#dfd3c3]">
                <div className="text-[11px] font-mono text-zinc-800 flex items-center gap-1.5 font-bold">
                  <Sparkles size={12} />
                  <span>Cumulative CGPA</span>
                </div>
                <div className="text-sm font-black text-zinc-950 mt-1 font-mono">
                  {education.cgpa}
                </div>
              </div>
            </div>

            {/* Academic Highlights */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-900 font-bold mb-3 flex items-center gap-1.5">
                <BookOpen size={13} className="text-zinc-950" />
                <span>Academic Core Competencies</span>
              </h4>

              <div className="space-y-2.5">
                {education.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-700 p-2.5 rounded-xl bg-white border border-zinc-200/60 shadow-2xs">
                    <CheckCircle2 size={14} className="text-zinc-950 mt-0.5 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Certifications Shelf - Right 6 Cols */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="bg-white/90 p-6 sm:p-8 rounded-3xl border border-zinc-200/80 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.04)]">
              <div className="flex items-center justify-between border-b border-zinc-200/70 pb-4 mb-6">
                <div>
                  <h3 className="font-sans font-black text-xl text-zinc-950 flex items-center gap-2">
                    <FileCheck size={20} className="text-zinc-950" />
                    <span>Professional Certifications</span>
                  </h3>
                  <p className="text-xs text-zinc-500 font-normal mt-0.5">
                    Specialized training across programming, databases, and analytics
                  </p>
                </div>
                <span className="text-xs font-mono text-zinc-800 bg-[#f4ece1] px-3 py-1 rounded-full border border-[#dfd3c3] font-semibold">
                  {certifications.length} Credentials
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-zinc-400 hover:bg-zinc-100 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold text-zinc-900 group-hover:text-zinc-950 transition-colors">
                        {cert.name}
                      </div>
                      <div className="text-[10px] font-mono text-zinc-500 mt-0.5">
                        {cert.issuer}
                      </div>
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-zinc-200 bg-white text-zinc-700 font-medium">
                      {cert.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Continuous Learning Badge */}
            <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-xs text-zinc-600 font-normal">
                <strong className="text-zinc-950 font-semibold">Interests & Pursuits:</strong> Software Engineering, Artificial Intelligence, High-Performance Web Animations, Open Source, and Data Analytics.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
