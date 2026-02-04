import Image from "next/image";
import { ButtonLink, IntegrationLogo } from "@/components/ui";
import { PRIMARY_CTA_HREF } from "@/content/site";
import { Logo, ChatIcon, BellIcon, DotsIcon, SearchIcon, PencilIcon, LockIcon, CheckIcon, ChevronIcon } from "@/components/icons";
import { TuringAgentsTaskPanel } from "@/components/figma/TuringAgentsTaskPanel";

type AvatarVariant = "john" | "danny" | "frank" | "sarah";

const avatarSrc: Record<AvatarVariant, string> = {
  john: "/images/team/member-1.png",
  danny: "/images/team/member-2.png",
  frank: "/images/team/member-3.png",
  sarah: "/images/team/member-4.png",
};

function Avatar({
  alt,
  variant,
  className,
}: {
  alt: string;
  variant: AvatarVariant;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-full border border-white/10 bg-white/5 ${className ?? ""}`}
      aria-label={alt}
      title={alt}
    >
      <Image src={avatarSrc[variant]} alt={alt} fill className="object-cover" />
    </div>
  );
}

const channelItems = [
  { name: "Marketing Campaign", color: "bg-[#36C5F0]/25" },
  { name: "Product Research", color: "bg-[#E01E5A]/25" },
  { name: "Financial Analysis", color: "bg-[#A259FF]/25", locked: true },
  { name: "General", color: "bg-[#2EB67D]/25" },
  { name: "Turingagents", color: "bg-[#3B82F6]/25" },
  { name: "Customer Discovery", color: "bg-[#22C55E]/25", active: true },
  { name: "Standup meeting", color: "bg-[#EF4444]/25", locked: true },
  { name: "Financial Analysis", color: "bg-[#A259FF]/25" },
];

export function NewHeroSection() {
  return (
    <section className="relative bg-black min-h-[1157px] overflow-hidden" id="about">
      {/* Background Glow Effect */}
      <div className="absolute top-[88px] right-0 w-[1353px] h-[1235px] opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-purple-600/10 to-transparent blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-[120px] md:pt-[165px] px-6 md:px-[30px] max-w-[1380px] mx-auto">
        {/* Hero Header */}
        <div className="flex flex-col items-center text-center gap-[29px]">
          <div className="flex flex-col items-center text-center gap-[19px]">
            <h1 className="text-[50px] md:text-[70px] leading-[60px] md:leading-[78px] font-extrabold tracking-[-1.4px] text-white">
              Stop Hiring. Start Building.
            </h1>
            <p className="text-[18px] md:text-[22px] leading-[28px] md:leading-[36px] font-normal text-gray-100 max-w-[1034px]">
              The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
            </p>
          </div>

          <ButtonLink href={PRIMARY_CTA_HREF} variant="primary" size="md">
            Build Your Team Now
          </ButtonLink>
        </div>

        {/* App Mockup */}
        <div className="mt-[50px] flex gap-[35px] max-w-[1252px] mx-auto">
          {/* Sidebar */}
          <div className="w-[316px] shrink-0 p-[11px]">
            {/* Logo */}
            <div className="flex items-center justify-between mb-[11px]">
              <Logo className="w-[33.7px] h-[32.05px] text-white" />
              <div className="flex items-center gap-[18px] text-white/60">
                <button
                  type="button"
                  aria-label="Search"
                  className="w-[22px] h-[22px] rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors"
                >
                  <SearchIcon className="w-[14px] h-[14px]" />
                </button>
                <button
                  type="button"
                  aria-label="Edit"
                  className="w-[20px] h-[20px] rounded border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors"
                >
                  <PencilIcon className="w-[14px] h-[14px]" />
                </button>
              </div>
            </div>

            {/* Navigation Items */}
            <div className="space-y-0 mb-[11px]">
              {[
                { icon: ChatIcon, label: "DMs" },
                { icon: CheckIcon, label: "Work" },
                { icon: BellIcon, label: "Activity" },
                { icon: DotsIcon, label: "More" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="relative flex items-center gap-[22px] px-[11px] py-[10px] rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div aria-hidden className="absolute left-[104px] -top-[10px] w-[64px] h-[62px] bg-white/5 blur-[18px] opacity-40 rounded-full" />
                  <Icon className="text-white/60" />
                  <span className="text-[11px] font-medium text-white/80">{label}</span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10 my-[11px]" />

            {/* Channels */}
            <div className="mb-[20px]">
              <div className="flex items-center justify-between px-[6px] py-[7px]">
                <div className="flex items-center gap-[7px]">
                  <ChevronIcon className="w-[10px] h-[6px] text-white/60" direction="down" />
                  <span className="text-[11px] font-semibold text-white">Channels</span>
                </div>
                <span className="text-white/40 text-lg">+</span>
              </div>

              <div className="relative space-y-0 pl-[12px]">
                <div aria-hidden className="absolute left-[10px] top-[4px] bottom-[4px] w-px bg-white/10" />
                {channelItems.map((channel) => (
                  <div
                    key={channel.name}
                    className={`relative flex items-center gap-[10px] pl-[14px] pr-[10px] py-[7px] rounded-[12px] ${
                      channel.active ? "bg-white/5" : ""
                    }`}
                  >
                    <div
                      aria-hidden
                      className={`w-[18px] h-[18px] rounded-full grid place-items-center ${channel.color}`}
                    >
                      <span className="text-[10px] text-white/70">#</span>
                    </div>
                    <span className={`text-[11px] font-medium ${channel.active ? "text-white/80" : "text-white/60"}`}>
                      {channel.name}
                    </span>
                    {channel.locked && <LockIcon className="w-[14px] h-[14px] text-white/30 ml-auto" />}
                    {channel.active && (
                      <button
                        type="button"
                        aria-label="More"
                        className="ml-auto text-white/30 hover:text-white/60 transition-colors"
                      >
                        <DotsIcon className="w-[16px] h-[16px]" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* More */}
            <div className="flex items-center gap-[11px] px-[36px] py-[7px]">
              <DotsIcon className="text-white/40" />
              <span className="text-[11px] font-medium text-white/60">More</span>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 bg-gradient-to-b from-white/5 via-white/[0.02] to-transparent rounded-[40px] border border-white/10 shadow-[inset_0px_0px_8px_0px_rgba(255,255,255,0.27)] backdrop-blur-[30px] p-[20px]">
            {/* Messages */}
            <div className="space-y-[16px]">
              {/* Message 1 - John Doe */}
              <div className="flex gap-[10px]">
                <Avatar variant="john" alt="John Doe" className="w-[28px] h-[28px] shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-[10px] mb-[10px]">
                    <span className="text-[10px] font-medium text-white">John Doe</span>
                    <span className="text-[10px] text-white/40">1:46 AM</span>
                  </div>
                  <div className="bg-white/5 rounded-[14px] px-[12px] py-[10px] max-w-[564px] border border-white/5">
                    <p className="text-[10px] text-white/70 leading-relaxed">
                      Hello Danny! I want to manage company&apos;s finances and team performance every month.
                    </p>
                  </div>
                </div>
              </div>

              {/* Message 2 - Danny */}
              <div className="flex gap-[10px]">
                <Avatar variant="danny" alt="Danny" className="w-[28px] h-[28px] shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-[10px] mb-[10px]">
                    <span className="text-[10px] font-medium text-white">Danny</span>
                    <span className="text-[10px] text-white/40">1:50 AM</span>
                  </div>
                  <div className="bg-white/5 rounded-[14px] px-[12px] py-[10px] max-w-[531px] border border-white/5">
                    <p className="text-[10px] text-white/70 leading-relaxed">
                      Hey John. From your request, I can see that you&apos;re aiming to accomplish two main goals
                    </p>
                  </div>
                </div>
              </div>

              {/* Message 3 - Frank AI Agent */}
              <div className="flex gap-[10px]">
                <div className="relative shrink-0">
                  <Avatar variant="frank" alt="Frank" className="w-[28px] h-[28px]" />
                  <div className="absolute -bottom-0.5 -right-0.5 px-[6px] py-[2px] bg-purple-600 rounded-full border border-white/10">
                    <span className="text-[7px] font-medium text-white">AI Agent</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-[10px] mb-[10px]">
                    <span className="text-[10px] font-medium text-white">Frank</span>
                    <span className="text-[10px] text-white/40">1:50 AM</span>
                  </div>
                  <div className="bg-white/5 rounded-[14px] px-[12px] py-[10px] max-w-[575px] border border-white/5">
                    <p className="text-[10px] text-white/70 leading-relaxed mb-[12px]">
                      From your request, you&apos;re aiming to accomplish two main goals. I&apos;ll connect with your CRM and task management tool
                      <span className="inline-flex items-center gap-[6px] mx-[6px]">
                        <span className="text-white/40">(</span>
                        <span className="inline-flex items-center gap-[4px]">
                          <IntegrationLogo name="Slack" size="sm" shape="circle" />
                          <span className="text-[10px] text-white/70">Slack</span>
                        </span>
                        <span className="text-white/40">+</span>
                        <span className="inline-flex items-center gap-[4px]">
                          <IntegrationLogo name="Stripe" size="sm" shape="circle" />
                          <span className="text-[10px] text-white/70">Stripe</span>
                        </span>
                        <span className="text-white/40">+</span>
                        <span className="inline-flex items-center gap-[4px]">
                          <IntegrationLogo name="HubSpot" size="sm" shape="circle" />
                          <span className="text-[10px] text-white/70">HubSpot</span>
                        </span>
                        <span className="text-white/40">)</span>
                      </span>
                      to fetch automatically. Shall I connect?
                    </p>
                  </div>
                </div>
              </div>

              {/* Message 4 - John Doe follow up */}
              <div className="flex gap-[10px]">
                <Avatar variant="john" alt="John Doe" className="w-[28px] h-[28px] shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-[10px] mb-[10px]">
                    <span className="text-[10px] font-medium text-white">John Doe</span>
                    <span className="text-[10px] text-white/40">1:46 AM</span>
                  </div>
                  <div className="bg-white/5 rounded-[14px] px-[12px] py-[10px] max-w-[305px] border border-white/5">
                    <p className="text-[10px] text-white/70 leading-relaxed">
                      Yes, connect Stripe now. I&apos;ll connect HubSpot later
                    </p>
                  </div>
                </div>
              </div>

              {/* Goal Created row */}
              <div className="flex items-center justify-between bg-gradient-to-r from-[#F2AB53]/15 via-white/5 to-white/[0.02] rounded-[14px] border border-white/5 px-[12px] py-[10px]">
                <div className="flex items-center gap-[10px]">
                  <span className="text-white/40 text-[10px]">⚑</span>
                  <span className="text-[10px] text-white/70">Goal Created: Track Monthly Revenue</span>
                </div>
                <div className="flex items-center gap-[8px]">
                  <span className="w-[6px] h-[6px] rounded-full bg-[#F2AB53]" />
                  <span className="text-[10px] text-white/50">In progress</span>
                  <ChevronIcon className="w-[10px] h-[6px] text-white/30" direction="right" />
                </div>
              </div>

              {/* Composer */}
              <div className="mt-[4px]">
                <div className="text-[10px] text-white/40 px-[12px] py-[10px]">Ask or make anything</div>
                <div className="flex items-center justify-between px-[12px] py-[10px] text-white/30">
                  <div className="flex items-center gap-[10px]">
                    <span className="text-[14px]">+</span>
                    <span className="text-[10px]">@</span>
                    <span className="text-[10px]">Aa</span>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <span className="w-[16px] h-[16px] rounded-full border border-white/10" />
                    <span className="w-[16px] h-[16px] rounded-full border border-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Task Panel */}
          <TuringAgentsTaskPanel />
        </div>
      </div>
    </section>
  );
}
