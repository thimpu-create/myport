import { motion } from 'framer-motion';
import { Github, GitBranch, Shield, Zap, Globe } from 'lucide-react';

const steps = [
  {
    title: 'Code push',
    desc: 'Commit to main branch on GitHub triggers the pipeline instantly.',
    icon: <Github className="w-5 h-5" />,
    color: 'gray',
    detail: 'git push origin main',
  },
  {
    title: 'GitHub Actions CI',
    desc: 'Lint, build check, and npm audit run in parallel on every push.',
    icon: <GitBranch className="w-5 h-5" />,
    color: 'blue',
    detail: '~45s avg build time',
  },
  {
    title: 'Security scan',
    desc: 'Dependency CVE audit and security headers validation before deploy.',
    icon: <Shield className="w-5 h-5" />,
    color: 'yellow',
    detail: 'A+ observatory score',
  },
  {
    title: 'Vercel deploy',
    desc: 'Zero-downtime deploy to Vercel. Preview on PRs, production on main.',
    icon: <Zap className="w-5 h-5" />,
    color: 'green',
    detail: 'Auto rollback on fail',
  },
  {
    title: 'Edge CDN',
    desc: 'Site delivered globally via Vercel Edge Network with HTTPS enforced.',
    icon: <Globe className="w-5 h-5" />,
    color: 'purple',
    detail: 'Global edge nodes',
  },
];

const colorMap: Record<string, { border: string; bg: string; text: string; dot: string }> = {
  gray:   { border: 'border-gray-500/30',   bg: 'bg-gray-500/10',   text: 'text-gray-300',   dot: 'bg-gray-400' },
  blue:   { border: 'border-blue-500/30',   bg: 'bg-blue-500/10',   text: 'text-blue-300',   dot: 'bg-blue-400' },
  yellow: { border: 'border-yellow-500/30', bg: 'bg-yellow-500/10', text: 'text-yellow-300', dot: 'bg-yellow-400' },
  green:  { border: 'border-green-500/30',  bg: 'bg-green-500/10',  text: 'text-green-300',  dot: 'bg-green-400' },
  purple: { border: 'border-purple-500/30', bg: 'bg-purple-500/10', text: 'text-purple-300', dot: 'bg-purple-400' },
};

const DeploymentProcess = () => {
  return (
    <section id="deployment-process" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-green-400 text-sm font-medium tracking-widest uppercase mb-3">How it ships</p>
          <h2 className="text-5xl font-bold text-white">Deployment pipeline</h2>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-green-500 to-blue-500 mx-auto" />
          <p className="text-gray-500 mt-5 text-sm max-w-md mx-auto">
            Every push to main runs through this automated pipeline — no manual steps, no downtime.
          </p>
        </motion.div>

        {/* Pipeline steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-gray-500/20 via-blue-500/20 to-purple-500/20" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, idx) => {
              const c = colorMap[step.color];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center relative"
                >
                  {/* Step number */}
                  <div className="text-[10px] font-medium text-gray-600 mb-2 tracking-widest">
                    STEP {idx + 1}
                  </div>

                  {/* Icon circle */}
                  <div className={`w-20 h-20 flex items-center justify-center ${c.bg} border ${c.border} rounded-2xl mb-4 ${c.text} relative z-10`}>
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-semibold mb-2 text-sm">{step.title}</h3>

                  {/* Desc */}
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">{step.desc}</p>

                  {/* Detail pill */}
                  <span className={`text-[10px] px-2.5 py-1 rounded-full border ${c.border} ${c.bg} ${c.text} font-mono`}>
                    {step.detail}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Live proof section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* CI Badge */}
          <div className="p-5 rounded-2xl bg-white/[0.025] border border-white/[0.06] flex flex-col gap-3">
            <p className="text-xs text-gray-500 uppercase tracking-widest">Build status</p>
            <img
              src="https://img.shields.io/github/actions/workflow/status/thimpu-create/myport/ci.yml?branch=main&style=for-the-badge&label=CI%20Pipeline"
              alt="CI Pipeline status"
              className="h-7 object-left"
            />
            <p className="text-xs text-gray-600">Live from GitHub Actions</p>
          </div>

          {/* Security score */}
          <div className="p-5 rounded-2xl bg-white/[0.025] border border-white/[0.06] flex flex-col gap-3">
            <p className="text-xs text-gray-500 uppercase tracking-widest">Security grade</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-green-400">A+</span>
              <span className="text-xs text-gray-500">Mozilla Observatory</span>
            </div>
            <p className="text-xs text-gray-600">CSP · HSTS · X-Frame · CORP headers</p>
          </div>

          {/* Deploy target */}
          <div className="p-5 rounded-2xl bg-white/[0.025] border border-white/[0.06] flex flex-col gap-3">
            <p className="text-xs text-gray-500 uppercase tracking-widest">Deploy target</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white font-medium text-sm">Vercel Edge Network</span>
            </div>
            <p className="text-xs text-gray-600">Zero-downtime · Auto rollback · Global CDN</p>
          </div>
        </motion.div>

        {/* View source link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a
            href="https://github.com/thimpu-create/myport/blob/main/.github/workflows/ci.yml"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-blue-400 transition-colors underline underline-offset-4"
          >
            View workflow file on GitHub ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DeploymentProcess;