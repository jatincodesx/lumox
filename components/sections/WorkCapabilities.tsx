import { MotionCard } from "@/components/animations/MotionCard";

const capabilities = [
  {
    title: "Business website systems",
    text: "Positioning, page structure, technical SEO, and conversion paths for service businesses.",
  },
  {
    title: "AI document and product tools",
    text: "Interfaces that apply AI to real inputs, review loops, and repeatable business tasks.",
  },
  {
    title: "Automation dashboards",
    text: "Operational views that connect steps, reduce manual updates, and make status easier to see.",
  },
  {
    title: "Fitness platform development",
    text: "Product thinking and app development patterns from the FitPlus health and nutrition platform.",
  },
];

export function WorkCapabilities() {
  return (
    <section id="work" className="section-band">
      <div className="section">
        <div className="max-w-3xl">
          <div className="eyebrow">Work</div>
          <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">Capability without invented case studies.</h2>
          <p className="mt-5 text-lg leading-8 text-ink/68">
            Where public project details are limited, Lumox keeps the story honest and shows the kinds of systems it can design and build.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item, index) => (
            <MotionCard key={item.title}>
              <p className="text-sm font-semibold text-primary">0{index + 1}</p>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/68">{item.text}</p>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
