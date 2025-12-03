"use client";
import TourCard from "@/components/TourCard";

const tourSections = [
  {
    id: "mountain-escapes",
    title: "Mountain Escapes",
    description:
      "Journey through dramatic peaks, hidden valleys, and alpine adventures.",
    tours: [
      {
        id: "halgurd",
        title: "Halgurd Summit Trek",
        description:
          "Conquer the peaks and witness breathtaking panoramic views.",
        duration: "10 hours",
        image: "/images/halgurd.png",
      },
      {
        id: "darbandikhan",
        title: "Darbandikhan Lake",
        description: "Alpine lake surrounded by pristine mountain beauty.",
        duration: "8 hours",
        image: "/images/halgurdImg/1.png",
      },
      {
        id: "rawandiz",
        title: "Rawandiz Gorge Hike",
        description:
          "Explore dramatic canyons and ancient geological formations.",
        duration: "7 hours",
        image: "/images/zorgosMountain.png",
      },
    ],
  },
  {
    id: "city-experiences",
    title: "City Experiences",
    description:
      "Immerse yourself in vibrant Kurdish culture, history, and cuisine.",
    tours: [
      {
        id: "erbil-citadel",
        title: "Erbil Citadel & Bazaar",
        description:
          "UNESCO heritage site with ancient architecture and local markets.",
        duration: "6 hours",
        image: "/images/kurdistantour.png",
      },
      {
        id: "sulaymaniyah-culture",
        title: "Sulaymaniyah Cultural Tour",
        description:
          "Art galleries, museums, and the heart of Kurdish culture.",
        duration: "5 hours",
        image: "/images/kurdistanImg/1.png",
      },
      {
        id: "kirkuk-history",
        title: "Kirkuk Historical Sites",
        description:
          "Ancient Mesopotamian heritage and multi-cultural neighborhoods.",
        duration: "7 hours",
        image: "/images/kurdistanImg/10.png",
      },
    ],
  },
  {
    id: "activities",
    title: "Day Activities",
    description: "Adventure and outdoor pursuits for every interest and level.",
    tours: [
      {
        id: "rock-climbing",
        title: "Rock Climbing Adventure",
        description:
          "Guided rock climbing on pristine Kurdish rock formations.",
        duration: "6 hours",
        image: "/images/mountain_bike.png",
      },
      {
        id: "jeep-safari",
        title: "Desert Jeep Safari",
        description: "Off-road adventure through rugged landscapes.",
        duration: "8 hours",
        image: "/images/skiing.png",
      },
      {
        id: "photography",
        title: "Photography Expedition",
        description:
          "Capture stunning landscapes with expert photography guides.",
        duration: "9 hours",
        image: "/images/halgurdImg/5.png",
      },
    ],
  },
  {
    id: "ideas",
    title: "Trip Ideas & Packages",
    description:
      "Curated multi-day journeys and specialized travel experiences.",
    tours: [
      {
        id: "week-long",
        title: "7-Day Grand Tour",
        description:
          "Complete Kurdistan experience combining mountains, cities, and culture.",
        duration: "7 days",
        image: "/images/Iraqtour.png",
      },
      {
        id: "adventure-week",
        title: "Adventure Week",
        description:
          "Intensive outdoor activities: climbing, trekking, and water sports.",
        duration: "6 days",
        image: "/images/halgurdImg/10.png",
      },
      {
        id: "cultural-immersion",
        title: "Cultural Immersion",
        description:
          "Deep dive into Kurdish heritage, cuisine, and local communities.",
        duration: "5 days",
        image: "/images/kurdistanImg/20.png",
      },
    ],
  },
];

export default function ToursPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-linear-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white">
            Explore Kurdistan
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Curated tours and experiences across mountains, cities, and cultural
            heartlands.
          </p>
        </div>
      </section>

      {/* Tour Sections */}
      {tourSections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="py-20 md:py-32 bg-alternating"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 space-y-4">
              <p className="text-accent font-semibold text-sm tracking-wider">
                EXPERIENCES
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                {section.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                {section.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {section.tours.map((tour) => (
                <TourCard
                  key={tour.id}
                  id={tour.id}
                  title={tour.title}
                  description={tour.description}
                  duration={tour.duration}
                  image={tour.image}
                  link={`/tours#${section.id}`}
                />
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
