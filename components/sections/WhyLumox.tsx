import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Practical engineering decisions",
  "Clean communication",
  "Fast iteration",
  "AI and web capability",
  "Built for real business use",
];

export function WhyLumox() {
  return (
    <section className="section grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
      <div>
        <div className="eyebrow">Why Lumox</div>
        <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">A focused partner for useful digital work.</h2>
        <p className="mt-5 text-lg leading-8 text-ink/68">
          The work is shaped around the business outcome first, then the interface, data, automation, and engineering choices needed to support it.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {reasons.map((reason) => (
          <div key={reason} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden="true" />
            <p className="text-sm font-medium text-ink/84">{reason}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
