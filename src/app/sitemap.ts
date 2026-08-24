import type { MetadataRoute } from "next";
import { experiences } from "@/data/experience";
import { siteUrl } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/work",
    "/resume",
    "/about",
    "/contact",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const workRoutes: MetadataRoute.Sitemap = experiences.map((exp) => ({
    url: `${siteUrl}/work/${exp.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...workRoutes];
}
