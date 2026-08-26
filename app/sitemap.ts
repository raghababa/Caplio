import type { MetadataRoute } from "next";
import { pages, siteConfig } from "@/lib/site";
import { getUseCasePath, useCases } from "@/lib/use-cases";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const mainPages: MetadataRoute.Sitemap = Object.values(pages).map((page) => ({
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

  const useCaseIndex: MetadataRoute.Sitemap = [
    {
      url: new URL("/use-cases", siteConfig.url).toString(),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];

  const useCasePages: MetadataRoute.Sitemap = useCases.map((useCase) => ({
    url: new URL(getUseCasePath(useCase.slug), siteConfig.url).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...mainPages, ...useCaseIndex, ...useCasePages];
}
