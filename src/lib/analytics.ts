declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const GOOGLE_ADS_ID = "AW-18386301720";

// Set to "AW-18386301720/<label>" once a "Phone call clicks on your website"
// conversion action exists in Google Ads; until then clicks are sent as events.
export const CALL_CONVERSION_SEND_TO = "";

export function trackCallClick(href: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "phone_call_click", { phone_number: href.replace(/^tel:/, "") });
  if (CALL_CONVERSION_SEND_TO) {
    window.gtag("event", "conversion", { send_to: CALL_CONVERSION_SEND_TO });
  }
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
