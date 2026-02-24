import { Header, Footer } from "@/components/layout";
import { AnimateOnScroll } from "@/components/ui";
import { FeaturesHeroSection } from "@/components/sections/FeaturesHeroSection";
import dynamic from "next/dynamic";

const ChorusAgentsSection = dynamic(() => import("@/components/sections/ChorusAgentsSection").then(m => ({ default: m.ChorusAgentsSection })));
const TheShiftSection = dynamic(() => import("@/components/sections/TheShiftSection").then(m => ({ default: m.TheShiftSection })));
const FeaturesStickySteps = dynamic(() => import("@/components/sections/FeaturesStickySteps").then(m => ({ default: m.FeaturesStickySteps })));
const CampaignSection = dynamic(() => import("@/components/sections/CampaignSection").then(m => ({ default: m.CampaignSection })));
const StepCarousel = dynamic(() => import("@/components/sections/StepCarousel").then(m => ({ default: m.StepCarousel })));
const FeaturesCardSection = dynamic(() => import("@/components/sections/FeaturesCardSection").then(m => ({ default: m.FeaturesCardSection })));
const CollaborationHubSection = dynamic(() => import("@/components/sections/CollaborationHubSection").then(m => ({ default: m.CollaborationHubSection })));
const FinalCTASection = dynamic(() => import("@/components/sections/FinalCTASection").then(m => ({ default: m.FinalCTASection })));

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-black" style={{ overflowX: "clip" }}>
      <Header />
      <main className="px-4 md:px-6 lg:px-10">
        <FeaturesHeroSection />

        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <ChorusAgentsSection />
        </AnimateOnScroll>

        {/* Desktop: sticky scroll for steps 01 & 02 */}
        <FeaturesStickySteps />
        <div className="hidden lg:block">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <TheShiftSection />
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <CampaignSection />
          </AnimateOnScroll>
        </div>

        {/* Mobile: horizontal scrollable carousel */}
        <AnimateOnScroll animation="fade-up" duration={0.7}>
          <StepCarousel />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <FeaturesCardSection />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" duration={0.9}>
          <CollaborationHubSection />
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
