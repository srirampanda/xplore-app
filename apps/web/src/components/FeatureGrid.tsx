import { IconTile } from "@xplore/ui";

const features = [
  {
    tone: "forest" as const,
    title: "Budget-first, always",
    description:
      "Every trek and stay is tagged with real per-person and per-night pricing so there are no surprises.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M12 2v20M17 6.5c0-1.9-2.2-3.5-5-3.5s-5 1.5-5 3.5 2.2 3 5 3 5 1.1 5 3-2.2 3.5-5 3.5-5-1.6-5-3.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    )
  },
  {
    tone: "clay" as const,
    title: "Verified, budget stays",
    description:
      "Homestays, guesthouses, and campsites near trailheads — vetted for cleanliness, hosts, and honest pricing.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M3 10.5 12 4l9 6.5M5 9.5V20h14V9.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    tone: "sand" as const,
    title: "Difficulty you can trust",
    description:
      "Distance, elevation gain, and max altitude for every trek, rated Easy to Strenuous — no guesswork.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="m3 18 6-10 4 6 3-4 5 8H3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    tone: "forest" as const,
    title: "Scenic drives, mapped",
    description:
      "The best-rated scenic car routes from the nearest city to every trailhead, with drive time and road type.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M4 17h16M6 17l1.2-6.5A2 2 0 0 1 9.2 9h5.6a2 2 0 0 1 2 1.5L18 17M8 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm8 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
];

export function FeatureGrid() {
  return (
    <section className="container-page py-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-ink-100 bg-white p-6"
          >
            <IconTile tone={f.tone}>{f.icon}</IconTile>
            <h3 className="mt-4 font-display text-base font-bold text-ink-900">
              {f.title}
            </h3>
            <p className="mt-1.5 text-sm text-ink-400">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
