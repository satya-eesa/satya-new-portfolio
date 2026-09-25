'use client';

import React from 'react';
import {
  Cpu,
  Layers,
  Terminal,
  Zap,
  Bot,
  GraduationCap,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-slate-100/40 dark:bg-[#070a12]/80 transition-colors duration-300 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineer Profile</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            Engineering from Silicon Logic to <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-cyan-600 dark:from-indigo-400 dark:via-sky-300 dark:to-cyan-300 bg-clip-text text-transparent">Software Foundations</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
            Electronics &amp; Communication Engineering undergraduate at IIIT Sri City focused on digital hardware, C++ problem-solving foundations, and exploring web technologies.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Card 1: Main Story (8 Columns) */}
          <div className="md:col-span-8 rounded-3xl glass-panel p-6 sm:p-8 flex flex-col justify-between glass-panel-hover">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">The Engineering Journey</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">From silicon circuits and C++ logic to expanding web horizons</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  I am an Electronics &amp; Communication Engineering undergraduate at the{' '}
                  <strong className="text-slate-900 dark:text-white font-semibold">Indian Institute of Information Technology, Sri City (IIIT Sri City)</strong>.
                  My engineering journey is rooted in digital logic and hardware microarchitectures—designing synthesizable Verilog modules, analyzing signal waveforms, and interfacing microcontrollers with physical systems.
                </p>
                <p>
                  Alongside hardware, I am actively building my problem-solving discipline in C++, focusing on core Data Structures and Algorithms (arrays, strings, searching, sorting, stacks, and complexity analysis). Simultaneously, I am taking my first enthusiastic steps into modern web development, eager to learn how software interfaces connect with computational logic.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                <span>Focus: Digital RTL • C++ Foundations • Exploring Web</span>
              </div>
              <a
                href="#silicon-lab"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition"
              >
                <span>Test Interactive ALU</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Academic Roots (4 Columns) */}
          <div className="md:col-span-4 rounded-3xl glass-panel p-6 sm:p-8 flex flex-col justify-between glass-panel-hover">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">Academic Rigor</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Scholastic distinction</p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-slate-600 dark:text-slate-300">
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase font-mono block">IIIT Sri City</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white block mt-0.5">B.Tech in ECE</span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">Digital Architecture, VLSI Design, Embedded Systems</span>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase font-mono block">Intermediate (MPC)</span>
                  <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-300 block mt-0.5">994 / 1000 Marks</span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">Ranked in top 0.6% statewide in Mathematics, Physics &amp; Chemistry</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/[0.08] text-xs text-slate-500 dark:text-slate-400">
              JEE Advanced Qualified
            </div>
          </div>

          {/* Card 3: Four Pillars of Specialization (12 Columns) */}
          <div className="md:col-span-12 rounded-3xl glass-panel p-6 sm:p-8 glass-panel-hover">
            <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Zap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Core Engineering Pillars</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] hover:border-indigo-400/40 transition">
                <div className="p-2 w-fit rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-3">
                  <Cpu className="w-4 h-4" />
                </div>
                <h5 className="font-heading font-bold text-sm text-slate-900 dark:text-white">Digital RTL &amp; Silicon</h5>
                <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Synthesizable Verilog HDL, datapath architecture, control unit FSMs, and register-level logic.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] hover:border-emerald-400/40 transition">
                <div className="p-2 w-fit rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-3">
                  <Terminal className="w-4 h-4" />
                </div>
                <h5 className="font-heading font-bold text-sm text-slate-900 dark:text-white">Core DSA in C++</h5>
                <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Array manipulations, searching &amp; sorting, two pointers, recursion, and C++ STL problem solving.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] hover:border-cyan-400/40 transition">
                <div className="p-2 w-fit rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 mb-3">
                  <Layers className="w-4 h-4" />
                </div>
                <h5 className="font-heading font-bold text-sm text-slate-900 dark:text-white">Web Dev (Foundations)</h5>
                <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Learning modern front-end fundamentals, HTML5, CSS3, JavaScript, and responsive design.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] hover:border-violet-400/40 transition">
                <div className="p-2 w-fit rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 mb-3">
                  <Bot className="w-4 h-4" />
                </div>
                <h5 className="font-heading font-bold text-sm text-slate-900 dark:text-white">Edge Systems &amp; IoT</h5>
                <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Dual-tier computing: Raspberry Pi edge computer vision combined with ESP32 deterministic control.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
