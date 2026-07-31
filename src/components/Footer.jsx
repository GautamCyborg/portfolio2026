'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import LinkedinIcon from './icons/LinkedinIcon';
import GithubIcon from './icons/GithubIcon';
import { Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-transparent border-t border-zinc-800/80 py-12 relative z-10 text-xs sm:text-sm">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 space-y-6">
        
        {/* Top Footer Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pb-6 border-b border-zinc-800/80">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 text-white flex items-center justify-center font-bold text-xs font-heading shrink-0">
              GJ
            </div>
            <div>
              <span className="font-bold text-zinc-100 text-sm sm:text-base block font-heading">
                {personalInfo.name}
              </span>
              <span className="text-zinc-400 font-medium text-xs block">
                Full Stack Web Developer • Vadodara, India
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer ml-1"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-zinc-500 font-medium text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} Gautam Singh Jadon. All rights reserved.</p>
          <p className="text-zinc-400">
            Crafted with Next.js & Helvetica Typography
          </p>
        </div>

      </div>
    </footer>
  );
}
