import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/json-ld";
import { SiteLayout } from "@/components/site-layout";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("support");

const faqs = [
  {
    question: "How do I get started?",
    answer:
      "Download Caplio from the Mac App Store, then finish setup in the main window. Choose the folders you want Caplio to watch, pick whether to index files in place or organize them, and start your 7-day free trial on your Mac.",
  },
  {
    question: "Where does Caplio store my data?",
    answer:
      "On your Mac. Caplio’s core image processing, OCR, indexing, and search happen locally. Your library, thumbnails, and search index stay on your device. Internet access may be used for Apple App Store purchase and subscription services.",
  },
  {
    question: "How does the free trial work?",
    answer:
      "Caplio includes a 7-day free trial on your Mac during onboarding. This is a local trial, not an App Store introductory offer. After the trial, subscribe to Caplio Pro to keep processing new screenshots and using search and timeline. Your existing library stays on your Mac.",
  },
  {
    question: "How do I subscribe or restore a purchase?",
    answer:
      "Subscriptions are billed through the Mac App Store. Open Caplio and follow the Caplio Pro prompts, or manage your subscription in Apple ID subscription settings. If you already subscribed with the same Apple ID, use Restore Purchases in the app.",
  },
  {
    question: "Why can’t Caplio see my screenshots?",
    answer:
      "Caplio can only access folders you explicitly choose. Add a folder in Settings, and make sure macOS still allows access in System Settings > Privacy & Security. If you moved or renamed a folder, reconnect it in Caplio.",
  },
  {
    question: "Can Caplio read text inside images?",
    answer:
      "Yes. Caplio uses Apple Vision on your Mac to search words, numbers, URLs, and supported languages inside your images. Recognition quality depends on image clarity and the languages Apple Vision supports on your version of macOS.",
  },
  {
    question: "Does organizing files move my originals?",
    answer:
      "Only if you choose to. You can index files in place, or optionally organize files by date or category, with move previews and restore history. Keep backups of important files before large organization jobs.",
  },
];

export default function SupportPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <SiteLayout>
      <JsonLd data={faqJsonLd} />
      <section className="border-b border-border bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,113,227,0.06),transparent)] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Support
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Help for {siteConfig.name} on Mac, including setup, search, privacy,
            and subscriptions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-6 px-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-surface p-8">
            <h2 className="text-xl font-semibold">Contact us</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              For help with {siteConfig.name}, use the App Store listing or
              include your macOS version, Caplio version, and a short
              description of the issue.
            </p>
            <div className="mt-6">
              <Button href={siteConfig.appStoreUrl}>
                Open Caplio on the App Store
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">Before you write</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
              <li>Check that Caplio has access to your screenshot folders.</li>
              <li>Try Restore Purchases if a subscription is not recognized.</li>
              <li>Restart Caplio after changing folder or OCR settings.</li>
              <li>
                Billing, refunds, and subscription cancellation are handled by
                Apple.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Common questions
          </h2>
          <dl className="mt-10 space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-medium">{faq.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm text-muted">
            See also{" "}
            <Link href="/pricing" className="text-accent hover:underline">
              Pricing
            </Link>
            ,{" "}
            <Link href="/privacy" className="text-accent hover:underline">
              Privacy Policy
            </Link>
            , and{" "}
            <Link href="/terms" className="text-accent hover:underline">
              Terms of Use
            </Link>
            .
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
