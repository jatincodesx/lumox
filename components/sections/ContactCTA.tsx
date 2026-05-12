import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section id="contact" className="section pb-24">
      <div className="relative overflow-hidden rounded-lg border border-primary/20 bg-primary/10 p-8 md:p-10">
        <div className="absolute right-0 top-1/2 h-48 w-72 -translate-y-1/2 bg-primary/20 blur-3xl" />
        <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="eyebrow">Contact</div>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              Start your next digital system with Lumox.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/70">
              Share the website, app, automation, or AI workflow you want to improve. Lumox will respond with a practical next step.
            </p>
          </div>
          <Link href="mailto:jatin@jatinvohra.com" className={buttonVariants({ variant: "warm", size: "lg" })}>
            Start a Project
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
