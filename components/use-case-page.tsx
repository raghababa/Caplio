import Link from "next/link";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/json-ld";
import { SiteLayout } from "@/components/site-layout";
import { siteConfig } from "@/lib/site";
import {
  getRelatedUseCases,
  getUseCasePath,
  getUseCaseUrl,
  type UseCase,
} from "@/lib/use-cases";

type UseCasePageProps = {
  useCase: UseCase;
};

export function UseCasePage({ useCase }: UseCasePageProps) {
  const related = getRelatedUseCases(useCase);
  const pageUrl = getUseCaseUrl(useCase.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${useCase.metaTitle} | ${siteConfig.name}`,
        description: useCase.metaDescription,
        isPartOf: {
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        about: {
          "@type": "SoftwareApplication",
          name: "Caplio",
          alternateName: "Caplio for Mac",
          operatingSystem: "macOS",
          applicationCategory: "ProductivityApplication",
          url: "https://caplio.vercel.app/",
          downloadUrl: "https://apps.apple.com/us/app/caplio/id6786196613",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${siteConfig.url}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Use cases",
            item: `${siteConfig.url}/use-cases`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: useCase.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <SiteLayout>
      <JsonLd data={jsonLd} />

      <article>
        <section className="border-b border-border bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,113,227,0.06),transparent)] py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <p className="text-sm font-medium uppercase tracking-wider text-accent">
              {useCase.eyebrow}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              {useCase.headline}
            </h1>
            <div className="mt-6 space-y-4">
              {useCase.intro.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-lg leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={siteConfig.appStoreUrl}>
                Download on the Mac App Store
              </Button>
              <Button href="/#features" variant="secondary">
                See Caplio features
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-3xl space-y-12 px-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                {useCase.problemTitle}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {useCase.problem}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                {useCase.howTitle}
              </h2>
              <ul className="mt-4 space-y-3">
                {useCase.how.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-base leading-relaxed text-muted"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Why Caplio
              </h2>
              <ul className="mt-4 space-y-3">
                {useCase.whyCaplio.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-base leading-relaxed text-muted"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="border-t border-border bg-surface py-16">
            <div className="mx-auto max-w-3xl px-6">
              <h2 className="text-xl font-semibold tracking-tight">
                Related use cases
              </h2>
              <ul className="mt-6 space-y-3">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={getUseCasePath(item.slug)}
                      className="text-accent hover:underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-muted">
                See all{" "}
                <Link href="/use-cases" className="text-accent hover:underline">
                  Caplio use cases
                </Link>
                ,{" "}
                <Link href="/pricing" className="text-accent hover:underline">
                  pricing
                </Link>
                , or{" "}
                <Link href="/support" className="text-accent hover:underline">
                  support
                </Link>
                .
              </p>
            </div>
          </section>
        )}

        <section className="border-t border-border py-16">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-2xl font-semibold tracking-tight">
              Try Caplio on your Mac
            </h2>
            <p className="mt-3 text-muted">
              7-day trial with full access. Caplio Pro and Lifetime available on
              the Mac App Store.
            </p>
            <div className="mt-6">
              <Button href={siteConfig.appStoreUrl}>
                Download on the Mac App Store
              </Button>
            </div>
          </div>
        </section>
      </article>
    </SiteLayout>
  );
}
