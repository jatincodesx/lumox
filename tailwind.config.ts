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
        soft: "0 10px 30px -15px hsl(var(--lumox-ink) / 0.2)",
        premium:
          "0 24px 80px -40px hsl(var(--lumox-ink) / 0.42), 0 1px 0 hsl(var(--lumox-bg) / 0.65) inset",
      },
    },
  },
  plugins: [],
};

export default config;
