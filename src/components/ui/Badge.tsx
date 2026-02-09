import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <div
      className={cn(
        // Layout - flexible width with padding, fixed height
        "inline-flex items-center justify-center",
        "px-[16px] h-[24px]",
        // Glass effect - semi-transparent background with blur
        "bg-white/10 backdrop-blur-md",
        // Border - lighter gray border for glass effect
        "border border-white/30",
        // Border radius: 100px (pill)
        "rounded-[100px]",
        // Typography: 16px, SemiBold (600), 24px line-height, center aligned
        "text-[16px] leading-[24px] font-semibold text-white text-center",
        // OpenType features
        "font-feature-stylistic",
        className
      )}
    >
      {children}
    </div>
  );
}
