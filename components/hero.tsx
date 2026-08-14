import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { HeroMedia } from "@/components/hero-media";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,113,227,0.08),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
            Available on the Mac App Store
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-6xl md:leading-[1.08]">
            {siteConfig.tagline}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            {siteConfig.description}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={siteConfig.appStoreUrl} className="min-w-[180px]">
              Download for Mac
            </Button>
            <Button href="/#features" variant="secondary">
              Explore features
            </Button>
          </div>
        </div>

        <HeroMedia />
      </div>
    </section>
  );
}
