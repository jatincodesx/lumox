import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { ProcessStory } from "@/components/sections/ProcessStory";
import { FitPlus } from "@/components/sections/FitPlus";
import { WorkCapabilities } from "@/components/sections/WorkCapabilities";
import { WhyLumox } from "@/components/sections/WhyLumox";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ScrollOrchestrator } from "@/components/animations/ScrollOrchestrator";

export default function HomePage() {
  return (
    <div className="relative isolate">
      <ScrollOrchestrator />
      <Hero />
      <Services />
      <ProcessStory />
      <FitPlus />
      <WorkCapabilities />
      <WhyLumox />
      <ContactCTA />
    </div>
  );
}
