import Link from "next/link";
import { Button } from "@xplore/ui";

const navLinks = [
  { href: "/treks", label: "Treks" },
  { href: "/stays", label: "Stays" },
  { href: "/routes", label: "Scenic Drives" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-100/70 bg-sand-50/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-forest-700 text-white">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5">
              <path d="M12 2 2 20h6.2l3.8-6.8 3.8 6.8H22L12 2Z" />
            </svg>
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-ink-900">
            Xplore<span className="text-forest-700">App</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-forest-50 hover:text-forest-800"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Sign in
          </Button>
          <Button variant="primary" size="sm">
            Plan a trip
          </Button>
        </div>
      </div>
    </header>
  );
}
