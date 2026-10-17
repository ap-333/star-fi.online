import { createFileRoute } from "@tanstack/react-router";
import business from "@/assets/business.jpg";
import construction from "@/assets/construction.jpg";
import { InquiryForm } from "@/components/site/InquiryForm";
import { Faq, PageHero, SectionLabel } from "@/components/site/Bits";
import { SITE, pageHead } from "@/lib/site";

export const Route = createFileRoute("/business")({
  head: () => pageHead("/business", "Business Satellite Internet", `Satellite connectivity from ${SITE.brand} for farms, remote offices, hospitality, construction sites and backup connectivity.`),
  component: Business,
});

const USES = [
  ["Farms & agriculture", "Office systems, payments and connected equipment across rural operations."],
  ["Remote offices", "Connectivity for teams working far from fixed-line infrastructure."],
  ["Hospitality", "Guest Wi‑Fi and booking systems for lodges, camps and retreats."],
  ["Construction sites", "Temporary connections for site offices during a project."],
  ["Backup connectivity", "A secondary connection alongside an existing primary service."],
];

function Business() {
  return (
    <>
      <PageHero img={business} alt="Farm operations building with rooftop satellite antennas next to grain silos at dusk" eyebrow="Business internet" position="70% center"
        title={<>Built for work<br />at the edges.</>}
        intro="Satellite connectivity for organisations operating where conventional networks fall short." />

      <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
        <SectionLabel>Use cases</SectionLabel>
        <ul className="mt-12">
          {USES.map(([t, d], i) => (
            <li key={t} className="grid gap-3 border-t py-8 md:grid-cols-12">
              <span className="font-mono text-sm text-muted-foreground md:col-span-1">0{i + 1}</span>
              <h2 className="font-display text-2xl font-bold md:col-span-5 md:text-4xl">{t}</h2>
              <p className="text-muted-foreground md:col-span-5 md:col-start-8">{d}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid border-y md:grid-cols-12">
        <div className="flex flex-col justify-center bg-card px-5 py-16 md:col-span-5 md:px-14">
          <SectionLabel>How we work</SectionLabel>
          <h2 className="display-lg mt-6">A conversation, not a catalogue.</h2>
          <p className="mt-6 text-muted-foreground">Every site is different. We start by understanding your location, users and requirements, then recommend what's realistically achievable - in writing, before you commit.</p>
          <p className="mt-4 text-sm text-muted-foreground">Service levels, support terms and any multi-site arrangements are confirmed per agreement.</p>
        </div>
        <img src={construction} alt="Stacked site office cabins with a satellite dish on the roof beside tower cranes at dusk" width={1600} height={1200} loading="lazy" className="aspect-[4/3] w-full object-cover md:col-span-7 md:aspect-auto md:h-full" />
      </section>

      <section id="consult" className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-4">
          <SectionLabel>Consultation</SectionLabel>
          <h2 className="display-lg mt-6">Tell us about your site.</h2>
          <p className="mt-6 text-muted-foreground">Share the location and what you need connected. A member of our team will follow up.</p>
        </div>
        <div className="md:col-span-8">
          <InquiryForm kind="business" defaultType="Business connectivity" messageLabel="Your requirements" submitLabel="Request consultation" />
        </div>
      </section>

      <section className="border-t bg-card">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:grid-cols-12 md:px-10">
          <h2 className="display-lg md:col-span-4">Business FAQs.</h2>
          <div className="md:col-span-8">
            <Faq items={[
              { q: "Do you offer service-level agreements?", a: "Any service-level terms will be set out in your business agreement. Ask us during your consultation." },
              { q: "Can satellite be used as a backup?", a: "Satellite can serve as a secondary connection. Failover setup depends on your existing network equipment." },
              { q: "Can I connect multiple sites?", a: "Tell us about each location and we'll assess availability for each one individually." },
            ]} />
          </div>
        </div>
      </section>
    </>
  );
}
