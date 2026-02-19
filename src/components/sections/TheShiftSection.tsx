import { ScrollTextReveal } from "@/components/ui";

export function TheShiftSection() {
  return (
    <section className="w-full bg-black px-4 md:px-8 pt-10 lg:pt-16 pb-4 lg:pb-6 flex flex-col items-center gap-1">
      <div className="w-32 h-9 px-3 py-1 bg-white/5 rounded-[100px] inline-flex justify-center items-center gap-2 overflow-hidden">
        <span className="text-center text-white text-base font-bold font-['Urbanist'] leading-6">
          The Shift
        </span>
      </div>
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
