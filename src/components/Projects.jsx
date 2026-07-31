'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';
import ChromeIcon from './icons/ChromeIcon';
import {
  Code2, TreePine, Briefcase, FileCheck,
  Monitor, X, CheckCircle2, ChevronLeft, ChevronRight, ArrowUpRight
} from 'lucide-react';

const iconMap = {
  TreePine: TreePine,
  Briefcase: Briefcase,
  FileCheck: FileCheck,
  Chrome: ChromeIcon,
  Monitor: Monitor,
  Code2: Code2
};

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [activeModalProject, setActiveModalProject] = useState(null);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const activeProject = projects[currentIndex] || projects[0];
  const IconComp = activeProject ? (iconMap[activeProject.icon] || Code2) : Code2;

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 220 : -220,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (dir) => ({
      x: dir > 0 ? -220 : 220,
      opacity: 0,
      transition: { duration: 0.25, ease: "easeIn" }
    })
  };

  return (
    <section id="projects" className="py-28 sm:py-36 bg-transparent text-zinc-100 relative">
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
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-normal max-w-xl leading-relaxed">
            Production builds across geospatial platforms, financial ERP systems, and cloud automation.
          </p>
        </motion.div>

        {/* Carousel Showcase Container */}
        {projects.length > 0 && (
          <div className="relative space-y-3">
            
            {/* Arrow Nav Controls Bar */}
            <div className="flex items-center justify-between px-1 text-xs sm:text-sm text-zinc-400 font-medium">
              <span className="text-xs text-zinc-400 font-mono">
                {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </span>

              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={handlePrev}
                  className="p-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-200 transition-colors cursor-pointer shadow-sm"
                  aria-label="Previous Project"
                >
                  <ChevronLeft className="w-4 h-4" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={handleNext}
                  className="p-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-200 transition-colors cursor-pointer shadow-sm"
                  aria-label="Next Project"
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

            {/* Active Project Card */}
            <div className="overflow-hidden rounded-2xl min-h-[260px] relative">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={activeProject.id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="vercel-card rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl border border-zinc-800/80"
                >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-zinc-800/80">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white font-bold shrink-0 shadow-inner">
                        <IconComp className="w-5 h-5 text-zinc-300" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                          {activeProject.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-zinc-400 font-medium mt-0.5">
                          {activeProject.tagline}
                        </p>
                      </div>
                    </div>

                    <span className="px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300 shrink-0">
                      {activeProject.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
                    {activeProject.description}
                  </p>

                  {/* Footer: Tech Stack + View Action */}
                  <div className="pt-5 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-medium">
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800 text-xs font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <motion.button
                      onClick={() => setActiveModalProject(activeProject)}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="px-5 py-2.5 rounded-full font-semibold text-zinc-950 bg-zinc-100 hover:bg-white transition-all shadow-sm flex items-center gap-1.5 shrink-0 cursor-pointer text-xs sm:text-sm"
                    >
                      <span>Architecture & Impact</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.button>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Simple Pagination Dots */}
            <div className="flex items-center justify-center gap-2 pt-4">
              {projects.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => {
                    setDirection(dotIdx > currentIndex ? 1 : -1);
                    setCurrentIndex(dotIdx);
                  }}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === dotIdx
                      ? 'w-7 bg-zinc-100'
                      : 'w-2 bg-zinc-800 hover:bg-zinc-700'
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

          </div>
        )}

        {/* Detailed Modal Popup Drawer */}
        <AnimatePresence>
          {activeModalProject && (
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
                className="relative w-full max-w-2xl bg-[#09090b] border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-xl bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 active:scale-95 transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 mb-3 text-xs font-medium">
                  <span className="text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
                    {activeModalProject.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white font-heading">
                  {activeModalProject.title}
                </h3>
                <p className="text-sm text-zinc-400 font-medium mt-1">
                  {activeModalProject.tagline}
                </p>

                <div className="mt-6 space-y-4 text-zinc-300 text-sm leading-relaxed font-normal">
                  <p>{activeModalProject.description}</p>
                  
                  <h4 className="text-xs text-zinc-400 font-semibold uppercase tracking-wider pt-2">
                    Key Technical Achievements:
                  </h4>
                  <div className="space-y-2">
                    {activeModalProject.highlights.map((hl, i) => (
                      <div key={i} className="flex items-center gap-2.5 bg-zinc-900/60 p-3 rounded-xl border border-zinc-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="text-zinc-200 text-xs font-medium">{hl}</span>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-xs text-zinc-400 font-semibold uppercase tracking-wider pt-2">
                    Complete Technology Stack:
                  </h4>
                  <div className="flex flex-wrap gap-1.5 text-xs font-medium">
                    {activeModalProject.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-800 flex justify-end font-medium">
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="px-5 py-2 text-xs font-semibold bg-zinc-100 text-zinc-950 hover:bg-white active:scale-95 rounded-full transition-all cursor-pointer"
                  >
                    Close Modal
                  </button>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
