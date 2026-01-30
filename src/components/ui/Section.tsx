import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "bg-black py-[75px] px-6 lg:px-[100px]",
        className
      )}
    >
      {children}
    </section>
  );
}
