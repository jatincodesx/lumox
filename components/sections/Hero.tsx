"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { LumoxCore } from "@/components/animations/LumoxCore";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const visualY = useTransform(scrollYProgress, [0, 0.22], [0, 90]);
  const visualScale = useTransform(scrollYProgress, [0, 0.22], [1, 0.86]);

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute left-1/2 top-16 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
      <div className="section grid min-h-[calc(100vh-4rem)] gap-12 pt-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <div className="eyebrow">Lumox Technologies</div>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Digital systems, websites, and AI tools built for real business outcomes.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72">
            Lumox Technologies helps businesses design, build, and launch modern websites, web applications,
            automation tools, and AI-powered systems that are reliable, scalable, and easy to use.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/#contact" className={buttonVariants({ variant: "primary", size: "lg" })}>
              Start a Project
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/#work" className={buttonVariants({ variant: "outline", size: "lg" })}>
              View Work
            </Link>
          </div>
          <div className="mt-12 flex items-center gap-3 text-sm text-ink/52">
            <ArrowDown size={16} aria-hidden="true" />
            <span>Follow the system from signal to launch</span>
          </div>
        </div>
        <motion.div
          className="relative"
          style={reduceMotion ? undefined : { y: visualY, scale: visualScale }}
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <LumoxCore />
          <div className="absolute inset-x-6 bottom-6 rounded-lg border border-white/10 bg-bg/70 p-4 backdrop-blur">
            <p className="text-sm font-medium">Light emerging from structure</p>
            <p className="mt-1 text-xs leading-5 text-ink/58">Connected websites, products, automations, and AI workflows.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
