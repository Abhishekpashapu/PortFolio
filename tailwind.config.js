/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#050508",
        panel: "#0b0b12",
        line: "#1c1c2a",
        accent: {
          DEFAULT: "#4f7cff",
          soft: "#7aa2ff",
          deep: "#2f5ae0",
        },
        violet: "#8b5cf6",
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(79, 124, 255, 0.55)",
        "glow-sm": "0 0 30px -10px rgba(79, 124, 255, 0.5)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at center, rgba(79,124,255,0.14) 1px, transparent 1px)",
      },
      animation: {
        "spin-slow": "spin 18s linear infinite",
        "spin-slower": "spin 32s linear infinite reverse",
        float: "float 7s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        shimmer: "shimmer 2.4s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
