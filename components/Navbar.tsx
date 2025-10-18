"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/seo";
import { buttonVariants } from "@/components/ui/button"; // ✅ use variants helper
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

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
        className={`px-3 py-2 rounded-lg hover:bg-secondary/10 ${active ? "text-secondary" : ""}`}
      >
        {label}
      </Link>
    );
  };

  return (
    <div className={`sticky top-0 z-50 ${scrolled ? "nav-blur" : ""}`}>
      <nav className="container-prose flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Lumox" className="h-6" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {NAV.map((i) => <LinkItem key={i.href} {...i} />)}
          <div className="mx-2"><ThemeToggle /></div>

          {/* Link styled like a button (no asChild) */}
          <Link
            href="/contact"
            className={buttonVariants({ variant: "warm", size: "sm" })}
          >
            Work with us
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger className="rounded-xl p-2 hover:bg-secondary/10" aria-label="Open menu">
              <Menu size={20} />
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-2 mt-4">
                {NAV.map((i) => (
                  <Link key={i.href} href={i.href} className="px-2 py-2 rounded-lg hover:bg-secondary/10">
                    {i.label}
                  </Link>
                ))}

                {/* ⬇️ Link styled like a button (no asChild) */}
                <Link
                  href="/contact"
                  className={`${buttonVariants({ variant: "warm", size: "md" })} mt-2`}
                >
                  Work with us
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}