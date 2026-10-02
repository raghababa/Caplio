import Link from "next/link";
import { getUseCasePath, useCases } from "@/lib/use-cases";

const featuredSlugs = [
  "capture-screenshots-during-online-classes",
  "organize-meeting-screenshots-on-mac",
  "turn-screenshots-into-pdf-on-mac",
  "organize-screenshots-by-capture-session",
  "screenshot-workflows-for-designers",
  "screenshot-workflows-for-developers",
] as const;

export function UseCasesTeaser() {
  const featured = featuredSlugs
    .map((slug) => useCases.find((item) => item.slug === slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <section
      id="use-cases"
      className="scroll-mt-20 border-t border-border bg-white py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Built for real Mac workflows
          </h2>
          <p className="mt-4 text-lg text-muted">
            Capture → Session → Search → Document — for classes, meetings,
            research, design, and development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((useCase) => (
            <Link
              key={useCase.slug}
              href={getUseCasePath(useCase.slug)}
              className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
            >
              <h3 className="text-lg font-semibold tracking-tight">
                {useCase.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {useCase.metaDescription}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/use-cases"
            className="text-sm font-medium text-accent hover:underline"
          >
            Browse all use cases
          </Link>
        </div>
      </div>
    </section>
  );
}
