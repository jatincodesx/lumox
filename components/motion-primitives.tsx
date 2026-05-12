"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps, Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

export function AnimatedSection({
  children,
  className,
  ...props
}: HTMLMotionProps<"section"> & { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={fadeUp}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={stagger}
    >
      {children}
    </motion.div>
  );
}

export function MotionCard({
  children,
  className,
  ...props
}: HTMLMotionProps<"article"> & { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={cn("card p-6", className)}
      variants={fadeUp}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { y: -6, scale: 1.01 }}
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
      {...props}
    >
      {children}
    </motion.article>
  );
}

export function MotionButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      className={cn("inline-flex", className)}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.span>
  );
}

export function HeroSystemVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg border border-white/10 bg-ink p-4 text-bg shadow-premium"
      initial={reduceMotion ? false : { opacity: 0, y: 24, rotateX: 7 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--lumox-primary)/0.22),transparent_34%,hsl(var(--lumox-warm)/0.16))]" />
      <div className="relative rounded-lg border border-white/10 bg-white/[0.04] p-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-xs uppercase text-bg/60">Lumox delivery system</p>
            <p className="mt-1 text-lg font-semibold">Plan, build, launch</p>
          </div>
          <div className="grid grid-cols-3 gap-1" aria-hidden="true">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <motion.span
                key={item}
                className="h-2 w-2 rounded-sm bg-primary"
                animate={
                  reduceMotion
                    ? undefined
                    : { opacity: [0.35, 1, 0.35], scale: [1, 1.2, 1] }
                }
                transition={{
                  duration: 2.4,
                  delay: item * 0.08,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-3">
          {[
            ["Website", "Message, structure, SEO"],
            ["Automation", "Workflow, handoff, dashboard"],
            ["AI tool", "Search, draft, classify"],
          ].map(([title, text], index) => (
            <motion.div
              key={title}
              className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg border border-white/10 bg-white/[0.06] p-3"
              animate={reduceMotion ? undefined : { x: [0, index === 1 ? 5 : -3, 0] }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="h-9 w-1 rounded-full bg-warm" aria-hidden="true" />
              <span>
                <span className="block text-sm font-semibold">{title}</span>
                <span className="block text-xs text-bg/60">{text}</span>
              </span>
              <span className="rounded-full border border-white/15 px-2 py-1 text-[11px] text-bg/70">
                Ready
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
