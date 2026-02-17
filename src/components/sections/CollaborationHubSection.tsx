/* ─────────────────────────────────────────────────────────
   Human-AI Collaboration Section
   ───────────────────────────────────────────────────────── */

import { ScrollTextReveal } from "@/components/ui";

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
    <div className="w-full md:w-[440px] max-w-full flex flex-col gap-[18px] md:gap-[23px] p-[20px] md:p-[24px] rounded-[20px] md:rounded-[24px] border border-white/30">
      <h3 className="self-stretch text-white text-[20px] font-bold leading-[24px]">
        {title}
      </h3>
      <div className="self-stretch flex flex-col gap-[15px]">
        {items.map((item) => (
          <CheckBullet key={item} text={item} />
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
      className="w-[380px] flex items-center gap-[17px]"
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
    <div className="relative w-[520px] h-[530px] shrink-0">
      {/* Workspace background card — tall, behind everything */}
      <div
        className="absolute"
        style={{
          left: 50,
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
      <div className="absolute" style={{ left: 170, top: 12 }}>
        <SalesAgentTag />
      </div>

      {/* Finance Agent badge — left, arrow points right */}
      <div className="absolute" style={{ left: -20, top: 128 }}>
        <FinanceAgentTag />
      </div>

      {/* Steve Jan profile card — right, overlapping workspace */}
      <div className="absolute" style={{ right: 0, top: 185 }}>
        <ProfileCard
          name="Steve Jan"
          role="UX Designer"
          avatar="/images/figma/4229-62012/imgEllipse55.png"
        />
      </div>

      {/* David Fincher profile card — lower, slightly left */}
      <div className="absolute" style={{ left: 30, top: 310 }}>
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
    <section className="w-full bg-black flex flex-col items-center gap-[10px] px-4 py-[50px] md:px-8 md:py-[75px] md:pb-[150px]">
      <div className="self-stretch flex flex-col items-center gap-[30px] md:gap-[36px]">
        {/* Header */}
        <div className="self-stretch flex flex-col items-center gap-[20px] md:gap-[32px]">
          <div className="h-[36px] px-3 py-1 bg-white/7 rounded-full overflow-hidden inline-flex items-center justify-center gap-[8px]">
            <span className="text-white text-[14px] md:text-[16px] font-bold leading-[24px] text-center">
              Your Team + AI Team = Unstoppable
            </span>
          </div>
          <ScrollTextReveal
            text="Human-AI Collaboration"
            className="text-[28px] md:text-[50px] font-bold leading-[36px] md:leading-[78px] text-center"
          />
          <p className="text-gray-300 text-[16px] md:text-[26px] font-medium leading-[26px] md:leading-[36px] text-center">
            Chorus isn&apos;t about replacing your people. It&apos;s about
            multiplying them.
          </p>
        </div>

        {/* Mobile: illustration + list cards stacked */}
        <div className="w-full flex flex-col items-center gap-[30px] lg:hidden">
          {/* Scaled illustration */}
          <div
            className="relative w-full"
            style={{ height: "calc(530px * 0.55)" }}
          >
            <div
              className="absolute top-0 left-1/2"
              style={{
                width: 520,
                height: 530,
                transformOrigin: "top center",
                transform: "translateX(-50%) scale(0.55)",
              }}
            >
              <ComposedIllustration />
            </div>
          </div>

          {/* List cards */}
          <div className="flex flex-col items-stretch gap-[20px] w-full">
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

        {/* Desktop: side by side */}
        <div className="hidden lg:flex items-center gap-[78px] justify-center">
          <div className="flex flex-col items-start gap-[20px]">
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
          <ComposedIllustration />
        </div>
      </div>
    </section>
  );
}
