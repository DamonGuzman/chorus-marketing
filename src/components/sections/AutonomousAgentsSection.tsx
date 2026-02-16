import { Badge } from "@/components/ui";

export function AutonomousAgentsSection() {
  return (
    <section className="relative bg-black py-[75px] px-6 lg:px-8 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col items-center gap-[15px] mb-[60px]">
          <Badge>INTELLIGENT</Badge>
          <h2 className="text-[35px] leading-[1.2] font-bold text-white text-center">
            Autonomous Agents, Not Chatbots.
          </h2>
          <p className="text-[18px] leading-[36px] font-medium text-gray-300 text-center">
            Set goals. Chorus plans, executes, and reports—end to end.
          </p>
        </div>

        {/* Agent Capabilities Grid - 2x2 layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
          {/* Card 1 - You set goals, not tasks */}
          <CapabilityCard
            title="You set goals, not tasks"
            description="Describe outcomes and constraints. Agents break work into tasks, assign responsibilities, and keep progress moving."
          >
            <GoalsTasksVisual />
          </CapabilityCard>

          {/* Card 2 - They collaborate with each other */}
          <CapabilityCard
            title="They collaborate with each other"
            description="Specialized agents coordinate automatically—sharing context, handing off work, and resolving dependencies."
          >
            <CollaborationVisual />
          </CapabilityCard>

          {/* Card 3 - They make decisions within your guidelines */}
          <CapabilityCard
            title="They make decisions within your guidelines"
            description="Define guardrails, approvals, and budgets. Agents act confidently without drifting outside policy."
          >
            <DecisionVisual />
          </CapabilityCard>

          {/* Card 4 - They learn from your feedback */}
          <CapabilityCard
            title="They learn from your feedback"
            description="Correct output once and the system adapts—improving future work without repetitive prompts."
          >
            <FeedbackVisual />
          </CapabilityCard>
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative rounded-[20px] border border-white/10 bg-gray-950/50 overflow-hidden">
      {/* Visual Area */}
      <div className="relative h-[400px] bg-gradient-to-b from-gray-900/30 to-gray-950/50">
        {children}
      </div>

      {/* Text Content */}
      <div className="p-[32px] pt-[21px]">
        <h3 className="text-[18px] font-bold text-white text-center mb-[18px]">
          {title}
        </h3>
        <p className="text-[12px] leading-[1.7] font-medium text-gray-400 text-center">
          {description}
        </p>
      </div>
    </div>
  );
}

function GoalsTasksVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <div className="w-full max-w-[400px] space-y-4">
        {/* Search bar */}
        <div className="flex items-center gap-3 bg-gray-800/60 rounded-[12px] px-4 py-3 border border-white/5">
          <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-sm text-gray-500">Search agents...</span>
        </div>

        {/* Goal Card */}
        <div className="bg-gray-800/40 rounded-[16px] p-5 border border-white/5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[13px] font-semibold text-white">Track Monthly Revenue</span>
          </div>

          {/* Tasks and Assignees */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-purple-500/20 flex items-center justify-center">
                <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-[11px] text-gray-400">Tasks: <span className="text-white">7</span></span>
            </div>
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 border-2 border-gray-900" />
              ))}
              <div className="w-7 h-7 rounded-full bg-gray-800 border-2 border-gray-900 flex items-center justify-center">
                <span className="text-[9px] text-gray-400">+3</span>
              </div>
            </div>
          </div>
        </div>

        {/* Task List */}
        <div className="space-y-2">
          <TaskItem
            name="Frank Lampard"
            status="Completed"
            task="Collect revenue data from Stripe"
            file="Stripe_revenue_report.csv"
          />
          <TaskItem
            name="David Fincher"
            status="In Progress"
            task="Analyze quarterly trends"
          />
        </div>
      </div>
    </div>
  );
}

function TaskItem({
  name,
  status,
  task,
  file
}: {
  name: string;
  status: string;
  task: string;
  file?: string;
}) {
  const statusColor = status === "Completed" ? "text-green-400 bg-green-500/10" : "text-blue-400 bg-blue-500/10";

  return (
    <div className="bg-gray-800/30 rounded-[12px] p-3 border border-white/5">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-400 to-gray-600" />
          <span className="text-[10px] font-medium text-white">{name}</span>
        </div>
        <span className={`text-[9px] px-2 py-0.5 rounded-full ${statusColor}`}>{status}</span>
      </div>
      <div className="flex items-center gap-2 pl-8">
        <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-[10px] text-gray-400">{task}</span>
      </div>
      {file && (
        <div className="flex items-center gap-2 pl-8 mt-2">
          <span className="text-[9px] text-gray-500">Apps:</span>
          <div className="flex -space-x-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-5 h-5 rounded-full bg-gray-700 border border-gray-600" />
            ))}
          </div>
          <div className="flex items-center gap-1 ml-2">
            <div className="w-4 h-4 rounded bg-gray-700" />
            <span className="text-[9px] text-gray-500">{file}</span>
          </div>
        </div>
      )}
    </div>
  );
}

function CollaborationVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-[300px] h-[300px]">
        {/* Concentric circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[280px] h-[280px] rounded-full border border-white/5" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[220px] h-[220px] rounded-full border border-white/5" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[160px] h-[160px] rounded-full border border-white/10" />
        </div>

        {/* Center element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center z-10">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>

        {/* Agent nodes with cursor labels */}
        <AgentNode
          position="top-[20px] left-1/2 -translate-x-1/2"
          color="from-blue-400 to-blue-600"
          label="Task"
        />
        <AgentNode
          position="bottom-[20px] left-1/2 -translate-x-1/2"
          color="from-green-400 to-green-600"
          label="Goals"
        />
        <AgentNode
          position="top-1/3 right-[20px]"
          color="from-orange-400 to-orange-600"
          label="Chat"
        />
      </div>
    </div>
  );
}

function AgentNode({
  position,
  color,
  label
}: {
  position: string;
  color: string;
  label: string;
}) {
  return (
    <div className={`absolute ${position}`}>
      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${color}`} />
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-gray-800/90 rounded text-[9px] text-white whitespace-nowrap">
        {label}
      </div>
    </div>
  );
}

function DecisionVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <div className="w-full max-w-[320px] space-y-4">
        {/* Agent chat header */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-700" />
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-medium text-white">Frank</span>
            <span className="text-[8px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400">AI Agent</span>
          </div>
        </div>

        {/* Chat messages */}
        <div className="space-y-3">
          <div className="bg-gray-800/40 rounded-[12px] p-3 border border-white/5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-gray-600" />
              <span className="text-[10px] text-white">Danny</span>
              <span className="text-[8px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400">AI Agent</span>
            </div>
            <div className="pl-7 space-y-1">
              <div className="h-2 w-full bg-white/10 rounded" />
              <div className="h-2 w-3/4 bg-white/10 rounded" />
            </div>
          </div>

          <div className="bg-gray-800/40 rounded-[12px] p-3 border border-white/5">
            <div className="h-2 w-full bg-white/10 rounded mb-1" />
            <div className="h-2 w-2/3 bg-white/10 rounded" />
          </div>
        </div>

        {/* Status buttons */}
        <div className="flex gap-2">
          <button className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30">
            <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-[10px] text-green-400">Done</span>
          </button>
          <button className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-500/10 border border-gray-500/30">
            <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
            <span className="text-[10px] text-gray-400">Reject</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function FeedbackVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <div className="w-full max-w-[500px] space-y-4">
        {/* Chat conversation */}
        <div className="space-y-3">
          {/* User message */}
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shrink-0" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-medium text-white">John Doe</span>
              </div>
              <div className="bg-gray-800/60 rounded-[10px] rounded-tl-none px-3 py-2 max-w-[400px]">
                <p className="text-[10px] text-gray-300">Hey team, can someone help me track our monthly revenue...</p>
              </div>
            </div>
          </div>

          {/* Danny response */}
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shrink-0" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-medium text-white">Danny</span>
              </div>
              <div className="bg-gray-800/60 rounded-[10px] rounded-tl-none px-3 py-2 max-w-[350px]">
                <p className="text-[10px] text-gray-300">@Frank can handle that - he&apos;s our finance AI agent!</p>
              </div>
            </div>
          </div>

          {/* Frank AI Agent response */}
          <div className="flex items-start gap-3">
            <div className="relative w-7 h-7 shrink-0">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 to-purple-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-medium text-white">Frank</span>
                <span className="text-[7px] px-1.5 py-0.5 rounded-full bg-purple-500/30 text-purple-300">AI Agent</span>
              </div>
              <div className="bg-gray-800/60 rounded-[10px] rounded-tl-none px-3 py-2 max-w-[400px]">
                <p className="text-[10px] text-gray-300 mb-2">On it! I&apos;ll pull the revenue data from Stripe and HubSpot...</p>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1 px-2 py-1 bg-white/5 rounded-full border border-white/10">
                    <div className="w-3 h-3 rounded bg-purple-500/30" />
                    <span className="text-[8px] text-gray-400">Stripe</span>
                  </div>
                  <span className="text-[8px] text-gray-500">+</span>
                  <div className="flex items-center gap-1 px-2 py-1 bg-white/5 rounded-full border border-white/10">
                    <div className="w-3 h-3 rounded bg-orange-500/30" />
                    <span className="text-[8px] text-gray-400">HubSpot</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
