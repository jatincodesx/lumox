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
import { LumoxCore } from "@/components/animations/LumoxCore";
import { SiteContainer } from "@/components/layout/SiteContainer";

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
  const rotate = useTransform(smoothProgress, [0, 1], [-18, 328]);
  const scale = useTransform(smoothProgress, [0, 0.3, 0.68, 1], [0.84, 1.08, 1.18, 0.94]);
  const beamScale = useTransform(smoothProgress, [0.48, 1], [0.12, 1.12]);
  const beamOpacity = useTransform(smoothProgress, [0.4, 0.72, 1], [0, 0.58, 0.92]);
  const gridY = useTransform(smoothProgress, [0, 1], [36, -96]);
  const cardY = useTransform(smoothProgress, [0, 1], [30, -30]);
  const nodeSpread = useTransform(smoothProgress, [0, 1], [0.65, 1.12]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setActiveStage(Math.min(stages.length - 1, Math.floor(latest * stages.length)));
  });

  if (reduceMotion) {
    return (
      <section id="process" className="section relative z-10">
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
    <section ref={targetRef} id="process" className="relative z-10 lg:min-h-[320vh]">
      <div className="section lg:hidden">
        <div className="max-w-3xl">
          <div className="eyebrow">Process</div>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">From scattered tools to intelligent systems</h2>
          <p className="mt-4 text-lg leading-8 text-ink/70">
            Lumox turns scattered ideas, tools, and workflows into a coherent digital system.
          </p>
        </div>
        <div className="mt-8">
          <LumoxCore variant="process" progress={smoothProgress} compact />
        </div>
        <div className="mt-8 grid gap-4">
          {stages.map((stage, index) => (
            <motion.article
              key={stage.title}
              className="rounded-lg border border-white/10 bg-white/[0.035] p-5"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.42, delay: index * 0.06 }}
            >
              <p className="text-sm font-semibold text-primary">0{index + 1}</p>
              <h3 className="mt-3 text-xl font-semibold">{stage.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/68">{stage.text}</p>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="sticky top-16 hidden min-h-[calc(100vh-4rem)] items-center overflow-hidden border-y border-white/10 bg-soft/35 lg:flex">
        <motion.div
          className="absolute inset-0 opacity-60"
          style={{ y: gridY }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--lumox-primary)/0.16),transparent_34rem)]" />
        </motion.div>

        <SiteContainer className="relative z-10 grid w-full gap-10 py-16 lg:grid-cols-[0.82fr_1.18fr_0.84fr] lg:items-center">
          <div className="space-y-6">
            <div>
              <div className="eyebrow">Process</div>
              <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
                From scattered tools to intelligent systems
              </h2>
              <p className="mt-4 text-base leading-7 text-ink/66">
                The core pulls scattered inputs into a launch-ready system as each stage takes over.
              </p>
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
            <motion.div className="absolute inset-8 rounded-full border border-white/10" style={{ scale: nodeSpread }} />
            {stages.map((stage, index) => (
              <motion.div
                key={`node-${stage.title}`}
                className={[
                  "absolute grid h-12 w-12 place-items-center rounded-lg border text-sm font-semibold backdrop-blur",
                  activeStage >= index ? "border-primary/45 bg-primary/15 text-accent" : "border-white/10 bg-white/[0.035] text-ink/54",
                  index === 0 && "left-[8%] top-1/2 -translate-y-1/2",
                  index === 1 && "left-1/2 top-[8%] -translate-x-1/2",
                  index === 2 && "right-[8%] top-1/2 -translate-y-1/2",
                  index === 3 && "bottom-[8%] left-1/2 -translate-x-1/2",
                ].filter(Boolean).join(" ")}
                animate={{ scale: activeStage === index ? 1.16 : 1, opacity: activeStage >= index ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}
              >
                0{index + 1}
              </motion.div>
            ))}
            <motion.div style={{ rotate, scale }}>
              <LumoxCore variant="process" progress={smoothProgress} compact />
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
        </SiteContainer>
      </div>
    </section>
  );
}
