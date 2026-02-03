import Image from "next/image";
import { Badge } from "@/components/ui";

export function HeroSection() {
  return (
    <section className="relative bg-black h-[659px] overflow-hidden">
      {/* Background Light Beam */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-beam.png"
          alt=""
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Background Glow Effect */}
      <div className="absolute top-[300px] left-1/2 -translate-x-1/2 w-[600px] h-[400px]">
        <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        {/* Badge */}
        <Badge className="mb-[32px]">Control</Badge>

        {/* Headline */}
        <h1 className="text-[64px] leading-[74px] font-bold text-center text-white max-w-[900px] mb-[26px]">
          Chorus is the agentic AI platform that proves{" "}
          <span className="text-gradient">real magic exists</span>
        </h1>

        {/* Subheadline */}
        <p className="text-[22px] leading-[36px] font-normal text-gray-100 text-center max-w-[600px]">
          We don&apos;t promise the impossible. We deliver it.
        </p>
      </div>
    </section>
  );
}

