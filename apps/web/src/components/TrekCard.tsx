import Image from "next/image";
import Link from "next/link";
import { Badge, StarRating } from "@xplore/ui";
import type { Trek } from "@/lib/types";
import { difficultyTone, usd } from "@/lib/format";

export function TrekCard({ trek }: { trek: Trek }) {
  return (
    <Link
      href={`/treks/${trek.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-ink-100 transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
    >
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={trek.image}
          alt={trek.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-1.5">
          <Badge tone={difficultyTone(trek.difficulty)}>{trek.difficulty}</Badge>
        </div>
        <div className="absolute right-3 top-3">
          <Badge tone="neutral" className="bg-white/90 backdrop-blur">
            {trek.durationDays}D
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-base font-bold text-ink-900">
            {trek.name}
          </h3>
        </div>
        <p className="text-sm text-ink-400">
          {trek.region}, {trek.country}
        </p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-400">
          <span>{trek.distanceKm} km</span>
          <span aria-hidden="true">·</span>
          <span>{trek.maxAltitudeM.toLocaleString()} m alt.</span>
          <span aria-hidden="true">·</span>
          <span>{trek.bestSeason}</span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <StarRating rating={trek.rating} reviews={trek.reviews} />
          <p className="text-sm">
            <span className="font-display text-lg font-bold text-ink-900">
              {usd(trek.pricePerPersonUSD)}
            </span>
            <span className="text-ink-400"> /person</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
