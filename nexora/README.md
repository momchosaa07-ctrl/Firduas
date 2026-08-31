# NEXORA — digital agency website

A premium marketing site for a digital agency offering websites, branding,
business automation and custom applications.

> **NEXORA is a placeholder.** The brand name, logo, contact details and legal
> text are all temporary and all live in configuration — see
> [Renaming the brand](#renaming-the-brand). Nothing is hard-coded twice.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS 4.

Four runtime dependencies in total — `next`, `react`, `react-dom` and Tailwind's
PostCSS plugin. No component library, no animation library, no icon package, no
form library, no CSS-in-JS. Icons are inline SVG, motion is CSS plus one
`IntersectionObserver`, validation is ~40 lines shared between the browser and
the API route.

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
npm run typecheck  # tsc --noEmit
```

Copy `.env.example` to `.env.local` for local configuration. Every variable is
optional: with none of them set the site builds and runs, no analytics script
loads, and the contact form logs leads server-side instead of posting anywhere.

## Architecture

The organising idea is **content is data, components are presentation**. Every
price, service, FAQ answer and legal clause lives in `src/config/`; components
in `src/components/` render whatever is there. That is why the same service
definition drives the services grid, the pricing table, the bundles, the landing
page, the sitemap and the JSON-LD without any of them repeating a number.

```
src/
  app/                     routes (App Router)
    layout.tsx             fonts, metadata, navbar/footer shell, JSON-LD
    page.tsx               home page — the funnel, in order
    [slug]/page.tsx        service landing pages: /websites, /automation, …
    work/[slug]/page.tsx   case study pages
    legal/[slug]/page.tsx  privacy, terms, cookies, cancellation, refunds
    api/leads/route.ts     lead intake — validation + pluggable delivery
    globals.css            design tokens and base styles
    sitemap.ts robots.ts   generated from the same data as the pages
    icon.svg  opengraph-image.tsx  apple-icon.tsx   generated from brand config

  config/                  ALL content and commercial terms
    brand.ts               name, contact, socials, logo, prices, ownership terms
    site.ts                nav, CTAs, footer, canonical URL, default metadata
    services.ts            the four services + the "which do I need?" comparison
    pricing.ts             pricing cards (derived from services) + bundles
    content.ts             hero, trust strip, process, why-us, about, consultation
    portfolio.ts           projects, case studies, testimonials (placeholders)
    faq.ts                 FAQ groups (prices interpolated from brand.ts)
    leadForm.ts            form options + the shared validation function
    legal.ts               legal page content and structure

  components/
    ui/                    Button, Section, Container, Reveal, Field, ServiceIcon
    layout/                Navbar, MobileMenu, Footer, Logo
    sections/              one file per page section
    Analytics.tsx          loads a tracker only if one is configured

  lib/
    analytics.ts           track() facade + UTM/referrer attribution
    payments.ts            Stripe-ready product catalogue and checkout resolver
    seo.ts(x)              metadata builder + JSON-LD helpers
    cn.ts                  class-name joiner
```

### Server and client components

Everything is a server component unless it needs state. The client components
are: `Navbar`, `MobileMenu`, `Button` (click tracking), `Reveal`, `Portfolio`
(filter), `Pricing` (view tracking), `FAQ` (accordion), `ContactForm`,
`Field`, `Analytics`. `Reveal` wraps server-rendered children, so section
content stays on the server.

One detail worth knowing: `useSearchParams` opts its Suspense boundary out of
static prerendering. The `?service=` prefill therefore lives in a tiny
`ServicePrefill` component behind a `fallback={null}` boundary, so the form
itself ships in the prerendered HTML rather than appearing after hydration.

## Design system

Tokens are defined once, in the `@theme` block of `src/app/globals.css`, and
Tailwind generates utilities from them. Changing the palette is one edit there.

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#0A0A0A` | page background |
| `--color-surface` / `-2` | `#111111` / `#151517` | cards, panels |
| `--color-line` / `-strong` | `#27272A` / `#3F3F46` | hairlines, borders |
| `--color-fg` | `#F5F5F5` | primary text |
| `--color-fg-muted` | `#A1A1AA` | body copy |
| `--color-fg-subtle` | `#8B8B94` | small print |
| `--color-accent` | `#3B82F6` | text, icons, hairlines |
| `--color-accent-strong` | `#2563EB` | filled backgrounds with white labels |
| `--color-accent-hover` | `#60A5FA` | focus ring, link hover |

Two accent steps exist for a reason: white on `#3B82F6` is 3.7:1, below WCAG
AA. Anything with a white label on a filled accent background uses the deeper
`--color-accent-strong` (5.2:1); accent text and icons on the dark background
keep `#3B82F6` (5.4:1). Every colour pair in the palette clears 4.5:1.

**Type** — Space Grotesk for headings, Inter for body, both via `next/font`
(self-hosted, preloaded, no layout shift). The scale is fluid `clamp()`
(`--text-display`, `--text-h1`…) so nothing needs breakpoint overrides.

**Motion** — fade-and-lift on scroll (`Reveal`), hover lifts, a navbar that
compacts on scroll. Content is visible without JavaScript, and everything is
disabled under `prefers-reduced-motion`.

## The conversion funnel

The home page is ordered as a funnel, not a feature list:

```
hero (what we do)  →  trust strip  →  services  →  "which do I need?"
  →  pricing  →  bundles  →  process  →  work  →  why us  →  testimonials
  →  about  →  consultation (call path)  →  FAQ (objections)  →  contact (form path)
```

Two conversion paths run in parallel throughout: the **qualified lead form**
(`#contact`) for people ready to describe a project, and the **free
consultation** (`#consultation`) for automation, applications and larger work
where a conversation has to come first. Service and pricing CTAs deep-link as
`/?service=<id>#contact` so the form arrives pre-filled.

Funnel events are already instrumented via `track()` in `lib/analytics.ts`:
`cta_click`, `nav_click`, `pricing_view`, `faq_open`, `form_start`,
`form_submit`, `form_success`, `form_error`, `consultation_click`, and
`checkout_start` reserved for Stripe. Traffic source (UTM + referrer) is
captured on landing and attached to the lead on submit, so a lead can be
attributed to the campaign that produced it.

## Renaming the brand

1. `src/config/brand.ts` — name, tagline, email, phone, location, socials.
2. Drop a logo in `public/`, then set `logo.type: "image"` and its `src` in the
   same file. The navbar and footer need no change.
3. `terms` in the same file holds every commercial number and the ownership /
   cancellation wording. The FAQ, pricing notes and legal pages read from it,
   so changing the monthly price or the minimum commitment updates every place
   it is mentioned.

The favicon, Apple touch icon and Open Graph card are generated from this
config at build time, so they rename along with everything else.

## What is deliberately not real

This site makes no claims it cannot back up:

- **No fabricated proof.** No client logos, no invented statistics, no years in
  business, no awards or partnerships.
- **Portfolio projects** are labelled "Sample project" in the UI and marked
  `placeholder: true` in `config/portfolio.ts`. Case studies say so on the page
  and carry `noindex` until they describe real work.
- **Testimonials** are labelled "Placeholder" on every card.
- **Legal pages** carry a visible banner saying they are drafts, are not legal
  advice, and list the business details still missing. Draft pages are
  `noindex`. Set `reviewed: true` on a page once real text lands.
- **No fake booking system.** Set `NEXT_PUBLIC_BOOKING_URL` and the consultation
  CTA points at a real scheduler; without it, it points at email and the page
  says online scheduling is coming.
- **No fake payments.** See below.

Flip the `placeholder` flags and replace the data as real content arrives — no
component changes needed.

## Future Stripe integration

`src/lib/payments.ts` is the whole payment surface. It holds a typed product
catalogue (amounts in minor units, one-time vs recurring, and whether the price
is a floor) and a single `resolveCheckout()` that every purchase CTA already
routes through. No Stripe SDK is installed and no payment is taken.

To connect it:

1. Create the products and prices in Stripe.
2. Put each Payment Link (or Checkout Session URL) in the matching
   `NEXT_PUBLIC_STRIPE_LINK_*` variable.
3. Nothing else changes. A CTA whose product has a link and a fixed price
   becomes a checkout link and starts firing `checkout_start`; everything else
   keeps routing to the enquiry form.

Automation and applications intentionally stay on the enquiry path even with a
link configured — they are marked `isStartingPrice: true`, and a price that
depends on scope has to be quoted before it can be charged. When per-quote
checkout is needed, add a server route that creates a Checkout Session and
return its URL from `resolveCheckout` — the UI does not change.

## Future multi-client management

The long-term model is managing many client sites, each with its own domain,
deployment and subscription. Nothing for that is built, but nothing blocks it:

- This site is a **self-contained marketing app** with no shared mutable state,
  so it is not in the way of anything.
- **Lead intake is already a seam.** `POST /api/leads` validates and hands off;
  today to a webhook or the log, later to a CRM or a customer record. The
  browser does not know or care.
- **Payments are already a seam.** Product identity (`ProductId`) is separate
  from presentation, which is what subscription records will key off.
- The natural next step is a route group — `app/(marketing)` for what exists
  and `app/(dashboard)` for accounts — sharing `config/` and `lib/` but nothing
  else. Per-client sites belong in their own deployments so one cancellation
  can never affect another customer; this repo would hold the marketing site
  and the admin surface, not the client sites themselves.

## Verified

Checked against the production build:

- `npm run build` and `tsc --noEmit` clean; 22 routes prerendered.
- No console errors, page errors, failed requests or hydration warnings on any
  route.
- ~158 KB of gzipped JS on first load (framework baseline — no libraries were
  added), 10.8 KB CSS, 71 KB fonts. FCP ~200 ms, CLS 0 on localhost.
- Exactly one `<h1>` per page, no skipped heading levels, one `main`/`header`/
  `footer` landmark, every form control labelled, every image with `alt`.
- Keyboard: skip link first, visible focus ring on all 45 focusable elements,
  FAQ operable with Enter/Space, mobile menu traps focus, closes on Escape and
  restores focus to its trigger.
- No horizontal overflow at 390 px or 1440 px.
- Content renders with JavaScript disabled and animations are skipped under
  `prefers-reduced-motion`.
- Form validates client- and server-side, rejects bad input with field-level
  errors, and traps bots with a honeypot.

## Known follow-ups

- Replace the brand name, logo and contact details.
- Replace portfolio, case studies and testimonials with real work.
- Have the legal pages drafted and reviewed, then set `reviewed: true`.
- Point `LEAD_WEBHOOK_URL` at a real destination — until then leads are only
  written to the server log.
- Set `NEXT_PUBLIC_SITE_URL` to the live domain; canonicals, sitemap and Open
  Graph URLs follow from it.
