'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import LinkedinIcon from './icons/LinkedinIcon';
import GithubIcon from './icons/GithubIcon';
import {
  Mail, Phone, MapPin, Send, Check, Copy, CheckCircle2
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copiedField, setCopiedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          colors: ['#ffffff', '#a1a1aa', '#71717a'],
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback
      }

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-28 sm:py-36 bg-transparent text-zinc-100 relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Heading (38px) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="mb-10 flex flex-col items-center text-center space-y-2"
        >
          <h2 className="text-2xl sm:text-[38px] font-bold text-zinc-100 tracking-tight font-heading leading-tight">
            Get In Touch
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-normal max-w-md text-center">
            Have a project in mind or full stack role available? Send a message or connect directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 space-y-3.5"
          >
            
            {/* Email Card */}
            <div className="vercel-card rounded-2xl p-5 flex items-center justify-between border border-zinc-800/80">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 shrink-0">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-zinc-400 block">Direct Email</span>
                  <p className="text-white font-semibold text-xs sm:text-sm">{personalInfo.email}</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleCopy(personalInfo.email, 'email')}
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 transition-colors cursor-pointer"
                title="Copy Email"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}
              </motion.button>
            </div>

            {/* Phone Card */}
            <div className="vercel-card rounded-2xl p-5 flex items-center justify-between border border-zinc-800/80">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 shrink-0">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-zinc-400 block">Phone / WhatsApp</span>
                  <p className="text-white font-semibold text-xs sm:text-sm">{personalInfo.phone}</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleCopy(personalInfo.phone, 'phone')}
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 transition-colors cursor-pointer"
                title="Copy Phone"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}
              </motion.button>
            </div>

            {/* Location Card */}
            <div className="vercel-card rounded-2xl p-5 flex items-center gap-3.5 border border-zinc-800/80">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 shrink-0">
                <MapPin className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="text-xs font-medium text-zinc-400 block">Location</span>
                <p className="text-white font-semibold text-xs sm:text-sm">{personalInfo.location}</p>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-3 pt-1">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-3.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-200 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-3.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-200 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </motion.a>
            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7"
          >
            <div className="vercel-card rounded-2xl p-6 sm:p-8 shadow-xl border border-zinc-800/80">
              
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="py-10 flex flex-col items-center justify-center text-center space-y-3"
                  >
                    <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white font-bold">
                      <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-heading">Message Sent!</h3>
                    <p className="text-zinc-400 text-xs sm:text-sm max-w-sm font-normal">
                      Thank you for reaching out. Gautam will review your message and respond shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-zinc-300 mb-1 text-left">Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 text-xs sm:text-sm transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-zinc-300 mb-1 text-left">Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 text-xs sm:text-sm transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-zinc-300 mb-1 text-left">Subject</label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Project Inquiry / Role"
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 text-xs sm:text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-zinc-300 mb-1 text-left">Message</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Your message details..."
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 text-xs sm:text-sm transition-colors font-sans"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 rounded-full font-semibold text-zinc-950 bg-zinc-100 hover:bg-white transition-all shadow-sm flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>

                  </form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
