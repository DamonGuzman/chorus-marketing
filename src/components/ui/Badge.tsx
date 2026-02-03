import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <div
      className={cn(
        // Layout
        "inline-flex items-center justify-center",
        // Spacing: 4px vertical, 12px horizontal
        "px-[12px] py-[4px]",
        // Background gradient
        "bg-gradient-badge",
        // Border
        "border border-purple-400",
        // Border radius: 100px (pill)
        "rounded-[100px]",
        // Shadow glow
        "shadow-glow",
        // Typography: 14px, bold, 24px line-height
        "text-[14px] leading-[24px] font-bold text-white",
        // OpenType features
        "font-feature-stylistic",
        className
      )}
    >
      {children}
    </div>
  );
}
