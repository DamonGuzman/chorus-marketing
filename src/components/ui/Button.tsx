import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-bold transition-all duration-200",
        "font-feature-stylistic",
        // Variants
        variant === "primary" && [
          "bg-gradient-primary text-white shadow-glow",
          "hover:opacity-90",
        ],
        variant === "secondary" && [
          "bg-gray-800 text-white border border-white/20",
          "hover:bg-gray-700",
        ],
        variant === "outline" && [
          "bg-transparent backdrop-blur-[30px] border border-white/34 text-gray-100",
          "hover:border-white/50",
        ],
        // Sizes
        size === "sm" && "px-4 py-2 text-xs rounded-pill",
        size === "md" && "px-8 py-3 text-sm rounded-pill",
        size === "lg" && "px-10 py-4 text-base rounded-pill",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
