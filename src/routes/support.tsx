import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Cta, Faq } from "@/components/site/Bits";
import { SITE, pageHead } from "@/lib/site";

export const Route = createFileRoute("/support")({
  head: () => pageHead("/support", "FAQs & Support", `Answers about ${SITE.brand} plans, availability, equipment, installation, billing and troubleshooting.`),
  component: Support,
});

const CATS: Record<string, { q: string; a: string }[]> = {
  Plans: [
    { q: "What plans are available?", a: "See the Internet Plans page for current plan details. Final terms are confirmed in writing." },
    { q: "Are speeds guaranteed?", a: "No. Speeds vary with location, demand, obstructions and weather." },
  ],
  Availability: [
    { q: "How do I check availability?", a: "Submit your address on the Coverage page. Our team reviews it and replies by email." },
    { q: "Why can't you show instant results?", a: "Availability depends on exact position and capacity, so we confirm each request personally." },
  ],
  Equipment: [
    { q: "What equipment do I need?", a: "Typically a satellite terminal, mount, cabling and router. Your plan determines exactly what's supplied." },
  ],
  Installation: [
    { q: "Can I install it myself?", a: "Setup guidance is provided. Residential 200 Mbps and Max include free professional home installation; Residential 100 Mbps and Roam are plug & play." },
  ],
  Billing: [
    { q: "How am I billed?", a: "Plans are billed monthly at the price shown on our Plans page. Every plan starts with a 30-day trial. Roam plans can be paused anytime with Standby Mode for a small monthly fee." },
  ],
  Troubleshooting: [
    { q: "My connection is slow or dropping.", a: "Check for new obstructions such as trees, restart the router and terminal, and confirm cables are secure. Contact us if it persists." },
    { q: "No connection at all.", a: "Confirm power to all equipment, check for snow or debris on the dish, then restart. Contact support with your account details." },
  ],
};

function Support() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const entries = Object.entries(CATS).filter(([c]) => cat === "All" || c === cat);
  const term = q.trim().toLowerCase();
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-5 pb-12 pt-36 md:px-10 md:pt-44">
        <p className="eyebrow">FAQs & support</p>
        <h1 className="display-xl mt-6">How can we help?</h1>
        <label htmlFor="faq-search" className="sr-only">Search FAQs</label>
        <input id="faq-search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search questions…" className="mt-10 w-full max-w-2xl border-0 border-b border-input bg-transparent py-4 text-xl focus:border-foreground focus:outline-none" />
        <div role="group" aria-label="Filter by category" className="mt-8 flex flex-wrap gap-2">
          {["All", ...Object.keys(CATS)].map((c) => (
            <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)} className={`border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] ${cat === c ? "bg-foreground text-background" : "hover:border-foreground"}`}>{c}</button>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-[1440px] space-y-16 px-5 pb-24 md:px-10">
        {entries.map(([c, items]) => {
          const f = items.filter((i) => !term || (i.q + i.a).toLowerCase().includes(term));
          if (!f.length) return null;
          return (
            <div key={c} className="grid gap-6 md:grid-cols-12">
              <h2 className="font-display text-2xl font-bold md:col-span-3">{c}</h2>
              <div className="md:col-span-9"><Faq items={f} /></div>
            </div>
          );
        })}
      </section>
      <section className="border-t bg-card">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-20 md:flex-row md:items-center md:justify-between md:px-10">
          <div>
            <h2 className="display-lg">Still need help?</h2>
            <p className="mt-4 text-muted-foreground">See <Link to="/installation" className="underline">installation</Link> or <Link to="/plans" className="underline">plans</Link>, or contact support.</p>
          </div>
          <Cta to="/contact" search={{ type: "Technical support" }}>Contact support</Cta>
        </div>
      </section>
    </>
  );
}
