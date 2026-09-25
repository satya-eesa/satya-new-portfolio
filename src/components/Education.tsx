'use client';

import React from 'react';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="relative py-28 bg-[#030508] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-cyan-600/10 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Academic <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">Trajectory</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl font-mono text-xs sm:text-sm">
            {'// RIGOROUS FOUNDATION IN MATHEMATICAL ANALYSIS, SEMICONDUCTOR PHYSICS & DIGITAL SYSTEMS'}
          </p>
        </div>

        {/* Electronic Bus Timing Timeline */}
        <div className="relative pl-8 sm:pl-12 border-l-2 border-cyan-500/40 space-y-12">
          {educationData.map((item, index) => (
            <div key={item.institution} className="relative group">
              {/* Timing Node Indicator */}
              <div className="absolute -left-[45px] sm:-left-[61px] top-1.5 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#070a14] border-2 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.4)] group-hover:scale-110 group-hover:border-violet-400 transition-all font-mono font-bold text-xs text-cyan-300">
                T{index}
              </div>

              {/* Card Container */}
              <div className="rounded-3xl p-7 sm:p-9 cyber-card border border-white/10 group-hover:border-cyan-400 transition-all shadow-xl">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3 font-mono">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-300">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </span>

                  {item.score && (
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-400/60 text-xs font-bold text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.3)]">
                      <Award className="w-4 h-4" />
                      <span>{item.score}</span>
                    </span>
                  )}
                </div>

                {/* Degree & Institution */}
                <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-cyan-300 transition-colors">
                  {item.degree}
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm font-semibold text-slate-300 font-mono">
                  <span>{item.institution}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-slate-400 text-xs font-normal">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{item.location}</span>
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Coursework / Highlights */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-2">
                    Key Highlights &amp; Academic Honors
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.coursesOrHighlights.map((hl: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/10 text-slate-300"
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
