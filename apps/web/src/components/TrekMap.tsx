"use client";

import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import Link from "next/link";
import "leaflet/dist/leaflet.css";
import type { Trek } from "@/lib/types";

const FOREST_700 = "#1c5941";
const FOREST_500 = "#328a63";

function pinIcon(color: string, size: number) {
  const height = Math.round(size * 1.3);
  return L.divIcon({
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${height}" viewBox="0 0 34 44">
      <path d="M17 0C7.6 0 0 7.6 0 17c0 12.5 17 27 17 27s17-14.5 17-27C34 7.6 26.4 0 17 0Z" fill="${color}"/>
      <circle cx="17" cy="17" r="10" fill="white"/>
      <path d="M17 10 10 24h4.5l2.5-4.5 2.5 4.5H24Z" fill="${color}"/>
    </svg>`,
    className: "trek-marker-icon",
    iconSize: [size, height],
    iconAnchor: [size / 2, height],
    popupAnchor: [0, -height + 6]
  });
}

const defaultIcon = pinIcon(FOREST_700, 30);
const activeIcon = pinIcon(FOREST_500, 38);

function FitBounds({ treks }: { treks: Trek[] }) {
  const map = useMap();

  useEffect(() => {
    if (treks.length === 0) return;
    const bounds = L.latLngBounds(
      treks.map((trek) => [trek.trailhead.lat, trek.trailhead.lng])
    );
    map.fitBounds(bounds, { padding: [56, 56], maxZoom: 9 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [treks.map((trek) => trek.slug).join(","), map]);

  return null;
}

function PanToSelected({ treks, selectedSlug }: { treks: Trek[]; selectedSlug?: string | null }) {
  const map = useMap();

  useEffect(() => {
    if (!selectedSlug) return;
    const trek = treks.find((t) => t.slug === selectedSlug);
    if (!trek) return;
    map.panTo([trek.trailhead.lat, trek.trailhead.lng], { animate: true });
  }, [selectedSlug, treks, map]);

  return null;
}

export function TrekMap({
  treks,
  selectedSlug,
  onSelect
}: {
  treks: Trek[];
  selectedSlug?: string | null;
  onSelect?: (slug: string) => void;
}) {
  const markerRefs = useRef<Record<string, L.Marker | null>>({});

  useEffect(() => {
    if (selectedSlug) {
      markerRefs.current[selectedSlug]?.openPopup();
    }
  }, [selectedSlug]);

  return (
    <MapContainer
      center={[29, 82]}
      zoom={5}
      scrollWheelZoom
      className="h-full w-full"
    >
      <TileLayer
        url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
        maxZoom={17}
        attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, SRTM | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
      />
      <FitBounds treks={treks} />
      <PanToSelected treks={treks} selectedSlug={selectedSlug} />
      {treks.map((trek) => (
        <Marker
          key={trek.slug}
          position={[trek.trailhead.lat, trek.trailhead.lng]}
          icon={trek.slug === selectedSlug ? activeIcon : defaultIcon}
          eventHandlers={{ click: () => onSelect?.(trek.slug) }}
          ref={(ref) => {
            markerRefs.current[trek.slug] = ref;
          }}
        >
          <Popup>
            <div className="min-w-[180px] font-sans">
              <p className="font-display font-semibold text-ink-900">
                {trek.name}
              </p>
              <p className="mt-0.5 text-xs text-ink-400">
                {trek.region}, {trek.country}
              </p>
              <p className="mt-1.5 text-xs text-ink-600">
                {trek.difficulty} · {trek.distanceKm} km ·{" "}
                {trek.durationDays}d
              </p>
              <Link
                href={`/treks/${trek.slug}`}
                className="mt-2 inline-block text-sm font-medium text-forest-700 hover:underline"
              >
                View trek →
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
