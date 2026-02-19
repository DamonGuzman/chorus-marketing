import { Badge, ScrollTextReveal } from "@/components/ui";

export function BusinessContextSection() {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* Section Header */}
      <div className="py-[75px] px-6 lg:px-8">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col items-center gap-1">
            <Badge>CONTEXT</Badge>
            <ScrollTextReveal
              text="Your AI Team Knows Your Business"
              className="text-[35px] leading-[1.2] font-bold text-center"
            />
            <p className="text-[18px] leading-[36px] font-medium text-gray-300 text-center">
              Connect your stack. Give agents your rules. Keep everything consistent.
            </p>
          </div>
        </div>
      </div>

      {/* Stacked cards */}
      <div className="relative px-4 lg:px-8 pb-16">
        {/* Card 1 */}
        <div className="sticky top-[20px] z-[10]">
          <BusinessContextItem
            stepNumber="1"
            title="Instant Context, Zero Briefing"
            description="Because Chorus integrates with your entire stack (CRM, email, docs, calendar, Slack), your AI agents have complete context about:"
            checkmarks={[
              "Your customers and pipeline",
              "Your processes and SOPs",
              "Your messaging and brand voice",
              "Your tools and workflows",
            ]}
          >
            <OrbitVisual />
          </BusinessContextItem>
        </div>

        {/* Card 2 */}
        <div className="sticky top-[30px] z-[20] -mt-4">
          <BusinessContextItem
            stepNumber="2"
            title="Always In Sync"
            description="Chorus continuously syncs with your connected apps so agents always act on the latest data—no stale snapshots, no outdated context:"
            checkmarks={[
              "Live CRM and pipeline data",
              "Real-time calendar access",
              "Up-to-date docs and SOPs",
              "Latest email threads",
            ]}
          >
            <OrbitVisual />
          </BusinessContextItem>
        </div>

        {/* Card 3 */}
        <div className="sticky top-[40px] z-[30] -mt-4">
          <BusinessContextItem
            stepNumber="3"
            title="Full Business Context"
            description="Because Chorus integrates with your entire stack (CRM, email, docs, calendar, Slack), your AI agents have complete context about:"
            checkmarks={[
              "Your customers and pipeline",
              "Your processes and SOPs",
              "Your messaging and brand voice",
            ]}
          >
            <OrbitVisual />
          </BusinessContextItem>
        </div>
      </div>
    </section>
  );
}

function BusinessContextItem({
  stepNumber,
  title,
  description,
  checkmarks,
  children,
}: {
  stepNumber: string;
  title: string;
  description: string;
  checkmarks: string[];
  children: React.ReactNode;
}) {
  return (
    <div
      className="w-full max-w-[1240px] mx-auto rounded-[40px] outline outline-1 outline-offset-[-1px] outline-neutral-700 backdrop-blur-xl overflow-hidden bg-black"
    >
      <div className="flex flex-col lg:flex-row gap-[40px] items-center pl-14 pr-12 py-14">
        {/* Left Side */}
        <div className="lg:w-[420px] shrink-0 flex flex-col gap-5">
          {/* Step circle */}
          <div
            className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,241,242,0) 100%)",
              boxShadow: "0px 3.98px 24.85px 0px rgba(0,0,0,0.25)",
            }}
          />
          {/* Step number */}
          <span className="text-white text-[30px] font-normal font-['Urbanist'] leading-none">{stepNumber}</span>
          {/* Title */}
          <h3 className="text-white text-2xl font-bold font-['Urbanist']">{title}</h3>
          {/* Description + divider + checkmarks */}
          <div className="flex flex-col gap-7">
            <p className="text-gray-300 text-sm font-medium font-['Urbanist'] leading-5">{description}</p>
            <div className="w-full h-px bg-white/20" />
            {/* Checkmarks grid */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-x-7 gap-y-4">
                {checkmarks.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/figma/features/circled-checkmark.svg" alt="" className="w-5 h-5 shrink-0" />
                    <span className="text-gray-300 text-sm font-medium font-['Urbanist']">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Visual */}
        <div className="flex-1 relative min-h-[420px]">
          {children}
        </div>
      </div>
    </div>
  );
}

function OrbitVisual() {
  return (
    <div className="relative w-full h-[420px]">
      {/* SVG orbital rings + animated dots */}
      <svg
        viewBox="0 0 500 420"
        className="absolute inset-0 w-full h-full"
        style={{ overflow: "visible" }}
      >
        <defs>
          <filter id="bcDotGlow1" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="bcDotGlow2" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Ring 1 — wide, tilted up-right */}
        <ellipse cx="250" cy="210" rx="225" ry="80" stroke="white" strokeOpacity="0.45" strokeWidth="1.4" fill="none" transform="rotate(-18, 250, 210)" />
        {/* Ring 2 — medium, tilted opposite */}
        <ellipse cx="250" cy="210" rx="210" ry="95" stroke="white" strokeOpacity="0.35" strokeWidth="1.2" fill="none" transform="rotate(20, 250, 210)" />
        {/* Ring 3 — steeper tilt */}
        <ellipse cx="250" cy="210" rx="195" ry="110" stroke="white" strokeOpacity="0.40" strokeWidth="1.0" fill="none" transform="rotate(-26, 250, 210)" />

        {/* Motion paths */}
        <path id="bcOrbit1" d="M 25,210 A 225 80 0 1 1 475,210 A 225 80 0 1 1 25,210 Z" fill="none" stroke="none" transform="rotate(-18, 250, 210)" />
        <path id="bcOrbit2" d="M 40,210 A 210 95 0 1 1 460,210 A 210 95 0 1 1 40,210 Z" fill="none" stroke="none" transform="rotate(20, 250, 210)" />

        {/* Animated dots */}
        <circle r="5" fill="white" filter="url(#bcDotGlow1)">
          <animateMotion dur="18s" repeatCount="indefinite"><mpath href="#bcOrbit1" /></animateMotion>
        </circle>
        <circle r="4" fill="white" filter="url(#bcDotGlow2)">
          <animateMotion dur="24s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath href="#bcOrbit2" /></animateMotion>
        </circle>
      </svg>

      {/* Central Chorus logo */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center overflow-hidden z-[15]"
        style={{
          width: 96, height: 96,
          boxShadow: "0 0 40px 8px rgba(255,107,107,0.30), inset 0 0 4px 0 rgba(0,0,0,0.96)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/figma/Rectangle 36.svg" alt="" className="absolute inset-0 w-full h-full scale-[1.22]" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/figma/bubble.svg" alt="Chorus" className="relative w-[42px] h-[42px]" />
      </div>

      {/* Integration icons — positioned to match Figma */}
      {/* Google Sheets — upper left */}
      <OrbitIcon style={{ top: "6%", left: "28%" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/figma/image 34.svg" alt="Google Sheets" className="w-10 h-10" />
      </OrbitIcon>
      {/* HubSpot — upper right */}
      <OrbitIcon style={{ top: "6%", right: "8%" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/figma/image 33.svg" alt="HubSpot" className="w-10 h-10 rounded-full" />
      </OrbitIcon>
      {/* Google Calendar — mid left */}
      <OrbitIcon style={{ top: "40%", left: "2%" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/figma/image 32.svg" alt="Google Calendar" className="w-10 h-10" />
      </OrbitIcon>
      {/* Gmail — mid right */}
      <OrbitIcon style={{ top: "40%", right: "2%" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/figma/image 35.svg" alt="Gmail" className="w-10 h-10" />
      </OrbitIcon>
      {/* Slack — bottom center */}
      <OrbitIcon style={{ bottom: "6%", left: "32%" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/figma/image 12.svg" alt="Slack" className="w-10 h-10" />
      </OrbitIcon>
    </div>
  );
}

function OrbitIcon({ style, children }: { style: React.CSSProperties; children: React.ReactNode }) {
  return (
    <div className="absolute z-[10]" style={style}>
      <div
        className="w-20 h-20 bg-neutral-800 rounded-full flex items-center justify-center"
        style={{
          boxShadow: "0px 3.9766557216644287px 24.854097366333008px 0px rgba(0,0,0,0.25), inset 0px 0px 5.159178733825684px 0px rgba(255,255,255,0.55)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function SpreadsheetToBudgetVisual() {
  return (
    <div className="relative w-full h-[400px]">
      {/* Central processing node */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          {/* Outer ring */}
          <div className="w-[200px] h-[200px] rounded-full border border-white/10 flex items-center justify-center">
            {/* Inner ring */}
            <div className="w-[150px] h-[150px] rounded-full border border-white/10 flex items-center justify-center">
              {/* Center icon */}
              <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30 flex items-center justify-center">
                <svg className="w-10 h-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Connected nodes */}
          {/* File node - top */}
          <div className="absolute -top-[60px] left-1/2 -translate-x-1/2">
            <div className="w-[60px] h-[60px] rounded-full bg-gray-900 border border-white/10 flex items-center justify-center">
              <svg className="w-7 h-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>

          {/* Calculator node - left */}
          <div className="absolute top-1/2 -left-[80px] -translate-y-1/2">
            <div className="w-[60px] h-[60px] rounded-full bg-gray-900 border border-white/10 flex items-center justify-center">
              <svg className="w-7 h-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Dollar node - right */}
          <div className="absolute top-1/2 -right-[80px] -translate-y-1/2">
            <div className="w-[60px] h-[60px] rounded-full bg-gray-900 border border-white/10 flex items-center justify-center">
              <svg className="w-7 h-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
            <line x1="100" y1="40" x2="100" y2="-20" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="2" />
            <line x1="40" y1="100" x2="-20" y2="100" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="2" />
            <line x1="160" y1="100" x2="220" y2="100" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Data boxes */}
      <div className="absolute top-[20px] right-[20px] w-[120px]">
        <DataBox label="Budget" value="$2756" />
      </div>
      <div className="absolute bottom-[80px] right-[20px] w-[120px]">
        <DataBox label="Savings" value="$9876" />
      </div>
      <div className="absolute bottom-[20px] right-[160px] w-[120px]">
        <DataBox label="Growth" value="$1345" />
      </div>
    </div>
  );
}

function DataBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-900/60 rounded-[12px] p-3 border border-white/5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-medium text-white/60">{label}</span>
        <span className="text-[10px] font-semibold text-white">{value}</span>
      </div>
      <div className="h-2 w-full bg-white/10 rounded mb-1" />
      <div className="h-2 w-2/3 bg-white/10 rounded mb-2" />
      <div className="flex items-center gap-2">
        <div className="h-1 flex-1 bg-purple-500/30 rounded" />
      </div>
    </div>
  );
}

function MeetingToPipelineVisual() {
  return (
    <div className="relative w-full h-[400px]">
      {/* Central Calendar Icon */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[140px] h-[140px] rounded-[24px] bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 flex items-center justify-center">
          <div className="w-[100px] h-[100px] rounded-[16px] bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30 flex items-center justify-center">
            <svg className="w-12 h-12 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Pipeline Board */}
      <div className="absolute top-[40px] right-0 w-[200px] h-[320px] bg-gray-900/60 rounded-[16px] border border-white/10 p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-semibold text-white">Track Monthly Revenue</span>
        </div>

        {/* Tasks info */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-5 h-5 rounded bg-purple-500/20 flex items-center justify-center">
            <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-[9px] text-gray-400">Tasks: <span className="text-white">7</span></span>
        </div>

        {/* Assignees */}
        <div className="flex -space-x-2 mb-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 border-2 border-gray-900" />
          ))}
          <div className="w-7 h-7 rounded-full bg-gray-800 border-2 border-gray-900 flex items-center justify-center">
            <span className="text-[8px] text-gray-400">+3</span>
          </div>
        </div>

        {/* Pipeline stages */}
        <div className="space-y-2">
          <PipelineStage />
          <PipelineStage />
          <PipelineStage />
        </div>
      </div>

      {/* Mountain background image placeholder */}
      <div className="absolute top-0 right-[220px] w-[200px] h-full opacity-30">
        <div className="w-full h-full bg-gradient-to-b from-gray-800/50 to-transparent rounded-lg" />
      </div>
    </div>
  );
}

function PipelineStage() {
  return (
    <div className="bg-gray-800/40 rounded-[8px] p-2 border border-white/5">
      <div className="h-2 w-full bg-white/10 rounded mb-1" />
      <div className="h-2 w-2/3 bg-white/10 rounded" />
    </div>
  );
}

function EmailToCampaignVisual() {
  return (
    <div className="relative w-full h-[400px]">
      {/* Central Email Icon */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 flex items-center justify-center">
          <svg className="w-12 h-12 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      </div>

      {/* Campaign Network */}
      <div className="absolute top-1/2 right-[100px] -translate-y-1/2">
        <div className="relative">
          {/* Outer ring */}
          <div className="w-[200px] h-[200px] rounded-full border border-white/5" />

          {/* Inner ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] rounded-full border border-white/10" />

          {/* Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30 flex items-center justify-center">
            <svg className="w-10 h-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
          </div>

          {/* Surrounding nodes */}
          <IconNode position="-top-[20px] left-1/2 -translate-x-1/2" icon="message" />
          <IconNode position="top-1/4 -right-[20px]" icon="thumbs" />
          <IconNode position="bottom-1/4 -right-[20px]" icon="star" />
          <IconNode position="-bottom-[20px] left-1/2 -translate-x-1/2" icon="favorite" />
          <IconNode position="bottom-1/4 -left-[20px]" icon="coins" />
          <IconNode position="top-1/4 -left-[20px]" icon="chart" />
        </div>
      </div>

      {/* Connection line */}
      <div className="absolute top-1/2 left-[30%] w-[20%] h-px bg-gradient-to-r from-purple-500/50 to-white/10" />
    </div>
  );
}

function IconNode({ position, icon }: { position: string; icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    message: (
      <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    thumbs: (
      <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
    star: (
      <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    favorite: (
      <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    coins: (
      <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    chart: (
      <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  };

  return (
    <div className={`absolute ${position}`}>
      <div className="w-10 h-10 rounded-full bg-gray-900 border border-white/10 flex items-center justify-center">
        {icons[icon]}
      </div>
    </div>
  );
}
