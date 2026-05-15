"use client";

import Link from "next/link";
import type { MotionValue } from "framer-motion";
import { motion, useReducedMotion, useTransform } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type OrbitCardItem = {
  title: string;
  text?: string;
  href: string;
  ariaLabel?: string;
  icon?: LucideIcon;
  external?: boolean;
};

type OrbitCardsProps = {
  items: OrbitCardItem[];
  progress: MotionValue<number>;
  variant?: "chips" | "services";
  className?: string;
};

const servicePositions = [
  "lg:left-[3%] lg:top-[5%]",
  "lg:right-[3%] lg:top-[8%]",
  "lg:left-[5%] lg:top-[38%]",
  "lg:right-[5%] lg:top-[40%]",
  "lg:left-[3%] lg:bottom-[3%]",
  "lg:right-[3%] lg:bottom-[4%]",
];

const chipPositions = [
  "lg:left-[3%] lg:top-[17%]",
  "lg:right-[2%] lg:top-[14%]",
  "lg:left-[9%] lg:bottom-[18%]",
  "lg:right-[7%] lg:bottom-[20%]",
  "lg:left-1/2 lg:top-[2%] lg:-translate-x-1/2",
];

function OrbitCard({
  item,
  index,
  progress,
  variant,
}: {
  item: OrbitCardItem;
  index: number;
  progress: MotionValue<number>;
  variant: "chips" | "services";
}) {
  const reduceMotion = useReducedMotion();
  const Icon = item.icon;
  const direction = index % 2 === 0 ? 1 : -1;
  const distance = variant === "chips" ? 18 : 18;
  const x = useTransform(progress, [0, 0.5, 1], [direction * -distance, 0, direction * distance]);
  const y = useTransform(progress, [0, 0.5, 1], [direction * 16, 0, direction * -18]);
  const rotate = useTransform(progress, [0, 1], [direction * -4, direction * 4]);
  const opacity = useTransform(progress, [0, 0.12, 0.86, 1], [0.58, 1, 1, 0.72]);
  const scale = useTransform(progress, [0, 0.45, 1], [0.96, 1.02, 0.98]);
  const positions = variant === "chips" ? chipPositions : servicePositions;
  const commonProps = item.external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <motion.div
      className={cn(
        "relative lg:absolute",
        positions[index % positions.length],
        variant === "services" ? "lg:w-[17.5rem]" : "lg:w-auto",
      )}
      style={reduceMotion ? undefined : { x, y, rotate, opacity, scale }}
      initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.96 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.52, ease: "easeOut", delay: index * 0.055 }}
    >
      <Link
        href={item.href}
        aria-label={item.ariaLabel}
        className={cn(
          "group block rounded-lg border border-white/10 bg-bg/78 shadow-[0_18px_60px_rgba(0,0,0,0.26)] backdrop-blur-xl transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
          "hover:-translate-y-1 hover:border-primary/45 hover:bg-primary/10",
          variant === "chips" && "px-3 py-2 text-sm font-medium text-ink/82",
          variant === "services" && "min-h-44 p-4",
        )}
        {...commonProps}
      >
        {variant === "chips" ? (
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_hsl(var(--lumox-accent))]" />
            {item.title}
          </span>
        ) : (
          <>
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-accent">
                {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : null}
              </div>
              <ArrowUpRight className="h-4 w-4 text-ink/42 transition group-hover:text-accent" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
            {item.text ? <p className="mt-2 text-sm leading-6 text-ink/68">{item.text}</p> : null}
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary/85">
              Open path
            </p>
          </>
        )}
      </Link>
    </motion.div>
  );
}

export function OrbitCards({ items, progress, variant = "services", className }: OrbitCardsProps) {
  return (
    <div
      className={cn(
        "grid gap-4 lg:block",
        variant === "services" && "lg:absolute lg:inset-0",
        variant === "chips" && "lg:absolute lg:inset-0",
        className,
      )}
    >
      {items.map((item, index) => (
        <OrbitCard key={item.title} item={item} index={index} progress={progress} variant={variant} />
      ))}
    </div>
  );
}
