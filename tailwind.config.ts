import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"], // pregătit pentru dark mode dacă vrei ulterior
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Paleta WAW (poți ajusta când decidem brandingul final)
        brand: {
          50: "#eef8ff",
          100: "#d8efff",
          200: "#b6e2ff",
          300: "#84cdff",
          400: "#4db3ff",
          500: "#1f97f5",
          600: "#0f79ce",
          700: "#0f63a6",
          800: "#114f83",
          900: "#123f69",
          DEFAULT: "#1f97f5",
        },
        accent: {
          50: "#fef6ee",
          100: "#fdebd6",
          200: "#fbd1a8",
          300: "#f8b173",
          400: "#f3873e",
          500: "#ee6c1a",
          600: "#d45213",
          700: "#ad3e14",
          800: "#8b3316",
          900: "#722c15",
          DEFAULT: "#ee6c1a",
        },
        success: { DEFAULT: "#16a34a" },
        warning: { DEFAULT: "#f59e0b" },
        danger: { DEFAULT: "#ef4444" },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        soft: "0 8px 20px -12px rgba(0,0,0,0.2)",
      },
      fontSize: {
        display: ["2.25rem", { lineHeight: "2.6rem", fontWeight: "700" }],
      },
    },
  },
  plugins: [],
};
export default config;
