import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function MobileCallButton() {
  return (
    <a
      href={SITE.phoneHref}
      className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background shadow-lg transition-transform hover:scale-105 md:hidden"
      aria-label={`Call ${SITE.phoneDisplay}`}
    >
      <Phone size={22} aria-hidden="true" />
    </a>
  );
}
