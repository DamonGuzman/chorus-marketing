import { Section, Badge } from "@/components/ui";

const faqs = [
  {
    q: "What makes Chorus different from a chatbot?",
    a: "Chatbots respond to prompts. Chorus runs autonomous agents that plan and execute work across your tools, with guardrails, approvals, and visibility.",
  },
  {
    q: "Can I control what agents are allowed to do?",
    a: "Yes. Define permissions, required approvals, budgets, and rules. Agents operate within those constraints and keep an audit trail of actions.",
  },
  {
    q: "Does Chorus work with my existing tools?",
    a: "Chorus is designed to integrate with your current stack so agents can read context and take action where work already happens.",
  },
  {
    q: "How is pricing calculated?",
    a: "Pricing is based on agent-hours and scale. Choose a plan, then pay for the work your AI workforce actually performs.",
  },
];

export function FAQSection() {
  return (
    <Section className="py-[100px]" id="faq">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[100px]">
        <div className="flex flex-col items-center gap-[15px] mb-[60px] text-center">
          <Badge>FAQ</Badge>
          <h2 className="text-[35px] leading-[1.1] font-bold text-white">Questions, Answered</h2>
          <p className="text-[18px] leading-[36px] font-medium text-gray-300 max-w-[900px]">
            Everything you need to know before deploying your AI workforce.
          </p>
        </div>

        <div className="max-w-[900px] mx-auto space-y-[12px]">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group bg-gray-950 rounded-[20px] border border-white/10 px-[24px] py-[18px] open:border-purple-500/30"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-6">
                <span className="text-[16px] font-semibold text-white">{item.q}</span>
                <span className="text-gray-400 group-open:text-purple-400 transition-colors">
                  +
                </span>
              </summary>
              <div className="pt-[12px] text-[14px] leading-[1.8] text-gray-200">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}

