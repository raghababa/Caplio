import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { SiteLayout } from "@/components/site-layout";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("privacy");

type PrivacySection = {
  title: string;
  content: ReactNode[];
};

const sections: PrivacySection[] = [
  {
    title: "Privacy at a Glance",
    content: [
      `${siteConfig.name} is a local-first macOS app for capturing screenshots, searching and organizing images, and creating documents. Your visual library stays on your Mac.`,
      "Your images, OCR text, search queries, filenames, folder paths, Capture Session names, and document content are not uploaded for analytics or remote processing.",
      "Caplio may send limited privacy-preserving usage analytics to TelemetryDeck to help us understand how the product is used and improve the app. Analytics are separate from your library content.",
      "Caplio does not use analytics for advertising, does not use TelemetryDeck for cross-app or cross-website tracking, and does not sell personal data.",
    ],
  },
  {
    title: "Information Processed Locally",
    content: [
      "Core Caplio features run on your Mac. OCR, indexing, search, categorization, thumbnail generation, and Similar Images processing are performed locally/on-device.",
      "Caplio does not require cloud AI to search your library.",
      "The following stay on your Mac and are not uploaded for analytics or remote processing:",
      <ul
        key="local-content-list"
        className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted"
      >
        <li>screenshots and images</li>
        <li>image contents</li>
        <li>OCR / extracted text</li>
        <li>search queries and search terms</li>
        <li>filenames</li>
        <li>file paths</li>
        <li>folder names and folder paths</li>
        <li>Capture Session names</li>
        <li>document titles</li>
        <li>document text and content</li>
        <li>thumbnails</li>
        <li>manually edited titles</li>
        <li>Similar Images screenshot/group IDs</li>
        <li>security-scoped bookmark data</li>
        <li>StoreKit transaction IDs</li>
        <li>StoreKit receipts</li>
        <li>the app’s local trial installation ID</li>
      </ul>,
    ],
  },
  {
    title: "Folder and File Access",
    content: [
      "Caplio accesses only the folders you select or authorize, as needed for its library features.",
      "Folder authorization and security-scoped bookmark information remain local on your Mac and are not sent as analytics.",
      "You can remove folder access through Caplio’s settings or macOS Privacy & Security settings.",
    ],
  },
  {
    title: "Anonymous Usage Analytics",
    content: [
      "Caplio uses TelemetryDeck, a privacy-preserving analytics service, to collect limited anonymous product-usage events. We use this information to understand how Caplio is used and to improve the product.",
      "Examples of product interactions that may be recorded include:",
      <ul
        key="analytics-examples"
        className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted"
      >
        <li>whether onboarding was completed</li>
        <li>whether a folder was added</li>
        <li>whether the first image became searchable</li>
        <li>whether Search was used</li>
        <li>whether a search returned results</li>
        <li>whether Similar Images was opened or resolved</li>
        <li>whether Document Builder was opened</li>
        <li>whether a document was exported</li>
        <li>export format, such as PDF or DOCX</li>
        <li>whether the paywall was viewed</li>
        <li>
          the subscription plan category involved in a purchase attempt or
          completion
        </li>
      </ul>,
      "These events describe product interactions. They do not include the contents of your visual library.",
    ],
  },
  {
    title: "Information Not Sent to Analytics",
    content: [
      "Analytics events do not contain:",
      <ul
        key="analytics-exclusions"
        className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted"
      >
        <li>screenshots or images</li>
        <li>OCR text</li>
        <li>search queries</li>
        <li>filenames</li>
        <li>file or folder paths</li>
        <li>Capture Session names</li>
        <li>document titles or content</li>
        <li>screenshot or group IDs</li>
        <li>StoreKit transaction IDs</li>
        <li>receipts</li>
      </ul>,
      "Caplio does not send your actual search query, image, document, filename, or other library content to TelemetryDeck.",
    ],
  },
  {
    title: "Technical Analytics Metadata",
    content: [
      "The TelemetryDeck SDK may attach technical metadata needed for aggregate analytics, such as:",
      <ul
        key="technical-metadata"
        className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted"
      >
        <li>app version and build</li>
        <li>macOS / platform information</li>
        <li>device model / architecture</li>
        <li>language, locale, and region</li>
        <li>timezone</li>
        <li>screen / device characteristics</li>
        <li>SDK version</li>
        <li>debug, App Store, or TestFlight context</li>
        <li>session information</li>
        <li>an installation-specific anonymous identifier</li>
      </ul>,
      "This means Caplio does not upload your visual-library content, but it does transmit limited product-interaction and technical analytics data.",
      "TelemetryDeck uses an installation-specific anonymous identifier for aggregate analytics. Caplio does not provide TelemetryDeck with your name, email address, Apple Account, a Caplio account (Caplio does not require a user account), Caplio’s Keychain trial installation ID, or library/database identifiers.",
      "According to TelemetryDeck’s documentation, IP addresses are not stored as part of its analytics data.",
    ],
  },
  {
    title: "Purchases and Subscriptions",
    content: [
      "Purchases and subscriptions are processed through Apple’s App Store and StoreKit. Caplio does not receive your credit card or other payment card details.",
      "Analytics may record only the general Caplio plan category associated with a purchase event, such as monthly, yearly, or lifetime. StoreKit transaction IDs and receipts are not sent to TelemetryDeck.",
      "Internet access may be used for Apple App Store purchase and subscription services, including verifying Caplio Pro access and restoring purchases.",
    ],
  },
  {
    title: "Local Data Storage",
    content: [
      "Caplio stores product and library information locally on your Mac as needed for functionality. This may include image library and index information, OCR and indexing data, watched-folder authorization, settings, local trial state, and analytics milestone flags.",
      "Analytics milestone flags are local state used to avoid repeatedly recording one-time milestones.",
      "Core library, search, and OCR features do not require uploading your library content. An internet connection may still be used for App Store services and anonymous usage analytics when available.",
    ],
  },
  {
    title: "Third-Party Services",
    content: [
      <>
        Caplio uses{" "}
        <a
          href="https://telemetrydeck.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          TelemetryDeck
        </a>{" "}
        for privacy-preserving product analytics. For more information, see{" "}
        <a
          href="https://telemetrydeck.com/privacy/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          TelemetryDeck’s Privacy Policy
        </a>{" "}
        and{" "}
        <a
          href="https://telemetrydeck.com/docs/guides/privacy-faq/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Privacy FAQ
        </a>
        .
      </>,
      <>
        Purchases are handled by Apple. See Apple’s App Store and privacy
        information at{" "}
        <a
          href="https://www.apple.com/legal/privacy/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          apple.com/legal/privacy
        </a>
        .
      </>,
      "This website does not use third-party analytics or advertising trackers.",
    ],
  },
  {
    title: "Data Retention and User Control",
    content: [
      "Deleting Caplio or removing its local application data removes locally stored Caplio data, subject to normal macOS and App Store behavior.",
      "Analytics data already transmitted to TelemetryDeck is handled under TelemetryDeck’s applicable privacy and data practices. Deleting the local app does not necessarily delete previously transmitted aggregate analytics data.",
    ],
  },
  {
    title: "Children’s Privacy",
    content: [
      "Caplio is not directed to children, and we do not knowingly collect personal information from children through Caplio analytics.",
    ],
  },
  {
    title: "Changes to This Privacy Policy",
    content: [
      "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.",
    ],
  },
  {
    title: "Contact",
    content: [
      <>
        For privacy questions about {siteConfig.name}, visit our{" "}
        <Link href="/support" className="text-accent hover:underline">
          Support
        </Link>{" "}
        page and use Email Support.
      </>,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="text-sm text-muted">Last updated: October 2, 2026</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-4 text-lg text-muted">
          How {siteConfig.name} handles your data and protects your privacy.
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <div className="mt-3 space-y-3">
                {section.content.map((paragraph, index) =>
                  typeof paragraph === "string" ? (
                    <p
                      key={`${section.title}-${index}`}
                      className="text-sm leading-relaxed text-muted"
                    >
                      {paragraph}
                    </p>
                  ) : (
                    <div key={`${section.title}-${index}`}>{paragraph}</div>
                  )
                )}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-12 text-sm text-muted">
          See also our{" "}
          <Link href="/support" className="text-accent hover:underline">
            Support
          </Link>{" "}
          page and{" "}
          <Link href="/terms" className="text-accent hover:underline">
            Terms of Use
          </Link>
          .
        </p>
      </article>
    </SiteLayout>
  );
}
