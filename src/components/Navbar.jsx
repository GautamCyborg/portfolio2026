'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#');

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
  ];

  // Scroll Spy to sync active navbar pill with visible section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ['experience', 'projects', 'skills', 'education'];
      const scrollPosition = window.scrollY + 250; // Offset threshold

      if (window.scrollY < 200) {
        setActiveHash('#');
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveHash(`#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      
      {/* Self-Centered Floating Glassmorphic Pill Nav */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`pointer-events-auto transition-all duration-300 ${
          scrolled
            ? 'bg-[#09090b]/95 border-zinc-700/80 shadow-2xl py-2 px-5'
            : 'bg-[#09090b]/90 border-zinc-800 py-2 px-5'
        } border backdrop-blur-xl rounded-full hidden sm:flex items-center gap-1 text-xs shadow-lg max-w-fit`}
      >
        <nav className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeHash === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveHash(link.href)}
                className={`relative px-3.5 py-1.5 font-medium transition-colors rounded-full ${
                  isActive ? 'text-white font-semibold' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBg"
                    className="absolute inset-0 bg-zinc-800/90 border border-zinc-700/60 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}

          {/* Work With Me Action Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-1.5 font-semibold text-zinc-950 bg-zinc-100 hover:bg-white rounded-full transition-all duration-150 flex items-center gap-1 ml-1.5 shadow-sm group"
          >
            <span>Work With Me</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </nav>
      </motion.div>

      {/* Mobile Floating Bar */}
      <div className="sm:hidden pointer-events-auto flex items-center gap-2">
        <div className="bg-[#09090b]/95 border border-zinc-800 px-4 py-2 rounded-full backdrop-blur-xl text-xs font-semibold text-white flex items-center gap-2 shadow-xl">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>GJ Portfolio</span>
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2.5 bg-[#09090b]/95 border border-zinc-800 text-zinc-300 hover:text-white rounded-full shadow-lg transition-all backdrop-blur-xl cursor-pointer"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden pointer-events-auto fixed inset-x-4 top-16 z-40 bg-[#09090b] border border-zinc-800 rounded-2xl p-5 space-y-3 text-xs text-center shadow-2xl"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = activeHash === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveHash(link.href);
                      setMobileMenuOpen(false);
                    }}
                    className={`py-2.5 rounded-xl transition-colors font-medium ${
                      isActive ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-300 hover:bg-zinc-900'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-zinc-950 bg-zinc-100 font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Work With Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
