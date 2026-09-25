'use client';

import React from 'react';
import {
  Trophy,
  Award,
  Sparkles,
  CheckCircle2,
  Cpu,
  GraduationCap,
  Target
} from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  const getIcon = (title: string) => {
    if (title.includes('JEE')) return <Trophy className="w-5 h-5 text-amber-500 dark:text-amber-400" />;
    if (title.includes('994') || title.includes('587')) return <GraduationCap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
    if (title.includes('ALU')) return <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
    if (title.includes('HDLBits')) return <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    return <Award className="w-5 h-5 text-violet-600 dark:text-violet-400" />;
  };

  return (
    <section id="achievements" className="relative py-20 sm:py-32 bg-slate-100/40 dark:bg-[#070a12]/90 transition-colors duration-300 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honors &amp; Milestones</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            Competitive Merit &amp; <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-cyan-600 dark:from-indigo-400 dark:via-sky-300 dark:to-cyan-300 bg-clip-text text-transparent">Recognitions</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
            Scholastic rankings, competitive exam qualifications, and technical milestones reflecting continuous excellence.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl glass-panel p-6 sm:p-7 shadow-xl glass-panel-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08]">
                    {getIcon(item.title)}
                  </div>
                  {item.category && (
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06] text-slate-600 dark:text-slate-400 font-semibold">
                      {item.category}
                    </span>
                  )}
                </div>

                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {item.badge && (
                <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between text-xs">
                  <span className="font-mono text-cyan-700 dark:text-cyan-300 font-bold">
                    {item.badge}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
