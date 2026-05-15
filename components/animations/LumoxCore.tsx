"use client";

import type { MotionValue } from "framer-motion";
import { motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { BrandMark } from "@/components/brand/BrandMark";
import { cn } from "@/lib/utils";

type CoreVariant = "hero" | "services" | "process" | "product" | "modules" | "layers" | "beam";

type LumoxCoreProps = {
  className?: string;
  compact?: boolean;
  variant?: CoreVariant;
  progress?: MotionValue<number>;
  labels?: string[];
};

const variantNodes: Record<CoreVariant, string[]> = {
  hero: ["Web", "Apps", "AI", "Ops"],
  services: ["Sites", "Apps", "AI", "Automation", "Products", "Consulting"],
  process: ["Discover", "Design", "Build", "Launch"],
  product: ["Plan", "Track", "Insight", "Habit"],
  modules: ["SEO", "Dashboards", "Tools", "FitPlus"],
  layers: ["Strategy", "Design", "Build", "Improve"],
  beam: ["Brief", "System", "Launch"],
};

const nodePositions = [
  "left-[7%] top-[42%]",
  "right-[8%] top-[24%]",
  "bottom-[12%] left-[24%]",
  "bottom-[22%] right-[16%]",
  "left-[18%] top-[12%]",
  "right-[22%] bottom-[7%]",
];

export function LumoxCore({
  className,
  compact = false,
  variant = "hero",
  progress,
  labels,
}: LumoxCoreProps) {
  const reduceMotion = useReducedMotion();
  const fallbackProgress = useMotionValue(0);
  const source = progress ?? fallbackProgress;
  const rotateY = useTransform(source, [0, 1], variant === "beam" ? [-18, 18] : [-12, 344]);
  const rotateZ = useTransform(source, [0, 0.5, 1], variant === "beam" ? [-5, 0, 5] : [-10, 8, -6]);
  const ringRotate = useTransform(source, [0, 1], [0, -220]);
  const scale = useTransform(source, [0, 0.5, 1], compact ? [0.92, 1.08, 0.96] : [0.88, 1.12, 0.98]);
  const y = useTransform(source, [0, 1], [22, -22]);
  const beamScale = useTransform(source, [0, 1], [0.2, 1.08]);
  const beamOpacity = useTransform(source, [0, 0.45, 1], [0.18, 0.62, 0.95]);
  const activeLabels = labels ?? variantNodes[variant];
  const size = compact ? "h-72 w-72" : "h-[23rem] w-full max-w-[36rem] md:h-[30rem]";

  return (
    <div className={cn("relative mx-auto flex items-center justify-center [perspective:1000px]", size, className)} aria-hidden="true">
      <motion.div
        className="absolute h-[58%] w-[88%] rounded-full bg-primary/24 blur-3xl"
        style={reduceMotion ? undefined : { scaleX: beamScale, opacity: beamOpacity }}
      />
      <motion.div
        className="absolute h-[88%] w-[88%] rounded-full border border-primary/20"
        style={reduceMotion ? undefined : { rotate: ringRotate }}
      />
      <motion.div
        className="absolute h-[70%] w-[70%] rounded-[2rem] border border-accent/22"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute h-[42%] w-[92%] rounded-full border border-white/10"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className={cn(
          "relative grid transform-gpu place-items-center rounded-[2rem] border border-white/16 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.025))] shadow-[0_0_110px_hsl(var(--lumox-primary)/0.42)] backdrop-blur-xl",
          compact ? "h-32 w-32" : "h-44 w-44 md:h-52 md:w-52",
          variant === "product" && "rounded-xl",
          variant === "beam" && "shadow-[0_0_120px_hsl(var(--lumox-accent)/0.4)]",
        )}
        style={reduceMotion ? undefined : { rotateY, rotateZ, scale, y }}
      >
        <div className="absolute inset-4 rounded-[1.35rem] border border-primary/34" />
        <div className="absolute inset-7 rounded-[1rem] bg-primary/12 blur-xl" />
        <BrandMark className={compact ? "relative h-12 w-12" : "relative h-16 w-16"} />
        <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_34px_hsl(var(--lumox-accent))]" />
      </motion.div>

      {activeLabels.map((label, index) => {
        const position = nodePositions[index % nodePositions.length];
        const nodeDelay = index * 0.1;

        return (
          <motion.div
            key={`${label}-${index}`}
            className={cn(
              "absolute rounded-lg border border-white/12 bg-bg/82 px-3 py-2 text-xs font-medium text-ink/82 shadow-[0_16px_40px_rgba(0,0,0,0.28)] backdrop-blur",
              position,
            )}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.86 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.42, delay: nodeDelay }}
          >
            {label}
          </motion.div>
        );
      })}

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 420" fill="none">
        <motion.path
          d="M84 210 C142 144 238 132 326 101"
          stroke="url(#lumoxLineA)"
          strokeWidth="1.5"
          strokeDasharray="8 12"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0.2 }}
          whileInView={reduceMotion ? undefined : { pathLength: 1, opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
        />
        <motion.path
          d="M108 316 C170 250 270 252 334 316"
          stroke="url(#lumoxLineB)"
          strokeWidth="1.5"
          strokeDasharray="6 10"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0.2 }}
          whileInView={reduceMotion ? undefined : { pathLength: 1, opacity: 0.75 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1 }}
        />
        <defs>
          <linearGradient id="lumoxLineA" x1="84" x2="326" y1="210" y2="101">
            <stop stopColor="hsl(var(--lumox-primary))" stopOpacity="0" />
            <stop offset="0.55" stopColor="hsl(var(--lumox-accent))" />
            <stop offset="1" stopColor="white" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="lumoxLineB" x1="108" x2="334" y1="316" y2="316">
            <stop stopColor="white" stopOpacity="0.2" />
            <stop offset="1" stopColor="hsl(var(--lumox-primary))" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
