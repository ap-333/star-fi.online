import { createFileRoute, Link } from "@tanstack/react-router";
import hardware from "@/assets/hardware.jpg";
import { Cta, Faq, SectionLabel } from "@/components/site/Bits";
import { PLANS, SITE, pageHead } from "@/lib/site";

export const Route = createFileRoute("/plans")({
  head: () => pageHead("/plans", "Internet Plans", `Compare ${SITE.brand} Residential plans from $55/mo and Roam plans from $55/mo - pricing, speeds, data and conditions.`),
  component: Plans,
});

const GROUPS = [
  { group: "Residential" as const, blurb: "Best for households", sub: "Stream, work from home, game & more." },
  { group: "Roam" as const, blurb: "Best for RVs, nomads, campers, and working on the go", sub: "Take your connection wherever the road goes." },
];

function Plans() {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-5 pb-16 pt-36 md:px-10 md:pt-44">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow">Service plans</p>
            <h1 className="display-xl mt-6">Plans,<br />plainly priced.</h1>
          </div>
          <p className="self-end text-muted-foreground md:col-span-4 md:col-start-9">
            Two ways to connect - Residential for the home, Roam for life on the move. Every plan starts with a 30-day trial.
          </p>
        </div>
      </section>

      {GROUPS.map(({ group, blurb, sub }) => {
        const plans = PLANS.filter((p) => p.group === group);
        return (
          <section key={group} id={group.toLowerCase()} className="mx-auto max-w-[1440px] scroll-mt-24 px-5 py-16 md:px-10">
            <SectionLabel>{group}</SectionLabel>
            <h2 className="display-lg mt-6">{blurb}</h2>
            <p className="mt-4 text-muted-foreground">{sub}</p>
            <div className="mt-12 grid gap-px border md:grid-cols-3">
              {plans.map((p) => (
                <article key={p.id} id={p.id} className="flex scroll-mt-24 flex-col bg-card p-8">
                  <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                  <p className="mt-3 min-h-[3rem] text-sm text-muted-foreground">{p.audience}</p>
                  <ul className="mt-6 flex-1 space-y-2 text-sm">
                    <li>- {p.speed}</li>
                    {p.features.map((f) => <li key={f}>- {f}</li>)}
                  </ul>
                  <p className="mt-10 eyebrow">Service starting at</p>
                  <p className="font-display text-5xl font-bold">{p.price}<span className="ml-1 text-base font-medium text-muted-foreground">{p.billing}</span></p>
                  <div className="mt-6"><Cta to="/contact" search={{ plan: p.id }} className="w-full sm:w-full">Get started</Cta></div>
                </article>
              ))}
            </div>
            <p className="mt-6 max-w-3xl text-xs text-muted-foreground">{plans[0]?.notes}</p>
          </section>
        );
      })}

      <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-10">
        <SectionLabel>Side by side</SectionLabel>
        <h2 className="display-lg mt-6">Full comparison.</h2>
        <div className="mt-12 hidden overflow-x-auto md:block">
          <table className="w-full border-collapse text-left text-sm">
            <caption className="sr-only">Plan comparison</caption>
            <thead>
              <tr className="border-b">
                <th scope="col" className="w-40 py-5 eyebrow">Plan</th>
                <th scope="col" className="py-5 pr-6 eyebrow">Type</th>
                <th scope="col" className="py-5 pr-6 eyebrow">Speed</th>
                <th scope="col" className="py-5 pr-6 eyebrow">Data</th>
                <th scope="col" className="py-5 pr-6 text-right eyebrow">Price</th>
                <th scope="col" className="py-5"><span className="sr-only">Action</span></th>
              </tr>
            </thead>
            <tbody>
              {PLANS.map((p) => (
                <tr key={p.id} className="border-b">
                  <th scope="row" className="py-4 pr-6 font-display text-base font-bold">{p.name}</th>
                  <td className="py-4 pr-6 text-muted-foreground">{p.group}</td>
                  <td className="py-4 pr-6">{p.speed}</td>
                  <td className="py-4 pr-6">{p.data}</td>
                  <td className="py-4 pr-6 text-right font-display text-lg font-bold">{p.price}<span className="text-sm font-normal text-muted-foreground">{p.billing}</span></td>
                  <td className="py-4 text-right"><Link to="/contact" search={{ plan: p.id }} className="link-line text-xs font-semibold uppercase tracking-[0.14em]">Get started →</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10 space-y-10 md:hidden">
          {PLANS.map((p) => (
            <div key={p.id} className="border-t pt-6">
              <h3 className="font-display text-2xl font-bold">{p.name}</h3>
              <dl className="mt-4 divide-y text-sm">
                {([["Type", p.group], ["Speed", p.speed], ["Data", p.data], ["Price", `${p.price}${p.billing}`]] as const).map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[6rem_1fr] gap-4 py-3"><dt className="text-muted-foreground">{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
              <div className="mt-5"><Cta to="/contact" search={{ plan: p.id }}>Get started</Cta></div>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-xs text-muted-foreground">
          Actual speeds depend on location, network demand, obstructions and weather. Availability is confirmed for your address before you commit.
        </p>
      </section>

      {/* Equipment */}
      <section className="grid border-y bg-card md:grid-cols-12">
        <div className="flex flex-col justify-center px-5 py-16 md:col-span-5 md:px-14">
          <SectionLabel>Equipment</SectionLabel>
          <h2 className="display-lg mt-6">What arrives in the box.</h2>
          <p className="mt-6 text-muted-foreground">A satellite terminal, mount, cabling and a Wi‑Fi router. Residential 200 Mbps and Max include free professional home installation; Residential Max also adds a Mini terminal for internet on the go. Roam plans are plug & play.</p>
        </div>
        <img src={hardware} alt="A flat satellite terminal on a stand beside a compact Wi-Fi router" width={1600} height={1200} loading="lazy" className="aspect-[4/3] w-full object-cover md:col-span-7" />
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:grid-cols-12 md:px-10">
        <h2 className="display-lg md:col-span-4">Plan questions.</h2>
        <div className="md:col-span-8">
          <Faq items={[
            { q: "Can I change plans later?", a: "Yes - contact us and we'll help you move between Residential and Roam plans. Roam plans can also be paused anytime with Standby Mode." },
            { q: "Are there data limits?", a: "Residential plans include unlimited data. Roam 100GB and 300GB include high-speed data, then unlimited low-speed data; Roam Unlimited has no cap." },
            { q: "How do I order?", a: <>Choose a plan and send an enquiry. We'll <Link to="/coverage" className="underline">confirm availability</Link> and confirm everything before anything is charged. Every plan comes with a 30-day trial.</> },
          ]} />
        </div>
      </section>
    </>
  );
}
