"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TourCard from "@/components/TourCard";

// Pulled from original travel_startup tourExperiences content
const tours = [
  {
    id: "halgurd-expedition",
    title: "Halgurd Mountain Expedition",
    description:
      "Snow-capped peaks, alpine lakes, and guided climbs across Iraq's highest mountain.",
    duration: "3 days",
    image: "/images/halgurd.png",
    link: "/tours#mountain-escapes",
  },
  {
    id: "kurdistan-heritage",
    title: "Kurdistan Culture & Heritage",
    description:
      "Ancient citadels, monasteries, and heritage sites combined with bustling bazaars and local cuisine.",
    duration: "4 days",
    image: "/images/kurdistantour.png",
    link: "/tours#city-experiences",
  },
  {
    id: "zagros-trail",
    title: "Zagros Mountain Trail",
    description:
      "Multi-day trek across the Zagros range with waterfalls, remote villages, and panoramic viewpoints.",
    duration: "7 days",
    image: "/images/zorgosMountain.png",
    link: "/tours#mountain-escapes",
  },
];

export default function FeaturedTours() {
  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 space-y-4">
          <p className="text-accent font-semibold text-sm tracking-wider">
            CURATED EXPERIENCES
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Featured Tours
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Handpicked experiences that showcase the best of Kurdistan's natural
            beauty and cultural richness.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <TourCard key={tour.id} {...tour} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-lg font-semibold text-accent hover:gap-3 transition-all"
          >
            View All Tours <ArrowRight size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
}
