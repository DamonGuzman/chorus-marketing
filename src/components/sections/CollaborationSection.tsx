import { Badge, ScrollTextReveal } from "@/components/ui";

export function CollaborationSection() {
  return (
    <section className="relative bg-black py-[100px] px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-[150px]" />
      </div>

      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-[80px]">
          <Badge>COLLABORATION</Badge>
          <ScrollTextReveal
            text="Human-AI Collaboration"
            className="text-[50px] leading-[68px] font-bold text-center"
          />
          <p className="text-lg font-medium text-gray-300 text-center max-w-[700px]">
            &quot;It&apos;s AI that handling everything from sales to support, finance and on, working
            together. That&apos;s been our Competing Idea.&quot;
          </p>
        </div>

        {/* Collaboration Diagram */}
        <div className="flex justify-center">
          <div className="relative w-[500px] h-[500px]">
            {/* Outer Circle */}
            <div className="absolute inset-0 rounded-full border border-white/10" />

            {/* Middle Circle */}
            <div className="absolute inset-[60px] rounded-full border border-white/10" />

            {/* Inner Circle */}
            <div className="absolute inset-[120px] rounded-full border border-white/10" />

            {/* Center - Human/You */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-glow-lg">
              <div className="text-center">
                <svg className="w-8 h-8 text-white mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-xs font-semibold text-white">YOU</span>
              </div>
            </div>

            {/* Agent Nodes */}
            {/* Top */}
            <div className="absolute top-[20px] left-1/2 -translate-x-1/2">
              <AgentNode name="Sales" gradient="from-blue-500 to-blue-600" />
            </div>

            {/* Top Right */}
            <div className="absolute top-[80px] right-[40px]">
              <AgentNode name="Marketing" gradient="from-purple-500 to-purple-600" />
            </div>

            {/* Bottom Right */}
            <div className="absolute bottom-[80px] right-[40px]">
              <AgentNode name="Support" gradient="from-pink-500 to-pink-600" />
            </div>

            {/* Bottom */}
            <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2">
              <AgentNode name="Analytics" gradient="from-orange-500 to-orange-600" />
            </div>

            {/* Bottom Left */}
            <div className="absolute bottom-[80px] left-[40px]">
              <AgentNode name="Content" gradient="from-green-500 to-green-600" />
            </div>

            {/* Top Left */}
            <div className="absolute top-[80px] left-[40px]">
              <AgentNode name="Research" gradient="from-cyan-500 to-cyan-600" />
            </div>

            {/* Connection Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
              {/* Lines from center to each agent */}
              <line x1="250" y1="250" x2="250" y2="60" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
              <line x1="250" y1="250" x2="420" y2="120" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
              <line x1="250" y1="250" x2="420" y2="380" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
              <line x1="250" y1="250" x2="250" y2="440" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
              <line x1="250" y1="250" x2="80" y2="380" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
              <line x1="250" y1="250" x2="80" y2="120" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />

              {/* Outer ring connections */}
              <circle cx="250" cy="250" r="180" fill="none" stroke="rgba(139, 92, 246, 0.15)" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[60px]">
          <InfoCard
            title="Unified Context"
            description="All agents share the same understanding of your business"
          />
          <InfoCard
            title="Smart Handoffs"
            description="Work flows seamlessly between specialized agents"
          />
          <InfoCard
            title="Human in Control"
            description="You stay in the driver's seat with full visibility"
          />
        </div>
      </div>
    </section>
  );
}

function AgentNode({ name, gradient }: { name: string; gradient: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
        <span className="text-white text-xs font-semibold">{name.charAt(0)}</span>
      </div>
      <span className="text-xs text-gray-400">{name}</span>
    </div>
  );
}

function InfoCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 rounded-[16px] bg-gray-900/30 border border-white/5">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}
