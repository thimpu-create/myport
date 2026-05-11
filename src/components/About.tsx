import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-28 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">Who I am</p>
          <h2 className="text-5xl font-bold text-white">About Me</h2>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Photo */}
          <motion.div
            className="lg:w-5/12 w-full max-w-sm mx-auto"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent z-10 rounded-3xl" />
                <Image
                  src="/profile/profile.jpg"
                  alt="Thimpu Sengyung"
                  width={480}
                  height={560}
                  className="w-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 -right-5 px-5 py-3 rounded-2xl bg-[#0f1629] border border-blue-500/20 shadow-xl"
              >
                <p className="text-xs text-gray-500">Current Role</p>
                <p className="text-sm text-blue-400 font-medium">Technical Officer · JJM Assam</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="lg:flex-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-5 text-gray-400 leading-relaxed">
              <p>
                I'm a <span className="text-white font-medium">Software Engineer & Technical Officer</span> currently contributing to the{' '}
                <span className="text-blue-400">Jal Jeevan Mission in Assam</span> — a national initiative to provide tap water connections to every rural household.
              </p>
              <p>
                With over 3 years of hands-on experience as a Full Stack Developer and DevOps Engineer, I specialize in building scalable backend systems, deploying cloud infrastructure on AWS, and automating delivery pipelines.
              </p>
              <p className="border-l-2 border-blue-500/30 pl-4 text-sm italic text-gray-500">
                "I believe in creating software that not only works flawlessly but evolves seamlessly with changing needs."
              </p>
            </div>

            {/* Expertise grid */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {[
                { icon: '🐍', label: 'Python Ecosystem' },
                { icon: '☁️', label: 'Cloud (AWS)' },
                { icon: '🔄', label: 'DevOps & CI/CD' },
                { icon: '🌐', label: 'REST API Design' },
                { icon: '🐋', label: 'Docker & Containers' },
                { icon: '🐧', label: 'Linux Administration' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.025] border border-white/[0.05]">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm text-gray-300">{item.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a href="#skills" onClick={(e) => { e.preventDefault(); document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-7 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors duration-300">
                View My Skills
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-7 py-2.5 rounded-full border border-white/10 hover:border-white/25 text-gray-300 hover:text-white text-sm font-medium transition-all duration-300">
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
