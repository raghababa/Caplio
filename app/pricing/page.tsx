import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site-layout";
import { createPageMetadata } from "@/lib/seo";
import {
  pricingDisclaimer,
  pricingPlans,
  pricingUs,
  siteConfig,
} from "@/lib/site";

export const metadata: Metadata = createPageMetadata("pricing");

export default function PricingPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,113,227,0.06),transparent)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Simple pricing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-foreground">
            Start with 7 days of Caplio Pro. Keep screenshot capture free
            forever.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted">
            New users get full Caplio Pro access for 7 days. After the trial,
            screenshot capture stays free — you do not need a subscription just
            to keep capturing. {siteConfig.privacyLine}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto mb-8 max-w-6xl px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-accent">
            US Pricing
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted">
            {pricingDisclaimer}
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl items-stretch gap-8 px-6 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`flex h-full flex-col rounded-3xl border p-8 md:p-10 ${
                plan.highlighted
                  ? "border-accent bg-white shadow-xl shadow-accent/10 ring-1 ring-accent/20"
                  : "border-border bg-surface"
              }`}
            >
              {plan.badge && (
                <p className="mb-4 text-xs font-medium uppercase tracking-wider text-accent">
                  {plan.badge}
                </p>
              )}
              <h2 className="text-2xl font-semibold">{plan.name}</h2>
              <div className="mt-3 space-y-1">
                {plan.prices.map((price) => (
                  <div key={price.period} className="flex items-baseline gap-2">
                    <span className="text-3xl font-semibold tracking-tight">
                      {price.amount}
                    </span>
                    <span className="text-sm text-muted">{price.period}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 min-h-[4.5rem] text-sm leading-relaxed text-muted md:min-h-[5.25rem]">
                {plan.description}
              </p>
              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-foreground/90"
                  >
                    <svg
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                href={siteConfig.appStoreUrl}
                variant={plan.highlighted ? "primary" : "secondary"}
                className="mt-8 w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-4xl px-6 text-center text-sm text-muted">
          {pricingDisclaimer}
        </p>
      </section>

      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-xl font-semibold">Frequently asked</h2>
          <dl className="mt-8 space-y-8 text-left">
            <div>
              <dt className="font-medium">
                Do I need Caplio Pro to take screenshots?
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">
                No. Screenshot capture is free forever. You do not need a
                subscription or Lifetime purchase just to continue capturing.
                Caplio Pro unlocks the searchable visual library and advanced
                organization and document workflows.
              </dd>
            </div>
            <div>
              <dt className="font-medium">What happens after the Pro trial?</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">
                New users get 7 days of full Caplio Pro access. When the trial
                ends, Caplio does not stop working — screenshot capture remains
                free. Choose a monthly ({pricingUs.monthly}), yearly (
                {pricingUs.yearly}), or Lifetime ({pricingUs.lifetime}{" "}
                one-time) US purchase only if you want to keep using Caplio Pro
                features. Actual App Store prices may vary by country or region.
                Your library remains on your Mac.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Is the trial an App Store offer?</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">
                No. Caplio includes a 7-day local Caplio Pro trial that starts on
                your Mac. It is managed by Caplio and is not an App Store
                introductory offer.
              </dd>
            </div>
            <div>
              <dt className="font-medium">What is Lifetime?</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">
                Lifetime is a one-time {pricingUs.lifetime} US purchase that
                unlocks Caplio Pro without a recurring subscription. Actual App
                Store prices may vary by country or region. If you already have
                an active subscription, purchasing Lifetime does not
                automatically cancel it. Manage or cancel that subscription
                through your Apple Account to avoid future renewals.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Can I restore a purchase?</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">
                Yes. Use Restore Purchases in Caplio if you previously purchased
                Caplio Pro with the same Apple Account.
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </SiteLayout>
  );
}
