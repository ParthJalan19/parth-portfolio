import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  ChevronRight, 
  Send, 
  Sparkles, 
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Copy
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin } from './Icons';

export default function Contact() {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#09090b', '#71717a', '#ff5500', '#f59e0b', '#10b981']
        });
      } catch {
        // Fallback
      }
    }, 900);
  };

  const capabilities = [
    {
      title: "Frontend Development:",
      desc: "Responsive web apps, interactive 3D UI, React 19 & GSAP motion"
    },
    {
      title: "Backend Development:",
      desc: "High-throughput Java, Python architectures & RESTful APIs"
    },
    {
      title: "Web Security & Performance:",
      desc: "Sub-second load times, CI/CD pipelines & 99.9% uptime"
    },
    {
      title: "E-commerce & Enterprise Solutions:",
      desc: "Scalable cloud databases, analytics dashboards & tailor-made systems"
    }
  ];

  // Motion variants for sequential line-by-line reveal from Left
  const lineVariantLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: (i = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.65,
        delay: i * 0.12, // 120ms stagger between each consecutive line
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  // Motion variants for sequential line-by-line reveal from Right
  const lineVariantRight = {
    hidden: { opacity: 0, x: 50 },
    visible: (i = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.65,
        delay: 0.08 + (i * 0.12), // 120ms stagger between each consecutive line
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <section 
      id="contact" 
      className="relative pt-12 pb-14 sm:pt-14 sm:pb-16 bg-[#faf8f5] text-zinc-950 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-[1400px] relative z-10">
        
        {/* =========================================================================
            TOP SECTION HEADER: Centered Contact Us + Breadcrumb with Scroll Reveal
        ========================================================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl text-zinc-950 tracking-tight">
            Contact Us
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2 text-xs sm:text-sm font-mono text-zinc-500">
            <a href="#" className="hover:text-zinc-950 transition-colors">Home</a>
            <span className="text-zinc-400">&gt;</span>
            <span className="text-zinc-950 font-bold">Contact</span>
          </div>
        </motion.div>

        {/* =========================================================================
            TWO-COLUMN CONTACT SECTION (Sequential Line-by-Line Staggered Scroll Reveal)
        ========================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start overflow-hidden py-1">
          
          {/* ----------------- LEFT COLUMN: Each Line Staggered from Left ----------------- */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            
            {/* Line 0: Eyebrow */}
            <motion.div 
              custom={0}
              variants={lineVariantLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 font-bold mb-3"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>06 // GET IN TOUCH</span>
            </motion.div>

            {/* Line 1: Bold Heading */}
            <motion.h3 
              custom={1}
              variants={lineVariantLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-zinc-950 tracking-tight leading-[1.15] mb-5"
            >
              Let's Discuss Your{' '}
              <span className="text-zinc-950 block sm:inline font-black">Next Project!</span>
            </motion.h3>

            {/* Line 2: Subtitle / Paragraph */}
            <motion.p 
              custom={2}
              variants={lineVariantLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal mb-8 max-w-lg"
            >
              Engage in a conversation about your upcoming projects and explore how we can bring your ideas to life. Let's collaborate and turn your visions into reality together!
            </motion.p>

            {/* Lines 3 - 6: Capability Bullets One by One */}
            <div className="space-y-4">
              {capabilities.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  custom={3 + idx}
                  variants={lineVariantLeft} 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.15 }}
                  className="flex items-start gap-3.5"
                >
                  <div className="w-6 h-6 rounded-full bg-zinc-950 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <div className="text-sm">
                    <span className="font-bold text-zinc-950 tracking-tight mr-1.5">
                      {item.title}
                    </span>
                    <span className="text-zinc-600 font-normal">
                      {item.desc}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Line 7: Direct Contact Quick Actions (Email & Phone) */}
            <motion.div
              custom={7}
              variants={lineVariantLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              className="mt-8 pt-6 border-t border-zinc-200/80 flex flex-wrap gap-3"
            >
              {/* Direct Email Pill */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-zinc-200/80 shadow-2xs text-xs font-mono text-zinc-800">
                <Mail size={14} className="text-zinc-500" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-zinc-950 font-medium">
                  {personalInfo.email}
                </a>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="ml-1 p-1 rounded-md text-zinc-400 hover:text-zinc-950 transition-colors"
                  title="Copy Email"
                >
                  {copiedType === 'email' ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} />}
                </button>
              </div>

              {/* Direct Phone Pill */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-zinc-200/80 shadow-2xs text-xs font-mono text-zinc-800">
                <Phone size={14} className="text-zinc-500" />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-zinc-950 font-medium">
                  {personalInfo.phone}
                </a>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="ml-1 p-1 rounded-md text-zinc-400 hover:text-zinc-950 transition-colors"
                  title="Copy Phone Number"
                >
                  {copiedType === 'phone' ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} />}
                </button>
              </div>
            </motion.div>

            {/* Line 8: Social Links */}
            <motion.div
              custom={8}
              variants={lineVariantLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              className="mt-4 flex items-center gap-3"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-xs font-mono text-zinc-700 transition-colors"
              >
                <Github size={13} />
                <span>GitHub</span>
                <ArrowUpRight size={11} className="text-zinc-400" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-xs font-mono text-zinc-700 transition-colors"
              >
                <Linkedin size={13} />
                <span>LinkedIn</span>
                <ArrowUpRight size={11} className="text-zinc-400" />
              </a>
            </motion.div>

          </div>

          {/* ----------------- RIGHT COLUMN: Form Elements Staggered from Right ----------------- */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              /* Success confirmation */
              <div className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200/90 text-center flex flex-col items-center justify-center animate-in zoom-in-95 duration-300 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.06)]">
                <div className="w-16 h-16 rounded-full bg-zinc-950 text-white flex items-center justify-center mb-5 shadow-sm">
                  <Check size={30} strokeWidth={2.5} />
                </div>
                <h4 className="font-sans font-bold text-2xl text-zinc-950 mb-2">
                  Message Transmitted!
                </h4>
                <p className="text-zinc-600 text-sm max-w-md mb-6 leading-relaxed">
                  Thank you for reaching out, <strong className="text-zinc-950">{formState.fullName || 'friend'}</strong>. Your message regarding <strong className="text-zinc-950">{formState.subject || 'your project'}</strong> has been sent to Parth Jalan. I will get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormState({ fullName: '', email: '', phone: '', subject: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold transition-all shadow-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              /* Active Form with Staggered Inputs */
              <div className="p-6 sm:p-9 rounded-3xl bg-white border border-zinc-200/90 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.05)]">
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Line 0: Header */}
                  <motion.div 
                    custom={0}
                    variants={lineVariantRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.15 }}
                    className="border-b border-zinc-100 pb-3 mb-2"
                  >
                    <h4 className="font-sans font-bold text-lg text-zinc-950">
                      Send Us a Message
                    </h4>
                    <p className="text-xs text-zinc-500 font-normal">
                      Fill out the fields below to start a conversation.
                    </p>
                  </motion.div>

                  {/* Line 1 & 2: Full Name & Email (Animated sequentially one after another) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <motion.div 
                      custom={1}
                      variants={lineVariantRight}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.15 }}
                    >
                      <label className="block text-xs font-sans text-zinc-800 font-bold mb-2">
                        Full Name <span className="text-[#ff5500]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.fullName}
                        onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                        placeholder="Richard D. Hammond"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#faf8f5] border border-zinc-200 text-zinc-950 placeholder-zinc-400 text-sm focus:outline-none focus:border-zinc-950 focus:bg-white shadow-2xs transition-all"
                      />
                    </motion.div>

                    <motion.div 
                      custom={2}
                      variants={lineVariantRight}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.15 }}
                    >
                      <label className="block text-xs font-sans text-zinc-800 font-bold mb-2">
                        Email <span className="text-[#ff5500]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="richard@example.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#faf8f5] border border-zinc-200 text-zinc-950 placeholder-zinc-400 text-sm focus:outline-none focus:border-zinc-950 focus:bg-white shadow-2xs transition-all"
                      />
                    </motion.div>
                  </div>

                  {/* Line 3 & 4: Phone & Subject (Animated sequentially one after another) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <motion.div 
                      custom={3}
                      variants={lineVariantRight}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.15 }}
                    >
                      <label className="block text-xs font-sans text-zinc-800 font-bold mb-2">
                        Phone <span className="text-[#ff5500]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+91 77387 04634"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#faf8f5] border border-zinc-200 text-zinc-950 placeholder-zinc-400 text-sm focus:outline-none focus:border-zinc-950 focus:bg-white shadow-2xs transition-all"
                      />
                    </motion.div>

                    <motion.div 
                      custom={4}
                      variants={lineVariantRight}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.15 }}
                    >
                      <label className="block text-xs font-sans text-zinc-800 font-bold mb-2">
                        Subject <span className="text-[#ff5500]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        placeholder="Project Inquiry / Collaboration"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#faf8f5] border border-zinc-200 text-zinc-950 placeholder-zinc-400 text-sm focus:outline-none focus:border-zinc-950 focus:bg-white shadow-2xs transition-all"
                      />
                    </motion.div>
                  </div>

                  {/* Line 5: Message */}
                  <motion.div 
                    custom={5}
                    variants={lineVariantRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.15 }}
                  >
                    <label className="block text-xs font-sans text-zinc-800 font-bold mb-2">
                      Message <span className="text-[#ff5500]">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about your project, timeline, and goals..."
                      className="w-full px-4 py-3.5 rounded-xl bg-[#faf8f5] border border-zinc-200 text-zinc-950 placeholder-zinc-400 text-sm focus:outline-none focus:border-zinc-950 focus:bg-white shadow-2xs transition-all resize-none"
                    />
                  </motion.div>

                  {/* Line 6: Submit Button */}
                  <motion.div 
                    custom={6}
                    variants={lineVariantRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.15 }}
                    className="pt-2"
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-sm tracking-tight flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Us Message</span>
                          <ChevronRight size={16} strokeWidth={2.8} />
                        </>
                      )}
                    </button>
                  </motion.div>

                </form>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
