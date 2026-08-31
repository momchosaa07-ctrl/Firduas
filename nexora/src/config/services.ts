import { terms } from "./brand";
import type { ProductId } from "@/lib/payments";

export type ServiceId = "website" | "logo" | "automation" | "application";

export type Service = {
  id: ServiceId;
  /** Slug for the dedicated landing page at /<slug>. */
  slug: string;
  name: string;
  /** Compact label for chips, pricing cards and tag lists. */
  shortName: string;
  /** One-line summary used in nav, cards and metadata. */
  summary: string;
  description: string;
  /** Headline price, pre-formatted for display. */
  price: string;
  /** Qualifier under the price, e.g. "per month" or "one-time". */
  priceNote: string;
  /** Second price line, e.g. ongoing maintenance. */
  secondaryPrice?: string;
  /** Small print that keeps the pricing honest. */
  priceCaveat?: string;
  /** What the customer gets. */
  includes: string[];
  /** Concrete examples — only used where it helps (automation, apps). */
  examples?: string[];
  cta: string;
  /** Which future Stripe product this CTA maps to. */
  product: ProductId | null;
  /** Highlighted as the core recurring offer. */
  featured?: boolean;
  /** Larger projects lead with a consultation rather than a form. */
  leadWithConsultation?: boolean;
};

const commitment = terms.website.minimumCommitmentMonths;

export const services: Service[] = [
  {
    id: "website",
    slug: "websites",
    name: "Website Development",
    shortName: "Website",
    summary:
      "A professionally designed, fully managed website — without the large upfront cost.",
    description:
      "We design, build, host and look after your website as one monthly service. No development invoice at the start, no hosting bill to chase, no plugin to update yourself. You get a site that looks the part and keeps working.",
    price: `${terms.currencySymbol}${terms.website.monthlyPrice}`,
    priceNote: "per month",
    priceCaveat: `No setup fee. Minimum commitment of ${commitment.min}–${commitment.max} months, then rolling.`,
    includes: [
      "Custom website designed for your business",
      "Responsive on every screen size",
      "Hosting included",
      "SSL certificate and security",
      "Basic SEO setup",
      "Ongoing maintenance",
      "Content and design updates",
      "Technical support",
    ],
    cta: "Get Started",
    product: "website_monthly",
    featured: true,
  },
  {
    id: "logo",
    slug: "logo-design",
    name: "Logo Design",
    shortName: "Logo",
    summary:
      "A clean, distinctive logo and the files to use it everywhere.",
    description:
      "An affordable branding add-on for businesses that need a mark they are not embarrassed to put on an invoice. You get concepts to choose from, revisions on the direction you pick, and every file format you will realistically need.",
    price: `${terms.currencySymbol}${terms.logo.oneTimePrice}`,
    priceNote: "one-time",
    includes: [
      "Custom logo designed for your business",
      `${terms.logo.concepts.min}–${terms.logo.concepts.max} initial concepts`,
      "Revisions on your chosen direction",
      "Final files ready to use",
      "PNG for web and documents",
      "SVG for print and any size",
    ],
    cta: "Order Logo",
    product: "logo_onetime",
  },
  {
    id: "automation",
    slug: "automation",
    name: "Business Automation",
    shortName: "Automation",
    summary:
      "Custom workflows that take the repetitive work off your team's hands.",
    description:
      "Most businesses lose hours every week to copying data between tools, sending the same emails and chasing the same follow-ups. We map those processes and replace them with workflows that run on their own.",
    price: `From ${terms.currencySymbol}${terms.automation.startingSetupPrice}`,
    priceNote: "setup",
    secondaryPrice: `+ ${terms.currencySymbol}${terms.automation.monthlyMaintenance}/month maintenance`,
    priceCaveat:
      "A starting price, not a quote. Final pricing depends on the complexity of the process and the tools involved.",
    includes: [
      "Process mapping and scoping",
      "Custom workflow build",
      "Integration with the tools you already use",
      "Testing before it goes live",
      "Monitoring and alerting",
      "Maintenance, fixes and updates",
      "Technical support",
    ],
    examples: [
      "Lead capture and routing",
      "Email and follow-up sequences",
      "Forms straight into your CRM",
      "Automatic customer notifications",
      "Multi-step workflow automation",
      "AI integrations",
      "Data processing and reporting",
      "Internal business process automation",
    ],
    cta: "Automate My Business",
    product: "automation_setup",
    leadWithConsultation: true,
  },
  {
    id: "application",
    slug: "applications",
    name: "Custom Applications",
    shortName: "Application",
    summary:
      "Web and mobile applications built around how your business actually works.",
    description:
      "When off-the-shelf software does not fit, we build the thing that does — a customer portal, a booking system, an internal tool, a dashboard, or a product of your own. Designed, built, deployed and maintained.",
    price: `From ${terms.currencySymbol}${terms.application.startingPrice.toLocaleString("en-US")}`,
    priceNote: "project",
    secondaryPrice: `+ from ${terms.currencySymbol}${terms.application.startingMonthlyMaintenance}/month maintenance`,
    priceCaveat:
      "A starting price, not a quote. Final pricing depends on scope, complexity and integrations.",
    includes: [
      "Discovery and scoping",
      "Custom development",
      "Responsive interface across devices",
      "Deployment and setup",
      "Ongoing maintenance and support",
    ],
    examples: [
      "Web applications",
      "Mobile applications",
      "Dashboards and reporting",
      "Booking systems",
      "Customer portals",
      "Internal business tools",
      "SaaS products",
      "Custom platforms",
    ],
    cta: "Discuss Your App",
    product: "application_setup",
    leadWithConsultation: true,
  },
];

export const getService = (id: ServiceId): Service => {
  const service = services.find((s) => s.id === id);
  if (!service) throw new Error(`Unknown service: ${id}`);
  return service;
};

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

/**
 * "Which one do I need?" — the comparison strip. Written for a business owner
 * who does not yet know what to ask for.
 */
export const serviceComparison: {
  need: string;
  answer: string;
  serviceId: ServiceId;
}[] = [
  {
    need: "You need an online presence people take seriously",
    answer: "Website",
    serviceId: "website",
  },
  {
    need: "You need to look like an established business",
    answer: "Logo",
    serviceId: "logo",
  },
  {
    need: "You are losing hours to repetitive manual work",
    answer: "Automation",
    serviceId: "automation",
  },
  {
    need: "You need a digital product or internal tool of your own",
    answer: "Application",
    serviceId: "application",
  },
];
