import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/style-guide"],
      },
    ],
    sitemap: "https://danikaplumbing.com/sitemap.xml",
  };
}
