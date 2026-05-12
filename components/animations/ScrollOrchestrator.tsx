"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

export function ScrollOrchestrator() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.35 });
  const y = useTransform(progress, [0, 1], ["0%", "-18%"]);
  const glowX = useTransform(progress, [0, 0.35, 0.68, 1], ["8%", "72%", "28%", "66%"]);
  const glowY = useTransform(progress, [0, 0.35, 0.68, 1], ["12%", "30%", "66%", "86%"]);
  const rotate = useTransform(progress, [0, 1], [0, 18]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-primary via-accent to-white"
        style={reduceMotion ? undefined : { scaleX: progress }}
      />
      <motion.div className="absolute inset-0 motion-grid opacity-45" style={reduceMotion ? undefined : { y }} />
      <motion.div
        className="absolute h-72 w-72 rounded-full bg-primary/20 blur-3xl md:h-[30rem] md:w-[30rem]"
        style={reduceMotion ? undefined : { left: glowX, top: glowY, rotate }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,hsl(var(--lumox-bg))_76%)]" />
    </div>
  );
}
