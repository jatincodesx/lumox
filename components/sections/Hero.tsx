"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { LumoxCore } from "@/components/animations/LumoxCore";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { buttonVariants } from "@/components/ui/button";

const typingWords = [
  "Websites",
  "Web Applications",
  "AI Tools",
  "Automation Systems",
  "Digital Products",
];

const heroGroup = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.68, ease: "easeOut" } },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.35 });
  const visualY = useTransform(smooth, [0, 1], [0, 120]);
  const visualScale = useTransform(smooth, [0, 1], [1, 0.82]);
  const gridY = useTransform(smooth, [0, 1], [0, -90]);
  const activeWord = typingWords[wordIndex];

  useEffect(() => {
    if (reduceMotion) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % typingWords.length);
    }, 1850);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section ref={ref} className="relative z-10 min-h-[calc(88vh-4rem)] overflow-hidden">
      <motion.div className="absolute inset-0 motion-grid opacity-70" style={reduceMotion ? undefined : { y: gridY }} />
      <div className="absolute left-1/2 top-16 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-primary/16 blur-3xl" />
      <SiteContainer className="relative grid min-h-[calc(88vh-4rem)] gap-12 pt-16 pb-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <motion.div
          variants={heroGroup}
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? undefined : "show"}
        >
          <motion.div
            className="eyebrow"
            variants={heroItem}
          >
            Lumox Technologies
          </motion.div>
          <motion.h1
            className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl"
            variants={heroItem}
          >
            Digital systems, websites, and AI tools built for real business outcomes.
          </motion.h1>
          <motion.div
            className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-muted md:text-base"
            variants={heroItem}
            aria-live="polite"
          >
            <span>Building</span>
            <span className="relative inline-grid h-7 min-w-[12.5rem] place-items-start overflow-hidden text-accent md:min-w-[14rem]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={activeWord}
                  className="absolute left-0 top-0"
                  initial={reduceMotion ? false : { opacity: 0, y: 12, filter: "blur(6px)" }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -12, filter: "blur(6px)" }}
                  transition={{ duration: 0.32, ease: "easeOut" }}
                >
                  {activeWord}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>
          <motion.p
            className="section-copy mt-6"
            variants={heroItem}
          >
            Lumox Technologies helps businesses design, build, and launch modern websites, web applications,
            automation tools, and AI-powered systems.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            variants={heroItem}
          >
            <Link href="/#contact" className={buttonVariants({ variant: "primary", size: "lg" })}>
              Start a Project
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/#work" className={buttonVariants({ variant: "outline", size: "lg" })}>
              View Work
            </Link>
          </motion.div>
          <motion.div
            className="mt-12 flex items-center gap-3 text-sm text-ink/56"
            variants={heroItem}
          >
            <ArrowDown size={16} aria-hidden="true" />
            <span>Follow the system from signal to launch</span>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative min-h-[24rem]"
          style={reduceMotion ? undefined : { y: visualY, scale: visualScale }}
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.86, ease: "easeOut" }}
        >
          <LumoxCore variant="hero" progress={smooth} />
          <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/10 bg-bg/72 p-4 backdrop-blur md:inset-x-10">
            <p className="text-sm font-medium">Light emerging from structure</p>
            <p className="mt-1 text-xs leading-5 text-ink/62">
              Connected websites, products, automations, and AI workflows.
            </p>
          </div>
        </motion.div>
      </SiteContainer>
    </section>
  );
}
