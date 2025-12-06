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
        'navy': '#0F1729',
        'navy-dark': '#0A0E1A',
        'navy-light': '#1a2332',
        'mint': '#B8F4D4',
        'mint-light': '#d4f9e6',
        'mint-dark': '#9ee8c0',
        'cyan': '#5DD9E8',
        'cyan-light': '#8ee4f0',
        'cyan-dark': '#3bc9dc',
        'grey': '#4A5568',
        'grey-light': '#718096',
        'grey-dark': '#2D3748',
      },
    },
  },
};

export default config;