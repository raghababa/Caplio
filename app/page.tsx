import { CtaSection } from "@/components/cta-section";
import { FeaturesSection } from "@/components/features-section";
import { Hero } from "@/components/hero";
import { PricingTeaser } from "@/components/pricing-teaser";
import { PrivacySection } from "@/components/privacy-section";
import { SiteLayout } from "@/components/site-layout";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("home");

export default function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <FeaturesSection />
      <PrivacySection />
      <PricingTeaser />
      <CtaSection />
    </SiteLayout>
  );
}
