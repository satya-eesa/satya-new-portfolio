import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#06070a",
        foreground: "#f3f4f6",
        silicon: {
          950: "#06070a",
          900: "#0b0d14",
          850: "#10131d",
          800: "#161a29",
          700: "#22283d",
          600: "#323b59",
        },
        logic: {
          cyan: "#00f0ff",
          amber: "#ff9f1c",
          violet: "#9d4edd",
          emerald: "#00f5d4",
          pink: "#f72585",
        }
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        'circuit-pulse': 'circuitPulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'trace-glow': 'traceGlow 6s ease-in-out infinite alternate',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        circuitPulse: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
        traceGlow: {
          '0%': { filter: 'drop-shadow(0 0 4px rgba(6, 182, 212, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 16px rgba(139, 92, 246, 0.7))' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      },
      backgroundImage: {
        'silicon-grid': "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)",
        'circuit-grid': "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
} satisfies Config;
