import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/json-ld";
import { SiteLayout } from "@/components/site-layout";
import { getFaqPageJsonLd, productFaqs } from "@/lib/faqs";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("support");

export default function SupportPage() {
  return (
    <SiteLayout>
      <JsonLd data={getFaqPageJsonLd()} />
      <section className="border-b border-border bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,113,227,0.06),transparent)] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Support
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Help for {siteConfig.name} on Mac, including privacy, OCR search,
            file organization, trial, and download.
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

      <section
        id="faq"
        className="scroll-mt-20 border-t border-border bg-white py-16 md:py-24"
      >
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Frequently Asked Questions
          </h2>
          <dl className="mt-10 space-y-10">
            {productFaqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-medium">{faq.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">
                  {faq.question === "Where can I download Caplio?" ? (
                    <>
                      Caplio is available for macOS from the{" "}
                      <a
                        href={siteConfig.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        official Mac App Store listing
                      </a>
                      .
                    </>
                  ) : (
                    faq.answer
                  )}
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
