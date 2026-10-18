import { useState, type FormEvent } from "react";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

type Kind = "contact" | "availability" | "plan" | "installation" | "business" | "travel";
type Status = "idle" | "loading" | "success" | "error";

const TYPES = ["General question", "Plans & pricing", "Availability", "Installation", "Business connectivity", "Travel connectivity", "Billing", "Technical support"];

export function InquiryForm({
  kind = "contact",
  defaultType,
  plan,
  showType = true,
  messageLabel = "Message",
  messageRequired = true,
  submitLabel = "Send inquiry",
  successTitle = "Thank you for your inquiry!",
  successBody = `We've received your message and will get back to you within 24 hours at the email address you provided. Our team replies personally to every inquiry.`,
}: {
  kind?: Kind; defaultType?: string | undefined; plan?: string | undefined; showType?: boolean; messageLabel?: string; messageRequired?: boolean;
  submitLabel?: string; successTitle?: string; successBody?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const v = (k: string) => String(fd.get(k) ?? "").trim();
    const data = { name: v("name"), email: v("email"), phone: v("phone"), location: v("location"), inquiry_type: v("inquiry_type") || defaultType || null, message: v("message") };
    const errs: { [k: string]: string } = {} as any;
    if (!data.name) errs["name"] = "Please enter your name.";
    else if (data.name.length > 120) errs["name"] = "Name is too long.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) errs["email"] = "Please enter a valid email address.";
    if (data.phone && !/^[+()\d\s.-]{6,25}$/.test(data.phone)) errs["phone"] = "Please enter a valid phone number.";
    if (!data.location) errs["location"] = "Please enter your address, town or postcode.";
    else if (data.location.length > 200) errs["location"] = "Location is too long.";
    if (messageRequired && data.message.length < 5) errs["message"] = "Please add a short message.";
    if (data.message.length > 4000) errs["message"] = "Message is too long (4000 characters max).";
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0] ?? "name";
      (e.currentTarget.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }
    setStatus("loading");
    try {
      const subject = `[${kind}] ${data.inquiry_type ?? "Inquiry"}${plan ? ` - ${plan}` : ""}`;
      const body = [
        `Name: ${data.name}`, `Email: ${data.email}`, data.phone ? `Phone: ${data.phone}` : null, `Location: ${data.location}`,
        data.inquiry_type ? `Inquiry type: ${data.inquiry_type}` : null, plan ? `Plan: ${plan}` : null, "", data.message,
      ].filter((l) => l !== null).join("\n");

      const response = await fetch("https://formsubmit.co/ajax/" + SITE.email, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          location: data.location,
          inquiry_type: data.inquiry_type,
          message: data.message,
          subject: `[${kind}] ${data.inquiry_type ?? "Inquiry"}${plan ? ` - ${plan}` : ""}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        (e.currentTarget as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="border-l-2 border-success py-6 pl-6">
        <p className="font-display text-2xl font-bold">{successTitle}</p>
        <p className="mt-3 max-w-lg text-muted-foreground">{successBody}</p>
        <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Phone size={14} aria-hidden="true" />
          Prefer to call? <a href={SITE.phoneHref} className="link-line text-foreground">{SITE.phoneDisplay}</a>
        </p>
      </div>
    );
  }

  const field = "mt-2 w-full border-0 border-b border-input bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none focus:ring-0";
  const Err = ({ k }: { k: string }) => errors[k] ? <p id={`${k}-err`} className="mt-2 text-sm text-destructive">{errors[k]}</p> : null;
  const aria = (k: string) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-8 md:grid-cols-2">
      <div>
        <label htmlFor="name" className="eyebrow">Full name *</label>
        <input id="name" name="name" autoComplete="name" className={field} {...aria("name")} />
        <Err k="name" />
      </div>
      <div>
        <label htmlFor="email" className="eyebrow">Email *</label>
        <input id="email" name="email" type="email" autoComplete="email" className={field} {...aria("email")} />
        <Err k="email" />
      </div>
      <div>
        <label htmlFor="phone" className="eyebrow">Phone (optional)</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} {...aria("phone")} />
        <Err k="phone" />
      </div>
      <div>
        <label htmlFor="location" className="eyebrow">Address, town or postcode *</label>
        <input id="location" name="location" autoComplete="street-address" className={field} {...aria("location")} />
        <Err k="location" />
      </div>
      {showType && (
        <div className="md:col-span-2">
          <label htmlFor="inquiry_type" className="eyebrow">Inquiry type</label>
          <select id="inquiry_type" name="inquiry_type" defaultValue={defaultType ?? TYPES[0]} className={`${field} [&>option]:bg-background`}>
            {TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
      )}
      <div className="md:col-span-2">
        <label htmlFor="message" className="eyebrow">{messageLabel}{messageRequired ? " *" : " (optional)"}</label>
        <textarea id="message" name="message" rows={4} className={`${field} resize-y`} {...aria("message")} />
        <Err k="message" />
      </div>
      <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:justify-between">
        <div className="text-xs text-muted-foreground">
          <p className="max-w-md">We use your details only to respond to this inquiry.</p>
          <a href={SITE.phoneHref} className="mt-2 inline-flex items-center gap-1.5 text-foreground/80 transition-colors hover:text-foreground">
            <Phone size={12} aria-hidden="true" />
            Or call us at {SITE.phoneDisplay}
          </a>
        </div>
        <button type="submit" disabled={status === "loading"} className="w-full bg-foreground px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-background transition-all hover:bg-foreground/85 disabled:opacity-60 md:w-auto">
          {status === "loading" ? "Sending…" : submitLabel}
        </button>
      </div>
      {status === "error" && (
        <p role="alert" className="text-sm text-destructive md:col-span-2">
          Sorry - we couldn't send your inquiry just now. Please try again in a moment.
        </p>
      )}
    </form>
  );
}
