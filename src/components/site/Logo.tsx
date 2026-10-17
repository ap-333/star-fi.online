import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

const LogoMark = () => (
  <svg width="26" height="26" viewBox="0 0 32 20" fill="none" aria-hidden="true" className="shrink-0">
    <path d="M 0 -7 L 2.2 -2 L 7 -2 L 2.7 1 L 4 5 L 0 3 L -4 5 L -2.7 1 L -7 -2 L -2.2 -2 Z" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinejoin="round" opacity="0.6" transform="translate(16, 8)" />
    <path d="M -5 -2 A 7 7 0 0 1 5 -2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" transform="translate(16, 8)" />
    <path d="M -3 -5 A 7.5 7.5 0 0 1 3 -5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7" transform="translate(16, 8)" />
    <circle cx="16" cy="6" r="1.3" fill="currentColor" />
  </svg>
);

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" aria-label={`${SITE.brand} home`} className={`group flex items-center gap-2 ${className}`}>
      <LogoMark />
      <span className="font-display text-sm font-extrabold uppercase tracking-[0.22em]">{SITE.brand}</span>
    </Link>
  );
}
