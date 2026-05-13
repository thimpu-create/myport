import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 40));

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
    { label: 'Projects', href: '#projects' },
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
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="text-white">TS</span>
            <span className="ml-1 text-blue-400">.</span>
          </Link>

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
            <a
              href="https://linkedin.com/in/thimpu-sengyung-a00614260"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-1.5 rounded-full border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition-colors duration-200"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
