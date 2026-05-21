import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 relative bg-[#030712]">

      {/* ── Section masthead ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mb-12"
      >
        <div className="flex items-center justify-between border-t border-b border-white/[0.06] py-4">
          <div className="flex items-center gap-6">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-gray-700">II.</span>
            <span
              className="text-white tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.1rem', fontStyle: 'italic' }}
            >
              About the Engineer
            </span>
          </div>
          <div className="flex items-center gap-8 font-mono text-[9px] tracking-widest uppercase text-gray-700">
            <span>Filed under <span className="text-blue-500/60">Identity · Background</span></span>
            <span>002 / 007</span>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* ── Photo column ── */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              {/* Editorial plate label */}
              <div className="font-mono text-[9px] tracking-widest uppercase text-gray-700 mb-3">
                Plate Nº 01 · Portrait · Assam, India
              </div>

              <div className="overflow-hidden border border-white/[0.07]">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent z-10" />
                <Image
                  src="/profile/profile.jpg"
                  alt="Thimpu Sengyung"
                  width={480}
                  height={560}
                  className="w-full object-cover grayscale-[15%]"
                />
              </div>

              {/* Caption block — like a magazine photo caption */}
              <div className="border border-white/[0.06] border-t-0 p-4 bg-white/[0.015]">
                <p className="font-mono text-[9px] tracking-widest uppercase text-gray-600 mb-1">
                  Current Role
                </p>
                <p className="font-mono text-xs text-blue-400">
                  Technical Officer · JJM Assam
                </p>
                <p className="font-mono text-[9px] text-gray-700 mt-2">
                  26.1445° N · 91.7362° E
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Content column ── */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Pull quote — editorial style */}
            <div className="mb-10">
              <div
                className="text-white leading-tight mb-6"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  letterSpacing: '-0.01em',
                  lineHeight: '1.2',
                }}
              >
                "I believe in creating software that not only works{' '}
                <em>flawlessly</em> but evolves{' '}
                <span className="text-blue-400">seamlessly</span> with changing needs."
              </div>
              <div className="h-px bg-white/[0.06]" />
            </div>

            {/* Body copy — two column editorial */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-sm text-gray-400 leading-relaxed">
              <div className="space-y-4">
                <p>
                  I'm a <span className="text-white font-medium">Software Engineer & Technical Officer</span>{' '}
                  currently contributing to the{' '}
                  <span className="text-blue-400">Jal Jeevan Mission in Assam</span> — a national initiative
                  to provide tap water connections to every rural household in India.
                </p>
                <p>
                  With over 3 years of hands-on experience as a Full Stack Developer and DevOps Engineer,
                  I specialize in building scalable backend systems and deploying cloud infrastructure on AWS.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  I automate delivery pipelines, design REST APIs, and build AI-powered products from the
                  ground up — every layer of the stack, from Linux administration to polished React interfaces.
                </p>
                <p className="text-gray-600 text-xs font-mono leading-relaxed border-l border-white/[0.06] pl-4">
                  Python · Django · FastAPI · Docker · Nginx · AWS · Next.js · Flutter · Laravel
                </p>
              </div>
            </div>

            {/* Expertise — editorial index style */}
            <div className="border-t border-white/[0.06] pt-8">
              <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-gray-600 mb-6">
                Areas of expertise
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-0 border border-white/[0.06]">
                {[
                  { icon: '🐍', label: 'Python Ecosystem', note: 'Primary language' },
                  { icon: '☁️', label: 'Cloud (AWS)', note: 'EC2, S3, infra' },
                  { icon: '🔄', label: 'DevOps & CI/CD', note: 'GitHub Actions' },
                  { icon: '🌐', label: 'REST API Design', note: 'FastAPI, Django' },
                  { icon: '🐋', label: 'Docker & Containers', note: 'Compose, registry' },
                  { icon: '🐧', label: 'Linux Administration', note: 'VPS, Nginx, SSH' },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className={`p-4 border-white/[0.06] ${
                      i % 3 !== 2 ? 'border-r' : ''
                    } ${i < 3 ? 'border-b' : ''}`}
                  >
                    <span className="text-lg block mb-2">{item.icon}</span>
                    <p className="text-xs text-white font-medium mb-0.5">{item.label}</p>
                    <p className="font-mono text-[9px] text-gray-600 uppercase tracking-wide">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs — editorial style */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#skills"
                onClick={(e) => { e.preventDefault(); document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-6 py-2.5 bg-white text-black text-sm font-mono tracking-wide hover:bg-gray-100 transition-colors duration-200"
              >
                View Toolchain →
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-6 py-2.5 border border-white/10 text-gray-400 text-sm font-mono tracking-wide hover:border-white/30 hover:text-white transition-all duration-200"
              >
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