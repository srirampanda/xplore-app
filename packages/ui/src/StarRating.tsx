export function StarRating({
  rating,
  reviews,
  size = "sm"
}: {
  rating: number;
  reviews?: number;
  size?: "sm" | "md";
}) {
  const starSize = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";
  return (
    <span className="inline-flex items-center gap-1 text-ink-700">
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        className={`${starSize} text-clay-500`}
        aria-hidden="true"
      >
        <path d="M10 1.5l2.6 5.6 6.15.7-4.6 4.2 1.25 6-5.4-3.1-5.4 3.1 1.25-6-4.6-4.2 6.15-.7L10 1.5z" />
      </svg>
      <span className="text-sm font-semibold">{rating.toFixed(1)}</span>
      {typeof reviews === "number" && (
        <span className="text-sm text-ink-400">({reviews})</span>
      )}
    </span>
  );
}
