import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';
import Image from 'next/image';

type Skill = {
  name: string;
  category: string;
  icon: string;
  imgSrc: string;
  proficiency: number;
  details: string[];
  experience?: string;
  projects?: number;
};

const Skills = () => {
  const skills: Skill[] = [
    { 
      name: 'Python',
      category: 'Language',
      // You can specify either emoji or imgSrc
      icon: '🐍', // can be replaced with imgSrc
      imgSrc: '/skills/python.png', // example path
      // experience: '3+ years',
      proficiency: 90,
      // projects: 15,
      details: [
        'Django & FastAPI Development',
        'Data Analysis & Automation',
        'Machine Learning Projects'
      ]
    },
    { 
      name: 'FastAPI',
      category: 'Framework',
      icon: '⚡',
      imgSrc: '/skills/fastapi.png', // example path
      // experience: '2+ years',
      proficiency: 85,
      // projects: 8,
      details: [
        'High-performance REST APIs',
        'WebSocket Integration',
        'AsyncIO Implementation'
      ]
    },
    { 
      name: 'Django',
      category: 'Framework',
      icon: '🎯',
      imgSrc: '/skills/django.png', // example path
      // experience: '3+ years',
      proficiency: 88,
      // projects: 12,
      details: [
        'Full-stack Web Development',
        'REST Framework APIs',
        'Complex Database Models'
      ]
    },
    { 
      name: 'Docker',
      category: 'DevOps',
      icon: '🐋',
      imgSrc: '/skills/docker.png', // example path
      // experience: '2+ years',
      proficiency: 82,
      // projects: 10,
      details: [
        'Multi-container Applications',
        'Docker Compose',
        'Container Orchestration'
      ]
    },
    { 
      name: 'CI/CD',
      category: 'DevOps',
      icon: '🔄',
      imgSrc: '/skills/cidi.png', // example path
      // experience: '2+ years',
      proficiency: 80,
      // projects: 7,
      details: [
        'GitHub Actions',
        'Jenkins Pipelines',
        'Automated Testing'
      ]
    },
    // {
    //   name: 'AWS',
    //   category: 'Cloud',
    //   icon: '☁️',
    //   imgSrc: '/skills/aws.png', // example path
    //   experience: '2+ years',
    //   proficiency: 78,
    //   projects: 6,
    //   details: [
    //     'EC2 & S3 Management',
    //     'Lambda Functions',
    //     'RDS Configuration'
    //   ]
    // },
    {
      name: 'Linux',
      category: 'Server',
      icon: '🐧',
      imgSrc: '/skills/linux.png', // example path
      // experience: '3+ years',
      proficiency: 85,
      // projects: 20,
      details: [
        'Server Administration',
        'Shell Scripting',
        'Security Hardening'
      ]
    },
    {
      name: 'Nginx',
      category: 'Server',
      icon: '🌐',
      imgSrc: '/skills/nginx.png', // example path
      // experience: '2+ years',
      proficiency: 80,
      // projects: 15,
      details: [
        'Load Balancing',
        'Reverse Proxy',
        'SSL Configuration'
      ]
    },
    // {
    //   name: 'Digital Ocean',
    //   category: 'Cloud',
    //   icon: '🌊',
    //   imgSrc: '/skills/python.png', // example path
    //   experience: '2+ years',
    //   proficiency: 82,
    //   projects: 8,
    //   details: [
    //     'Droplet Management',
    //     'Kubernetes Clusters',
    //     'Managed Databases'
    //   ]
    // },
    { 
      name: 'Flutter',
      category: 'Mobile',
      icon: '📱',
      imgSrc: '/skills/flutter.png', // example path
      // experience: '1+ years',
      proficiency: 75,
      // projects: 4,
      details: [
        'Cross-platform Development',
        'State Management',
        'Custom Widgets'
      ]
    },
    { 
      name: 'REST APIs',
      category: 'Backend',
      icon: '🌐',
      imgSrc: '/skills/rest.png', // example path
      // experience: '3+ years',
      proficiency: 92,
      // projects: 25,
      details: [
        'API Design & Architecture',
        'Authentication & Security',
        'Documentation (Swagger/OpenAPI)'
      ]
    }
  ];

  const breakpointColumns = {
    default: 5,
    1600: 4,
    1200: 3,
    800: 2,
    500: 1
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Skills & Expertise
        </motion.h2>

        <Masonry
          breakpointCols={breakpointColumns}
          className="flex w-auto -ml-4"
          columnClassName="pl-4 bg-clips-padding [&:first-child]:ml-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="mb-6 p-6 rounded-2xl bg-gray-800/50 border border-blue-500/10 
                         hover:border-blue-500/30 hover:bg-gray-800/70 shadow-lg
                         backdrop-blur-sm transition-all duration-300
                         hover:shadow-blue-500/10 hover:shadow-xl"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  {skill.imgSrc ? (
                    <Image
                      src={skill.imgSrc}
                      alt={skill.name}
                      width={48}
                      height={48}
                      className="object-contain filter drop-shadow-glow transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="text-4xl filter drop-shadow-glow">
                      {skill.icon}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <span className="text-sm text-gray-400">{skill.category}</span>
                </div>
              </div>

              {/* Experience Bar */}
              {skill.proficiency && (
                <div className="mt-4">
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-sm text-gray-400">Proficiency</span>
                    <span className="text-sm text-blue-400">{skill.proficiency}%</span>
                  </div>
                </div>
              )}

              {/* Details */}
              {skill.details && (
                <ul className="mt-4 space-y-2">
                  {skill.details.map((detail, index) => (
                    <li key={index} className="text-sm text-gray-400 flex items-center gap-2">
                      <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}

              {/* Footer */}
              <div className="mt-4 pt-4 border-t border-gray-700/50 flex justify-between">
                {skill.experience && (
                  <span className="text-sm text-blue-400/80">
                    {skill.experience}
                  </span>
                )}
                {skill.projects && (
                  <span className="text-sm text-gray-400">
                    {skill.projects}+ Projects
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default Skills;
