import { brand, terms } from "./brand";

/**
 * Legal pages.
 *
 * IMPORTANT: none of this text has been written or reviewed by a lawyer, and
 * every page says so at the top. What is here is a structure — the right
 * sections, in the right order, with the commercial terms pulled from
 * src/config/brand.ts so the numbers stay consistent with the rest of the site.
 *
 * Replace `sections` with final drafted text and set `reviewed: true` on that
 * page to drop the disclaimer banner.
 */

export type LegalSection = { heading: string; body: string[] };

export type LegalPage = {
  slug: string;
  title: string;
  description: string;
  /** Flip to true once real, reviewed text is in place. */
  reviewed: boolean;
  intro: string;
  sections: LegalSection[];
};

const c = terms.currencySymbol;
const commitment = terms.website.minimumCommitmentMonths;

/** Business details every legal document needs, and does not yet have. */
export const legalPlaceholders = [
  "Registered company name and legal form",
  "Company registration number",
  "Registered business address",
  "VAT number, if registered",
  "Governing law and jurisdiction",
  "Data protection contact and, where required, a DPO",
  "The full list of processors and sub-processors used",
];

export const legalPages: LegalPage[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    description: `How ${brand.name} collects, uses and protects personal data.`,
    reviewed: false,
    intro:
      "This policy explains what personal data we collect, why we collect it, how long we keep it and what rights you have over it.",
    sections: [
      {
        heading: "Who we are",
        body: [
          `${brand.legalName} operates this website and the services described on it. You can reach us at ${brand.contact.email}.`,
          "Registered company details will be added here once the business registration is complete.",
        ],
      },
      {
        heading: "What we collect",
        body: [
          "Information you give us. When you submit the enquiry form we collect your name, email address, and — where you provide them — your company name, website, the service you are interested in, your budget range, your timeline and the message you write.",
          "Information collected automatically. If analytics is enabled we collect aggregate usage data such as pages visited, approximate location at country level, referring site and device type. No analytics tool is loaded unless it has been explicitly configured.",
          "We do not collect payment card details on this website. Any future payments will be handled by a payment processor that receives those details directly.",
        ],
      },
      {
        heading: "Why we use it",
        body: [
          "To respond to your enquiry and provide a quote — this is necessary to take steps at your request before entering a contract.",
          "To deliver and support the services you buy from us — necessary for the performance of that contract.",
          "To understand how the website is used and improve it — based on our legitimate interest in running an effective website, or your consent where the law requires it.",
        ],
      },
      {
        heading: "Who we share it with",
        body: [
          "We do not sell personal data and we do not share it for advertising.",
          "We use service providers to host this website, deliver email and, where configured, run analytics and process payments. Each one acts on our instructions. The full list of processors will be published here.",
        ],
      },
      {
        heading: "How long we keep it",
        body: [
          "Enquiries that do not become projects are kept for a limited period and then deleted. Records relating to clients are kept for as long as the relationship lasts and afterwards for the period required by tax and accounting law. Exact retention periods will be confirmed here.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "Subject to applicable law, you may request access to the personal data we hold about you, ask us to correct or delete it, object to or restrict how we use it, and request a copy in a portable format. Where we rely on consent, you can withdraw it at any time.",
          `To exercise any of these rights, email ${brand.contact.email}. You also have the right to complain to your local data protection authority.`,
        ],
      },
      {
        heading: "Security",
        body: [
          "We use encryption in transit, access controls and reputable infrastructure providers. No system is perfectly secure, but we take reasonable steps to protect your data and will tell you promptly if a breach affects it.",
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms & Conditions",
    description: `The terms on which ${brand.name} provides its services.`,
    reviewed: false,
    intro:
      "These terms govern the use of this website and the services we provide. A separate written agreement covers each individual project and takes precedence over anything here.",
    sections: [
      {
        heading: "Services",
        body: [
          "We provide website development and management, logo design, business automation and custom application development, as described on this website.",
          "Prices shown on this website are indicative. Prices marked “from” are starting points. The price that applies to you is the one set out in your written proposal or agreement.",
        ],
      },
      {
        heading: "Quotes and agreements",
        body: [
          "No work begins until scope, price and timeline are agreed in writing. Anything outside that agreed scope is quoted separately before it is started.",
        ],
      },
      {
        heading: "The website plan",
        body: [
          `The website plan is a managed service billed at ${c}${terms.website.monthlyPrice} per month with no setup fee. It includes design, build, hosting, SSL, security, basic SEO, maintenance, updates and support.`,
          `A minimum commitment of ${commitment.min} to ${commitment.max} months applies, depending on the scope of the build. The exact term is stated in your agreement.`,
        ],
      },
      {
        heading: "Your responsibilities",
        body: [
          "You are responsible for providing content, approvals and access in reasonable time, and for making sure any content you supply is lawful and does not infringe anyone else's rights.",
        ],
      },
      {
        heading: "Ownership",
        body: [
          terms.ownership.content,
          terms.ownership.domain,
          terms.ownership.website,
        ],
      },
      {
        heading: "Payment",
        body: [
          "Monthly fees are billed in advance. One-time fees are billed as set out in your agreement. Late payment may lead to suspension of the service after notice.",
        ],
      },
      {
        heading: "Liability",
        body: [
          "The limits of our liability will be set out here once these terms have been reviewed by a lawyer. Nothing in any version of these terms will exclude liability that cannot lawfully be excluded.",
        ],
      },
      {
        heading: "Governing law",
        body: [
          "The governing law and the courts with jurisdiction will be specified here once the company registration is finalised.",
        ],
      },
    ],
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    description: "What cookies and similar technologies this website uses.",
    reviewed: false,
    intro:
      "This policy explains the cookies and similar technologies used on this website, and how to control them.",
    sections: [
      {
        heading: "Current position",
        body: [
          "As built, this website sets no advertising or tracking cookies. It uses browser session storage to remember how you arrived at the site, so that an enquiry can be attributed to the right source. That data stays in your browser and is cleared when you close the tab.",
          "No analytics script is loaded unless one has been explicitly configured. If analytics is enabled, this page will be updated to name the provider and the cookies it sets, and a consent mechanism will be added where the law requires one.",
        ],
      },
      {
        heading: "Types of cookies we may use",
        body: [
          "Strictly necessary — required for the website to function. These do not need consent.",
          "Analytics — help us understand how the website is used, in aggregate.",
          "Functional — remember preferences you have set.",
        ],
      },
      {
        heading: "Controlling cookies",
        body: [
          "You can delete and block cookies through your browser settings. Blocking strictly necessary cookies may stop parts of the site working.",
        ],
      },
    ],
  },
  {
    slug: "cancellation-policy",
    title: "Cancellation Policy",
    description: "How to cancel a plan and what happens afterwards.",
    reviewed: false,
    intro:
      "This page explains how cancellation works across our services. The specific terms that apply to you are the ones in your written agreement.",
    sections: [
      {
        heading: "Website plan",
        body: [
          `The website plan carries a minimum commitment of ${commitment.min} to ${commitment.max} months, stated in your agreement. After that it continues month to month.`,
          `To cancel, give us ${terms.website.noticePeriod} notice in writing to ${brand.contact.email}. There is no cancellation fee once the minimum term has been served.`,
        ],
      },
      {
        heading: "What happens after you cancel",
        body: [
          terms.ownership.afterCancellation,
          terms.ownership.domain,
          terms.ownership.content,
        ],
      },
      {
        heading: "Automation and application maintenance",
        body: [
          "Maintenance plans are billed monthly and can be cancelled with notice as set out in your agreement. Ending a maintenance plan does not remove what was built; it ends our monitoring, updates, fixes and support for it.",
        ],
      },
      {
        heading: "One-time projects",
        body: [
          "Logo design, automation setup and application builds are one-time projects. Cancellation partway through is handled on the basis of work completed to that point, as set out in your agreement.",
        ],
      },
      {
        heading: "If we cancel",
        body: [
          "We may end a service with notice — for example for repeated non-payment, or where continuing would require us to break the law. We will give you reasonable notice and help you move your site and data.",
        ],
      },
    ],
  },
  {
    slug: "refund-policy",
    title: "Refund Policy",
    description: "When refunds apply and how to request one.",
    reviewed: false,
    intro:
      "This page explains our approach to refunds. Statutory consumer rights, where they apply, are unaffected by anything on this page.",
    sections: [
      {
        heading: "Monthly plans",
        body: [
          "Monthly fees pay for the service in the month ahead. If you cancel, the service runs to the end of the period you have paid for. Part-months are not normally refunded.",
        ],
      },
      {
        heading: "One-time projects",
        body: [
          "Once work on a one-time project has started, fees cover the work done. If we have not started, we refund in full.",
          "For logo design specifically, if none of the initial concepts is right for you and you would rather not continue, tell us before the revision stage and we will discuss a fair resolution.",
        ],
      },
      {
        heading: "If something goes wrong",
        body: [
          "If we fail to deliver what was agreed, we fix it. Where that is not possible, we will agree a fair refund with you. We would rather resolve a problem than argue about a clause.",
        ],
      },
      {
        heading: "How to request a refund",
        body: [
          `Email ${brand.contact.email} with your details and what happened. We aim to respond within one business day and to resolve refund requests within 14 days.`,
        ],
      },
    ],
  },
];

export const getLegalPage = (slug: string): LegalPage | undefined =>
  legalPages.find((page) => page.slug === slug);
