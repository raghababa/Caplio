import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/site-layout";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("privacy");

const sections = [
  {
    title: "Overview",
    content: [
      `${siteConfig.name} is a macOS application that helps you search and organize screenshots and images on your Mac. We designed ${siteConfig.name} with privacy as a core principle: your visual library stays on your device.`,
    ],
  },
  {
    title: "Data stored on your Mac",
    content: [
      `${siteConfig.name} stores your screenshot library, thumbnails, OCR text, search index, and app settings locally on your Mac, typically in your user Library folder.`,
      "Caplio does not upload your screenshots or OCR results to our servers for processing, analysis, or storage.",
    ],
  },
  {
    title: "Local processing",
    content: [
      "Caplio’s core image processing, OCR, indexing, and search happen locally on your Mac using Apple’s on-device frameworks.",
      "Search words, numbers, URLs, and supported languages inside your images are processed entirely on your device.",
    ],
  },
  {
    title: "Internet access",
    content: [
      "Internet access may be used for Apple App Store purchase and subscription services, including verifying Caplio Pro subscriptions and restoring purchases.",
      `${siteConfig.name} does not require an internet connection for core library, search, or OCR features.`,
    ],
  },
  {
    title: "Your data stays on your Mac",
    content: [
      "Your data stays safely on your Mac. Subscribe after the trial to continue using Caplio.",
      "If you stop subscribing, your existing library remains on your Mac. New screenshots may not be indexed until you resubscribe.",
    ],
  },
  {
    title: "Folder access",
    content: [
      "Caplio accesses only the folders you explicitly choose during setup or in Settings. Folder access uses macOS security-scoped bookmarks and remains under your control.",
      "You can remove folder access at any time through the app or macOS Privacy & Security settings.",
    ],
  },
  {
    title: "Analytics and tracking",
    content: [
      "This website does not use third-party analytics or advertising trackers.",
      "The Caplio app is designed to operate without sending your screenshot content to third-party analytics services.",
    ],
  },
  {
    title: "Contact",
    content: [
      `For privacy questions about ${siteConfig.name}, contact us through the support channel listed on the Mac App Store listing once the app is available.`,
    ],
  },
  {
    title: "Changes",
    content: [
      "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="text-sm text-muted">Last updated: August 6, 2026</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-4 text-lg text-muted">
          How {siteConfig.name} handles your data and protects your privacy.
        </p>

        <div className="prose-caplio mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <div className="mt-3 space-y-3">
                {section.content.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-sm leading-relaxed text-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-12 text-sm text-muted">
          See also our{" "}
          <Link href="/terms" className="text-accent hover:underline">
            Terms of Use
          </Link>
          .
        </p>
      </article>
    </SiteLayout>
  );
}
