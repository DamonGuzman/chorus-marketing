import { Section, SectionHeader } from "@/components/ui";

const teamMembers = [
  { name: "David Henricks", title: "Founder & CEO", image: "/team/member1.jpg" },
  { name: "Sarah Chen", title: "CTO", image: "/team/member2.jpg" },
  { name: "Michael Torres", title: "Head of Product", image: "/team/member3.jpg" },
  { name: "Emily Watson", title: "Head of Design", image: "/team/member4.jpg" },
  { name: "James Miller", title: "Head of Engineering", image: "/team/member5.jpg" },
  { name: "Lisa Park", title: "Head of Marketing", image: "/team/member6.jpg" },
];

export function TeamSection() {
  return (
    <Section className="py-[75px] pb-[100px]">
      <div className="flex flex-col gap-[75px] items-center">
        <SectionHeader
          badge="Control"
          title="Our Team"
          subtitle="The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale."
        />

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[127px] gap-y-[75px] max-w-[1064px]">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </Section>
  );
}

interface TeamMemberCardProps {
  name: string;
  title: string;
  image: string;
}

function TeamMemberCard({ name, title }: TeamMemberCardProps) {
  return (
    <div className="flex flex-col gap-[26px] items-center">
      {/* Avatar */}
      <div className="w-[270px] h-[270px] rounded-circle bg-gray-600 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-b from-gray-500 to-gray-700" />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-[11px] items-center text-center">
        <h3 className="text-[34px] leading-[48px] font-bold text-white">
          {name}
        </h3>
        <p className="text-base leading-[24px] font-medium text-gray-100 uppercase font-feature-stylistic">
          {title}
        </p>
      </div>
    </div>
  );
}
