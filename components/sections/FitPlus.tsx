"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { Activity, ArrowRight, Dumbbell, LineChart, Utensils } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { LumoxCore } from "@/components/animations/LumoxCore";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { buttonVariants } from "@/components/ui/button";

const FITPLUS_URL = "#";

const chips = ["Workout planning", "Meal tracking", "Progress insights", "Consistency tools"];
const productStats: Array<[LucideIcon, string, string]> = [
  [Dumbbell, "Workouts", "4 sessions planned"],
  [Utensils, "Meals", "28 meals organised"],
  [LineChart, "Progress", "12 week trend"],
  [Activity, "Consistency", "Next check-in ready"],
];

export function FitPlus() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 84, damping: 24, mass: 0.34 });
  const mockupY = useTransform(smooth, [0, 1], [42, -36]);
  const mockupRotate = useTransform(smooth, [0, 1], [-1.5, 1.5]);
  const chipX = useTransform(smooth, [0, 1], [-18, 18]);

  return (
    <section ref={ref} id="fitplus" className="relative z-10">
      <SiteContainer className="grid gap-12 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          className="relative order-2 min-h-[34rem] lg:order-1"
          style={reduceMotion ? undefined : { y: mockupY, rotate: mockupRotate }}
        >
          <div className="absolute inset-x-10 top-4 h-40 rounded-full bg-accent/18 blur-3xl" />
          <LumoxCore variant="product" progress={smooth} className="absolute -top-16 left-1/2 hidden -translate-x-1/2 opacity-75 lg:flex" compact />
          <div className="relative mx-auto max-w-xl rounded-lg border border-white/10 bg-white/[0.04] p-4 shadow-[0_0_90px_rgba(0,0,0,0.32)] backdrop-blur">
            <div className="rounded-lg border border-white/10 bg-bg/86 p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm text-ink/56">FitPlus</p>
                  <h3 className="text-2xl font-semibold">Weekly health system</h3>
                </div>
                <Activity className="h-7 w-7 text-accent" aria-hidden="true" />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {productStats.map(([Icon, title, text], index) => (
                  <motion.div
                    key={title}
                    className="min-h-32 rounded-lg border border-white/10 bg-white/[0.04] p-4"
                    initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.46, delay: index * 0.06 }}
                  >
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    <p className="mt-3 font-semibold">{title}</p>
                    <p className="mt-1 text-sm text-ink/58">{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-8 hidden h-full md:block">
            {chips.map((chip, index) => (
              <motion.span
                key={chip}
                className={[
                  "absolute rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-sm text-accent backdrop-blur",
                  index === 0 && "left-0 top-20",
                  index === 1 && "right-0 top-36",
                  index === 2 && "left-8 bottom-28",
                  index === 3 && "right-12 bottom-16",
                ].filter(Boolean).join(" ")}
                style={reduceMotion ? undefined : { x: chipX }}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
              >
                {chip}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="order-1 lg:order-2">
          <div className="eyebrow">FitPlus product</div>
          <h2 className="section-heading mt-3">A real product focus under the Lumox umbrella.</h2>
          <p className="section-copy mt-5">
            FitPlus is a fitness and nutrition platform designed to help users plan workouts, manage meals,
            track progress, and stay consistent with their health goals.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 md:hidden">
            {chips.map((chip) => (
              <span key={chip} className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-accent">
                {chip}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={FITPLUS_URL} className={buttonVariants({ variant: "primary", size: "lg" })}>
              View FitPlus
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/#contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
              Talk to Lumox
            </Link>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
