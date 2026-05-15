"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { LumoxCore } from "@/components/animations/LumoxCore";
import { SiteContainer } from "@/components/layout/SiteContainer";

const capabilities = [
  {
    title: "Business website systems",
    text: "Positioning, page structure, technical SEO, and conversion paths for service businesses.",
    href: "/#contact",
  },
  {
    title: "AI document and product tools",
    text: "Interfaces that apply AI to real inputs, review loops, and repeatable business tasks.",
    href: "/#contact",
  },
  {
    title: "Automation dashboards",
    text: "Operational views that connect steps, reduce manual updates, and make status easier to see.",
    href: "/#contact",
  },
  {
    title: "Fitness platform development",
    text: "Product thinking and app development patterns from the FitPlus health and nutrition platform.",
    href: "/#fitplus",
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
            <Link
              key={item.title}
              href={item.href}
              className="group block rounded-lg border border-white/10 bg-white/[0.035] p-6 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:border-primary/45 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <motion.article
                className="flex h-full flex-col"
                initial={reduceMotion ? false : { opacity: 0, y: 34, scale: 0.98 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.045 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-semibold text-accent">0{index + 1}</p>
                  <ArrowUpRight className="h-4 w-4 text-ink/42 transition group-hover:text-accent" aria-hidden="true" />
                </div>
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
              </motion.article>
            </Link>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
