import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="border-t border-muted/60 bg-bg/90">
      <div className="container-prose grid gap-8 py-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div className="space-y-4">
          <img src="/logo.svg" alt="Lumox Technologies logo" className="h-6" />
          <p className="text-sm text-ink/70">
            Practical digital systems for businesses that want to move faster:
            websites, web applications, AI tools, automation, and product development.
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-sm font-semibold">Company</h2>
          <ul className="space-y-2 text-sm text-ink/70">
            <li><Link href="/services" className="hover:text-secondary">Services</Link></li>
            <li><Link href="/projects" className="hover:text-secondary">Work</Link></li>
            <li><Link href="/fitplus" className="hover:text-secondary">FitPlus</Link></li>
            <li><Link href="/about" className="hover:text-secondary">About</Link></li>
            <li><Link href="/contact" className="hover:text-secondary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="mb-2 text-sm font-semibold">Legal</h2>
          <ul className="space-y-2 text-sm text-ink/70">
            <li><Link href="/privacy" className="hover:text-secondary">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-secondary">Terms</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="mb-2 text-sm font-semibold">Contact</h2>
          <p className="text-sm text-ink/70">Canberra, ACT</p>
          <p className="mt-2 text-sm">
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-secondary">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-muted/60 py-4 text-center text-xs text-ink/60">
        © {new Date().getFullYear()} Lumox Technologies Pty Ltd. All rights reserved.
      </div>
    </footer>
  );
}
