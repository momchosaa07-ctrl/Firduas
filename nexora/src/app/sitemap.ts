import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";
import { services } from "@/config/services";
import { projectsWithCaseStudies } from "@/config/portfolio";
import { legalPages } from "@/config/legal";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: siteUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...services.map((service) => ({
      url: `${siteUrl}/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...projectsWithCaseStudies().map((project) => ({
      url: `${siteUrl}/work/${project.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...legalPages.map((page) => ({
      url: `${siteUrl}/legal/${page.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  ];
}
