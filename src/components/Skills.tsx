import { motion } from 'framer-motion';

type Skill = {
  name: string;
  category: string;
  icon: string;
  imgSrc: string;
  proficiency: number;
  details: string[];
};

const CATEGORY_COLORS: Record<string, string> = {
  Language: 'blue',
  Framework: 'indigo',
  DevOps: 'cyan',
  Cloud: 'sky',
  Server: 'violet',
  Mobile: 'purple',
  Backend: 'blue',
};

const Skills = () => {
  const skills: Skill[] = [
    { name: 'Python', category: 'Language', icon: '🐍', imgSrc: '/skills/python.png', proficiency: 90,
      details: ['Django & FastAPI', 'Data Analysis & Automation', 'Machine Learning'] },
    { name: 'FastAPI', category: 'Framework', icon: '⚡', imgSrc: '/skills/fastapi.png', proficiency: 85,
      details: ['High-performance REST APIs', 'WebSocket Integration', 'AsyncIO'] },
    { name: 'Django', category: 'Framework', icon: '🎯', imgSrc: '/skills/django.png', proficiency: 88,
      details: ['Full-stack Web Apps', 'REST Framework APIs', 'Complex DB Models'] },
    { name: 'Docker', category: 'DevOps', icon: '🐋', imgSrc: '/skills/docker.png', proficiency: 82,
      details: ['Multi-container Apps', 'Docker Compose', 'Container Orchestration'] },
    { name: 'CI/CD', category: 'DevOps', icon: '🔄', imgSrc: '/skills/cidi.png', proficiency: 80,
      details: ['GitHub Actions', 'Jenkins Pipelines', 'Automated Testing'] },
    { name: 'AWS', category: 'Cloud', icon: '☁️', imgSrc: '/skills/aws.png', proficiency: 78,
      details: ['EC2 & S3 Management', 'Lambda Functions', 'RDS Configuration'] },
    { name: 'Linux', category: 'Server', icon: '🐧', imgSrc: '/skills/linux.png', proficiency: 85,
      details: ['Server Administration', 'Shell Scripting', 'Security Hardening'] },
    { name: 'Nginx', category: 'Server', icon: '🌐', imgSrc: '/skills/nginx.png', proficiency: 80,
      details: ['Load Balancing', 'Reverse Proxy', 'SSL Configuration'] },
    { name: 'Flutter', category: 'Mobile', icon: '📱', imgSrc: '/skills/flutter.png', proficiency: 75,
      details: ['Cross-platform Apps', 'State Management', 'Custom Widgets'] },
    { name: 'REST APIs', category: 'Backend', icon: '🌐', imgSrc: '/skills/rest.png', proficiency: 92,
      details: ['API Design & Architecture', 'Auth & Security', 'OpenAPI/Swagger'] },
  ];

  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">What I work with</p>
          <h2 className="text-5xl font-bold text-white">Skills & Expertise</h2>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto" />
        </motion.div>

        {/* Category legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map((cat) => (
            <span key={cat} className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-gray-400 bg-white/[0.02]">
              {cat}
            </span>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="group relative p-6 rounded-2xl bg-white/[0.025] border border-white/[0.06] hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-300"
            >
              {/* Category pill */}
              <span className="absolute top-4 right-4 text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/15">
                {skill.category}
              </span>

              {/* Icon + Name */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-2xl flex-shrink-0">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg leading-tight">{skill.name}</h3>
                </div>
              </div>

              {/* Proficiency bar */}
              <div className="mb-5">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs text-gray-500">Proficiency</span>
                  <span className="text-xs font-medium text-blue-400">{skill.proficiency}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.05 + 0.3, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                  />
                </div>
              </div>

              {/* Details */}
              <ul className="space-y-1.5">
                {skill.details.map((d, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500/60 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '3+', label: 'Years Experience' },
            { value: '10+', label: 'Technologies' },
            { value: '20+', label: 'Projects Delivered' },
            { value: '2', label: 'Roles Held' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
