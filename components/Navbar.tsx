"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/seo";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import { LumoxLogo } from "@/components/brand/LumoxLogo";

const productLinks = [
  { href: "/products", label: "Products overview", text: "Lumox-built product ecosystem" },
  { href: "/products/fitplus", label: "FitPlus", text: "Fitness and nutrition platform" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setProductsOpen(false);
    setMobileOpen(false);
  }, [pathname]);

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

  const productsActive = pathname.startsWith("/products");

  return (
    <div className={`sticky top-0 z-50 ${scrolled ? "nav-blur" : "border-b border-white/0 bg-bg/35 backdrop-blur-sm"}`}>
      <nav className="site-container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Lumox Technologies home">
          <LumoxLogo />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV.slice(0, 2).map((i) => <LinkItem key={i.href} {...i} />)}

          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setProductsOpen(false);
              }
            }}
          >
            <button
              type="button"
              className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-ink/72 transition hover:bg-white/5 hover:text-ink ${
                productsActive ? "text-primary" : ""
              }`}
              aria-haspopup="menu"
              aria-expanded={productsOpen}
              onClick={() => setProductsOpen((open) => !open)}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  setProductsOpen(false);
                }
                if (event.key === "ArrowDown") {
                  event.preventDefault();
                  setProductsOpen(true);
                }
              }}
            >
              Products by Lumox
              <ChevronDown
                className={`h-4 w-4 transition ${productsOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            <div
              role="menu"
              className={`absolute left-0 top-full mt-2 w-72 rounded-lg border border-white/10 bg-[rgba(6,17,31,0.96)] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur-xl transition duration-200 ${
                productsOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
              }`}
            >
              {productLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  className="block rounded-lg px-3 py-3 transition hover:bg-white/[0.06] focus:bg-white/[0.06]"
                >
                  <span className="block text-sm font-semibold text-ink">{item.label}</span>
                  <span className="mt-1 block text-xs leading-5 text-ink/58">{item.text}</span>
                </Link>
              ))}
              <div className="mt-1 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-ink/54">
                More products coming soon
              </div>
            </div>
          </div>

          {NAV.slice(2).map((i) => <LinkItem key={i.href} {...i} />)}

          <Link
            href="/contact"
            className={`${buttonVariants({ variant: "warm", size: "sm" })} ml-2`}
          >
            Start a Project
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger className="rounded-lg border border-white/10 p-2 hover:bg-white/5" aria-label="Open menu">
              <Menu size={20} />
            </SheetTrigger>
            <SheetContent side="right">
              <div className="mt-4 flex flex-col gap-2">
                {NAV.slice(0, 2).map((i) => (
                  <Link
                    key={i.href}
                    href={i.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-2 py-2 text-ink/80 hover:bg-white/5 hover:text-ink"
                  >
                    {i.label}
                  </Link>
                ))}
                <div className="mt-2 rounded-lg border border-white/10 bg-white/[0.03] p-2">
                  <div className="px-2 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    Products by Lumox
                  </div>
                  {productLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-2 py-2 text-sm text-ink/80 hover:bg-white/5 hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="px-2 py-2 text-xs text-ink/50">More products coming soon</div>
                </div>
                {NAV.slice(2).map((i) => (
                  <Link
                    key={i.href}
                    href={i.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-2 py-2 text-ink/80 hover:bg-white/5 hover:text-ink"
                  >
                    {i.label}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
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
