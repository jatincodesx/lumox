import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-muted/60">
      <div className="container-prose py-10 grid gap-8 md:grid-cols-4">
        <div className="space-y-3">
          <img src="/logo.svg" alt="Lumox" className="h-6" />
          <p className="text-sm text-ink/70">
            Software & network solutions you can trust.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/about" className="hover:text-secondary">About</Link></li>
            <li><Link href="/projects" className="hover:text-secondary">Projects</Link></li>
            <li><Link href="/careers" className="hover:text-secondary">Careers</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/legal/privacy" className="hover:text-secondary">Privacy</Link></li>
            <li><Link href="/legal/terms" className="hover:text-secondary">Terms</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm">Canberra, ACT</p>
          <p className="text-sm"><a href="mailto:hello@lumox.au" className="hover:text-secondary">hello@lumox.au</a></p>
        </div>
      </div>
      <div className="border-t border-muted/60 py-4 text-center text-xs text-ink/60">
        © {new Date().getFullYear()} Lumox Technologies Pty Ltd. All rights reserved.
      </div>
    </footer>
  );
}
