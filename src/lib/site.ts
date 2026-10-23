export const SITE = {
  brand: "Star-Fi",
  domain: "star-fi.online",
  url: "https://star-fi.online",
  tagline: "Satellite internet, beyond boundaries.",
  email: "contact@star-fi.online",
  phone: "8008918321",
  phoneHref: "tel:+18008918321",
  phoneDisplay: "(800) 891-8321",
  address: "Satellite Internet Services, 1200 Meridian Suite 100, Austin, TX 78701",
  hours: "Monday – Friday, 8 AM – 8 PM CST",
};

export type Plan = {
  id: string;
  group: "Residential" | "Roam";
  name: string;
  audience: string;
  price: string;
  billing: string;
  speed: string;
  data: string;
  features: string[];
  notes: string;
};

const RES_NOTE = "Residential 100 Mbps and 200 Mbps plans limit download speeds to 100 and 200 Mbps respectively, and are only available in select areas. Residential Max users experience maximum available speeds and top Residential network priority.";
const ROAM_NOTE = "Roam 100 GB and 300 GB plans include an allotment of high-speed data, then unlimited low-speed data. International travel, coastal coverage and in-motion use have limitations - see the FAQ. Standby Mode allows emergency messaging and easy reactivation in dead zones for a small monthly fee.";

export const PLANS: Plan[] = [
  {
    id: "residential-100",
    group: "Residential",
    name: "Residential - 100 Mbps",
    audience: "Reliable, affordable home internet service for seamless connectivity.",
    price: "$55",
    billing: "/mo",
    speed: "Up to 100 Mbps download",
    data: "Unlimited data",
    features: ["Unlimited Data", "Good Wi-Fi", "Plug & Play Setup", "Weather Resilient", "30-Day Trial"],
    notes: RES_NOTE,
  },
  {
    id: "residential-200",
    group: "Residential",
    name: "Residential - 200 Mbps",
    audience: "Fast, reliable internet service for everyday home use.",
    price: "$85",
    billing: "/mo",
    speed: "Up to 200 Mbps download",
    data: "Unlimited data",
    features: ["Unlimited Data", "Great Wi-Fi", "Free professional home installation", "Plug & Play Setup", "Weather Resilient", "30-Day Trial"],
    notes: RES_NOTE,
  },
  {
    id: "residential-max",
    group: "Residential",
    name: "Residential - Max",
    audience: "Our best performing home internet service with maximum speeds available.",
    price: "$130",
    billing: "/mo",
    speed: "Up to 400+ Mbps download",
    data: "Unlimited data",
    features: ["Up to 400+ Mbps", "Unlimited Data", "Best Wi-Fi", "Free professional home installation", "Additional kit: Mini terminal for internet on the go", "Top Residential network priority", "30-Day Trial"],
    notes: RES_NOTE,
  },
  {
    id: "roam-100",
    group: "Roam",
    name: "Roam - 100GB",
    audience: "Best for RVs, nomads, campers, and working on the go.",
    price: "$55",
    billing: "/mo",
    speed: "High-speed data, then unlimited low-speed",
    data: "100 GB high-speed data",
    features: ["Plug & Play Setup", "In-motion Use", "Pause Anytime with Standby Mode", "30-Day Trial"],
    notes: ROAM_NOTE,
  },
  {
    id: "roam-300",
    group: "Roam",
    name: "Roam - 300GB",
    audience: "Best for RVs, nomads, campers, and working on the go.",
    price: "$80",
    billing: "/mo",
    speed: "High-speed data, then unlimited low-speed",
    data: "300 GB high-speed data",
    features: ["Plug & Play Setup", "In-motion Use", "Pause Anytime with Standby Mode", "30-Day Trial"],
    notes: ROAM_NOTE,
  },
  {
    id: "roam-unlimited",
    group: "Roam",
    name: "Roam - Unlimited",
    audience: "Best for RVs, nomads, campers, and working on the go.",
    price: "$175",
    billing: "/mo",
    speed: "Maximum available speeds",
    data: "Unlimited data",
    features: ["Plug & Play Setup", "In-motion Use", "Pause Anytime with Standby Mode", "30-Day Trial"],
    notes: ROAM_NOTE,
  },
];

export const NAV = [
  { to: "/plans", label: "Plans" },
  { to: "/residential", label: "Residential" },
  { to: "/business", label: "Business" },
  { to: "/travel", label: "Travel" },
  { to: "/installation", label: "Installation" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
] as const;

export const LEGAL_NAV = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/cookie-policy", label: "Cookie Policy" },
  { to: "/terms-and-conditions", label: "Terms & Conditions" },
  { to: "/refund-policy", label: "Refund Policy" },
  { to: "/disclaimer", label: "Disclaimer" },
  { to: "/shipping-policy", label: "Shipping Policy" },
  { to: "/acceptable-use-policy", label: "Acceptable Use" },
  { to: "/advertising-policy", label: "Advertising Policy" },
] as const;

export function pageHead(path: string, title: string, description: string) {
  const full = `${title} - ${SITE.brand}`;
  const url = `${SITE.url}${path}`;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE.brand },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: full },
      { name: "twitter:description", content: description },
      { name: "geo.region", content: "US" },
      { name: "geo.placename", content: "United States" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
