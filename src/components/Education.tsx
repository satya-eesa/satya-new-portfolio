'use client';

import React from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="relative py-20 sm:py-32 bg-[#060912] overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Trajectory</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Scholastic Excellence &amp; <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">Academic Rigor</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
            A proven trajectory of scholastic distinction, mathematical mastery, and specialized electronics engineering training.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-6">
          {educationData.map((edu, idx) => (
            <div
              key={edu.degree}
              className="rounded-3xl glass-panel p-6 sm:p-8 border border-white/[0.08] shadow-xl glass-panel-hover"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex-shrink-0 mt-1">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-indigo-400 font-semibold">
                        0{idx + 1} • MILESTONE
                      </span>
                      {edu.score && (
                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold font-mono">
                          {edu.score}
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-slate-300 mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                {/* Period & Location Badge */}
                <div className="flex flex-row md:flex-col items-center md:items-end gap-3 md:gap-1 text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{edu.period}</span>
                  </span>
                  <span className="flex items-center gap-1.5 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.location}</span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="pt-6">
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-4">
                  {edu.description}
                </p>

                {/* Highlights */}
                {edu.coursesOrHighlights && edu.coursesOrHighlights.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {edu.coursesOrHighlights.map((h, hIdx) => (
                      <div
                        key={hIdx}
                        className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-2 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
