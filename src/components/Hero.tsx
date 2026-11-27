'use client';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react';
import { useState } from 'react';

const HIGHLIGHTS = [
  { label: 'JJM Brain HRMS', detail: 'Govt-Compliant · Assam' },
  { label: 'AI-Native SDLC', detail: 'RAG · MCP · Agentic' },
  { label: 'Laravel & Livewire', detail: 'Filament · Multi-Scope' },
  { label: 'Python & FastAPI', detail: 'Django · REST APIs' },
  { label: 'Next.js & TypeScript', detail: 'React · Tailwind' },
  { label: 'Docker & AWS', detail: 'Nginx · GitHub Actions' },
];

const Hero = () => {
  const [offset, setOffset] = useState(0);

  const cycleHighlights = (dir: -1 | 1) => {
    setOffset((prev) => (prev + dir + HIGHLIGHTS.length) % HIGHLIGHTS.length);
  };

  const orderedHighlights = [
    ...HIGHLIGHTS.slice(offset),
    ...HIGHLIGHTS.slice(0, offset),
  ];

  const scrollToExpertise = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('expertise');
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-24 pb-10 px-6"
      style={{
        background: 'linear-gradient(180deg, var(--bg-hero-from) 0%, var(--bg-hero-to) 100%)',
      }}
    >
      {/* ── Tamal-inspired 3D Geometric Cubes + Glowing Orb Backdrop ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        {/* Warm top ambient orb glow */}
        <div
          className="absolute -top-20 w-[420px] h-[420px] md:w-[560px] md:h-[560px] rounded-full blur-3xl opacity-75"
          style={{
            background: 'radial-gradient(circle, var(--orb-glow) 0%, transparent 70%)',
          }}
        />
        {/* Subtle cyan accent glow */}
        <div
          className="absolute bottom-16 right-[12%] w-80 h-80 rounded-full blur-3xl opacity-25"
          style={{
            background: 'radial-gradient(circle, var(--accent-cyan) 0%, transparent 72%)',
          }}
        />

        {/* Isometric Geometric Composition (SVG, adapts cleanly to Dark & Light) */}
        <svg
          viewBox="0 0 900 540"
          className="w-[780px] max-w-[115vw] h-auto opacity-90 select-none"
          fill="none"
        >
          <defs>
            <radialGradient id="sunOrb" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fff7ed" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#fdba74" stopOpacity="0.72" />
              <stop offset="100%" stopColor="#fb923c" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="rimLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fdba74" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#9b51e0" stopOpacity="0.15" />
            </linearGradient>
          </defs>

          {/* Glowing Orb */}
          <circle cx="515" cy="145" r="78" fill="url(#sunOrb)" />

          {/* Left floating rotated cube */}
          <g className="animate-float-slow" style={{ transformOrigin: '240px 250px' }}>
            <polygon points="180,220 240,186 300,220 240,254" fill="var(--cube-face-c)" stroke="url(#rimLight)" strokeWidth="1.2" />
            <polygon points="180,220 240,254 240,322 180,288" fill="var(--cube-face-a)" />
            <polygon points="300,220 240,254 240,322 300,288" fill="var(--cube-face-b)" />
          </g>

          {/* Center-hero large tilted cube with warm top rim-light */}
          <g className="animate-float" style={{ transformOrigin: '450px 270px' }}>
            <polygon points="360,215 455,165 545,215 450,265" fill="var(--cube-face-c)" stroke="url(#rimLight)" strokeWidth="2" />
            <polygon points="360,215 450,265 450,375 360,325" fill="var(--cube-face-a)" />
            <polygon points="545,215 450,265 450,375 545,325" fill="var(--cube-face-b)" />
          </g>

          {/* Right floating prism / cylinder motif */}
          <g className="animate-float-slow" style={{ transformOrigin: '675px 290px' }}>
            <polygon points="625,255 675,227 725,255 675,283" fill="var(--cube-face-c)" stroke="url(#rimLight)" strokeWidth="1.2" />
            <polygon points="625,255 675,283 675,345 625,317" fill="var(--cube-face-a)" />
            <polygon points="725,255 675,283 675,345 725,317" fill="var(--cube-face-b)" />
          </g>

          {/* Foreground accent poly */}
          <polygon
            points="395,380 450,348 505,380 450,412"
            fill="var(--cube-face-c)"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Top spacer for balanced vertical centering */}
      <div className="h-6" />

      {/* ── Center Focal Block ── */}
      <div className="relative z-10 max-w-6xl mx-auto w-full text-center my-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)]/75 backdrop-blur-sm mb-7 font-mono text-[11px] uppercase tracking-[0.2em]"
          style={{ color: 'var(--text-secondary)' }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Technical Officer · Jal Jeevan Mission, Assam</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="font-sans font-extrabold uppercase tracking-[0.03em] leading-[0.95] select-none"
          style={{
            fontSize: 'clamp(2.8rem, 8.2vw, 6.75rem)',
            color: 'var(--text-primary)',
          }}
        >
          THIMPU SENGYUNG
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-5 font-mono uppercase tracking-[0.22em] text-xs sm:text-sm md:text-base max-w-3xl mx-auto leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          SOFTWARE ENGINEER, FULL-STACK, DEVOPS &amp; AI-NATIVE BUILDER.
        </motion.p>

        {/* Action Links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-lg font-mono text-xs uppercase tracking-widest text-white font-semibold shadow-lg transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: 'var(--accent-violet)' }}
          >
            Explore My Work →
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-lg font-mono text-xs uppercase tracking-widest border border-[var(--border-strong)] bg-[var(--bg-surface)]/75 hover:border-[var(--accent-cyan)] transition-colors"
            style={{ color: 'var(--text-primary)' }}
          >
            Let&apos;s Talk
          </a>
        </motion.div>

        {/* ── Tamal-style "AS FEATURED IN" -> "BUILT & SHIPPED IN PRODUCTION" Strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="mt-14 max-w-4xl mx-auto"
        >
          <p
            className="font-mono text-[10px] uppercase tracking-[0.3em] mb-4"
            style={{ color: 'var(--text-muted)' }}
          >
            PRODUCTION FOCUS &amp; CORE ECOSYSTEM
          </p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => cycleHighlights(-1)}
              aria-label="Previous highlight"
              className="p-1.5 rounded border border-[var(--border-subtle)] hover:border-[var(--accent-cyan)] transition-colors shrink-0"
              style={{ color: 'var(--text-muted)' }}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 flex-1 overflow-hidden">
              {orderedHighlights.slice(0, 5).map((item) => (
                <div
                  key={item.label}
                  className="px-3 py-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)]/55 backdrop-blur-sm text-center"
                >
                  <p className="font-sans font-semibold text-xs truncate" style={{ color: 'var(--text-primary)' }}>
                    {item.label}
                  </p>
                  <p className="font-mono text-[10px] truncate mt-0.5" style={{ color: 'var(--text-muted)' }}>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => cycleHighlights(1)}
              aria-label="Next highlight"
              className="p-1.5 rounded border border-[var(--border-subtle)] hover:border-[var(--accent-cyan)] transition-colors shrink-0"
              style={{ color: 'var(--text-muted)' }}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* ── Centered Bottom Scroll Cue (Mouse Pill + Violet Arrow) ── */}
      <div className="relative z-10 flex justify-center pt-4">
        <a
          href="#expertise"
          onClick={scrollToExpertise}
          aria-label="Scroll to My Expertise"
          className="group flex flex-col items-center gap-2 focus-visible:outline-2"
        >
          <span
            className="w-7 h-11 rounded-full border-2 flex items-center justify-center transition-colors group-hover:border-[var(--accent-cyan)]"
            style={{ borderColor: 'var(--border-strong)' }}
          >
            <motion.span
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{ color: 'var(--accent-violet)' }}
            >
              <ArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
            </motion.span>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
