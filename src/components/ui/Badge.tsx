import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  orbitDelay?: string;
}

export function Badge({ children, className, orbitDelay = "0s" }: BadgeProps) {
  return (
    <div
      className={cn(
        "relative px-3 py-1 bg-white/5 h-9 rounded-[100px] inline-flex justify-center items-center gap-2 overflow-hidden",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-[100px] bg-gradient-to-b from-white/30 to-white/[0.04]"
      />
      <span
        aria-hidden="true"
        className="cta-orbit-ring cta-orbit-ring--pill"
        style={{ '--orbit-delay': orbitDelay } as React.CSSProperties}
      />
      <span
        aria-hidden="true"
        className="absolute inset-[1px] rounded-[100px] bg-[#131313]"
      />
      <span className="relative z-10 text-center justify-center text-white text-base font-semibold font-['Urbanist'] leading-6">
        {children}
      </span>
    </div>
  );
}
