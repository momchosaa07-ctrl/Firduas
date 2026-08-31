/** Options for the qualified lead form. Kept as data so the form, the API
 *  route and any future CRM mapping all read from the same list. */

export const serviceOptions = [
  "Website",
  "Logo Design",
  "Automation",
  "Web Application",
  "Mobile Application",
  "Multiple Services",
  "Not Sure",
] as const;

export const budgetOptions = [
  "Under €500",
  "€500–€1,500",
  "€1,500–€3,000",
  "€3,000–€5,000",
  "€5,000+",
  "Not Sure",
] as const;

export const timelineOptions = [
  "ASAP",
  "1–2 weeks",
  "1 month",
  "2–3 months",
  "Flexible",
] as const;

export type ServiceOption = (typeof serviceOptions)[number];
export type BudgetOption = (typeof budgetOptions)[number];
export type TimelineOption = (typeof timelineOptions)[number];

export type LeadFormValues = {
  name: string;
  email: string;
  company: string;
  website: string;
  service: ServiceOption | "";
  budget: BudgetOption | "";
  timeline: TimelineOption | "";
  message: string;
};

export const emptyLead: LeadFormValues = {
  name: "",
  email: "",
  company: "",
  website: "",
  service: "",
  budget: "",
  timeline: "",
  message: "",
};

export type LeadErrors = Partial<Record<keyof LeadFormValues, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Shared by the client form and the API route — one definition of "valid". */
export function validateLead(values: LeadFormValues): LeadErrors {
  const errors: LeadErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please tell us your name.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (!values.email.trim()) {
    errors.email = "We need an email address to reply to.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "That does not look like a valid email address.";
  }

  if (values.website.trim()) {
    const url = values.website.trim();
    const candidate = /^https?:\/\//i.test(url) ? url : `https://${url}`;
    try {
      const parsed = new URL(candidate);
      if (!parsed.hostname.includes(".")) throw new Error("no tld");
    } catch {
      errors.website = "Please enter a valid web address, or leave it empty.";
    }
  }

  if (!values.service) errors.service = "Please choose the service you need.";

  if (!values.message.trim()) {
    errors.message = "Tell us a little about what you need.";
  } else if (values.message.trim().length < 20) {
    errors.message = "A sentence or two helps us give you a useful answer.";
  }

  return errors;
}

/**
 * Maps a service id to the matching option in the form's Service dropdown, so
 * a CTA like `/?service=automation#contact` arrives with the field pre-filled.
 */
export const serviceIdToOption: Record<string, ServiceOption> = {
  website: "Website",
  logo: "Logo Design",
  automation: "Automation",
  application: "Web Application",
};
