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
        "sage-green": "#8B9A7B",
        "sage-green-dark": "#6B7B5B",
        "soft-pink": "#E8B4B8",
        "soft-pink-dark": "#D4A0A5",
        "warm-beige": "#F5EDE6",
        "warm-beige-dark": "#E8DDD4",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        cursive: ["var(--font-dancing)", "cursive"],
      },
      animation: {
        "float": "float 4s ease-in-out infinite",
        "pulse-glow": "pulse-glow 7s ease-in-out infinite",
        "blob": "blob 20s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(139, 154, 123, 0.4)" },
          "50%": { boxShadow: "0 0 20px 4px rgba(139, 154, 123, 0.6)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(20px, -20px) scale(1.05)" },
          "66%": { transform: "translate(-15px, 15px) scale(0.95)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
