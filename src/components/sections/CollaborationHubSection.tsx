/* ─────────────────────────────────────────────────────────
   Human-AI Collaboration Section
   ───────────────────────────────────────────────────────── */

import { AnimateOnScroll, ScrollTextReveal } from "@/components/ui";

/* ── Checkmark circle bullet ── */
function CheckBullet({ text }: { text: string }) {
  return (
    <div className="self-stretch flex items-center gap-[12px]">
      <img src="/images/figma/features/circled-checkmark.svg" alt="Check" />
      <span className="text-gray-300 text-[16px] font-medium leading-[36px]">
        {text}
      </span>
    </div>
  );
}

/* ── List card ── */
function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="w-full max-w-[520px] px-5 sm:px-7 pt-5 sm:pt-7 pb-4 sm:pb-5 rounded-2xl sm:rounded-3xl outline outline-[0.85px] outline-offset-[-0.85px] outline-white/30 backdrop-blur-xl inline-flex flex-col justify-start items-start gap-4 sm:gap-6">
      <div className="self-stretch text-white text-xl font-bold font-['Urbanist'] leading-6">{title}</div>
      <div className="self-stretch flex flex-col justify-start items-start gap-2.5 sm:gap-3.5">
        {items.map((item, idx) => (
          <AnimateOnScroll key={item} animation="fade-up" duration={0.6} delay={idx * 0.15} threshold={0.2}>
            <div className="self-stretch inline-flex justify-start items-center gap-2 sm:gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/figma/features/circled-checkmark.svg" alt="" className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              <span className="text-gray-300 text-sm sm:text-base font-medium font-['Urbanist'] leading-7 sm:leading-9">{item}</span>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
}

/* ── Agent badge with robot icon + label ── */
function AgentTag({
  label,
  color,
  arrowRotation = 0,
}: {
  label: string;
  color: string;
  arrowRotation?: number;
}) {
  return (
    <div className="flex items-center gap-[8px]">
      {/* Robot circle */}
      <div
        className="w-[40px] h-[40px] rounded-full flex items-center justify-center shrink-0"
        style={{ background: color }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/figma/Group 1707484101.svg"
          alt=""
          className="w-[26px] h-[26px]"
        />
      </div>
      {/* Label pill */}
      <div className="h-[34px] px-[11px] flex items-center bg-gray-600 rounded-[8px] border border-white/10">
        <span className="text-white text-[19px] font-semibold leading-[37px]">
          {label}
        </span>
      </div>
      {/* Cursor arrow */}
      <svg
        width="16"
        height="20"
        viewBox="0 0 16 20"
        fill="none"
        className="shrink-0"
        style={{ transform: `rotate(${arrowRotation}deg)` }}
      >
        <path d="M1 1L15 10L8 12L5 19L1 1Z" fill="white" fillOpacity="0.6" />
      </svg>
    </div>
  );
}

/* ── Sales Agent badge (custom layout) ── */
function SalesAgentTag() {
  return (
    <div className="relative flex items-start gap-[10px]">
      {/* Robot circle */}
      <div
        className="mt-[2px] w-[50px] h-[50px] rounded-full flex items-center justify-center shrink-0"
        style={{ background: "#2081E2" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/figma/robot-icon.svg"
          alt=""
          className="w-[52px] h-[54px]"
        />
      </div>
      {/* Label pill + arrow */}
      <div className="relative mt-[2px]">
        <div className="h-[34px] px-[11px] flex items-center bg-gray-600 rounded-[8px] border border-white/10">
          <span className="text-white text-[19px] font-semibold leading-[37px]">
            Sales Agent
          </span>
        </div>
        <img
          src="/images/icons/cursor-1.svg"
          alt=""
          className="absolute w-[30px] h-[40px]"
          style={{
            right: "-24px",
            bottom: "-26px",
            transform: "rotate(360deg)",
          }}
        />
      </div>
    </div>
  );
}

/* ── Finance Agent badge (custom layout) ── */
function FinanceAgentTag() {
  return (
    <div className="flex items-center gap-[8px]">
      {/* Robot circle */}
      <div
        className="w-[50px] h-[50px] rounded-full flex items-center justify-center shrink-0"
        style={{ background: "#5952FF" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/figma/robot-icon.svg"
          alt=""
          className="w-[52px] h-[54px]"
        />
      </div>
      <div className="relative -mt-[8px] flex items-center gap-[8px]">
        {/* Label pill */}
        <div className="h-[34px] px-[11px] flex items-center bg-gray-600 rounded-[8px] border border-white/10">
          <span className="text-white text-[19px] font-semibold leading-[37px]">
            Finance Agent
          </span>
        </div>
        {/* Cursor arrow */}
        <img
          src="/images/icons/cursor-1.svg"
          alt=""
          className="shrink-0 relative top-[1px] w-[30px] h-[40px]"
          style={{ transform: "rotate(330deg)" }}
        />
      </div>
    </div>
  );
}

/* ── Three-dot menu ── */
function DotsMenu() {
  return (
    <div className="flex flex-col gap-[3px] ml-auto shrink-0 pr-1">
      <div className="w-[4px] h-[4px] rounded-full bg-gray-300" />
      <div className="w-[4px] h-[4px] rounded-full bg-gray-300" />
      <div className="w-[4px] h-[4px] rounded-full bg-gray-300" />
    </div>
  );
}

/* ── Profile card ── */
function ProfileCard({
  name,
  role,
  avatar,
}: {
  name: string;
  role: string;
  avatar: string;
}) {
  return (
    <div
      className="w-[440px] flex items-center gap-[17px]"
      style={{
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 16,
        paddingRight: 16,
        background: "#121212",
        boxShadow: "0px 0px 7.16px rgba(255,255,255,0.27) inset",
        borderRadius: 27,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={avatar}
        alt={name}
        className="w-[56px] h-[56px] rounded-full shrink-0 object-cover"
      />
      <div className="flex flex-col gap-[6px] flex-1">
        <div className="flex items-center gap-[10px]">
          <span className="text-white text-[17px] font-bold leading-[28px]">
            {name}
          </span>
          <div className="w-[7px] h-[7px] rounded-full bg-green" />
          <span className="text-gray-100 text-[14px] font-bold leading-[22px]">
            Active
          </span>
        </div>
        <div className="h-[32px] px-[14px] py-[6px] bg-white/6 rounded-[20px] inline-flex items-center w-fit">
          <span className="text-white text-[14px] font-medium leading-[20px]">
            {role}
          </span>
        </div>
      </div>
      <DotsMenu />
    </div>
  );
}

/* ── Right side composed illustration ── */
function ComposedIllustration() {
  return (
    <div className="relative w-[600px] h-[530px] shrink-0">
      {/* Workspace background card — tall, behind everything */}
      <div
        className="absolute"
        style={{
          left: 120,
          top: 55,
          width: 450,
          height: 420,
          background: "#111111",
          boxShadow:
            "0px 0px 7.65px rgba(255,255,255,0.27) inset, 0px 4.05px 4.05px rgba(0,0,0,0.30)",
          borderRadius: 50,
        }}
      >
        {/* Skeleton lines inside workspace */}
        <div className="p-[30px] flex flex-col justify-between h-full">
          <div className="flex flex-col gap-[12px] opacity-50">
            <div className="flex items-center gap-[12px]">
              <div className="w-[36px] h-[36px] bg-white/8 rounded-full border border-white/10" />
              <div className="h-[36px] flex-1 bg-white/8 rounded-[10px] border border-white/10" />
            </div>
            <div className="h-[10px] w-[280px] bg-white/8 rounded-[10px] border border-white/10" />
          </div>
          <div className="flex flex-col gap-[12px] opacity-50">
            <div className="flex items-center gap-[12px]">
              <div className="w-[36px] h-[36px] bg-white/8 rounded-full border border-white/10" />
              <div className="h-[36px] flex-1 bg-white/8 rounded-[10px] border border-white/10" />
            </div>
            <div className="h-[10px] w-[280px] bg-white/8 rounded-[10px] border border-white/10" />
          </div>
        </div>
      </div>

      {/* Sales Agent badge — top center */}
      <div className="absolute" style={{ left: 240, top: 12 }}>
        <SalesAgentTag />
      </div>

      {/* Finance Agent badge — left, arrow points right */}
      <div className="absolute" style={{ left: 50, top: 128 }}>
        <FinanceAgentTag />
      </div>

      {/* Steve Jan profile card — right, overlapping workspace */}
      <div className="absolute" style={{ right: -30, top: 185 }}>
        <ProfileCard
          name="Steve Jan"
          role="UX Designer"
          avatar="/images/figma/4229-62012/imgEllipse55.png"
        />
      </div>

      {/* David Fincher profile card — lower, slightly left */}
      <div className="absolute" style={{ left: 100, top: 310 }}>
        <ProfileCard
          name="David Fincher"
          role="Project Manager"
          avatar="/images/figma/Ellipse 53.svg"
        />
      </div>

      {/* UX Manager badge — bottom right, arrow on left */}
      <div
        className="absolute flex items-center"
        style={{ right: 44, bottom: 26 }}
      >
        <div className="relative flex items-center gap-[8px]">
          {/* Cursor arrow — top-left of tag */}
          <img
            src="/images/icons/cursor-1.svg"
            alt=""
            className="absolute w-[32px] h-[34px]"
            style={{ left: "-21px", top: "-15px", transform: "rotate(195deg)" }}
          />
          {/* Label pill */}
          <div className="h-[34px] px-[11px] flex items-center bg-gray-600 rounded-[8px] border border-white/10">
            <span className="text-white text-[19px] font-semibold leading-[37px]">
              UX Manager
            </span>
          </div>
          {/* Robot circle */}
          <div
            className="w-[50px] h-[50px] rounded-full flex items-center justify-center shrink-0"
            style={{ background: "#388D46" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/figma/robot-icon.svg"
              alt=""
              className="w-[46px] h-[48px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main Section ── */
export function CollaborationHubSection() {
  return (
    <section className="w-full bg-black flex flex-col items-center gap-[10px] px-4 py-[50px] md:px-8 md:pt-[120px] md:pb-[150px] overflow-hidden">
      <div className="self-stretch flex flex-col items-center gap-[40px] md:gap-[80px]">
        {/* Header */}
        <div className="self-stretch flex flex-col items-center gap-1">
          <div className="h-8 px-3 py-1 bg-white/5 rounded-[100px] overflow-hidden inline-flex items-center justify-center gap-2">
            <span className="text-center text-white text-sm font-semibold font-['Urbanist'] leading-6">
              Your Team + AI Team = Unstoppable
            </span>
          </div>
          <ScrollTextReveal
            text="Human-AI Collaboration"
            className="w-80 md:w-auto text-center text-white text-2xl md:text-5xl font-bold font-['Urbanist'] leading-8 md:leading-[78px]"
          />
          <p className="w-96 max-w-full md:w-auto text-center text-gray-400 md:text-gray-300 text-sm md:text-2xl font-normal md:font-medium font-['Urbanist'] leading-6 md:leading-9">
            Chorus isn&apos;t about replacing your people. It&apos;s about
            multiplying them.
          </p>
        </div>

        {/* Mobile: illustration + list cards stacked */}
        <div className="w-full flex flex-col items-center gap-6 sm:gap-[30px] lg:hidden">
          {/* Scaled illustration — responsive scale per breakpoint */}
          <AnimateOnScroll animation="fade-up" duration={0.9} threshold={0.2}>
            <div className="relative w-full h-[290px] sm:h-[330px] md:h-[370px]">
              <div
                className="absolute top-0 left-1/2 -translate-x-[53%] scale-[0.55] sm:-translate-x-1/2 sm:scale-[0.62] md:scale-[0.7] origin-top"
                style={{ width: 600, height: 530 }}
              >
                <ComposedIllustration />
              </div>
            </div>
          </AnimateOnScroll>

          {/* List cards */}
          <div className="flex flex-col items-stretch gap-4 sm:gap-[20px] w-full max-w-[520px]">
            <ListCard
              title="Your humans focus on"
              items={[
                "Strategy & vision",
                "Complex decisions",
                "Relationships & creativity",
                "High-judgment situations",
              ]}
            />
            <ListCard
              title="Your AI agents handle"
              items={[
                "Execution & implementation",
                "Research & analysis",
                "Repetitive workflows",
                "Scale & speed",
              ]}
            />
          </div>
        </div>

        {/* Desktop: side by side — centered with responsive scaling */}
        <div className="hidden lg:flex items-center lg:gap-10 xl:gap-16 2xl:gap-[100px] justify-center max-w-[1300px] w-full mx-auto">
          <div className="flex flex-col items-start gap-[20px] w-[40%] min-w-[320px]">
            <ListCard
              title="Your humans focus on"
              items={[
                "Strategy & vision",
                "Complex decisions",
                "Relationships & creativity",
                "High-judgment situations",
              ]}
            />
            <ListCard
              title="Your AI agents handle"
              items={[
                "Execution & implementation",
                "Research & analysis",
                "Repetitive workflows",
                "Scale & speed",
              ]}
            />
          </div>
          <AnimateOnScroll animation="slide-right" duration={0.9} threshold={0.2} className="flex-1 min-w-0 flex items-center justify-center">
            <div className="lg:scale-[0.85] xl:scale-[1.1] 2xl:scale-[1.35] origin-center">
              <ComposedIllustration />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
