import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mojrbnek', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto px-6"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">Let's talk</p>
          <h2 className="text-5xl font-bold text-white">Get in Touch</h2>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto" />
          <p className="text-gray-500 mt-5 text-sm">I'll get back to you as soon as possible.</p>
        </div>

        {/* Form */}
        <div className="bg-white/[0.025] border border-white/[0.06] rounded-3xl p-8">
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full p-3.5 bg-white/[0.04] border border-white/[0.08] rounded-xl focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 transition duration-200 text-white text-sm placeholder:text-gray-600 outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full p-3.5 bg-white/[0.04] border border-white/[0.08] rounded-xl focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 transition duration-200 text-white text-sm placeholder:text-gray-600 outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                className="w-full p-3.5 bg-white/[0.04] border border-white/[0.08] rounded-xl focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 transition duration-200 text-white text-sm placeholder:text-gray-600 outline-none h-36 resize-none"
                required
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-500 py-3.5 rounded-xl font-medium text-white text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </>
              ) : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 text-sm text-center py-2 px-4 rounded-xl bg-green-500/10 border border-green-500/20"
              >
                ✓ Message sent! I'll get back to you soon.
              </motion.p>
            )}
            {submitStatus === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm text-center py-2 px-4 rounded-xl bg-red-500/10 border border-red-500/20"
              >
                ✗ Something went wrong. Please try again.
              </motion.p>
            )}
          </div>
        </div>

        {/* Alt contact */}
        <p className="text-center text-gray-600 text-xs mt-6">
          Or reach me directly at{' '}
          <a href="mailto:thmtymthm@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
            thmtymthm@gmail.com
          </a>
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;