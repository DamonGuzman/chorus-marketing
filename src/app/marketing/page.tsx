import { Header, Footer } from "@/components/layout";
import { AnimateOnScroll } from "@/components/ui";
import { MarketingHeroSection } from "@/components/sections/MarketingHeroSection";
import dynamic from "next/dynamic";

const MarketingProblemSection = dynamic(() => import("@/components/sections/MarketingProblemSection").then(m => ({ default: m.MarketingProblemSection })));
const MarketingHowItWorksSection = dynamic(() => import("@/components/sections/MarketingHowItWorksSection").then(m => ({ default: m.MarketingHowItWorksSection })));
const FinalCTASection = dynamic(() => import("@/components/sections/FinalCTASection").then(m => ({ default: m.FinalCTASection })));

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-black" style={{ overflowX: "clip" }}>
      <Header />
      <main className="w-full mx-auto">
        <MarketingHeroSection />

        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <MarketingProblemSection />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <MarketingHowItWorksSection />
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
