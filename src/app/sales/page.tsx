import { Header, Footer } from "@/components/layout";
import { AnimateOnScroll } from "@/components/ui";
import { SalesHeroSection } from "@/components/sections/SalesHeroSection";
import { SalesProblemSection } from "@/components/sections/SalesProblemSection";
import { SalesHowItWorksSection } from "@/components/sections/SalesHowItWorksSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function SalesPage() {
  return (
    <div className="min-h-screen bg-black" style={{ overflowX: "clip" }}>
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
