import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/config/services";
import { buildMetadata, JsonLd } from "@/lib/seo";
import { siteUrl } from "@/config/site";
import { brand } from "@/config/brand";
import { ServiceLanding } from "@/components/sections/ServiceLanding";

/**
 * Dedicated landing page per service: /websites, /logo-design, /automation,
 * /applications.
 *
 * Adding another one is a data change — add an entry to `services` with a new
 * slug and the route, metadata, sitemap entry and page all follow.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return buildMetadata({ title: "Not found", noIndex: true });

  return buildMetadata({
    title: service.name,
    description: service.summary,
    path: `/${service.slug}`,
  });
}

export default async function ServiceLandingRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          description: service.summary,
          url: `${siteUrl}/${service.slug}`,
          serviceType: service.name,
          provider: { "@type": "Organization", name: brand.name, url: siteUrl },
          areaServed: "Europe",
        }}
      />
      <ServiceLanding service={service} />
    </>
  );
}
