import { motion } from 'framer-motion';

type Tool = { name: string; note?: string };
type Stage = {
  index: string;
  label: string;
  sublabel: string;
  color: string;
  accentHex: string;
  tools: Tool[];
};

const pipeline: Stage[] = [
  {
    index: '01',
    label: 'Code',
    sublabel: 'Write',
    color: 'text-blue-400',
    accentHex: '#60a5fa',
    tools: [
      { name: 'Python', note: 'Primary' },
      { name: 'TypeScript' },
      { name: 'Django', note: 'Full-stack' },
      { name: 'FastAPI', note: 'APIs' },
      { name: 'Next.js' },
      { name: 'Flutter' },
      { name: 'Laravel', note: 'PHP' },
    ],
  },
  {
    index: '02',
    label: 'Build',
    sublabel: 'Package',
    color: 'text-cyan-400',
    accentHex: '#22d3ee',
    tools: [
      { name: 'Docker', note: 'Containers' },
      { name: 'Docker Compose' },
      { name: 'npm / pip' },
      { name: 'Webpack' },
    ],
  },
  {
    index: '03',
    label: 'Test & Scan',
    sublabel: 'Validate',
    color: 'text-amber-400',
    accentHex: '#fbbf24',
    tools: [
      { name: 'GitHub Actions', note: 'CI' },
      { name: 'Jest / Vitest' },
      { name: 'npm audit' },
      { name: 'Lighthouse CI' },
      { name: 'ESLint' },
    ],
  },
  {
    index: '04',
    label: 'Deploy',
    sublabel: 'Ship',
    color: 'text-green-400',
    accentHex: '#4ade80',
    tools: [
      { name: 'Vercel', note: 'Current' },
      { name: 'VPS / WHM' },
      { name: 'Nginx', note: 'Proxy' },
      { name: 'AWS EC2 / S3' },
      { name: 'GitHub Pages' },
    ],
  },
  {
    index: '05',
    label: 'Operate',
    sublabel: 'Run',
    color: 'text-violet-400',
    accentHex: '#a78bfa',
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
  { value: '3+', label: 'Years in production' },
  { value: '15+', label: 'Tools shipped' },
  { value: '2', label: 'Live products' },
  { value: 'A+', label: 'Security score' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative bg-[#030712]">

      {/* ── Section masthead ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mb-12"
      >
        <div className="flex items-center justify-between border-t border-b border-white/[0.06] py-4">
          <div className="flex items-center gap-6">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-gray-700">III.</span>
            <span
              className="text-white tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.1rem', fontStyle: 'italic' }}
            >
              Capabilities · Toolchain
            </span>
          </div>
          <div className="flex items-center gap-8 font-mono text-[9px] tracking-widest uppercase text-gray-700">
            <span>5 surfaces / 1 loop</span>
            <span>003 / 007</span>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto">

        {/* ── Intro line ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <h2
            className="text-white"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              letterSpacing: '-0.02em',
              lineHeight: '1.1',
            }}
          >
            Skills, systems,<br />
            and surfaces for{' '}
            <em className="text-blue-400">production.</em>
          </h2>
          <p className="text-gray-600 text-xs font-mono max-w-xs text-right leading-relaxed">
            Every stage of the delivery pipeline — the tools actually used in production. Dev → Production.
          </p>
        </motion.div>

        {/* ── Pipeline label ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-6 font-mono text-[9px] tracking-widest uppercase text-gray-700"
        >
          <span>Dev</span>
          <div className="flex-1 h-px bg-white/[0.05]" />
          <span>Production</span>
        </motion.div>

        {/* ── Pipeline grid — editorial columns ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 border border-white/[0.06] mb-16">
          {pipeline.map((stage, i) => (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`p-6 relative ${i < pipeline.length - 1 ? 'border-r border-white/[0.06]' : ''}`}
            >
              {/* Accent top rule */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: stage.accentHex, opacity: 0.6 }}
              />

              {/* Stage index + label */}
              <div className="mb-5">
                <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-gray-700 mb-1">
                  {stage.index} · {stage.sublabel}
                </p>
                <h3
                  className="text-white"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.1rem',
                    fontStyle: 'italic',
                  }}
                >
                  {stage.label}
                </h3>
              </div>

              {/* Tools list — clean index style */}
              <ul className="space-y-2.5">
                {stage.tools.map((tool) => (
                  <li key={tool.name} className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] text-gray-300">{tool.name}</span>
                    {tool.note && (
                      <span className={`font-mono text-[9px] uppercase tracking-wide ${stage.color} opacity-70`}>
                        {tool.note}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ── Stats — editorial data table ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-white/[0.06]"
        >
          <div className="border-b border-white/[0.06] px-6 py-3 font-mono text-[9px] tracking-widest uppercase text-gray-700">
            Production metrics · At a glance
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
            {stats.map((stat) => (
              <div key={stat.label} className="p-6 text-center">
                <div
                  className="text-white mb-1"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '2.5rem',
                    fontStyle: 'italic',
                    lineHeight: '1',
                  }}
                >
                  {stat.value}
                </div>
                <div className="font-mono text-[9px] tracking-widest uppercase text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;