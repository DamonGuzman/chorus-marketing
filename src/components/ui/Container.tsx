import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export function Container({ children, className, size = "default" }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 lg:px-[100px]",
        size === "default" && "max-w-[1440px]",
        size === "narrow" && "max-w-[1064px]",
        size === "wide" && "max-w-[1600px]",
        className
      )}
    >
      {children}
    </div>
  );
}
