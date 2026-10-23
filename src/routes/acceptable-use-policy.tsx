import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/site/Bits";
import { SITE, pageHead } from "@/lib/site";

export const Route = createFileRoute("/acceptable-use-policy")({
  head: () => pageHead("/acceptable-use-policy", "Acceptable Use Policy", `${SITE.brand}'s acceptable use policy - proper service usage, prohibited activities, and enforcement.`),
  component: AcceptableUsePolicy,
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
            <h2 className="font-display text-xl font-bold">Report Abuse</h2>
            <p className="mt-3 text-muted-foreground">
              To report a violation of this policy, contact us at{" "}
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

export default function AcceptableUsePolicy() {
  return (
    <LegalLayout title="Acceptable Use Policy" updated="October 15, 2026">
      <Section title="1. Purpose">
        <p>
          This Acceptable Use Policy outlines the rules and guidelines for using Star-Fi's satellite
          internet services. By using our services, you agree to comply with this policy. We are
          committed to providing reliable, high-quality service to all customers, and this policy
          helps ensure fair and responsible use of our network.
        </p>
      </Section>

      <Section title="2. Acceptable Use">
        <p>You may use Star-Fi services for:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Personal internet browsing, email, and communication</li>
          <li>Video streaming, music streaming, and content consumption</li>
          <li>Remote work, teleconferencing, and online collaboration</li>
          <li>Online education and research</li>
          <li>Smart home devices and IoT applications</li>
          <li>Business operations (under a Business plan)</li>
          <li>Mobile connectivity during travel (under a Roam plan)</li>
        </ul>
      </Section>

      <Section title="3. Prohibited Activities">
        <p>You may not use Star-Fi services for any of the following:</p>

        <h3 className="font-display text-lg font-semibold">3.1 Illegal Activities</h3>
        <ul className="list-disc space-y-2 pl-6">
          <li>Any activity that violates local, state, federal, or international law</li>
          <li>Distribution of illegal content, including child exploitation material</li>
          <li>Fraud, phishing, or identity theft</li>
          <li>Copyright infringement, piracy, or unauthorized distribution of protected content</li>
        </ul>

        <h3 className="font-display text-lg font-semibold">3.2 Network Abuse</h3>
        <ul className="list-disc space-y-2 pl-6">
          <li>Launching denial-of-service (DoS) or distributed denial-of-service (DDoS) attacks</li>
          <li>Port scanning, network probing, or vulnerability scanning without authorization</li>
          <li>Unauthorized access to computer systems, networks, or accounts</li>
          <li>Operating botnets, command-and-control servers, or similar infrastructure</li>
          <li>Interference with or disruption of other customers' service</li>
        </ul>

        <h3 className="font-display text-lg font-semibold">3.3 Harmful Content and Conduct</h3>
        <ul className="list-disc space-y-2 pl-6">
          <li>Transmitting spam, unsolicited bulk email, or commercial solicitations</li>
          <li>Distribution of malware, viruses, ransomware, or other harmful code</li>
          <li>Harassment, threats, or hate speech directed at individuals or groups</li>
          <li>Distribution of content that promotes violence or terrorism</li>
        </ul>

        <h3 className="font-display text-lg font-semibold">3.4 Commercial Use</h3>
        <ul className="list-disc space-y-2 pl-6">
          <li>Operating commercial servers or hosting services under a Residential plan</li>
          <li>Reselling, subleasing, or redistributing Star-Fi service to third parties</li>
          <li>Running call centers, data centers, or other high-capacity commercial operations without a Business plan</li>
        </ul>
      </Section>

      <Section title="4. Network Management">
        <p>
          Star-Fi employs network management practices to ensure fair access and optimal performance
          for all customers. These may include:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Traffic prioritization during peak hours</li>
          <li>Temporary bandwidth reduction for customers who consistently exceed normal usage patterns</li>
          <li>Blocking of malicious traffic or known threats</li>
        </ul>
        <p>
          We will notify customers of significant network management practices that may affect
          their service.
        </p>
      </Section>

      <Section title="5. Roam Plan Specific Rules">
        <p>
          Roam plans are designed for mobile and travel use. The following additional rules apply:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Service is limited to supported geographic regions</li>
          <li>In-motion use requires compatible equipment and may have additional limitations</li>
          <li>International travel coverage is limited and varies by region</li>
          <li>Coastal and maritime coverage may be restricted</li>
          <li>Standby Mode should be used when not actively using the service</li>
        </ul>
      </Section>

      <Section title="6. Enforcement">
        <p>
          Violations of this Acceptable Use Policy may result in one or more of the following
          actions, depending on the severity and frequency of the violation:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Warning notification by email or phone</li>
          <li>Temporary service suspension</li>
          <li>Bandwidth throttling or restriction</li>
          <li>Termination of service without refund</li>
          <li>Referral to law enforcement for illegal activities</li>
        </ul>
      </Section>

      <Section title="7. Reporting Violations">
        <p>
          If you become aware of a violation of this policy, report it to us at{" "}
          <a href={`mailto:${SITE.email}`} className="link-line text-foreground">{SITE.email}</a>.
          We take all reports seriously and will investigate promptly.
        </p>
      </Section>

      <Section title="8. Changes to This Policy">
        <p>
          We may update this Acceptable Use Policy from time to time. Changes will be posted on
          this page with an updated "Last Updated" date. Continued use of Star-Fi services after
          changes constitutes acceptance of the revised policy.
        </p>
      </Section>
    </LegalLayout>
  );
}
