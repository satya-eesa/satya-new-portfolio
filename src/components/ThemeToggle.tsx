'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-xl bg-slate-200/50 dark:bg-white/[0.05] animate-pulse" />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="group relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-100 dark:bg-white/[0.06] hover:bg-slate-200 dark:hover:bg-white/[0.12] border border-slate-200/80 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-300 transition-all duration-300 shadow-sm"
      title={`Toggle theme (Currently ${isDark ? 'Dark' : 'Light'})`}
    >
      <div className="relative w-4 h-4 sm:w-4.5 sm:h-4.5">
        <Sun
          className={`absolute inset-0 w-full h-full transition-all duration-500 transform ${
            isDark
              ? 'rotate-90 scale-0 opacity-0'
              : 'rotate-0 scale-100 opacity-100 text-amber-500'
          }`}
        />
        <Moon
          className={`absolute inset-0 w-full h-full transition-all duration-500 transform ${
            isDark
              ? 'rotate-0 scale-100 opacity-100 text-cyan-300'
              : '-rotate-90 scale-0 opacity-0'
          }`}
        />
      </div>
    </button>
  );
}
