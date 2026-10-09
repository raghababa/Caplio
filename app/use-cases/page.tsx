import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/site-layout";
import { JsonLd } from "@/components/json-ld";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { getUseCasePath, useCases } from "@/lib/use-cases";

export const metadata: Metadata = {
  title: "Use Cases",
  description:
    "Caplio use cases for Mac: screenshot manager, Capture Sessions, search text inside screenshots, local OCR, screenshots to PDF or Word, and privacy-first visual workflows.",
  alternates: {
    canonical: "/use-cases",
  },
  openGraph: {
    title: `Use Cases | ${siteConfig.name}`,
    description:
      "Explore Caplio use cases for capturing, searching, organizing, and turning screenshots into documents on Mac.",
    url: `${siteConfig.url}/use-cases`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function UseCasesIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Use Cases | ${siteConfig.name}`,
    description:
      "Caplio use cases for capturing, searching, organizing, and turning screenshots into documents on Mac.",
    url: `${siteConfig.url}/use-cases`,
    hasPart: useCases.map((useCase) => ({
      "@type": "WebPage",
      name: useCase.title,
      url: `${siteConfig.url}${getUseCasePath(useCase.slug)}`,
      description: useCase.metaDescription,
    })),
  };

  return (
    <SiteLayout>
      <JsonLd data={jsonLd} />
      <section className="border-b border-border bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,113,227,0.06),transparent)] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Caplio use cases
          </h1>
          <p className="mt-4 text-lg text-muted">
            Practical ways Caplio helps you capture, keep related work in
            Sessions, search, organize, and turn screenshots into documents on
            your Mac — privately, with on-device OCR.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-6 px-6 md:grid-cols-2">
          {useCases.map((useCase) => (
            <Link
              key={useCase.slug}
              href={getUseCasePath(useCase.slug)}
              className="rounded-3xl border border-border bg-white p-8 shadow-sm transition-colors hover:border-accent/40"
            >
              <h2 className="text-xl font-semibold tracking-tight">
                {useCase.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {useCase.metaDescription}
              </p>
            </Link>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-5xl px-6 text-center">
          <Button href={siteConfig.appStoreUrl}>
            Download on the Mac App Store
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
