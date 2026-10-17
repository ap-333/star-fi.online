import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function Orbit({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 800" fill="none" aria-hidden="true" className={`pointer-events-none ${className}`}>
      <ellipse cx="400" cy="400" rx="390" ry="150" stroke="currentColor" strokeWidth="0.75" transform="rotate(-18 400 400)" />
      <ellipse cx="400" cy="400" rx="300" ry="300" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 6" />
      <ellipse cx="400" cy="400" rx="390" ry="90" stroke="currentColor" strokeWidth="0.5" transform="rotate(24 400 400)" />
      <circle cx="770" cy="282" r="3" fill="currentColor" />
    </svg>
  );
}

type BtnProps = { to: string; children: ReactNode; variant?: "solid" | "outline"; className?: string; search?: Record<string, string> };

export function Cta({ to, children, variant = "solid", className = "", search }: BtnProps) {
  const base = "inline-flex w-full items-center justify-center gap-3 px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] transition-all duration-200 sm:w-auto";
  const v = variant === "solid"
    ? "bg-foreground text-background hover:bg-foreground/85 shadow-sm hover:shadow-md"
    : "border border-foreground/70 text-foreground hover:bg-foreground hover:text-background hover:shadow-sm";
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Link to={to as any} search={search as any} className={`${base} ${v} ${className}`}>
      {children}
    </Link>
  );
}

export function SectionLabel({ n, children }: { n?: string; children: ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-3">
      {n && <span className="text-foreground">{n}</span>}
      <span className="h-px w-8 bg-foreground/40" />
      {children}
    </p>
  );
}

export function PageHero({ img, alt, eyebrow, title, intro, position = "center", children }: {
  img: string; alt: string; eyebrow: string; title: ReactNode; intro: string; position?: string; children?: ReactNode;
}) {
  return (
    <section className="relative flex min-h-[78svh] items-end overflow-hidden">
      <img src={img} alt={alt} width={1920} height={1088} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: position }} />
      <div className="absolute inset-0 scrim-b" />
      <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-14 pt-32 md:px-10 md:pb-20">
        <p className="eyebrow text-foreground/80">{eyebrow}</p>
        <h1 className="display-lg mt-5 max-w-4xl">{title}</h1>
        <p className="mt-6 max-w-xl text-base text-foreground/85 md:text-lg">{intro}</p>
        {children && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div>}
      </div>
    </section>
  );
}

export function Faq({ items }: { items: { q: string; a: ReactNode }[] }) {
  return (
    <div className="divide-y border-y">
      {items.map((it) => (
        <details key={it.q} className="group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left font-display text-lg font-semibold transition-colors hover:text-foreground/80 md:text-xl [&::-webkit-details-marker]:hidden">
            <span>{it.q}</span>
            <span aria-hidden className="mt-1 shrink-0 text-2xl leading-none text-muted-foreground transition-transform duration-200 group-open:rotate-45">+</span>
          </summary>
          <div className="max-w-3xl pb-7 text-muted-foreground">{it.a}</div>
        </details>
      ))}
    </div>
  );
}

export function Breadcrumb({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-[1440px] px-5 pt-24 md:px-10 md:pt-32">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden className="text-muted-foreground/50">/</span>}
            {item.to ? (
              <Link to={item.to} className="transition-colors hover:text-foreground">{item.label}</Link>
            ) : (
              <span aria-current="page" className="text-foreground/80">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Testimonial({ quote, name, role, location }: { quote: string; name: string; role: string; location: string }) {
  return (
    <figure className="flex flex-col border bg-card p-8 transition-colors hover:border-foreground/30">
      <blockquote className="flex-1 text-base leading-relaxed text-foreground/90">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 border-t pt-4">
        <p className="font-display text-sm font-bold">{name}</p>
        <p className="mt-1 text-xs text-muted-foreground">{role} - {location}</p>
      </figcaption>
    </figure>
  );
}

export function CallNow({ className = "" }: { className?: string }) {
  return (
    <a
      href={SITE.phoneHref}
      className={`inline-flex items-center gap-2 bg-foreground px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-background transition-all hover:bg-foreground/85 ${className}`}
    >
      <Phone size={14} aria-hidden="true" />
      Call {SITE.phoneDisplay}
    </a>
  );
}
