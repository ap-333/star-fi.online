import { createFileRoute } from "@tanstack/react-router";
import travel from "@/assets/travel.jpg";
import hardware from "@/assets/hardware.jpg";
import coverage from "@/assets/coverage.jpg";
import { Cta, Faq, Orbit, PageHero, SectionLabel } from "@/components/site/Bits";
import { SITE, pageHead } from "@/lib/site";

export const Route = createFileRoute("/travel")({
  head: () => pageHead("/travel", "Travel Connectivity", `Satellite connectivity options from ${SITE.brand} for vans, campers and remote trips, where offered.`),
  component: Travel,
});

function Travel() {
  return (
    <>
      <PageHero img={travel} alt="A camper van with a satellite antenna parked on a canyon rim at twilight" eyebrow="Travel connectivity" position="25% center"
        title={<>Take the signal<br />with you.</>}
        intro="Connectivity for vans, campers and remote stays - available where our service and compatible equipment support it.">
        <Cta to="/contact" search={{ type: "Travel connectivity" }}>Enquire about travel</Cta>
      </PageHero>

      <section className="relative overflow-hidden">
        <Orbit className="absolute -left-60 top-0 w-[800px] text-foreground/10" />
        <div className="relative mx-auto grid max-w-[1440px] gap-10 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <h2 className="display-lg md:col-span-6">Where it fits.</h2>
          <ul className="space-y-6 md:col-span-6">
            {["Campervans and motorhomes on extended trips", "Seasonal campsites and remote stays", "Field work and temporary bases", "Off-grid weekends - where permitted by plan"].map((t) => (
              <li key={t} className="border-t pt-5 font-display text-xl font-semibold">{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <img src={hardware} alt="Portable flat satellite terminal and Wi-Fi router" width={1600} height={1200} loading="lazy" className="aspect-[4/3] w-full object-cover" />
        <div className="flex flex-col justify-center bg-card px-5 py-16 md:px-14">
          <SectionLabel>Equipment & limitations</SectionLabel>
          <h2 className="display-lg mt-6">Know before you go.</h2>
          <ul className="mt-8 space-y-4 text-muted-foreground">
            <li>- Setup: <span className="text-foreground">plug & play with Roam plans</span></li>
            <li>- Use while moving: <span className="text-foreground">in-motion use supported</span></li>
            <li>- Limits: <span className="text-foreground">international travel and coastal coverage are limited</span></li>
            <li>- Plans: <span className="text-foreground">Roam 100GB $55, 300GB $80, Unlimited $175 per month</span></li>
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">Service may not be available in every location you travel to. Always check conditions before relying on connectivity.</p>
        </div>
      </section>

      <section className="relative">
        <img src={coverage} alt="Star trails above a remote mountain valley with scattered lights" width={1920} height={1088} loading="lazy" className="h-[55svh] min-h-[380px] w-full object-cover" />
        <div className="absolute inset-0 scrim-b" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1440px] px-5 pb-12 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="display-lg max-w-xl">Plan your connected trip.</h2>
            <Cta to="/contact" search={{ type: "Travel connectivity" }}>Talk to us</Cta>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:grid-cols-12 md:px-10">
        <h2 className="display-lg md:col-span-4">Travel FAQs.</h2>
        <div className="md:col-span-8">
          <Faq items={[
            { q: "Can I use my home equipment while travelling?", a: "This depends on your plan and equipment. Contact us to confirm before you travel." },
            { q: "Does it work in every country?", a: "No. Service is limited to supported regions, which we'll confirm for your route." },
          ]} />
        </div>
      </section>
    </>
  );
}
