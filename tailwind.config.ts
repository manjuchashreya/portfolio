import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        orbFloat: {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-28px) scale(1.04)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        lineDraw: {
          from: { transform: "scaleY(0)", transformOrigin: "top" },
          to: { transform: "scaleY(1)", transformOrigin: "top" },
        },
      },
      animation: {
        "orb-float": "orbFloat 9s ease-in-out infinite",
        "orb-float-slow": "orbFloat 13s ease-in-out infinite reverse",
        "gradient-shift": "gradientShift 8s ease infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "shimmer": "shimmer 2.5s linear infinite",
        "line-draw": "lineDraw 1.2s ease-out forwards",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
