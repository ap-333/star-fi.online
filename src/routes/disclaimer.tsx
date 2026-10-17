import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/site/Bits";
import { SITE, pageHead } from "@/lib/site";

export const Route = createFileRoute("/disclaimer")({
  head: () => pageHead("/disclaimer", "Disclaimer", `Important disclaimers about ${SITE.brand}'s services, website content, and limitations of liability.`),
  component: Disclaimer,
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
            <h2 className="font-display text-xl font-bold">Contact Us</h2>
            <p className="mt-3 text-muted-foreground">
              If you have questions about this disclaimer, contact us at{" "}
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

export default function Disclaimer() {
  return (
    <LegalLayout title="Disclaimer" updated="October 15, 2026">
      <Section title="1. General Disclaimer">
        <p>
          The information provided by Starfi on this website is for general informational purposes
          only. All information on the site is provided in good faith; however, we make no
          representation or warranty of any kind regarding the accuracy, adequacy, validity,
          reliability, availability, or completeness of any information on the site.
        </p>
        <p>
          Your use of the site and your reliance on any information on the site is solely at your
          own risk. Under no circumstances shall we have any liability to you for any loss or
          damage of any kind incurred as a result of the use of the site or reliance on any
          information provided.
        </p>
      </Section>

      <Section title="2. Service Availability and Performance">
        <p>
          Satellite internet service availability and performance vary significantly based on your
          geographic location, terrain, weather conditions, network capacity, and other factors
          beyond our control. Speeds and performance figures cited on this website represent
          maximum or typical values under optimal conditions and are not guaranteed.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Speeds may vary based on location, network congestion, and environmental conditions</li>
          <li>Heavy rain, snow, dense cloud cover, and physical obstructions can reduce performance</li>
          <li>Service availability at your specific address must be confirmed before purchase</li>
          <li>In-motion use for Roam plans may have additional limitations</li>
        </ul>
      </Section>

      <Section title="3. Not Professional Advice">
        <p>
          The content on this website does not constitute professional, legal, financial, or
          technical advice. While we strive to provide accurate and helpful information, you should
          consult with an appropriate professional for advice tailored to your specific situation
          before making purchasing decisions.
        </p>
      </Section>

      <Section title="4. Third-Party Links and Content">
        <p>
          This website may contain links to third-party websites or services that are not owned or
          controlled by Starfi. We have no control over, and assume no responsibility for, the
          content, privacy policies, or practices of any third-party websites or services. The
          inclusion of any link does not imply endorsement by Starfi.
        </p>
      </Section>

      <Section title="5. Accuracy of Information">
        <p>
          While we make every effort to keep the information on this website current and accurate,
          we cannot guarantee that all information is free from errors or omissions. Plan pricing,
          features, availability, and terms are subject to change without notice. We encourage you
          to contact us directly to confirm current details before making decisions based on
          information found on this site.
        </p>
      </Section>

      <Section title="6. Limitation of Liability">
        <p>
          To the fullest extent permitted by applicable law, Starfi shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages, or any loss of profits
          or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill,
          or other intangible losses, resulting from:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Your use or inability to use the website or services</li>
          <li>Any unauthorized access to or use of our servers and/or personal information</li>
          <li>Any interruption or cessation of service</li>
          <li>Any bugs, viruses, or other harmful code transmitted through the website</li>
          <li>Any errors or omissions in any content on the website</li>
        </ul>
      </Section>

      <Section title="7. No Warranty">
        <p>
          This website is provided on an "as is" and "as available" basis. Starfi makes no
          warranties, expressed or implied, regarding the operation of the website, the information
          provided, or the services described, including but not limited to implied warranties of
          merchantability and fitness for a particular purpose.
        </p>
      </Section>

      <Section title="8. Changes to This Disclaimer">
        <p>
          We reserve the right to modify this Disclaimer at any time. Changes will be effective
          immediately upon posting to this page. Your continued use of the website following any
          changes constitutes acceptance of those changes.
        </p>
      </Section>
    </LegalLayout>
  );
}
