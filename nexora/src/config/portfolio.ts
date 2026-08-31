import type { ServiceId } from "./services";

/**
 * Portfolio and case studies.
 *
 * IMPORTANT: every entry below is a clearly-labelled PLACEHOLDER. No client is
 * named, no result is claimed and no logo is used, because there is nothing
 * real to show yet. Replace the array as real projects ship — the components
 * read from this file only, so nothing else needs to change.
 *
 * Set `placeholder: false` on a project once it describes real work; the UI
 * drops the "Sample project" label and starts linking the case study.
 */

export type PortfolioCategory = "Websites" | "Branding" | "Automation" | "Applications";

export const portfolioCategories: PortfolioCategory[] = [
  "Websites",
  "Branding",
  "Automation",
  "Applications",
];

export type CaseStudy = {
  /** The problem the customer came with. */
  challenge: string;
  /** What we built. */
  solution: string;
  /**
   * What improved. Keep this qualitative until a real, measured result exists —
   * never invent a percentage.
   */
  result: string;
};

export type Project = {
  slug: string;
  name: string;
  category: PortfolioCategory;
  /** Sector rather than a client name, until real clients agree to be named. */
  sector: string;
  description: string;
  /** Which of our services the project used. */
  services: ServiceId[];
  /** True while this is illustrative rather than delivered work. */
  placeholder: boolean;
  /**
   * Optional image in /public. When absent the card renders a generated
   * gradient panel instead of shipping a stock photo.
   */
  image?: string;
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "service-business-website",
    name: "Service Business Website",
    category: "Websites",
    sector: "Local services",
    description:
      "A managed marketing site for a local service business: clear offer, service pages, and an enquiry form that lands straight in the owner's inbox.",
    services: ["website"],
    placeholder: true,
    caseStudy: {
      challenge:
        "Placeholder — describe the situation the business was in before the project.",
      solution:
        "Placeholder — describe what was designed and built, and the decisions behind it.",
      result:
        "Placeholder — describe what changed for the business. No figures until a real one is measured.",
    },
  },
  {
    slug: "restaurant-ordering-site",
    name: "Restaurant Ordering Site",
    category: "Websites",
    sector: "Hospitality",
    description:
      "A multilingual menu and ordering site with the full menu managed from one place, so prices change everywhere at once.",
    services: ["website"],
    placeholder: true,
    caseStudy: {
      challenge: "Placeholder — the problem this project set out to solve.",
      solution: "Placeholder — what we built.",
      result: "Placeholder — what improved.",
    },
  },
  {
    slug: "trade-brand-identity",
    name: "Trade Business Identity",
    category: "Branding",
    sector: "Construction & trades",
    description:
      "A wordmark and icon set that reads clearly on a van, an invoice and a phone screen, delivered in every format the business needs.",
    services: ["logo"],
    placeholder: true,
  },
  {
    slug: "studio-brand-refresh",
    name: "Studio Brand Refresh",
    category: "Branding",
    sector: "Fitness & wellness",
    description:
      "A refreshed mark and colour direction for a studio outgrowing its original identity, with print and web files.",
    services: ["logo", "website"],
    placeholder: true,
  },
  {
    slug: "lead-routing-automation",
    name: "Lead Routing Automation",
    category: "Automation",
    sector: "Professional services",
    description:
      "Enquiries from the website, inbox and phone form arrive in one place, get qualified automatically and reach the right person with a follow-up already scheduled.",
    services: ["automation"],
    placeholder: true,
    caseStudy: {
      challenge: "Placeholder — the manual process that was costing time.",
      solution: "Placeholder — the workflow that replaced it.",
      result: "Placeholder — the time recovered, once measured.",
    },
  },
  {
    slug: "order-processing-workflow",
    name: "Order Processing Workflow",
    category: "Automation",
    sector: "E-commerce",
    description:
      "Orders, stock updates, supplier notifications and customer emails handled end to end, with alerts when something needs a human.",
    services: ["automation"],
    placeholder: true,
  },
  {
    slug: "client-portal",
    name: "Client Portal",
    category: "Applications",
    sector: "B2B services",
    description:
      "A secure portal where customers see their projects, documents and invoices, replacing a shared inbox and a spreadsheet.",
    services: ["application", "website"],
    placeholder: true,
    caseStudy: {
      challenge: "Placeholder — how the business ran before the portal.",
      solution: "Placeholder — what the application does.",
      result: "Placeholder — the operational change.",
    },
  },
  {
    slug: "booking-platform",
    name: "Booking Platform",
    category: "Applications",
    sector: "Appointments & scheduling",
    description:
      "A booking system with availability rules, automatic reminders and a staff dashboard, on web and mobile.",
    services: ["application", "automation"],
    placeholder: true,
  },
];

export const getProject = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

/** Only projects with a case study get a detail page. */
export const projectsWithCaseStudies = (): Project[] =>
  projects.filter((p) => p.caseStudy);

/* -------------------------------------------------------------------------- */
/*  Testimonials                                                               */
/* -------------------------------------------------------------------------- */

/**
 * PLACEHOLDERS. Nothing here is a real quote from a real customer, and the UI
 * says so on every card. Replace with real, attributable quotes — and set
 * `placeholder: false` — before this section claims anything.
 */
export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  serviceId: ServiceId;
  placeholder: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "This is a placeholder for a customer quote about the website service. Real quotes will replace it once clients have given permission to publish them.",
    author: "Client name",
    role: "Owner, local business",
    serviceId: "website",
    placeholder: true,
  },
  {
    quote:
      "This is a placeholder for a customer quote about an automation project — what the manual process used to cost, and what changed.",
    author: "Client name",
    role: "Operations lead",
    serviceId: "automation",
    placeholder: true,
  },
  {
    quote:
      "This is a placeholder for a customer quote about a custom application — what the business could do afterwards that it could not before.",
    author: "Client name",
    role: "Founder, startup",
    serviceId: "application",
    placeholder: true,
  },
];

/** Hide the section entirely once you would rather show nothing than a placeholder. */
export const showTestimonials = true;
