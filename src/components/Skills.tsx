'use client';

import React, { useState } from 'react';
import {
  Cpu,
  Layers,
  Sparkles,
  Binary,
  Bot
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skillCategories.map((c) => c.title)];

  const filteredCategories =
    selectedCategory === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.title === selectedCategory);

  const getCategoryIcon = (title: string) => {
    if (title.includes('VLSI') || title.includes('RTL') || title.includes('Hardware')) {
      return <Cpu className="w-5 h-5" />;
    }
    if (title.includes('Algorithms') || title.includes('DSA')) {
      return <Binary className="w-5 h-5" />;
    }
    if (title.includes('Web') || title.includes('Software')) {
      return <Layers className="w-5 h-5" />;
    }
    return <Bot className="w-5 h-5" />;
  };

  return (
    <section id="skills" className="relative py-20 sm:py-32 bg-slate-100/40 dark:bg-[#070a12]/90 transition-colors duration-300 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Arsenal</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            Specialized Across <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-cyan-600 dark:from-indigo-400 dark:via-sky-300 dark:to-cyan-300 bg-clip-text text-transparent">Silicon, Algorithms &amp; Web</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
            A transparent matrix of digital hardware expertise, core C++ problem-solving foundations, and early-stage web development tools.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-500/25 scale-[1.02]'
                    : 'bg-white dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.06] shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl glass-panel p-6 sm:p-8 shadow-xl glass-panel-hover"
            >
              <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-200 dark:border-white/[0.08]">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                  {getCategoryIcon(category.title)}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-normal">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.05] hover:border-indigo-400/40 hover:bg-white dark:hover:bg-white/[0.05] transition-all flex items-center justify-between shadow-sm"
                  >
                    <span className="font-medium text-xs text-slate-800 dark:text-white">
                      {skill.name}
                    </span>
                    {skill.level && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 font-semibold">
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Silicon to Software Pipeline */}
        <div className="rounded-3xl glass-panel p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-white/[0.08]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-1">
                <Layers className="w-4 h-4" />
                <span>Engineering Growth Flow</span>
              </div>
              <h4 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                From Silicon Circuits to Software Learning
              </h4>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
              Grounded methodology spanning gate-level digital hardware, foundational algorithms, and web tools.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {[
              { step: '01', title: 'Silicon & RTL', desc: 'Datapath architecture, finite state machines & Verilog HDL' },
              { step: '02', title: 'DSA Foundations', desc: 'Core problem solving in C++, arrays, sorting & Big-O analysis' },
              { step: '03', title: 'Embedded Systems', desc: 'Dual-core MCU firmware, sensor buses & real-time actuation' },
              { step: '04', title: 'Web Foundations', desc: 'HTML5, CSS3, JavaScript basics & responsive layouts' },
              { step: '05', title: 'Continuous Growth', desc: 'Progressively expanding algorithmic depth & web projects' },
            ].map((p, idx) => (
              <div
                key={p.step}
                className="relative p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06] hover:border-cyan-400/40 transition flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">{p.step}</span>
                  <h5 className="font-heading font-bold text-sm text-slate-900 dark:text-white mt-1">{p.title}</h5>
                  <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
                {idx < 4 && (
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-slate-400 dark:text-slate-500 font-mono text-xs">
                    &rarr;
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
