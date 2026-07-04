import Link from "next/link";
import { Hero } from "@/components/Hero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { TrekCard } from "@/components/TrekCard";
import { StayCard } from "@/components/StayCard";
import { RouteCard } from "@/components/RouteCard";
import { Button } from "@xplore/ui";
import { routes, stays, treks } from "@/lib/data";

export default function HomePage() {
  const trendingTreks = [...treks].sort((a, b) => b.rating - a.rating).slice(0, 4);
  const budgetStays = [...stays]
    .sort((a, b) => a.pricePerNightUSD - b.pricePerNightUSD)
    .slice(0, 3);
  const topRoutes = [...routes].sort((a, b) => b.scenicRating - a.scenicRating).slice(0, 3);

  return (
    <>
      <Hero />
      <FeatureGrid />

      <section className="container-page py-10">
        <SectionHeading
          eyebrow="Trending this season"
          title="Popular budget treks"
          description="Hand-picked trails with the best rating-to-price ratio, from easy weekend walks to multi-day summits."
          ctaHref="/treks"
          ctaLabel="View all treks"
        />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trendingTreks.map((trek) => (
            <TrekCard key={trek.slug} trek={trek} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Sleep well, spend little"
            title="Budget-friendly stays near trailheads"
            description="Homestays, guesthouses, and campsites — all within easy reach of the trail."
            ctaHref="/stays"
            ctaLabel="View all stays"
          />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {budgetStays.map((stay) => (
              <StayCard key={stay.id} stay={stay} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading
          eyebrow="Get there in style"
          title="Top-rated scenic drive routes"
          description="The most scenic car routes from the nearest city to your trailhead."
          ctaHref="/routes"
          ctaLabel="View all routes"
        />
        <div className="mt-8 grid grid-cols-1 gap-5">
          {topRoutes.map((route) => (
            <RouteCard key={route.id} route={route} />
          ))}
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-forest-900 px-8 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-12">
          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Ready for your next trail?
            </h2>
            <p className="mt-2 max-w-md text-forest-50/80">
              Browse every trek, stay, and scenic route — filtered by your
              budget and skill level.
            </p>
          </div>
          <Link href="/treks">
            <Button variant="secondary" size="lg">
              Start exploring
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
