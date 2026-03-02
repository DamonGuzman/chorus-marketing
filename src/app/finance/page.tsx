import { Header, Footer } from "@/components/layout";
import { AnimateOnScroll } from "@/components/ui";
import { FinanceHeroSection } from "@/components/sections/FinanceHeroSection";
import { FinanceProblemSection } from "@/components/sections/FinanceProblemSection";
import { FinanceHowItWorksSection } from "@/components/sections/FinanceHowItWorksSection";
import { ChorusWaySection } from "@/components/sections/ChorusWaySection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-black" style={{ overflowX: "clip" }}>
      <Header />
      <main className="w-full mx-auto">
        <FinanceHeroSection />

        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <FinanceProblemSection />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <FinanceHowItWorksSection />
        </AnimateOnScroll>

        <div className="-mt-16 md:-mt-20">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <ChorusWaySection maxWidth="1266px" />
          </AnimateOnScroll>
        </div>
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
