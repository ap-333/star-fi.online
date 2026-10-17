import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b bg-background/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-5 md:h-20 md:px-10">
        <Logo />
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[13px] font-medium">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="link-line py-1 text-foreground/80 transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={SITE.phoneHref}
            className="hidden items-center gap-2 text-[13px] font-semibold text-foreground/90 transition-colors hover:text-foreground md:inline-flex"
          >
            <Phone size={14} aria-hidden="true" />
            {SITE.phoneDisplay}
          </a>
          <Link
            to="/coverage"
            className="hidden border border-foreground px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] transition-all hover:bg-foreground hover:text-background sm:inline-block"
          >
            Check Availability
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-menu" className="h-[calc(100dvh-4rem)] overflow-y-auto border-t bg-background px-5 pb-10 lg:hidden">
          <ul className="divide-y">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="flex items-center justify-between py-5 font-display text-2xl font-bold">
                  {n.label}
                  <span aria-hidden className="text-muted-foreground">→</span>
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="flex items-center justify-between py-5 font-display text-2xl font-bold">
                Contact <span aria-hidden className="text-muted-foreground">→</span>
              </Link>
            </li>
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <Link to="/coverage" className="block bg-foreground py-4 text-center text-sm font-semibold uppercase tracking-[0.14em] text-background">
              Check Availability
            </Link>
            <a href={SITE.phoneHref} className="flex items-center justify-center gap-2 border border-foreground py-4 text-sm font-semibold uppercase tracking-[0.14em]">
              <Phone size={16} aria-hidden="true" />
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
