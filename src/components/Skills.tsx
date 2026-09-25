'use client';

import React, { useState } from 'react';
import {
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skillCategories.map((c) => c.title)];

  const filteredCategories =
    selectedCategory === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.title === selectedCategory);

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
            Specialized in <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-cyan-600 dark:from-indigo-400 dark:via-sky-300 dark:to-cyan-300 bg-clip-text text-transparent">Digital Hardware</span> &amp; Systems
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
            A comprehensive matrix of digital design methodologies, EDA simulation platforms, firmware toolchains, and programming environments.
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
                  <Cpu className="w-5 h-5" />
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

        {/* RTL to Silicon Pipeline */}
        <div className="rounded-3xl glass-panel p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-white/[0.08]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-1">
                <Layers className="w-4 h-4" />
                <span>RTL Design Methodology</span>
              </div>
              <h4 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                Register Transfer Level to Silicon Flow
              </h4>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
              Standard methodology followed for deterministic hardware validation and timing closure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {[
              { step: '01', title: 'Architecture Spec', desc: 'Datapath, registers, FSM diagrams & bit-width specs' },
              { step: '02', title: 'RTL Modeling', desc: 'Synthesizable Verilog HDL / SystemVerilog modules' },
              { step: '03', title: 'Verification', desc: 'Self-checking testbenches in Icarus Verilog & GTKWave' },
              { step: '04', title: 'Synthesis & Timing', desc: 'Logic synthesis & LUT utilization mapping in Vivado' },
              { step: '05', title: 'Hardware Test', desc: 'FPGA bitstream programming and I/O validation' },
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
