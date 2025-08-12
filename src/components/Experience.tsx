import { motion, useScroll, useTransform } from 'framer-motion';
import { HiOutlineBriefcase, HiSparkles } from 'react-icons/hi';
import { FaRocket } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const ParticleBackground = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 800 });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
          animate={{
            y: [-20, dimensions.height],
            x: Math.random() * dimensions.width,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer & DevOps Engineer',
      company: 'Adventurecode business LLP',
      period: '3 Years',
      description: 'Built and deployed scalable applications with strong backend, integration, and DevOps expertise.',
      achievements: [
        'Developed full-stack applications like CRM platforms',
        'Provided backend integrations and permanent hosting solutions',
        'Managed hosting environments and optimized server performance',
        'Implemented Git version control and CI/CD pipelines',
        'Resolved complex hosting and deployment issues efficiently'
      ],
      skills: [
        'Python', 'Django', 'Fastapi','MySQL',
        'Git', 'Docker', 'CI/CD', 'Nginx'
      ]
    },
    {
      title: 'Programmer Analyst and Intern',
      company: 'Techvariable Pvt. Ltd.',
      period: '1 Years',
      description: 'Provided technical solutions and support in varous projects as a part of the team',
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      <ParticleBackground />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <motion.h2 
          className="text-5xl font-bold mb-16 text-center"
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            My Adventure So Far <FaRocket className="inline-block ml-2 animate-bounce" />
          </span>
        </motion.h2>
        
        <div className="relative">
          {/* Animated timeline line */}
          <motion.div 
            className="absolute left-0 md:left-1/2 transform -translate-x-px h-full w-1"
            style={{
              background: "linear-gradient(180deg, #60A5FA 0%, #8B5CF6 50%, #EC4899 100%)",
            }}
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5 }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } mb-16`}
            >
              {/* Animated timeline dot */}
              <motion.div 
                className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center"
                whileHover={{ scale: 1.5, rotate: 180 }}
              >
                <HiSparkles className="text-white text-sm" />
              </motion.div>

              {/* Experience card with 3D effect */}
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 5,
                  rotateY: index % 2 === 0 ? 5 : -5,
                }}
                className="w-full md:w-5/12 bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-gray-700/50 transform perspective-1000"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  {exp.logo && (
                    <img src={exp.logo} alt={exp.company} className="w-12 h-12 rounded-full" />
                  )}
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <p className="text-blue-400">{exp.company}</p>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4 flex items-center gap-2">
                  <HiOutlineBriefcase className="text-blue-400" />
                  {exp.period}
                </p>
                
                <p className="mb-4 text-gray-300">{exp.description}</p>
                
                {exp.achievements && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">KEY ACHIEVEMENTS</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {exp.skills && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/20"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
