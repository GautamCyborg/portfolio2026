'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import LinkedinIcon from './icons/LinkedinIcon';
import GithubIcon from './icons/GithubIcon';
import { ArrowDown, Download, Mail } from 'lucide-react';

export default function Hero({ onOpenResume }) {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-24 sm:pt-40 sm:pb-32 bg-transparent bg-ambient-spotlight text-zinc-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10 text-center flex flex-col items-center">

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs sm:text-sm font-medium text-zinc-300 mb-7 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span>Full Stack Web Developer • Vadodara, India</span>
        </motion.div>

        {/* Main Name Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-100 tracking-tight font-heading leading-[1.1] mb-6"
        >
          Gautam Singh Jadon
        </motion.h1>

        {/* Rewritten High-Impact Executive Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed max-w-lg mx-auto mb-10"
        >
          Full stack engineer with 2+ years of experience architecting scalable microservices, financial ERP integrations, and geospatial platforms using React, Next.js, Node.js, and cloud databases.
        </motion.p>

        {/* Primary & Secondary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-semibold mb-10 w-full sm:w-auto"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto px-7 py-3 rounded-full text-zinc-950 bg-zinc-100 hover:bg-white transition-all shadow-md flex items-center justify-center gap-2 group"
          >
            <span>Explore Projects</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </motion.a>

          <motion.button
            onClick={onOpenResume}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto px-7 py-3 rounded-full text-zinc-200 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:text-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4 text-zinc-400" />
            <span>Resume (PDF)</span>
          </motion.button>
        </motion.div>

        {/* Social Links Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-6 text-sm font-medium text-zinc-400"
        >
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, color: '#ffffff' }}
            className="transition-colors flex items-center gap-2"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </motion.a>

          <span className="text-zinc-700">•</span>

          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, color: '#ffffff' }}
            className="transition-colors flex items-center gap-2"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </motion.a>

          <span className="text-zinc-700">•</span>

          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.1, color: '#ffffff' }}
            className="transition-colors flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
