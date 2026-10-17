import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";

const cols = [
  { title: "Service", links: [["/plans", "Internet Plans"], ["/residential", "Residential"], ["/business", "Business"], ["/travel", "Travel"]] },
  { title: "Get connected", links: [["/coverage", "Coverage & Availability"], ["/installation", "Installation & Setup"], ["/support", "FAQs & Support"]] },
  { title: "Company", links: [["/about", "About Us"], ["/contact", "Contact Us"]] },
] as const;

const legalLinks = [
  ["/privacy-policy", "Privacy Policy"],
  ["/cookie-policy", "Cookie Policy"],
  ["/terms-and-conditions", "Terms & Conditions"],
  ["/refund-policy", "Refund Policy"],
  ["/disclaimer", "Disclaimer"],
  ["/shipping-policy", "Shipping Policy"],
  ["/acceptable-use-policy", "Acceptable Use"],
  ["/advertising-policy", "Advertising Policy"],
] as const;

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:grid-cols-12 md:px-10">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-5 max-w-xs text-sm text-muted-foreground">{SITE.tagline} An independent satellite internet provider.</p>
          <dl className="mt-8 space-y-3 text-sm">
            <div><dt className="sr-only">Phone</dt><dd><a href={SITE.phoneHref} className="link-line transition-colors hover:text-foreground">{SITE.phoneDisplay}</a></dd></div>
            <div><dt className="sr-only">Email</dt><dd><a href={`mailto:${SITE.email}`} className="link-line transition-colors hover:text-foreground">{SITE.email}</a></dd></div>
            <div><dt className="sr-only">Website</dt><dd className="text-muted-foreground">{SITE.domain}</dd></div>
            <div><dt className="sr-only">Hours</dt><dd className="text-muted-foreground">{SITE.hours}</dd></div>
          </dl>
        </div>
        {cols.map((c) => (
          <nav key={c.title} aria-label={c.title} className="md:col-span-2 lg:col-span-2">
            <p className="eyebrow">{c.title}</p>
            <ul className="mt-5 space-y-3 text-sm">
              {c.links.map(([to, label]) => (
                <li key={to}><Link to={to} className="link-line text-foreground/85 transition-colors hover:text-foreground">{label}</Link></li>
              ))}
            </ul>
          </nav>
        ))}
        <div className="md:col-span-2">
          <Link to="/coverage" className="inline-block border border-foreground px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition-all hover:bg-foreground hover:text-background">
            Check Availability
          </Link>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto max-w-[1440px] px-5 py-8 md:px-10">
          <nav aria-label="Legal" className="mb-6">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legalLinks.map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-xs text-muted-foreground transition-colors hover:text-foreground">{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-2 text-xs text-muted-foreground md:flex-row md:justify-between">
            <p>&copy; {new Date().getFullYear()} {SITE.brand}. All rights reserved.</p>
            <p>Service availability, speeds and performance vary by location and conditions.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
