"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { LumoxCore } from "@/components/animations/LumoxCore";
import { OrbitCards } from "@/components/animations/OrbitCards";
import { HeroTypewriter } from "@/components/animations/HeroTypewriter";
import { TypingText } from "@/components/animations/TypingText";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { buttonVariants } from "@/components/ui/button";

const typingWords = [
  "Websites",
  "Web Applications",
  "AI Tools",
  "Automation Systems",
  "Digital Products",
];

const capabilityChips = [
  { title: "Websites", href: "/services" },
  { title: "Web Apps", href: "/services" },
  { title: "AI Tools", href: "/services" },
  { title: "Automation", href: "/services" },
  { title: "Products", href: "/products" },
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
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.35 });
  const visualY = useTransform(smooth, [0, 1], [0, 92]);
  const visualScale = useTransform(smooth, [0, 1], [1, 0.88]);
  const textY = useTransform(smooth, [0, 1], [0, -34]);
  const gridY = useTransform(smooth, [0, 1], [0, -110]);

  return (
    <section ref={ref} className="relative z-10 min-h-[calc(100svh-4rem)] overflow-hidden">
      <motion.div className="absolute inset-0 motion-grid opacity-70" style={reduceMotion ? undefined : { y: gridY }} />
      <div className="absolute left-1/2 top-10 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-primary/18 blur-3xl md:h-[28rem] md:w-[28rem]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <SiteContainer className="relative grid min-h-[calc(100svh-4rem)] gap-6 pt-10 pb-10 md:gap-8 md:pt-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          className="relative z-10"
          style={reduceMotion ? undefined : { y: textY }}
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
            <HeroTypewriter />
          </motion.h1>
          <motion.div
            className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-2 text-sm font-medium leading-none text-muted md:text-base"
            variants={heroItem}
            aria-live="polite"
          >
            <span className="leading-none">Building</span>
            <TypingText words={typingWords} />
          </motion.div>
          <motion.p
            className="mt-5 max-w-2xl text-base leading-7 text-ink/70 md:mt-6 md:text-lg md:leading-8"
            variants={heroItem}
          >
            Lumox Technologies helps businesses design, build, and launch modern websites, web applications,
            automation tools, and AI-powered systems.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            variants={heroItem}
          >
            <Link href="/contact" className={buttonVariants({ variant: "primary", size: "lg" })}>
              Start a Project
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/work" className={buttonVariants({ variant: "outline", size: "lg" })}>
              View Work
            </Link>
          </motion.div>
          <motion.div
            className="mt-10 hidden items-center gap-3 text-sm text-ink/56 sm:flex"
            variants={heroItem}
          >
            <ArrowDown size={16} aria-hidden="true" />
            <span>Follow the system from signal to launch</span>
          </motion.div>
        </motion.div>
        <motion.div
          className="pointer-events-none absolute inset-x-0 bottom-[-12rem] z-0 min-h-[18rem] opacity-60 md:pointer-events-auto md:relative md:bottom-auto md:z-auto md:min-h-[27rem] md:opacity-100 lg:min-h-[31rem]"
          style={reduceMotion ? undefined : { y: visualY, scale: visualScale }}
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.86, ease: "easeOut" }}
        >
          <LumoxCore variant="hero" progress={smooth} className="z-10" />
          <div className="hidden lg:block">
            <OrbitCards items={capabilityChips} progress={smooth} variant="chips" />
          </div>
          <div className="absolute inset-x-4 bottom-0 hidden rounded-lg border border-white/10 bg-bg/72 p-4 backdrop-blur md:inset-x-12 md:block">
            <p className="text-sm font-medium">Connected delivery system</p>
            <p className="mt-1 text-xs leading-5 text-ink/62">
              Connected websites, products, automations, and AI workflows.
            </p>
          </div>
        </motion.div>
      </SiteContainer>
    </section>
  );
}
