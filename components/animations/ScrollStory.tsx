"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const stages = [
  {
    title: "Discover",
    text: "We map your business problem and the systems around it.",
  },
  {
    title: "Design",
    text: "We design the interface, user journey, and technical architecture.",
  },
  {
    title: "Build",
    text: "We build websites, apps, automations, and AI workflows with practical engineering.",
  },
  {
    title: "Launch",
    text: "We deploy, refine, and help the system improve over time.",
  },
];

export function ScrollStory() {
  const targetRef = useRef<HTMLElement>(null);
  const [activeStage, setActiveStage] = useState(0);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.35 });
  const rotate = useTransform(smoothProgress, [0, 1], [0, 175]);
  const scale = useTransform(smoothProgress, [0, 0.36, 0.68, 1], [0.86, 1.08, 1.16, 0.92]);
  const beamScale = useTransform(smoothProgress, [0.68, 1], [0.15, 1]);
  const beamOpacity = useTransform(smoothProgress, [0.62, 0.82, 1], [0, 0.55, 0.9]);
  const gridY = useTransform(smoothProgress, [0, 1], [30, -70]);
  const cardY = useTransform(smoothProgress, [0, 1], [24, -24]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setActiveStage(Math.min(stages.length - 1, Math.floor(latest * stages.length)));
  });

  if (reduceMotion) {
    return (
      <section id="process" className="section">
        <div className="max-w-3xl">
          <div className="eyebrow">Scroll story</div>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">From scattered tools to intelligent systems</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {stages.map((stage, index) => (
            <article key={stage.title} className="card p-5">
              <p className="text-sm font-semibold text-primary">0{index + 1}</p>
              <h3 className="mt-3 text-xl font-semibold">{stage.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/68">{stage.text}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={targetRef} id="process" className="relative min-h-[420vh]">
      <div className="sticky top-16 flex min-h-[calc(100vh-4rem)] items-center overflow-hidden border-y border-white/10 bg-soft/30">
        <motion.div
          className="absolute inset-0 opacity-60"
          style={{ y: gridY }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--lumox-primary)/0.16),transparent_34rem)]" />
        </motion.div>

        <div className="container-prose relative z-10 grid w-full gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <div>
              <div className="eyebrow">Scroll story</div>
              <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
                From scattered tools to intelligent systems
              </h2>
            </div>
            <motion.div className="hidden h-1 overflow-hidden rounded-full bg-white/10 lg:block">
              <motion.div className="h-full origin-left bg-primary" style={{ scaleX: smoothProgress }} />
            </motion.div>
          </div>

          <div className="relative mx-auto flex aspect-square w-full max-w-[34rem] items-center justify-center">
            <motion.div
              className="absolute h-28 w-[28rem] origin-left rounded-full bg-primary/35 blur-3xl"
              style={{ scaleX: beamScale, opacity: beamOpacity }}
            />
            <motion.div
              className="relative h-64 w-64 rounded-[2.25rem] border border-primary/25 bg-white/[0.045] shadow-[0_0_90px_hsl(var(--lumox-primary)/0.34)] backdrop-blur-xl"
              style={{ rotate, scale }}
            >
              <div className="absolute inset-6 rounded-[1.6rem] border border-white/15" />
              <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_46px_hsl(var(--lumox-primary))]" />
              {[
                "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
                "right-0 top-1/2 -translate-y-1/2 translate-x-1/2",
                "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
                "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
              ].map((position, index) => (
                <motion.span
                  key={position}
                  className={`absolute h-4 w-4 rounded-full bg-accent shadow-[0_0_28px_hsl(var(--lumox-accent))] ${position}`}
                  animate={{ opacity: activeStage >= index ? 1 : 0.32, scale: activeStage >= index ? 1.28 : 0.85 }}
                  transition={{ duration: 0.35 }}
                />
              ))}
            </motion.div>
          </div>

          <motion.div className="grid gap-4" style={{ y: cardY }}>
            {stages.map((stage, index) => (
              <motion.article
                key={stage.title}
                className={`rounded-lg border p-5 backdrop-blur transition-colors ${
                  activeStage === index
                    ? "border-primary/50 bg-primary/10"
                    : "border-white/10 bg-white/[0.035]"
                }`}
                animate={{ opacity: activeStage === index ? 1 : 0.45, x: activeStage === index ? 0 : 18 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-sm font-semibold text-primary">0{index + 1}</p>
                <h3 className="mt-2 text-xl font-semibold">{stage.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/68">{stage.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
