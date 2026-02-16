import { Badge } from "@/components/ui";

export function BusinessContextSection() {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* Section Header: Your AI Team Knows Your Business */}
      <div className="py-[75px] px-6 lg:px-8">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col items-center gap-[15px]">
            <Badge>CONTEXT</Badge>
            <h2 className="text-[35px] leading-[1.2] font-bold text-white text-center">
              Your AI Team Knows Your Business
            </h2>
            <p className="text-[18px] leading-[36px] font-medium text-gray-300 text-center">
              Connect your stack. Give agents your rules. Keep everything consistent.
            </p>
          </div>
        </div>
      </div>

      {/* From "schedule this meeting" to "build this pipeline" */}
      <BusinessContextItem
        stepNumber="01"
        nextStepNumber="02"
        fromText="schedule this meeting"
        toText="build this pipeline"
        description="Agents coordinate calendars, CRM, and internal docs to assemble a pipeline plan and move deals forward—without manual handoffs."
      >
        <MeetingToPipelineVisual />
      </BusinessContextItem>

      {/* From "update this spreadsheet" to "optimize our budget" */}
      <BusinessContextItem
        stepNumber="02"
        nextStepNumber="03"
        fromText="update this spreadsheet"
        toText="optimize our budget"
        description="Agents reconcile spend, forecast impact, and recommend optimizations with clear rationale and source links to your data."
      >
        <SpreadsheetToBudgetVisual />
      </BusinessContextItem>

      {/* From "send this email" to "run this campaign" */}
      <BusinessContextItem
        stepNumber="03"
        fromText="send this email"
        toText="run this campaign"
        description="Agents generate assets, segment audiences, launch across channels, and report results—so you focus on strategy."
      >
        <EmailToCampaignVisual />
      </BusinessContextItem>
    </section>
  );
}

function BusinessContextItem({
  stepNumber,
  nextStepNumber,
  fromText,
  toText,
  description,
  children,
}: {
  stepNumber: string;
  nextStepNumber?: string;
  fromText: string;
  toText: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="py-[75px] px-6 lg:px-8">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-[60px] items-start">
          {/* Left Side - Step Numbers and Text */}
          <div className="lg:w-[510px] shrink-0">
            {/* Step Numbers */}
            <div className="flex items-start gap-[16px] mb-[40px]">
              <div className="flex flex-col items-center">
                <span className="text-[36px] font-bold text-white/20">{stepNumber}</span>
                {nextStepNumber && (
                  <>
                    <div className="w-px h-[200px] bg-gradient-to-b from-purple-500/50 to-transparent my-4" />
                    <span className="text-[36px] font-bold text-white/20">{nextStepNumber}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Center - Title and Description */}
          <div className="lg:w-[510px]">
            <h3 className="text-[32px] leading-[1.3] font-bold text-white mb-[40px]">
              From &quot;{fromText}&quot; to &quot;{toText}&quot;
            </h3>
            <p className="text-[14px] leading-[1.8] font-medium text-gray-400">
              {description}
            </p>
          </div>

          {/* Right Side - Visual */}
          <div className="flex-1 relative">
            {children}
          </div>
        </div>
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
