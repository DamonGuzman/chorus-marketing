/* ─────────────────────────────────────────────────────────
   Chorus Agents Section – "Autonomous Agents, Not Chatbots."
   Faithful to the Figma comp: 4 feature cards in 2 rows
   ───────────────────────────────────────────────────────── */

import { CheckIcon, SearchIcon, ClipboardIcon } from "@/components/icons/FeatureCardIcons";
import { IntegrationLogo } from "@/components/ui";

/* ── Shared helpers ── */

function AgentBadge() {
  return (
    <span className="inline-flex items-center shrink-0 px-[7px] py-[2px] bg-gray-600 rounded-[5px] border border-white/10 text-[11px] leading-[20px] font-semibold text-gray-100">
      AI Agent
    </span>
  );
}

function Dot({ color = "#D9D9D9", size = 29 }: { color?: string; size?: number }) {
  return (
    <div
      className="rounded-full shrink-0"
      style={{ width: size, height: size, background: color, border: "1.4px solid #3D3C42" }}
    />
  );
}

function AvatarStack() {
  const avatars = [
    "/images/figma/4229-62012/imgEllipse54.png",
    "/images/figma/4229-62012/imgEllipse55.png",
    "/images/figma/4229-62012/imgEllipse56.png",
  ];
  return (
    <div className="flex items-center -space-x-[6px]">
      {avatars.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={i}
          src={src}
          alt=""
          className="w-[28px] h-[28px] rounded-full border-[1.4px] border-gray-600 shrink-0 object-cover"
        />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   CARD 1 — "You set goals, not tasks"
   ═══════════════════════════════════════════════════════════ */
function GoalsCard() {
  return (
    <div className="relative flex-1 min-w-0 h-[671px] rounded-[40px] overflow-hidden bg-black">
      {/* Border */}
      <div className="absolute inset-0 rounded-[40px] border border-white/35 pointer-events-none z-40" />

      {/* Dark terrain-like background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0a0a0a 0%, #111 40%, #1a1510 60%, #0d0d0d 80%, black 100%)",
        }}
      />
      {/* Subtle landscape texture band */}
      <div
        className="absolute bottom-[180px] inset-x-0 h-[120px] opacity-30"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(80,60,30,0.3) 40%, rgba(60,40,20,0.2) 70%, transparent 100%)",
        }}
      />

      {/* Bottom fade to black for title readability */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent 0%, transparent 55%, rgba(0,0,0,0.85) 70%, black 82%)",
        }}
      />

      {/* ── UI Elements ── */}
      <div className="absolute inset-x-0 top-0 h-[460px] z-10 flex flex-col items-center px-6 pt-8 overflow-hidden">
        {/* Search bar */}
        <div
          className="w-full max-w-[370px] h-[52px] px-[20px] rounded-[24px] flex items-center gap-3 mb-4"
          style={{ background: "linear-gradient(90deg, rgba(51,51,51,0.47) 0%, #010101 100%)" }}
        >
          <SearchIcon className="w-[20px] h-[20px] text-white/50" />
          <span className="text-gray-300 text-[16px] font-semibold leading-[28px]">Search goals</span>
        </div>

        {/* Track Monthly Revenue card */}
        <div
          className="w-full max-w-[440px] rounded-[20px] py-3 px-4 flex flex-col gap-3"
          style={{ background: "rgba(255,255,255,0.05)", boxShadow: "0px 4px 61px black" }}
        >
          <p className="text-gray-100 text-[16px] font-bold leading-[28px]">Track Monthly Revenue</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[5px]">
              <ClipboardIcon className="w-[16px] h-[16px] text-gray-300" />
              <span className="text-gray-300 text-[14px] font-semibold leading-[22px]">Tasks :</span>
              <span className="text-gray-300 text-[14px] font-bold leading-[22px]">7</span>
            </div>
            <div className="flex items-center gap-2">
              <AvatarStack />
              <span className="text-gray-300 text-[14px] font-bold leading-[22px]">+3</span>
            </div>
          </div>
        </div>

        {/* Green checkmark connector */}
        <div className="flex flex-col items-center -my-1">
          <div className="w-px h-[16px] bg-gray-200/50" />
          <div className="w-[22px] h-[22px] rounded-full bg-success flex items-center justify-center">
            <CheckIcon className="w-[10px] h-[8px] text-white" />
          </div>
          <div className="w-px h-[8px] bg-gray-200/50" />
        </div>

        {/* Franks Lampard subtask card */}
        <div
          className="w-full max-w-[420px] rounded-[20px] py-3 px-4 flex flex-col gap-3"
          style={{ background: "rgba(255,255,255,0.06)", boxShadow: "0px 4px 61px black" }}
        >
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2 px-[10px] py-[3px] rounded-[10px] bg-white/4 border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/figma/Ellipse 53.svg" alt="" className="w-[22px] h-[22px] rounded-full shrink-0" />
              <span className="text-gray-100 text-[14px] font-semibold leading-[22px]">Franks Lampard</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[16px] h-[16px] rounded-full bg-success flex items-center justify-center">
                <CheckIcon className="w-[7px] h-[6px] text-white" />
              </div>
              <span className="text-white text-[14px] font-bold">Completed</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ClipboardIcon className="w-[16px] h-[16px] text-gray-300 shrink-0" />
            <span className="text-gray-100 text-[16px] font-bold leading-[28px]">Collect revenue data from bank APIs</span>
          </div>
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-gray-100 text-[14px] font-semibold leading-[22px]">Apps :</span>
              <div className="flex items-center -space-x-[4px]">
                <IntegrationLogo name="Slack" size="sm" shape="circle" />
                <IntegrationLogo name="HubSpot" size="sm" shape="circle" />
                <IntegrationLogo name="Stripe" size="sm" shape="circle" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <IntegrationLogo name="Stripe" size="sm" shape="square" />
              <span className="text-gray-100 text-[14px] font-semibold leading-[22px]">Stripe_revenue_report.csv</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Title + desc ── */}
      <div className="absolute bottom-0 inset-x-0 z-30 flex flex-col items-center gap-1 pb-6 px-6">
        <h3 className="text-white text-[26px] font-bold leading-[40px] text-center">You set goals, not tasks</h3>
        <p className="text-gray-300 text-[16px] font-semibold leading-[26px] text-center max-w-[440px]">
          The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   CARD 2 — "They collaborate with each other"
   Robot center, avatar orbit, cursor+label pills
   ═══════════════════════════════════════════════════════════ */

/* Cursor arrow SVG pointing toward center */
function CursorArrow({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" className={`shrink-0 ${className}`}>
      <path d="M1 1L13 9L7 11L4.5 17L1 1Z" fill="white" fillOpacity="0.85" />
    </svg>
  );
}

function CollaborateCard() {
  return (
    <div className="relative flex-1 min-w-0 h-[671px] rounded-[40px] overflow-hidden bg-black">
      <div className="absolute inset-0 rounded-[40px] border border-white/35 pointer-events-none z-40" />

      {/* Background gradient */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #080808 50%, #0d0d0d 100%)" }} />

      {/* Landscape / terrain texture band near the bottom */}
      <div
        className="absolute inset-x-0 bottom-[130px] h-[100px] z-[3] opacity-40"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(40,35,25,0.35) 30%, rgba(30,25,15,0.25) 70%, transparent 100%)",
        }}
      />
      {/* Subtle wavy/rocky ridge */}
      <div
        className="absolute inset-x-0 bottom-[140px] h-[50px] z-[3] opacity-20"
        style={{
          background: "radial-gradient(ellipse 80% 100% at 50% 100%, rgba(60,50,30,0.5) 0%, transparent 70%)",
        }}
      />

      {/* Bottom fade to black for text readability */}
      <div
        className="absolute inset-0 z-[4] pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent 0%, transparent 60%, rgba(0,0,0,0.7) 75%, black 88%)",
        }}
      />

      {/* ── Orbit rings ── centered in the visual area (above text zone) */}
      <div className="absolute inset-x-0 top-0 bottom-[170px] z-[5] flex items-center justify-center">
        {/* Outermost orbit ring (new) */}
        <div className="absolute w-[480px] h-[468px] rounded-full border-[2px] border-white/[0.03]" />
        {/* Second orbit ring */}
        <div className="absolute w-[380px] h-[370px] rounded-full border-[2px] border-white/[0.04]" />
        {/* Middle gradient ring */}
        <div
          className="absolute w-[290px] h-[280px] rounded-full"
          style={{ background: "linear-gradient(297deg, rgba(251,251,251,0.08) 0%, rgba(149,149,149,0.02) 100%)" }}
        />
        {/* Inner orbit ring */}
        <div className="absolute w-[230px] h-[224px] rounded-full border-[2px] border-white/[0.08]" />
        {/* Core glow */}
        <div
          className="absolute w-[130px] h-[126px] rounded-full"
          style={{ background: "linear-gradient(166deg, rgba(207,207,207,0.04) 0%, rgba(92,92,92,0.30) 100%)", backdropFilter: "blur(60px)" }}
        />

        {/* Bot icon center */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/figma/Group 1707484101.svg"
          alt="AI Bot"
          className="absolute w-[80px] h-[76px]"
        />

        {/* ── Orbiting avatars with colored ring borders ── */}
        {/* Top avatar — man with dark hair, blue/purple ring */}
        <div className="absolute" style={{ top: "2%", left: "50%", transform: "translateX(-50%)" }}>
          <div className="w-[60px] h-[60px] rounded-full p-[3px]" style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/figma/Ellipse 53.svg" alt="" className="w-full h-full rounded-full object-cover" />
          </div>
        </div>

        {/* Right avatar — woman, pink/purple ring */}
        <div className="absolute" style={{ top: "35%", right: "2%" }}>
          <div className="w-[64px] h-[64px] rounded-full p-[3px]" style={{ background: "linear-gradient(135deg, #C084FC, #A855F7)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/figma/Ellipse 54.svg" alt="" className="w-full h-full rounded-full object-cover" />
          </div>
        </div>

        {/* Bottom-left avatar — woman, red ring */}
        <div className="absolute" style={{ bottom: "18%", left: "5%" }}>
          <div className="w-[64px] h-[64px] rounded-full p-[3px] overflow-hidden" style={{ background: "linear-gradient(135deg, #EF4444, #DC2626)" }}>
            <div className="w-full h-full rounded-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/figma/Ellipse 53 (1).svg" alt="" className="w-full h-full rounded-full object-cover scale-[0.85]" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Label pills with cursor arrows ── */}

      {/* Sales Agent — top center, label then arrow pointing downward */}
      <div className="absolute z-20" style={{ top: "6%", left: "46%", transform: "translateX(-50%)" }}>
        <div className="flex items-end gap-[4px]">
          <div className="px-[10px] py-[4px] bg-gray-600 rounded-[7px] border border-white/10">
            <span className="text-white text-[14px] font-semibold leading-[26px]">Sales Agent</span>
          </div>
          <CursorArrow className="rotate-[160deg] mb-[-4px]" />
        </div>
      </div>

      {/* Finance Agent — left side, label then arrow pointing right */}
      <div className="absolute z-20" style={{ top: "34%", left: "3%" }}>
        <div className="flex items-center gap-[4px]">
          <div className="px-[10px] py-[4px] bg-gray-600 rounded-[7px] border border-white/10">
            <span className="text-white text-[14px] font-semibold leading-[26px]">Finance Agent</span>
          </div>
          <CursorArrow className="rotate-[0deg]" />
        </div>
      </div>

      {/* UX Manager — bottom right, label then arrow pointing up-left */}
      <div className="absolute z-20" style={{ bottom: "25%", right: "6%" }}>
        <div className="flex items-end gap-[4px]">
          <div className="px-[10px] py-[4px] bg-gray-600 rounded-[7px] border border-white/10">
            <span className="text-white text-[14px] font-semibold leading-[26px]">UX Manager</span>
          </div>
          <CursorArrow className="rotate-[210deg] mb-[-2px]" />
        </div>
      </div>

      {/* ── Title + desc ── */}
      <div className="absolute bottom-0 inset-x-0 z-30 flex flex-col items-center gap-[10px] pb-8 px-6">
        <h3 className="text-white text-[26px] font-bold leading-[36px] text-center">They collaborate with each other</h3>
        <p className="text-gray-300 text-[16px] font-medium leading-[26px] text-center max-w-[420px]">
          The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   CARD 3 — "They make decisions within your guidelines"
   393×535, narrow glass card
   ═══════════════════════════════════════════════════════════ */
function DecisionsCard() {
  return (
    <div
      className="relative w-full md:w-[393px] shrink-0 h-[535px] rounded-[40px] overflow-hidden border border-white"
      style={{
        background: "linear-gradient(101deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.10) 55%, rgba(255,255,255,0.05) 100%)",
        backdropFilter: "blur(30px)",
      }}
    >
      <div className="flex flex-col gap-[15px] pt-[50px] px-[24px] pb-[10px] h-full overflow-hidden">
        {/* Frank message */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-[10px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/figma/Ellipse 53.svg" alt="" className="w-[30px] h-[30px] rounded-full shrink-0" />
            <span className="text-white text-[14px] font-bold leading-[24px]">Frank</span>
            <AgentBadge />
            <span className="text-gray-300 text-[14px] font-medium leading-[22px]">1.50 AM</span>
          </div>
          <div className="p-[10px] bg-white/4 rounded-tl-[14px] rounded-tr-[14px] rounded-bl-[14px] flex flex-col gap-[6px]">
            <div className="h-[8px] w-[85%] bg-white/5 rounded-[8px]" />
            <div className="h-[8px] w-full bg-white/5 rounded-[8px]" />
          </div>
          <div
            className="flex items-center gap-[10px] px-[16px] py-[10px] rounded-[16px]"
            style={{ background: "linear-gradient(90deg, rgba(242,171,83,0) 0%, rgba(192,136,66,0.27) 31%, rgba(140,99,48,0) 100%)" }}
          >
            <ClipboardIcon className="w-[14px] h-[14px] text-gray-300 shrink-0" />
            <span className="text-gray-100 text-[13px] font-medium leading-[22px]">
              Goal Created : <span className="text-white font-semibold">Track Monthly Revenue</span>
            </span>
          </div>
        </div>

        {/* Skeleton (faded) */}
        <div className="flex flex-col gap-[8px] opacity-50">
          <div className="flex items-center gap-[10px]">
            <div className="w-[30px] h-[30px] bg-white/8 rounded-full border border-white/10 shrink-0" />
            <div className="h-[30px] flex-1 bg-white/8 rounded-[8px] border border-white/10" />
          </div>
          <div className="h-[8px] w-full bg-white/8 rounded-[8px] border border-white/10" />
        </div>

        {/* Danny message */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-[10px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/figma/Ellipse 54.svg" alt="" className="w-[26px] h-[26px] rounded-full shrink-0" />
            <span className="text-white text-[14px] font-bold leading-[24px]">Danny</span>
            <AgentBadge />
            <span className="text-gray-300 text-[14px] font-medium leading-[22px]">1.50 AM</span>
          </div>
          <div className="p-[10px] bg-white/4 rounded-tl-[14px] rounded-tr-[14px] rounded-bl-[14px] flex flex-col gap-[6px]">
            <div className="h-[8px] w-[85%] bg-white/5 rounded-[8px]" />
            <div className="h-[8px] w-full bg-white/5 rounded-[8px]" />
          </div>
          <div className="flex items-center gap-[6px]">
            <div className="h-[30px] px-3 py-1 bg-gray-800 rounded-full border border-green shadow-[0_0_8px_rgba(18,130,95,0.32)] flex items-center gap-2">
              <CheckIcon className="w-[10px] h-[8px] text-white" />
              <span className="text-white text-[13px] font-bold leading-[22px]">Connect</span>
            </div>
            <div className="h-[30px] px-3 py-1 bg-gray-800 rounded-full border border-[#C92929] flex items-center gap-2">
              <div className="w-[10px] h-[10px] rounded-full border-[1px] border-gray-100" />
              <span className="text-gray-100 text-[13px] font-bold leading-[22px]">Reject</span>
            </div>
          </div>
        </div>

        <div className="mt-auto pb-2">
          <h3 className="text-white text-[26px] font-bold leading-[36px] text-center max-w-[291px] mx-auto">
            They make decisions within your guidelines
          </h3>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   CARD 4 — "They learn from your feedback"
   811×537, title top-left, macOS chat window
   ═══════════════════════════════════════════════════════════ */
function FeedbackCard() {
  return (
    <div className="relative flex-1 min-w-0 h-[537px] rounded-[37px] overflow-hidden">
      {/* Subtle dark blue/purple bg */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #0d0b15 0%, #12101a 40%, #0a0810 100%)" }} />
      {/* Border + gradient overlay */}
      <div
        className="absolute inset-0 rounded-[37px] z-20 pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.70) 100%)", border: "0.92px solid rgba(255,255,255,0.35)" }}
      />

      {/* Title top-left */}
      <div className="absolute top-[35px] left-[30px] z-30 max-w-[394px]">
        <h3 className="text-white text-[26px] font-bold leading-[40px]">They learn from your feedback</h3>
      </div>

      {/* ── macOS Chat Window ── */}
      <div className="absolute top-[90px] left-[30px] right-[30px] bottom-0 z-[15] md:left-[50px] md:right-[50px]">
        <div className="w-full h-full bg-[#131313] rounded-t-[18px] border border-white overflow-hidden" style={{ backdropFilter: "blur(31px)" }}>
          {/* Traffic light dots */}
          <div className="flex items-center gap-[8px] px-[22px] pt-[14px] pb-[16px]">
            <div className="w-[10px] h-[9px] rounded-sm bg-[#F24E1E]" />
            <div className="w-[10px] h-[9px] rounded-sm bg-[#FFD02F]" />
            <div className="w-[10px] h-[9px] rounded-sm bg-[#A6C03D]" />
          </div>

          <div className="flex flex-col gap-[14px] px-[22px] overflow-hidden">
            {/* John Doe */}
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center gap-[8px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/figma/image 19.svg" alt="" className="w-[26px] h-[26px] rounded-full shrink-0" />
                <div className="w-[8px] h-[8px] rounded-full bg-green border border-white" />
                <span className="text-white text-[13px] font-bold leading-[22px]">John Doe</span>
                <span className="text-gray-300 text-[13px] font-medium leading-[20px]">1.46 AM</span>
              </div>
              <div className="p-[10px] bg-white/6 rounded-[14px]">
                <p className="text-gray-100 text-[13px] font-medium leading-[20px]">
                  Hello Danny! I want to manage company&apos;s finances and team performance every month.
                </p>
              </div>
            </div>

            {/* Danny */}
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center gap-[8px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/figma/Ellipse 54.svg" alt="" className="w-[26px] h-[26px] rounded-full shrink-0" />
                <span className="text-white text-[13px] font-bold leading-[22px]">Danny</span>
                <span className="text-gray-300 text-[13px] font-medium leading-[20px]">1.50 AM</span>
              </div>
              <div className="px-[10px] py-[14px] rounded-[14px] border-2 border-white/10">
                <p className="text-white text-[13px] font-medium leading-[20px]">
                  Hey John. From your request, I can see that you&apos;re aiming to accomplish two main goals
                </p>
              </div>
            </div>

            {/* Frank AI Agent */}
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center gap-[8px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/figma/Ellipse 53.svg" alt="" className="w-[26px] h-[26px] rounded-full shrink-0" />
                <span className="text-white text-[13px] font-bold leading-[22px]">Frank</span>
                <AgentBadge />
                <span className="text-gray-300 text-[13px] font-medium leading-[20px]">1.50 AM</span>
              </div>
              <div className="p-[10px] bg-white/6 rounded-[14px]">
                <p className="text-gray-100 text-[13px] font-medium leading-[24px]">
                  From your request, you&apos;re aiming to accomplish two main goals. I&apos;ll connect with your CRM and task management tool to fetch automatically. Shall I connect?
                </p>
                <div className="flex items-center gap-[3px] mt-2">
                  <div className="h-[20px] pl-[4px] pr-[8px] bg-white/4 rounded-full border border-white/10 flex items-center gap-[5px]">
                    <Dot color="#635BFF" size={16} />
                    <span className="text-gray-100 text-[11px] font-semibold leading-[16px]">Stripe</span>
                  </div>
                  <span className="text-white text-[13px] font-medium mx-[2px]">+</span>
                  <div className="h-[20px] pl-[4px] pr-[8px] bg-white/4 rounded-full border border-white/10 flex items-center gap-[5px]">
                    <Dot color="#FF7A59" size={16} />
                    <span className="text-gray-100 text-[11px] font-semibold leading-[16px]">HubSpot</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Partial trailing Frank */}
            <div className="flex items-center gap-[8px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/figma/Ellipse 53.svg" alt="" className="w-[26px] h-[26px] rounded-full shrink-0" />
              <span className="text-white text-[13px] font-bold leading-[22px]">Frank</span>
              <AgentBadge />
              <span className="text-gray-300 text-[13px] font-medium leading-[20px]">1.50 AM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN SECTION
   ═══════════════════════════════════════════════════════════ */
export function ChorusAgentsSection() {
  return (
    <section className="w-full bg-black px-6 md:px-[100px] py-[75px]">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center gap-[10px]">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-[24px] w-full">
          <div className="h-[36px] px-3 py-1 bg-white/7 rounded-full overflow-hidden inline-flex items-center justify-center">
            <span className="text-white text-[16px] font-bold leading-[24px] text-center">Chorus Agents</span>
          </div>
          <div className="flex flex-col items-center gap-[32px] w-full">
            <h2 className="text-white text-[36px] md:text-[50px] font-bold leading-[1.2] md:leading-[78px] text-center">
              Autonomous Agents, Not Chatbots.
            </h2>
            <p className="text-gray-300 text-[20px] md:text-[26px] font-medium leading-[36px] text-center">
              The Difference That Changes Everything
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-[40px] w-full">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row items-start gap-[40px] w-full">
            <GoalsCard />
            <CollaborateCard />
          </div>
          {/* Bottom Row — vertically centered */}
          <div className="flex flex-col md:flex-row items-center gap-[44px] w-full">
            <DecisionsCard />
            <FeedbackCard />
          </div>
        </div>
      </div>
    </section>
  );
}
