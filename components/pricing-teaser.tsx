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
            New users get full Caplio Pro access for 7 days. After the trial,
            screenshot capture stays free — no subscription required just to
            keep capturing. Caplio Pro unlocks the searchable visual library,
            on-device OCR search, Similar Images, Document Builder, and advanced
            file organization.
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
