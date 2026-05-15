import { Hero } from "@/components/sections/Hero";
import { HomePreviews } from "@/components/sections/HomePreviews";
import { ProcessStory } from "@/components/sections/ProcessStory";
import { WhyLumox } from "@/components/sections/WhyLumox";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ScrollOrchestrator } from "@/components/animations/ScrollOrchestrator";

export default function HomePage() {
  return (
    <div className="relative isolate">
      <ScrollOrchestrator />
      <Hero />
      <HomePreviews />
      <ProcessStory />
      <WhyLumox />
      <ContactCTA />
    </div>
  );
}
