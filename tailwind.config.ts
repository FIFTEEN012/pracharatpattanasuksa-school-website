import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        school: {
          purple: "#5B259F",
          deep: "#3B176B",
          yellow: "#F6C945",
          light: "#F3F4F6",
          ink: "#1F2937",
          muted: "#6B7280",
          line: "#E5E7EB",
        },
      },
      fontFamily: {
        sans: ["Prompt", "Sarabun", "Noto Sans Thai", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 45px rgba(31, 41, 55, 0.08)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
