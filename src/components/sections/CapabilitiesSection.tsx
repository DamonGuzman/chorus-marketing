import { Section } from "@/components/ui";

const capabilities = [
  { name: "Sales", description: "Research prospects, draft outreach, follow up, and keep pipeline clean with clear next steps." },
  { name: "Finance", description: "Reconcile spend, build reports, and surface savings opportunities with sources and audit trails." },
  { name: "Marketing", description: "Turn strategy into campaigns—briefs, assets, launches, and performance reporting." },
  { name: "Operations", description: "Automate workflows across tools, coordinate stakeholders, and unblock execution." },
];

export function CapabilitiesSection() {
  return (
    <Section className="py-[100px] relative overflow-hidden" id="use-cases">
      {/* Background decorative elements */}
      <div aria-hidden className="absolute top-[90px] right-[120px] w-[46px] h-[46px] rounded-full bg-purple-500/20 blur-[1px]" />
      <div aria-hidden className="absolute top-[60px] left-[200px] w-[34px] h-[34px] rounded-full bg-blue-500/15 blur-[1px]" />
      <div aria-hidden className="absolute bottom-[170px] left-[150px] w-[40px] h-[40px] rounded-full bg-green-500/15 blur-[1px]" />
      <div aria-hidden className="absolute bottom-[110px] right-[220px] w-[30px] h-[30px] rounded-full bg-orange-500/15 blur-[1px]" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-[100px] relative z-10">
        {/* Header */}
        <div className="text-center mb-[51px]">
          <h2 className="text-[35px] leading-[1.1] font-bold text-white mb-[15px]">
            What Your AI Workforce Can Do
          </h2>
          <p className="text-[18px] leading-[36px] font-medium text-gray-300 max-w-[1034px] mx-auto">
            Deploy role-based agents that execute real work across your stack—without constant prompting.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-[60px] items-start">
          {/* Capabilities Grid */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-[20px]">
              {capabilities.map((cap, index) => (
                <div
                  key={index}
                  className="bg-gray-950 rounded-[20px] border border-white/10 p-[30px] hover:border-purple-500/30 transition-colors"
                >
                  <h3 className="text-[24px] font-bold text-white mb-[15px]">{cap.name}</h3>
                  <p className="text-[12px] leading-[1.6] text-gray-400">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Description and Team Preview */}
          <div className="lg:w-1/2">
            <div className="mb-[40px]">
              <h3 className="text-[28px] font-bold text-white mb-[20px]">
                AI That Works for Every Role
              </h3>
              <p className="text-[15px] leading-[1.8] text-gray-300">
                Automate strategy, execution, and insights across teams—marketing, sales, finance, and beyond—so your people focus on goals, not busywork.
              </p>
            </div>

            {/* Team Preview Cards */}
            <div className="space-y-[12px]">
              {[
                { name: "David Fincher", role: "Project Manager", status: "Active" },
                { name: "Steve Jan", role: "UX Designer", status: "Active" },
              ].map((member, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-950 rounded-[16px] border border-white/10 p-[16px]"
                >
                  <div className="flex items-center gap-[12px]">
                    <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-br from-gray-400 to-gray-600" />
                    <div>
                      <div className="flex items-center gap-[8px]">
                        <span className="text-[14px] font-medium text-white">{member.name}</span>
                        <div className="px-[8px] py-[2px] bg-green-500/20 rounded-full">
                          <span className="text-[8px] font-semibold text-green-400">{member.status}</span>
                        </div>
                      </div>
                      <span className="text-[12px] text-gray-400">{member.role}</span>
                    </div>
                  </div>
                  <div className="w-[120px] h-[32px] rounded border border-white/10 flex items-center px-[10px]">
                    <span className="text-[10px] text-gray-500">Search</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
