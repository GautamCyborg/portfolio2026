'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-28 sm:py-36 bg-transparent text-zinc-100 relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex flex-col items-center text-center"
        >
          <h2 className="text-2xl sm:text-[38px] font-bold text-zinc-100 tracking-tight font-heading leading-tight">
            Education
          </h2>
        </motion.div>

        {/* Sleek Minimal Education Bento Card */}
        <div className="space-y-4">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -3 }}
              className="vercel-card rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-xl border border-zinc-800/80 hover:border-zinc-700/80 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white font-bold shrink-0 shadow-inner">
                  <GraduationCap className="w-5 h-5 text-zinc-300" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                    {edu.degree}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-zinc-300 mt-0.5">
                    {edu.institution}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-400 flex items-center gap-1 font-medium mt-1">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{edu.location}</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center w-full sm:w-auto gap-2 text-xs sm:text-sm shrink-0 font-medium pt-3 sm:pt-0 border-t sm:border-t-0 border-zinc-800/80">
                <span className="px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 flex items-center gap-1.5 font-mono text-xs shadow-sm">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{edu.period}</span>
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-bold text-emerald-400 shadow-sm">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{edu.score}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
