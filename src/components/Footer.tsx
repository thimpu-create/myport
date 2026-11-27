const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[var(--border-subtle)] px-6 py-7"
      style={{ backgroundColor: 'var(--bg-contact)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
        <p>
          © {currentYear} Thimpu Sengyung · Guwahati, Assam, India
        </p>
        <p className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Built with Next.js, Tailwind &amp; AI-Native Workflows</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
