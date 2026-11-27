'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

type Line = {
  type: 'input' | 'output' | 'error' | 'success';
  text: string;
};

const COMMANDS: Record<string, string[]> = {
  help: [
    'Available commands:',
    '',
    '  whoami    -> profile & current role',
    '  hrms      -> JJM Brain HRMS architecture',
    '  ai        -> AI-native workflow & JJM Brain RAG/MCP',
    '  projects  -> shipped production systems',
    '  skills    -> languages, frameworks & infra',
    '  ci        -> pipeline & uptime status',
    '  contact   -> email & links',
    '  clear     -> clear output',
    '  exit      -> close terminal',
  ],
  whoami: [
    'Thimpu Sengyung',
    '  Role     -> Software Engineer & Technical Officer',
    '  Org      -> Jal Jeevan Mission (JJM), Assam',
    '  Location -> Guwahati, Assam, India',
    '  Focus    -> Govt-Compliant HRMS, Full-Stack SaaS, DevOps & AI-Native Dev',
  ],
  hrms: [
    'JJM Brain HRMS (hrms.jjmbrain.in):',
    '  Status   -> Production (developed & actively maintained)',
    '  Portals  -> /admin (Filament) | /dashboard (Livewire) | /employee/dashboard',
    '  Security -> Scope-aware HR access (OrgUnit + recursive child units + Stream + EmpType)',
    '  Modules  -> Payroll batches, Pay matrices, Leave adjustments, Signed payslips,',
    '              Service Book, Transfers, Multi-step workflows & document_access_logs',
  ],
  ai: [
    'AI-Native Engineering:',
    '  Product  -> JJM Brain (RAG pipeline + MCP server + Vector DB + AI field chat)',
    '  SDLC     -> Knowledge-graph mapping, spec-driven agentic debugging,',
    '              automated UI/mobile-readiness audits & CI security guardrails',
  ],
  projects: [
    'Production Systems:',
    '  [01] JJM Brain HRMS  -> Govt-compliant HRMS for JJM Assam (Laravel/Livewire/Filament)',
    '  [02] JJM Brain AI    -> RAG + MCP knowledge hub for field teams (FastAPI/Next.js)',
    '  [03] OnlineCRM       -> US travel agency CRM + in-house e-signatures (Django/Docker)',
    '  [04] AI-Native SDLC  -> Knowledge graphs + agentic workflows across repos',
  ],
  skills: [
    'Tech Stack:',
    '  Backend   -> Laravel (PHP), Python, Django, FastAPI, Livewire, Filament',
    '  Frontend  -> Next.js, React, TypeScript, Tailwind CSS, Flutter',
    '  AI/Data   -> RAG, MCP, Vector DB, MySQL, PostgreSQL, Redis',
    '  DevOps    -> Docker, Nginx, AWS, GitHub Actions, VPS/WHM, Vercel',
  ],
  ci: [
    'Pipeline & Reliability:',
    '  CI       -> GitHub Actions (lint, build, npm audit)',
    '  Security -> A+ Mozilla Observatory (CSP + HSTS)',
    '  Uptime   -> 99.9% monitored via UptimeRobot',
  ],
  contact: [
    'Contact:',
    '  Email    -> thmtymthm@gmail.com',
    '  GitHub   -> github.com/thimpu-create',
    '  LinkedIn -> linkedin.com/in/thimpu-sengyung-a00614260',
    '  Web      -> developerthimpu.online',
  ],
  clear: [],
  exit: [],
};

const PROMPT = 'thimpu@dev:~$';

const TerminalEasterEgg = () => {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<Line[]>([
    { type: 'success', text: 'Thimpu OS Console — type "help" (try "hrms" or "ai")' },
    { type: 'output', text: '' },
  ]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 80);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const runCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (trimmed) setHistory((h) => [trimmed, ...h]);
    setHistoryIdx(-1);

    if (trimmed === 'exit') {
      setOpen(false);
      return;
    }
    if (trimmed === 'clear') {
      setLines([]);
      return;
    }

    const newLines: Line[] = [{ type: 'input', text: `${PROMPT} ${cmd}` }];
    if (COMMANDS[trimmed]) {
      COMMANDS[trimmed].forEach((text) => newLines.push({ type: 'output', text }));
    } else if (trimmed !== '') {
      newLines.push({ type: 'error', text: `zsh: command not found: ${trimmed}. Try "help".` });
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
      <AnimatePresence>
        {!open && (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[var(--border-strong)] shadow-lg backdrop-blur-md font-mono text-xs transition-colors hover:border-[var(--accent-cyan)]"
            style={{
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--text-primary)',
            }}
          >
            <span style={{ color: 'var(--accent-cyan)' }}>&gt;_</span>
            <span className="hidden sm:inline">Press ` for console</span>
            <span className="sm:hidden">Console</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.18 }}
            className="fixed bottom-6 right-6 z-50 w-[560px] max-w-[94vw] rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-[#0d1117] text-slate-100"
          >
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-[#161b22]">
              <div className="flex items-center gap-1.5">
                <button type="button" aria-label="Close console" onClick={() => setOpen(false)} className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <span className="text-[11px] text-slate-400 font-mono">thimpu@portfolio: ~</span>
              <button
                type="button"
                aria-label="Close console"
                onClick={() => setOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div
              className="h-72 overflow-y-auto p-4 font-mono text-xs leading-relaxed cursor-text"
              onClick={() => inputRef.current?.focus()}
            >
              {lines.map((line, i) => (
                <div
                  key={i}
                  className={
                    line.type === 'input'
                      ? 'text-white'
                      : line.type === 'error'
                      ? 'text-rose-400'
                      : line.type === 'success'
                      ? 'text-[#66d9ed]'
                      : 'text-slate-300'
                  }
                >
                  {line.text || '\u00A0'}
                </div>
              ))}

              <div className="flex items-center gap-2 text-white">
                <span className="text-[#66d9ed] whitespace-nowrap">{PROMPT}</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  aria-label="Terminal command input"
                  className="flex-1 bg-transparent outline-none caret-[#66d9ed] text-white"
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
