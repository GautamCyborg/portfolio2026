'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { categorizedSkills } from '../data/portfolioData';
import { Code2, Database, Server, Wrench, Layers } from 'lucide-react';

const categoryIcons = {
  'Frontend': Code2,
  'Backend & APIs': Server,
  'Databases & Storage': Database,
  'DevOps & Tools': Wrench,
  'Languages & Protocols': Layers
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 sm:py-36 bg-transparent text-zinc-100 relative">
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
            Skills & Tech Stack
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-normal max-w-xl leading-relaxed">
            Production-grade stack across frontend engineering, backend microservices, databases, and cloud deployment.
          </p>
        </motion.div>

        {/* Polished Asymmetric Bento Matrix with Clean 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {Object.entries(categorizedSkills).map(([cat, items], idx) => {
            const IconComponent = categoryIcons[cat] || Code2;
            const isFeaturedCategory = cat === 'Frontend' || cat === 'Backend & APIs';

            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -3 }}
                className={`vercel-card rounded-2xl p-6 sm:p-7 space-y-4 shadow-xl border border-zinc-800/80 hover:border-zinc-700/80 transition-all ${
                  isFeaturedCategory ? 'md:col-span-1' : ''
                }`}
              >
                {/* Bento Card Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-zinc-800/80">
                  <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white font-bold shrink-0 shadow-inner">
                    <IconComponent className="w-4.5 h-4.5 text-zinc-300" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                    {cat}
                  </h3>
                </div>

                {/* Clean 2-Column Minimal List */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  {items.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-zinc-300 text-xs sm:text-sm font-medium hover:text-white transition-colors cursor-default select-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
                      <span className="truncate">{skill}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
