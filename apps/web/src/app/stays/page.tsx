import type { Metadata } from "next";
import { StayCard } from "@/components/StayCard";
import { stays } from "@/lib/data";

export const metadata: Metadata = {
  title: "Budget Stays — XploreApp"
};

export default function StaysPage() {
  const sorted = [...stays].sort((a, b) => a.pricePerNightUSD - b.pricePerNightUSD);

  return (
    <div className="container-page py-10">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-forest-600">
          {sorted.length} stays found
        </p>
        <h1 className="mt-1 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
          Budget-friendly stays near trailheads
        </h1>
        <p className="mt-2 max-w-2xl text-ink-400">
          Homestays, guesthouses, campsites, and hostels — sorted by price,
          lowest first.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((stay) => (
          <StayCard key={stay.id} stay={stay} />
        ))}
      </div>
    </div>
  );
}
