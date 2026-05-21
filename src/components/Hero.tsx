'use client';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useEffect } from 'react';

// ── Editorial language pulled from open-design.ai ──────────────────────────
const ISSUE   = 'Nº 01';
const VOLUME  = 'Vol. 01';
const YEAR    = 'MMXXVI';
const COORDS  = '26.1445° N · 91.7362° E'; // Guwahati, Assam
const PLACE   = 'Assam / India / Earth';
const FILED   = 'Engineering · Infrastructure · Intelligence';
const SHA     = 'a1b2c3d'; // replace with real git SHA via env var if you want
// ───────────────────────────────────────────────────────────────────────────

// Live ticker: cities Thimpu's work has touched
const CITIES = [
  '· Guwahati', '· Delhi', '· Mumbai', '· Bengaluru',
  '· Singapore', '· London', '· Berlin', '· San Francisco',
  '· New York', '· Tokyo', '· Sydney', '· Dubai',
  '· Guwahati', '· Delhi', '· Mumbai', '· Bengaluru',
];

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    setMounted(true);
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false,
      }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#030712] overflow-hidden flex flex-col">

      {/* ── Subtle noise grain overlay ── */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '160px 160px',
        }}
      />

      {/* ── Masthead bar ─────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 border-b border-white/[0.06] px-6 md:px-12 py-3
                   flex items-center justify-between text-[10px] tracking-widest
                   text-gray-600 uppercase font-mono"
      >
        <span>
          {VOLUME} · Issue {ISSUE} · Apache-2.0
        </span>
        <span className="hidden md:block">
          Engineering · Infrastructure · Intelligence
        </span>
        <span className="font-mono text-gray-700">
          {mounted ? time + ' IST' : '──:──:── IST'}
        </span>
      </motion.div>

      {/* ── Main editorial content ───────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col px-6 md:px-12 pt-12 pb-0 max-w-7xl mx-auto w-full">

        {/* ── Top row: identity + meta column ── */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-0 mb-12">

          {/* Left: Studio label */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="w-7 h-7 rounded-full border border-blue-500/40 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            </div>
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-gray-600 font-mono">Thimpu Sengyung</p>
              <p className="text-[10px] tracking-[0.18em] uppercase text-gray-700 font-mono">Engineer Nº 01</p>
            </div>
          </motion.div>

          {/* Right: meta grid */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap gap-x-8 gap-y-2 text-[10px] font-mono text-gray-600 tracking-widest uppercase"
          >
            <span>{YEAR} · {VOLUME} / Issue {ISSUE}</span>
            <span>Filed under <span className="text-blue-500/70">{FILED}</span></span>
            <span>{COORDS}</span>
            <span className="text-gray-700">SHA · {SHA}</span>
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="h-px bg-white/[0.07] mb-12"
        />

        {/* ── Headline block ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          className="mb-12"
        >
          {/* FIG label like open-design */}
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-700 mb-6">
            FIG. 01 / TS-{ISSUE} · Plate Nº 01 · Composed in Assam
          </p>

          {/* THE BIG HEADLINE */}
          <h1
            className="font-serif text-[clamp(3rem,9vw,7.5rem)] leading-[0.93] tracking-[-0.02em] text-white mb-8"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            Designing
            <br />
            <em className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              intelligence
            </em>
            <br />
            with code,
            <br />
            <span className="text-gray-500 text-[0.6em] tracking-normal font-sans font-light">
              taste, and infrastructure.
            </span>
          </h1>

          {/* Byline row */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 font-mono border-l-2 border-blue-500/30 pl-4">
            <span>Software Engineer</span>
            <span className="text-gray-700">·</span>
            <span>Full Stack Developer</span>
            <span className="text-gray-700">·</span>
            <span>DevOps Engineer</span>
            <span className="text-gray-700">·</span>
            <span className="text-blue-400/80">Technical Officer · JJM Assam</span>
          </div>
        </motion.div>

        {/* ── Divider ── */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="h-px bg-white/[0.07] mb-10"
        />

        {/* ── Two-column editorial body ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12"
        >
          {/* Column 1: Abstract / tagline */}
          <div className="lg:col-span-2 space-y-4 text-gray-400 leading-relaxed">
            <p className="text-base">
              Building <span className="text-white font-medium">scalable systems</span> and clean digital
              experiences — from cloud infrastructure to polished frontends. Currently contributing
              to <span className="text-blue-400">Jal Jeevan Mission, Assam</span> — a national
              initiative to bring tap water to every rural household in India.
            </p>
            <p className="text-sm text-gray-500">
              Over 3 years shipping production-grade backend systems, automating delivery
              pipelines, and deploying AI-powered products. Every layer of the stack, from
              Linux administration to React interfaces.
            </p>

            {/* CTA row — editorial style */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-6 py-2.5 bg-white text-black text-sm font-medium tracking-wide hover:bg-gray-100 transition-colors duration-200"
              >
                Commission Work →
              </a>
              <a
                href="https://github.com/thimpu-create"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 border border-white/10 text-gray-400 text-sm font-mono tracking-wide hover:border-white/30 hover:text-white transition-all duration-200"
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com/in/thimpu-sengyung-a00614260"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 border border-white/10 text-gray-400 text-sm font-mono tracking-wide hover:border-white/30 hover:text-white transition-all duration-200"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Column 2: Stats sidebar */}
          <div className="border border-white/[0.06] p-6 space-y-6">
            <p className="text-[10px] tracking-[0.25em] uppercase text-gray-600 font-mono border-b border-white/[0.06] pb-3">
              At a glance
            </p>
            {[
              { label: 'Years in production', value: '3+' },
              { label: 'Tools shipped', value: '15+' },
              { label: 'Live products', value: '2' },
              { label: 'Security score', value: 'A+' },
              { label: 'Uptime', value: '99.9%' },
            ].map((s) => (
              <div key={s.label} className="flex justify-between items-baseline">
                <span className="text-xs text-gray-600 font-mono">{s.label}</span>
                <span className="text-white font-serif text-lg italic">{s.value}</span>
              </div>
            ))}

            {/* CI badge inline */}
            <div className="pt-2 border-t border-white/[0.06]">
              <div className="flex items-center gap-2 text-[10px] font-mono text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400">CI passing</span>
                <span className="mx-1 text-gray-700">·</span>
                <span>GitHub Actions → Vercel → Edge</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Scrolling city ticker ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="border-t border-white/[0.06] py-3 overflow-hidden"
        >
          <div
            className="flex gap-8 text-[10px] font-mono tracking-widest text-gray-700 uppercase whitespace-nowrap animate-ticker"
            style={{ width: 'max-content' }}
          >
            {[...CITIES, ...CITIES].map((city, i) => (
              <span key={i}>{city}</span>
            ))}
          </div>
        </motion.div>

        {/* ── Section label bottom ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="py-3 border-t border-white/[0.06] flex justify-between text-[10px] font-mono text-gray-700 tracking-widest"
        >
          <span>{PLACE}</span>
          <span>001 / 007</span>
        </motion.div>
      </div>

      {/* ── Ticker keyframe injected inline ── */}
      <style jsx>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 28s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;