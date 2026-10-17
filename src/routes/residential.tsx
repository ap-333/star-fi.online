import { createFileRoute, Link } from "@tanstack/react-router";
import cabin from "@/assets/cabin.jpg";
import rooftop from "@/assets/rooftop.jpg";
import support from "@/assets/support.jpg";
import { Cta, Faq, PageHero, SectionLabel } from "@/components/site/Bits";
import { SITE, pageHead } from "@/lib/site";

export const Route = createFileRoute("/residential")({
  head: () => pageHead("/residential", "Residential Satellite Internet", `Home satellite internet from ${SITE.brand} for rural homes, farmhouses, cabins and remote properties.`),
  component: Residential,
});

function Residential() {
  return (
    <>
      <PageHero img={support} alt="A person working on a laptop inside a cabin, mountains and stars visible through the window" eyebrow="Residential internet" position="60% center"
        title={<>Bring the world<br />to your door.</>}
        intro="Satellite home internet for properties beyond the reach of fibre, cable and reliable mobile signal.">
        <Cta to="/coverage">Check Availability</Cta>
        <Cta to="/plans" variant="outline">View plans</Cta>
      </PageHero>

      <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
        <p className="max-w-4xl font-display text-2xl font-semibold leading-snug md:text-4xl">
          Video calls with family, school assignments, streaming on a quiet night - everyday internet shouldn't depend on how close you live to a town.
        </p>
      </section>

      <section className="grid md:grid-cols-12">
        <div className="md:col-span-7">
          <img src={cabin} alt="A wooden cabin with a satellite dish, framed by pine trees and snowy peaks" width={1280} height={1600} loading="lazy" className="aspect-[4/5] w-full object-cover md:aspect-auto md:h-full" />
        </div>
        <div className="flex flex-col justify-center gap-10 px-5 py-16 md:col-span-5 md:px-14">
          {[
            ["Rural homes", "For households where fixed-line options are slow, unavailable or unreliable."],
            ["Cabins & second homes", "Connectivity for weekend and seasonal properties, subject to plan terms."],
            ["Farmhouses", "Keep the home office, the family and smart devices online together."],
            ["Remote properties", "Wherever there's power and a clear view of the sky, satellite may be an option."],
          ].map(([t, d]) => (
            <div key={t} className="border-t pt-5">
              <h2 className="font-display text-2xl font-bold">{t}</h2>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative">
        <img src={rooftop} alt="Satellite dish silhouetted on a rooftop above a mountain lake" width={1920} height={912} loading="lazy" className="h-[60svh] min-h-[420px] w-full object-cover object-[25%_center]" />
        <div className="absolute inset-0 scrim-l" />
        <div className="absolute inset-0 mx-auto flex max-w-[1440px] items-center px-5 md:px-10">
          <div className="max-w-md">
            <SectionLabel>Honest expectations</SectionLabel>
            <h2 className="display-lg mt-6">What affects your connection.</h2>
            <p className="mt-6 text-foreground/85">Trees, buildings, heavy weather and peak-time demand can all affect performance. We'll be clear about what's realistic at your location.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-5">
          <SectionLabel>Getting set up</SectionLabel>
          <h2 className="display-lg mt-6">Three steps to online.</h2>
          <p className="mt-6 text-muted-foreground">Read the full <Link to="/installation" className="underline">installation guide</Link> for what to prepare.</p>
        </div>
        <ol className="grid gap-px md:col-span-7 md:grid-cols-3">
          {[["Check", "Send your address for an availability review."], ["Choose", "Pick a plan and equipment option."], ["Connect", "Install the dish, power on and connect."]].map(([t, d], i) => (
            <li key={t} className="border-t py-6 md:border-l md:border-t-0 md:px-6">
              <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
              <p className="mt-6 font-display text-2xl font-bold">{t}</p>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t bg-card">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:grid-cols-12 md:px-10">
          <h2 className="display-lg md:col-span-4">Home internet FAQs.</h2>
          <div className="md:col-span-8">
            <Faq items={[
              { q: "Can I use satellite internet for video calls and streaming?", a: "Most everyday activities including streaming and video calling are generally possible. Performance depends on your plan, location and network conditions." },
              { q: "Will it work in a forested area?", a: "The dish needs a clear view of the sky. Dense tree cover can cause interruptions, so placement is assessed before installation." },
              { q: "Do I need a landline?", a: "No. Satellite internet doesn't require a phone line - just power and a suitable mounting position." },
            ]} />
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Cta to="/coverage">Check Availability</Cta>
              <Cta to="/plans" variant="outline">Compare plans</Cta>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
