'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiences } from '../data/portfolioData';
import {
  Calendar, MapPin, CheckCircle2, Building2,
  ArrowRight, Cpu
} from 'lucide-react';

export default function Experience() {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeExp = experiences[activeIdx];

  return (
    <section id="experience" className="py-28 sm:py-36 bg-transparent text-zinc-100 relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="mb-10 flex flex-col items-center text-center space-y-2"
        >
          <h2 className="text-2xl sm:text-[38px] font-bold text-zinc-100 tracking-tight font-heading leading-tight">
            Work Experience
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-normal max-w-xl leading-relaxed">
            2+ years of full stack engineering, microservices architecture, and shipped production builds.
          </p>
        </motion.div>

        {/* Interactive Tab View */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Left Sidebar Role Selector Tabs */}
          <div className="md:col-span-4 flex flex-col gap-3">
            {experiences.map((exp, idx) => {
              const isActive = activeIdx === idx;
              return (
                <motion.button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative w-full text-left p-4.5 sm:p-5 rounded-2xl border transition-all flex items-center justify-between shrink-0 cursor-pointer overflow-hidden ${
                    isActive
                      ? 'bg-zinc-900/90 border-zinc-700 text-white shadow-xl'
                      : 'bg-[#09090b]/80 border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700/60'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeExpGlow"
                      className="absolute inset-0 bg-gradient-to-r from-zinc-800/40 to-transparent -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 font-heading transition-colors ${
                      isActive
                        ? 'bg-zinc-100 text-zinc-950 border-white shadow-sm'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                    }`}>
                      {exp.company.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold font-heading text-white block">
                        {exp.company}
                      </h4>
                      <span className="text-xs text-zinc-400 block font-medium mt-0.5">
                        {exp.role}
                      </span>
                      <span className="text-[11px] text-zinc-500 block mt-0.5 font-mono">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    isActive ? 'translate-x-1 text-white' : 'text-zinc-600 opacity-50'
                  }`} />
                </motion.button>
              );
            })}
          </div>

          {/* Right Interactive Active Role Details Panel */}
          <div className="md:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="vercel-card rounded-2xl p-6 sm:p-7 space-y-6 shadow-2xl border border-zinc-800/80"
              >
                {/* Active Role Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-zinc-800/80">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-400">
                      <span className="text-zinc-200 font-bold text-sm">{activeExp.company}</span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-zinc-400 font-medium">{activeExp.location}</span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading tracking-tight">
                      {activeExp.role}
                    </h3>
                  </div>

                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300 shadow-sm shrink-0 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{activeExp.period}</span>
                  </span>
                </div>

                {/* Highlights Bullet Items */}
                <div className="space-y-2.5">
                  {activeExp.highlights.map((bullet, bIdx) => (
                    <motion.div
                      key={bIdx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: bIdx * 0.08 }}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700/80 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-zinc-200 text-xs sm:text-sm leading-relaxed font-normal">
                        {bullet}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-2 flex-wrap text-xs font-medium">
                  <span className="text-zinc-400 font-semibold mr-1">Stack:</span>
                  {activeExp.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
