import { MetadataRoute } from "next";
import { ALL_CATEGORIES } from "@/lib/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.vergleichsheld24.de";
  const lastModified = new Date();

  const categoryPages = ALL_CATEGORIES.map((c) => ({
    url: `${baseUrl}/${c.group === "versicherungen" ? "versicherungen" : c.group === "finanzen" ? "finanzen" : "solar"}/${c.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    ...categoryPages,
  ];
}
