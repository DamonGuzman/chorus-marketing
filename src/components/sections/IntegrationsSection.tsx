import { Section, IntegrationLogo } from "@/components/ui";
import { Logo } from "@/components/icons";

const integrations = [
  { name: "Slack", category: "Communication" },
  { name: "Stripe", category: "Payments" },
  { name: "HubSpot", category: "CRM" },
  { name: "Gmail", category: "Email" },
  { name: "Notion", category: "Docs" },
  { name: "Salesforce", category: "CRM" },
  { name: "Zapier", category: "Automation" },
  { name: "Airtable", category: "Database" },
  { name: "Figma", category: "Design" },
  { name: "GitHub", category: "Dev" },
  { name: "Jira", category: "Project" },
  { name: "Zoom", category: "Meetings" },
  { name: "Calendly", category: "Scheduling" },
  { name: "Intercom", category: "Support" },
  { name: "Mailchimp", category: "Marketing" },
  { name: "Shopify", category: "Commerce" },
];

export function IntegrationsSection() {
  return (
    <Section className="py-[100px] relative overflow-hidden" id="integrations">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-[100px] relative z-10">
        {/* Header */}
        <div className="text-center mb-[60px]">
          <h2 className="text-[35px] leading-[1.1] font-bold text-white mb-[20px]">
            Works In Harmony With Your Current Stack
          </h2>
          <p className="text-[18px] leading-[36px] font-medium text-gray-300 max-w-[668px] mx-auto">
            More than just integrations, 10,000+ tools that can adapt — turning automation into intuition.
          </p>
        </div>

        {/* Integrations Orbit */}
        <div className="relative h-[500px] flex items-center justify-center">
          {/* Center Logo */}
          <div className="absolute z-20 w-[120px] h-[120px] rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-glow-lg">
            <div className="text-center">
              <Logo className="w-[40px] h-[40px] text-white mx-auto mb-[4px]" />
              <span className="text-[10px] font-bold text-white">CHORUS</span>
            </div>
          </div>

          {/* Inner Ring */}
          <div className="absolute w-[280px] h-[280px] rounded-full border border-white/10" />

          {/* Middle Ring */}
          <div className="absolute w-[400px] h-[400px] rounded-full border border-white/5" />

          {/* Outer Ring */}
          <div className="absolute w-[500px] h-[500px] rounded-full border border-white/5" />

          {/* Integration Icons - positioned around rings */}
          {integrations.slice(0, 8).map((integration, index) => {
            const angle = (index * 360) / 8;
            const radius = 140;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={integration.name}
                className="absolute z-10"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <div className="w-[50px] h-[50px] rounded-[12px] bg-gray-900 border border-white/10 flex items-center justify-center hover:border-purple-500/50 hover:scale-110 transition-all cursor-pointer group">
                  <IntegrationLogo name={integration.name} className="w-[28px] h-[28px]" />
                  <div className="absolute -bottom-[24px] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[9px] font-medium text-white whitespace-nowrap">{integration.name}</span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Outer icons */}
          {integrations.slice(8, 16).map((integration, index) => {
            const angle = (index * 360) / 8 + 22.5;
            const radius = 230;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={integration.name}
                className="absolute z-10"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <div className="w-[44px] h-[44px] rounded-[10px] bg-gray-900/80 border border-white/5 flex items-center justify-center hover:border-purple-500/30 hover:scale-110 transition-all cursor-pointer group">
                  <IntegrationLogo name={integration.name} className="w-[24px] h-[24px]" size="md" />
                  <div className="absolute -bottom-[24px] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[9px] font-medium text-white/70 whitespace-nowrap">{integration.name}</span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Connection lines (decorative) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0.5)" />
                <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
              </linearGradient>
            </defs>
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
              const x1 = 250 + Math.cos((angle * Math.PI) / 180) * 60;
              const y1 = 250 + Math.sin((angle * Math.PI) / 180) * 60;
              const x2 = 250 + Math.cos((angle * Math.PI) / 180) * 140;
              const y2 = 250 + Math.sin((angle * Math.PI) / 180) * 140;
              return (
                <line
                  key={angle}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="url(#lineGrad)"
                  strokeWidth="1"
                />
              );
            })}
          </svg>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-[40px]">
          <p className="text-[14px] text-gray-400">
            Connect with <span className="text-purple-400 font-semibold">10,000+</span> apps and counting
          </p>
        </div>
      </div>
    </Section>
  );
}
