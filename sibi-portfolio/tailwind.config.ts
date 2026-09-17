import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1620",
          800: "#101B26",
          700: "#1A2735",
          600: "#2C3B4C",
          500: "#48596C",
          400: "#6B7C8E",
          300: "#94A3B3",
        },
        paper: {
          DEFAULT: "#FBFCFC",
          100: "#F5F7F8",
          200: "#EEF1F3",
        },
        line: {
          DEFAULT: "#E3E8EB",
          strong: "#CBD3D8",
        },
        teal: {
          50: "#EEF9F8",
          100: "#D3EFEB",
          300: "#7FC7BE",
          500: "#1F8A7C",
          600: "#187167",
          700: "#125A52",
        },
        signal: {
          DEFAULT: "#1F8A7C",
          soft: "#EEF9F8",
        },
      },
      fontFamily: {
        display: ["IBM Plex Sans", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        drawLine: {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.8s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
