"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { LumoxCore } from "@/components/animations/LumoxCore";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { buttonVariants } from "@/components/ui/button";

const heroLines = [
  "Digital systems",
  "websites",
  "and AI tools built for real business outcomes.",
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.35 });
  const visualY = useTransform(smooth, [0, 1], [0, 120]);
  const visualScale = useTransform(smooth, [0, 1], [1, 0.82]);
  const gridY = useTransform(smooth, [0, 1], [0, -90]);

  return (
    <section ref={ref} className="relative z-10 min-h-[calc(88vh-4rem)] overflow-hidden">
      <motion.div className="absolute inset-0 motion-grid opacity-70" style={reduceMotion ? undefined : { y: gridY }} />
      <div className="absolute left-1/2 top-16 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-primary/16 blur-3xl" />
      <SiteContainer className="relative grid min-h-[calc(88vh-4rem)] gap-12 pt-16 pb-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <motion.div
            className="eyebrow"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Lumox Technologies
          </motion.div>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            {heroLines.map((line, index) => (
              <motion.span
                key={line}
                className="block"
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.72, ease: "easeOut", delay: 0.08 + index * 0.1 }}
              >
                {line}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="section-copy mt-6"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.36 }}
          >
            Lumox Technologies helps businesses design, build, and launch modern websites, web applications,
            automation tools, and AI-powered systems that are reliable, scalable, and easy to use.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.5 }}
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
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.72 }}
          >
            <ArrowDown size={16} aria-hidden="true" />
            <span>Follow the system from signal to launch</span>
          </motion.div>
        </div>
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
