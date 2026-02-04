import { cn } from "@/lib/utils";

export function PrismaticOrb({
  className,
  size = 149,
}: {
  className?: string;
  size?: number;
}) {
  const sizePx = `${size}px`;
  const ringPx = `${Math.max(6, Math.round(size * 0.06))}px`;

  return (
    <div
      aria-hidden="true"
      className={cn("relative rounded-full", className)}
      style={{ width: sizePx, height: sizePx }}
    >
      {/* Prismatic rim */}
      <div
        className="absolute inset-0 rounded-full opacity-95"
        style={{
          background:
            "conic-gradient(from 215deg, rgba(255, 153, 102, 0.0) 0deg, rgba(255, 214, 122, 0.75) 35deg, rgba(92, 241, 255, 0.7) 110deg, rgba(120, 112, 255, 0.7) 180deg, rgba(255, 79, 216, 0.65) 250deg, rgba(255, 214, 122, 0.7) 320deg, rgba(255, 153, 102, 0.0) 360deg)",
          WebkitMask: `radial-gradient(closest-side, transparent calc(100% - ${ringPx}), #000 calc(100% - ${ringPx}))`,
          mask: `radial-gradient(closest-side, transparent calc(100% - ${ringPx}), #000 calc(100% - ${ringPx}))`,
          filter: "blur(0.4px) drop-shadow(0 0 10px rgba(175,130,249,0.25))",
        }}
      />

      {/* Sphere body */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(120% 120% at 35% 25%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 22%, rgba(0,0,0,0.0) 55%), radial-gradient(120% 120% at 70% 70%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 18%, rgba(0,0,0,0.0) 50%), radial-gradient(120% 120% at 50% 55%, rgba(30, 28, 36, 0.95) 0%, rgba(9, 9, 10, 1) 55%, rgba(0,0,0,1) 100%)",
          boxShadow:
            "inset 0 0 18px rgba(255,255,255,0.04), inset 0 -22px 48px rgba(0,0,0,0.85)",
        }}
      />

      {/* Gloss highlights */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(70% 55% at 30% 22%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.05) 26%, rgba(255,255,255,0.0) 58%), radial-gradient(48% 38% at 78% 40%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.0) 55%)",
          filter: "blur(0.2px)",
        }}
      />

      {/* Rim sheen */}
      <div
        className="absolute inset-0 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0,0,0,0.0) 72%, rgba(255,255,255,0.05) 78%, rgba(255,255,255,0.0) 90%)",
        }}
      />
    </div>
  );
}

