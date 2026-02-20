import { Badge, ScrollTextReveal } from "@/components/ui";

export function TheShiftSection() {
  return (
    <section className="w-full bg-black px-4 md:px-8 pt-10 lg:pt-16 pb-4 lg:pb-6 flex flex-col items-center gap-1">
      <Badge className="w-32">The Shift</Badge>
      <div className="flex flex-col items-center gap-1">
        <ScrollTextReveal
          text="Your AI Team Knows Your Business"
          className="text-5xl font-bold font-['Urbanist'] leading-[78px] text-center"
        />
        <p className="text-center text-gray-300 text-2xl font-medium font-['Urbanist'] leading-9">
          The Difference That Changes Everything
        </p>
      </div>
    </section>
  );
}
