"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="container-prose relative grid gap-10 md:grid-cols-2 items-center">
        <div>
          <span className="eyebrow">Lumox Technologies Pty Ltd</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Build with confidence.
          </h1>
          <p className="mt-4 text-lg text-ink/80">
            Software & network solutions you can trust. We design and deliver web apps, APIs,
            dashboards, and secure campus networks- backed by sensible SLAs and clear documentation.
          </p>
          <div className="mt-6 flex gap-3">
            <Button asChild><Link href="/contact">Work with us</Link></Button>
            <Button asChild variant="outline"><Link href="/projects">View projects</Link></Button>
          </div>
        </div>

        <div className="relative h-[320px] md:h-[380px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 rounded-2xl border border-muted/60"
            style={{ background:
              "radial-gradient(600px 300px at 80% 20%, rgba(0,188,235,0.15), transparent), radial-gradient(400px 200px at 20% 80%, rgba(11,95,255,0.20), transparent)" }}
          />
          <motion.svg
            width="100%" height="100%" viewBox="0 0 600 400"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.circle cx="120" cy="90" r="40" fill="currentColor" className="text-secondary"
              animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 4 }} />
            <motion.rect x="260" y="140" width="80" height="80" rx="16" fill="currentColor" className="text-primary"
              animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 5 }} />
            <motion.polygon points="480,260 520,320 440,320" fill="currentColor" className="text-accent"
              animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 6 }} />
          </motion.svg>
        </div>
      </div>
    </section>
  );
}
