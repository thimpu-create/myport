import { motion } from 'framer-motion';
import { ExternalLink, Github, Server, Shield, Brain, Database, Container, Globe } from 'lucide-react';

type Project = {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  impact: string[];
  arch: { label: string; icon: React.ReactNode; detail: string }[];
  tech: string[];
  tags: string[];
  accentHex: string;
  accentText: string;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    index: 'Nº 01',
    title: 'OnlineCRM',
    subtitle: 'Travel agency CRM with built-in digital signatures',
    description:
      'Custom CRM for US-registered Indian travel agencies managing flight, cruise, and train bookings — eliminating third-party digital signature services by building signature functionality in-house.',
    problem:
      'Existing solutions required expensive DocuSign/Adobe Sign subscriptions. Built a full replacement with legally-compliant inbuilt e-signature, saving the agency thousands per year.',
    impact: [
      'Eliminated third-party digital signature cost entirely',
      'Manages flight, cruise & train bookings in one system',
      'Deployed on VPS via Docker containers under WHM/cPanel',
      'US-registered entity serving US customers from India infra',
    ],
    arch: [
      { label: 'Django backend', icon: <Server className="w-3.5 h-3.5" />, detail: 'REST APIs + auth' },
      { label: 'Docker on VPS', icon: <Container className="w-3.5 h-3.5" />, detail: 'WHM/cPanel host' },
      { label: 'Built-in e-sign', icon: <Shield className="w-3.5 h-3.5" />, detail: 'No DocuSign' },
      { label: 'MySQL + Nginx', icon: <Database className="w-3.5 h-3.5" />, detail: 'Proxy + DB' },
    ],
    tech: ['Python', 'Django', 'Docker', 'Nginx', 'MySQL', 'WHM/cPanel', 'VPS', 'REST API'],
    tags: ['CRM', 'DevOps', 'SaaS', 'Travel Tech'],
    accentHex: '#60a5fa',
    accentText: 'text-blue-400',
  },
  {
    index: 'Nº 02',
    title: 'JJM Brain',
    subtitle: 'AI-powered knowledge hub for Jal Jeevan Mission Assam',
    description:
      'Internal AI platform integrating RAG, an AI chat assistant, and MCP to give field officers instant access to mission data, documents, and operational knowledge.',
    problem:
      'Field officers had no quick way to access mission documents and schemes — everything was siloed in PDFs and spreadsheets. Time-to-answer was hours.',
    impact: [
      'RAG pipeline over mission documents for accurate answers',
      'MCP integration for structured data context to the AI',
      'AI chat assistant accessible to field teams',
      'Reduces time-to-answer from hours to seconds',
    ],
    arch: [
      { label: 'RAG pipeline', icon: <Brain className="w-3.5 h-3.5" />, detail: 'Document retrieval' },
      { label: 'MCP integration', icon: <Globe className="w-3.5 h-3.5" />, detail: 'Structured context' },
      { label: 'Vector DB', icon: <Database className="w-3.5 h-3.5" />, detail: 'Embeddings store' },
      { label: 'FastAPI backend', icon: <Server className="w-3.5 h-3.5" />, detail: 'AI orchestration' },
    ],
    tech: ['Python', 'FastAPI', 'RAG', 'MCP', 'LLM', 'Vector DB', 'Next.js', 'Docker'],
    tags: ['AI/ML', 'GovTech', 'RAG', 'MCP'],
    accentHex: '#a78bfa',
    accentText: 'text-violet-400',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative bg-[#030712]">

      {/* ── Section masthead ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mb-12"
      >
        <div className="flex items-center justify-between border-t border-b border-white/[0.06] py-4">
          <div className="flex items-center gap-6">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-gray-700">IV.</span>
            <span
              className="text-white tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.1rem', fontStyle: 'italic' }}
            >
              Selected Work · 2024–2026
            </span>
          </div>
          <div className="flex items-center gap-8 font-mono text-[9px] tracking-widest uppercase text-gray-700">
            <span>Edited by Thimpu Sengyung</span>
            <span>004 / 007</span>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto">

        {/* ── Section headline ── */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white mb-12"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            letterSpacing: '-0.02em',
            lineHeight: '1.1',
          }}
        >
          Skills that turn briefs into{' '}
          <em className="text-blue-400">memorable,</em>
          <br />shippable <em>artifacts.</em>
        </motion.h2>

        {/* ── Projects ── */}
        <div className="space-y-0">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-white/[0.06] border-b-0 last:border-b"
            >
              {/* Accent top rule */}
              <div className="h-[2px] w-full" style={{ background: project.accentHex, opacity: 0.5 }} />

              <div className="p-8 md:p-10">

                {/* ── Header row — editorial card style ── */}
                <div className="flex flex-wrap items-start justify-between gap-6 mb-8 border-b border-white/[0.06] pb-8">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="font-mono text-[9px] tracking-widest uppercase text-gray-700">
                        {project.index}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[9px] tracking-widest uppercase px-2.5 py-1 border border-white/[0.08] text-gray-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3
                      className="text-white mb-1"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                        fontStyle: 'italic',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-gray-500">{project.subtitle}</p>
                  </div>

                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase px-4 py-2 border border-white/10 text-gray-500 hover:text-white hover:border-white/25 transition-all"
                      >
                        <Github className="w-3 h-3" />
                        Code ↗
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase px-4 py-2 border text-gray-400 hover:text-white transition-all"
                        style={{ borderColor: project.accentHex + '50' }}
                      >
                        <ExternalLink className="w-3 h-3" />
                        Live ↗
                      </a>
                    )}
                  </div>
                </div>

                {/* ── Two column body ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                  {/* Left: editorial copy */}
                  <div className="space-y-6">
                    <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>

                    {/* Problem callout — pull quote style */}
                    <div className="border-l-2 pl-5" style={{ borderColor: project.accentHex + '50' }}>
                      <p className="font-mono text-[9px] tracking-widest uppercase mb-2" style={{ color: project.accentHex + 'aa' }}>
                        Problem solved
                      </p>
                      <p className="text-sm text-gray-300 leading-relaxed italic">{project.problem}</p>
                    </div>

                    {/* Impact — editorial list */}
                    <div>
                      <p className="font-mono text-[9px] tracking-widest uppercase text-gray-700 mb-4">
                        Key outcomes
                      </p>
                      <ul className="space-y-2.5">
                        {project.impact.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-gray-400">
                            <span className="font-mono text-[9px] text-gray-700 mt-1 flex-shrink-0">
                              {String(j + 1).padStart(2, '0')}
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: architecture + tech */}
                  <div className="space-y-6">
                    {/* Architecture — grid index */}
                    <div>
                      <p className="font-mono text-[9px] tracking-widest uppercase text-gray-700 mb-4">
                        Architecture
                      </p>
                      <div className="grid grid-cols-2 gap-0 border border-white/[0.06]">
                        {project.arch.map((node, j) => (
                          <div
                            key={j}
                            className={`p-4 flex items-start gap-3 ${j % 2 === 0 ? 'border-r border-white/[0.06]' : ''} ${j < 2 ? 'border-b border-white/[0.06]' : ''}`}
                          >
                            <div style={{ color: project.accentHex + 'aa' }} className="mt-0.5 flex-shrink-0">
                              {node.icon}
                            </div>
                            <div>
                              <p className="text-xs text-white font-medium leading-tight">{node.label}</p>
                              <p className="font-mono text-[9px] text-gray-600 mt-0.5">{node.detail}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech stack — mono index */}
                    <div>
                      <p className="font-mono text-[9px] tracking-widest uppercase text-gray-700 mb-4">
                        Tech stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[10px] px-3 py-1.5 border border-white/[0.06] text-gray-500 tracking-wide"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── GitHub link — editorial footer ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-0 border border-white/[0.06] border-t-0 p-5 flex justify-between items-center"
        >
          <span className="font-mono text-[9px] tracking-widest uppercase text-gray-700">
            2 of N projects · More in the archive
          </span>
          <a
            href="https://github.com/thimpu-create"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-gray-500 hover:text-blue-400 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            Full archive on GitHub ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;