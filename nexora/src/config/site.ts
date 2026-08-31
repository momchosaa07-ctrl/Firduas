import { brand } from "./brand";

/** Canonical origin. Set NEXT_PUBLIC_SITE_URL per environment. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nexora.example.com"
).replace(/\/$/, "");

export type NavLink = { label: string; href: string };

/**
 * Primary navigation. Hash links point at section ids on the home page;
 * `/`-prefixed links are real routes. Adding a landing page? Add it here.
 */
export const navLinks: NavLink[] = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

/** The two conversion paths used everywhere on the site. */
export const cta = {
  primary: { label: "Get Started", href: "/#contact" },
  secondary: { label: "Book a Free Consultation", href: "/#consultation" },
  work: { label: "View Our Work", href: "/#work" },
} as const;

/** Optional external booking system. Empty = fall back to the contact form. */
export const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL ?? "";

export const footerNav = {
  services: [
    { label: "Website Development", href: "/websites" },
    { label: "Logo Design", href: "/logo-design" },
    { label: "Business Automation", href: "/automation" },
    { label: "Custom Applications", href: "/applications" },
  ],
  company: [
    { label: "About", href: "/#about" },
    { label: "Process", href: "/#process" },
    { label: "Work", href: "/#work" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Contact", href: "/#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Terms & Conditions", href: "/legal/terms" },
    { label: "Cookie Policy", href: "/legal/cookie-policy" },
    { label: "Cancellation Policy", href: "/legal/cancellation-policy" },
    { label: "Refund Policy", href: "/legal/refund-policy" },
  ],
} as const;

export const defaultMeta = {
  title: `${brand.name} — ${brand.tagline}`,
  titleTemplate: `%s | ${brand.name}`,
  description: brand.description,
  keywords: [
    "web design agency",
    "website development",
    "website as a service",
    "logo design",
    "business automation",
    "custom web application",
    "custom mobile application",
    "digital agency",
  ],
} as const;
