import { Section, Badge } from "@/components/ui";

export function VisionSection() {
  return (
    <Section className="py-[75px]">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Content */}
        <div className="flex flex-col gap-[47px] max-w-[583px]">
          <Badge>Control</Badge>

          <h2 className="text-[50px] leading-[64px] font-bold text-white tracking-[-0.5px]">
            Built By People Who Understand Both Vision And Execution
          </h2>

          {/* Placeholder for founder image */}
          <div className="w-[100px] h-[100px] bg-gray-700 rounded-lg" />

          <div className="text-lg leading-[36px] font-medium text-gray-300 space-y-4">
            <p>
              We&apos;ve been on both sides: building with limited resources and
              watching others scale impossibly fast. We built Chorus because we
              were tired of AI companies overpromising and underdelivering. We
              wanted real magic.
            </p>
            <p className="text-[22px] font-semibold italic text-white">
              Not smoke and mirrors. So we built it.
            </p>
            <p>
              Tested it internally. And now we&apos;re sharing it with founders
              who are ready to build without limits.
            </p>
          </div>
        </div>

        {/* Visual Element Placeholder */}
        <div className="relative flex-1 min-h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl" />
        </div>
      </div>
    </Section>
  );
}
