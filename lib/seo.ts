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
    name: siteConfig.name,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "macOS",
    description: siteConfig.description,
    url: siteConfig.url,
    downloadUrl: siteConfig.appStoreUrl,
    image: `${siteConfig.url}/icon.png`,
    screenshot: [
      `${siteConfig.url}/screenshots/timeline.png`,
      `${siteConfig.url}/screenshots/ocr.png`,
      `${siteConfig.url}/screenshots/search.png`,
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description:
        "7-day free trial on your Mac. Caplio Pro available as a monthly or yearly subscription after the trial.",
      availability: "https://schema.org/InStock",
    },
    featureList: [
      "On-device OCR for screenshots and images",
      "Menu bar quick search",
      "Timeline browsing",
      "Optional file organization by date or category",
      "Private local processing",
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
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/icon.png`,
    },
  };
}
