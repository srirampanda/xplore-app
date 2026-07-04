import Image from "next/image";
import { Badge } from "@xplore/ui";
import type { ScenicRoute } from "@/lib/types";

export function RouteCard({ route }: { route: ScenicRoute }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-ink-100 transition-all hover:-translate-y-0.5 hover:shadow-card-hover sm:flex-row">
      <div className="relative h-48 w-full overflow-hidden sm:h-auto sm:w-64 sm:shrink-0">
        <Image
          src={route.image}
          alt={route.name}
          fill
          sizes="(max-width: 768px) 100vw, 256px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-bold text-ink-900">
            {route.name}
          </h3>
          <Badge tone="forest" className="shrink-0">
            ★ {route.scenicRating.toFixed(1)} scenic
          </Badge>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-400">
          <span>{route.distanceKm} km</span>
          <span aria-hidden="true">·</span>
          <span>{route.durationHours} hr drive</span>
          <span aria-hidden="true">·</span>
          <span>{route.roadType}</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {route.highlights.map((h) => (
            <span
              key={h}
              className="rounded-full bg-forest-50 px-2.5 py-1 text-xs text-forest-700"
            >
              {h}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
