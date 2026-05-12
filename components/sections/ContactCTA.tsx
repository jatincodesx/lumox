"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LumoxCore } from "@/components/animations/LumoxCore";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { buttonVariants } from "@/components/ui/button";

export function ContactCTA() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 86, damping: 22, mass: 0.36 });
  const beamScale = useTransform(smooth, [0, 1], [0.18, 1]);

  return (
    <section ref={ref} id="contact" className="relative z-10 overflow-hidden pb-24">
      <SiteContainer className="py-20 md:py-28">
        <div className="relative overflow-hidden rounded-lg border border-primary/22 bg-primary/10 p-8 md:p-10">
          <motion.div
            className="absolute left-1/2 top-0 h-px w-[80%] origin-center -translate-x-1/2 bg-gradient-to-r from-transparent via-accent to-transparent"
            style={reduceMotion ? undefined : { scaleX: beamScale }}
          />
          <div className="absolute right-0 top-1/2 h-56 w-80 -translate-y-1/2 bg-primary/20 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-center">
            <div>
              <div className="eyebrow">Contact</div>
              <h2 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
                Start your next digital system with Lumox.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/72">
                Share the website, app, automation, or AI workflow you want to improve. Lumox will respond with a practical next step.
              </p>
              <div className="mt-8">
                <Link href="mailto:jatin@jatinvohra.com" className={buttonVariants({ variant: "warm", size: "lg" })}>
                  Start a Project
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <LumoxCore variant="beam" progress={smooth} compact />
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
