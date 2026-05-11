import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#030712]">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/8 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="text-center relative px-6 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-sm mb-8 tracking-wide"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.05]"
        >
          Thimpu
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Sengyung
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-6"
        >
          <span className="text-gray-300 font-medium">Software Engineer</span>
          <span className="text-gray-700">·</span>
          <span className="text-gray-400">Full Stack Developer</span>
          <span className="text-gray-700">·</span>
          <span className="text-gray-400">DevOps Engineer</span>
          <span className="text-gray-700">·</span>
          <span className="text-sm px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/20">
            Technical Officer · JJM Assam
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Building scalable systems and clean digital experiences — from cloud infrastructure to polished frontends.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="flex flex-wrap gap-4 justify-center mb-14"
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors duration-300"
          >
            Get in Touch
          </a>
          <a href="https://github.com/thimpu-create" target="_blank" rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-white/10 hover:border-white/30 text-gray-300 hover:text-white font-medium transition-all duration-300">
            GitHub ↗
          </a>
          <a href="https://linkedin.com/in/thimpu-sengyung-a00614260" target="_blank" rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-white/10 hover:border-white/30 text-gray-300 hover:text-white font-medium transition-all duration-300">
            LinkedIn ↗
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-md text-xs text-gray-500"
        >
          🚀 Auto-deployed via{' '}
          <span className="text-blue-400 font-medium">GitHub Actions</span> →{' '}
          <span className="text-yellow-400 font-medium">AWS EC2</span> +{' '}
          <span className="text-green-400 font-medium">S3</span> +{' '}
          <span className="text-purple-400 font-medium">CloudFront</span>
          <a href="#deployment-process" className="text-blue-400 underline underline-offset-2 hover:text-blue-300 transition-colors ml-1">See More →</a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-9 rounded-full border border-white/15 flex justify-center items-start pt-1.5">
          <div className="w-0.5 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
