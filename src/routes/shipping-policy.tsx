import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/site/Bits";
import { SITE, pageHead } from "@/lib/site";

export const Route = createFileRoute("/shipping-policy")({
  head: () => pageHead("/shipping-policy", "Shipping Policy", `${SITE.brand}'s equipment shipping policy - delivery timelines, tracking, and shipping terms.`),
  component: ShippingPolicy,
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
            <h2 className="font-display text-xl font-bold">Shipping Questions?</h2>
            <p className="mt-3 text-muted-foreground">
              Contact us at{" "}
              <a href={`mailto:${SITE.email}`} className="link-line text-foreground">{SITE.email}</a> or call{" "}
              <a href={SITE.phoneHref} className="link-line text-foreground">{SITE.phoneDisplay}</a>.
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

export default function ShippingPolicy() {
  return (
    <LegalLayout title="Shipping Policy" updated="October 15, 2026">
      <Section title="1. Equipment Delivery Overview">
        <p>
          When you purchase a Starfi plan, the necessary equipment (satellite terminal, router,
          mounting hardware, and cabling) is shipped to your provided address. We aim to deliver
          equipment quickly so you can get connected as soon as possible.
        </p>
      </Section>

      <Section title="2. Shipping Timelines">
        <ul className="list-disc space-y-2 pl-6">
          <li>Standard shipping: 3–5 business days</li>
          <li>Express shipping (where available): 1–2 business days</li>
          <li>Business days are Monday through Friday, excluding holidays</li>
          <li>Delivery estimates begin from the date your order is confirmed and payment is processed</li>
        </ul>
      </Section>

      <Section title="3. Shipping Costs">
        <p>
          Shipping costs vary by plan and delivery speed. Residential plans that include professional
          installation (200 Mbps and Max) typically include free standard shipping. Other plans may
          have shipping fees disclosed at the time of order.
        </p>
      </Section>

      <Section title="4. Order Tracking">
        <p>
          Once your equipment has been dispatched, you will receive a shipping confirmation email
          with tracking information. You can track your package using the provided tracking number
          through the carrier's website.
        </p>
        <p>
          If you do not receive tracking information within 2 business days of order confirmation,
          please contact us at{" "}
          <a href={`mailto:${SITE.email}`} className="link-line text-foreground">{SITE.email}</a>.
        </p>
      </Section>

      <Section title="5. Delivery Requirements">
        <p>
          Someone aged 18 or older must be present to sign for the delivery. Ensure your shipping
          address is accurate and accessible. We are not responsible for delays caused by incorrect
          addresses provided by the customer.
        </p>
      </Section>

      <Section title="6. Damaged or Missing Items">
        <p>
          If your equipment arrives damaged or items are missing from the shipment, contact us
          within 48 hours of delivery. We will arrange a replacement at no additional cost. Please
          retain all original packaging and document the damage with photos if possible.
        </p>
      </Section>

      <Section title="7. Shipping Restrictions">
        <p>
          We currently ship to addresses within the contiguous United States. Shipping to Alaska,
          Hawaii, US territories, and international addresses may incur additional costs and longer
          delivery times. Contact us for availability and pricing.
        </p>
      </Section>

      <Section title="8. Professional Installation Coordination">
        <p>
          For plans that include professional installation, our team will contact you to schedule
          an installation appointment after your equipment has been delivered. We recommend
          keeping your equipment in its original packaging until the installation appointment.
        </p>
      </Section>

      <Section title="9. Returns">
        <p>
          If you need to return equipment (for example, after cancelling during the trial period),
          contact us to initiate a return. We will provide a prepaid shipping label. Equipment must
          be returned in its original condition and packaging.
        </p>
      </Section>
    </LegalLayout>
  );
}
