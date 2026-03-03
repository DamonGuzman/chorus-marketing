import { Header, Footer } from "@/components/layout";
import { AnimateOnScroll } from "@/components/ui";
import { OperationsHeroSection } from "@/components/sections/OperationsHeroSection";
import { OperationsProblemSection } from "@/components/sections/OperationsProblemSection";
import { OperationsHowItWorksSection } from "@/components/sections/OperationsHowItWorksSection";
import { ChorusWaySection } from "@/components/sections/ChorusWaySection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function OperationsPage() {
  return (
    <div className="min-h-screen bg-black" style={{ overflowX: "clip" }}>
      <Header />
      <main className="w-full mx-auto">
        <OperationsHeroSection />

        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <OperationsProblemSection />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <OperationsHowItWorksSection />
        </AnimateOnScroll>

        <div className="md:hidden">
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
