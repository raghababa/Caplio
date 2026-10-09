import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/site-layout";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("terms");

const sections = [
  {
    title: "Agreement",
    content: [
      `By downloading, installing, or using ${siteConfig.name} ("the App"), you agree to these Terms of Use. If you do not agree, do not use the App.`,
    ],
  },
  {
    title: "License",
    content: [
      `${siteConfig.name} is licensed, not sold. Subject to these terms and your valid subscription where applicable, you receive a limited, non-exclusive, non-transferable license to use the App on Mac computers you own or control.`,
      "You may not reverse engineer, decompile, redistribute, or resell the App except as permitted by applicable law.",
    ],
  },
  {
    title: "Free capture, trial, subscriptions, and Lifetime",
    content: [
      `${siteConfig.name} includes free screenshot capture. Caplio also offers a 7-day Caplio Pro trial on your Mac. After the Pro trial, a Caplio Pro subscription or Lifetime purchase is required to continue using Caplio Pro features such as the searchable visual library and certain advanced organization and document workflows.`,
      "Subscriptions and Lifetime purchases are managed through the Apple App Store and subject to Apple’s terms. Payment, renewal, cancellation, and refunds are handled by Apple.",
      "Your visual library stays on your Mac. Choose a subscription or Lifetime after your Pro trial to continue using Caplio Pro.",
    ],
  },
  {
    title: "Your content",
    content: [
      "You retain ownership of your screenshots and images. Caplio processes files in folders you choose, locally on your Mac.",
      "You are responsible for ensuring you have the right to access and organize the files you add to Caplio.",
    ],
  },
  {
    title: "File organization",
    content: [
      "Caplio may optionally move or organize files on disk based on your settings. Organization features include move previews and restore history, but you should maintain backups of important files.",
      `${siteConfig.name} is not liable for data loss resulting from file moves you authorize through the App.`,
    ],
  },
  {
    title: "Privacy",
    content: [
      "Caplio’s core image processing, OCR, indexing, and search happen locally. Internet access may be used for Apple App Store purchase and subscription services. Current Caplio builds do not include Caplio-controlled usage analytics. See the Privacy Policy for details, including notes about older versions.",
      "See our Privacy Policy for full details.",
    ],
  },
  {
    title: "Disclaimer",
    content: [
      `THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. OCR and categorization results may contain errors. We do not guarantee that search results will be complete or accurate for every image.`,
    ],
  },
  {
    title: "Limitation of liability",
    content: [
      "To the maximum extent permitted by law, Caplio and its developers shall not be liable for indirect, incidental, special, or consequential damages arising from your use of the App.",
    ],
  },
  {
    title: "Changes",
    content: [
      "We may update these Terms from time to time. Continued use of the App after changes constitutes acceptance of the updated Terms.",
    ],
  },
  {
    title: "Contact",
    content: [
      "For questions about these Terms, visit our Support page and use Email Support.",
    ],
  },
];

export default function TermsPage() {
  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="text-sm text-muted">Last updated: August 6, 2026</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          Terms of Use
        </h1>
        <p className="mt-4 text-lg text-muted">
          Terms governing your use of {siteConfig.name} and this website.
        </p>

        <div className="mt-12 space-y-10">
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
          <Link href="/support" className="text-accent hover:underline">
            Support
          </Link>{" "}
          page and{" "}
          <Link href="/privacy" className="text-accent hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </article>
    </SiteLayout>
  );
}
