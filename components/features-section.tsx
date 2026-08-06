import Image from "next/image";
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
            Powerful tools for screenshot search — designed for macOS, built for
            privacy.
          </p>
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          {features.map((feature, index) => {
            const reversed = index % 2 === 1;

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

                <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-xl shadow-black/5 ring-1 ring-black/5">
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    width={1200}
                    height={750}
                    className="w-full"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
