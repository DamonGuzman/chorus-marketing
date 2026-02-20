import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <div
      className={cn(
        "relative px-3 py-1 bg-white/5 h-9 rounded-[100px] inline-flex justify-center items-center gap-2 overflow-hidden",
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
      {/* Glass shine sweep */}
      <span
        aria-hidden="true"
        className="glass-shine absolute inset-px rounded-badge pointer-events-none z-5"
      />
      {/* Text */}
      <span className="relative z-10 text-center justify-center text-white text-base font-semibold font-['Urbanist'] leading-6">
        {children}
      </span>
    </div>
  );
}
