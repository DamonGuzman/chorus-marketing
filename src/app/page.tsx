import { Header, Footer } from "@/components/layout";
import { AnimateOnScroll } from "@/components/ui";
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
  FinalCTASection,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      <main className="width-full mx-auto">
        <NewHeroSection />

        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <OldWaySection />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <ChorusWaySection />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <AIWorkforceSection />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" duration={0.9}>
          <HowItWorksSection />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <CapabilitiesSection />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <FoundersSection />
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={0.9}>
          <IntegrationsSection />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <PricingSection />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" duration={0.9}>
          <FinalCTASection />
        </AnimateOnScroll>
      </main>
      <AnimateOnScroll animation="fade-in" duration={0.8} threshold={0.05}>
        <Footer />
      </AnimateOnScroll>
    </div>
  );
}
