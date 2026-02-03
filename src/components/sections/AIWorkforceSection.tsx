import { Section } from "@/components/ui";

export function AIWorkforceSection() {
  return (
    <Section className="py-[100px] relative overflow-hidden" id="ai-workforce">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-[100px] relative z-10">
        {/* Header */}
        <div className="text-center mb-[75px]">
          <h2 className="text-[35px] leading-[1.1] font-bold text-white mb-[40px]">
            Your AI Workforce. Always in Sync.
          </h2>
          <p className="text-[18px] leading-[36px] font-medium text-gray-300 max-w-[1108px] mx-auto">
            Forget chatbots that &quot;help&quot; you draft emails. Chorus gives you autonomous agents that coordinate with each other and run your Sales, Marketing, Finance, Operations, Customer Success - any department you need.
          </p>
        </div>

        {/* Interactive Visualization */}
        <div className="relative h-[700px] bg-gray-950/50 rounded-[30px] border border-white/10 overflow-hidden">
          {/* Center Hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-full blur-xl" />
            <div className="relative w-full h-full rounded-full border border-purple-500/30 flex items-center justify-center bg-gray-950/80">
              <div className="text-center">
                <div className="w-[60px] h-[60px] rounded-full bg-purple-500/20 mx-auto mb-[10px] flex items-center justify-center">
                  <svg className="w-[30px] h-[30px] text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-[14px] font-semibold text-white">Chorus</span>
              </div>
            </div>
          </div>

          {/* AI Agents Badge */}
          <div className="absolute top-[80px] left-[80px] px-[20px] py-[10px] bg-purple-500/10 border border-purple-500/30 rounded-full">
            <span className="text-[12px] font-semibold text-purple-400">AI Agents</span>
          </div>

          {/* Team Members Badge */}
          <div className="absolute top-[80px] right-[80px] px-[20px] py-[10px] bg-blue-500/10 border border-blue-500/30 rounded-full">
            <span className="text-[12px] font-semibold text-blue-400">Team members</span>
          </div>

          {/* Connection Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0.3)" />
                <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
              </linearGradient>
            </defs>
            {/* Lines from center to agents */}
            <line x1="50%" y1="50%" x2="25%" y2="30%" stroke="url(#lineGradient)" strokeWidth="1" />
            <line x1="50%" y1="50%" x2="75%" y2="30%" stroke="url(#lineGradient)" strokeWidth="1" />
            <line x1="50%" y1="50%" x2="20%" y2="60%" stroke="url(#lineGradient)" strokeWidth="1" />
            <line x1="50%" y1="50%" x2="80%" y2="60%" stroke="url(#lineGradient)" strokeWidth="1" />
            <line x1="50%" y1="50%" x2="30%" y2="80%" stroke="url(#lineGradient)" strokeWidth="1" />
            <line x1="50%" y1="50%" x2="70%" y2="80%" stroke="url(#lineGradient)" strokeWidth="1" />
          </svg>

          {/* Agent Cards */}
          <div className="absolute top-[160px] left-[120px] bg-gray-900 rounded-[16px] border border-white/10 p-[16px] w-[200px]">
            <div className="flex items-center gap-[10px] mb-[8px]">
              <div className="w-[32px] h-[32px] rounded-full bg-gradient-to-br from-purple-400 to-purple-600 relative">
                <div className="absolute -bottom-1 -right-1 px-[4px] py-[1px] bg-purple-600 rounded-full">
                  <span className="text-[6px] font-medium text-white">AI</span>
                </div>
              </div>
              <div>
                <span className="text-[12px] font-medium text-white block">Frank</span>
                <span className="text-[9px] text-purple-400">Finance Agent</span>
              </div>
            </div>
            <p className="text-[9px] text-white/60 leading-relaxed">
              Analyzing Q4 revenue data and preparing board report...
            </p>
          </div>

          <div className="absolute top-[160px] right-[120px] bg-gray-900 rounded-[16px] border border-white/10 p-[16px] w-[200px]">
            <div className="flex items-center gap-[10px] mb-[8px]">
              <div className="w-[32px] h-[32px] rounded-full bg-gradient-to-br from-blue-400 to-blue-600 relative">
                <div className="absolute -bottom-1 -right-1 px-[4px] py-[1px] bg-blue-600 rounded-full">
                  <span className="text-[6px] font-medium text-white">AI</span>
                </div>
              </div>
              <div>
                <span className="text-[12px] font-medium text-white block">Sarah</span>
                <span className="text-[9px] text-blue-400">Marketing Agent</span>
              </div>
            </div>
            <p className="text-[9px] text-white/60 leading-relaxed">
              Launching Q1 campaign across all channels...
            </p>
          </div>

          <div className="absolute bottom-[180px] left-[100px] bg-gray-900 rounded-[16px] border border-white/10 p-[16px] w-[200px]">
            <div className="flex items-center gap-[10px] mb-[8px]">
              <div className="w-[32px] h-[32px] rounded-full bg-gradient-to-br from-green-400 to-green-600 relative">
                <div className="absolute -bottom-1 -right-1 px-[4px] py-[1px] bg-green-600 rounded-full">
                  <span className="text-[6px] font-medium text-white">AI</span>
                </div>
              </div>
              <div>
                <span className="text-[12px] font-medium text-white block">Alex</span>
                <span className="text-[9px] text-green-400">Sales Agent</span>
              </div>
            </div>
            <p className="text-[9px] text-white/60 leading-relaxed">
              Following up with 47 qualified leads...
            </p>
          </div>

          <div className="absolute bottom-[180px] right-[100px] bg-gray-900 rounded-[16px] border border-white/10 p-[16px] w-[200px]">
            <div className="flex items-center gap-[10px] mb-[8px]">
              <div className="w-[32px] h-[32px] rounded-full bg-gradient-to-br from-orange-400 to-orange-600 relative">
                <div className="absolute -bottom-1 -right-1 px-[4px] py-[1px] bg-orange-600 rounded-full">
                  <span className="text-[6px] font-medium text-white">AI</span>
                </div>
              </div>
              <div>
                <span className="text-[12px] font-medium text-white block">Maya</span>
                <span className="text-[9px] text-orange-400">Ops Agent</span>
              </div>
            </div>
            <p className="text-[9px] text-white/60 leading-relaxed">
              Optimizing workflow processes...
            </p>
          </div>

          {/* Key Messages */}
          <div className="absolute bottom-[60px] left-1/2 -translate-x-1/2 text-center">
            <p className="text-[24px] font-bold text-white mb-[10px]">
              You don&apos;t coordinate. <span className="text-purple-400">You orchestrate.</span>
            </p>
          </div>

          {/* Floating Messages */}
          <div className="absolute top-[320px] left-[380px] bg-gray-800/80 rounded-lg px-[16px] py-[10px] border border-white/10">
            <p className="text-[11px] text-white/70">Skip management. Set goals.</p>
          </div>

          <div className="absolute top-[280px] right-[380px] bg-gray-800/80 rounded-lg px-[16px] py-[10px] border border-white/10">
            <p className="text-[11px] text-white/70">They execute. They deliver.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
