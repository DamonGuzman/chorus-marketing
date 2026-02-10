import { Header, Footer } from "@/components/layout";
import { FAQSection } from "@/components/sections";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-[80px]">
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
