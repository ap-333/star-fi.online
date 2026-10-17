import { createFileRoute } from "@tanstack/react-router";
import about from "@/assets/about.jpg";
import hero from "@/assets/hero.jpg";
import { Cta, Orbit, SectionLabel } from "@/components/site/Bits";
import { SITE, pageHead } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => pageHead("/about", "About Us", `${SITE.brand} is an independent satellite internet provider focused on honest advice and customer-first service for remote communities.`),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-20 pt-36 md:px-10 md:pt-48">
        <Orbit className="absolute -right-40 -top-20 w-[900px] text-foreground/10" />
        <div className="relative mx-auto max-w-[1440px]">
          <p className="eyebrow">About {SITE.brand}</p>
          <h1 className="display-xl mt-6 max-w-5xl">Connectivity is a right of place, not postcode.</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-10 px-5 md:grid-cols-12 md:px-10">
        <img src={about} alt="Two team members reviewing satellite antenna data on a laptop in a workshop" width={1600} height={1200} loading="lazy" className="aspect-[4/3] w-full object-cover md:col-span-8" />
        <div className="flex flex-col justify-end md:col-span-4">
          <SectionLabel>Our mission</SectionLabel>
          <p className="mt-6 font-display text-2xl font-semibold leading-snug">To bring dependable internet to the homes, farms and businesses that larger networks overlook.</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-px md:grid-cols-3">
          {[
            ["Customer first", "Straight answers, written quotes and real people on the other end of every inquiry."],
            ["Connectivity expertise", "We focus on satellite - placement, equipment and the realities of remote locations."],
            ["Honest service", "We tell you what's realistic for your location, including when satellite isn't the right fit."],
          ].map(([t, d], i) => (
            <div key={t} className={`py-8 md:px-8 ${i ? "border-t md:border-l md:border-t-0" : "border-t md:border-t-0 md:pl-0"}`}>
              <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
              <h2 className="mt-6 font-display text-3xl font-bold">{t}</h2>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative">
        <img src={hero} alt="Remote home with a satellite dish under the Milky Way" width={1920} height={1088} loading="lazy" className="h-[60svh] min-h-[420px] w-full object-cover object-[75%_center]" />
        <div className="absolute inset-0 scrim-l" />
        <div className="absolute inset-0 mx-auto flex max-w-[1440px] items-center px-5 md:px-10">
          <div className="max-w-md space-y-5">
            <SectionLabel>Our story</SectionLabel>
            <p className="text-foreground/90">Starfi connects homes, vehicles and remote places with satellite internet - with plans that are simple, priced clearly and backed by a 30-day trial.</p>
            <p className="text-foreground/90">We tell you what to expect at your location before you commit, and we're a real email away at {SITE.email}.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-24 md:flex-row md:items-end md:justify-between md:px-10">
        <h2 className="display-lg max-w-2xl">Let's see what's possible where you are.</h2>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Cta to="/coverage">Check Availability</Cta>
          <Cta to="/contact" variant="outline">Contact us</Cta>
        </div>
      </section>
    </>
  );
}
