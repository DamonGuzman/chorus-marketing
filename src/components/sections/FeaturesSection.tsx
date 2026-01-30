import { Section } from "@/components/ui";
import { AtomIcon, BotIcon, BlendIcon } from "@/components/icons";

const features = [
  {
    icon: AtomIcon,
    title: "Built in Public. Proven in Public",
    description:
      "We launched not with promises, but with a 30-day public experiment where every business decision was voted on by thousands—live, transparent, and real.",
  },
  {
    icon: BotIcon,
    title: "AI Agents in Perfect Harmony",
    description:
      "Chorus coordinated and executed every task in real-time, balancing thousands of voices while building a profitable business from scratch.",
  },
  {
    icon: BlendIcon,
    title: "Proof Before Belief",
    description:
      "You didn't have to take our word for it—you watched it happen. A real company, real decisions, real results. That's the power of Chorus.",
  },
];

export function FeaturesSection() {
  return (
    <Section className="py-[75px]">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-[51px]">
        {features.map((feature, index) => (
          <div key={feature.title} className="flex items-center gap-[51px]">
            {/* Feature Card */}
            <div className="flex flex-col gap-[38px] w-[339px]">
              <feature.icon className="w-[50px] h-[50px] text-white" />
              <div className="flex flex-col gap-5">
                <h3 className="text-[26px] leading-[44px] font-bold text-white tracking-[-0.26px]">
                  {feature.title}
                </h3>
                <p className="text-lg leading-[32px] font-medium text-gray-300 h-[120px]">
                  {feature.description}
                </p>
              </div>
            </div>

            {/* Divider (not after last item) */}
            {index < features.length - 1 && (
              <div className="hidden lg:block w-px h-[316px] bg-white/20" />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
