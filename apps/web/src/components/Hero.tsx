import Image from "next/image";
import { SearchBar } from "./SearchBar";

const stats = [
  { label: "Curated treks", value: "50+" },
  { label: "Avg. stay / night", value: "$12" },
  { label: "Scenic drive routes", value: "20+" }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest-900">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=2000&q=80"
          alt="Snow-capped Himalayan trekking trail at sunrise"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-900/80 to-forest-900/40" />
      </div>

      <div className="container-page relative flex flex-col items-start gap-8 py-20 sm:py-28">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white ring-1 ring-inset ring-white/20">
          🏔️ Built for budget-first trekkers
        </span>

        <h1 className="max-w-2xl font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
          Trek more. <span className="text-clay-400">Spend less.</span>
        </h1>

        <p className="max-w-xl text-lg text-forest-50/85">
          Find budget-friendly treks, cozy stays near trailheads, and the
          most scenic drive routes to get there — all in one place.
        </p>

        <div className="w-full max-w-3xl">
          <SearchBar />
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3 pt-2">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-2xl font-bold text-white">
                {s.value}
              </p>
              <p className="text-sm text-forest-50/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
