import type { ReactNode } from "react";

type Tone = "forest" | "clay" | "sand" | "neutral";

const tones: Record<Tone, string> = {
  forest: "bg-forest-50 text-forest-700 ring-1 ring-inset ring-forest-200",
  clay: "bg-clay-50 text-clay-700 ring-1 ring-inset ring-clay-200",
  sand: "bg-sand-100 text-sand-600 ring-1 ring-inset ring-sand-300",
  neutral: "bg-ink-50 text-ink-600 ring-1 ring-inset ring-ink-100"
};

export function Badge({
  tone = "neutral",
  children,
  className = ""
}: {
  tone?: Tone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
