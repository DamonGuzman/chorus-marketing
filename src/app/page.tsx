import { Header, Footer } from "@/components/layout";
import {
  NewHeroSection,
  OldWaySection,
  ChorusWaySection,
  AIWorkforceSection,
  HowItWorksSection,
  CapabilitiesSection,
  FoundersSection,
  IntegrationsSection,
  PricingSection,
  FAQSection,
  FinalCTASection,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <NewHeroSection />
        <OldWaySection />
        <ChorusWaySection />
        <AIWorkforceSection />
        <HowItWorksSection />
        <CapabilitiesSection />
        <FoundersSection />
        <IntegrationsSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
