import type { Metadata } from "next";
import { RouteCard } from "@/components/RouteCard";
import { routes } from "@/lib/data";

export const metadata: Metadata = {
  title: "Scenic Drive Routes — XploreApp"
};

export default function RoutesPage() {
  const sorted = [...routes].sort((a, b) => b.scenicRating - a.scenicRating);

  return (
    <div className="container-page py-10">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-forest-600">
          {sorted.length} routes found
        </p>
        <h1 className="mt-1 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
          Scenic drive routes to the trailhead
        </h1>
        <p className="mt-2 max-w-2xl text-ink-400">
          The most scenic car routes from the nearest city, rated for views,
          road quality, and drive time.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5">
        {sorted.map((route) => (
          <RouteCard key={route.id} route={route} />
        ))}
      </div>
    </div>
  );
}
