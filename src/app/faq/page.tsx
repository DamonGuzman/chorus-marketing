import { Header, Footer } from "@/components/layout";
import { AnimateOnScroll } from "@/components/ui";
import { FAQSection } from "@/components/sections";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-[80px] w-full mx-auto">
        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <FAQSection />
        </AnimateOnScroll>
      </main>
      <AnimateOnScroll animation="fade-in" duration={0.8} threshold={0.05}>
        <Footer />
      </AnimateOnScroll>
    </div>
  );
}
