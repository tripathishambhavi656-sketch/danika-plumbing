import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_CONFIG.url,
      lastModified: "2026-11-01",
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
