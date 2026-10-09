import { Button } from "@/components/ui/button";
import { pricingDisclaimer, pricingSummary } from "@/lib/site";

export function PricingTeaser() {
  return (
    <section
      id="pricing"
      className="scroll-mt-20 border-t border-border bg-white py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-surface p-10 text-center md:p-14">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            Free vs Pro
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Start with 7 days of Caplio Pro. Keep screenshot capture free
            forever.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Region, full-screen, and fixed-region capture are free forever. New
            users get 7 days of Caplio Pro to try Window Capture, OCR search,
            and advanced organization. After the trial, free capture continues —
            Window Capture and other Pro features need Caplio Pro or Lifetime.
          </p>
          <p className="mt-4 text-xs font-medium uppercase tracking-wider text-accent">
            US Pricing
          </p>
          <p className="mt-2 text-sm text-muted">{pricingSummary}</p>
          <p className="mt-2 text-xs text-muted">{pricingDisclaimer}</p>
          <div className="mt-8">
            <Button href="/pricing" variant="primary">
              View pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
