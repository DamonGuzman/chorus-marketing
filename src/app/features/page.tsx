import { Header, Footer } from "@/components/layout";
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
        <ChorusAgentsSection />

        {/* Desktop: show all three sections stacked */}
        <div className="hidden lg:block">
          <GoalDrivenSection />
          <PipelineSection />
          <CampaignSection />
        </div>

        {/* Mobile: horizontal scrollable carousel */}
        <StepCarousel />

        <FeaturesCardSection />
        <CollaborationHubSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
