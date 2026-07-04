import type { Difficulty, BudgetTier } from "./types";

export function difficultyTone(difficulty: Difficulty): "forest" | "clay" | "sand" | "neutral" {
  switch (difficulty) {
    case "Easy":
      return "forest";
    case "Moderate":
      return "sand";
    case "Challenging":
      return "clay";
    case "Strenuous":
      return "clay";
    default:
      return "neutral";
  }
}

export function budgetTone(tier: BudgetTier): "forest" | "clay" | "sand" | "neutral" {
  switch (tier) {
    case "Budget":
      return "forest";
    case "Mid-range":
      return "sand";
    case "Splurge":
      return "clay";
    default:
      return "neutral";
  }
}

export function usd(amount: number): string {
  return `$${amount.toLocaleString("en-US")}`;
}
