"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MotionCardProps = {
  children: ReactNode;
  className?: string;
  index?: number;
};

export function MotionCard({ children, className, index = 0 }: MotionCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={cn("card group relative flex h-full flex-col overflow-hidden p-6", className)}
      initial={reduceMotion ? false : { opacity: 0, y: 34, scale: 0.98 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={reduceMotion ? undefined : { y: -6, borderColor: "hsl(var(--lumox-secondary) / 0.48)" }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.045 }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
      <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-primary/0 blur-3xl transition-colors duration-300 group-hover:bg-primary/18" />
      {children}
    </motion.article>
  );
}
