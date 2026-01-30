import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  FeaturesSection,
  VisionSection,
  TestimonialsSection,
  TeamSection,
  CTASection,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <VisionSection />
        <TestimonialsSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
