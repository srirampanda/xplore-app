"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Difficulty } from "@/lib/types";

const budgetOptions = [
  { label: "Any budget", value: "" },
  { label: "Under $75", value: "75" },
  { label: "Under $120", value: "120" },
  { label: "Under $250", value: "250" }
];

export function TrekFilters({
  difficulties,
  activeDifficulty,
  activeQuery,
  activeMaxBudget
}: {
  difficulties: Difficulty[];
  activeDifficulty: string;
  activeQuery: string;
  activeMaxBudget: string;
}) {
  const router = useRouter();
  const [query, setQuery] = useState(activeQuery);

  function updateParams(next: { difficulty?: string; maxBudget?: string; q?: string }) {
    const params = new URLSearchParams();
    const q = next.q ?? query;
    const difficulty = next.difficulty ?? activeDifficulty;
    const maxBudget = next.maxBudget ?? activeMaxBudget;
    if (q) params.set("q", q);
    if (difficulty) params.set("difficulty", difficulty);
    if (maxBudget) params.set("maxBudget", maxBudget);
    router.push(`/treks${params.toString() ? `?${params.toString()}` : ""}`);
  }

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-ink-100 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateParams({ q: query });
        }}
        className="flex items-center gap-2 rounded-full border border-ink-100 px-3.5 py-2 sm:w-72"
      >
        <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0 text-ink-400">
          <path
            d="M17.5 8.75c0 5-7.5 9.58-7.5 9.58S2.5 13.75 2.5 8.75a7.5 7.5 0 1 1 15 0Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search treks or regions…"
          className="w-full bg-transparent text-sm focus:outline-none"
        />
      </form>

      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => updateParams({ difficulty: "" })}
          className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
            !activeDifficulty
              ? "bg-forest-700 text-white"
              : "bg-ink-50 text-ink-700 hover:bg-forest-50"
          }`}
        >
          All
        </button>
        {difficulties.map((d) => (
          <button
            key={d}
            onClick={() => updateParams({ difficulty: d })}
            className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
              activeDifficulty === d
                ? "bg-forest-700 text-white"
                : "bg-ink-50 text-ink-700 hover:bg-forest-50"
            }`}
          >
            {d}
          </button>
        ))}

        <select
          value={activeMaxBudget}
          onChange={(e) => updateParams({ maxBudget: e.target.value })}
          className="rounded-full border border-ink-100 bg-white px-3.5 py-1.5 text-sm text-ink-700 focus:outline-none"
        >
          {budgetOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
