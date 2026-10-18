import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import rooftop from "@/assets/rooftop.jpg";
import cabin from "@/assets/cabin.jpg";
import travel from "@/assets/travel.jpg";
import install from "@/assets/install.jpg";
import business from "@/assets/business.jpg";
import hardware from "@/assets/hardware.jpg";
import { Cta, Faq, Orbit, SectionLabel, Testimonial } from "@/components/site/Bits";
import { PLANS, SITE, pageHead } from "@/lib/site";

const trackPhoneCall = () => {
  // Track call conversion for Google Ads
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      allow_custom_scripts: true,
      event_category: "engagement",
      event_label: "phone_call_initiated"
    });
  }
};

export const Route = createFileRoute("/")({
  head: () => pageHead("/", "Fast Satellite Internet, Beyond Boundaries", `${SITE.brand} is an independent satellite internet provider for rural homes, remote properties, businesses and travel. Check availability at your address.`),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <img src={hero} alt="A remote hillside home with a satellite dish on its roof beneath the Milky Way" width={1920} height={1088} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[75%_center] md:object-center" />
        <div className="absolute inset-0 scrim-b" />
        <div className="absolute inset-0 scrim-l opacity-70" />
        <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-16 pt-32 md:px-10 md:pb-24">
          <p className="eyebrow text-foreground/80">Independent satellite internet</p>
          <h1 className="display-xl mt-6 max-w-5xl">Fast Internet.<br />Beyond Boundaries.</h1>
          <p className="mt-7 max-w-md text-base text-foreground/85 md:text-lg">
            Satellite broadband for the places cables don't reach - homes, farms, cabins and sites far from the grid.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={SITE.phoneHref} onClick={trackPhoneCall} title="Call Starfi" className="inline-flex w-full items-center justify-center gap-3 px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] bg-foreground text-background hover:bg-foreground/85 shadow-sm hover:shadow-md transition-all duration-200 sm:w-auto">
              Call {SITE.phoneDisplay}
            </a>
            <Cta to="/plans" variant="outline">Explore Plans</Cta>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="border-b bg-card">
        <div className="mx-auto max-w-[1440px] px-5 py-8 md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground md:justify-between">
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />30-Day Free Trial</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />No Contract Required</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />Free Professional Installation</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />Standby Mode Available</span>
          </div>
        </div>
      </section>

      {/* CONNECTION WITHOUT BOUNDARIES */}
      <section className="relative overflow-hidden">
        <img src={rooftop} alt="Satellite dish on a slate roof overlooking a mountain lake at blue hour" width={1920} height={912} loading="lazy" className="h-[70svh] min-h-[460px] w-full object-cover object-[20%_center]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto grid w-full max-w-[1440px] px-5 md:grid-cols-12 md:px-10">
            <div className="md:col-span-6 md:col-start-7">
              <SectionLabel n="01">Reliability</SectionLabel>
              <h2 className="display-lg mt-6">Connection without boundaries.</h2>
              <p className="mt-6 max-w-md text-foreground/85">
                A clear view of the sky is what matters. Where terrain or distance has ruled out fibre and cable, satellite opens a direct path to the internet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE STARFI */}
      <section className="border-y bg-card">
        <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel n="02">Why Starfi</SectionLabel>
              <h2 className="display-lg mt-6 max-w-2xl">Built for the places others overlook.</h2>
            </div>
            <Link to="/about" className="link-line self-start text-sm font-semibold uppercase tracking-[0.14em] md:self-end">Our story →</Link>
          </div>
          <div className="mt-16 grid gap-px border md:grid-cols-3">
            {[
              ["Independent & customer-first", "We work for you, not a network. Straight answers, written quotes and real people on the end of every inquiry - no scripts, no runaround."],
              ["Satellite specialists", "We focus exclusively on satellite internet - placement, equipment and the realities of remote locations. It's all we do, and we do it well."],
              ["Honest expectations", "We tell you what's realistic for your location before you commit. If satellite isn't the right fit, we'll say so - even if it means losing a sale."],
            ].map(([t, d], i) => (
              <div key={t} className={`bg-card py-8 md:px-8 ${i ? "border-t md:border-l md:border-t-0" : "border-t md:border-t-0 md:pl-0"}`}>
                <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
                <h3 className="mt-6 font-display text-2xl font-bold">{t}</h3>
                <p className="mt-4 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESIDENTIAL - asymmetric */}
      <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-24 md:grid-cols-12 md:gap-6 md:px-10 md:py-36">
        <div className="relative md:col-span-5">
          <img src={cabin} alt="A wooden mountain cabin at dusk with a satellite dish on its roof" width={1280} height={1600} loading="lazy" className="aspect-[4/5] w-full object-cover" />
          <p className="eyebrow absolute -bottom-7 left-0">Fig. - Remote cabin, alpine valley</p>
        </div>
        <div className="flex flex-col justify-center md:col-span-6 md:col-start-7">
          <SectionLabel n="03">Residential</SectionLabel>
          <h2 className="display-lg mt-6">Home internet, wherever home happens to be.</h2>
          <p className="mt-6 max-w-lg text-muted-foreground">
            Stream, work, study and call family from rural homes, farmhouses and weekend cabins. We help you check suitability, choose a plan and get set up.
          </p>
          <ul className="mt-10 grid gap-px border-y sm:grid-cols-2">
            {["Rural & remote homes", "Holiday cabins", "Farmhouses", "Off-grid properties"].map((t) => (
              <li key={t} className="py-4 text-sm font-medium sm:odd:pr-4">{t}</li>
            ))}
          </ul>
          <div className="mt-10"><Cta to="/residential" variant="outline">Residential internet</Cta></div>
        </div>
      </section>

      {/* PLANS - editorial strip */}
      <section className="border-y bg-card">
        <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel n="04">Plans</SectionLabel>
              <h2 className="display-lg mt-6 max-w-2xl">Choose the connection that fits.</h2>
            </div>
            <Link to="/plans" className="link-line self-start text-sm font-semibold uppercase tracking-[0.14em] md:self-end">Compare all plans →</Link>
          </div>
          <ol className="mt-16 divide-y border-y">
            {PLANS.map((p, i) => (
              <li key={p.id}>
                <Link to="/plans" hash={p.id} className="group grid items-baseline gap-2 py-8 md:grid-cols-12 md:gap-6">
                  <span className="eyebrow md:col-span-1">0{i + 1}</span>
                  <span className="font-display text-2xl font-bold md:col-span-4 md:text-3xl">{p.name}</span>
                  <span className="text-muted-foreground md:col-span-4">{p.data}</span>
                  <span className="flex items-baseline justify-between md:col-span-3 md:justify-end md:gap-4">
                    <span className="font-display text-xl">{p.price}<span className="text-sm text-muted-foreground">{p.billing}</span></span>
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-xs text-muted-foreground">Residential 100 and 200 Mbps plans are only available in select areas. Speeds vary by location, network demand and conditions.</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
        <SectionLabel n="05">How it works</SectionLabel>
        <h2 className="display-lg mt-6 max-w-2xl">Four steps to your first connection.</h2>
        <div className="mt-16 grid gap-px border md:grid-cols-4">
          {[
            ["Check", "Submit your address for a coverage review."],
            ["Choose", "Pick a plan and equipment option."],
            ["Install", "Professional setup or plug & play."],
            ["Connect", "Power up and get online."],
          ].map(([t, d], i) => (
            <div key={t} className="border-t py-8 md:border-l md:border-t-0 md:px-6">
              <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
              <p className="mt-4 font-display text-2xl font-bold">{t}</p>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10"><Cta to="/installation" variant="outline">How setup works</Cta></div>
      </section>

      {/* TRAVEL - full bleed, text bottom-right */}
      <section className="relative min-h-[90svh] overflow-hidden">
        <img src={travel} alt="A camper van with a flat satellite antenna parked above a canyon river at twilight" width={1920} height={1088} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-[30%_center]" />
        <div className="absolute inset-0 scrim-b" />
        <Orbit className="absolute -right-40 top-10 w-[700px] text-foreground/15" />
        <div className="relative mx-auto flex min-h-[90svh] max-w-[1440px] items-end justify-end px-5 pb-16 md:px-10 md:pb-24">
          <div className="max-w-lg">
            <SectionLabel n="06">On the move</SectionLabel>
            <h2 className="display-lg mt-6">Remote doesn't mean offline.</h2>
            <p className="mt-6 text-foreground/85">Connectivity options for vans, campers and seasonal sites - where offered and supported by compatible equipment.</p>
            <div className="mt-8"><Cta to="/travel" variant="outline">Travel connectivity</Cta></div>
          </div>
        </div>
      </section>

      {/* INSTALLATION - story with steps */}
      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-36">
        <div className="md:col-span-5">
          <SectionLabel n="07">Installation</SectionLabel>
          <h2 className="display-lg mt-6">From first check to first connection.</h2>
          <ol className="mt-12 space-y-8">
            {[
              ["Check", "Confirm your location can be served."],
              ["Plan", "Pick a plan and equipment arrangement."],
              ["Mount", "Position the dish with a clear view of the sky."],
              ["Connect", "Power up, pair your router and get online."],
            ].map(([t, d], i) => (
              <li key={t} className="grid grid-cols-[3rem_1fr] border-t pt-5">
                <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
                <div><p className="font-display text-xl font-bold">{t}</p><p className="mt-1 text-sm text-muted-foreground">{d}</p></div>
              </li>
            ))}
          </ol>
          <div className="mt-12"><Cta to="/installation" variant="outline">How setup works</Cta></div>
        </div>
        <div className="md:col-span-7">
          <img src={install} alt="Technician in a safety harness mounting a satellite dish on a rooftop" width={1600} height={1200} loading="lazy" className="aspect-[4/3] w-full object-cover md:h-full" />
        </div>
      </section>

      {/* BUSINESS - split with big image left */}
      <section className="grid border-y md:grid-cols-2">
        <img src={business} alt="Farm operations building with satellite antennas beside grain silos at dusk" width={1920} height={1088} loading="lazy" className="aspect-[16/10] h-full w-full object-cover object-[70%_center] md:aspect-auto" />
        <div className="flex flex-col justify-center px-5 py-20 md:px-16">
          <SectionLabel n="08">Business</SectionLabel>
          <h2 className="display-lg mt-6">Connectivity for work beyond the city.</h2>
          <p className="mt-6 max-w-md text-muted-foreground">Farms, remote offices, hospitality venues and temporary sites. Tell us what you need and we'll talk through suitable options.</p>
          <div className="mt-10"><Cta to="/business">Business internet</Cta></div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-y bg-card">
        <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
          <SectionLabel n="09">Testimonials</SectionLabel>
          <h2 className="display-lg mt-6 max-w-2xl">What our customers say.</h2>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <Testimonial
              quote="We've been in the mountains for years with barely any signal. Starfi changed everything - the kids can do homework, I can video call clients, and we finally feel connected."
              name="Sarah M."
              role="Homeowner"
              location="Boise, Idaho"
            />
            <Testimonial
              quote="Installation was quick and the technician was fantastic. The dish is discreet on the roof and the internet has been rock solid through every storm this winter."
              name="James R."
              role="Farm Owner"
              location="Eastern Oregon"
            />
            <Testimonial
              quote="We travel full-time in our RV and Starfi Roam keeps us online from campgrounds to remote boondocking spots. The pause feature saves us money when we're stationary for weeks."
              name="Mike & Lisa T."
              role="Full-time RVers"
              location="Arizona"
            />
          </div>
        </div>
      </section>

      {/* COVERAGE AREA */}
      <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionLabel n="10">Coverage</SectionLabel>
            <h2 className="display-lg mt-6">Where we serve.</h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              Starfi provides satellite internet coverage across the contiguous United States, with
              particular focus on rural and remote areas underserved by traditional broadband.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              {[
                "Rural and remote residential areas",
                "Farms, ranches, and agricultural operations",
                "Cabins and vacation properties",
                "RV parks and campgrounds (Roam plans)",
                "Remote business sites and offices",
                "Construction and temporary sites",
              ].map((item) => (
                <p key={item} className="flex items-start gap-3 border-t pt-3">
                  <span aria-hidden className="mt-0.5 text-success">-</span>
                  {item}
                </p>
              ))}
            </div>
            <div className="mt-10"><Cta to="/coverage">Check your address</Cta></div>
          </div>
          <div className="md:col-span-7">
            <img src={hardware} alt="Starfi satellite terminal and router equipment" width={1600} height={1200} loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-4">
          <SectionLabel n="11">Questions</SectionLabel>
          <h2 className="display-lg mt-6">Good to know.</h2>
          <Link to="/support" className="link-line mt-8 inline-block text-sm font-semibold uppercase tracking-[0.14em]">All FAQs →</Link>
        </div>
        <div className="md:col-span-8">
          <Faq items={[
            { q: "What do I need for satellite internet?", a: "A location with a clear, unobstructed view of the sky, a power supply, and compatible satellite equipment. We'll confirm requirements when you check availability." },
            { q: "Is it available at my address?", a: <>Availability depends on your exact location and network capacity. Submit your address on the <Link to="/coverage" className="underline">availability page</Link> and our team will confirm.</> },
            { q: "Does weather affect the connection?", a: "Heavy rain, snow or obstructions such as trees can temporarily reduce performance. Correct dish placement helps minimise interruptions." },
            { q: "How long does installation take?", a: "Professional installations typically take 2–3 hours. Plug & play setups can be completed in under an hour following our guidance." },
          ]} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t">
        <Orbit className="absolute left-1/2 top-1/2 w-[1100px] -translate-x-1/2 -translate-y-1/2 text-foreground/10" />
        <div className="relative mx-auto max-w-[1440px] px-5 py-28 text-center md:px-10 md:py-40">
          <p className="eyebrow">Ready when you are</p>
          <h2 className="display-xl mx-auto mt-6 max-w-4xl">Is your sky ready?</h2>
          <p className="mx-auto mt-6 max-w-md text-muted-foreground">Tell us where you are. We'll check and come back to you personally.</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={SITE.phoneHref} onClick={trackPhoneCall} className="inline-flex items-center justify-center gap-3 px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] bg-foreground text-background hover:bg-foreground/85 transition-all duration-200">
              Call {SITE.phoneDisplay}
            </a>
            <Cta to="/contact" variant="outline">Talk to us</Cta>
          </div>
        </div>
      </section>
    </>
  );
}
