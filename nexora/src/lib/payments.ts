/**
 * Payment layer — Stripe-ready, deliberately not connected.
 *
 * There is no Stripe SDK in this project and no payment is taken anywhere.
 * What exists here is the seam: a typed product catalogue and a single
 * `resolveCheckout()` function that every purchase CTA already routes through.
 *
 * To go live later:
 *   1. Create the products/prices in Stripe.
 *   2. Put the Payment Link (or a Checkout Session URL) in the matching
 *      NEXT_PUBLIC_STRIPE_LINK_* environment variable.
 *   3. Nothing else changes — CTAs with a configured link become checkout
 *      links, and the rest keep falling back to the contact form.
 *
 * For dynamically-priced products (automation, applications) the scope has to
 * be agreed before a price exists, so those intentionally stay on the enquiry
 * path until a quote-specific Checkout Session is generated server-side.
 */

export type ProductId =
  | "website_monthly"
  | "logo_onetime"
  | "automation_setup"
  | "automation_maintenance"
  | "application_setup"
  | "application_maintenance";

export type BillingMode = "one_time" | "recurring";

export type Product = {
  id: ProductId;
  name: string;
  mode: BillingMode;
  /** Amount in minor units (cents), as Stripe expects. */
  unitAmount: number;
  currency: "eur";
  interval?: "month";
  /** True when `unitAmount` is a floor rather than the price. */
  isStartingPrice: boolean;
  /** Environment variable holding the Payment Link for this product. */
  linkEnvVar: string;
};

export const products: Record<ProductId, Product> = {
  website_monthly: {
    id: "website_monthly",
    name: "Website — monthly plan",
    mode: "recurring",
    unitAmount: 12000,
    currency: "eur",
    interval: "month",
    isStartingPrice: false,
    linkEnvVar: "NEXT_PUBLIC_STRIPE_LINK_WEBSITE_MONTHLY",
  },
  logo_onetime: {
    id: "logo_onetime",
    name: "Logo design",
    mode: "one_time",
    unitAmount: 5000,
    currency: "eur",
    isStartingPrice: false,
    linkEnvVar: "NEXT_PUBLIC_STRIPE_LINK_LOGO_ONETIME",
  },
  automation_setup: {
    id: "automation_setup",
    name: "Automation — setup",
    mode: "one_time",
    unitAmount: 50000,
    currency: "eur",
    isStartingPrice: true,
    linkEnvVar: "NEXT_PUBLIC_STRIPE_LINK_AUTOMATION_SETUP",
  },
  automation_maintenance: {
    id: "automation_maintenance",
    name: "Automation — maintenance",
    mode: "recurring",
    unitAmount: 5000,
    currency: "eur",
    interval: "month",
    isStartingPrice: false,
    linkEnvVar: "NEXT_PUBLIC_STRIPE_LINK_AUTOMATION_MAINTENANCE",
  },
  application_setup: {
    id: "application_setup",
    name: "Custom application — build",
    mode: "one_time",
    unitAmount: 150000,
    currency: "eur",
    isStartingPrice: true,
    linkEnvVar: "NEXT_PUBLIC_STRIPE_LINK_APPLICATION_SETUP",
  },
  application_maintenance: {
    id: "application_maintenance",
    name: "Custom application — maintenance",
    mode: "recurring",
    unitAmount: 10000,
    currency: "eur",
    interval: "month",
    isStartingPrice: true,
    linkEnvVar: "NEXT_PUBLIC_STRIPE_LINK_APPLICATION_MAINTENANCE",
  },
};

/**
 * Payment Links, read at build time. `process.env` cannot be indexed
 * dynamically in client bundles, so each is spelled out.
 */
const paymentLinks: Partial<Record<ProductId, string>> = {
  website_monthly: process.env.NEXT_PUBLIC_STRIPE_LINK_WEBSITE_MONTHLY,
  logo_onetime: process.env.NEXT_PUBLIC_STRIPE_LINK_LOGO_ONETIME,
  automation_setup: process.env.NEXT_PUBLIC_STRIPE_LINK_AUTOMATION_SETUP,
  automation_maintenance: process.env.NEXT_PUBLIC_STRIPE_LINK_AUTOMATION_MAINTENANCE,
  application_setup: process.env.NEXT_PUBLIC_STRIPE_LINK_APPLICATION_SETUP,
  application_maintenance: process.env.NEXT_PUBLIC_STRIPE_LINK_APPLICATION_MAINTENANCE,
};

export type CheckoutTarget = {
  href: string;
  /** True once a real Stripe link is configured for this product. */
  isCheckout: boolean;
};

/**
 * Where a purchase CTA should point today.
 *
 * Fixed-price products with a configured Payment Link go to checkout.
 * Everything else goes to the enquiry form, pre-filtered by service — which
 * is the correct behaviour for anything that needs a quote first.
 */
export function resolveCheckout(
  product: ProductId | null,
  fallbackHref = "/#contact",
): CheckoutTarget {
  if (!product) return { href: fallbackHref, isCheckout: false };

  const link = paymentLinks[product];
  const definition = products[product];

  if (link && !definition.isStartingPrice) {
    return { href: link, isCheckout: true };
  }

  return { href: fallbackHref, isCheckout: false };
}
