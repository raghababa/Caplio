import type { Metadata } from "next";
import { pages, siteConfig } from "@/lib/site";

type PageKey = keyof typeof pages;

export function createPageMetadata(page: PageKey): Metadata {
  const { path, title, description } = pages[page];
  const url = new URL(path, siteConfig.url).toString();
  const absoluteTitle =
    page === "home" ? title : `${title} | ${siteConfig.name}`;

  return {
    title: page === "home" ? { absolute: title } : title,
    description,
    keywords: siteConfig.keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: absoluteTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name}: ${siteConfig.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle,
      description,
      images: ["/og-image.png"],
    },
  };
}

export function getSoftwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Caplio",
    alternateName: "Caplio for Mac",
    url: "https://caplio.vercel.app/",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "macOS",
    description:
      "Caplio is a private image and screenshot organizer for Mac. It indexes images from folders you choose, uses on-device OCR to make text inside images searchable, provides timeline browsing and search, and can optionally organize files on disk.",
    downloadUrl: "https://apps.apple.com/us/app/caplio/id6786196613",
    featureList: [
      "Search screenshots and images",
      "On-device OCR",
      "Search recognized text",
      "Timeline browsing",
      "Image organization",
      "Drag and drop images into other Mac apps",
      "Local-first processing",
      "No cloud OCR or remote AI processing",
    ],
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}
