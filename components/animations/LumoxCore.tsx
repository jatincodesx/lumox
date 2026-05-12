"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type LumoxCoreProps = {
  className?: string;
  compact?: boolean;
};

export function LumoxCore({ className, compact = false }: LumoxCoreProps) {
  const reduceMotion = useReducedMotion();
  const size = compact ? "h-64 w-64" : "h-80 w-80";

  return (
    <div className={cn("relative mx-auto flex items-center justify-center", size, className)} aria-hidden="true">
      <div className="absolute inset-8 rounded-full bg-primary/10 blur-3xl" />
      <motion.div
        className="absolute inset-5 rounded-full border border-primary/20"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-10 rounded-[2rem] border border-accent/20"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute h-32 w-32 rounded-2xl border border-white/15 bg-white/[0.04] shadow-[0_0_70px_hsl(var(--lumox-primary)/0.38)] backdrop-blur-xl"
        animate={reduceMotion ? undefined : { rotate: [0, 10, -8, 0], scale: [1, 1.04, 0.98, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-4 rounded-xl border border-primary/30" />
        <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_36px_hsl(var(--lumox-primary))]" />
      </motion.div>
      {[
        "left-5 top-1/2",
        "right-6 top-20",
        "bottom-12 left-20",
        "bottom-20 right-16",
      ].map((position, index) => (
        <motion.span
          key={position}
          className={cn("absolute h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--lumox-primary))]", position)}
          animate={reduceMotion ? undefined : { opacity: [0.35, 1, 0.35], scale: [0.9, 1.35, 0.9] }}
          transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.35 }}
        />
      ))}
    </div>
  );
}
