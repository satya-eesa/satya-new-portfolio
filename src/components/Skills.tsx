'use client';

import React, { useState } from 'react';
import { Cpu, Terminal, Layers, ChevronRight, Zap, CheckCircle2, Sliders } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skillCategories.map((c) => c.title)];

  const filteredCategories =
    selectedCategory === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="relative py-28 bg-[#030508] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 rounded-full bg-cyan-600/10 blur-[170px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Silicon Capabilities &amp; Toolchains</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Engineering &amp; <span className="bg-gradient-to-r from-violet-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Hardware Stack</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl font-mono text-xs sm:text-sm">
            // SPECIALIZED IN DIGITAL SYNTHESIS • TIMING CLOSURE • EMBEDDED REAL-TIME PROTOCOLS
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-300 border-2 border-cyan-400/80 shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                    : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl p-7 sm:p-9 cyber-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
                      {category.badge}
                    </span>
                    <h3 className="text-2xl font-extrabold text-white mt-1">{category.title}</h3>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-md">
                    <Terminal className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-[#070b16] border border-white/10 hover:border-cyan-400/60 hover:bg-cyan-500/10 transition-all group"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 text-cyan-300 border border-cyan-500/30">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VLSI Engineering Pipeline Flowchart */}
        <div className="rounded-3xl p-8 cyber-card border-2 border-violet-500/30 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10 font-mono">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/40 flex items-center justify-center text-violet-400">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">RTL-to-GDSII Engineering Pipeline</h4>
                <p className="text-xs text-slate-400">
                  Specification to Hardware Synthesis Flow
                </p>
              </div>
            </div>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
              METHODOLOGY: VERIFIED
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Architecture Spec', desc: 'Datapath, registers, FSM state diagrams & bit-widths' },
              { step: '02', title: 'RTL Modeling', desc: 'Synthesizable Verilog HDL / SystemVerilog coding' },
              { step: '03', title: 'Verification', desc: 'Self-checking testbenches in Icarus & GTKWave' },
              { step: '04', title: 'Synthesis & Timing', desc: 'Gate synthesis & LUT utilization mapping in Vivado' },
              { step: '05', title: 'Hardware Test', desc: 'FPGA bitstream programming and I/O board validation' },
            ].map((p, idx) => (
              <div
                key={p.step}
                className="relative p-5 rounded-2xl bg-[#060914] border border-cyan-500/20 hover:border-cyan-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-black text-cyan-400">{p.step} //</span>
                  <h5 className="text-sm font-bold text-white mt-1.5">{p.title}</h5>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
                {idx < 4 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-cyan-400/60 font-mono">
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
