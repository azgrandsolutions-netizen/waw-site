// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { BASE_URL, LOCALES, PUBLIC_ROUTES } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const slug of PUBLIC_ROUTES) {
    // construim alternates (hreflang) pentru toate limbile
    const languages = Object.fromEntries(
      LOCALES.map((l) => [l, `${BASE_URL}/${l}${slug ? `/${slug}` : ""}`])
    );

    for (const l of LOCALES) {
      entries.push({
        url: `${BASE_URL}/${l}${slug ? `/${slug}` : ""}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: slug === "" ? 1 : 0.7,
        alternates: { languages },
      });
    }
  }

  return entries;
}
