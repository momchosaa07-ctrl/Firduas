import { brand, terms } from "./brand";

/* -------------------------------------------------------------------------- */
/*  Hero + trust strip                                                         */
/* -------------------------------------------------------------------------- */

export const hero = {
  eyebrow: "Websites • Branding • Automation • Applications",
  /** Rendered with the closing period in the accent colour. */
  headline: "We Build the Digital Systems Behind Modern Businesses",
  subheadline:
    "From high-converting websites and branding to business automation and custom applications, we build the digital tools businesses need to grow.",
} as const;

export const trustPoints = [
  {
    title: "Custom Built",
    description: "No templates. Designed and built around your business.",
  },
  {
    title: "Fast & Responsive",
    description: "Quick to load, right on every screen size.",
  },
  {
    title: "Managed & Supported",
    description: "We keep what we build running, not just shipped.",
  },
  {
    title: "Business Focused",
    description: "Measured in leads and hours saved, not design awards.",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  Process                                                                    */
/* -------------------------------------------------------------------------- */

export const processSteps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Tell us about your business and what you want to improve. No technical vocabulary required — plain descriptions of the problem are exactly right.",
  },
  {
    number: "02",
    title: "We Plan",
    description:
      "We define the best solution, the scope, the timeline and the price. You get all of it in writing before anything is built.",
  },
  {
    number: "03",
    title: "We Build",
    description:
      "We design, develop and test your solution, showing you progress as it comes together rather than at the end.",
  },
  {
    number: "04",
    title: "We Launch",
    description:
      "Your website, automation or application goes live. We handle the deployment, the domain and everything technical around it.",
  },
  {
    number: "05",
    title: "We Support",
    description:
      "We keep maintaining and improving what we built. Updates, fixes, monitoring and changes as your business moves.",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  Why us                                                                     */
/* -------------------------------------------------------------------------- */

export const benefits = [
  {
    title: "One Digital Partner",
    description:
      "Websites, branding, automation and applications under one roof. One team that understands the whole picture instead of four suppliers blaming each other.",
  },
  {
    title: "No Large Upfront Website Cost",
    description: `Get a professionally built website for ${terms.currencySymbol}${terms.website.monthlyPrice} a month instead of paying a large development fee upfront.`,
  },
  {
    title: "Built for Business",
    description:
      "We start from what the business needs to achieve — more enquiries, less admin, a better customer experience — and design backwards from there.",
  },
  {
    title: "Ongoing Support",
    description:
      "We continue to maintain the systems we build. Nothing gets handed over and forgotten.",
  },
  {
    title: "Scalable",
    description:
      "Start with a website. Add automation when the admin gets heavy. Add an application when you outgrow the tools you rent. Everything fits together.",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  About                                                                      */
/* -------------------------------------------------------------------------- */

export const about = {
  eyebrow: "About",
  headline: "A digital partner, not a supplier.",
  /**
   * Placeholder company story. Deliberately makes no claims about years in
   * business, client counts, revenue, awards or partnerships — fill in with
   * real detail once there is real detail to fill in.
   */
  paragraphs: [
    `${brand.name} is a modern digital partner for businesses that want better technology without unnecessary complexity. We build websites, brand identity, automation and custom applications — and then we keep them running.`,
    "Most businesses do not need more software. They need the right few things, built properly, connected to each other and looked after. That is the work we do: figure out what actually moves the business forward, build that, and stay responsible for it afterwards.",
    "We work the way we would want a supplier to work with us — plain language, fixed expectations, prices agreed in writing before anything starts, and a person who answers when something needs attention.",
  ],
  /**
   * Principles rather than statistics. No fabricated numbers.
   */
  principles: [
    {
      title: "Plain language",
      description: "You should never need a translator to understand a quote.",
    },
    {
      title: "Priced before built",
      description: "Scope and price agreed in writing. No surprise invoices.",
    },
    {
      title: "Built to be maintained",
      description: "We write code we are willing to be responsible for.",
    },
    {
      title: "Long-term by default",
      description: "Our model only works if what we build keeps working.",
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/*  Consultation                                                               */
/* -------------------------------------------------------------------------- */

export const consultation = {
  eyebrow: "No cost, no obligation",
  headline: "Book a Free Consultation",
  description:
    "A short call to understand what you need and whether we are the right fit. You will leave with a clear recommendation and a realistic price range — whether or not you work with us.",
  points: [
    "Best for automation, applications and larger projects",
    "Around 30 minutes",
    "You get a written summary afterwards",
    "No sales pressure and no obligation",
  ],
} as const;
