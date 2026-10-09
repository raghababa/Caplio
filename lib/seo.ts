import type { Metadata } from "next";
import { pages, pricingUs, siteConfig } from "@/lib/site";

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
      "Caplio is a private screenshot manager and searchable visual library for Mac. Free forever: region, full-screen, and fixed-region capture with customizable shortcuts. Caplio Pro adds Window Capture, on-device OCR search, Capture Sessions workflows, Similar Images, optional file organization, and PDF/Word document export. Your visual library stays on your Mac.",
    downloadUrl: siteConfig.appStoreUrl,
    offers: [
      {
        "@type": "Offer",
        name: "Free Capture",
        price: "0",
        priceCurrency: "USD",
        description:
          "Region, full-screen, and fixed-region capture are free forever. New users also get 7 days of Caplio Pro access, including Window Capture.",
      },
      {
        "@type": "Offer",
        name: "Caplio Pro Monthly",
        price: pricingUs.monthly.replace("$", ""),
        priceCurrency: "USD",
        description:
          "US price for Caplio Pro monthly subscription. Actual App Store prices may vary by country or region.",
        areaServed: "US",
      },
      {
        "@type": "Offer",
        name: "Caplio Pro Yearly",
        price: pricingUs.yearly.replace("$", ""),
        priceCurrency: "USD",
        description:
          "US price for Caplio Pro yearly subscription. Actual App Store prices may vary by country or region.",
        areaServed: "US",
      },
      {
        "@type": "Offer",
        name: "Lifetime",
        price: pricingUs.lifetime.replace("$", ""),
        priceCurrency: "USD",
        description:
          "US price for Caplio Pro as a one-time purchase. Actual App Store prices may vary by country or region.",
        areaServed: "US",
      },
    ],
    featureList: [
      "Free region, full-screen, and fixed-region screenshot capture for Mac",
      "Customizable global capture shortcuts for available modes",
      "Window Capture with Caplio Pro",
      "Capture Sessions",
      "Search screenshots and images",
      "On-device OCR with Apple Vision",
      "Search recognized text",
      "Automatic categorization of indexed images",
      "Document Builder for PDF and DOCX",
      "Similar Images and Exact Copies review",
      "Timeline browsing",
      "Multiple watched folders",
      "Organize eligible processed images by Date, Category, or Capture Session",
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
