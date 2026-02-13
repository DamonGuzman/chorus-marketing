import { Badge, Section } from "@/components/ui";
import Image from "next/image";

const capabilityCards = [
  { name: "Sales", iconSrc: "/images/figma/Sales.svg" },
  { name: "Finance", iconSrc: "/images/figma/Finance.svg" },
  { name: "Marketing", iconSrc: "/images/figma/Marketing.svg" },
  { name: "Operations", iconSrc: "/images/figma/Operations.svg" },
] as const;

const capabilityDescription = "You don’t have to work in IT or even be tech savvy to use our products.";

export function CapabilitiesSection() {
  return (
    <Section className="py-[50px] md:py-20 relative overflow-hidden" id="use-cases">
      <div className="mx-auto px-4 md:px-[100px] relative z-10">
        {/* Section Header */}
        <div className="flex flex-col justify-start items-center gap-6 mb-[40px] md:mb-14">
          <Badge>Capabilities</Badge>
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="text-center text-white text-[32px] md:text-5xl font-bold font-['Urbanist'] leading-[1.3] md:leading-[78px]">
              What Your AI Workforce Can Do
            </h2>
            <p className="text-center text-gray-300 text-[16px] leading-[26px] md:text-xl md:leading-9 font-normal font-['Urbanist']">
              The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-[60px]">
          {/* Left: capability cards */}
          <div className="w-full lg:w-[520px]">
            <div className="flex flex-col gap-[20px] md:gap-[24px]">
              {capabilityCards.map(({ name, iconSrc }, index) => (
                <div
                  key={name}
                  className={[
                    "w-full md:w-[500px] h-36",
                    "pl-8 pr-6 py-6",
                    "bg-gradient-to-r from-white/5 via-white/10 to-white/5",
                    "rounded-3xl",
                    "outline outline-[0.85px] outline-offset-[-0.85px] outline-white/30",
                    "backdrop-blur-xl",
                    "inline-flex items-center gap-7",
                    index % 2 === 0 ? "ml-[40px] md:ml-0 lg:ml-[50px]" : "mr-[0px] md:mr-0 lg:ml-0",
                  ].join(" ")}
                >
                  <div className="relative shrink-0 w-25 h-25">
                    <div className="w-25 h-25 opacity-60 bg-white/50 rounded-full blur-xl absolute left-1 top-1" />
                    <Image src={iconSrc} alt="" width={56} height={56} className="w-25 h-25 object-contain relative" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-white text-2xl font-bold font-['Urbanist']">
                      {name}
                    </h3>
                    <p className="text-neutral-500 text-base font-semibold font-['Urbanist'] leading-6">
                      {capabilityDescription}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: team preview — hidden on mobile, shown on lg */}
          <div className="hidden lg:block w-full lg:w-[560px]">
            <div className="relative flex justify-center">
              {/* Floating emoji orbs — positions matched to Figma */}
              <div aria-hidden className="pointer-events-none hidden lg:block">
                {/* 📈 Top center */}
                <div className="absolute left-[35%] top-0 -translate-x-1/2 -translate-y-1/2 z-10 grid place-items-center size-[64px] rounded-full bg-[#1a1a1a] border border-white/10 shadow-[0px_4px_25px_rgba(0,0,0,0.4)]">
                  <span className="text-[28px] leading-none">📈</span>
                </div>

                {/* 🧠 Left side, ~50% down */}
                <div className="absolute -left-[10px] top-[50%] -translate-y-1/2 z-10 grid place-items-center size-[64px] rounded-full bg-[#1a1a1a] border border-white/10 shadow-[0px_4px_25px_rgba(0,0,0,0.4)]">
                  <span className="text-[28px] leading-none">🧠</span>
                </div>

                {/* 🥳 Right side, ~60% down */}
                <div className="absolute -right-[10px] top-[60%] -translate-y-1/2 z-10 grid place-items-center size-[64px] rounded-full bg-[#1a1a1a] border border-white/10 shadow-[0px_4px_25px_rgba(0,0,0,0.4)]">
                  <span className="text-[28px] leading-none">🥳</span>
                </div>

                {/* 🚀 Bottom right-of-center */}
                <div className="absolute left-[70%] bottom-0 -translate-x-1/2 translate-y-1/2 z-10 grid place-items-center size-[64px] rounded-full bg-[#1a1a1a] border border-white/10 shadow-[0px_4px_25px_rgba(0,0,0,0.4)]">
                  <span className="text-[26px] leading-none">🚀</span>
                </div>
              </div>

              <div
                className={[
                  "relative",
                  "w-[497px] h-[595px]",
                  "bg-black rounded-[65px] border-[6px] border-white/10",
                  "px-[28px] pt-[32px] pb-[36px]",
                  "flex flex-col",
                ].join(" ")}
                data-figma-node="4229:62783"
              >
                {/* Top member cards */}
                <div className="space-y-[16px]">
                  {[
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
                  ].map((member) => (
                    <div
                      key={member.name}
                      className="px-8 py-6 bg-neutral-900 rounded-3xl shadow-[0px_5px_32px_0px_rgba(0,0,0,0.25)] shadow-[inset_0px_0px_6.6px_0px_rgba(255,255,255,0.27)] inline-flex justify-between items-center w-full"
                    >
                      <div className="flex items-center gap-4">
                        <Image
                          alt=""
                          src={member.avatarSrc}
                          width={64}
                          height={64}
                          className="size-16 rounded-full object-cover"
                        />
                        <div className="inline-flex flex-col gap-4">
                          <div className="inline-flex items-center gap-3.5">
                            <span className="text-white text-xl font-bold font-['Urbanist'] leading-10">
                              {member.name}
                            </span>
                            <span className="size-2 bg-green-500 rounded-full" />
                            <span className="text-[#CBCACC] text-base font-bold font-['Urbanist'] leading-7">
                              {member.status}
                            </span>
                          </div>
                          <div className="relative h-11 px-5 py-3 bg-white/5 rounded-3xl flex items-center gap-3.5 overflow-hidden">
                            <div className="w-20 h-20 absolute left-[46px] -top-[18px] opacity-50 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(151,71,255,0),rgba(185,156,252,0))] blur-xl" />
                            <span className="text-white text-base font-medium font-['Urbanist'] leading-6 relative">
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
                  <h3 className="text-[24px] font-bold font-['Urbanist'] leading-[30px] text-[#CBCACC]">
                    AI That Works for Every Role
                  </h3>
                  <p className="mt-[14px] text-[16px] font-normal font-['Urbanist'] leading-[28px] text-[#7D7C83]">
                    Automate strategy, execution, and insights across teams—marketing, sales, finance, and beyond—so your people focus on goals, not busywork.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
