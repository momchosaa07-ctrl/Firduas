import type { Metadata } from "next";
import { brand } from "@/config/brand";
import { defaultMeta, siteUrl } from "@/config/site";
import { allFaqItems } from "@/config/faq";
import { services } from "@/config/services";

/**
 * Builds page metadata from a small set of overrides. Every page — including
 * future landing pages — goes through this so Open Graph, Twitter cards and
 * canonicals never drift.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const resolvedTitle = title ? `${title} | ${brand.name}` : defaultMeta.title;
  const resolvedDescription = description ?? defaultMeta.description;
  const url = `${siteUrl}${path}`;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: brand.name,
      title: resolvedTitle,
      description: resolvedDescription,
      url,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: brand.name }],
      locale: "en",
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: ["/opengraph-image"],
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

/** Organization + website + service catalogue, as JSON-LD. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#organization`,
        name: brand.name,
        legalName: brand.legalName,
        description: brand.description,
        url: siteUrl,
        email: brand.contact.email,
        slogan: brand.tagline,
        areaServed: "Europe",
        ...(brand.social.some((s) => s.href)
          ? { sameAs: brand.social.filter((s) => s.href).map((s) => s.href) }
          : {}),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital services",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.name,
              description: service.summary,
              url: `${siteUrl}/${service.slug}`,
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: brand.name,
        description: brand.description,
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/** Renders JSON-LD without dangerouslySetInnerHTML escaping surprises. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is escaped for the one character that can break
      // out of a <script> block.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
