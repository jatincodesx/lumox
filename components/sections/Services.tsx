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
import { OrbitCards } from "@/components/animations/OrbitCards";
import { SiteContainer } from "@/components/layout/SiteContainer";

type Service = {
  title: string;
  text: string;
  icon: LucideIcon;
  href: string;
};

const services: Service[] = [
  {
    title: "Business Websites",
    text: "Clear, fast public sites that explain your offer, build trust, and make enquiry paths obvious.",
    icon: BriefcaseBusiness,
    href: "/contact",
  },
  {
    title: "Web Applications",
    text: "Portals, dashboards, booking flows, admin tools, and custom systems shaped around how your team works.",
    icon: Code2,
    href: "/contact",
  },
  {
    title: "AI Tools",
    text: "Useful AI for drafting, search, classification, analysis, and internal productivity where it fits the workflow.",
    icon: Bot,
    href: "/contact",
  },
  {
    title: "Workflow Automation",
    text: "Cleaner handoffs, connected tools, fewer manual steps, and better visibility without unnecessary complexity.",
    icon: Workflow,
    href: "/contact",
  },
  {
    title: "Digital Product Development",
    text: "MVPs and product iterations that move from idea to usable software with practical engineering decisions.",
    icon: Layers3,
    href: "/products",
  },
  {
    title: "Technical Consulting",
    text: "Architecture, scoping, code reviews, integration planning, and delivery guidance before bigger investment.",
    icon: MessageSquareText,
    href: "/contact",
  },
];

export function Services() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 25%"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 82, damping: 22, mass: 0.35 });
  const coreY = useTransform(smooth, [0, 0.5, 1], [36, 0, -34]);
  const coreScale = useTransform(smooth, [0, 0.45, 1], [0.9, 1.08, 0.96]);

  return (
    <section ref={ref} id="services" className="section-band relative z-10 overflow-hidden">
      <SiteContainer className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow">Services</div>
          <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">Practical digital systems, built around one core.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ink/70">
            Lumox works across websites, applications, automation, and AI because real business problems rarely fit into one narrow label.
          </p>
        </div>

        <div className="relative mt-12 lg:min-h-[56rem]">
          <motion.div
            className="relative z-10 mx-auto mb-8 flex justify-center lg:absolute lg:inset-0 lg:mb-0 lg:grid lg:place-items-center"
            style={reduceMotion ? undefined : { y: coreY, scale: coreScale }}
          >
            <LumoxCore variant="services" progress={smooth} compact className="lg:h-96 lg:w-96" />
          </motion.div>
          <OrbitCards items={services} progress={smooth} variant="services" />
        </div>
      </SiteContainer>
    </section>
  );
}
