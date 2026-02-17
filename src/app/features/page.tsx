import { Header, Footer } from "@/components/layout";
import { AnimateOnScroll } from "@/components/ui";
import { FeaturesHeroSection } from "@/components/sections/FeaturesHeroSection";
import { ChorusAgentsSection } from "@/components/sections/ChorusAgentsSection";
import { GoalDrivenSection } from "@/components/sections/GoalDrivenSection";
import { PipelineSection } from "@/components/sections/PipelineSection";
import { CampaignSection } from "@/components/sections/CampaignSection";
import { FeaturesCardSection } from "@/components/sections/FeaturesCardSection";
import { CollaborationHubSection } from "@/components/sections/CollaborationHubSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { StepCarousel } from "@/components/sections/StepCarousel";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      <main>
        <FeaturesHeroSection />

        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <ChorusAgentsSection />
        </AnimateOnScroll>

        {/* Desktop: show all three sections stacked */}
        <div className="hidden lg:block">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <GoalDrivenSection />
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <PipelineSection />
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
