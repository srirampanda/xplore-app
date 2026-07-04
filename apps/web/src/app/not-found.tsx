import Link from "next/link";
import { Button } from "@xplore/ui";

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-center justify-center py-28 text-center">
      <p className="font-display text-6xl font-extrabold text-forest-700">404</p>
      <h1 className="mt-3 font-display text-2xl font-bold text-ink-900">
        This trail doesn't exist
      </h1>
      <p className="mt-2 max-w-md text-ink-400">
        The page you're looking for may have been moved or the link is off
        the map. Let's get you back on the trail.
      </p>
      <Link href="/" className="mt-6">
        <Button variant="primary">Back to home</Button>
      </Link>
    </div>
  );
}
