import { ButtonLink } from "@/components/ui";
import { PRIMARY_CTA_HREF } from "@/content/site";
import { Logo, ChatIcon, BellIcon, DotsIcon, SearchIcon, PencilIcon, LockIcon, CheckIcon, ChevronIcon } from "@/components/icons";
import { TuringAgentsChatCard } from "@/components/figma/TuringAgentsChatCard";
import { TuringAgentsTaskPanel } from "@/components/figma/TuringAgentsTaskPanel";

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
    <section className="relative bg-black min-h-screen md:h-[1157px] overflow-hidden" id="about">
      {/* Content */}
      <div className="relative z-10 pt-[70px] md:pt-[90px] px-4 sm:px-6 md:px-[30px] max-w-[1440px] mx-auto pb-12 md:pb-0">
        {/* Hero Header */}
        <div className="flex flex-col items-center text-center gap-[20px] md:gap-[25px]">
          <div className="flex flex-col items-center text-center gap-[14px] md:gap-[18px]">
            <h1 className="text-[40px] leading-[44px] md:text-[70px] md:leading-[78px] font-extrabold tracking-[-1.4px] text-white md:whitespace-nowrap">
              Stop Hiring. Start Building.
            </h1>
            <p className="text-[15px] leading-[24px] md:text-[17px] md:leading-[26px] font-normal text-gray-100 max-w-[920px]">
              The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
            </p>
          </div>

          <ButtonLink href={PRIMARY_CTA_HREF} variant="light" size="md">
            Build Your Team Now
          </ButtonLink>
        </div>

        {/* Mobile: Both cards visible, scaled to fit side by side */}
        <div className="mt-[40px] md:hidden overflow-hidden">
          <style>{`
            .hero-mobile-cards { --ms: 0.48; }
            @media (min-width: 360px) { .hero-mobile-cards { --ms: 0.52; } }
            @media (min-width: 390px) { .hero-mobile-cards { --ms: 0.55; } }
            @media (min-width: 414px) { .hero-mobile-cards { --ms: 0.58; } }
            @media (min-width: 480px) { .hero-mobile-cards { --ms: 0.65; } }
            @media (min-width: 640px) { .hero-mobile-cards { --ms: 0.80; } }
          `}</style>
          <div
            className="hero-mobile-cards mx-auto"
            style={{
              width: 'calc(970px * var(--ms))',
              height: 'calc(700px * var(--ms))',
              position: 'relative',
            }}
          >
            <div
              className="flex items-start absolute top-0 left-0"
              style={{
                width: '970px',
                transformOrigin: 'top left',
                transform: 'scale(var(--ms))',
              }}
            >
              <TuringAgentsChatCard className="shrink-0 relative z-20" />
              <TuringAgentsTaskPanel className="shrink-0 relative z-30 -ml-[120px] mt-[40px]" />
            </div>
          </div>
        </div>

        {/* Desktop: Full app mockup with sidebar */}
        <div className="hidden md:block mt-[65px] overflow-visible overflow-x-hidden">
          <style>{`
            .hero-mockup { --s: 0.52; }
            @media (min-width: 900px)  { .hero-mockup { --s: 0.60; } }
            @media (min-width: 1024px) { .hero-mockup { --s: 0.68; } }
            @media (min-width: 1200px) { .hero-mockup { --s: 0.82; } }
            @media (min-width: 1380px) { .hero-mockup { --s: 0.92; } }
            @media (min-width: 1440px) { .hero-mockup { --s: 0.955; } }
            @media (min-width: 1500px) { .hero-mockup { --s: 1; } }
          `}</style>
          <div
            className="hero-mockup mx-auto flex items-start"
            style={{
              width: '1375px',
              transformOrigin: 'top center',
              transform: 'scale(var(--s))',
              marginBottom: 'calc(-651px * (1 - var(--s)))',
            }}
          >
          {/* Sidebar */}
          <div className="w-[316px] shrink-0 p-[11px] relative z-10">
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
                {channelItems.map((channel, idx) => (
                  <div
                    key={`${channel.name}-${idx}`}
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

          {/* Chat Card */}
          <TuringAgentsChatCard className="shrink-0 -ml-[80px] relative z-20 mt-[54px]" />

          {/* Task Panel */}
          <TuringAgentsTaskPanel className="shrink-0 -ml-[30px] relative z-30 mt-[54px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
