import { CtaSection } from "@/components/cta-section";
import { FeaturesSection } from "@/components/features-section";
import { Hero } from "@/components/hero";
import { HomepageFaqSection } from "@/components/homepage-faq-section";
import { JsonLd } from "@/components/json-ld";
import { PricingTeaser } from "@/components/pricing-teaser";
import { PrivacySection } from "@/components/privacy-section";
import { SiteLayout } from "@/components/site-layout";
import { getFaqPageJsonLd, homepageFaqs } from "@/lib/faqs";
import {
  createPageMetadata,
  getSoftwareApplicationJsonLd,
} from "@/lib/seo";

export const metadata = createPageMetadata("home");

export default function HomePage() {
  return (
    <SiteLayout>
      <JsonLd data={getSoftwareApplicationJsonLd()} />
      <JsonLd data={getFaqPageJsonLd(homepageFaqs)} />
      <Hero />
      <FeaturesSection />
      <PrivacySection />
      <HomepageFaqSection />
      <PricingTeaser />
      <CtaSection />
    </SiteLayout>
  );
}
