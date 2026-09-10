import Image from "next/image";
import Link from "next/link";
import { features } from "@/lib/site";

export function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-20 border-t border-border bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Everything you need to find any image
          </h2>
          <p className="mt-4 text-lg text-muted">
            Powerful tools for image and screenshot search, designed for macOS
            and built for privacy.
          </p>
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          {features.map((feature, index) => {
            const reversed = index % 2 === 1;
            const media = (
              <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-xl shadow-black/5 ring-1 ring-black/5 transition-opacity group-hover:opacity-95">
                {feature.image ? (
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    width={1200}
                    height={750}
                    className="w-full"
                  />
                ) : (
                  <div className="flex aspect-[16/10] flex-col items-center justify-center gap-3 bg-gradient-to-br from-surface to-white px-8 text-center">
                    <p className="max-w-xs text-base font-medium tracking-tight text-foreground">
                      Review similar captures. Keep what matters.
                    </p>
                    <p className="max-w-sm text-sm leading-relaxed text-muted">
                      Caplio groups visually similar images and exact copies for
                      review. Nothing is deleted automatically.
                    </p>
                  </div>
                )}
              </div>
            );

            return (
              <div
                key={feature.id}
                className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                  reversed ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-muted">
                    {feature.description}
                  </p>
                  <p className="text-sm leading-relaxed text-muted/80">
                    {feature.detail}
                  </p>
                </div>

                {"href" in feature && feature.href ? (
                  <Link
                    href={feature.href}
                    className="group block rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    aria-label={`${feature.title}. Open use case page.`}
                  >
                    {media}
                  </Link>
                ) : (
                  media
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
