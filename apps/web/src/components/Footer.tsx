import Link from "next/link";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/treks", label: "All treks" },
      { href: "/stays", label: "Budget stays" },
      { href: "/routes", label: "Scenic drive routes" }
    ]
  },
  {
    title: "Difficulty",
    links: [
      { href: "/treks?difficulty=Easy", label: "Easy treks" },
      { href: "/treks?difficulty=Moderate", label: "Moderate treks" },
      { href: "/treks?difficulty=Challenging", label: "Challenging treks" }
    ]
  },
  {
    title: "Company",
    links: [
      { href: "#", label: "About XploreApp" },
      { href: "#", label: "Trek safety" },
      { href: "#", label: "Contact" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-white">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2 md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-forest-700 text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5">
                <path d="M12 2 2 20h6.2l3.8-6.8 3.8 6.8H22L12 2Z" />
              </svg>
            </span>
            <span className="font-display text-lg font-bold text-ink-900">
              XploreApp
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-ink-400">
            Budget-friendly treks, stays, and scenic drive routes for people
            who'd rather spend on trail time than markup.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-sm font-semibold text-ink-900">
              {col.title}
            </h4>
            <ul className="mt-3 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-400 transition-colors hover:text-forest-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-ink-100 py-6">
        <p className="container-page text-xs text-ink-400">
          © {new Date().getFullYear()} XploreApp. Trek prices & availability
          are illustrative sample data.
        </p>
      </div>
    </footer>
  );
}
