import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { ProcessStory } from "@/components/sections/ProcessStory";
import { FitPlus } from "@/components/sections/FitPlus";
import { WorkCapabilities } from "@/components/sections/WorkCapabilities";
import { WhyLumox } from "@/components/sections/WhyLumox";
import { ContactCTA } from "@/components/sections/ContactCTA";

const proof = [
  "Websites that convert",
  "Apps that simplify work",
  "AI tools built around real workflows",
  "Automation without unnecessary complexity",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section-band">
        <div className="section py-10">
          <h2 className="sr-only">Lumox value statements</h2>
          <div className="grid gap-3 md:grid-cols-4">
            {proof.map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/[0.035] p-4 text-sm font-medium text-ink/78">
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
    </>
  );
}
