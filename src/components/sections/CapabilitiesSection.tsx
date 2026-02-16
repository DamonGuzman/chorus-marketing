import { Badge, Section } from "@/components/ui";
import Image from "next/image";

const capabilityCards = [
  { name: "Sales", iconSrc: "/images/figma/Sales.svg" },
  { name: "Finance", iconSrc: "/images/figma/Finance.svg" },
  { name: "Marketing", iconSrc: "/images/figma/Marketing.svg" },
  { name: "Operations", iconSrc: "/images/figma/Operations.svg" },
] as const;

const capabilityDescription = "You don’t have to work in IT or even be tech savvy to use our products.";

const teamMembers = [
  {
    name: "David Fincher",
    status: "Active",
    role: "Project Manager",
    avatarSrc: "/images/team/member-1.png",
  },
  {
    name: "Steve Jan",
    status: "Active",
    role: "UX Designer",
    avatarSrc: "/images/team/member-2.png",
  },
];

export function CapabilitiesSection() {
  return (
    <Section className="self-stretch px-4 py-10 md:py-20 md:px-8 inline-flex md:flex flex-col justify-start items-center gap-6 md:gap-14 relative overflow-hidden" id="use-cases">
      {/* Section Header */}
      <Badge>Capabilities</Badge>
      <div className="flex flex-col justify-start items-center gap-4">
        <h2 className="text-center text-white text-2xl leading-8 md:text-5xl font-bold font-['Urbanist'] md:leading-[78px]">
          What Your AI Workforce Can Do
        </h2>
        <p className="w-full text-center text-gray-300 text-sm leading-6 md:text-xl md:leading-9 font-normal font-['Urbanist']">
          The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-[60px]">
        {/* Left: capability cards */}
        <div className="w-full lg:w-[520px]">
          <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-[24px]">
            {capabilityCards.map(({ name, iconSrc }, index) => (
              <div
                key={name}
                className={[
                  "max-lg:w-72 lg:w-[500px] max-lg:h-20 lg:h-36",
                  "max-lg:pl-5 max-lg:pr-4 max-lg:py-4 lg:pl-8 lg:pr-6 lg:py-6",
                  "bg-gradient-to-r from-white/5 via-white/10 to-white/5",
                  "max-lg:rounded-2xl lg:rounded-3xl",
                  "outline max-lg:outline-[0.52px] lg:outline-[0.85px] max-lg:outline-offset-[-0.52px] lg:outline-offset-[-0.85px] outline-white/30",
                  "max-lg:backdrop-blur-lg lg:backdrop-blur-xl",
                  "inline-flex items-center max-lg:gap-5 lg:gap-7",
                  [
                    "max-lg:self-end",
                    "max-lg:self-end max-lg:mr-10",
                    "max-lg:self-start max-lg:ml-10",
                    "max-lg:self-start",
                  ][index] || "",
                  index % 2 === 0 ? "lg:ml-[50px]" : "",
                ].join(" ")}
              >
                <div className="relative shrink-0 max-lg:w-9 max-lg:h-9 lg:w-25 lg:h-25">
                  <div className="max-lg:w-8 max-lg:h-8 lg:w-25 lg:h-25 opacity-60 bg-white/50 rounded-full max-lg:blur-lg lg:blur-xl absolute max-lg:left-0.5 max-lg:top-0.5 lg:left-1 lg:top-1" />
                  <Image src={iconSrc} alt="" width={100} height={100} className="max-lg:w-9 max-lg:h-9 lg:w-25 lg:h-25 object-contain relative" />
                </div>
                <div className="flex flex-col max-lg:gap-2.5 lg:gap-4">
                  <h3 className="text-white max-lg:text-base lg:text-2xl font-bold font-['Urbanist']">
                    {name}
                  </h3>
                  <p className="max-lg:w-48 lg:w-auto text-neutral-500 max-lg:text-xs lg:text-base font-semibold font-['Urbanist'] max-lg:leading-4 lg:leading-6">
                    {capabilityDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: team preview */}
        <div className="w-full lg:w-[560px]">
          <div className="flex justify-center">
            <div className="relative w-64 h-80 lg:w-[497px] lg:h-[595px] bg-black rounded-[35px] lg:rounded-[65px] border-[3.24px] lg:border-[6px] border-white/10 px-4 pt-5 pb-6 lg:px-[28px] lg:pt-[32px] lg:pb-[36px] flex flex-col">
              {/* Floating emoji orbs — positioned relative to phone frame */}
              <div aria-hidden className="pointer-events-none">
                {/* 📈 Top center */}
                <div className="absolute left-[35%] -top-5 lg:-top-10 -translate-x-1/2 z-10 grid place-items-center max-lg:size-9 lg:size-[64px] rounded-full bg-[#1a1a1a] border border-white/10 shadow-[0px_4px_25px_rgba(0,0,0,0.4)]">
                  <span className="max-lg:text-sm lg:text-[28px] leading-none">📈</span>
                </div>
                {/* 🧠 Left */}
                <div className="absolute -left-7 lg:-left-10 top-[65%] lg:top-[60%] -translate-y-1/2 z-10 grid place-items-center max-lg:size-9 lg:size-[64px] rounded-full bg-[#1a1a1a] border border-white/10 shadow-[0px_4px_25px_rgba(0,0,0,0.4)]">
                  <span className="max-lg:text-sm lg:text-[28px] leading-none">🧠</span>
                </div>
                {/* 🥳 Right */}
                <div className="absolute -right-7 lg:-right-10 top-[70%] lg:top-[65%] -translate-y-1/2 z-10 grid place-items-center max-lg:size-9 lg:size-[64px] rounded-full bg-[#1a1a1a] border border-white/10 shadow-[0px_4px_25px_rgba(0,0,0,0.4)]">
                  <span className="max-lg:text-sm lg:text-[28px] leading-none">🥳</span>
                </div>
                {/* 🚀 Bottom */}
                <div className="absolute left-[65%] lg:left-[70%] bottom-0 -translate-x-1/2 translate-y-1/2 z-10 grid place-items-center max-lg:size-9 lg:size-[64px] rounded-full bg-[#1a1a1a] border border-white/10 shadow-[0px_4px_25px_rgba(0,0,0,0.4)]">
                  <span className="max-lg:text-sm lg:text-[26px] leading-none">🚀</span>
                </div>
              </div>
              {/* Top member cards */}
              <div className="space-y-2.5 lg:space-y-[16px]">
                {teamMembers.map((member) => (
                  <div
                    key={member.name}
                    className="px-4 py-4 lg:px-8 lg:py-6 bg-neutral-900 rounded-2xl lg:rounded-3xl shadow-[0px_2.75px_17.2px_0px_rgba(0,0,0,0.25)] shadow-[inset_0px_0px_3.57px_0px_rgba(255,255,255,0.27)] lg:shadow-[0px_5px_32px_0px_rgba(0,0,0,0.25)] lg:shadow-[inset_0px_0px_6.6px_0px_rgba(255,255,255,0.27)] inline-flex justify-between items-center w-full"
                  >
                    <div className="flex items-center gap-2.5 lg:gap-4">
                      <Image
                        alt=""
                        src={member.avatarSrc}
                        width={64}
                        height={64}
                        className="w-10 h-10 lg:size-16 rounded-full object-cover"
                      />
                      <div className="inline-flex flex-col gap-2.5 lg:gap-4">
                        <div className="inline-flex items-center gap-2 lg:gap-3.5">
                          <span className="text-white text-xs lg:text-xl font-bold font-['Urbanist'] leading-5 lg:leading-10">
                            {member.name}
                          </span>
                          <span className="w-1 h-1 lg:size-2 bg-green-500 rounded-full" />
                          <span className="text-[#CBCACC] text-[9.1px] lg:text-base font-bold font-['Urbanist'] leading-4 lg:leading-7">
                            {member.status}
                          </span>
                        </div>
                        <div className="relative h-6 lg:h-11 px-2.5 lg:px-5 py-1.5 lg:py-3 bg-white/5 rounded-2xl lg:rounded-3xl flex items-center gap-2 lg:gap-3.5 overflow-hidden">
                          <div className="w-20 h-20 absolute left-[46px] -top-[18px] opacity-50 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(151,71,255,0),rgba(185,156,252,0))] blur-xl" />
                          <span className="text-white text-[9.1px] lg:text-base font-medium font-['Urbanist'] leading-3 lg:leading-6 relative">
                            {member.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Copy */}
              <div className="mt-auto">
                <h3 className="text-sm lg:text-[24px] font-bold font-['Urbanist'] leading-4 lg:leading-[30px] text-[#CBCACC]">
                  AI That Works for Every Role
                </h3>
                <p className="mt-2 lg:mt-[14px] text-[10px] lg:text-[16px] font-normal font-['Urbanist'] leading-4 lg:leading-[28px] text-[#7D7C83]">
                  Automate strategy, execution, and insights across teams—marketing, sales, finance, and beyond—so your people focus on goals, not busywork.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
