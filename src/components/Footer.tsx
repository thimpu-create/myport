import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 border-t border-white/10 backdrop-blur-xl bg-black/20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <div className="text-gray-400 text-sm">
          © {currentYear} Thimpu Sengyung. All rights reserved.
        </div>
        
        <div className="flex gap-6">
          <a 
            href="mailto:thmtymthm@gmail.com"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            Email
          </a>
          <a 
            href="https://github.com/thimpu-create"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/thimpu-sengyung-a00614260"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
