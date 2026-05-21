import { motion } from 'framer-motion';

const experiences = [
  {
    index: 'Nº 01',
    title: 'Software Engineer & Technical Officer',
    company: 'Jal Jeevan Mission (JJM), Assam',
    period: 'Current',
    type: 'Government Initiative',
    description:
      'Serving as Technical Officer under the flagship Jal Jeevan Mission, supporting digital infrastructure and technical operations across Assam.',
    achievements: [
      'Managing technical systems and digital workflows for the mission',
      'Providing software engineering expertise to support mission objectives',
      'Coordinating with government teams on infrastructure and data systems',
    ],
    skills: ['Technical Operations', 'Government Systems', 'Infrastructure'],
    current: true,
  },
  {
    index: 'Nº 02',
    title: 'Full Stack Developer & DevOps Engineer',
    company: 'Adventurecode Business LLP',
    period: '3 Years',
    type: 'Full-time',
    description:
      'Built and deployed scalable applications with strong backend, cloud integration, and DevOps expertise.',
    achievements: [
      'Developed full-stack applications including CRM platforms',
      'Architected backend integrations and permanent hosting solutions',
      'Managed hosting environments and optimized server performance',
      'Implemented Git version control and CI/CD pipelines',
      'Resolved complex hosting and deployment issues efficiently',
    ],
    skills: ['Python', 'Django', 'FastAPI', 'MySQL', 'Git', 'Docker', 'CI/CD', 'Nginx'],
    current: false,
  },
  {
    index: 'Nº 03',
    title: 'Programmer Analyst & Intern',
    company: 'Techvariable Pvt. Ltd.',
    period: '1 Year',
    type: 'Internship → Full-time',
    description:
      'Provided technical solutions and team support across various client projects.',
    achievements: [
      'Worked on diverse client projects as a team contributor',
      'Gained hands-on experience with enterprise-level workflows',
    ],
    skills: ['Python', 'Web Development', 'Team Collaboration'],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 relative bg-[#030712]">

      {/* ── Section masthead ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mb-12"
      >
        <div className="flex items-center justify-between border-t border-b border-white/[0.06] py-4">
          <div className="flex items-center gap-6">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-gray-700">V.</span>
            <span
              className="text-white tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.1rem', fontStyle: 'italic' }}
            >
              Career · Field Notes
            </span>
          </div>
          <div className="flex items-center gap-8 font-mono text-[9px] tracking-widest uppercase text-gray-700">
            <span>3 roles · 4+ years</span>
            <span>005 / 007</span>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto">

        {/* ── Headline ── */}
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
          From <em className="text-blue-400">signals</em> to systems —<br />
          a record of the work.
        </motion.h2>

        {/* ── Experience entries ── */}
        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="border border-white/[0.06] border-b-0 last:border-b"
            >
              {/* Current role accent */}
              {exp.current && (
                <div className="h-[2px] w-full bg-blue-500/50" />
              )}

              <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* ── Left: meta column ── */}
                <div className="lg:col-span-3 space-y-3">
                  <div className="font-mono text-[9px] tracking-widest uppercase text-gray-700">
                    {exp.index}
                  </div>
                  <div className="font-mono text-xs text-gray-500">{exp.period}</div>
                  <div className="font-mono text-[9px] uppercase tracking-wide text-gray-700">{exp.type}</div>

                  {exp.current && (
                    <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-green-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      Current
                    </div>
                  )}
                </div>

                {/* ── Right: content ── */}
                <div className="lg:col-span-9">
                  <div className="mb-5 border-b border-white/[0.06] pb-5">
                    <h3
                      className="text-white mb-1"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                        fontStyle: 'italic',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {exp.title}
                    </h3>
                    <p className="font-mono text-xs text-blue-400/80">{exp.company}</p>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{exp.description}</p>

                  {/* Achievements — numbered editorial list */}
                  <ul className="space-y-2.5 mb-6">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="flex items-start gap-4 text-sm text-gray-400">
                        <span className="font-mono text-[9px] text-gray-700 mt-1 flex-shrink-0">
                          {String(j + 1).padStart(2, '0')}
                        </span>
                        {a}
                      </li>
                    ))}
                  </ul>

                  {/* Skill tags — mono index */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[9px] uppercase tracking-widest px-3 py-1.5 border border-white/[0.06] text-gray-600"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;