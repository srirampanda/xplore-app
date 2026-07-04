import type { ReactNode } from "react";

export function IconTile({
  children,
  tone = "forest"
}: {
  children: ReactNode;
  tone?: "forest" | "clay" | "sand";
}) {
  const tones = {
    forest: "bg-forest-50 text-forest-700",
    clay: "bg-clay-50 text-clay-600",
    sand: "bg-sand-100 text-sand-600"
  } as const;

  return (
    <div
      className={`flex h-11 w-11 items-center justify-center rounded-xl ${tones[tone]}`}
    >
      {children}
    </div>
  );
}
