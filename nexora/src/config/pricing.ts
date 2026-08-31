import { terms } from "./brand";
import { services, type ServiceId } from "./services";
import type { ProductId } from "@/lib/payments";

export type PricingPlan = {
  id: ServiceId;
  name: string;
  price: string;
  priceNote: string;
  secondaryPrice?: string;
  caption: string;
  features: string[];
  cta: string;
  product: ProductId | null;
  featured?: boolean;
};

/**
 * Pricing cards are derived from the service data so the two sections can
 * never drift apart. Only the shorter feature list is specific to pricing.
 */
const pricingFeatures: Record<ServiceId, string[]> = {
  website: [
    "Custom website",
    "Hosting",
    "SSL",
    "Basic SEO",
    "Maintenance",
    "Updates",
    "Support",
  ],
  logo: ["Custom logo", "Concepts", "Revisions", "PNG files", "SVG files"],
  automation: [
    "Custom workflow",
    "Integration with your tools",
    "Setup and configuration",
    "Testing",
    "Ongoing maintenance",
  ],
  application: [
    "Custom development",
    "Responsive interface",
    "Deployment",
    "Maintenance",
  ],
};

const captions: Record<ServiceId, string> = {
  website: "The core plan. Everything you need to be online, in one monthly fee.",
  logo: "A one-off branding add-on. Pairs with any plan.",
  automation: "Scoped to your process. The starting price covers a first workflow.",
  application: "Scoped to your project. We quote after a discovery call.",
};

export const pricingPlans: PricingPlan[] = services.map((service) => ({
  id: service.id,
  name: service.shortName,
  price: service.price,
  priceNote: service.priceNote,
  ...(service.secondaryPrice ? { secondaryPrice: service.secondaryPrice } : {}),
  caption: captions[service.id],
  features: pricingFeatures[service.id],
  cta: service.cta,
  product: service.product,
  ...(service.featured ? { featured: true as const } : {}),
}));

export const pricingNote = `All prices in ${terms.currency}, excluding VAT where applicable. "From" prices are starting points — we confirm the final figure in writing before any work begins.`;

/* -------------------------------------------------------------------------- */
/*  Bundles                                                                    */
/* -------------------------------------------------------------------------- */

export type Bundle = {
  id: string;
  name: string;
  /** The services included, by id — used to render the composition. */
  includes: ServiceId[];
  price: string;
  priceNote?: string;
  description: string;
  cta: string;
  featured?: boolean;
};

export const bundles: Bundle[] = [
  {
    id: "business-starter",
    name: "Business Starter",
    includes: ["website", "logo"],
    price: `${terms.currencySymbol}${terms.website.monthlyPrice}/month + ${terms.currencySymbol}${terms.logo.oneTimePrice} one-time`,
    description:
      "Everything a new or rebranding business needs to look established: a managed website and a logo to put on it.",
    cta: "Build My Business",
  },
  {
    id: "digital-growth",
    name: "Digital Growth",
    includes: ["website", "automation"],
    price: `${terms.currencySymbol}${terms.website.monthlyPrice}/month + automation from ${terms.currencySymbol}${terms.automation.startingSetupPrice}`,
    priceNote: `+ ${terms.currencySymbol}${terms.automation.monthlyMaintenance}/month automation maintenance`,
    description:
      "A website that brings leads in, and automation that handles them without anyone retyping a thing.",
    cta: "Grow My Business",
    featured: true,
  },
  {
    id: "complete-digital",
    name: "Complete Digital",
    includes: ["website", "logo", "automation", "application"],
    price: "Custom pricing",
    description:
      "The full stack: brand, website, automated operations and a custom application. Scoped and priced around your business.",
    cta: "Build My Digital System",
  },
];

export const bundlesNote =
  "Bundles are a starting point, not a fixed package. Mix the services you need — we price the combination.";
