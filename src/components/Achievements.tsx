'use client';

import React from 'react';
import { Trophy, GraduationCap, Award, Cpu, Binary, Rocket, CheckCircle2 } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

// Map icon names to Lucide icons
const iconMap: Record<string, React.ElementType> = {
  Trophy,
  GraduationCap,
  Award,
  Cpu,
  Binary,
  Rocket,
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 bg-[#080a12] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-violet-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 rounded-full bg-cyan-600/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors &amp; Accomplishments</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Key <span className="bg-gradient-to-r from-amber-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">Milestones</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl">
            Recognitions reflecting competitive excellence, academic mastery, and dedicated digital hardware development.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item) => {
            const IconComponent = iconMap[item.icon] || Trophy;

            return (
              <div
                key={item.title}
                className="group relative rounded-2xl p-7 bg-[#0b0e1b]/80 border border-white/10 hover:border-cyan-500/40 hover:bg-[#0e1224] transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 flex items-center justify-center text-cyan-300 group-hover:scale-110 group-hover:text-amber-300 transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-white/5 border border-white/10 text-slate-300">
                      {item.badge}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono tracking-widest uppercase text-violet-400 font-semibold block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                  <span>Verified Recognition</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
