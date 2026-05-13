import { motion } from 'framer-motion';
import { ExternalLink, Github, Server, Shield, Brain, Database, Container, Globe } from 'lucide-react';

type Project = {
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  impact: string[];
  arch: { label: string; icon: React.ReactNode; detail: string }[];
  tech: string[];
  tags: string[];
  accentColor: string;
  borderColor: string;
  tagBg: string;
  tagText: string;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: 'OnlineCRM',
    subtitle: 'Travel agency CRM with built-in digital signatures',
    description:
      'Custom CRM for US-registered Indian travel agencies managing flight, cruise, and train bookings for US customers — eliminating the need for third-party digital signature services by building signature functionality in-house.',
    problem: 'Existing solutions required expensive DocuSign/Adobe Sign subscriptions. Built a full replacement with legally-compliant inbuilt e-signature, saving the agency thousands per year.',
    impact: [
      'Eliminated third-party digital signature cost entirely',
      'Manages flight, cruise & train bookings in one system',
      'Deployed on VPS via Docker containers under WHM/cPanel',
      'US-registered entity serving US customers from India infra',
    ],
    arch: [
      { label: 'Django backend', icon: <Server className="w-4 h-4" />, detail: 'REST APIs + auth' },
      { label: 'Docker on VPS', icon: <Container className="w-4 h-4" />, detail: 'WHM/cPanel host' },
      { label: 'Built-in e-sign', icon: <Shield className="w-4 h-4" />, detail: 'No DocuSign needed' },
      { label: 'MySQL + Nginx', icon: <Database className="w-4 h-4" />, detail: 'Reverse proxy + DB' },
    ],
    tech: ['Python', 'Django', 'Docker', 'Nginx', 'MySQL', 'WHM/cPanel', 'VPS', 'REST API'],
    tags: ['CRM', 'DevOps', 'SaaS', 'Travel Tech'],
    accentColor: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-500/20',
    tagBg: 'bg-blue-500/10',
    tagText: 'text-blue-400',
  },
  {
    title: 'JJM Brain',
    subtitle: 'AI-powered knowledge hub for Jal Jeevan Mission Assam',
    description:
      'Internal AI platform for JJM Assam integrating RAG (Retrieval-Augmented Generation), an AI chat assistant, and MCP (Model Context Protocol) to give field officers instant access to mission data, documents, and operational knowledge.',
    problem: 'Field officers and coordinators had no quick way to access mission documents, schemes, and operational data — everything was siloed in PDFs and spreadsheets.',
    impact: [
      'RAG pipeline over mission documents for accurate answers',
      'MCP integration for structured data context to the AI',
      'AI chat assistant accessible to field teams',
      'Reduces time-to-answer from hours to seconds',
    ],
    arch: [
      { label: 'RAG pipeline', icon: <Brain className="w-4 h-4" />, detail: 'Document retrieval' },
      { label: 'MCP integration', icon: <Globe className="w-4 h-4" />, detail: 'Structured context' },
      { label: 'Vector DB', icon: <Database className="w-4 h-4" />, detail: 'Embeddings store' },
      { label: 'FastAPI backend', icon: <Server className="w-4 h-4" />, detail: 'AI orchestration' },
    ],
    tech: ['Python', 'FastAPI', 'RAG', 'MCP', 'LLM', 'Vector DB', 'Next.js', 'Docker'],
    tags: ['AI/ML', 'GovTech', 'RAG', 'MCP'],
    accentColor: 'from-indigo-500 to-purple-500',
    borderColor: 'border-indigo-500/20',
    tagBg: 'bg-indigo-500/10',
    tagText: 'text-indigo-400',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-3">What I've built</p>
          <h2 className="text-5xl font-bold text-white">Projects</h2>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto" />
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-3xl border ${project.borderColor} bg-white/[0.025] overflow-hidden`}
            >
              {/* Top gradient bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${project.accentColor}`} />

              <div className="p-8">
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <div className="flex gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className={`text-xs px-2.5 py-0.5 rounded-full ${project.tagBg} ${project.tagText} border ${project.borderColor}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">{project.subtitle}</p>
                  </div>

                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/25 transition-all">
                        <Github className="w-3.5 h-3.5" />
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-full border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition-all">
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live
                      </a>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left: description + problem solved */}
                  <div className="space-y-5">
                    <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>

                    {/* Problem solved callout */}
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Problem solved</p>
                      <p className="text-sm text-gray-300 leading-relaxed">{project.problem}</p>
                    </div>

                    {/* Impact bullets */}
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Key outcomes</p>
                      <ul className="space-y-2">
                        {project.impact.map((item, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-sm text-gray-400">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-r ${project.accentColor}`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: architecture + tech */}
                  <div className="space-y-5">
                    {/* Architecture mini-diagram */}
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Architecture</p>
                      <div className="grid grid-cols-2 gap-3">
                        {project.arch.map((node, j) => (
                          <div key={j} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-3">
                            <div className={`mt-0.5 p-1.5 rounded-lg ${project.tagBg} ${project.tagText}`}>
                              {node.icon}
                            </div>
                            <div>
                              <p className="text-xs font-medium text-white">{node.label}</p>
                              <p className="text-[11px] text-gray-500">{node.detail}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech stack */}
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Tech stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-gray-400 font-mono">
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

        {/* More on GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/thimpu-create"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-400 transition-colors underline underline-offset-4"
          >
            <Github className="w-4 h-4" />
            More on GitHub ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;