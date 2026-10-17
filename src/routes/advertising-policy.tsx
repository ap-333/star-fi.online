import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/site/Bits";
import { SITE, pageHead } from "@/lib/site";

export const Route = createFileRoute("/advertising-policy")({
  head: () => pageHead("/advertising-policy", "Advertising Policy", `How ${SITE.brand} approaches advertising, sponsored content, and third-party ads.`),
  component: AdvertisingPolicy,
});

function LegalLayout({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: title }]} />
      <section className="mx-auto max-w-[1440px] px-5 pb-24 md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">Legal</p>
          <h1 className="display-lg mt-4">{title}</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last Updated: {updated}</p>
          <div className="mt-12 space-y-10 text-base leading-relaxed text-foreground/85">
            {children}
          </div>
          <div className="mt-16 border-t pt-10">
            <h2 className="font-display text-xl font-bold">Advertising Inquiries</h2>
            <p className="mt-3 text-muted-foreground">
              For questions about our advertising practices, contact us at{" "}
              <a href={`mailto:${SITE.email}`} className="link-line text-foreground">{SITE.email}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl font-bold text-foreground">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

export default function AdvertisingPolicy() {
  return (
    <LegalLayout title="Advertising Policy" updated="October 15, 2026">
      <Section title="1. Our Commitment to Honest Advertising">
        <p>
          Starfi is committed to providing clear, honest, and transparent advertising. We believe
          that our customers deserve accurate information about our services, pricing, and
          performance to make informed decisions.
        </p>
        <p>
          All advertising content on this website and through our marketing channels reflects our
          actual services and terms. We do not engage in misleading or deceptive advertising
          practices.
        </p>
      </Section>

      <Section title="2. Service Performance Claims">
        <p>
          When we advertise speeds, performance, or coverage, we strive to ensure our claims are
          based on real-world data and typical performance under normal conditions. However,
          satellite internet performance varies based on location, weather, terrain, and network
          conditions.
        </p>
        <p>
          Advertised speeds represent maximum or typical values and are not guaranteed. Actual
          performance may differ, and we encourage customers to check availability and discuss
          expected performance for their specific location before purchasing.
        </p>
      </Section>

      <Section title="3. Pricing and Promotions">
        <p>
          All pricing displayed on this website is in US dollars and is subject to change without
          notice. Promotional offers, discounts, and special pricing are valid only for the duration
          of the promotion and may have additional terms and conditions.
        </p>
        <p>
          We will clearly disclose any conditions, limitations, or eligibility requirements for
          promotional offers. Taxes and fees may apply and will be disclosed before purchase.
        </p>
      </Section>

      <Section title="4. Third-Party Advertising">
        <p>
          Our website may display third-party advertisements from advertising networks or partners.
          These third-party ads are clearly distinguished from our own content. We do not endorse
          or guarantee products or services advertised by third parties.
        </p>
        <p>
          Third-party advertisers may use cookies or similar technologies to deliver targeted ads.
          These third parties have their own privacy policies governing their data practices.
        </p>
      </Section>

      <Section title="5. Sponsored Content">
        <p>
          If we publish sponsored content or partner reviews, we will clearly disclose the
          sponsorship relationship. Sponsored content is identified as such and does not influence
          our editorial independence or the accuracy of information we provide.
        </p>
      </Section>

      <Section title="6. Testimonials and Reviews">
        <p>
          Customer testimonials displayed on this website represent the individual experiences of
          those customers. Individual results may vary, and testimonials are not a guarantee of
          specific outcomes or performance.
        </p>
        <p>
          We do not fabricate reviews or testimonials. All testimonials are from real customers
          unless otherwise stated.
        </p>
      </Section>

      <Section title="7. Affiliate Relationships">
        <p>
          From time to time, Starfi may participate in affiliate programs where we earn a
          referral fee if you click a link and make a purchase. These relationships do not affect
          the price you pay or the information we provide. We clearly identify affiliate links
          where applicable.
        </p>
      </Section>

      <Section title="8. Contact Us About Advertising">
        <p>
          If you believe our advertising is misleading or have questions about our advertising
          practices, please contact us at{" "}
          <a href={`mailto:${SITE.email}`} className="link-line text-foreground">{SITE.email}</a>.
          We take all concerns seriously and will investigate promptly.
        </p>
      </Section>
    </LegalLayout>
  );
}
