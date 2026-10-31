import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://danikaplumbing.com";

  return [
    {
      url: baseUrl,
      lastModified: "2026-10-31",
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
