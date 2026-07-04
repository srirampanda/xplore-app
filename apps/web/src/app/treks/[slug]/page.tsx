import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge, Button, StarRating } from "@xplore/ui";
import { getRouteById, getStaysForTrek, getTrekBySlug, treks } from "@/lib/data";
import { difficultyTone, usd } from "@/lib/format";
import { StayCard } from "@/components/StayCard";
import { RouteCard } from "@/components/RouteCard";

export function generateStaticParams() {
  return treks.map((trek) => ({ slug: trek.slug }));
}

export function generateMetadata({
  params
}: {
  params: { slug: string };
}): Metadata {
  const trek = getTrekBySlug(params.slug);
  return { title: trek ? `${trek.name} — XploreApp` : "Trek not found" };
}

const stats = (trek: NonNullable<ReturnType<typeof getTrekBySlug>>) => [
  { label: "Duration", value: `${trek.durationDays} days` },
  { label: "Distance", value: `${trek.distanceKm} km` },
  { label: "Elevation gain", value: `${trek.elevationGainM.toLocaleString()} m` },
  { label: "Max altitude", value: `${trek.maxAltitudeM.toLocaleString()} m` }
];

export default function TrekDetailPage({ params }: { params: { slug: string } }) {
  const trek = getTrekBySlug(params.slug);
  if (!trek) notFound();

  const nearbyStays = getStaysForTrek(trek.slug);
  const route = getRouteById(trek.routeId);

  return (
    <div>
      <div className="relative h-[360px] w-full sm:h-[440px]">
        <Image
          src={trek.image}
          alt={trek.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-transparent" />
        <div className="container-page absolute inset-x-0 bottom-0 pb-8">
          <div className="flex flex-wrap gap-2">
            <Badge tone={difficultyTone(trek.difficulty)}>{trek.difficulty}</Badge>
            {trek.tags.map((t) => (
              <Badge key={t} tone="neutral" className="bg-white/90">
                {t}
              </Badge>
            ))}
          </div>
          <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            {trek.name}
          </h1>
          <p className="mt-1 text-white/85">
            {trek.region}, {trek.country}
          </p>
        </div>
      </div>

      <div className="container-page grid grid-cols-1 gap-10 py-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between">
            <StarRating rating={trek.rating} reviews={trek.reviews} size="md" />
            <p className="text-sm text-ink-400">Best season: {trek.bestSeason}</p>
          </div>

          <p className="mt-5 text-base leading-relaxed text-ink-700">
            {trek.summary}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats(trek).map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-ink-100 bg-white p-4"
              >
                <p className="text-xs uppercase tracking-wide text-ink-400">
                  {s.label}
                </p>
                <p className="mt-1 font-display text-lg font-bold text-ink-900">
                  {s.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="font-display text-xl font-bold text-ink-900">
              Trek highlights
            </h2>
            <ul className="mt-3 space-y-2.5">
              {trek.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-ink-700">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="mt-0.5 h-4.5 w-4.5 shrink-0 text-forest-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4L8 11.6l6.8-6.8a1 1 0 0 1 1.4 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {route && (
            <div className="mt-10">
              <h2 className="font-display text-xl font-bold text-ink-900">
                Scenic drive to the trailhead
              </h2>
              <div className="mt-4">
                <RouteCard route={route} />
              </div>
            </div>
          )}
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
            <p className="text-sm text-ink-400">Estimated cost</p>
            <p className="mt-1 font-display text-3xl font-bold text-ink-900">
              {usd(trek.pricePerPersonUSD)}
              <span className="text-base font-medium text-ink-400"> /person</span>
            </p>
            <p className="mt-1 text-xs text-ink-400">
              Guide, permits & basic meals — stays booked separately
            </p>
            <Button variant="primary" className="mt-5 w-full">
              Check availability
            </Button>
            <Button variant="outline" className="mt-2.5 w-full">
              Ask a local guide
            </Button>

            <div className="mt-6 border-t border-ink-100 pt-5">
              <Link
                href="/treks"
                className="text-sm font-semibold text-forest-700 hover:text-forest-800"
              >
                ← Back to all treks
              </Link>
            </div>
          </div>
        </aside>
      </div>

      {nearbyStays.length > 0 && (
        <section className="bg-white py-14">
          <div className="container-page">
            <h2 className="font-display text-2xl font-bold text-ink-900">
              Where to stay near {trek.name}
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {nearbyStays.map((stay) => (
                <StayCard key={stay.id} stay={stay} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
