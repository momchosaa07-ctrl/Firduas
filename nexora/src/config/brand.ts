/**
 * Central brand configuration.
 *
 * Everything identity-related lives here: the name, the tagline, contact
 * details, social links and the legal/commercial terms shown across the site.
 * Nothing else in the codebase hard-codes the business name — rename here and
 * the whole site follows.
 *
 * The name below is a PLACEHOLDER until the real brand is decided.
 */

export const brand = {
  /** Placeholder brand name — replace with the final business name. */
  name: "NEXORA",
  /** Used for the `<title>` suffix and structured data. */
  legalName: "NEXORA",
  tagline: "We build the digital systems behind modern businesses.",
  shortDescription:
    "A digital partner for websites, branding, business automation and custom applications.",
  description:
    "NEXORA builds high-converting websites, brand identity, business automation and custom web and mobile applications for small businesses, startups and service companies.",

  /** Placeholder contact details — replace before launch. */
  contact: {
    email: "hello@nexora.example.com",
    phone: "+00 000 000 000",
    /** Set to false to hide the phone number until a real line exists. */
    showPhone: false,
    location: "Remote — working with clients across Europe",
    /** Business hours shown next to the contact form. */
    hours: "Mon–Fri, 09:00–18:00 CET",
    responseTime: "We reply to every enquiry within one business day.",
  },

  /** Only links with a non-empty `href` are rendered. */
  social: [
    { label: "LinkedIn", href: "" },
    { label: "Instagram", href: "" },
    { label: "X", href: "" },
    { label: "GitHub", href: "" },
  ],

  /**
   * Logo. Text-based placeholder for now.
   * To switch to an image: set `type: "image"` and point `src` at a file in
   * /public. The Logo component handles both — the navbar does not change.
   */
  logo: {
    type: "wordmark" as "wordmark" | "image",
    /** Used when type === "image". */
    src: "/logo.svg",
    /** Rendered dimensions when type === "image". */
    width: 132,
    height: 28,
    alt: "NEXORA",
  },
} as const;

/**
 * Commercial terms surfaced in the FAQ, pricing notes and legal pages.
 * These are the values most likely to change — keep them here, not in copy.
 */
export const terms = {
  currency: "EUR",
  currencySymbol: "€",

  website: {
    monthlyPrice: 120,
    setupFee: 0,
    /** Minimum commitment on the website plan, in months. */
    minimumCommitmentMonths: { min: 3, max: 6 },
    noticePeriod: "30 days",
  },
  logo: {
    oneTimePrice: 50,
    concepts: { min: 2, max: 3 },
    revisionRounds: 2,
  },
  automation: {
    startingSetupPrice: 500,
    monthlyMaintenance: 50,
  },
  application: {
    startingPrice: 1500,
    startingMonthlyMaintenance: 100,
  },

  /**
   * Ownership and cancellation. Placeholder wording — confirm with a lawyer
   * and update here; the FAQ and legal pages read straight from this object.
   */
  ownership: {
    domain:
      "You own your domain. We can register and manage it on your behalf, but it stays registered in your name and transfers with you.",
    content:
      "You own all content you provide — text, images, logos and data — at all times.",
    website:
      "The website is built and operated by us as part of the monthly service. Ownership of the design and code after cancellation is set out in the service agreement — ask us and we will walk you through it before you sign.",
    hosting:
      "Hosting, SSL, backups and monitoring are included in the monthly plan. Nothing extra to buy or configure.",
    backups: "Automated backups are taken regularly and retained off-site.",
    afterCancellation:
      "Your site stays online until the end of the paid period. We hand over your content and data in a standard, portable format, and help point your domain wherever you want it next.",
  },
} as const;

export type Brand = typeof brand;
export type Terms = typeof terms;
