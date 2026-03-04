import { Header, Footer } from "@/components/layout";
import { AnimateOnScroll } from "@/components/ui";
import { SalesHeroSection } from "@/components/sections/SalesHeroSection";
import dynamic from "next/dynamic";

const SalesProblemSection = dynamic(() => import("@/components/sections/SalesProblemSection").then(m => ({ default: m.SalesProblemSection })));
const SalesHowItWorksSection = dynamic(() => import("@/components/sections/SalesHowItWorksSection").then(m => ({ default: m.SalesHowItWorksSection })));
const FinalCTASection = dynamic(() => import("@/components/sections/FinalCTASection").then(m => ({ default: m.FinalCTASection })));

export default function SalesPage() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden" style={{ overflowX: "clip" }}>
      <Header />
      <main className="w-full mx-auto">
        <SalesHeroSection />

        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <SalesProblemSection />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <SalesHowItWorksSection />
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
