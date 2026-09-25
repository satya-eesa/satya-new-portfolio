'use client';

import React from 'react';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="relative py-28 bg-[#06070a] overflow-hidden">
      <div className="absolute inset-0 bg-semiconductor-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Academic <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Journey &amp; Education</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl">
            A proven trajectory of scholastic excellence, mathematical rigor, and specialized electronics engineering training.
          </p>
        </div>

        {/* High-Tech Bus / Timing Diagram Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-cyan-500/30 space-y-12">
          {educationData.map((item, index) => (
            <div key={item.institution} className="relative group">
              {/* Timing Node Indicator */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#0a0d1a] border-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:scale-110 group-hover:border-violet-400 transition-all">
                <span className="text-[10px] sm:text-xs font-mono font-bold text-cyan-300">
                  0{index + 1}
                </span>
              </div>

              {/* Card Container */}
              <div className="rounded-2xl p-6 sm:p-8 bg-[#0a0d18]/90 border border-white/10 backdrop-blur-xl group-hover:border-cyan-500/40 transition-all duration-300 shadow-xl">
                {/* Period & Score Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-cyan-300">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span>{item.period}</span>
                  </span>

                  {item.score && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-xs font-mono font-bold text-emerald-300">
                      <Award className="w-3.5 h-3.5" />
                      <span>{item.score}</span>
                    </span>
                  )}
                </div>

                {/* Degree & Institution */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.degree}
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm font-medium text-slate-400">
                  <span className="text-slate-300 font-semibold">{item.institution}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-slate-400 text-xs">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>{item.location}</span>
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Coursework / Highlights */}
                <div className="mt-5 pt-4 border-t border-white/5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                    Key Highlights &amp; Foundations
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.coursesOrHighlights.map((hl: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.03] border border-white/5 text-slate-300"
                      >
                        {hl}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
