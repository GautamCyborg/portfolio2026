'use client';

import React, { useState } from 'react';
import { Check, Copy, Terminal, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function DeveloperTerminal() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('developerObj');

  const developerCode = `const developer = {
  name: "${personalInfo.name}",
  title: "${personalInfo.title}",
  location: "${personalInfo.location}",
  experienceYears: 2,
  status: "Available for Full Stack Opportunities",
  
  stack: {
    frontend: ["React.js", "Next.js", "TailwindCSS", "Redux"],
    backend: ["Node.js", "Express.js", "NestJS", "Microservices"],
    databases: ["PostgreSQL", "MySQL", "MongoDB"],
    integrations: ["Tally ERP XML", "Leaflet.js", "OCR", "Chrome Extension"],
    devops: ["PM2", "IIS", "Git", "Windows Server"]
  },

  keyImpacts: [
    "Shipped Aranyasetu tree tracking platform (3,000+ trees)",
    "Built enterprise ERP & Tally XML financial exporter",
    "Developed US Tax filing system with cron automation",
    "Migrated legacy Django backend to high-performance Node.js"
  ]
};`;

  const jsonCode = JSON.stringify({
    name: personalInfo.name,
    title: personalInfo.title,
    email: personalInfo.email,
    location: personalInfo.location,
    experience: "2+ Years",
    coreSkills: ["React", "Next.js", "Node.js", "NestJS", "PostgreSQL", "MongoDB"]
  }, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(activeTab === 'developerObj' ? developerCode : jsonCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-16 bg-[#09090b] text-zinc-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-zinc-400" />
            <h3 className="text-xl font-bold text-zinc-100">
              Developer Blueprint
            </h3>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            Interactive State Object
          </span>
        </div>

        {/* IDE Window Box */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden shadow-xl">
          
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-zinc-800 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-zinc-700 inline-block" />
              <span className="w-3 h-3 rounded-full bg-zinc-700 inline-block" />
              <span className="w-3 h-3 rounded-full bg-zinc-700 inline-block" />
              <span className="ml-2 text-zinc-400">gautam-singh-jadon.js</span>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-2 bg-zinc-950 p-1 rounded-lg border border-zinc-800">
              <button
                onClick={() => setActiveTab('developerObj')}
                className={`px-3 py-1 rounded transition-colors ${
                  activeTab === 'developerObj'
                    ? 'bg-zinc-800 text-white font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                developer.js
              </button>
              <button
                onClick={() => setActiveTab('jsonSchema')}
                className={`px-3 py-1 rounded transition-colors ${
                  activeTab === 'jsonSchema'
                    ? 'bg-zinc-800 text-white font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                profile.json
              </button>
            </div>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1 text-xs text-zinc-300 bg-zinc-900 border border-zinc-800 rounded hover:border-zinc-700 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Terminal Body */}
          <div className="p-6 overflow-x-auto text-xs sm:text-sm font-mono text-zinc-300 leading-relaxed bg-zinc-950">
            <pre className="text-zinc-300">
              <code>
                {activeTab === 'developerObj' ? developerCode : jsonCode}
              </code>
            </pre>
          </div>

        </div>

      </div>
    </section>
  );
}
