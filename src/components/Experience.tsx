'use client';
import { motion } from 'framer-motion';
import { Building2, ExternalLink, MapPin, Minus, Plus } from 'lucide-react';

type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  location: string;
  badge: string;
  link?: { label: string; href: string };
  summary: string;
  highlights: string[];
  stack: string[];
  defaultOpen?: boolean;
};

const EXPERIENCES: ExperienceEntry[] = [
  {
    role: 'Software Engineer & Technical Officer',
    company: 'Jal Jeevan Mission (JJM), Assam',
    period: 'Current',
    location: 'Guwahati, Assam',
    badge: 'GovTech · HRMS · AI',
    link: { label: 'hrms.jjmbrain.in', href: 'https://hrms.jjmbrain.in' },
    defaultOpen: true,
    summary:
      'Architecting, developing, and maintaining core government-compliant digital infrastructure for Jal Jeevan Mission Assam — including the production JJM Brain HRMS across Head Office and District/Division (DMMU) units, alongside AI-native internal tooling.',
    highlights: [
      'Developed and maintain JJM Brain HRMS: 3-portal architecture (Filament Super Admin, Laravel + Livewire HR Panel, Employee Self-Service) covering Onboarding → Attendance → Leave → Payroll → Service Book → Offboarding',
      'Engineered Smart Scope-Based Access Control (HrScopeAssignment) isolating division HR data by Org Unit (with recursive child units), Department Stream, and Employment Type with granular CRUD/approve flags',
      'Built Pay-Matrix Payroll Engine with batch processing, leave-deduction adjustments, disbursement tracking, digitally signed payslips, and full document_access_logs audit trails',
      'Adopted AI-native engineering workflows (knowledge-graph mapping, MCP tooling, spec-driven agentic debugging) and shipped JJM Brain (RAG + MCP AI knowledge assistant)',
    ],
    stack: ['Laravel', 'PHP', 'Livewire', 'Filament', 'Python', 'FastAPI', 'RAG', 'MCP', 'MySQL', 'Docker', 'Nginx'],
  },
  {
    role: 'Full Stack Developer & DevOps Engineer',
    company: 'Adventurecode Business LLP',
    period: '3 Years',
    location: 'India · US Clients',
    badge: 'Full-Stack · DevOps',
    summary:
      'Built and operated full-stack SaaS and CRM platforms end-to-end — owning backend API design, custom workflow automation, Dockerized VPS hosting, Nginx reverse proxies, and CI/CD delivery.',
    highlights: [
      'Built OnlineCRM for US-registered travel agencies managing flight, cruise, and train bookings',
      'Engineered an in-house legally compliant digital signature module, eliminating recurring DocuSign/Adobe Sign subscription costs',
      'Configured and maintained production Docker environments on VPS under WHM/cPanel with Nginx and MySQL tuning',
      'Implemented Git workflows and automated CI/CD deployment pipelines',
    ],
    stack: ['Python', 'Django', 'FastAPI', 'MySQL', 'Docker', 'Nginx', 'WHM/cPanel', 'Git', 'CI/CD'],
  },
  {
    role: 'Programmer Analyst & Intern',
    company: 'Techvariable Pvt. Ltd.',
    period: '1 Year',
    location: 'Guwahati, Assam',
    badge: 'Enterprise Web',
    summary:
      'Transitioned from internship to full-time Programmer Analyst, delivering client web applications and collaborating across enterprise engineering workflows.',
    highlights: [
      'Contributed to multi-team client software delivery across backend and web layers',
      'Gained production foundations in structured code reviews, APIs, and agile delivery',
    ],
    stack: ['Python', 'Web Development', 'REST APIs', 'SQL', 'Git'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Centered 2-Line Tamal Heading */}
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
            04 // Career Timeline
          </p>
          <h2
            className="font-sans font-extrabold leading-[1.02] tracking-tight"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              color: 'var(--text-primary)',
            }}
          >
            Professional
            <br />
            Experience
          </h2>
        </motion.div>

        {/* Native <details> Accordion Stack (Tamal Royal Purple -> Electric Violet) */}
        <div className="space-y-4">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <details
                open={exp.defaultOpen}
                className="exp-details group rounded-xl overflow-hidden"
              >
                <summary
                  className="px-6 py-4 sm:py-5 rounded-xl flex flex-wrap items-center justify-between gap-4 transition-colors duration-200 select-none
                             bg-[var(--bg-accordion-bar)] text-[var(--text-accordion-bar)]
                             group-open:bg-[var(--bg-accordion-bar-open)] group-open:text-[var(--text-accordion-bar-open)]"
                >
                  {/* Note: No <h*> inside <summary> for JAWS/TalkBack button semantics */}
                  <span className="font-sans font-bold text-sm sm:text-base tracking-tight">
                    {exp.role}{' '}
                    <span className="opacity-85 font-medium">@ {exp.company}</span>
                  </span>

                  <span className="inline-flex items-center gap-4 ml-auto font-mono text-xs sm:text-sm">
                    <span className="opacity-90">{exp.period}</span>
                    <span
                      aria-hidden="true"
                      className="w-6 h-6 rounded-md flex items-center justify-center bg-black/15 dark:bg-white/10"
                    >
                      <Plus className="w-4 h-4 group-open:hidden" />
                      <Minus className="w-4 h-4 hidden group-open:block" />
                    </span>
                  </span>
                </summary>

                {/* Detached Indigo-Violet / Clean Card Body */}
                <div
                  className="mt-2.5 p-6 sm:p-8 rounded-xl border border-[var(--border-subtle)] shadow-lg"
                  style={{ backgroundColor: 'var(--bg-accordion-body)' }}
                >
                  {/* Location + Meta Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                    <div className="flex flex-wrap items-center gap-4 font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" style={{ color: 'var(--accent-violet)' }} />
                        {exp.location}
                      </span>
                      {exp.link && (
                        <span className="inline-flex items-center gap-1.5">
                          <ExternalLink className="w-3.5 h-3.5" style={{ color: 'var(--accent-cyan)' }} />
                          <span>{exp.link.label}</span>
                        </span>
                      )}
                    </div>

                    <span
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-md"
                      style={{
                        backgroundColor: 'var(--bg-pill)',
                        color: 'var(--text-pill)',
                      }}
                    >
                      <Building2 className="w-3 h-3" />
                      {exp.badge}
                    </span>
                  </div>

                  {/* Narrative Summary */}
                  <p className="text-sm sm:text-[15px] leading-relaxed mb-5" style={{ color: 'var(--text-primary)' }}>
                    {exp.summary}
                  </p>

                  {/* Numbered Highlights */}
                  <ul className="space-y-2.5 mb-6">
                    {exp.highlights.map((item, i) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-xs sm:text-sm leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <span
                          className="font-mono text-[11px] font-semibold mt-0.5 shrink-0"
                          style={{ color: 'var(--accent-cyan)' }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stack Pills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-3 py-1 rounded-full font-medium"
                        style={{
                          backgroundColor: 'var(--bg-pill)',
                          color: 'var(--text-pill)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
