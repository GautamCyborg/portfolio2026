'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import ResumeModal from '../components/ResumeModal';
import Footer from '../components/Footer';
import AmbientBackground from '../components/AmbientBackground';

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#030304] text-zinc-100 selection:bg-zinc-100 selection:text-zinc-950 overflow-x-hidden">
      {/* Subtle Maxime Heckel Style Ambient Background */}
      <AmbientBackground />

      {/* Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <div className="relative z-10">
        {/* Hero Section */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Professional Experience Section */}
        <Experience />

        {/* Shipped Projects Showcase */}
        <Projects />

        {/* Skills Matrix */}
        <Skills />

        {/* Academic Background */}
        <Education />

        {/* Interactive Contact Form */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>

      {/* PDF Resume Modal Viewer */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </main>
  );
}
