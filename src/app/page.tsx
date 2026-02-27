import { Header, Footer } from "@/components/layout";
import { AnimateOnScroll } from "@/components/ui";
import { NewHeroSection } from "@/components/sections";
import dynamic from "next/dynamic";

const OldWaySection = dynamic(() => import("@/components/sections/OldWaySection").then(m => ({ default: m.OldWaySection })));
const SolutionSection = dynamic(() => import("@/components/sections/SolutionSection").then(m => ({ default: m.SolutionSection })));
const ChorusWaySection = dynamic(() => import("@/components/sections/ChorusWaySection").then(m => ({ default: m.ChorusWaySection })));
const AIWorkforceSection = dynamic(() => import("@/components/sections/AIWorkforceSection").then(m => ({ default: m.AIWorkforceSection })));
const HowItWorksSection = dynamic(() => import("@/components/sections/HowItWorksSection").then(m => ({ default: m.HowItWorksSection })));
const WorkforceCardsSection = dynamic(() => import("@/components/sections/WorkforceCardsSection").then(m => ({ default: m.WorkforceCardsSection })));
const CapabilitiesSection = dynamic(() => import("@/components/sections/CapabilitiesSection").then(m => ({ default: m.CapabilitiesSection })));
const FoundersSection = dynamic(() => import("@/components/sections/FoundersSection").then(m => ({ default: m.FoundersSection })));
const IntegrationsSection = dynamic(() => import("@/components/sections/IntegrationsSection").then(m => ({ default: m.IntegrationsSection })));
const PricingSection = dynamic(() => import("@/components/sections/PricingSection").then(m => ({ default: m.PricingSection })));
const FinalCTASection = dynamic(() => import("@/components/sections/FinalCTASection").then(m => ({ default: m.FinalCTASection })));

export default function Home() {
  return (
    <div className="min-h-screen bg-black" style={{ overflowX: "clip" }}>
      <Header />
      <main className="w-full mx-auto px-4 md:px-6 lg:px-10">
        <NewHeroSection />

        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <OldWaySection />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <SolutionSection />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <ChorusWaySection />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <AIWorkforceSection />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <WorkforceCardsSection />
        </AnimateOnScroll>

        <HowItWorksSection />

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

      </main>
      <AnimateOnScroll animation="fade-up" duration={0.9}>
        <FinalCTASection />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-in" duration={0.8} threshold={0.05}>
        <Footer />
      </AnimateOnScroll>
    </div>
  );
}
