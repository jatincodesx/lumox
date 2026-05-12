import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { ProcessStory } from "@/components/sections/ProcessStory";
import { FitPlus } from "@/components/sections/FitPlus";
import { WorkCapabilities } from "@/components/sections/WorkCapabilities";
import { WhyLumox } from "@/components/sections/WhyLumox";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ScrollOrchestrator } from "@/components/animations/ScrollOrchestrator";

const proof = [
  "Websites that convert",
  "Apps that simplify work",
  "AI tools built around real workflows",
  "Automation without unnecessary complexity",
];

export default function HomePage() {
  return (
    <div className="relative isolate overflow-hidden">
      <ScrollOrchestrator />
      <Hero />

      <section className="section-band relative z-10">
        <div className="section py-10">
          <h2 className="sr-only">Lumox value statements</h2>
          <div className="grid gap-3 md:grid-cols-4">
            {proof.map((item, index) => (
              <div
                key={item}
                className="min-h-24 rounded-lg border border-white/10 bg-white/[0.035] p-4 text-sm font-medium leading-6 text-ink/78 backdrop-blur"
              >
                <span className="mb-3 block text-xs font-semibold text-accent">0{index + 1}</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Services />
      <ProcessStory />
      <FitPlus />
      <WorkCapabilities />
      <WhyLumox />
      <ContactCTA />
    </div>
  );
}
