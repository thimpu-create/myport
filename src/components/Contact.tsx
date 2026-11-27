'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Check, Copy, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showForm, setShowForm] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('thmtymthm@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable
    }
  };

  return (
    <section id="contact" className="border-t border-[var(--border-subtle)]">
      {/* ── Tamal-Inspired 50/50 Split Closing Section (Contact Left + Colorful Mosaic Right) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT HALF: Contact & Direct Links */}
        <div
          className="px-8 sm:px-12 lg:px-16 py-20 lg:py-28 flex flex-col justify-between"
          style={{ backgroundColor: 'var(--bg-contact)' }}
        >
          <div className="max-w-lg">
            <p
              className="font-mono text-xs uppercase tracking-[0.28em] mb-4"
              style={{ color: 'var(--accent-cyan)' }}
            >
              05 // Get In Touch
            </p>
            <h2
              className="font-sans font-extrabold leading-[1.08] tracking-tight mb-6"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.1rem)',
                color: 'var(--text-primary)',
              }}
            >
              Available for select engineering &amp; AI-native projects
            </h2>
            <p
              className="font-mono text-sm leading-relaxed mb-10"
              style={{ color: 'var(--text-secondary)' }}
            >
              Need a resilient government/enterprise platform, an AI-native RAG + MCP system, or end-to-end
              cloud architecture? Reach out directly.
            </p>

            {/* Email with Chonky Violet Underline */}
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <a
                href="mailto:thmtymthm@gmail.com"
                className="font-sans font-bold text-xl sm:text-2xl chonky-underline chonky-violet hover:opacity-85 transition-opacity"
                style={{ color: 'var(--text-primary)' }}
              >
                thmtymthm@gmail.com
              </a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email address"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-[var(--border-subtle)] font-mono text-[11px] hover:border-[var(--accent-cyan)] transition-colors"
                style={{ color: 'var(--text-muted)' }}
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Stacked Mono Social Links */}
            <div className="space-y-2.5 font-mono text-sm mb-8">
              {[
                { label: 'GitHub', href: 'https://github.com/thimpu-create' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/thimpu-sengyung-a00614260' },
                { label: 'Portfolio Domain', href: 'https://developerthimpu.online' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-fit hover:underline underline-offset-4 transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {item.label} ↗
                </a>
              ))}
            </div>

            {/* Toggleable Direct Formspree Form */}
            <div>
              <button
                type="button"
                onClick={() => setShowForm((prev) => !prev)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-xs uppercase tracking-widest text-white font-semibold transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: 'var(--accent-violet)' }}
              >
                <Send className="w-3.5 h-3.5" />
                <span>{showForm ? 'Hide Message Form' : 'Send a Quick Message'}</span>
              </button>

              {showForm && (
                <motion.form
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleSubmit}
                  className="mt-6 p-6 rounded-2xl border border-[var(--border-subtle)] space-y-4"
                  style={{ backgroundColor: 'var(--bg-surface)' }}
                >
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-[11px] uppercase tracking-widest mb-1.5"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-alt)] text-sm outline-none focus:border-[var(--accent-cyan)]"
                      style={{ color: 'var(--text-primary)' }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-[11px] uppercase tracking-widest mb-1.5"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-alt)] text-sm outline-none focus:border-[var(--accent-cyan)]"
                      style={{ color: 'var(--text-primary)' }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block font-mono text-[11px] uppercase tracking-widest mb-1.5"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or role..."
                      rows={4}
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-alt)] text-sm outline-none focus:border-[var(--accent-cyan)] resize-none"
                      style={{ color: 'var(--text-primary)' }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 rounded-lg font-mono text-xs uppercase tracking-widest text-white font-semibold disabled:opacity-50"
                    style={{ backgroundColor: 'var(--accent-blue)' }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message →'}
                  </button>
                  {submitStatus === 'success' && (
                    <p className="font-mono text-xs text-emerald-500">
                      ✓ Message sent! I&apos;ll get back to you soon.
                    </p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="font-mono text-xs text-rose-500">
                      ✗ Something went wrong. Please email thmtymthm@gmail.com directly.
                    </p>
                  )}
                </motion.form>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT HALF: Tamal-Style Vibrant 2-Column Color-Block Mosaic */}
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Tall Left Block — Lavender Purple (#aa5dff) */}
          <div className="p-8 sm:p-10 bg-[#aa5dff] text-white flex flex-col justify-between">
            <div className="flex items-start justify-between gap-4 mb-10">
              <span aria-hidden="true" className="text-6xl leading-none font-serif opacity-30 select-none">
                ❞
              </span>
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white/85 shrink-0 shadow-xl">
                <Image
                  src="/profile/profile.jpg"
                  alt="Thimpu Sengyung"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div>
              <p className="font-sans text-base sm:text-lg font-medium leading-relaxed mb-6">
                &ldquo;Software should stay dependable under real institutional scale — from multi-district
                government HRMS payroll runs to zero-downtime cloud deployments.&rdquo;
              </p>
              <p className="font-sans font-bold text-sm">— Thimpu Sengyung</p>
              <p className="font-mono text-xs text-white/80 mt-0.5">
                Technical Officer · JJM Assam · Guwahati
              </p>
            </div>
          </div>

          {/* Right Stacked Column */}
          <div className="grid grid-rows-2">
            {/* Top Right Block — Royal Blue (#1a5ee8) */}
            <div className="p-8 sm:p-10 bg-[#1a5ee8] text-white flex flex-col justify-between">
              <div className="flex items-center justify-between mb-6">
                <span aria-hidden="true" className="text-5xl leading-none font-serif opacity-30 select-none">
                  ❞
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest px-2.5 py-1 rounded bg-white/15">
                  Govt HRMS
                </span>
              </div>
              <div>
                <p className="font-sans text-sm sm:text-base font-medium leading-relaxed mb-4">
                  3-Portal JJM Brain HRMS serving Head Office &amp; DMMU teams with recursive org-unit scopes,
                  pay-matrix payroll batches &amp; digital service books.
                </p>
                <p className="font-mono text-xs text-white/85">
                  Laravel · Livewire · Filament · Audit-Logged
                </p>
              </div>
            </div>

            {/* Bottom Right Block — Deep Purple (#883be8) */}
            <div className="p-8 sm:p-10 bg-[#883be8] text-white flex flex-col justify-between">
              <div className="flex items-center justify-between mb-6">
                <span aria-hidden="true" className="text-5xl leading-none font-serif opacity-30 select-none">
                  ❞
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest px-2.5 py-1 rounded bg-white/15">
                  AI-Native
                </span>
              </div>
              <div>
                <p className="font-sans text-sm sm:text-base font-medium leading-relaxed mb-4">
                  AI-native development adopted across the stack: RAG + MCP knowledge assistants paired with
                  knowledge-graph &amp; agentic engineering workflows.
                </p>
                <p className="font-mono text-xs text-white/85">
                  RAG · MCP · 99.9% Uptime · A+ Security
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
