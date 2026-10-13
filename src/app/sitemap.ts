import type { MetadataRoute } from "next";
import { SITE_DATA } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_DATA.seo.baseUrl;
  const now = new Date();

  // Core public routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/menu`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/find-us`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/story`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Verified locality pages
  Object.keys(SITE_DATA.localities).forEach((slug) => {
    routes.push({
      url: `${baseUrl}/areas/${slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  return routes;
}
