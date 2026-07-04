import type { Metadata } from "next";
import { TreksExplorer } from "@/components/TreksExplorer";
import { treks } from "@/lib/data";
import type { Difficulty } from "@/lib/types";
import { TrekFilters } from "./TrekFilters";

export const metadata: Metadata = {
  title: "Browse Treks — XploreApp"
};

const difficulties: Difficulty[] = ["Easy", "Moderate", "Challenging", "Strenuous"];

export default function TreksPage({
  searchParams
}: {
  searchParams: { q?: string; difficulty?: string; maxBudget?: string };
}) {
  const q = (searchParams.q ?? "").trim().toLowerCase();
  const difficulty = searchParams.difficulty ?? "";
  const maxBudget = searchParams.maxBudget ? Number(searchParams.maxBudget) : undefined;

  const filtered = treks.filter((trek) => {
    const matchesQuery =
      !q ||
      trek.name.toLowerCase().includes(q) ||
      trek.region.toLowerCase().includes(q) ||
      trek.country.toLowerCase().includes(q) ||
      trek.tags.some((t) => t.toLowerCase().includes(q));
    const matchesDifficulty = !difficulty || trek.difficulty === difficulty;
    const matchesBudget = !maxBudget || trek.pricePerPersonUSD <= maxBudget;
    return matchesQuery && matchesDifficulty && matchesBudget;
  });

  return (
    <div className="container-page py-10">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-forest-600">
          {filtered.length} trek{filtered.length !== 1 ? "s" : ""} found
        </p>
        <h1 className="mt-1 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
          Browse treks
        </h1>
        <p className="mt-2 max-w-2xl text-ink-400">
          Filter by difficulty and budget to find a trail that matches your
          pace and your wallet.
        </p>
      </div>

      <TrekFilters
        difficulties={difficulties}
        activeDifficulty={difficulty}
        activeQuery={searchParams.q ?? ""}
        activeMaxBudget={searchParams.maxBudget ?? ""}
      />

      {filtered.length > 0 ? (
        <TreksExplorer treks={filtered} />
      ) : (
        <div className="mt-16 rounded-2xl border border-dashed border-ink-100 py-16 text-center">
          <p className="font-display text-lg font-semibold text-ink-800">
            No treks match those filters
          </p>
          <p className="mt-1 text-sm text-ink-400">
            Try widening your budget or difficulty range.
          </p>
        </div>
      )}
    </div>
  );
}
