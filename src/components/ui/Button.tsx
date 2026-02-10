import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "light" | "secondary" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return cn(
    // Base styles
    "inline-flex items-center justify-center",
    // Typography: 14px, bold, 24px line-height
    "text-[14px] leading-[24px] font-bold",
    // OpenType features
    "font-feature-stylistic",
    // Focus
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
    // Transition
    "transition-all duration-200",
    // Variants
    variant === "primary" && ["bg-gradient-primary text-white shadow-glow", "hover:opacity-90"],
    variant === "light" && [
      "bg-white text-black shadow-[0px_12px_40px_rgba(0,0,0,0.45)]",
      "hover:bg-white/90",
    ],
    variant === "secondary" && ["bg-gray-800 text-white border border-white/20", "hover:bg-gray-700"],
    variant === "outline" && [
      "bg-transparent backdrop-blur-[30px] border border-white/[0.34] text-gray-100",
      "hover:border-white/50",
    ],
    // Sizes - padding 12px vertical, 32px horizontal
    size === "sm" && "px-[24px] py-[8px] rounded-[50px]",
    size === "md" && "px-[32px] py-[12px] rounded-[50px]",
    size === "lg" && "px-[40px] py-[16px] rounded-[50px]",
    className
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
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
      className={buttonStyles({ variant, size, className })}
      {...props}
    >
      {children}
    </button>
  );
}
