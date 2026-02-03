import { Section } from "@/components/ui";

const testimonials = [
  {
    quote:
      "We replaced weekly status meetings with a single goal and a live execution feed. Our team ships faster with fewer hand-offs.",
    name: "Founder",
    role: "Series A SaaS",
  },
  {
    quote:
      "The agents don’t just draft—they execute across our tools and ask for approval only when it matters.",
    name: "VP Operations",
    role: "Fintech",
  },
  {
    quote:
      "Our finance agent reconciles spend and flags anomalies with sources. It’s like adding a full-time analyst overnight.",
    name: "Head of Finance",
    role: "Marketplace",
  },
  {
    quote:
      "Chorus made cross-functional launches predictable. Everyone shares the same context and the same plan.",
    name: "Product Lead",
    role: "B2B Platform",
  },
  {
    quote:
      "We went from ‘busy’ to ‘done’. Agents handle the busywork and keep humans focused on decisions.",
    name: "COO",
    role: "Professional Services",
  },
  {
    quote:
      "The coordination layer is the magic: tasks, context, approvals, and progress all in one place.",
    name: "GM",
    role: "E-commerce",
  },
];

export function FoundersSection() {
  return (
    <Section className="py-[100px]" id="testimonials">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[100px]">
        {/* Header */}
        <div className="text-center mb-[51px]">
          <h2 className="text-[35px] leading-[1.1] font-bold text-white mb-[15px]">
            Founders Are Already Building With Chorus
          </h2>
          <p className="text-[18px] leading-[36px] font-medium text-gray-300 max-w-[1034px] mx-auto">
            Teams use Chorus to ship faster with fewer meetings, fewer hand-offs, and a shared execution layer.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-950 rounded-[20px] border border-white/10 p-[30px] hover:border-purple-500/20 transition-colors"
            >
              {/* Quote */}
              <p className="text-[13px] leading-[1.8] text-gray-300 mb-[30px]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-[12px]">
                <div className="w-[48px] h-[48px] rounded-full bg-gradient-to-br from-gray-400 to-gray-600" />
                <div>
                  <p className="text-[16px] font-semibold text-white">{testimonial.name}</p>
                  <p className="text-[10px] text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
