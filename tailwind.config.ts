import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"], // important (next-themes toggles <html class="dark">)
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // map Tailwind color names -> your CSS variables
        bg:        "hsl(var(--lumox-bg) / <alpha-value>)",
        ink:       "hsl(var(--lumox-ink) / <alpha-value>)",
        primary:   "hsl(var(--lumox-primary) / <alpha-value>)",
        secondary: "hsl(var(--lumox-secondary) / <alpha-value>)",
        accent:    "hsl(var(--lumox-accent) / <alpha-value>)",
        warm:      "hsl(var(--lumox-warm) / <alpha-value>)",
        muted:     "hsl(var(--lumox-muted) / <alpha-value>)",
        soft:      "hsl(var(--lumox-soft) / <alpha-value>)",
      },
      boxShadow: {
        // you were using shadow-soft; define it here
        soft: "0 10px 30px -15px hsl(var(--lumox-ink) / 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;