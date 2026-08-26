import Link from "next/link";
import { homepageFaqs } from "@/lib/faqs";
import { siteConfig } from "@/lib/site";

export function HomepageFaqSection() {
  return (
    <section
      id="faq"
      className="scroll-mt-20 border-t border-border bg-white py-24 md:py-32"
    >
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-muted">
            Clear answers about what Caplio is, how it works, and how your files
            stay private.
          </p>
        </div>

        <dl className="mt-12 space-y-8">
          {homepageFaqs.map((faq) => (
            <div key={faq.question}>
              <dt className="text-lg font-medium">{faq.question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted md:text-base">
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

        <p className="mt-12 text-center text-sm text-muted">
          More answers on the{" "}
          <Link href="/support#faq" className="text-accent hover:underline">
            Support
          </Link>{" "}
          page.
        </p>
      </div>
    </section>
  );
}
