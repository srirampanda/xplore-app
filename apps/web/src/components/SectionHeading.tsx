import Link from "next/link";

export function SectionHeading({
  eyebrow,
  title,
  description,
  ctaHref,
  ctaLabel
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wide text-forest-600">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-1 font-display text-2xl font-bold text-ink-900 sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="mt-2 max-w-xl text-ink-400">{description}</p>
        )}
      </div>
      {ctaHref && ctaLabel && (
        <Link
          href={ctaHref}
          className="shrink-0 text-sm font-semibold text-forest-700 hover:text-forest-800"
        >
          {ctaLabel} →
        </Link>
      )}
    </div>
  );
}
