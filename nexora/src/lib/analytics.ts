/**
 * Analytics facade.
 *
 * Nothing is loaded and nothing is sent unless an ID is configured via
 * environment variables — no tracker ships by default. Components call
 * `track()` and stay unaware of which provider (if any) is behind it, so
 * swapping Plausible for GA4, PostHog or a server-side endpoint later is a
 * change to this file alone.
 */

export const analyticsConfig = {
  plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "",
};

export const analyticsEnabled =
  Boolean(analyticsConfig.plausibleDomain) ||
  Boolean(analyticsConfig.gaMeasurementId);

/**
 * The conversion events this site cares about. Keeping them in a union means
 * a typo becomes a type error rather than a silently missing funnel step.
 */
export type AnalyticsEvent =
  | "cta_click"
  | "nav_click"
  | "form_start"
  | "form_submit"
  | "form_success"
  | "form_error"
  | "consultation_click"
  | "faq_open"
  | "pricing_view"
  | "checkout_start"; // reserved for Stripe

export type AnalyticsProps = Record<string, string | number | boolean>;

type PlausibleFn = (event: string, options?: { props?: AnalyticsProps }) => void;
type GtagFn = (command: string, target: string, params?: AnalyticsProps) => void;

declare global {
  interface Window {
    plausible?: PlausibleFn;
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

/** Fire a conversion event. Safe to call anywhere — a no-op when unconfigured. */
export function track(event: AnalyticsEvent, props: AnalyticsProps = {}): void {
  if (typeof window === "undefined") return;

  if (analyticsConfig.plausibleDomain && window.plausible) {
    window.plausible(event, { props });
  }

  if (analyticsConfig.gaMeasurementId && window.gtag) {
    window.gtag("event", event, props);
  }

  if (process.env.NODE_ENV === "development" && !analyticsEnabled) {
    // Makes the funnel visible while developing without shipping a tracker.
    console.debug("[analytics]", event, props);
  }
}

/**
 * Traffic source attribution. Reads UTM parameters and the referrer once per
 * session and keeps them, so a lead submitted three pages later still carries
 * the campaign that brought the visitor in.
 */
const ATTRIBUTION_KEY = "nexora:attribution";

export type Attribution = {
  source?: string;
  medium?: string;
  campaign?: string;
  term?: string;
  content?: string;
  referrer?: string;
  landingPage?: string;
};

export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    if (sessionStorage.getItem(ATTRIBUTION_KEY)) return;

    const params = new URLSearchParams(window.location.search);
    const attribution: Attribution = {};
    const map: Record<string, keyof Attribution> = {
      utm_source: "source",
      utm_medium: "medium",
      utm_campaign: "campaign",
      utm_term: "term",
      utm_content: "content",
    };
    for (const [param, key] of Object.entries(map)) {
      const value = params.get(param);
      if (value) attribution[key] = value.slice(0, 120);
    }
    if (document.referrer && !document.referrer.startsWith(window.location.origin)) {
      attribution.referrer = document.referrer.slice(0, 200);
    }
    attribution.landingPage = window.location.pathname;

    sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution));
  } catch {
    // Private browsing or storage disabled — attribution is best-effort.
  }
}

export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(ATTRIBUTION_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}
