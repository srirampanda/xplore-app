export type Difficulty = "Easy" | "Moderate" | "Challenging" | "Strenuous";
export type BudgetTier = "Budget" | "Mid-range" | "Splurge";
export type StayType = "Homestay" | "Guesthouse" | "Campsite" | "Hostel" | "Eco Lodge";

export interface Trailhead {
  lat: number;
  lng: number;
}

export interface Trek {
  slug: string;
  name: string;
  region: string;
  country: string;
  trailhead: Trailhead;
  difficulty: Difficulty;
  durationDays: number;
  distanceKm: number;
  elevationGainM: number;
  maxAltitudeM: number;
  pricePerPersonUSD: number;
  rating: number;
  reviews: number;
  image: string;
  tags: string[];
  summary: string;
  highlights: string[];
  bestSeason: string;
  nearestStayIds: string[];
  routeId: string;
}

export interface Stay {
  id: string;
  name: string;
  location: string;
  nearTrekSlug: string;
  type: StayType;
  pricePerNightUSD: number;
  rating: number;
  reviews: number;
  image: string;
  amenities: string[];
  budgetTier: BudgetTier;
}

export interface ScenicRoute {
  id: string;
  name: string;
  fromCity: string;
  toTrailhead: string;
  distanceKm: number;
  durationHours: number;
  scenicRating: number;
  roadType: string;
  image: string;
  highlights: string[];
}
