import { siteConfig } from "@/lib/site";
import { AppStoreBadge } from "@/components/app-store-badge";

export function CtaSection() {
  return (
    <section className="border-t border-border bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Get {siteConfig.name} on your Mac
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
          Capture screenshots for free. Keep related captures in Sessions,
          search text inside images, and turn what you collect into documents.{" "}
          {siteConfig.privacyLine}
        </p>
        <div className="mt-8 flex justify-center">
          <AppStoreBadge />
        </div>
      </div>
    </section>
  );
}
