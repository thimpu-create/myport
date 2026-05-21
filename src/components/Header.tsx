'use client';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [theme, setTheme]         = useState<'dark' | 'light'>('dark');
  const [issue]                   = useState('Nº 01');
  const { scrollY }               = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 40));

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle('light-mode', saved === 'light');
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('light-mode', next === 'light');
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'About',      href: '#about' },
    { label: 'Skills',     href: '#skills' },
    { label: 'Projects',   href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact',    href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-[#030712]/90 border-b border-white/[0.06]'
          : 'border-b border-white/[0.04]'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Top micro-strip — volume/issue label ── */}
        {!scrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="hidden md:flex items-center justify-between border-b border-white/[0.04]
                       py-1.5 text-[9px] font-mono tracking-[0.25em] uppercase text-gray-700"
          >
            <span>Open · Vol. 01 / Issue {issue}</span>
            <span>Thimpu Sengyung · Engineer & DevOps</span>
            <span>MMXXVI · Assam / India</span>
          </motion.div>
        )}

        {/* ── Main nav row ── */}
        <div className="flex justify-between items-center py-4">

          {/* Logo — editorial wordmark */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              {/* Square bracket motif */}
              <span className="font-mono text-xs text-gray-600 group-hover:text-blue-500 transition-colors">[</span>
              <span className="font-serif text-base font-bold text-white tracking-tight italic mx-0.5">TS</span>
              <span className="font-mono text-xs text-gray-600 group-hover:text-blue-500 transition-colors">]</span>
            </div>
            <div className="hidden sm:block h-3.5 w-px bg-white/10" />
            <span className="hidden sm:block text-[9px] font-mono tracking-[0.2em] uppercase text-gray-600">
              Studio Nº 01
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item, i) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => item.href.startsWith('#') && handleScroll(e, item.href.substring(1))}
                className="relative group flex flex-col items-center gap-0.5"
              >
                {/* Issue number above label — editorial touch */}
                <span className="text-[8px] font-mono text-gray-700 tracking-widest">
                  0{i + 1}
                </span>
                <span className="text-xs text-gray-400 hover:text-white transition-colors duration-200 tracking-wide">
                  {item.label}
                </span>
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}

            <div className="h-4 w-px bg-white/10" />

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 border border-white/10 text-gray-500 hover:text-white hover:border-white/25 transition-all duration-200"
              aria-label="Toggle theme"
            >
              <motion.div
                key={theme}
                initial={{ rotate: -20, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.15 }}
              >
                {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              </motion.div>
            </button>

            {/* CTA — editorial style */}
            <a
              href="https://linkedin.com/in/thimpu-sengyung-a00614260"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-mono tracking-widest uppercase px-4 py-2
                         border border-white/10 text-gray-400 hover:border-blue-500/50
                         hover:text-blue-400 transition-all duration-200"
            >
              LinkedIn ↗
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-1.5 border border-white/10 text-gray-500 hover:text-white transition-all"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;