import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb, CallNow } from "@/components/site/Bits";
import { SITE, pageHead } from "@/lib/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => pageHead("/privacy-policy", "Privacy Policy", `${SITE.brand}'s privacy policy explains what data we collect, how we use it, and your rights regarding your personal information.`),
  component: PrivacyPolicy,
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
            <h2 className="font-display text-xl font-bold">Questions About This Policy</h2>
            <p className="mt-3 text-muted-foreground">
              If you have any questions about this Privacy Policy, contact us at{" "}
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

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" updated="October 15, 2026">
      <Section title="1. Introduction">
        <p>
          Star-Fi ("we", "our", or "us") operates star-fi.online and provides satellite internet services
          to residential, business, and mobile customers. This Privacy Policy explains what personal
          information we collect, how we use it, who we share it with, and the rights you have over
          your data.
        </p>
        <p>
          By using our website or services, you agree to the collection and use of information in
          accordance with this policy. If you do not agree with the terms of this Privacy Policy,
          please do not access the site or use our services.
        </p>
      </Section>

      <Section title="2. Information We Collect">
        <h3 className="font-display text-lg font-semibold">2.1 Personal Information</h3>
        <p>We collect personal information that you voluntarily provide when you:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Submit an inquiry or contact form (name, email, phone number, address)</li>
          <li>Check availability at your address</li>
          <li>Request a consultation or quote</li>
          <li>Subscribe to communications from us</li>
          <li>Contact us by phone, email, or other means</li>
        </ul>

        <h3 className="font-display text-lg font-semibold">2.2 Automatically Collected Information</h3>
        <p>When you visit our website, we may automatically collect:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>IP address and browser type</li>
          <li>Device information and operating system</li>
          <li>Pages visited and time spent on pages</li>
          <li>Referring website addresses</li>
          <li>Date and time of access</li>
        </ul>

        <h3 className="font-display text-lg font-semibold">2.3 Location Data</h3>
        <p>
          When you submit your address for availability checking, we use that information solely to
          determine service availability at your location. We do not track your real-time geographic
          location.
        </p>
      </Section>

      <Section title="3. How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Respond to your inquiries and provide customer support</li>
          <li>Check service availability at your address</li>
          <li>Process plan selections and service agreements</li>
          <li>Send service-related communications and updates</li>
          <li>Improve our website, services, and customer experience</li>
          <li>Comply with legal obligations and enforce our terms</li>
          <li>Detect and prevent fraud or unauthorized activity</li>
        </ul>
      </Section>

      <Section title="4. Cookies and Tracking Technologies">
        <p>
          We use cookies and similar tracking technologies to enhance your browsing experience,
          analyze site traffic, and understand user behavior. You can control cookie usage through
          your browser settings. For more details, see our Cookie Policy.
        </p>
      </Section>

      <Section title="5. Third-Party Disclosure">
        <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Service providers who assist in operating our website and services</li>
          <li>Satellite network partners necessary to deliver your service</li>
          <li>Legal authorities when required by law or to protect our rights</li>
          <li>Professional advisors such as lawyers and accountants</li>
        </ul>
      </Section>

      <Section title="6. Data Security">
        <p>
          We implement reasonable security measures to protect your personal information from
          unauthorized access, alteration, disclosure, or destruction. However, no method of
          transmission over the internet or electronic storage is completely secure, and we cannot
          guarantee absolute security.
        </p>
      </Section>

      <Section title="7. Data Retention">
        <p>
          We retain your personal information only as long as necessary to fulfill the purposes
          outlined in this policy, comply with legal obligations, resolve disputes, and enforce our
          agreements. When data is no longer needed, we securely delete or anonymize it.
        </p>
      </Section>

      <Section title="8. Your Rights">
        <p>You have the right to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate or incomplete data</li>
          <li>Request deletion of your personal data</li>
          <li>Object to or restrict processing of your data</li>
          <li>Request portability of your data in a machine-readable format</li>
          <li>Withdraw consent at any time where we rely on consent</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a href={`mailto:${SITE.email}`} className="link-line text-foreground">{SITE.email}</a>.
        </p>
      </Section>

      <Section title="9. Children's Privacy">
        <p>
          Our services are not directed to individuals under the age of 18. We do not knowingly
          collect personal information from children. If we become aware that we have collected
          data from a child, we will take steps to delete it.
        </p>
      </Section>

      <Section title="10. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by
          posting the new policy on this page and updating the "Last Updated" date. We encourage you
          to review this policy periodically.
        </p>
      </Section>
    </LegalLayout>
  );
}
