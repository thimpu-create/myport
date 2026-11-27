'use client';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowUp, Menu, Moon, Sun, X } from 'lucide-react';

type ThemePref = 'light' | 'dark' | 'system';

const NAV_ITEMS = [
  { num: '01', label: 'home', href: '#hero-section' },
  { num: '02', label: 'expertise', href: '#expertise' },
  { num: '03', label: 'work', href: '#work' },
  { num: '04', label: 'experience', href: '#experience' },
  { num: '05', label: 'contact', href: '#contact' },
];

function getSystemScheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyScheme(pref: ThemePref) {
  const meta = document.querySelector('meta[name="color-scheme"]');
  const content = pref === 'system' ? 'light dark' : pref;
  if (meta) meta.setAttribute('content', content);
  document.documentElement.classList.toggle('theme-light', pref === 'light');
  document.documentElement.classList.toggle('theme-dark', pref === 'dark');
}

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero-section');
  const [renderedScheme, setRenderedScheme] = useState<'light' | 'dark'>('dark');
  const [pref, setPref] = useState<ThemePref>('system');
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 90);
  });

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem('color-scheme');
    } catch {
      stored = null;
    }
    const initialPref: ThemePref = stored === 'light' || stored === 'dark' ? stored : 'system';
    setPref(initialPref);
    applyScheme(initialPref);
    setRenderedScheme(initialPref === 'system' ? getSystemScheme() : initialPref);

    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const onSystemChange = () => {
      let curr: string | null = null;
      try {
        curr = localStorage.getItem('color-scheme');
      } catch {
        curr = null;
      }
      if (curr !== 'light' && curr !== 'dark') {
        setRenderedScheme(mql.matches ? 'dark' : 'light');
      }
    };
    const onStorage = (e: StorageEvent) => {
      if (e.key !== 'color-scheme') return;
      const nextPref: ThemePref = e.newValue === 'light' || e.newValue === 'dark' ? e.newValue : 'system';
      setPref(nextPref);
      applyScheme(nextPref);
      setRenderedScheme(nextPref === 'system' ? getSystemScheme() : nextPref);
    };

    mql.addEventListener('change', onSystemChange);
    window.addEventListener('storage', onStorage);
    return () => {
      mql.removeEventListener('change', onSystemChange);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  useEffect(() => {
    const ids = NAV_ITEMS.map((item) => item.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const currentRendered = pref === 'system' ? getSystemScheme() : pref;
    const target: 'light' | 'dark' = currentRendered === 'dark' ? 'light' : 'dark';
    const systemNow = getSystemScheme();

    const nextPref: ThemePref = target === systemNow ? 'system' : target;
    try {
      if (nextPref === 'system') localStorage.removeItem('color-scheme');
      else localStorage.setItem('color-scheme', nextPref);
    } catch {
      // ignore storage errors
    }
    setPref(nextPref);
    applyScheme(nextPref);
    setRenderedScheme(target);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setMobileOpen(false);
    const menuEl = menuRef.current as (HTMLUListElement & { hidePopover?: () => void }) | null;
    if (menuEl && typeof menuEl.hidePopover === 'function') {
      try {
        menuEl.hidePopover();
      } catch {
        // popover may not be open
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-md border-b border-[var(--border-subtle)] shadow-sm'
            : 'bg-transparent'
        }`}
        style={scrolled ? { backgroundColor: 'var(--bg-header-sticky)' } : undefined}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between gap-6">
          {/* Logo — TamalSen._ inspired wordmark */}
          <Link
            href="#hero-section"
            onClick={(e) => handleNavClick(e, '#hero-section')}
            className={`text-xl md:text-2xl font-bold tracking-tight transition-opacity duration-300 ${
              scrolled ? 'md:opacity-90' : 'opacity-100'
            }`}
          >
            <span style={{ color: 'var(--accent-cyan)' }}>Thimpu.</span>
            <span style={{ color: 'var(--accent-violet)' }}>_</span>
          </Link>

          {/* Primary Navigation */}
          <nav aria-label="Primary" className="flex items-center gap-4 md:gap-8">
            <ul className="hidden md:flex items-center gap-7 lg:gap-9">
              {NAV_ITEMS.map((item) => {
                const isCurrent = activeSection === item.href.slice(1);
                return (
                  <li key={item.num}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      aria-current={isCurrent ? 'page' : undefined}
                      className="group relative inline-flex flex-col items-end font-mono text-[13px] tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4"
                      style={{
                        color: scrolled || isCurrent ? 'var(--accent-cyan)' : 'var(--text-primary)',
                      }}
                    >
                      <span
                        className="text-[9px] leading-none mb-0.5 opacity-65 group-hover:opacity-100 transition-opacity"
                        style={{ color: isCurrent ? 'var(--accent-violet)' : 'var(--text-muted)' }}
                      >
                        {item.num}
                      </span>
                      <span className="group-hover:opacity-80">
                        <span style={{ color: 'var(--text-muted)' }} className="mr-1">//</span>
                        {item.label}
                      </span>
                      <span
                        className={`h-[2px] mt-0.5 transition-all duration-200 ${
                          isCurrent ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-70'
                        }`}
                        style={{ backgroundColor: 'var(--accent-violet)' }}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={renderedScheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              title={renderedScheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)]/70 hover:border-[var(--accent-cyan)] transition-colors duration-200 font-mono text-xs"
              style={{ color: 'var(--text-primary)' }}
            >
              <motion.span
                key={renderedScheme}
                initial={{ rotate: -25, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.18 }}
                className="inline-flex items-center"
                style={{ color: 'var(--accent-cyan)' }}
              >
                {renderedScheme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              </motion.span>
              <span className="hidden sm:inline text-[11px] uppercase tracking-wider">
                {renderedScheme === 'dark' ? 'Light' : 'Dark'}
              </span>
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)]/80"
              style={{ color: 'var(--text-primary)' }}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileOpen && (
          <ul
            id="mobile-nav-menu"
            ref={menuRef}
            className="md:hidden border-t border-[var(--border-subtle)] px-6 py-5 space-y-3 backdrop-blur-xl"
            style={{ backgroundColor: 'var(--bg-surface)' }}
          >
            {NAV_ITEMS.map((item) => {
              const isCurrent = activeSection === item.href.slice(1);
              return (
                <li key={item.num}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    aria-current={isCurrent ? 'page' : undefined}
                    className="flex items-center justify-between py-2 font-mono text-sm border-b border-[var(--border-subtle)] last:border-b-0"
                    style={{ color: isCurrent ? 'var(--accent-cyan)' : 'var(--text-primary)' }}
                  >
                    <span>
                      <span style={{ color: 'var(--text-muted)' }} className="mr-2">{item.num} //</span>
                      {item.label}
                    </span>
                    <span style={{ color: 'var(--accent-violet)' }}>→</span>
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </header>

      {/* Tamal-style Back-to-top square button (bottom-left so bottom-right stays free for terminal) */}
      {scrolled && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 left-6 z-40 w-10 h-10 rounded-md flex items-center justify-center shadow-lg border border-[var(--border-subtle)] transition-transform hover:-translate-y-0.5"
          style={{
            backgroundColor: 'var(--bg-surface)',
            color: 'var(--accent-violet)',
          }}
        >
          <ArrowUp className="w-4 h-4 stroke-[2.5]" />
        </motion.button>
      )}
    </>
  );
};

export default Header;
