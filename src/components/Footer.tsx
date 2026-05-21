import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#030712]">

      {/* ── Top section ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-8
                   grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/[0.06]"
      >
        {/* Brand */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-gray-600">[</span>
            <span className="font-serif text-sm font-bold italic text-white">TS</span>
            <span className="font-mono text-xs text-gray-600">]</span>
            <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-gray-700 ml-1">Studio Nº 01</span>
          </div>
          <p className="text-xs text-gray-600 font-mono leading-relaxed">
            Building scalable systems from<br />
            Assam, India — and beyond.
          </p>
          <p className="text-[9px] font-mono tracking-widest text-gray-700 uppercase">
            26.1445° N · 91.7362° E
          </p>
        </div>

        {/* Links */}
        <div className="space-y-3">
          <p className="text-[9px] font-mono tracking-[0.25em] uppercase text-gray-600 border-b border-white/[0.06] pb-2">
            Connect
          </p>
          {[
            { label: 'Email', href: 'mailto:thmtymthm@gmail.com' },
            { label: 'GitHub', href: 'https://github.com/thimpu-create' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/thimpu-sengyung-a00614260' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="block text-xs font-mono text-gray-500 hover:text-blue-400 transition-colors duration-200 tracking-wide"
            >
              {link.label} ↗
            </a>
          ))}
        </div>

        {/* Meta */}
        <div className="space-y-3">
          <p className="text-[9px] font-mono tracking-[0.25em] uppercase text-gray-600 border-b border-white/[0.06] pb-2">
            Publication
          </p>
          <div className="space-y-2 text-[10px] font-mono text-gray-700">
            <p>Vol. 01 / Issue Nº 01</p>
            <p>Filed under Engineering · Infrastructure</p>
            <p>MMXXVI · Assam / India / Earth</p>
            <p className="text-green-500/60 flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-green-500/60 animate-pulse inline-block" />
              Live · Deployed on Vercel
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── Bottom bar ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4
                      flex flex-col md:flex-row justify-between items-center gap-2
                      text-[9px] font-mono tracking-widest uppercase text-gray-700">
        <span>© {currentYear} Thimpu Sengyung · All rights reserved</span>
        <span>Open · MMXXVI · Vol. 01 · Issue Nº 01</span>
      </div>
    </footer>
  );
};

export default Footer;