"use client";

import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { TrekCard } from "@/components/TrekCard";
import type { Trek } from "@/lib/types";

const TrekMap = dynamic(
  () => import("@/components/TrekMap").then((m) => m.TrekMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-ink-50 text-sm text-ink-400">
        Loading map…
      </div>
    )
  }
);

export function TreksExplorer({ treks }: { treks: Trek[] }) {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  function handleSelectFromMap(slug: string) {
    setSelectedSlug(slug);
    cardRefs.current[slug]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
      <div className="order-2 flex flex-col gap-4 lg:order-1 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:pr-1">
        {treks.map((trek) => (
          <div
            key={trek.slug}
            ref={(el) => {
              cardRefs.current[trek.slug] = el;
            }}
            onMouseEnter={() => setSelectedSlug(trek.slug)}
            className={`rounded-2xl transition-shadow ${
              selectedSlug === trek.slug ? "ring-2 ring-forest-500" : ""
            }`}
          >
            <TrekCard trek={trek} />
          </div>
        ))}
      </div>

      <div className="order-1 h-[360px] overflow-hidden rounded-2xl border border-ink-100 shadow-card lg:sticky lg:top-24 lg:order-2 lg:h-[calc(100vh-8rem)]">
        <TrekMap
          treks={treks}
          selectedSlug={selectedSlug}
          onSelect={handleSelectFromMap}
        />
      </div>
    </div>
  );
}
