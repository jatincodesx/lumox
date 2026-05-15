"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { LumoxCore } from "@/components/animations/LumoxCore";
import { SiteContainer } from "@/components/layout/SiteContainer";

const reasons = [
  "Practical engineering",
  "Clear communication",
  "Fast iteration",
  "AI and web capability",
  "Business-focused delivery",
];

const layers = ["Strategy", "Design", "Build", "Improve"];

export function WhyLumox() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 88, damping: 24, mass: 0.34 });
  const layerY = useTransform(smooth, [0, 1], [24, -24]);

  return (
    <section ref={ref} className="relative z-10">
      <SiteContainer className="grid gap-12 py-20 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <div className="eyebrow">Why Lumox</div>
          <h2 className="section-heading mt-3">A focused partner for useful digital work.</h2>
          <p className="section-copy mt-5">
            The work is shaped around the business outcome first, then the interface, data, automation, and engineering choices needed to support it.
          </p>
          <div className="mt-8 hidden lg:block">
            <LumoxCore variant="layers" progress={smooth} compact />
          </div>
        </div>
        <div className="space-y-5">
          <motion.div className="grid gap-3" style={reduceMotion ? undefined : { y: layerY }}>
            {layers.map((layer, index) => (
              <motion.article
                key={layer}
                className="grid min-h-20 grid-cols-[auto_1fr] items-center gap-4 rounded-lg border border-white/10 bg-white/[0.035] p-4 backdrop-blur"
                initial={reduceMotion ? false : { opacity: 0, x: index % 2 ? 24 : -24 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg border border-primary/25 bg-primary/10 text-sm font-semibold text-accent">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{layer}</h3>
                  <p className="mt-1 text-sm leading-6 text-ink/62">
                    {layer === "Strategy" && "Clarify the business problem and the system that should exist around it."}
                    {layer === "Design" && "Shape interfaces, content paths, and technical architecture before build pressure starts."}
                    {layer === "Build" && "Create the website, app, automation, or AI tool with practical engineering choices."}
                    {layer === "Improve" && "Measure, refine, and keep the system useful after launch."}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason}
                className="flex min-h-20 gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-4"
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.42, delay: index * 0.045 }}
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-accent" aria-hidden="true" />
                <p className="text-sm font-medium leading-6 text-ink/84">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
