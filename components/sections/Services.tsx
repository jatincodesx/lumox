"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  Bot,
  BriefcaseBusiness,
  Code2,
  Layers3,
  MessageSquareText,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { LumoxCore } from "@/components/animations/LumoxCore";
import { MotionCard } from "@/components/animations/MotionCard";
import { SiteContainer } from "@/components/layout/SiteContainer";

type Service = {
  title: string;
  text: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "Business websites",
    text: "Clear, fast public sites that explain your offer, build trust, and make enquiry paths obvious.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Web applications",
    text: "Portals, dashboards, booking flows, admin tools, and custom systems shaped around how your team works.",
    icon: Code2,
  },
  {
    title: "AI-powered tools",
    text: "Useful AI for drafting, search, classification, analysis, and internal productivity where it fits the workflow.",
    icon: Bot,
  },
  {
    title: "Workflow automation",
    text: "Cleaner handoffs, connected tools, fewer manual steps, and better visibility without unnecessary complexity.",
    icon: Workflow,
  },
  {
    title: "Digital product development",
    text: "MVPs and product iterations that move from idea to usable software with practical engineering decisions.",
    icon: Layers3,
  },
  {
    title: "Technical consulting",
    text: "Architecture, scoping, code reviews, integration planning, and delivery guidance before bigger investment.",
    icon: MessageSquareText,
  },
];

export function Services() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 25%"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 82, damping: 22, mass: 0.35 });
  const coreY = useTransform(smooth, [0, 1], [40, -42]);

  return (
    <section ref={ref} id="services" className="relative z-10">
      <SiteContainer className="grid gap-12 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <div className="eyebrow">Services</div>
          <h2 className="section-heading mt-3">Practical digital systems, built with focus.</h2>
          <p className="section-copy mt-5">
            Lumox works across websites, applications, automation, and AI because real business problems rarely fit into one narrow label.
          </p>
          <motion.div className="mt-8 hidden lg:block" style={reduceMotion ? undefined : { y: coreY }}>
            <LumoxCore variant="services" progress={smooth} compact />
          </motion.div>
        </div>

        <div className="relative">
          <motion.div className="mb-8 lg:hidden" style={reduceMotion ? undefined : { y: coreY }}>
            <LumoxCore variant="services" progress={smooth} compact />
          </motion.div>
          <div className="grid auto-rows-fr gap-5 md:grid-cols-2">
            {services.map(({ title, text, icon: Icon }, index) => (
              <MotionCard key={title} index={index} className={index % 2 ? "md:mt-8" : ""}>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/68">{text}</p>
                <div className="mt-auto pt-6 text-xs font-semibold text-primary/80">Connected to the Lumox Core</div>
              </MotionCard>
            ))}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
