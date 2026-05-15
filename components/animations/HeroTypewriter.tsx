"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const DEFAULT_TEXT = "Digital systems, websites, and AI tools built for real business outcomes.";

type HeroTypewriterProps = {
  text?: string;
};

export function HeroTypewriter({ text = DEFAULT_TEXT }: HeroTypewriterProps) {
  const reduceMotion = useReducedMotion();
  const [visibleChars, setVisibleChars] = useState(text.length);

  useEffect(() => {
    if (reduceMotion) {
      setVisibleChars(text.length);
      return undefined;
    }

    setVisibleChars(0);
    const timer = window.setInterval(() => {
      setVisibleChars((current) => {
        if (current >= text.length) {
          window.clearInterval(timer);
          return current;
        }

        return current + 1;
      });
    }, 26);

    return () => window.clearInterval(timer);
  }, [reduceMotion, text]);

  const typed = text.slice(0, visibleChars);
  const complete = visibleChars >= text.length;

  return (
    <span className="relative inline-block min-h-[2.35em] md:min-h-[2.25em]" aria-label={text}>
      <span aria-hidden="true">
        {typed}
        <span
          className={`ml-1 inline-block h-[0.82em] w-[0.08em] translate-y-[0.08em] rounded-full bg-accent ${
            complete ? "animate-pulse opacity-70" : "opacity-100"
          }`}
        />
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}

