import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://protable.io", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://protable.io/terms", lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: "https://protable.io/privacy", lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
  ];
}
