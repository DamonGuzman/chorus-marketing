import { SearchPersonIcon, MountainIcon, CoinsIcon, CursorIcon } from "@/components/icons";
import { Badge, Section } from "@/components/ui";

const oldWayItems = [
  {
    title: "Take months to fill a position",
    description:
      "Recruiting, onboarding, and ramp time delays execution and creates planning bottlenecks.",
    Icon: SearchPersonIcon,
  },
  {
    title: "Coordinate between siloed teams",
    description:
      "Hand-offs, meetings, and context switching add overhead that scales with headcount.",
    Icon: MountainIcon,
  },
  {
    title: "Costs $4,000+ per hire",
    description:
      "Even small teams pay comp, benefits, and tooling before a single task ships.",
    Icon: CoinsIcon,
  },
  {
    title: "Training takes weeks",
    description:
      "Knowledge lives in people\u2019s heads\u2014so new work starts slow and repeats old mistakes.",
    Icon: CursorIcon,
  },
];

export function OldWaySection() {
  return (
    <Section className="px-4 py-[50px] md:px-[100px] md:py-20 md:flex md:flex-col md:items-center" id="old-way">
      <div className="self-stretch flex flex-col justify-start items-center gap-6 md:gap-10">
        {/* Header */}
        <div className="self-stretch flex flex-col justify-start items-center gap-6">
          <Badge>The Problem</Badge>
          <div className="self-stretch flex flex-col justify-start items-center gap-4">
            <h2 className="text-center text-[28px] leading-[36px] md:text-5xl md:leading-[78px] font-bold font-['Urbanist'] text-white">
              The Old Way : Managing Individual Players
            </h2>
            <p className="text-center text-[16px] leading-[28px] md:text-xl md:leading-9 font-normal font-['Urbanist'] text-gray-300">
              The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:inline-flex md:justify-start md:items-center gap-4 md:gap-7">
          {oldWayItems.map((item, index) => (
            <div
              key={index}
              className="md:w-72 md:h-72 px-7 pt-7 pb-2.5 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-white/30 backdrop-blur-[30px] inline-flex flex-col justify-start items-start gap-6"
            >
              <item.Icon className="text-gray-200/50" />

              <div className="flex flex-col justify-start items-start gap-10">
                <div className="flex flex-col justify-start items-start gap-7">
                  <h3 className="md:w-44 text-xl leading-7 font-bold font-['Urbanist'] text-gray-100">
                    {item.title}
                  </h3>
                  <p className="md:w-56 text-sm leading-6 font-medium font-['Urbanist'] text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Arrows */}
        <div className="hidden md:inline-flex justify-center items-center gap-5">
          <button
            type="button"
            aria-label="Previous"
            className="w-6 h-6 relative overflow-hidden opacity-50 hover:opacity-100 transition-opacity"
          >
            <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="absolute left-[5px] top-[7px] rotate-180">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.09094 0.265207C9.49676 -0.109399 10.1294 -0.0840962 10.504 0.321722L13.7348 3.82168C14.0884 4.20474 14.0884 4.79518 13.7348 5.17824L10.504 8.67828C10.1294 9.08411 9.49677 9.10941 9.09095 8.73481C8.68513 8.36021 8.65982 7.72755 9.03442 7.32173L10.716 5.49997L0.999999 5.49997C0.447714 5.49997 -7.64154e-07 5.05225 -7.86799e-07 4.49997C-8.09444e-07 3.94768 0.447714 3.49997 0.999999 3.49997L10.716 3.49997L9.03443 1.67829C8.65982 1.27247 8.68513 0.639813 9.09094 0.265207Z" fill="#FCFCFD"/>
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next"
            className="w-6 h-6 relative overflow-hidden opacity-50 hover:opacity-100 transition-opacity"
          >
            <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="absolute left-[5px] top-[7px]">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.09094 0.265207C9.49676 -0.109399 10.1294 -0.0840962 10.504 0.321722L13.7348 3.82168C14.0884 4.20474 14.0884 4.79518 13.7348 5.17824L10.504 8.67828C10.1294 9.08411 9.49677 9.10941 9.09095 8.73481C8.68513 8.36021 8.65982 7.72755 9.03442 7.32173L10.716 5.49997L0.999999 5.49997C0.447714 5.49997 -7.64154e-07 5.05225 -7.86799e-07 4.49997C-8.09444e-07 3.94768 0.447714 3.49997 0.999999 3.49997L10.716 3.49997L9.03443 1.67829C8.65982 1.27247 8.68513 0.639813 9.09094 0.265207Z" fill="#FCFCFD"/>
            </svg>
          </button>
        </div>
      </div>
    </Section>
  );
}
