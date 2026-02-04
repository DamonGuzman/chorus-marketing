import Image from "next/image";

import { cn } from "@/lib/utils";

export function Avatar({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full border border-white/10 bg-white/5",
        className,
      )}
      aria-label={alt}
      title={alt}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

