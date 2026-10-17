import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import support from "@/assets/support.jpg";
import { InquiryForm } from "@/components/site/InquiryForm";
import { PLANS, SITE, pageHead } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): { plan?: string | undefined; type?: string | undefined } => ({
    plan: typeof s["plan"] === "string" ? (s["plan"] as string) : undefined,
    type: typeof s["type"] === "string" ? (s["type"] as string) : undefined,
  }),
  head: () => pageHead("/contact", "Contact Us", `Contact ${SITE.brand} about satellite internet plans, availability, installation or support. Call ${SITE.phoneDisplay} or email ${SITE.email}.`),
  component: Contact,
});

function Contact() {
  const { plan, type } = Route.useSearch();
  const chosen = PLANS.find((p) => p.id === plan);
  return (
    <>
      <section className="relative flex min-h-[60svh] items-end overflow-hidden">
        <img src={support} alt="A person on a laptop in a cabin at night with mountains through the window" width={1920} height={1088} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[45%_center]" />
        <div className="absolute inset-0 scrim-b" />
        <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-12 pt-32 md:px-10">
          <p className="eyebrow text-foreground/80">Contact us</p>
          <h1 className="display-lg mt-5">Let's talk.</h1>
        </div>
      </section>
      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:grid-cols-12 md:px-10">
        <aside className="space-y-8 md:col-span-4">
          {chosen && <p className="border-l-2 border-foreground pl-4 text-sm">Enquiring about: <strong>{chosen.name}</strong></p>}
          <div>
            <p className="eyebrow">Phone</p>
            <a href={SITE.phoneHref} className="mt-2 flex items-center gap-2 font-display text-xl font-bold text-foreground transition-colors hover:text-foreground/80">
              <Phone size={18} aria-hidden="true" />
              {SITE.phoneDisplay}
            </a>
            <p className="mt-1 text-xs text-muted-foreground">{SITE.hours}</p>
          </div>
          <div>
            <p className="eyebrow">Email</p>
            <a href={`mailto:${SITE.email}`} className="mt-2 block link-line transition-colors hover:text-foreground">{SITE.email}</a>
          </div>
          <div>
            <p className="eyebrow">Website</p>
            <p className="mt-2">{SITE.domain}</p>
          </div>
          <div>
            <p className="eyebrow">Address</p>
            <p className="mt-2 text-sm text-muted-foreground">{SITE.address}</p>
          </div>
        </aside>
        <div className="md:col-span-8">
          <InquiryForm kind={chosen ? "plan" : type === "Travel connectivity" ? "travel" : "contact"} plan={chosen?.name} defaultType={chosen ? "Plans & pricing" : type} />
        </div>
      </section>
    </>
  );
}
