import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const host = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const locales = ["ro"]; // adaugă aici și "en" dacă vei avea și engleză
  const paths = ["/", "/urgente", "/contact"];

  const entries: MetadataRoute.Sitemap = [];
  for (const loc of locales) {
    for (const p of paths) {
      entries.push({
        url: `${host}/${loc}${p === "/" ? "" : p}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: p === "/" ? 1 : 0.7,
      });
    }
  }
  return entries;
}
