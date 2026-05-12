"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MotionCardProps = {
  children: ReactNode;
  className?: string;
};

export function MotionCard({ children, className }: MotionCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={cn("card relative overflow-hidden p-6", className)}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={reduceMotion ? undefined : { y: -6, borderColor: "hsl(var(--lumox-primary) / 0.38)" }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
      {children}
    </motion.article>
  );
}
