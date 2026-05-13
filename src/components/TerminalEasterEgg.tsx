import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Square } from 'lucide-react';

type Line = {
  type: 'input' | 'output' | 'error' | 'success';
  text: string;
};

const COMMANDS: Record<string, string[]> = {
  help: [
    '📟 Available commands:',
    '',
    '  whoami        → about me',
    '  skills        → tech stack',
    '  projects      → what I built',
    '  contact       → get in touch',
    '  stack         → this site\'s stack',
    '  ci            → pipeline status',
    '  secret        → 👀',
    '  clear         → clear terminal',
    '  exit          → close terminal',
    '',
    'Tip: try typing anything — I handle errors too 😄',
  ],
  whoami: [
    '👤 Thimpu Sengyung',
    '   Software Engineer & DevOps Engineer',
    '   Technical Officer @ Jal Jeevan Mission, Assam',
    '',
    '   Based in Guwahati, Assam 🇮🇳',
    '   Building scalable systems & AI-powered products',
  ],
  skills: [
    '🛠  Tech Stack:',
    '',
    '  Languages   → Python, TypeScript, Dart',
    '  Backend     → Django, FastAPI',
    '  Frontend    → Next.js, React, Flutter',
    '  DevOps      → Docker, Nginx, GitHub Actions',
    '  Deploy      → Vercel, VPS, WHM/cPanel',
    '  AI/ML       → RAG, MCP, LLM integration',
    '  DB          → MySQL, PostgreSQL, Redis',
  ],
  projects: [
    '🚀 Projects:',
    '',
    '  OnlineCRM',
    '  └─ Custom CRM for US travel agencies',
    '  └─ Built-in digital signatures (no DocuSign)',
    '  └─ Flight, cruise & train booking management',
    '  └─ Deployed via Docker on VPS/WHM',
    '',
    '  JJM Brain',
    '  └─ AI knowledge hub for Jal Jeevan Mission',
    '  └─ RAG pipeline + MCP integration',
    '  └─ AI chat assistant for field officers',
  ],
  contact: [
    '📬 Contact:',
    '',
    '  Email     → thmtymthm@gmail.com',
    '  GitHub    → github.com/thimpu-create',
    '  LinkedIn  → linkedin.com/in/thimpu-sengyung-a00614260',
    '  Web       → developerthimpu.online',
  ],
  stack: [
    '⚙️  This site runs on:',
    '',
    '  Framework   → Next.js (static export)',
    '  Styling     → Tailwind CSS',
    '  Animations  → Framer Motion',
    '  CI/CD       → GitHub Actions → Vercel',
    '  DNS         → Namecheap (BasicDNS)',
    '  CDN         → Vercel Edge Network',
    '  Security    → A+ Mozilla Observatory',
    '  Analytics   → Google Analytics 4',
    '  Forms       → Formspree',
  ],
  ci: [
    '🔄 CI/CD Pipeline:',
    '',
    '  [1] git push origin main',
    '  [2] GitHub Actions triggered',
    '      ├─ npm ci',
    '      ├─ next build',
    '      └─ npm audit --audit-level=critical',
    '  [3] Vercel auto-deploy on success',
    '  [4] Edge CDN propagation (~30s)',
    '',
    '  Status: ✅ All systems operational',
  ],
  secret: [
    '🕵️  You found the easter egg!',
    '',
    '  "Any sufficiently advanced DevOps',
    '   is indistinguishable from magic."',
    '',
    '  — Arthur C. Clarke (probably)',
    '',
    '  🏆 Achievement unlocked: Terminal Nerd',
  ],
  clear: [],
  exit: [],
};

const PROMPT = 'thimpu@portfolio:~$';

const TerminalEasterEgg = () => {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<Line[]>([
    { type: 'output', text: '👋 Welcome to Thimpu\'s terminal!' },
    { type: 'output', text: 'Type "help" to see available commands.' },
    { type: 'output', text: '' },
  ]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Open on backtick keypress
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === '`') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  // Scroll to bottom on new lines
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const runCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();

    // Add to history
    if (trimmed) setHistory((h) => [trimmed, ...h]);
    setHistoryIdx(-1);

    // Echo input
    const newLines: Line[] = [
      { type: 'input', text: `${PROMPT} ${cmd}` },
    ];

    if (trimmed === 'exit') {
      setOpen(false);
      return;
    }

    if (trimmed === 'clear') {
      setLines([]);
      return;
    }

    if (COMMANDS[trimmed]) {
      COMMANDS[trimmed].forEach((l) =>
        newLines.push({ type: 'output', text: l })
      );
    } else if (trimmed === '') {
      // do nothing
    } else {
      newLines.push({
        type: 'error',
        text: `bash: ${trimmed}: command not found. Try "help".`,
      });
    }

    newLines.push({ type: 'output', text: '' });
    setLines((prev) => [...prev, ...newLines]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      runCommand(input);
      setInput('');
    }
    if (e.key === 'ArrowUp') {
      const idx = Math.min(historyIdx + 1, history.length - 1);
      setHistoryIdx(idx);
      setInput(history[idx] || '');
    }
    if (e.key === 'ArrowDown') {
      const idx = Math.max(historyIdx - 1, -1);
      setHistoryIdx(idx);
      setInput(idx === -1 ? '' : history[idx]);
    }
  };

  return (
    <>
      {/* Hint pill — shown when terminal is closed */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 border border-white/10 text-gray-400 text-xs backdrop-blur-md hover:border-green-500/30 hover:text-green-400 transition-all"
          >
            <span className="font-mono text-green-400">$_</span>
            Press ` to open terminal
          </motion.button>
        )}
      </AnimatePresence>

      {/* Terminal window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[560px] max-w-[95vw] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            style={{ background: '#0d1117' }}
          >
            {/* Title bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]" style={{ background: '#161b22' }}>
              <div className="flex items-center gap-2">
                <button onClick={() => setOpen(false)} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors" />
                <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors" />
                <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors" />
              </div>
              <span className="text-xs text-gray-500 font-mono">thimpu@portfolio: ~</span>
              <button onClick={() => setOpen(false)} className="text-gray-600 hover:text-gray-400 transition-colors">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Terminal body */}
            <div
              className="h-80 overflow-y-auto p-4 font-mono text-xs leading-relaxed cursor-text"
              onClick={() => inputRef.current?.focus()}
            >
              {lines.map((line, i) => (
                <div
                  key={i}
                  className={
                    line.type === 'input'
                      ? 'text-white'
                      : line.type === 'error'
                      ? 'text-red-400'
                      : line.type === 'success'
                      ? 'text-green-400'
                      : 'text-gray-400'
                  }
                >
                  {line.text || '\u00A0'}
                </div>
              ))}

              {/* Input line */}
              <div className="flex items-center gap-2 text-white">
                <span className="text-green-400 whitespace-nowrap">{PROMPT}</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none caret-green-400 text-white"
                  spellCheck={false}
                  autoComplete="off"
                  autoCapitalize="off"
                />
              </div>

              <div ref={bottomRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TerminalEasterEgg;