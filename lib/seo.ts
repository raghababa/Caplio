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
      "Caplio is a private visual workflow for Mac. Capture screenshots for free, keep related captures in Sessions, search text inside images with on-device OCR, find similar images, optionally organize files by Date, Category, or Capture Session, and create PDF or Word documents. Your visual library stays on your Mac.",
    downloadUrl: siteConfig.appStoreUrl,
    offers: [
      {
        "@type": "Offer",
        name: "Free Capture",
        price: "0",
        priceCurrency: "USD",
        description:
          "Screenshot capture is free forever. New users also get 7 days of full Caplio Pro access.",
      },
      {
        "@type": "Offer",
        name: "Caplio Pro Monthly",
        price: "0.99",
        priceCurrency: "USD",
        description: "Caplio Pro subscription billed monthly.",
      },
      {
        "@type": "Offer",
        name: "Caplio Pro Yearly",
        price: "5.99",
        priceCurrency: "USD",
        description: "Caplio Pro subscription billed yearly.",
      },
      {
        "@type": "Offer",
        name: "Lifetime",
        price: "9.99",
        priceCurrency: "USD",
        description: "Caplio Pro as a one-time purchase.",
      },
    ],
    featureList: [
      "Free screenshot capture for Mac",
      "Capture area and full screen",
      "Customizable global capture shortcuts",
      "Capture Sessions",
      "Search screenshots and images",
      "On-device OCR",
      "Search recognized text",
      "Document Builder for PDF and DOCX",
      "Similar Images and Exact Copies review",
      "Timeline browsing",
      "Organize by Date, Category, or Capture Session",
      "Drag and drop images into other Mac apps",
      "Local-first visual library processing",
      "No cloud OCR or remote AI processing of your library",
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
