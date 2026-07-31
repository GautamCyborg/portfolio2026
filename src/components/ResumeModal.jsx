'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl h-[85vh] bg-[#09090b] border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-zinc-900 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-heading">
                    {personalInfo.name} — Resume
                  </h3>
                  <p className="text-xs text-zinc-400 font-medium">
                    Full Stack Web Developer PDF
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs font-medium">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/resume.pdf"
                  download="Gautam_Singh_Jadon_Resume.pdf"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 font-semibold text-zinc-950 bg-zinc-100 hover:bg-white rounded-lg transition-all shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download PDF
                </motion.a>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-1.5 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* PDF Frame */}
            <div className="flex-1 bg-[#030304] relative">
              <iframe
                src="/resume.pdf#toolbar=0"
                className="w-full h-full border-none"
                title="Gautam Singh Jadon Resume"
              />
            </div>

            {/* Footer info bar */}
            <div className="px-6 py-3 bg-zinc-900 border-t border-zinc-800 flex items-center justify-between text-xs font-medium text-zinc-400">
              <span>Official Resume of Gautam Singh Jadon</span>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-zinc-200 hover:underline"
              >
                Open in New Tab
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
