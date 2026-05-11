import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer & Technical Officer',
      company: 'Jal Jeevan Mission (JJM), Assam',
      period: 'Current',
      type: 'Government Initiative',
      description: 'Serving as Technical Officer under the flagship Jal Jeevan Mission, supporting digital infrastructure and technical operations across Assam.',
      achievements: [
        'Managing technical systems and digital workflows for the mission',
        'Providing software engineering expertise to support mission objectives',
        'Coordinating with government teams on infrastructure and data systems',
      ],
      skills: ['Technical Operations', 'Government Systems', 'Infrastructure'],
      current: true,
    },
    {
      title: 'Full Stack Developer & DevOps Engineer',
      company: 'Adventurecode Business LLP',
      period: '3 Years',
      type: 'Full-time',
      description: 'Built and deployed scalable applications with strong backend, cloud integration, and DevOps expertise.',
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
      title: 'Programmer Analyst & Intern',
      company: 'Techvariable Pvt. Ltd.',
      period: '1 Year',
      type: 'Internship → Full-time',
      description: 'Provided technical solutions and team support across various client projects.',
      achievements: [
        'Worked on diverse client projects as a team contributor',
        'Gained hands-on experience with enterprise-level workflows',
      ],
      skills: ['Python', 'Web Development', 'Team Collaboration'],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-28 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">Career</p>
          <h2 className="text-5xl font-bold text-white">Experience</h2>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-indigo-500/30 to-transparent" />

          <div className="space-y-10 pl-8 md:pl-24">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className={`absolute -left-8 md:-left-24 top-6 w-4 h-4 rounded-full border-2 flex items-center justify-center
                  ${exp.current ? 'border-blue-400 bg-blue-400/20' : 'border-gray-600 bg-gray-800'}`}>
                  {exp.current && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  )}
                </div>

                {/* Card */}
                <div className={`p-7 rounded-2xl border transition-all duration-300
                  ${exp.current
                    ? 'bg-blue-950/20 border-blue-500/20 hover:border-blue-500/40'
                    : 'bg-white/[0.025] border-white/[0.06] hover:border-white/15'
                  }`}>
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <h3 className="text-white font-semibold text-xl">{exp.title}</h3>
                        {exp.current && (
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-sm text-gray-400">{exp.period}</span>
                      <br />
                      <span className="text-xs text-gray-600">{exp.type}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{exp.description}</p>

                  {/* Achievements */}
                  {exp.achievements.length > 0 && (
                    <ul className="space-y-2 mb-5">
                      {exp.achievements.map((a, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-gray-400">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-400/60 flex-shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((s, j) => (
                      <span key={j} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/[0.06]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
