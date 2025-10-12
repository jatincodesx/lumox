import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTA() {
  return (
    <section className="section">
      <div className="card bg-cta-gradient">
        <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Ready to ship with confidence?</h3>
            <p className="text-ink/80 mt-2">Let’s align on scope and deliverables, then get to work.</p>
          </div>
          <Button asChild variant="warm" size="lg">
            <Link href="/contact">Work with us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
