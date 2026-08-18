import type { MetadataRoute } from "next";
import { pages, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return Object.values(pages).map((page) => ({
    url: new URL(page.path, siteConfig.url).toString(),
    lastModified,
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority:
      page.path === "/"
        ? 1
        : page.path === "/pricing" || page.path === "/support"
          ? 0.8
          : 0.5,
  }));
}
