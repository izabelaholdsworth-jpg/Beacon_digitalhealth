import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B1120', // Very dark navy/slate
        foreground: '#F8FAFC', // High contrast white/off-white
        primary: '#38BDF8', // Subtle electric blue
        secondary: '#D97706', // Muted Gold/Bronze
        muted: '#94A3B8', // Slate-400
        'navy': '#0F1729', // Keeping for backward compat if needed, but prefer background
        'navy-dark': '#020617',
        'navy-light': '#1E293B',
        'hero-navy': '#081226', // Consistent subpage hero background (deep navy, not black)
        'c-blue': '#0ea5e9', // "Intelligence" blue
        'c-gold': '#d97706', // "Value" gold
        'c-grey': '#64748b', // "Structure" grey
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-outfit)'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      }
    },
  },
};

export default config;