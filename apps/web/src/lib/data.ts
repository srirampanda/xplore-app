import type { ScenicRoute, Stay, Trek } from "./types";

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const routes: ScenicRoute[] = [
  {
    id: "manali-chandratal",
    name: "Manali → Chandratal via Atal Tunnel",
    fromCity: "Manali",
    toTrailhead: "Chatru / Hampta base",
    distanceKm: 122,
    durationHours: 5,
    scenicRating: 4.9,
    roadType: "Mountain pass, partly unpaved",
    image: img("photo-1476514525535-07fb3b4ae5f1"),
    highlights: ["Atal Tunnel crossing", "Chandra river valley", "Moonscape high desert"]
  },
  {
    id: "dehradun-sankri",
    name: "Dehradun → Sankri via Mori",
    fromCity: "Dehradun",
    toTrailhead: "Sankri village",
    distanceKm: 210,
    durationHours: 8,
    scenicRating: 4.6,
    roadType: "Winding hill roads",
    image: img("photo-1469474968028-56623f02e42e"),
    highlights: ["Yamuna valley views", "Pine & deodar forests", "Rural Garhwal villages"]
  },
  {
    id: "rishikesh-govindghat",
    name: "Rishikesh → Govindghat",
    fromCity: "Rishikesh",
    toTrailhead: "Govindghat",
    distanceKm: 275,
    durationHours: 10,
    scenicRating: 4.7,
    roadType: "Riverside highway",
    image: img("photo-1516426122078-c23e76319801"),
    highlights: ["Alaknanda river gorge", "Devprayag confluence", "Waterfall stops"]
  },
  {
    id: "pokhara-nayapul",
    name: "Pokhara → Nayapul",
    fromCity: "Pokhara",
    toTrailhead: "Nayapul",
    distanceKm: 42,
    durationHours: 1.5,
    scenicRating: 4.4,
    roadType: "Paved valley road",
    image: img("photo-1502786129293-79981df4e708"),
    highlights: ["Annapurna foothill views", "Terraced farms", "Modi Khola river"]
  }
];

export const stays: Stay[] = [
  {
    id: "sissu-riverside",
    name: "Sissu Riverside Homestay",
    location: "Sissu, Himachal Pradesh",
    nearTrekSlug: "hampta-pass",
    type: "Homestay",
    pricePerNightUSD: 14,
    rating: 4.7,
    reviews: 212,
    image: img("photo-1502784444187-359ac186c5bb"),
    amenities: ["Home-cooked meals", "Bonfire", "Mountain view", "Free parking"],
    budgetTier: "Budget"
  },
  {
    id: "sankri-guesthouse",
    name: "Sankri Village Guesthouse",
    location: "Sankri, Uttarakhand",
    nearTrekSlug: "kedarkantha",
    type: "Guesthouse",
    pricePerNightUSD: 11,
    rating: 4.5,
    reviews: 340,
    image: img("photo-1505142468610-359e7d316be0"),
    amenities: ["Hot water", "Trekking gear rental", "Bonfire", "Home-cooked meals"],
    budgetTier: "Budget"
  },
  {
    id: "govindghat-eco-lodge",
    name: "Govindghat Eco Lodge",
    location: "Govindghat, Uttarakhand",
    nearTrekSlug: "valley-of-flowers",
    type: "Eco Lodge",
    pricePerNightUSD: 22,
    rating: 4.6,
    reviews: 158,
    image: img("photo-1499696010180-025ef6e1a8f9"),
    amenities: ["River view", "Solar heated water", "Vegetarian meals", "Trek desk"],
    budgetTier: "Mid-range"
  },
  {
    id: "ghandruk-teahouse",
    name: "Ghandruk Traditional Teahouse",
    location: "Ghandruk, Nepal",
    nearTrekSlug: "annapurna-base-camp",
    type: "Guesthouse",
    pricePerNightUSD: 9,
    rating: 4.8,
    reviews: 401,
    image: img("photo-1544984243-ec57ea16fe25"),
    amenities: ["Gurung hospitality", "Wi-Fi", "Hot showers", "Mountain view balcony"],
    budgetTier: "Budget"
  },
  {
    id: "lohajung-bunkhouse",
    name: "Lohajung Camp & Bunkhouse",
    location: "Lohajung, Uttarakhand",
    nearTrekSlug: "roopkund",
    type: "Campsite",
    pricePerNightUSD: 13,
    rating: 4.4,
    reviews: 96,
    image: img("photo-1517824806704-9040b037703b"),
    amenities: ["Tented stay", "Bonfire", "Trek briefing", "Home-cooked meals"],
    budgetTier: "Budget"
  },
  {
    id: "gulaba-alpine-hostel",
    name: "Gulaba Alpine Hostel",
    location: "Gulaba, Himachal Pradesh",
    nearTrekSlug: "bhrigu-lake",
    type: "Hostel",
    pricePerNightUSD: 8,
    rating: 4.3,
    reviews: 122,
    image: img("photo-1521401830884-6c03c1c87ebb"),
    amenities: ["Dorm & private rooms", "Common kitchen", "Gear storage"],
    budgetTier: "Budget"
  }
];

export const treks: Trek[] = [
  {
    slug: "hampta-pass",
    name: "Hampta Pass Trek",
    region: "Himachal Pradesh",
    country: "India",
    trailhead: { lat: 32.2937, lng: 77.1892 },
    difficulty: "Moderate",
    durationDays: 4,
    distanceKm: 26,
    elevationGainM: 1500,
    maxAltitudeM: 4270,
    pricePerPersonUSD: 95,
    rating: 4.7,
    reviews: 583,
    image: img("photo-1506905925346-21bda4d32df4"),
    tags: ["Crossover trek", "River crossing", "Two valleys"],
    summary:
      "A dramatic crossover trek linking the green Kullu valley to the stark, desert-like Lahaul valley in just four days.",
    highlights: [
      "Sudden landscape shift from lush forest to high desert",
      "Chandratal side excursion option",
      "River crossing at Rani Nallah"
    ],
    bestSeason: "Jun – Sep",
    nearestStayIds: ["sissu-riverside"],
    routeId: "manali-chandratal"
  },
  {
    slug: "kedarkantha",
    name: "Kedarkantha Trek",
    region: "Uttarakhand",
    country: "India",
    trailhead: { lat: 31.0347, lng: 78.2214 },
    difficulty: "Easy",
    durationDays: 5,
    distanceKm: 20,
    elevationGainM: 1600,
    maxAltitudeM: 3800,
    pricePerPersonUSD: 75,
    rating: 4.8,
    reviews: 940,
    image: img("photo-1483728642387-6c3bdd6c93e5"),
    tags: ["Winter trek", "Summit trek", "Beginner friendly"],
    summary:
      "One of the best winter treks in India — a summit walk through snow-laden pine forests with 360° Himalayan views.",
    highlights: [
      "Panoramic summit view of Swargarohini & Bandarpoonch",
      "Camping in snow (Nov–Mar)",
      "Juda ka Talab frozen lake"
    ],
    bestSeason: "Dec – Apr",
    nearestStayIds: ["sankri-guesthouse"],
    routeId: "dehradun-sankri"
  },
  {
    slug: "valley-of-flowers",
    name: "Valley of Flowers Trek",
    region: "Uttarakhand",
    country: "India",
    trailhead: { lat: 30.6976, lng: 79.6053 },
    difficulty: "Easy",
    durationDays: 4,
    distanceKm: 38,
    elevationGainM: 900,
    maxAltitudeM: 3658,
    pricePerPersonUSD: 65,
    rating: 4.9,
    reviews: 712,
    image: img("photo-1441974231531-c6227db76b6e"),
    tags: ["UNESCO site", "Wildflower bloom", "Gentle trail"],
    summary:
      "Walk through a UNESCO World Heritage valley carpeted in hundreds of Himalayan wildflower species during monsoon bloom.",
    highlights: [
      "300+ species of alpine flowers (Jul–Aug peak)",
      "Hemkund Sahib side trip",
      "Gentle, well-marked trail"
    ],
    bestSeason: "Jul – Sep",
    nearestStayIds: ["govindghat-eco-lodge"],
    routeId: "rishikesh-govindghat"
  },
  {
    slug: "annapurna-base-camp",
    name: "Annapurna Base Camp Trek",
    region: "Gandaki",
    country: "Nepal",
    trailhead: { lat: 28.3949, lng: 83.7908 },
    difficulty: "Moderate",
    durationDays: 7,
    distanceKm: 75,
    elevationGainM: 3200,
    maxAltitudeM: 4130,
    pricePerPersonUSD: 210,
    rating: 4.9,
    reviews: 1284,
    image: img("photo-1542224566-6e85f2e6772f"),
    tags: ["Teahouse trek", "Classic route", "Amphitheatre views"],
    summary:
      "The classic teahouse trek into the natural amphitheatre of Annapurna Sanctuary, surrounded by 7,000m+ peaks.",
    highlights: [
      "Sunrise over Annapurna South & Machapuchare",
      "Warm Gurung & Magar village hospitality",
      "Bamboo & rhododendron forest sections"
    ],
    bestSeason: "Mar – May, Oct – Nov",
    nearestStayIds: ["ghandruk-teahouse"],
    routeId: "pokhara-nayapul"
  },
  {
    slug: "roopkund",
    name: "Roopkund Trek",
    region: "Uttarakhand",
    country: "India",
    trailhead: { lat: 30.1667, lng: 79.7333 },
    difficulty: "Challenging",
    durationDays: 8,
    distanceKm: 53,
    elevationGainM: 2600,
    maxAltitudeM: 5029,
    pricePerPersonUSD: 140,
    rating: 4.6,
    reviews: 389,
    image: img("photo-1500534623283-312aade485b7"),
    tags: ["Mystery lake", "High altitude", "Bugyal meadows"],
    summary:
      "A demanding high-altitude trek to the mysterious skeleton lake, crossing vast rolling meadows and glacial moraine.",
    highlights: [
      "Roopkund's ancient skeletal remains",
      "Bedni Bugyal & Ali Bugyal meadows",
      "Views of Trishul & Nanda Ghunti"
    ],
    bestSeason: "May – Jun, Sep – Oct",
    nearestStayIds: ["lohajung-bunkhouse"],
    routeId: "dehradun-sankri"
  },
  {
    slug: "bhrigu-lake",
    name: "Bhrigu Lake Trek",
    region: "Himachal Pradesh",
    country: "India",
    trailhead: { lat: 32.3667, lng: 77.2833 },
    difficulty: "Easy",
    durationDays: 3,
    distanceKm: 20,
    elevationGainM: 1400,
    maxAltitudeM: 4300,
    pricePerPersonUSD: 55,
    rating: 4.5,
    reviews: 267,
    image: img("photo-1519681393784-d120267933ba"),
    tags: ["Weekend trek", "Alpine lake", "Near Manali"],
    summary:
      "A short, high-reward weekend trek from Manali to a glacial lake ringed by wildflower meadows and snow peaks.",
    highlights: [
      "High-altitude alpine lake",
      "Easy access from Manali (short drive)",
      "Great acclimatization trek before bigger climbs"
    ],
    bestSeason: "May – Jun, Sep – Oct",
    nearestStayIds: ["gulaba-alpine-hostel"],
    routeId: "manali-chandratal"
  }
];

export function getTrekBySlug(slug: string): Trek | undefined {
  return treks.find((t) => t.slug === slug);
}

export function getStaysForTrek(trekSlug: string): Stay[] {
  return stays.filter((s) => s.nearTrekSlug === trekSlug);
}

export function getRouteById(routeId: string): ScenicRoute | undefined {
  return routes.find((r) => r.id === routeId);
}

export function getStayById(id: string): Stay | undefined {
  return stays.find((s) => s.id === id);
}
