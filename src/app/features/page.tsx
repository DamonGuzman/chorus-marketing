import { Header, Footer } from "@/components/layout";
import { AnimateOnScroll } from "@/components/ui";
import { FeaturesHeroSection } from "@/components/sections/FeaturesHeroSection";
import { ChorusAgentsSection } from "@/components/sections/ChorusAgentsSection";
import { TheShiftSection } from "@/components/sections/TheShiftSection";
import { FeaturesStickySteps } from "@/components/sections/FeaturesStickySteps";
import { CampaignSection } from "@/components/sections/CampaignSection";
import { StepCarousel } from "@/components/sections/StepCarousel";
import { FeaturesCardSection } from "@/components/sections/FeaturesCardSection";
import { CollaborationHubSection } from "@/components/sections/CollaborationHubSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

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
