import { Header, Footer } from "@/components/layout";
import { AnimateOnScroll } from "@/components/ui";
import { FinanceHeroSection } from "@/components/sections/FinanceHeroSection";
import dynamic from "next/dynamic";

const FinanceProblemSection = dynamic(() => import("@/components/sections/FinanceProblemSection").then(m => ({ default: m.FinanceProblemSection })));
const FinanceHowItWorksSection = dynamic(() => import("@/components/sections/FinanceHowItWorksSection").then(m => ({ default: m.FinanceHowItWorksSection })));
const ChorusWaySection = dynamic(() => import("@/components/sections/ChorusWaySection").then(m => ({ default: m.ChorusWaySection })));
const FinalCTASection = dynamic(() => import("@/components/sections/FinalCTASection").then(m => ({ default: m.FinalCTASection })));

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

        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <ChorusWaySection maxWidth="1266px" />
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
