"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@xplore/ui";

export function SearchBar() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [maxBudget, setMaxBudget] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.set("q", destination);
    if (difficulty) params.set("difficulty", difficulty);
    if (maxBudget) params.set("maxBudget", maxBudget);
    router.push(`/treks${params.toString() ? `?${params.toString()}` : ""}`);
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-full flex-col gap-2 rounded-2xl bg-white p-2.5 shadow-card-hover ring-1 ring-ink-100 sm:flex-row sm:items-center sm:rounded-full sm:p-2"
    >
      <div className="flex flex-1 items-center gap-2.5 px-3 py-2 sm:border-r sm:border-ink-100">
        <svg viewBox="0 0 20 20" fill="none" className="h-4.5 w-4.5 shrink-0 text-ink-400">
          <path
            d="M17.5 8.75c0 5-7.5 9.58-7.5 9.58S2.5 13.75 2.5 8.75a7.5 7.5 0 1 1 15 0Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="10" cy="8.75" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <input
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Search treks, regions, trailheads…"
          className="w-full bg-transparent text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-2.5 px-3 py-2 sm:border-r sm:border-ink-100">
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="w-full bg-transparent text-sm text-ink-700 focus:outline-none sm:w-auto"
        >
          <option value="">Any difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Moderate">Moderate</option>
          <option value="Challenging">Challenging</option>
        </select>
      </div>

      <div className="flex items-center gap-2.5 px-3 py-2">
        <select
          value={maxBudget}
          onChange={(e) => setMaxBudget(e.target.value)}
          className="w-full bg-transparent text-sm text-ink-700 focus:outline-none sm:w-auto"
        >
          <option value="">Any budget</option>
          <option value="75">Under $75</option>
          <option value="120">Under $120</option>
          <option value="250">Under $250</option>
        </select>
      </div>

      <Button type="submit" size="md" className="w-full sm:w-auto">
        Search
      </Button>
    </form>
  );
}
