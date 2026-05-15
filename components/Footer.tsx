import Link from "next/link";
import { LumoxLogo } from "@/components/brand/LumoxLogo";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-bg">
      <div className="site-container grid gap-8 py-10 md:grid-cols-4">
        <div className="space-y-3">
          <LumoxLogo />
          <p className="text-sm leading-6 text-ink/64">
            Practical websites, web applications, automation tools, AI systems, and technical consulting for Canberra and Australian businesses.
          </p>
        </div>
        <div>
          <h4 className="mb-2 font-semibold">Company</h4>
          <ul className="space-y-1 text-sm text-ink/64">
            <li><Link href="/#services" className="hover:text-primary">Services</Link></li>
            <li><Link href="/#work" className="hover:text-primary">Work</Link></li>
            <li><Link href="/#fitplus" className="hover:text-primary">Products by Lumox</Link></li>
            <li><Link href="/careers" className="hover:text-primary">Careers</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-semibold">Legal</h4>
          <ul className="space-y-1 text-sm text-ink/64">
            <li><Link href="/privacy" className="hover:text-primary">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-primary">Terms</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-semibold">Contact</h4>
          <p className="text-sm text-ink/64">Canberra, ACT</p>
          <p className="text-sm"><a href="mailto:jatin@jatinvohra.com" className="text-ink/64 hover:text-primary">jatin@jatinvohra.com</a></p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-ink/48">
        © {new Date().getFullYear()} Lumox Technologies Pty Ltd. All rights reserved.
      </div>
    </footer>
  );
}
