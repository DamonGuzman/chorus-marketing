import { Badge } from "@/components/ui";

export function DifferenceSection() {
  return (
    <section className="relative bg-black py-[75px] px-6 lg:px-[100px] overflow-hidden">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-[15px] mb-[80px]">
          <Badge>CAPABLE</Badge>
          <h2 className="text-[35px] leading-[1.2] font-bold text-white text-center">
            The Difference That Changes Everything
          </h2>
          <p className="text-[18px] leading-[36px] font-medium text-gray-300 text-center">
            One direction cascades automatically—no meetings required.
          </p>
        </div>

        {/* Main Visualization */}
        <div className="relative">
          {/* Nested Frames Container */}
          <div className="relative flex justify-center">
            {/* Outer Frame */}
            <div className="relative w-full max-w-[1188px] h-[569px] rounded-[30px] border border-white/5">
              {/* Middle Frame */}
              <div className="absolute top-[53px] left-[87px] right-[87px] bottom-[53px] rounded-[24px] border border-white/10">
                {/* Inner Frame */}
                <div className="absolute top-[46px] left-[74px] right-[74px] bottom-[46px] rounded-[20px] border border-white/10 bg-gray-950/30">
                  {/* Content Area */}
                  <div className="relative w-full h-full p-[60px]">
                    {/* Left Side - Numbered Steps */}
                    <div className="absolute left-[56px] top-[60px]">
                      <div className="flex flex-col items-center gap-[40px]">
                        {/* Number 3 */}
                        <NumberCircle number={3} />
                        {/* Number 4 */}
                        <NumberCircle number={4} />
                        {/* Number 5 */}
                        <NumberCircle number={5} />
                      </div>
                    </div>

                    {/* Center - Agent Avatars with Connections */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="relative w-[400px] h-[300px]">
                        {/* Central Agent */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <AgentAvatar
                            gradient="from-purple-400 to-purple-600"
                            label="Frank"
                            sublabel="Finance Agent"
                            size="large"
                            isAI
                          />
                        </div>

                        {/* Surrounding Agents */}
                        <div className="absolute top-0 left-1/4">
                          <AgentAvatar
                            gradient="from-blue-400 to-blue-600"
                            label="Sarah"
                            size="small"
                            isAI
                          />
                        </div>

                        <div className="absolute top-[20px] right-[40px]">
                          <AgentAvatar
                            gradient="from-orange-400 to-orange-600"
                            label="John"
                            size="small"
                          />
                        </div>

                        <div className="absolute bottom-[20px] left-[60px]">
                          <AgentAvatar
                            gradient="from-green-400 to-green-600"
                            label="Maya"
                            size="small"
                            isAI
                          />
                        </div>

                        <div className="absolute bottom-0 right-[80px]">
                          <AgentAvatar
                            gradient="from-pink-400 to-pink-600"
                            label="Danny"
                            size="small"
                          />
                        </div>

                        {/* Connection Lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 300">
                          <line x1="100" y1="50" x2="200" y2="150" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />
                          <line x1="330" y1="50" x2="200" y2="150" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />
                          <line x1="80" y1="240" x2="200" y2="150" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />
                          <line x1="300" y1="270" x2="200" y2="150" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />
                        </svg>
                      </div>
                    </div>

                    {/* Right Side - Task Cards */}
                    <div className="absolute right-[40px] top-[40px] w-[280px] space-y-4">
                      <TaskStatusCard
                        name="Frank Lampard"
                        status="Completed"
                        task="Collect revenue data from Stripe"
                      />
                      <TaskStatusCard
                        name="David Fincher"
                        status="In Progress"
                        task="Analyze quarterly trends"
                      />
                      <TaskStatusCard
                        name="Doone Rosin"
                        status="Queued"
                        task="Create visualization"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NumberCircle({ number }: { number: number }) {
  return (
    <div className="relative">
      <div className="w-[85px] h-[85px] rounded-full border border-white/10 flex items-center justify-center">
        <span className="text-[36px] font-bold text-white/20">{number}</span>
      </div>
      {/* Connecting line below */}
      {number < 5 && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-px h-[40px] bg-gradient-to-b from-purple-500/30 to-transparent" />
      )}
    </div>
  );
}

function AgentAvatar({
  gradient,
  label,
  sublabel,
  size = "small",
  isAI = false,
}: {
  gradient: string;
  label: string;
  sublabel?: string;
  size?: "small" | "large";
  isAI?: boolean;
}) {
  const sizeClasses = size === "large" ? "w-16 h-16" : "w-10 h-10";

  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`relative ${sizeClasses} rounded-full bg-gradient-to-br ${gradient}`}>
        {isAI && (
          <div className="absolute -bottom-1 -right-1 px-1.5 py-0.5 bg-purple-600 rounded-full">
            <span className="text-[6px] font-medium text-white">AI</span>
          </div>
        )}
      </div>
      <div className="text-center">
        <span className="text-[10px] font-medium text-white block">{label}</span>
        {sublabel && (
          <span className="text-[8px] text-purple-400">{sublabel}</span>
        )}
      </div>
    </div>
  );
}

function TaskStatusCard({
  name,
  status,
  task,
}: {
  name: string;
  status: string;
  task: string;
}) {
  const statusStyles = {
    Completed: "text-green-400 bg-green-500/10",
    "In Progress": "text-blue-400 bg-blue-500/10",
    Queued: "text-gray-400 bg-gray-500/10",
  };

  const statusClass = statusStyles[status as keyof typeof statusStyles] || statusStyles.Queued;

  return (
    <div className="bg-gray-900/50 rounded-[12px] p-3 border border-white/5">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-gray-400 to-gray-600" />
          <span className="text-[9px] font-medium text-white">{name}</span>
        </div>
        <span className={`text-[8px] px-2 py-0.5 rounded-full ${statusClass}`}>
          {status}
        </span>
      </div>
      <div className="flex items-center gap-2 pl-7">
        <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-[9px] text-gray-400">{task}</span>
      </div>
    </div>
  );
}
