import { brand, terms } from "./brand";
import type { ServiceId } from "./services";

export type FaqItem = { question: string; answer: string };
export type FaqGroup = {
  id: ServiceId | "general";
  label: string;
  items: FaqItem[];
};

const c = terms.currencySymbol;
const commitment = terms.website.minimumCommitmentMonths;

export const faqGroups: FaqGroup[] = [
  {
    id: "website",
    label: "Website",
    items: [
      {
        question: `How does the ${c}${terms.website.monthlyPrice}/month website plan work?`,
        answer: `You pay one monthly fee and we handle the whole website: design, build, hosting, security, maintenance and support. Instead of a large invoice at the start and a hosting bill afterwards, it is a single predictable cost. We build the site, put it live, and keep looking after it for as long as you are with us.`,
      },
      {
        question: "Is there a setup fee?",
        answer:
          terms.website.setupFee === 0
            ? "No. There is no setup fee and no upfront development cost. The monthly fee starts when your site goes live."
            : `Yes — a one-time setup fee of ${c}${terms.website.setupFee}.`,
      },
      {
        question: "What is included?",
        answer:
          "A custom-designed responsive website, hosting, SSL and security, basic SEO setup, ongoing maintenance, content and design updates, and technical support. Everything needed to keep the site online and current is part of the plan.",
      },
      {
        question: "Is hosting included?",
        answer:
          terms.ownership.hosting +
          " There is no separate hosting invoice and nothing for you to configure.",
      },
      {
        question: "Do I need my own domain?",
        answer:
          "You need a domain, but you do not need to have one already. If you have one we point it at the new site. If you do not, we register one for you in your name.",
      },
      {
        question: "Who owns the domain?",
        answer: terms.ownership.domain,
      },
      {
        question: "Who owns the website?",
        answer: terms.ownership.website + " " + terms.ownership.content,
      },
      {
        question: "What happens if I cancel?",
        answer: terms.ownership.afterCancellation,
      },
      {
        question: "Is there a minimum commitment?",
        answer: `Yes — a minimum commitment of ${commitment.min} to ${commitment.max} months depending on the scope of the build, then the plan continues month to month with ${terms.website.noticePeriod} notice. The exact term is stated in your agreement before you sign anything.`,
      },
      {
        question: "Can I request changes after launch?",
        answer:
          "Yes. Content edits, design tweaks and new sections are part of the plan — that is the point of a managed service. Substantially new functionality is scoped and quoted separately, and we tell you which category a request falls into before doing the work.",
      },
    ],
  },
  {
    id: "automation",
    label: "Automation",
    items: [
      {
        question: "What can you automate?",
        answer:
          "Anything repetitive that follows rules: lead capture and routing, email and follow-up sequences, form submissions into your CRM, customer notifications, invoicing steps, data entry between systems, reporting, and multi-step internal processes. If someone on your team does it the same way every time, it is a candidate.",
      },
      {
        question: "How much does automation cost?",
        answer: `Setup starts at ${c}${terms.automation.startingSetupPrice}, with ${c}${terms.automation.monthlyMaintenance}/month for ongoing maintenance. That is a starting point, not a quote — a single-step workflow and a process spanning five systems are very different jobs. We scope your process first and give you a fixed price in writing before starting.`,
      },
      {
        question: "Why is there a monthly maintenance fee?",
        answer:
          "Because automations run against systems that change. Tools update their APIs, plans change, credentials expire. The maintenance fee covers monitoring, fixes when something upstream breaks, updates and support — so the automation keeps working rather than quietly failing.",
      },
      {
        question: "Can you integrate AI?",
        answer:
          "Yes, where it genuinely helps — classifying and routing enquiries, drafting replies for a human to approve, summarising documents, extracting data from unstructured text. We use it where it earns its place, not as a feature to advertise.",
      },
      {
        question: "Can you connect my CRM and other tools?",
        answer:
          "In most cases, yes. Mainstream CRMs, email platforms, spreadsheets, accounting tools, form builders, calendars and messaging apps generally connect either directly or through an integration platform. Tell us what you use and we will confirm before you commit to anything.",
      },
    ],
  },
  {
    id: "application",
    label: "Applications",
    items: [
      {
        question: "What applications can you build?",
        answer:
          "Web applications, mobile applications, dashboards, booking systems, customer portals, internal business tools, SaaS products and custom platforms. Typically these replace a spreadsheet, a shared inbox or software that almost fits.",
      },
      {
        question: `Why do applications start at ${c}${terms.application.startingPrice.toLocaleString("en-US")}?`,
        answer: `Because even a small application is real software: discovery, design, development, testing, deployment and security. ${c}${terms.application.startingPrice.toLocaleString("en-US")} reflects the minimum realistic scope for something we are willing to put our name on and support afterwards. Larger applications cost more, and we tell you the figure before we start.`,
      },
      {
        question: "How long does development take?",
        answer:
          "It depends entirely on scope. A focused internal tool is a matter of weeks; a full platform runs longer. You get a timeline as part of the written scope, and we tell you if anything threatens it rather than letting a deadline pass quietly.",
      },
      {
        question: "What does maintenance include?",
        answer: `From ${c}${terms.application.startingMonthlyMaintenance}/month, maintenance covers hosting and infrastructure, monitoring, security updates, dependency updates, bug fixes and technical support. Ongoing feature development is quoted separately.`,
      },
    ],
  },
  {
    id: "general",
    label: "General",
    items: [
      {
        question: "How do I get started?",
        answer:
          "Send us the enquiry form or book a free consultation. We will ask a few questions about your business, recommend an approach, and give you a scope and price in writing. Nothing is committed until you agree to that.",
      },
      {
        question: "How long does a project take?",
        answer:
          "A website typically goes live in a small number of weeks once we have your content. A logo is faster. Automation depends on how many systems are involved, and applications depend on scope. Every project gets a timeline in writing before it starts.",
      },
      {
        question: "Can I combine multiple services?",
        answer:
          "Yes, and most clients do. A website plus a logo, or a website plus automation, is a common starting point. See the bundles section — and note that bundles are a starting point, not a fixed package. We price whatever combination you actually need.",
      },
      {
        question: "Do you work with international clients?",
        answer: `Yes. ${brand.name} works remotely and takes clients across Europe and beyond. Communication is in English, and we work around your time zone for calls.`,
      },
    ],
  },
];

/** Flattened list, used for FAQPage structured data. */
export const allFaqItems: FaqItem[] = faqGroups.flatMap((g) => g.items);
