import { Badge, Button } from "@/components/ui";

export function HeroSection() {
  return (
    <section className="relative bg-black min-h-[659px] overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-[88px] left-1/2 -translate-x-1/2 w-[736px] h-[571px] opacity-50">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-purple-600/10 to-transparent blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-[146px] px-6 lg:px-[120px]">
        <div className="max-w-[691px] flex flex-col gap-[33px]">
          <Badge>Control</Badge>

          <h1 className="text-[64px] leading-[74px] font-bold text-gradient">
            Chorus is the agentic AI platform that proves real magic exists
          </h1>

          <p className="text-[28px] leading-[36px] font-medium text-gray-300">
            We don&apos;t promise the impossible. We deliver it.
          </p>

          <div className="flex gap-4 mt-4">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
