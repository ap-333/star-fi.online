import { createFileRoute } from "@tanstack/react-router";
import coverage from "@/assets/coverage.jpg";
import { InquiryForm } from "@/components/site/InquiryForm";
import { SITE, pageHead } from "@/lib/site";

export const Route = createFileRoute("/coverage")({
  head: () => pageHead("/coverage", "Coverage & Availability", `Check whether ${SITE.brand} satellite internet is available at your address. Our team reviews every request and confirms personally.`),
  component: Coverage,
});

function Coverage() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <img src={coverage} alt="Star trails circling above a remote mountain valley at night" width={1920} height={1088} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative mx-auto grid max-w-[1440px] gap-12 px-5 pb-20 pt-36 md:grid-cols-12 md:px-10 md:pt-44">
        <div className="md:col-span-5">
          <p className="eyebrow text-foreground/80">Coverage & availability</p>
          <h1 className="display-lg mt-6">Check availability at your address.</h1>
          <p className="mt-6 max-w-md text-foreground/85">
            Send us your location and we'll review it. Availability depends on your exact position, sky visibility and network capacity - so a person on our team confirms every request.
          </p>
          <ol className="mt-10 space-y-4 text-sm">
            {["Submit your address or postcode", "We review coverage for your location", "You receive a reply by email with next steps"].map((t, i) => (
              <li key={t} className="grid grid-cols-[2.5rem_1fr] border-t pt-4"><span className="font-mono text-muted-foreground">0{i + 1}</span>{t}</li>
            ))}
          </ol>
          <p className="mt-8 text-xs text-muted-foreground">This form does not perform an instant automated lookup.</p>
        </div>
        <div className="border bg-background/80 p-6 backdrop-blur-md md:col-span-7 md:p-10">
          <InquiryForm
            kind="availability"
            showType={false}
            defaultType="Availability"
            messageLabel="Anything we should know (property type, obstructions)"
            messageRequired={false}
            submitLabel="Check availability"
            successTitle="Request received - we'll confirm availability."
            successBody="We'll review your location and reply by email. No result is shown here because every address is checked by our team."
          />
        </div>
      </div>
    </section>
  );
}
