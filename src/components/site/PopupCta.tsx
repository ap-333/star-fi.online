import { useEffect, useState } from "react";
import { Phone, X } from "lucide-react";
import { SITE } from "@/lib/site";

const SESSION_KEY = "starfi-popup-shown";
const DELAY_MS = 1500;

function seenThisSession() {
  try {
    return sessionStorage.getItem(SESSION_KEY) !== null;
  } catch {
    return false;
  }
}

function markSeen() {
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    // storage unavailable (private mode); popup may show again on reload
  }
}

export function PopupCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (seenThisSession()) return;
    const timer = setTimeout(() => {
      markSeen();
      setVisible(true);
    }, DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const dismiss = () => setVisible(false);

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" onClick={dismiss}>
      <div
        className="relative w-full max-w-md border bg-card p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Call to action"
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close popup"
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center text-muted-foreground transition-colors hover:text-foreground"
        >
          <X size={18} />
        </button>
        <p className="eyebrow">Get Connected in Minutes</p>
        <h2 className="mt-4 font-display text-2xl font-bold leading-tight">
          Ready to get online?
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Call us now and we'll help you find the right plan for your location. No wait times - just real answers from real people.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <a
            href={SITE.phoneHref}
            className="flex items-center justify-center gap-2 bg-foreground px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-background transition-all hover:bg-foreground/85"
          >
            <Phone size={16} aria-hidden="true" />
            Call {SITE.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={dismiss}
            className="border border-foreground/50 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-foreground hover:text-background"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
}
