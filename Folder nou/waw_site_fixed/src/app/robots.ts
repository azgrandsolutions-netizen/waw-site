// src/app/robots.ts
import type { MetadataRoute } from "next";
import { BASE_URL } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"], // blochează doar API-ul (opțional)
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
