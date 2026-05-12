"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { LumoxCore } from "@/components/animations/LumoxCore";
import { MotionCard } from "@/components/animations/MotionCard";
import { SiteContainer } from "@/components/layout/SiteContainer";

const capabilities = [
  {
    title: "Business website systems",
    text: "Positioning, page structure, technical SEO, and conversion paths for service businesses.",
  },
  {
    title: "AI document and product tools",
    text: "Interfaces that apply AI to real inputs, review loops, and repeatable business tasks.",
  },
  {
    title: "Automation dashboards",
    text: "Operational views that connect steps, reduce manual updates, and make status easier to see.",
  },
  {
    title: "Fitness platform development",
    text: "Product thinking and app development patterns from the FitPlus health and nutrition platform.",
  },
];

export function WorkCapabilities() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 86, damping: 24, mass: 0.34 });
  const railX = useTransform(smooth, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} id="work" className="section-band relative z-10">
      <SiteContainer className="py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="eyebrow">Work</div>
            <h2 className="section-heading mt-3">Capability without invented case studies.</h2>
            <p className="section-copy mt-5">
              Where public project details are limited, Lumox keeps the story honest and shows the kinds of systems it can design and build.
            </p>
          </div>
          <motion.div className="hidden lg:block" style={reduceMotion ? undefined : { x: railX }}>
            <LumoxCore variant="modules" progress={smooth} compact />
          </motion.div>
        </div>
        <div className="mt-10 grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item, index) => (
            <MotionCard key={item.title} index={index}>
              <p className="text-sm font-semibold text-accent">0{index + 1}</p>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/68">{item.text}</p>
              <div className="mt-auto pt-8">
                <div className="h-1 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full origin-left rounded-full bg-primary"
                    style={reduceMotion ? undefined : { scaleX: smooth }}
                  />
                </div>
              </div>
            </MotionCard>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
