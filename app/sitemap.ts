import { MetadataRoute } from "next";
import { ALL_CATEGORIES } from "@/lib/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.vergleichsheld24.de";
  const lastModified = new Date();

  const categoryPages = ALL_CATEGORIES.map((c) => {
    // Solar hat Route /solar statt /solar/solar
    const url = c.slug === "solar"
      ? `${baseUrl}/solar`
      : `${baseUrl}/${c.group === "finanzen" ? "finanzen" : "versicherungen"}/${c.slug}`;
    return { url, lastModified, changeFrequency: "weekly" as const, priority: 0.85 };
  });

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/impressum`, lastModified, changeFrequency: "monthly" as const, priority: 0.2 },
    { url: `${baseUrl}/datenschutz`, lastModified, changeFrequency: "monthly" as const, priority: 0.2 },
    ...categoryPages,
  ];
}
