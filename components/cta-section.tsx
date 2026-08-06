import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="border-t border-border bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {siteConfig.name} is coming soon
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
          A private, searchable visual library for your Mac with on-device OCR,
          timeline browsing, and menu bar search.
        </p>
        <div className="mt-8">
          <Button disabled className="cursor-not-allowed opacity-70">
            Mac App Store: Coming soon
          </Button>
        </div>
      </div>
    </section>
  );
}
