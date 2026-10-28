declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const GOOGLE_ADS_ID = "AW-18386301720";
export const CONVERSION_SEND_TO = "AW-18386301720/ivBFCLCpqKcdEJjmor9E";

function transactionId() {
  try {
    return crypto.randomUUID();
  } catch {
    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }
}

export function trackConversion(source: "phone_call" | "form_submit") {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", {
    send_to: CONVERSION_SEND_TO,
    transaction_id: transactionId(),
    conversion_source: source,
  });
}

export function trackCallClick(href: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "phone_call_click", { phone_number: href.replace(/^tel:/, "") });
  trackConversion("phone_call");
}

export function installCallTracking() {
  document.addEventListener(
    "click",
    (e) => {
      const link = (e.target as Element | null)?.closest?.('a[href^="tel:"]');
      if (link) trackCallClick(link.getAttribute("href") ?? "");
    },
    { capture: true },
  );
}
