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
      `${siteConfig.name} is a local-first macOS screenshot manager and searchable visual library. Your visual library stays on your Mac.`,
      "OCR, categorization, similarity detection, search indexing, thumbnails, and document processing run on-device. Screenshots, OCR text, search queries, filenames, folder paths, Capture Session names, and document content are not uploaded for processing.",
      "Current Caplio builds do not include Caplio-controlled usage analytics, do not transmit an analytics installation identifier, and do not use a third-party analytics SDK such as TelemetryDeck.",
      "Caplio may still use the network for Apple App Store / StoreKit purchase and entitlement services, and when you choose to open Privacy or Terms links or send feedback by email. Caplio does not sell personal data and does not use advertising trackers.",
    ],
  },
  {
    title: "Information Processed Locally",
    content: [
      "Core Caplio features run on your Mac. OCR, indexing, search, automatic categorization of indexed images, thumbnail generation, Similar Images processing, and Document Builder processing are performed locally/on-device.",
      "Caplio does not require cloud AI to search your library.",
      "The following stay on your Mac and are not uploaded for remote library processing:",
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
        <li>StoreKit transaction IDs and receipts (handled locally / by Apple as applicable)</li>
        <li>the app’s local trial installation ID</li>
        <li>local diagnostic logs (not automatically uploaded)</li>
      </ul>,
    ],
  },
  {
    title: "Folder and File Access",
    content: [
      "Caplio accesses only the folders you select or authorize, as needed for its library features. You can watch multiple folders.",
      "Folder authorization and security-scoped bookmark information remain local on your Mac.",
      "Optional file organization applies to eligible, processed library images from authorized watched folders. Caplio does not claim to automatically reorganize every file on your Desktop.",
      "You can remove folder access through Caplio’s settings or macOS Privacy & Security settings.",
    ],
  },
  {
    title: "Usage Analytics",
    content: [
      "In current Caplio builds, Caplio does not collect Caplio-controlled product-usage analytics and does not include TelemetryDeck or another third-party analytics transport.",
      "Production analytics behavior uses a no-op tracker: Caplio does not send automatic app telemetry for product analytics.",
      "This does not mean Caplio never uses the network. Apple’s App Store and StoreKit services may still communicate with Apple when you purchase, restore, or verify Caplio Pro access.",
    ],
  },
  {
    title: "Earlier Versions and Historical Analytics",
    content: [
      "Some earlier Caplio versions included privacy-preserving anonymous product-usage analytics through TelemetryDeck. Those events were intended to describe product interactions and did not include screenshots, OCR text, search queries, filenames, folder paths, Capture Session names, or document content.",
      "If you used an older analytics-enabled version, analytics data already transmitted (if any) is subject to the practices of that third-party service and the privacy policy that applied at the time.",
      "Deleting Caplio from your Mac does not necessarily delete previously transmitted aggregate analytics data. Caplio does not claim that historical TelemetryDeck records have been deleted.",
    ],
  },
  {
    title: "Purchases and Subscriptions",
    content: [
      "Purchases and subscriptions are processed through Apple’s App Store and StoreKit. Caplio does not receive your credit card or other payment card details.",
      "Internet access may be used for Apple App Store purchase and subscription services, including verifying Caplio Pro access and restoring purchases.",
    ],
  },
  {
    title: "Local Data Storage",
    content: [
      "Caplio stores product and library information locally on your Mac as needed for functionality. This may include image library and index information, OCR and indexing data, watched-folder authorization, settings, local trial state, and local diagnostic logs.",
      "Local diagnostic logs are not automatically uploaded. Feedback is user-initiated through your email app when you choose to contact support.",
      "Core library, search, and OCR features do not require uploading your library content.",
    ],
  },
  {
    title: "Third-Party Services",
    content: [
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
      "Opening Privacy Policy or Terms links is user-initiated. Sending feedback opens a user-initiated email composer.",
      "This website does not use third-party analytics, advertising trackers, or cookie banners.",
    ],
  },
  {
    title: "Data Retention and User Control",
    content: [
      "Deleting Caplio or removing its local application data removes locally stored Caplio data, subject to normal macOS and App Store behavior.",
      "Apple retains purchase and subscription records according to Apple’s policies. Historical analytics from older Caplio versions, if any, are governed by the third-party practices applicable when that data was transmitted.",
    ],
  },
  {
    title: "Children’s Privacy",
    content: [
      "Caplio is not directed to children, and we do not knowingly collect personal information from children through Caplio.",
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
        <p className="text-sm text-muted">Last updated: October 9, 2026</p>
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
