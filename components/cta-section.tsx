import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="border-t border-border bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Get {siteConfig.name} on your Mac
        </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            A private, searchable library for screenshots and images on your
            Mac. Find what you need, organize it your way, and drag it into the
            apps where you work.
          </p>
        <div className="mt-8">
          <Button href={siteConfig.appStoreUrl}>
            Download on the Mac App Store
          </Button>
        </div>
      </div>
    </section>
  );
}
