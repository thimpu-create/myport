import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-900">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_transparent_100%)]" />
        <div className="h-full w-full bg-black/50" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center space-y-12 relative px-4"
      >
        <div className="space-y-8">
          <motion.h1 
            className="text-7xl md:text-8xl font-bold tracking-tighter"
            animate={{ 
              textShadow: [
                "0 0 10px rgba(59,130,246,0.5)",
                "0 0 20px rgba(59,130,246,0.3)",
                "0 0 10px rgba(59,130,246,0.5)"
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Thimpu Sengyung
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-4xl font-light text-blue-400/90">
              Full Stack Developer & DevOps Engineer
            </h2>
            <p className="text-xl text-gray-400">
              COO & CTO at <span className="text-blue-400">stillmindspace.com</span>
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="flex flex-wrap gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <a 
            href="https://github.com/thimpu-create" 
            target="_blank"
            className="group relative px-12 py-4 overflow-hidden rounded-full bg-transparent border border-blue-500/30 hover:border-blue-500 transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-blue-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10">GitHub</span>
          </a>
          <a 
            href="https://linkedin.com/in/thimpu-sengyung-a00614260" 
            target="_blank"
            className="group relative px-12 py-4 overflow-hidden rounded-full bg-blue-500/10 hover:bg-blue-500/20 transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10">LinkedIn</span>
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
