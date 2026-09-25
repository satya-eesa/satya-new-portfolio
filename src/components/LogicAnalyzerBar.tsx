'use client';

import React from 'react';
import { Activity } from 'lucide-react';

export default function LogicAnalyzerBar() {
  return (
    <div className="w-full bg-[#04060c] border-y border-cyan-500/20 py-3 px-4 sm:px-8 overflow-hidden select-none relative shadow-[0_0_20px_rgba(6,182,212,0.1)]">
      {/* Background grid */}
      <div className="absolute inset-0 bg-circuit-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Label */}
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 shrink-0">
          <Activity className="w-4 h-4 animate-pulse text-cyan-300" />
          <span className="font-bold tracking-wider">LOGIC ANALYZER // 4-CHANNEL CAPTURE</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
            TRIGGER: CLK_RISING
          </span>
        </div>

        {/* Live Animated Waveform Channels */}
        <div className="w-full md:w-auto flex-1 flex flex-col gap-1.5 font-mono text-[10px] text-slate-400 overflow-x-auto">
          {/* Channel 1: CLK */}
          <div className="flex items-center gap-3">
            <span className="w-20 text-slate-500 text-right shrink-0">CH0: CLK</span>
            <div className="h-4 flex items-center overflow-hidden w-full max-w-xl">
              <svg className="w-full h-full text-cyan-400" viewBox="0 0 600 20" fill="none">
                <path
                  d="M0 16 V4 H30 V16 H60 V4 H90 V16 H120 V4 H150 V16 H180 V4 H210 V16 H240 V4 H270 V16 H300 V4 H330 V16 H360 V4 H390 V16 H420 V4 H450 V16 H480 V4 H510 V16 H540 V4 H570 V16 H600"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="circuit-flow"
                />
              </svg>
            </div>
          </div>

          {/* Channel 2: ALU_BUS */}
          <div className="flex items-center gap-3">
            <span className="w-20 text-slate-500 text-right shrink-0">CH1: BUS[7:0]</span>
            <div className="h-4 flex items-center gap-1 overflow-hidden w-full max-w-xl">
              {['8\'h2D', '8\'h1B', '8\'h48', '8\'h00', '8\'hFF', '8\'h5A', '8\'hA5', '8\'h3C'].map(
                (hex, idx) => (
                  <div
                    key={idx}
                    className="flex-1 py-0.5 px-1.5 rounded bg-violet-500/10 border border-violet-500/30 text-center text-violet-300 text-[9px] hover:border-cyan-400 transition"
                  >
                    {hex}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Status Pill */}
        <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-emerald-400 shrink-0">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
          <span>STATUS: SAMPLING @ 2.5 GS/s</span>
        </div>
      </div>
    </div>
  );
}
