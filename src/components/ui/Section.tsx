import { cn } from "@/lib/utils";

type SectionProps = React.ComponentPropsWithoutRef<"section">;

export function Section({ children, className, id, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "bg-black",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
