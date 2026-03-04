import { Header, Footer } from "@/components/layout";
import { AnimateOnScroll } from "@/components/ui";
import { OperationsHeroSection } from "@/components/sections/OperationsHeroSection";
import dynamic from "next/dynamic";

const OperationsProblemSection = dynamic(() => import("@/components/sections/OperationsProblemSection").then(m => ({ default: m.OperationsProblemSection })));
const OperationsHowItWorksSection = dynamic(() => import("@/components/sections/OperationsHowItWorksSection").then(m => ({ default: m.OperationsHowItWorksSection })));
const ChorusWaySection = dynamic(() => import("@/components/sections/ChorusWaySection").then(m => ({ default: m.ChorusWaySection })));
const FinalCTASection = dynamic(() => import("@/components/sections/FinalCTASection").then(m => ({ default: m.FinalCTASection })));

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
