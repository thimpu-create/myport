import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Add offset for header height
      const headerHeight = 80; // Approximate header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    // { label: 'Projects', href: '#projects' },
    // { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            TS
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-8"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => item.href.startsWith('#') && handleScroll(e, item.href.substring(1))}
                className="relative group cursor-pointer"
              >
                <span className="relative z-10 text-gray-300 hover:text-white transition-colors duration-300">
                  {item.label}
                </span>
                <span className="absolute inset-x-0 -bottom-2 h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
          </motion.div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
