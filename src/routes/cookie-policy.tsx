import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/site/Bits";
import { SITE, pageHead } from "@/lib/site";

export const Route = createFileRoute("/cookie-policy")({
  head: () => pageHead("/cookie-policy", "Cookie Policy", `Learn about the cookies ${SITE.brand} uses, why we use them, and how to manage your cookie preferences.`),
  component: CookiePolicy,
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
            <h2 className="font-display text-xl font-bold">Manage Your Cookie Preferences</h2>
            <p className="mt-3 text-muted-foreground">
              Most web browsers allow you to control cookies through their settings. If you have
              questions about our use of cookies, contact us at{" "}
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

export default function CookiePolicy() {
  return (
    <LegalLayout title="Cookie Policy" updated="October 15, 2026">
      <Section title="1. What Are Cookies">
        <p>
          Cookies are small text files that are placed on your computer or mobile device when you
          visit a website. They are widely used to make websites work more efficiently, provide a
          better browsing experience, and supply information to the site owners.
        </p>
        <p>
          Cookies allow a website to recognize your device and remember information about your visit,
          such as your preferences and actions. They can be "session" cookies (deleted when you
          close your browser) or "persistent" cookies (remain on your device for a set period).
        </p>
      </Section>

      <Section title="2. How We Use Cookies">
        <p>Star-Fi uses cookies for the following purposes:</p>

        <h3 className="font-display text-lg font-semibold">2.1 Essential Cookies</h3>
        <p>
          These cookies are necessary for the website to function properly. They enable core
          features such as security, accessibility, and session management. The website cannot
          function correctly without these cookies.
        </p>

        <h3 className="font-display text-lg font-semibold">2.2 Performance and Analytics Cookies</h3>
        <p>
          These cookies collect information about how visitors use our website, such as which pages
          are visited most often and whether visitors encounter error messages. We use this
          information to improve our website's performance and user experience.
        </p>

        <h3 className="font-display text-lg font-semibold">2.3 Functional Cookies</h3>
        <p>
          These cookies allow the website to remember choices you make (such as your region or
          language preference) and provide enhanced, more personalized features.
        </p>

        <h3 className="font-display text-lg font-semibold">2.4 Marketing and Advertising Cookies</h3>
        <p>
          We may use cookies to deliver relevant advertising on our website and to measure the
          effectiveness of our marketing campaigns. These cookies may track your browsing activity
          across different websites.
        </p>
      </Section>

      <Section title="3. Types of Cookies We Use">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b">
                <th scope="col" className="py-3 pr-4 font-semibold">Cookie Type</th>
                <th scope="col" className="py-3 pr-4 font-semibold">Purpose</th>
                <th scope="col" className="py-3 font-semibold">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="py-3 pr-4">Session ID</td>
                <td className="py-3 pr-4">Maintains your browsing session</td>
                <td className="py-3">Session</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">Preferences</td>
                <td className="py-3 pr-4">Remembers your display preferences</td>
                <td className="py-3">Persistent (1 year)</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">Analytics</td>
                <td className="py-3 pr-4">Tracks website usage patterns</td>
                <td className="py-3">Persistent (2 years)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="4. Third-Party Cookies">
        <p>
          We may allow third-party service providers to set cookies on our website. These third
          parties include analytics providers (such as Google Analytics) and advertising partners.
          These third parties have their own privacy policies governing their use of cookies.
        </p>
      </Section>

      <Section title="5. Managing Cookies">
        <p>
          Most web browsers allow you to control cookies through their settings preferences. You can
          configure your browser to:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Accept or reject all cookies</li>
          <li>Notify you when a cookie is set</li>
          <li>Delete existing cookies</li>
          <li>Block cookies from specific websites</li>
        </ul>
        <p>
          Please note that disabling cookies may affect the functionality of our website and limit
          your ability to use certain features.
        </p>
      </Section>

      <Section title="6. Do Not Track Signals">
        <p>
          Some browsers offer a "Do Not Track" (DNT) feature that signals to websites that you do
          not wish to have your online activity tracked. Our website does not currently respond to
          DNT signals, as there is no industry-wide standard for DNT compliance.
        </p>
      </Section>

      <Section title="7. Changes to This Policy">
        <p>
          We may update this Cookie Policy from time to time to reflect changes in technology or
          legislation. We will post any changes on this page and update the "Last Updated" date.
        </p>
      </Section>
    </LegalLayout>
  );
}
