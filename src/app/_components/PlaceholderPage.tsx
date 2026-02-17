import { Header, Footer } from "@/components/layout";
import { Container } from "@/components/ui";
import { AnimateOnScroll } from "@/components/ui";

export function PlaceholderPage({
  title,
  description = "This page is a placeholder. Replace with your company's content.",
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-[120px] pb-[80px]">
        <Container size="narrow">
          <div className="hero-entrance">
            <h1 className="text-[40px] leading-[1.2] font-bold text-white mb-6">{title}</h1>
            <p className="text-[16px] leading-[1.8] text-gray-200">{description}</p>
          </div>
        </Container>
      </main>
      <AnimateOnScroll animation="fade-in" duration={0.8} threshold={0.05}>
        <Footer />
      </AnimateOnScroll>
    </div>
  );
}
