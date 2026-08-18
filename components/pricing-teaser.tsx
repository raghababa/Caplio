import { Button } from "@/components/ui/button";
import { pricingDisclaimer } from "@/lib/site";

export function PricingTeaser() {
  return (
    <section className="border-t border-border bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-surface p-10 text-center md:p-14">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Try free for 7 days on your Mac
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Your data stays safely on your Mac. Choose a subscription or
            Lifetime after your trial to continue using Caplio Pro.
          </p>
          <p className="mt-3 text-sm text-muted">
            Caplio Pro is $2.99/month, $29.99/year, or $69.99 Lifetime.
          </p>
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
