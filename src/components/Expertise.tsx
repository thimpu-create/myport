'use client';
import { motion } from 'framer-motion';
import { Monitor, Cpu, Layers, Shield, GitBranch, Globe } from 'lucide-react';

const EXPERTISE_CARDS = [
  {
    id: 'software',
    icon: <Monitor className="w-10 h-10 stroke-[1.5]" />,
    highlightText: 'Software',
    titleRest: '& GovTech Systems',
    underlineClass: 'chonky-magenta',
    accentColor: 'var(--accent-magenta)',
    description:
      'Architecting production backends in Laravel, Django, FastAPI & Python. Built and maintain a government-compliant HRMS for Jal Jeevan Mission (Assam) with org-scoped HR access, payroll engines, service books & full audit trails.',
    tags: ['Laravel', 'Livewire', 'Filament', 'Python', 'Django', 'FastAPI'],
  },
  {
    id: 'ai-native',
    icon: <Cpu className="w-10 h-10 stroke-[1.5]" />,
    highlightText: 'AI-Native',
    titleRest: 'Engineering',
    underlineClass: 'chonky-blue',
    accentColor: 'var(--accent-blue)',
    description:
      'Adopted AI-native development end-to-end: shipping RAG + MCP knowledge systems (JJM Brain) and accelerating delivery with codebase knowledge graphs, spec-driven agentic workflows, and automated UI/UX audits.',
    tags: ['RAG Pipelines', 'MCP Servers', 'Vector DB', 'Agentic SDLC', 'LLMs'],
  },
  {
    id: 'devops-frontend',
    icon: <Layers className="w-10 h-10 stroke-[1.5]" />,
    highlightText: 'Frontend,',
    titleRest: 'DevOps & Cloud',
    underlineClass: 'chonky-orange',
    accentColor: 'var(--accent-orange)',
    description:
      'Building crisp Next.js, React, TypeScript & Flutter interfaces backed by Docker, Nginx, AWS & GitHub Actions CI/CD pipelines with A+ security headers and 99.9% production uptime.',
    tags: ['Next.js', 'TypeScript', 'Flutter', 'Docker', 'Nginx', 'AWS'],
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Subtle VS Code HTML Watermark behind bottom half (Tamal motif) */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-x-0 bottom-8 max-w-5xl mx-auto font-mono text-xs sm:text-sm leading-relaxed overflow-hidden whitespace-pre opacity-70"
        style={{ color: 'var(--bg-code-watermark)' }}
      >
        {`<!DOCTYPE html>
<html lang="en">
  <head><title>Thimpu Sengyung — Systems & AI-Native Engineering</title></head>
  <body>
    <section id="hrms" data-org="jjm-assam" data-compliance="govt-audit-ready">
      <portal role="super-admin" engine="filament" />
      <portal role="hr-operations" engine="laravel-livewire" scope="org-unit-recursive" />
      <portal role="employee-self-service" modules="payroll,leave,service-book" />
    </section>
  </body>
</html>`}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p
            className="font-mono text-xs uppercase tracking-[0.28em] mb-3"
            style={{ color: 'var(--accent-cyan)' }}
          >
            02 // Capabilities
          </p>
          <h2
            className="font-sans font-extrabold tracking-tight"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              color: 'var(--text-primary)',
            }}
          >
            My Expertise
          </h2>
        </motion.div>

        {/* Tamal-style 3-Column Bordered Grid (zero gap, shared 1px dividers) */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 border"
          style={{
            borderColor: 'var(--border-strong)',
            backgroundColor: 'var(--bg-surface)',
          }}
        >
          {EXPERTISE_CARDS.map((card, idx) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className={`p-7 sm:p-9 flex flex-col justify-between ${
                idx < EXPERTISE_CARDS.length - 1
                  ? 'border-b lg:border-b-0 lg:border-r'
                  : ''
              }`}
              style={{ borderColor: 'var(--border-strong)' }}
            >
              <div>
                {/* Icon + Title with Chonky Highlighter Underline */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="mt-1 shrink-0" style={{ color: 'var(--text-primary)' }}>
                    {card.icon}
                  </div>
                  <h3
                    className="font-sans font-bold text-2xl leading-tight"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    <span className={`chonky-underline ${card.underlineClass}`}>
                      {card.highlightText}
                    </span>
                    <br />
                    <span>{card.titleRest}</span>
                  </h3>
                </div>

                {/* Code-editor motif: <h3> ... </h3> with indent guide line */}
                <div className="font-mono text-xs sm:text-[13px] leading-relaxed">
                  <div className="select-none opacity-45" style={{ color: 'var(--text-muted)' }}>
                    &lt;h3&gt;
                  </div>
                  <div
                    className="pl-4 ml-2 my-1.5 border-l-2"
                    style={{
                      borderColor: 'var(--border-subtle)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {card.description}
                  </div>
                  <div className="select-none opacity-45" style={{ color: 'var(--text-muted)' }}>
                    &lt;/h3&gt;
                  </div>
                </div>
              </div>

              {/* Stack pills */}
              <div className="mt-6 pt-5 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] px-2.5 py-1 rounded border border-[var(--border-subtle)]"
                    style={{
                      backgroundColor: 'var(--bg-surface-alt)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Compact Production Reliability & CI Proof Strip (from DeploymentProcess) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
        >
          <div
            className="px-4 py-3.5 rounded-lg border border-[var(--border-subtle)] flex items-center justify-between gap-3"
            style={{ backgroundColor: 'var(--bg-surface)' }}
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                CI Pipeline
              </p>
              <p className="font-sans font-semibold text-sm mt-0.5" style={{ color: 'var(--text-primary)' }}>
                GitHub Actions
              </p>
            </div>
            <GitBranch className="w-5 h-5 shrink-0" style={{ color: 'var(--accent-cyan)' }} />
          </div>

          <a
            href="https://stats.uptimerobot.com/ZIG0RMrE70"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3.5 rounded-lg border border-[var(--border-subtle)] hover:border-[var(--accent-cyan)] transition-colors flex items-center justify-between gap-3"
            style={{ backgroundColor: 'var(--bg-surface)' }}
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                UptimeMonitor
              </p>
              <p className="font-sans font-semibold text-sm mt-0.5 text-emerald-500">
                99.9% Live ↗
              </p>
            </div>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          </a>

          <div
            className="px-4 py-3.5 rounded-lg border border-[var(--border-subtle)] flex items-center justify-between gap-3"
            style={{ backgroundColor: 'var(--bg-surface)' }}
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                Observatory Grade
              </p>
              <p className="font-sans font-semibold text-sm mt-0.5" style={{ color: 'var(--text-primary)' }}>
                A+ CSP &amp; HSTS
              </p>
            </div>
            <Shield className="w-5 h-5 shrink-0 text-emerald-500" />
          </div>

          <a
            href="https://github.com/thimpu-create/myport/blob/main/.github/workflows/ci.yml"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3.5 rounded-lg border border-[var(--border-subtle)] hover:border-[var(--accent-violet)] transition-colors flex items-center justify-between gap-3"
            style={{ backgroundColor: 'var(--bg-surface)' }}
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                Edge Delivery
              </p>
              <p className="font-sans font-semibold text-sm mt-0.5" style={{ color: 'var(--text-primary)' }}>
                Vercel + VPS Docker ↗
              </p>
            </div>
            <Globe className="w-5 h-5 shrink-0" style={{ color: 'var(--accent-violet)' }} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
