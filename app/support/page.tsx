import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/json-ld";
import { SiteLayout } from "@/components/site-layout";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("support");

const faqs: { question: string; answer: string[] }[] = [
  {
    question: "How do I get started?",
    answer: [
      "Download Caplio from the Mac App Store and complete the setup in the main window. Choose the folders you want Caplio to access, decide whether to keep your images in place or optionally organize them, and start your 7-day trial.",
    ],
  },
  {
    question: "Where does Caplio store my data?",
    answer: [
      "On your Mac. Caplio’s image processing, text recognition, indexing, and search happen locally. Your library, thumbnails, recognized text, and search index stay on your device.",
      "Internet access may be used for Apple services such as App Store purchases and subscriptions.",
    ],
  },
  {
    question: "How does the 7-day trial work?",
    answer: [
      "Caplio includes a 7-day local trial that starts on your Mac. It is managed by Caplio and is not an App Store introductory offer.",
      "During the trial, you can use Caplio’s Pro features. After the trial ends, you can choose a subscription or a Lifetime purchase to continue using Pro features. Your existing library remains on your Mac.",
    ],
  },
  {
    question: "How do I purchase Caplio Pro or restore a purchase?",
    answer: [
      "Caplio Pro is available through the Mac App Store with subscription and Lifetime purchase options.",
      "You can purchase a plan from Caplio’s Subscription screen. If you previously purchased Caplio Pro using the same Apple Account, choose Restore Purchases in Caplio.",
      "Subscriptions can also be managed through your Apple Account subscription settings.",
    ],
  },
  {
    question: "What is Caplio Lifetime?",
    answer: [
      "Caplio Lifetime is a one-time purchase that unlocks Caplio Pro without a recurring subscription.",
      "If you already have an active subscription, purchasing Lifetime does not automatically cancel that subscription. You can manage or cancel your existing subscription through your Apple Account to avoid future renewals.",
    ],
  },
  {
    question: "Why can’t Caplio see my screenshots or images?",
    answer: [
      "Caplio can only access folders you explicitly choose.",
      "Add or reconnect the folder in Caplio’s Settings. If a folder was moved, renamed, or its permission is no longer available, you may need to grant access to it again.",
    ],
  },
  {
    question: "Can Caplio read text inside images?",
    answer: [
      "Yes. Caplio uses Apple’s on-device Vision technology to recognize text inside screenshots and images.",
      "Recognition quality can vary depending on image quality, text size, language, and the recognition capabilities available in your version of macOS.",
    ],
  },
  {
    question: "Does organizing files move my originals?",
    answer: [
      "Only if you enable file organization.",
      "By default, Caplio can index images where they already are. You can optionally allow Caplio to organize files by date or category. Caplio provides move previews and organization history so moved files can be restored when possible.",
      "For important files, maintaining a regular backup is always recommended.",
    ],
  },
  {
    question: "Does Caplio upload my images or recognized text?",
    answer: [
      "No. Caplio’s core image processing, OCR, indexing, and search are performed locally on your Mac. Your screenshots, images, and recognized text are not uploaded to Caplio servers for processing.",
      "Apple services may still require an internet connection for App Store purchases and subscription management.",
    ],
  },
  {
    question: "Which image formats does Caplio support?",
    answer: [
      "Caplio supports common image formats including PNG, JPEG/JPG, HEIC, TIFF, and WebP.",
    ],
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
        text: faq.answer.join(" "),
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
            subscriptions, and Lifetime.
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
              <li>
                Check that Caplio has access to the folders with your
                screenshots and images.
              </li>
              <li>
                Try Restore Purchases if a subscription or Lifetime purchase is
                not recognized.
              </li>
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
          <dl className="mt-10 space-y-10">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-medium">{faq.question}</dt>
                <dd className="mt-2 space-y-3">
                  {faq.answer.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="text-sm leading-relaxed text-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
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
