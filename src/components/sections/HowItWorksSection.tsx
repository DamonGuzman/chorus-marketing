import { Section, IntegrationLogo } from "@/components/ui";

const steps = [
  {
    number: "01",
    title: "AI That Works for Every Role",
    description:
      "Create AI agents for any role: SDR, Content Writer, Financial Analyst, Project Manager. Name them. Give them your data. Set their rules.",
  },
  {
    number: "02",
    title: "Set the Direction",
    description:
      '"Launch our Q4 campaign." "Research 100 prospects and schedule 20 meetings." "Analyze spending and identify $50K in savings." Your AI workforce coordinates automatically—each agent knows its part and how it fits with the others. Just like humans, but faster and without the drama.',
  },
  {
    number: "03",
    title: "Watch The Performance",
    description:
      "Real-time visibility into what's happening: emails sent, content created, analysis completed, deals closed. Full transparency. Every agent in sync. Zero micromanagement.",
  },
];

export function HowItWorksSection() {
  return (
    <Section className="py-[100px]" id="features">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[100px]">
        {/* Header */}
        <div className="text-center mb-[51px]">
          <h2 className="text-[35px] leading-[1.1] font-bold text-white mb-[15px]">
            How It Works
          </h2>
          <p className="text-[18px] leading-[36px] font-medium text-gray-300 max-w-[1034px] mx-auto">
            Deploy agents for each role, connect your tools, and orchestrate outcomes with visibility and guardrails.
          </p>
        </div>

        {/* Steps and Preview */}
        <div className="flex flex-col lg:flex-row gap-[60px]">
          {/* Steps */}
          <div className="lg:w-[387px] space-y-[32px]">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[16px] top-[40px] w-[1px] h-[calc(100%+32px)] bg-gradient-to-b from-purple-500/50 to-transparent" />
                )}

                <div className="flex gap-[16px]">
                  {/* Number Badge */}
                  <div className="w-[32px] h-[32px] rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-bold text-purple-400">{step.number}</span>
                  </div>

                  <div>
                    {/* Title */}
                    <div className="flex items-center gap-[12px] mb-[12px]">
                      <div className="w-[20px] h-[20px] rounded-full bg-purple-500/10 flex items-center justify-center">
                        <svg className="w-[12px] h-[12px] text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-[15px] font-bold text-white">{step.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-[13px] leading-[1.7] font-medium text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Preview Card */}
          <div className="flex-1 bg-gray-950 rounded-[20px] border border-white/10 overflow-hidden">
            {/* Agent Header */}
            <div className="p-[27px] border-b border-white/10">
              <div className="flex items-center gap-[16px]">
                <div className="w-[50px] h-[50px] rounded-full bg-gradient-to-br from-purple-400 to-purple-600 relative">
                  <div className="absolute -bottom-1 -right-1 px-[6px] py-[2px] bg-purple-600 rounded-full">
                    <span className="text-[6px] font-medium text-white">AI Agent</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-[10px] mb-[4px]">
                    <span className="text-[14px] font-bold text-white">Frank</span>
                    <div className="px-[8px] py-[2px] bg-green-500/20 rounded-full">
                      <span className="text-[7px] font-semibold text-green-400">Active</span>
                    </div>
                  </div>
                  <span className="text-[12px] text-gray-400">Finance Manager</span>
                </div>
                <div className="flex gap-[8px]">
                  <button
                    type="button"
                    aria-label="More options"
                    className="w-[28px] h-[22px] rounded border border-white/20 flex items-center justify-center text-white/60 hover:border-white/40 transition-colors"
                  >
                    <span className="text-[10px]">⋯</span>
                  </button>
                  <button
                    type="button"
                    aria-label="Close"
                    className="w-[22px] h-[22px] rounded border border-white/20 flex items-center justify-center text-white/60 hover:border-white/40 transition-colors"
                  >
                    <span className="text-[10px]">×</span>
                  </button>
                </div>
              </div>

              {/* Agent Info */}
              <div className="mt-[20px] space-y-[10px]">
                <div className="flex items-center gap-[10px]">
                  <svg className="w-[12px] h-[12px] text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                  <span className="text-[9px] text-gray-400">ID : AGT-RES-2847</span>
                </div>
                <div className="flex items-center gap-[10px]">
                  <svg className="w-[12px] h-[12px] text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-[9px] text-gray-400">Deployed at March 15, 2024</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-[16px] flex gap-[12px]">
                <button type="button" className="px-[20px] py-[8px] bg-gradient-primary rounded-full text-[10px] font-bold text-white">
                  View Tasks
                </button>
                <button
                  type="button"
                  className="px-[20px] py-[8px] border border-white/20 rounded-full text-[10px] font-medium text-white/80 hover:border-white/40 transition-colors"
                >
                  Edit Agent
                </button>
              </div>
            </div>

            {/* Tasks Section */}
            <div className="p-[27px]">
              <div className="flex items-center justify-between mb-[20px]">
                <span className="text-[13px] font-semibold text-white">Current Task (7)</span>
                <span className="text-[11px] text-purple-400 cursor-pointer hover:underline">View all</span>
              </div>

              {/* Task Item */}
              <div className="bg-gray-900/50 rounded-[12px] p-[16px] mb-[16px]">
                <div className="flex items-start justify-between mb-[12px]">
                  <div>
                    <h4 className="text-[13px] font-semibold text-white mb-[6px]">Collect revenue data from bank APIs</h4>
                    <span className="text-[9px] text-gray-400">2 hours before</span>
                  </div>
                  <div className="px-[12px] py-[4px] bg-blue-500/20 rounded-full">
                    <span className="text-[9px] font-medium text-blue-400">In Progress</span>
                  </div>
                </div>

                {/* File Attachment */}
                <div className="flex items-center gap-[8px] mb-[12px]">
                  <div className="flex items-center gap-[6px] px-[8px] py-[4px] bg-white/5 rounded border border-white/10">
                    <svg className="w-[12px] h-[12px] text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-[9px] text-gray-400">Stripe_revenue_report.csv</span>
                  </div>
                </div>

                {/* Progress */}
                <div className="text-[10px] text-white/60">
                  Analyzing Q4 data and cross-referencing with HubSpot...
                </div>
              </div>

              {/* Connected Apps */}
              <div className="flex items-center justify-between mb-[12px]">
                <span className="text-[9px] font-semibold text-white">Connected Apps (4)</span>
                <span className="text-[9px] text-purple-400 cursor-pointer hover:underline">View all</span>
              </div>

              <div className="flex gap-[8px]">
                {["Slack", "Stripe", "HubSpot", "Gmail"].map((app) => (
                  <div key={app} className="flex items-center gap-[6px] px-[10px] py-[6px] bg-white/5 rounded-lg border border-white/10">
                    <IntegrationLogo name={app} size="sm" className="rounded-[6px]" />
                    <span className="text-[10px] text-white/70">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
