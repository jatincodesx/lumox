"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/seo";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowRight, Menu } from "lucide-react";
import { LumoxLogo } from "@/components/brand/LumoxLogo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const LinkItem = ({ href, label }: { href: string; label: string }) => {
    const active = pathname === href;
    return (
      <Link
        href={href}
        className={`rounded-lg px-3 py-2 text-sm text-ink/72 transition hover:bg-white/5 hover:text-ink ${
          active ? "text-primary" : ""
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <div className={`sticky top-0 z-50 ${scrolled ? "nav-blur" : "border-b border-white/0 bg-bg/35 backdrop-blur-sm"}`}>
      <nav className="site-container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Lumox Technologies home">
          <LumoxLogo />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV.map((i) => <LinkItem key={i.href} {...i} />)}

          <Link
            href="/#contact"
            className={`${buttonVariants({ variant: "warm", size: "sm" })} ml-2`}
          >
            Start a Project
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Sheet>
            <SheetTrigger className="rounded-lg border border-white/10 p-2 hover:bg-white/5" aria-label="Open menu">
              <Menu size={20} />
            </SheetTrigger>
            <SheetContent side="right">
              <div className="mt-4 flex flex-col gap-2">
                {NAV.map((i) => (
                  <Link key={i.href} href={i.href} className="rounded-lg px-2 py-2 text-ink/80 hover:bg-white/5 hover:text-ink">
                    {i.label}
                  </Link>
                ))}

                <Link
                  href="/#contact"
                  className={`${buttonVariants({ variant: "warm", size: "md" })} mt-2`}
                >
                  Start a Project
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}
