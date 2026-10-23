import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/site/Bits";
import { SITE, pageHead } from "@/lib/site";

export const Route = createFileRoute("/refund-policy")({
  head: () => pageHead("/refund-policy", "Refund Policy", `${SITE.brand}'s refund policy - eligibility, process, timelines, and exceptions for refunds.`),
  component: RefundPolicy,
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
            <h2 className="font-display text-xl font-bold">Request a Refund</h2>
            <p className="mt-3 text-muted-foreground">
              To request a refund, contact us at{" "}
              <a href={`mailto:${SITE.email}`} className="link-line text-foreground">{SITE.email}</a> or call{" "}
              <a href={SITE.phoneHref} className="link-line text-foreground">{SITE.phoneDisplay}</a>.
              Please include your account details and reason for the request.
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

export default function RefundPolicy() {
  return (
    <LegalLayout title="Refund Policy" updated="October 15, 2026">
      <Section title="1. 30-Day Trial">
        <p>
          Every Star-Fi plan starts with a 30-day trial period from the date of activation. During
          this trial, you may cancel your service and request a full refund if you are not
          satisfied with the performance or experience.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>The trial period begins on the date your service is activated</li>
          <li>You may cancel at any time within the first 30 days</li>
          <li>Full refunds are issued to the original payment method</li>
          <li>No cancellation fees apply during the trial period</li>
        </ul>
      </Section>

      <Section title="2. Refund Eligibility">
        <p>You may be eligible for a refund if:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>You cancel within the 30-day trial period</li>
          <li>Service was not available at your address as confirmed</li>
          <li>Equipment arrives defective or damaged (replacement or refund)</li>
          <li>You were charged in error</li>
          <li>Service is consistently unusable due to factors within our control</li>
        </ul>
        <p>Refunds are generally not available for:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Cancellations after the 30-day trial period</li>
          <li>Performance issues caused by weather, obstructions, or user equipment</li>
          <li>Equipment that has been physically damaged by the customer</li>
          <li>Service interruptions caused by factors outside our reasonable control</li>
        </ul>
      </Section>

      <Section title="3. Equipment Refunds">
        <p>
          If your satellite terminal, router, or other equipment arrives defective or damaged,
          contact us within 14 days of delivery. We will arrange a replacement or refund.
        </p>
        <p>
          Equipment must be returned in its original condition and packaging. Return shipping costs
          are covered by Star-Fi for defective items.
        </p>
      </Section>

      <Section title="4. Refund Process">
        <ol className="list-decimal space-y-3 pl-6">
          <li>Contact our team by phone or email to initiate a refund request</li>
          <li>Provide your account information and reason for the request</li>
          <li>Our team will review your request and respond within 3–5 business days</li>
          <li>If approved, refunds are processed within 5–10 business days</li>
          <li>Your financial institution may take additional time to post the refund</li>
        </ol>
      </Section>

      <Section title="5. Billing Adjustments">
        <p>
          If you are charged incorrectly - for example, if you were charged for a cancelled
          service or billed at the wrong rate - we will issue a refund or credit for the
          difference. Billing errors should be reported within 30 days of the charge.
        </p>
      </Section>

      <Section title="6. Roam Plan Pause and Refunds">
        <p>
          Roam plan customers can pause service at any time using Standby Mode. Paused plans are
          billed a reduced monthly fee. Refunds for unused portions of pre-paid periods are not
          available, but you can reactivate your service at any time.
        </p>
      </Section>

      <Section title="7. Exceptions">
        <p>
          In exceptional circumstances - such as natural disasters, prolonged service outages, or
          other events beyond our control - we may offer credits, extensions, or refunds on a
          case-by-case basis. These are at our discretion.
        </p>
      </Section>

      <Section title="8. Contact for Refunds">
        <p>
          For all refund inquiries, reach out to our team at{" "}
          <a href={`mailto:${SITE.email}`} className="link-line text-foreground">{SITE.email}</a> or{" "}
          <a href={SITE.phoneHref} className="link-line text-foreground">{SITE.phoneDisplay}</a>.
          We aim to resolve all refund requests fairly and promptly.
        </p>
      </Section>
    </LegalLayout>
  );
}
