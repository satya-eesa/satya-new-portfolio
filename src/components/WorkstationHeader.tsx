'use client';

import React, { useState, useEffect } from 'react';
import { Activity, Radio, Cpu, Zap } from 'lucide-react';

export default function WorkstationHeader() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' IST'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#05070d] border-b border-cyan-500/20 text-[11px] font-mono text-slate-400 py-1 px-4 sm:px-8 flex items-center justify-between overflow-x-auto whitespace-nowrap z-50 select-none">
      {/* Left: PLL Lock & Frequency */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 text-cyan-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="font-bold">CORE_PLL: LOCKED</span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-300">100.00 MHz</span>
        </div>

        <div className="hidden md:flex items-center gap-2 text-slate-400">
          <Cpu className="w-3.5 h-3.5 text-violet-400" />
          <span>ARCH: MODULAR RTL</span>
          <span className="text-slate-600">/</span>
          <span className="text-violet-300">IEEE 1364 VERILOG</span>
        </div>
      </div>

      {/* Center: Live Waveform Signal Icon */}
      <div className="hidden lg:flex items-center gap-2 text-slate-400">
        <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
        <span className="text-slate-300">IIIT SRI CITY</span>
        <span className="text-slate-600">•</span>
        <span className="text-emerald-400 font-semibold">INTERNSHIP STATUS: ACTIVE_SEARCH</span>
      </div>

      {/* Right: Clock & Station Telemetry */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 text-amber-300">
          <Radio className="w-3 h-3 text-amber-400 animate-pulse" />
          <span>TRANSMISSION: NOMINAL</span>
        </div>
        <span className="text-slate-600">|</span>
        <div className="text-slate-200 font-bold tracking-wider">{time || '00:00:00 IST'}</div>
      </div>
    </div>
  );
}
