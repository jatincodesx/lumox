import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "hsl(var(--lumox-ink))",
        bg: "hsl(var(--lumox-bg))",
        primary: "hsl(var(--lumox-primary))",
        secondary: "hsl(var(--lumox-secondary))",
        accent: "hsl(var(--lumox-accent))",
        warm: "hsl(var(--lumox-warm))",
        muted: "hsl(var(--lumox-muted))",
        soft: "hsl(var(--lumox-soft))",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2,12,27,0.06)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(1200px 600px at 80% -20%, rgba(0,188,235,0.15), transparent), radial-gradient(800px 400px at -10% 20%, rgba(11,95,255,0.20), transparent)",
        "cta-gradient":
          "linear-gradient(135deg, rgba(0,188,235,0.10), rgba(11,95,255,0.10))",
      },
    },
  },
  plugins: [],
};
export default config;
