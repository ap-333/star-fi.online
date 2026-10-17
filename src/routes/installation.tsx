import { createFileRoute, Link } from "@tanstack/react-router";
import install from "@/assets/install.jpg";
import rooftop from "@/assets/rooftop.jpg";
import hardware from "@/assets/hardware.jpg";
import { InquiryForm } from "@/components/site/InquiryForm";
import { Faq, SectionLabel } from "@/components/site/Bits";
import { SITE, pageHead } from "@/lib/site";

export const Route = createFileRoute("/installation")({
  head: () => pageHead("/installation", "Installation & Setup", `How ${SITE.brand} satellite internet setup works - availability, plan selection, equipment, installation preparation and getting connected.`),
  component: Installation,
});

const STEPS = [
  { t: "Availability check", us: "We review your address and confirm whether service is available.", you: "Submit your exact location." },
  { t: "Plan selection", us: "We provide a written quote with all fees and conditions.", you: "Choose the plan that suits you." },
  { t: "Equipment", us: "We arrange the agreed equipment for delivery or collection.", you: "Confirm delivery details." },
  { t: "Preparation", us: "We share mounting guidance and site requirements.", you: "Identify a spot with a clear view of the sky and access to power." },
  { t: "Setup", us: "Residential 200 Mbps and Max include free professional home installation. Other plans are plug & play.", you: "Mount the dish (if self-installing) and connect cables." },
  { t: "Connected", us: "We help with activation and first-time troubleshooting.", you: "Power on, connect devices and test." },
];

function Installation() {
  return (
    <>
      <section className="grid min-h-[90svh] md:grid-cols-12">
        <div className="flex flex-col justify-end px-5 pb-14 pt-36 md:col-span-5 md:px-10 md:pb-20">
          <p className="eyebrow">Installation & setup</p>
          <h1 className="display-lg mt-6">Six steps between you and the sky.</h1>
          <p className="mt-6 max-w-md text-muted-foreground">A clear process, with clear responsibilities. Here's what we handle, and what we'll ask of you.</p>
        </div>
        <img src={install} alt="Technician in a harness securing a satellite dish to a roof mount" width={1600} height={1200} fetchPriority="high" className="aspect-[4/3] w-full object-cover md:col-span-7 md:aspect-auto md:h-full" />
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
        <div className="hidden grid-cols-12 border-b pb-4 md:grid">
          <span className="eyebrow col-span-5 col-start-2">Step</span>
          <span className="eyebrow col-span-3">We do</span>
          <span className="eyebrow col-span-3">You do</span>
        </div>
        <ol>
          {STEPS.map((s, i) => (
            <li key={s.t} className="grid gap-4 border-b py-10 md:grid-cols-12">
              <span className="font-display text-5xl font-extrabold text-muted-foreground/50 md:col-span-1">{i + 1}</span>
              <h2 className="font-display text-2xl font-bold md:col-span-4 md:text-3xl">{s.t}</h2>
              <p className="md:col-span-3 md:col-start-7"><span className="eyebrow mr-2 md:hidden">We do</span>{s.us}</p>
              <p className="text-muted-foreground md:col-span-3"><span className="eyebrow mr-2 md:hidden">You do</span>{s.you}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid md:grid-cols-12">
        <img src={rooftop} alt="Satellite dish installed on a pitched slate roof with mountains beyond" width={1920} height={912} loading="lazy" className="aspect-[16/9] w-full object-cover object-[20%_center] md:col-span-8" />
        <div className="flex flex-col justify-center gap-6 bg-card px-5 py-14 md:col-span-4 md:px-10">
          <SectionLabel>Before you start</SectionLabel>
          <ul className="space-y-4 text-sm">
            <li className="border-t pt-4">A clear, unobstructed view of the sky</li>
            <li className="border-t pt-4">Nearby power outlet for the router</li>
            <li className="border-t pt-4">Safe access to the mounting location</li>
            <li className="border-t pt-4">Permission from the property owner if renting</li>
          </ul>
          <img src={hardware} alt="Satellite terminal and router" width={1600} height={1200} loading="lazy" className="mt-4 aspect-[4/3] w-full object-cover" />
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-4">
          <SectionLabel>Installation inquiry</SectionLabel>
          <h2 className="display-lg mt-6">Ask about setup.</h2>
          <p className="mt-6 text-muted-foreground">Not sure about mounting or placement? Describe your property and we'll advise.</p>
        </div>
        <div className="md:col-span-8">
          <InquiryForm kind="installation" defaultType="Installation" messageLabel="About your property" submitLabel="Send installation inquiry" />
        </div>
      </section>

      <section className="border-t bg-card">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:grid-cols-12 md:px-10">
          <h2 className="display-lg md:col-span-4">Setup FAQs.</h2>
          <div className="md:col-span-8">
            <Faq items={[
              { q: "Do you offer professional installation?", a: "Yes - free professional home installation is included with Residential 200 Mbps and Residential Max. Residential 100 Mbps and Roam plans are plug & play, with setup guidance provided." },
              { q: "Where should the dish go?", a: "Somewhere with the widest possible clear view of the sky, away from trees, chimneys and tall buildings." },
              { q: "What if I can't get connected?", a: <>Visit <Link to="/support" className="underline">Support</Link> for troubleshooting or contact our team.</> },
            ]} />
          </div>
        </div>
      </section>
    </>
  );
}
