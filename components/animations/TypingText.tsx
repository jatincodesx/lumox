"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type TypingTextProps = {
  words: string[];
  interval?: number;
  className?: string;
  minWidthClassName?: string;
};

export function TypingText({
  words,
  interval = 1850,
  className,
  minWidthClassName = "min-w-[12.5rem] md:min-w-[14rem]",
}: TypingTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const activeWord = words[wordIndex] ?? "";

  useEffect(() => {
    if (reduceMotion || words.length < 2) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % words.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval, reduceMotion, words.length]);

  return (
    <span className={`relative inline-grid h-7 place-items-start overflow-hidden text-accent ${minWidthClassName} ${className ?? ""}`}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={activeWord}
          className="absolute left-0 top-0"
          initial={reduceMotion ? false : { opacity: 0, y: 14, filter: "blur(7px)" }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -14, filter: "blur(7px)" }}
          transition={{ duration: 0.34, ease: "easeOut" }}
        >
          {activeWord}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
