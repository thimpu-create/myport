import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 40));

  // Apply theme to document
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
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
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
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-[#030712]/80 border-b border-white/[0.06]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="text-white">TS</span>
            <span className="ml-1 text-blue-400">.</span>
          </Link>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => item.href.startsWith('#') && handleScroll(e, item.href.substring(1))}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/25 transition-all duration-200"
              aria-label="Toggle theme"
            >
              <motion.div
                key={theme}
                initial={{ rotate: -30, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.div>
            </button>

            <a
              href="https://linkedin.com/in/thimpu-sengyung-a00614260"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-1.5 rounded-full border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition-colors duration-200"
            >
              LinkedIn ↗
            </a>
          </div>

          {/* Mobile: theme toggle only */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-white/10 text-gray-400 hover:text-white transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;