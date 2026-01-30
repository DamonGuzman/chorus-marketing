import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center gap-2 px-3 py-1",
        "bg-gradient-badge border border-purple-400 rounded-badge",
        "shadow-glow text-sm font-bold text-white",
        "font-feature-stylistic",
        className
      )}
    >
      {children}
    </div>
  );
}
