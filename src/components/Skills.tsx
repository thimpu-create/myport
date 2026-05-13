import { motion } from 'framer-motion';

type Tool = {
  name: string;
  note?: string;
};

type Stage = {
  label: string;
  sublabel: string;
  color: string;
  borderColor: string;
  bgColor: string;
  textColor: string;
  tools: Tool[];
};

const pipeline: Stage[] = [
  {
    label: 'Code',
    sublabel: 'Write',
    color: 'from-blue-500 to-blue-600',
    borderColor: 'border-blue-500/25',
    bgColor: 'bg-blue-500/8',
    textColor: 'text-blue-400',
    tools: [
      { name: 'Python', note: 'Primary' },
      { name: 'TypeScript' },
      { name: 'Django', note: 'Backend' },
      { name: 'FastAPI', note: 'APIs' },
      { name: 'Next.js' },
      { name: 'Flutter' },
    ],
  },
  {
    label: 'Build',
    sublabel: 'Package',
    color: 'from-cyan-500 to-teal-500',
    borderColor: 'border-cyan-500/25',
    bgColor: 'bg-cyan-500/8',
    textColor: 'text-cyan-400',
    tools: [
      { name: 'Docker', note: 'Containers' },
      { name: 'Docker Compose' },
      { name: 'npm / pip' },
      { name: 'Webpack' },
    ],
  },
  {
    label: 'Test & Scan',
    sublabel: 'Validate',
    color: 'from-yellow-500 to-amber-500',
    borderColor: 'border-yellow-500/25',
    bgColor: 'bg-yellow-500/8',
    textColor: 'text-yellow-400',
    tools: [
      { name: 'GitHub Actions', note: 'CI' },
      { name: 'Jest / Vitest' },
      { name: 'npm audit' },
      { name: 'Lighthouse CI' },
      { name: 'ESLint' },
    ],
  },
  {
    label: 'Deploy',
    sublabel: 'Ship',
    color: 'from-green-500 to-emerald-500',
    borderColor: 'border-green-500/25',
    bgColor: 'bg-green-500/8',
    textColor: 'text-green-400',
    tools: [
      { name: 'Vercel', note: 'Current' },
      { name: 'VPS / WHM', note: 'CPanel' },
      { name: 'Nginx', note: 'Reverse proxy' },
      { name: 'AWS EC2 / S3' },
      { name: 'GitHub Pages' },
    ],
  },
  {
    label: 'Operate',
    sublabel: 'Run',
    color: 'from-violet-500 to-purple-500',
    borderColor: 'border-violet-500/25',
    bgColor: 'bg-violet-500/8',
    textColor: 'text-violet-400',
    tools: [
      { name: 'Linux', note: 'Admin' },
      { name: 'MySQL / PostgreSQL' },
      { name: 'Redis' },
      { name: 'Shell scripting' },
      { name: 'SSH / SCP' },
    ],
  },
];

const stats = [
  { value: '3+', label: 'Years hands-on' },
  { value: '15+', label: 'Tools in production' },
  { value: '2', label: 'Live products shipped' },
  { value: 'A+', label: 'Security score' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-center"
        >
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">How I work</p>
          <h2 className="text-5xl font-bold text-white">Toolchain</h2>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto" />
          <p className="text-gray-500 mt-5 text-sm">
            Every stage of the delivery pipeline — the tools I actually use in production.
          </p>
        </motion.div>

        {/* Pipeline arrow label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-10 text-xs text-gray-600 uppercase tracking-widest"
        >
          <span>Dev</span>
          <div className="flex-1 max-w-xs h-px bg-gradient-to-r from-blue-500/30 via-green-500/30 to-purple-500/30" />
          <span>Production</span>
        </motion.div>

        {/* Toolchain pipeline grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {pipeline.map((stage, i) => (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`rounded-2xl border ${stage.borderColor} ${stage.bgColor} p-5 relative overflow-hidden`}
            >
              {/* Stage gradient top bar */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${stage.color}`} />

              {/* Stage label */}
              <div className="mb-4">
                <p className={`text-[10px] font-medium uppercase tracking-widest ${stage.textColor} mb-0.5`}>
                  {stage.sublabel}
                </p>
                <h3 className="text-white font-semibold text-base">{stage.label}</h3>
              </div>

              {/* Tools list */}
              <ul className="space-y-2">
                {stage.tools.map((tool) => (
                  <li key={tool.name} className="flex items-center justify-between gap-2">
                    <span className="text-xs text-gray-300 font-medium">{tool.name}</span>
                    {tool.note && (
                      <span className={`text-[10px] px-1.5 py-0.5 rounded ${stage.bgColor} ${stage.textColor} border ${stage.borderColor} whitespace-nowrap`}>
                        {tool.note}
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              {/* Arrow connector (desktop) */}
              {i < pipeline.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 w-6 items-center justify-center z-10">
                  <svg viewBox="0 0 12 12" className="w-3 h-3 text-gray-600 fill-current">
                    <path d="M1 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;