import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/site/Bits";
import { SITE, pageHead } from "@/lib/site";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => pageHead("/terms-and-conditions", "Terms and Conditions", `${SITE.brand}'s terms and conditions - service terms, user obligations, acceptable use, and termination.`),
  component: TermsAndConditions,
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
            <h2 className="font-display text-xl font-bold">Questions About These Terms</h2>
            <p className="mt-3 text-muted-foreground">
              If you have questions about these terms, contact us at{" "}
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

export default function TermsAndConditions() {
  return (
    <LegalLayout title="Terms and Conditions" updated="October 15, 2026">
      <Section title="1. Acceptance of Terms">
        <p>
          By accessing or using the Star-Fi website and services, you agree to be bound by these
          Terms and Conditions and all applicable laws and regulations. If you do not agree with
          any of these terms, you are prohibited from using or accessing this site.
        </p>
      </Section>

      <Section title="2. Service Description">
        <p>
          Star-Fi provides satellite internet connectivity services for residential, business, and
          mobile (Roam) applications. Services include:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Residential satellite internet plans with unlimited data</li>
          <li>Roam satellite internet plans for mobile and travel use</li>
          <li>Business satellite internet for farms, remote offices, and temporary sites</li>
          <li>Equipment supply (satellite terminal, router, mounting hardware)</li>
          <li>Professional installation for select plans</li>
        </ul>
      </Section>

      <Section title="3. Service Availability">
        <p>
          Service availability depends on your geographic location, sky visibility, and network
          capacity. Not all locations are serviceable. We will confirm availability at your
          address before any service commitment. Service performance may vary based on weather,
          terrain, and network conditions.
        </p>
      </Section>

      <Section title="4. Plan Terms and Billing">
        <ul className="list-disc space-y-2 pl-6">
          <li>Plans are billed monthly in advance at the rates shown at the time of purchase</li>
          <li>All prices are in US dollars and subject to change with notice</li>
          <li>Each plan includes a 30-day trial period from activation</li>
          <li>Roam plans may be paused using Standby Mode for a reduced monthly fee</li>
          <li>Equipment costs (where applicable) are billed separately from monthly service fees</li>
          <li>Professional installation (included with select plans) is provided at no additional charge</li>
        </ul>
      </Section>

      <Section title="5. User Obligations">
        <p>You agree to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Provide accurate and complete information when placing inquiries or orders</li>
          <li>Use the service in compliance with all applicable laws and regulations</li>
          <li>Not resell, sublease, or redistribute the service without written authorization</li>
          <li>Maintain the equipment in good condition and protect it from damage</li>
          <li>Allow reasonable access to your property for installation and maintenance</li>
          <li>Notify us promptly of any changes to your contact information</li>
          <li>Pay all fees and charges in a timely manner</li>
        </ul>
      </Section>

      <Section title="6. Acceptable Use">
        <p>
          You agree not to use the Star-Fi service for any unlawful purpose or in any manner that
          could damage, disable, or impair the network. Prohibited activities include:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Illegal file sharing, piracy, or copyright infringement</li>
          <li>Transmitting spam, malware, or harmful code</li>
          <li>Unauthorized access to computer networks or systems</li>
          <li>Operating servers or commercial applications not authorized under your plan</li>
          <li>Interference with other customers' service</li>
          <li>Any activity that violates applicable law or regulation</li>
        </ul>
      </Section>

      <Section title="7. Equipment">
        <p>
          Equipment supplied with your service (satellite terminal, router, cabling, and mounting
          hardware) is provided for use with Star-Fi service. Depending on your plan, equipment may
          be owned by Star-Fi or by you. Refer to your service agreement for ownership terms.
        </p>
        <p>
          You are responsible for the care of the equipment. Damage caused by misuse, neglect, or
          unauthorized modification may result in repair or replacement fees.
        </p>
      </Section>

      <Section title="8. Cancellation and Termination">
        <p>
          You may cancel your service at any time. Cancellation requests should be made in writing
          by email or phone. After the 30-day trial period, cancellations take effect at the end
          of the current billing cycle.
        </p>
        <p>
          Star-Fi reserves the right to suspend or terminate service for breach of these terms,
          non-payment, or unacceptable use. If your service is terminated for cause, no refund
          will be issued for the remaining billing period.
        </p>
      </Section>

      <Section title="9. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, Star-Fi shall not be liable for any indirect,
          incidental, special, or consequential damages arising from or related to your use of the
          service. Our total liability for any claim related to the service shall not exceed the
          amount you paid for the service in the three months preceding the claim.
        </p>
      </Section>

      <Section title="10. Changes to Terms">
        <p>
          We reserve the right to modify these terms at any time. Changes will be posted on this
          page with an updated "Last Updated" date. Continued use of the service after changes
          constitutes acceptance of the revised terms.
        </p>
      </Section>
    </LegalLayout>
  );
}
