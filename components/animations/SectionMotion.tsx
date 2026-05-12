"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionMotionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  band?: boolean;
};

export function SectionMotion({ children, className, id, band = false }: SectionMotionProps) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 15%"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.32 });
  const y = useTransform(smooth, [0, 0.5, 1], [36, 0, -18]);
  const opacity = useTransform(smooth, [0, 0.18, 0.82, 1], [0.55, 1, 1, 0.82]);

  return (
    <motion.section
      ref={ref}
      id={id}
      className={cn(band && "section-band", className)}
      style={reduceMotion ? undefined : { opacity, y }}
    >
      {children}
    </motion.section>
  );
}
