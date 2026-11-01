import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://danikaplumbing.com";

  return [
    {
      url: baseUrl,
      lastModified: "2026-11-01",
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
