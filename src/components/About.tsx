import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section id="about" className="min-h-screen py-20 px-4 flex items-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-purple-900/10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content - Left Side */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent pb-4">
                Hello, World!
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            </motion.div>
            
            <div className="glass-card p-8 md:p-12 rounded-2xl border border-white/5 backdrop-blur-sm">
              <div className="space-y-8 text-lg text-gray-300">
                <motion.p {...fadeInUp} className="leading-relaxed">
                  Transforming ideas into <span className="text-blue-400 font-semibold">scalable solutions</span> with 
                  <span className="text-purple-400 font-semibold"> cutting-edge technology</span>. As a Full Stack Developer 
                  and DevOps enthusiast, I blend creativity with technical expertise to build robust, future-ready applications.
                </motion.p>
                
                <motion.p 
                  {...fadeInUp}
                  transition={{ delay: 0.2 }}
                  className="leading-relaxed"
                >
                  Currently serving as the <span className="text-blue-400 font-semibold">Chief Technology Officer</span> at
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold"> stillmindspace.com</span>,
                  where I architect innovative solutions and lead a team of talented developers. My focus is on creating 
                  seamless user experiences while maintaining robust backend systems.
                </motion.p>
                
                <motion.div 
                  {...fadeInUp}
                  transition={{ delay: 0.4 }}
                  className="space-y-4"
                >
                  <p className="leading-relaxed">
                    My technical journey spans:
                  </p>
                  <ul className="grid grid-cols-2 gap-4 text-base">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                      <span>Python Ecosystem Development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
                      <span>Cloud Infrastructure (AWS/DO)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                      <span>DevOps & CI/CD Pipelines</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
                      <span>Cross-platform Mobile Apps</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.p 
                  {...fadeInUp}
                  transition={{ delay: 0.6 }}
                  className="leading-relaxed text-gray-400/80 text-sm border-l-2 border-blue-500/30 pl-4 italic"
                >
                  "I believe in creating software that not only works flawlessly but also evolves seamlessly with changing needs."
                </motion.p>
              </div>
            </div>
          </div>

          {/* Photo Section - Right Side */}
          <motion.div 
            className="lg:flex-1 w-full max-w-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-blue-500/20 transition-all duration-500 group-hover:border-blue-500/40">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 z-10" />
                <Image
                  src="/profile/profile.jpg" // Add your image to the public folder
                  alt="Thimpu Sengyung"
                  width={500}
                  height={600}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -inset-4 border-2 border-dashed border-blue-500/20 rounded-2xl -z-10 transition-all duration-500 group-hover:border-blue-500/30 group-hover:scale-105" />
              
              {/* Glowing Orbs */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
              
              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-8 -right-8 w-16 h-16 border border-blue-500/30 rounded-full"
              />
              
              <motion.div
                animate={{ 
                  rotate: [360, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -bottom-8 -left-8 w-20 h-20 border-2 border-purple-500/20 rounded-full"
              />

              {/* Floating Dots */}
              <motion.div
                animate={{ y: [-10, 10] }}
                transition={{ duration: 2, repeat: Infinity, yoyo: true }}
                className="absolute top-1/4 -right-4 w-2 h-2 bg-blue-400 rounded-full"
              />
              <motion.div
                animate={{ y: [-15, 15] }}
                transition={{ duration: 3, repeat: Infinity, yoyo: true }}
                className="absolute bottom-1/4 -left-4 w-3 h-3 bg-purple-400 rounded-full"
              />

              {/* Tech Icons */}
              <motion.div
                animate={{ 
                  y: [-5, 5],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  yoyo: true
                }}
                className="absolute -top-12 right-12 glass-card p-2 rounded-lg"
              >
                🐍
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [-8, 8],
                  rotate: [0, -10, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  yoyo: true
                }}
                className="absolute -bottom-10 left-10 glass-card p-2 rounded-lg"
              >
                🐋
              </motion.div>

              {/* Animated Lines */}
              <motion.div
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/3 -right-12 w-24 h-[1px] bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 rotate-45"
              />
              
              <motion.div
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-1/3 -left-12 w-24 h-[1px] bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 -rotate-45"
              />

              {/* Enhanced Tech Stack Badges */}
              <motion.div
                animate={{ x: [-5, 5] }}
                transition={{ duration: 3, repeat: Infinity, yoyo: true }}
                className="absolute -right-4 top-10 glass-card px-4 py-2 rounded-lg text-sm text-blue-400 border border-blue-500/20"
              >
                Full Stack
              </motion.div>
              
              <motion.div
                animate={{ x: [5, -5] }}
                transition={{ duration: 3, repeat: Infinity, yoyo: true }}
                className="absolute -left-4 bottom-10 glass-card px-4 py-2 rounded-lg text-sm text-purple-400 border border-purple-500/20"
              >
                DevOps
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <motion.div 
          className="mt-12 flex flex-wrap gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a 
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-8 py-3 overflow-hidden rounded-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-500" />
            <span className="relative z-10">View My Skills</span>
            <div className="absolute inset-0 border border-blue-500/50 rounded-full group-hover:scale-105 transition-transform duration-500" />
          </a>
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-8 py-3 overflow-hidden rounded-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-500" />
            <span className="relative z-10">Get in Touch</span>
            <div className="absolute inset-0 border border-purple-500/50 rounded-full group-hover:scale-105 transition-transform duration-500" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
