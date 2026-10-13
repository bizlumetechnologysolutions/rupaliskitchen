import type { MetadataRoute } from "next";
import { SITE_DATA } from "@/lib/site-data";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_DATA.seo.baseUrl;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
