import Image from "next/image";
import { Section, Badge, ScrollTextReveal } from "@/components/ui";

export function VisionSection() {
  return (
    <Section className="py-[75px] px-8">
      <div className="flex flex-col lg:flex-row items-start gap-[127px] max-w-[1240px] mx-auto">
        {/* Content */}
        <div className="flex flex-col gap-1 max-w-[583px]">
          <Badge>Control</Badge>

          {/* Section Title: 50px, bold, 78px line-height, -0.5px letter-spacing */}
          <ScrollTextReveal
            text="Built By People Who Understand Both Vision And Execution"
            className="text-[50px] leading-[78px] font-bold tracking-[-0.5px]"
          />

          {/* Founder image placeholder */}
          <div className="w-[100px] h-[100px] rounded-[8px] overflow-hidden relative bg-gray-800">
            <Image
              src="/images/hero/vision-image-1.png"
              alt="Founder"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-[16px]">
            {/* Body: 22px, regular, 36px line-height */}
            <p className="text-[22px] leading-[36px] font-normal text-gray-300">
              We&apos;ve been on both sides: building with limited resources and
              watching others scale impossibly fast. We built Chorus because we
              were tired of AI companies overpromising and underdelivering. We
              wanted real magic.
            </p>
            {/* Emphasized quote: 22px, semibold, italic */}
            <p className="text-[22px] leading-[36px] font-semibold italic text-white">
              Not smoke and mirrors. So we built it.
            </p>
            <p className="text-[22px] leading-[36px] font-normal text-gray-300">
              Tested it internally. And now we&apos;re sharing it with founders
              who are ready to build without limits.
            </p>
          </div>
        </div>

        {/* Visual Element with Vector Image */}
        <div className="relative flex-1 min-h-[500px]">
          <Image
            src="/images/decorative/vision-vector.png"
            alt="Vision illustration"
            fill
            className="object-contain"
          />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px]">
            <Image
              src="/images/hero/vision-image-2.png"
              alt="Vision detail"
              fill
              className="object-cover rounded-[35px]"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
