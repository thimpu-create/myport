'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Building2,
  CheckCircle2,
  Database,
  Lock,
  ShieldCheck,
  X,
} from 'lucide-react';

type Category = 'All' | 'GovTech & HRMS' | 'AI-Native' | 'Full-Stack & SaaS';

type ProjectItem = {
  id: string;
  title: string;
  category: Exclude<Category, 'All'>;
  client: string;
  strategy: string;
  summary: string;
  problem: string;
  highlights: string[];
  architecture: { label: string; detail: string }[];
  tech: string[];
  accent: string;
  wide: boolean;
  liveUrl?: string;
};

const PROJECTS: ProjectItem[] = [
  {
    id: 'jjm-brain-hrms',
    title: 'JJM Brain HRMS — Government-Compliant Workforce Platform',
    category: 'GovTech & HRMS',
    client: 'Jal Jeevan Mission (JJM), Assam · hrms.jjmbrain.in',
    strategy: '3-Portal Governance · Scope-Aware RBAC · Full Lifecycle Compliance',
    summary:
      'Developed and actively maintaining a production, government-compliant Human Resource Management System for Jal Jeevan Mission, Assam — spanning Head Office and District/Division (DMMU) HR units across the complete employee lifecycle.',
    problem:
      'Managing permanent, contractual, and deputation staff across nested government directorates and districts required strict division-level data isolation, traceable approvals, pay-matrix payroll accuracy, and digital service books without data silos.',
    highlights: [
      '3-Role Separation: Filament Super Master Admin (/admin), Laravel + Livewire HR Operations Panel (/dashboard), and Employee Self-Service Portal (/employee/dashboard)',
      'Smart HR Scope Engine (HrScopeAssignment): isolates records by Org Unit (with recursive child-unit inheritance), Department Stream, and Employment Type with granular can_view / can_create / can_update / can_delete / can_approve flags',
      'Payroll Engine: monthly payroll batches, pay matrices & pay levels, leave-deduction adjustments, manual adjustments, disbursement tracking, and printable payslips with authorized digital signatures',
      'Complete Service Book & Transfers: transfer requests, transfer orders, relieving & joining records, sanction activities, configurable multi-step approval workflows, and document_access_logs audit trails',
    ],
    architecture: [
      { label: 'Super Master Admin', detail: 'Filament (/admin) · Master data & scopes' },
      { label: 'HR Operations Panel', detail: 'Laravel + Livewire · Real-time DMMU ops' },
      { label: 'Employee Self-Service', detail: 'Payslips, leave, attendance & docs' },
      { label: 'Service + Action Layer', detail: 'MySQL/PostgreSQL · Docker · Nginx' },
    ],
    tech: ['Laravel', 'PHP', 'Livewire', 'Filament', 'Tailwind CSS', 'MySQL', 'Docker', 'Nginx'],
    accent: '#9b51e0',
    wide: true,
  },
  {
    id: 'jjm-brain-ai',
    title: 'JJM Brain — AI Knowledge Hub (RAG + MCP)',
    category: 'AI-Native',
    client: 'Jal Jeevan Mission, Assam',
    strategy: 'Retrieval-Augmented Generation · Model Context Protocol',
    summary:
      'Internal AI knowledge hub integrating a RAG pipeline, Vector DB, and Model Context Protocol (MCP) to give mission teams and field officers instant, grounded answers from institutional documents and schemes.',
    problem:
      'Operational guidelines, schemes, and circulars were locked inside dense PDFs and spreadsheets, pushing field lookup times from minutes to hours.',
    highlights: [
      'End-to-end RAG ingestion and semantic retrieval pipeline over mission PDFs and scheme documents',
      'MCP integration supplying structured operational context directly to the AI assistant',
      'Conversational assistant interface built for rapid field-team adoption',
      'Reduced document time-to-answer from hours to seconds',
    ],
    architecture: [
      { label: 'RAG Ingestion', detail: 'Chunking & semantic retrieval' },
      { label: 'MCP Server', detail: 'Structured domain context' },
      { label: 'Vector Store', detail: 'High-recall embeddings' },
      { label: 'FastAPI + Next.js', detail: 'Streaming AI orchestration' },
    ],
    tech: ['Python', 'FastAPI', 'RAG', 'MCP', 'LLM', 'Vector DB', 'Next.js', 'Docker'],
    accent: '#66d9ed',
    wide: false,
  },
  {
    id: 'online-crm',
    title: 'OnlineCRM — Travel SaaS & In-House Digital Signatures',
    category: 'Full-Stack & SaaS',
    client: 'US-Registered Travel Agencies',
    strategy: 'Custom Workflow Automation · Built-in E-Signature Engine',
    summary:
      'Full-stack travel agency CRM orchestrating flight, cruise, and train bookings with an in-house legally compliant digital signature module — completely eliminating third-party e-sign subscription fees.',
    problem:
      'Third-party e-signature tools (DocuSign / Adobe Sign) created recurring per-envelope costs and fragmented booking workflows.',
    highlights: [
      'Replaced external DocuSign/Adobe Sign subscriptions with an inbuilt e-signature module',
      'Unified flight, cruise, and train reservation tracking with customer authorization trails',
      'Containerized Django + MySQL + Nginx stack deployed on VPS under WHM/cPanel',
      'Built for cross-border US customer operations maintained from India',
    ],
    architecture: [
      { label: 'Django Core', detail: 'REST APIs & booking engine' },
      { label: 'In-House E-Sign', detail: 'Document hashing & audit' },
      { label: 'Docker on VPS', detail: 'WHM/cPanel host isolation' },
      { label: 'MySQL + Nginx', detail: 'Reverse proxy & persistence' },
    ],
    tech: ['Python', 'Django', 'Docker', 'Nginx', 'MySQL', 'WHM/cPanel', 'REST API'],
    accent: '#3b82f6',
    wide: false,
  },
  {
    id: 'ai-native-sdlc',
    title: 'AI-Native Engineering Workflow & Production Tooling',
    category: 'AI-Native',
    client: 'Cross-Project Engineering Practice',
    strategy: 'Knowledge-Graph Mapping · Agentic Debugging · Automated Audits',
    summary:
      'Adopted AI-native software engineering across production codebases — combining codebase knowledge graphs, spec-driven agentic implementation, automated mobile/UI-UX audits, and MCP tooling to architect and maintain multi-module systems at high velocity.',
    problem:
      'Maintaining large production codebases (10+ HR modules, multi-environment deployments, and frontend redesigns) solo or in lean teams demands deep architectural context without sacrificing code safety.',
    highlights: [
      'Codebase Knowledge Graph analysis to map models, routes, Livewire/Filament components, and payroll/leave dependencies before editing',
      'AI-assisted root-cause diagnostics across Laravel Livewire reactivity, payroll batch edge cases, and server dependency constraints',
      'Automated UI/UX & mobile-responsiveness passes alongside GitHub Actions CI security scans',
      'Repeatable production deployment playbooks with zero-downtime cache & queue management',
    ],
    architecture: [
      { label: 'Graph Mapping', detail: 'Models, routes & blast radius' },
      { label: 'Agentic Context', detail: 'MCP servers & custom skills' },
      { label: 'UI/UX Verification', detail: 'Mobile, a11y & CSP checks' },
      { label: 'CI/CD Guardrails', detail: 'Build, audit & rollback' },
    ],
    tech: ['MCP', 'Knowledge Graphs', 'Agentic Workflows', 'GitHub Actions', 'TypeScript', 'Laravel'],
    accent: '#ff6b2b',
    wide: true,
  },
];

const FILTERS: Category[] = ['All', 'GovTech & HRMS', 'AI-Native', 'Full-Stack & SaaS'];

const PORTAL_TABS = [
  {
    id: 'admin',
    label: 'Super Admin · /admin',
    engine: 'Filament',
    items: ['Org Hierarchy & Child Units', 'Pay Matrices & Levels', 'HR Scope Assignments', 'Sanction Activities & Policies'],
  },
  {
    id: 'hr',
    label: 'HR Panel · /dashboard',
    engine: 'Laravel + Livewire',
    items: ['DMMU & Division Scoped Directory', 'Batch Payroll & Leave Adjustments', 'Digitally Signed Payslips', 'Transfers & Service Book'],
  },
  {
    id: 'employee',
    label: 'Employee · /employee/dashboard',
    engine: 'Self-Service',
    items: ['Monthly Payslip Downloads', 'Leave Applications & Balances', 'Attendance & Correction Logs', 'Verified Document Vault'],
  },
] as const;

const Work = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('All');
  const [activePortal, setActivePortal] = useState<(typeof PORTAL_TABS)[number]['id']>('hr');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const filtered =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const getCount = (cat: Category) =>
    cat === 'All'
      ? PROJECTS.length
      : PROJECTS.filter((p) => p.category === cat).length;

  const openProjectModal = (project: ProjectItem) => {
    setSelectedProject(project);
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  };

  const closeProjectModal = () => {
    dialogRef.current?.close();
  };

  // Fallback light-dismiss ONLY for browsers without native dialog `closedby` (e.g., Safari)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      dialog.returnValue = '';
      setSelectedProject(null);
    };
    dialog.addEventListener('close', handleClose);

    if ('closedBy' in HTMLDialogElement.prototype) {
      return () => dialog.removeEventListener('close', handleClose);
    }

    let pressedOutside = false;
    const isOutside = (e: PointerEvent) => {
      const r = dialog.getBoundingClientRect();
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    };
    const onPointerDown = (e: PointerEvent) => {
      pressedOutside = isOutside(e);
    };
    const onPointerUp = (e: PointerEvent) => {
      if (pressedOutside && isOutside(e)) dialog.close();
    };

    dialog.addEventListener('pointerdown', onPointerDown);
    dialog.addEventListener('pointerup', onPointerUp);
    return () => {
      dialog.removeEventListener('close', handleClose);
      dialog.removeEventListener('pointerdown', onPointerDown);
      dialog.removeEventListener('pointerup', onPointerUp);
    };
  }, []);

  const currentPortalData = PORTAL_TABS.find((t) => t.id === activePortal) ?? PORTAL_TABS[1];
  const selectedIndex = selectedProject ? PROJECTS.findIndex((p) => p.id === selectedProject.id) : -1;
  const nextProject = selectedIndex >= 0 ? PROJECTS[(selectedIndex + 1) % PROJECTS.length] : null;
  const prevProject = selectedIndex >= 0 ? PROJECTS[(selectedIndex - 1 + PROJECTS.length) % PROJECTS.length] : null;

  return (
    <section id="work" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* ── Top 2-Column Featured Showcase (Tamal Layout) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left: Giant Stacked "My Work" + Mono Intro */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <p
              className="font-mono text-xs uppercase tracking-[0.28em] mb-4"
              style={{ color: 'var(--accent-cyan)' }}
            >
              03 // Selected Systems
            </p>
            <h2
              className="font-sans font-extrabold leading-[0.92] tracking-tight mb-6"
              style={{
                fontSize: 'clamp(3.2rem, 7vw, 5.25rem)',
                color: 'var(--text-primary)',
              }}
            >
              My
              <br />
              Work
            </h2>
            <p
              className="font-mono text-sm leading-relaxed mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              Deployed production systems spanning government-compliant HRMS infrastructure for{' '}
              <span style={{ color: 'var(--accent-cyan)' }}>JJM Assam</span>, AI-native RAG &amp; MCP knowledge hubs,
              and revenue-saving SaaS CRMs.
            </p>

            {/* Curved Tamal-style Violet Arrow pointing to Featured Project */}
            <div className="hidden lg:flex items-center gap-3 pt-2">
              <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                Featured Build
              </span>
              <svg width="96" height="42" viewBox="0 0 96 42" fill="none" aria-hidden="true">
                <path
                  d="M4 34 C 36 38, 62 24, 88 8"
                  stroke="var(--accent-violet)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="4 4"
                />
                <path
                  d="M78 6 L90 7 L85 18"
                  stroke="var(--accent-violet)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>

          {/* Right: Interactive JJM Brain HRMS Live Architecture Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div
              className="rounded-2xl border border-[var(--border-strong)] shadow-2xl overflow-hidden"
              style={{ backgroundColor: 'var(--bg-surface)' }}
            >
              {/* Mock Browser Chrome */}
              <div
                className="px-4 py-3 border-b border-[var(--border-subtle)] flex items-center justify-between gap-3"
                style={{ backgroundColor: 'var(--bg-surface-alt)' }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-mono text-[11px] truncate" style={{ color: 'var(--text-muted)' }}>
                  hrms.jjmbrain.in · Multi-Role Scope Architecture
                </span>
                <span
                  className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-500 font-semibold"
                >
                  PROD
                </span>
              </div>

              {/* Interactive Portal Switcher inside Featured Preview */}
              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap gap-2 mb-5">
                  {PORTAL_TABS.map((tab) => {
                    const active = tab.id === activePortal;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActivePortal(tab.id)}
                        className="font-mono text-[11px] px-3 py-1.5 rounded-md border transition-all"
                        style={{
                          backgroundColor: active ? 'var(--accent-violet)' : 'var(--bg-surface-alt)',
                          borderColor: active ? 'var(--accent-violet)' : 'var(--border-subtle)',
                          color: active ? '#ffffff' : 'var(--text-secondary)',
                        }}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                <div
                  className="rounded-xl border border-[var(--border-subtle)] p-4 sm:p-5"
                  style={{ backgroundColor: 'var(--bg-surface-alt)' }}
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-sans font-bold text-sm" style={{ color: 'var(--text-primary)' }}>
                      {currentPortalData.label}
                    </span>
                    <span
                      className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: 'var(--bg-pill)',
                        color: 'var(--text-pill)',
                      }}
                    >
                      {currentPortalData.engine}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentPortalData.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-xs font-mono py-2 px-3 rounded-lg border border-[var(--border-subtle)]"
                        style={{
                          backgroundColor: 'var(--bg-surface)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--accent-cyan)' }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Featured footer CTA */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                      Featured Project
                    </p>
                    <p className="font-sans font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
                      JJM Brain HRMS
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => openProjectModal(PROJECTS[0])}
                    className="px-5 py-2.5 rounded-lg font-mono text-xs uppercase tracking-widest text-white font-semibold transition-transform hover:-translate-y-0.5"
                    style={{ backgroundColor: 'var(--accent-violet)' }}
                  >
                    View Project →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Tamal-style Category Filter Bar with Superscript Counts ── */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-10 font-mono text-xs sm:text-sm">
          <span style={{ color: 'var(--text-muted)' }}>Filter by</span>
          {FILTERS.map((cat, idx) => {
            const active = activeFilter === cat;
            return (
              <div key={cat} className="inline-flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  className="relative inline-flex items-start gap-1 transition-colors"
                  style={{ color: active ? 'var(--accent-cyan)' : 'var(--text-secondary)' }}
                >
                  <span className={active ? 'font-semibold' : ''}>{cat}</span>
                  <sup className="text-[10px] opacity-75">
                    {String(getCount(cat)).padStart(2, '0')}
                  </sup>
                </button>
                {idx < FILTERS.length - 1 && (
                  <span aria-hidden="true" style={{ color: 'var(--border-strong)' }}>
                    /
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Asymmetric 2-Column Tamal Card Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project, idx) => {
            const spanFull = project.wide && activeFilter === 'All';
            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className={`group rounded-2xl border border-[var(--border-subtle)] overflow-hidden flex flex-col transition-all duration-300 hover:border-[var(--border-strong)] hover:-translate-y-1 shadow-sm hover:shadow-xl ${
                  spanFull ? 'md:col-span-2' : ''
                }`}
                style={{ backgroundColor: 'var(--bg-surface)' }}
              >
                {/* Visual Top Mockup Canvas (clickable) */}
                <button
                  type="button"
                  onClick={() => openProjectModal(project)}
                  className="text-left w-full relative p-6 sm:p-8 border-b border-[var(--border-subtle)] overflow-hidden focus-visible:outline-2"
                  style={{
                    background: `linear-gradient(135deg, ${project.accent}18 0%, var(--bg-surface-alt) 100%)`,
                  }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                    <span
                      className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded border"
                      style={{
                        borderColor: `${project.accent}55`,
                        color: project.accent,
                        backgroundColor: `${project.accent}12`,
                      }}
                    >
                      {project.client}
                    </span>
                    <div className="flex items-center gap-1.5 font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>
                      {project.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-[var(--bg-surface)]/80 border border-[var(--border-subtle)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Architecture Visual Mini-Nodes */}
                  <div className={`grid gap-3 ${spanFull ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2'}`}>
                    {project.architecture.map((node, nIdx) => (
                      <div
                        key={node.label}
                        className="p-3.5 rounded-xl border border-[var(--border-subtle)] backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-[-2px]"
                        style={{ backgroundColor: 'var(--bg-surface)' }}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span style={{ color: project.accent }}>
                            {nIdx === 0 ? (
                              <Building2 className="w-4 h-4" />
                            ) : nIdx === 1 ? (
                              <Lock className="w-4 h-4" />
                            ) : nIdx === 2 ? (
                              <Bot className="w-4 h-4" />
                            ) : (
                              <Database className="w-4 h-4" />
                            )}
                          </span>
                          <p className="font-sans font-semibold text-xs" style={{ color: 'var(--text-primary)' }}>
                            {node.label}
                          </p>
                        </div>
                        <p className="font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>
                          {node.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </button>

                {/* Card Footer with Tamal "Category -> Show project ───" Hover Morph */}
                <button
                  type="button"
                  onClick={() => openProjectModal(project)}
                  className="text-left p-6 sm:p-7 flex-1 flex flex-col justify-between gap-4"
                >
                  <div>
                    <h3
                      className="font-sans font-bold text-xl sm:text-2xl mb-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
                      {project.summary}
                    </p>
                  </div>

                  {/* Morphing Category / Show project line */}
                  <div className="relative h-6 flex items-center font-mono text-xs overflow-hidden">
                    <span
                      className="transition-all duration-300 group-hover:-translate-y-6 group-hover:opacity-0"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {project.category}
                    </span>
                    <span
                      className="absolute inset-0 flex items-center gap-3 translate-y-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                      style={{ color: 'var(--accent-cyan)' }}
                    >
                      <span>Show project</span>
                      <span
                        className="h-[1px] w-10 group-hover:w-16 transition-all duration-300"
                        style={{ backgroundColor: 'var(--accent-cyan)' }}
                      />
                    </span>
                  </div>
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* ── Native Modal Dialog for Case Study Detail (<dialog closedby="any">) ── */}
      <dialog
        ref={dialogRef}
        {...({ closedby: 'any' } as Record<string, string>)}
        aria-labelledby="case-study-title"
        className="w-[min(92vw,56rem)] max-h-[88dvh] rounded-2xl border border-[var(--border-strong)] p-0 shadow-2xl overflow-y-auto"
        style={{
          backgroundColor: 'var(--bg-surface)',
          color: 'var(--text-primary)',
        }}
      >
        {selectedProject && (
          <div className="p-6 sm:p-10">
            {/* Top Breadcrumb + Close */}
            <div className="flex items-center justify-between gap-4 pb-5 mb-6 border-b border-[var(--border-subtle)]">
              <div className="font-mono text-xs flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
                <span>Work</span>
                <span>&gt;</span>
                <span>{selectedProject.category}</span>
              </div>
              <button
                type="button"
                onClick={closeProjectModal}
                aria-label="Close case study"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] hover:border-[var(--accent-cyan)] font-mono text-xs"
                style={{ color: 'var(--text-primary)' }}
              >
                <X className="w-4 h-4" />
                <span>Close</span>
              </button>
            </div>

            {/* Title */}
            <h1
              id="case-study-title"
              className="font-sans font-extrabold text-2xl sm:text-4xl leading-tight mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {selectedProject.title}
            </h1>
            <p className="text-sm sm:text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
              {selectedProject.summary}
            </p>

            {/* 2-Column Metadata Grid (Tamal detail page pattern) */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-5 rounded-xl border border-[var(--border-subtle)] mb-8"
              style={{ backgroundColor: 'var(--bg-surface-alt)' }}
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>
                  Client / Context
                </p>
                <p className="font-sans font-semibold text-sm">{selectedProject.client}</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>
                  Strategy
                </p>
                <p className="font-sans font-semibold text-sm">{selectedProject.strategy}</p>
              </div>
              <div className="sm:col-span-2">
                <p className="font-mono text-[11px] uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>
                  Problem Solved
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {selectedProject.problem}
                </p>
              </div>
            </div>

            {/* Key Modules / Highlights */}
            <div className="mb-8">
              <h2 className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--accent-cyan)' }}>
                Architecture &amp; Key Outcomes
              </h2>
              <ul className="space-y-3">
                {selectedProject.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    <ShieldCheck className="w-4 h-4 mt-1 shrink-0" style={{ color: selectedProject.accent }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
                Technology
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-3 py-1.5 rounded-md border border-[var(--border-subtle)]"
                    style={{ backgroundColor: 'var(--bg-surface-alt)', color: 'var(--text-primary)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Prev / Next Project Footer (Tamal floating next-project style) */}
            <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
              {prevProject && (
                <button
                  type="button"
                  onClick={() => setSelectedProject(prevProject)}
                  className="inline-flex items-center gap-2 font-mono text-xs hover:underline"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{prevProject.title.split('—')[0].trim()}</span>
                </button>
              )}
              {nextProject && (
                <button
                  type="button"
                  onClick={() => setSelectedProject(nextProject)}
                  className="inline-flex items-center gap-2 font-mono text-xs font-semibold px-4 py-2 rounded-lg text-white"
                  style={{ backgroundColor: 'var(--accent-violet)' }}
                >
                  <span>Next: {nextProject.title.split('—')[0].trim()}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
};

export default Work;
