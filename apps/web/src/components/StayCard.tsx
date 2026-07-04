import Image from "next/image";
import { Badge, StarRating } from "@xplore/ui";
import type { Stay } from "@/lib/types";
import { budgetTone, usd } from "@/lib/format";

export function StayCard({ stay }: { stay: Stay }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-ink-100 transition-all hover:-translate-y-0.5 hover:shadow-card-hover">
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={stay.image}
          alt={stay.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <Badge tone={budgetTone(stay.budgetTier)}>{stay.budgetTier}</Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-base font-bold text-ink-900">
            {stay.name}
          </h3>
        </div>
        <p className="text-sm text-ink-400">{stay.location}</p>
        <p className="text-xs font-medium uppercase tracking-wide text-forest-600">
          {stay.type}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {stay.amenities.slice(0, 3).map((a) => (
            <span
              key={a}
              className="rounded-full bg-ink-50 px-2 py-0.5 text-xs text-ink-600"
            >
              {a}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <StarRating rating={stay.rating} reviews={stay.reviews} />
          <p className="text-sm">
            <span className="font-display text-lg font-bold text-ink-900">
              {usd(stay.pricePerNightUSD)}
            </span>
            <span className="text-ink-400"> /night</span>
          </p>
        </div>
      </div>
    </div>
  );
}
