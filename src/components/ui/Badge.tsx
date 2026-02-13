import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center",
        "h-9 rounded-[100px] overflow-hidden",
        className
      )}
    >
      {/* Gradient border — bright top, fading to dark bottom */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-[100px] bg-gradient-to-b from-white/30 to-white/[0.04]"
      />
      {/* Inner fill */}
      <span
        aria-hidden="true"
        className="absolute inset-[1px] rounded-[100px] bg-[#131313]"
      />
      {/* Text */}
      <span className="relative z-10 px-3 py-1 text-base leading-6 font-semibold text-white text-center font-feature-stylistic">
        {children}
      </span>
    </div>
  );
}
