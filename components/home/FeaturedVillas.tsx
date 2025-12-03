"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import VillaCard from "@/components/VillaCard";

// Based on Yellow, Red, and Blue villas from the original travel_startup project
const villas = [
  {
    id: "yellow-villa",
    title: "Yellow Villa",
    location: "Choman Road, Kurdistan",
    description:
      "Warm, sunlit villa ideal for families, close to valleys and village life.",
    price: "$150/night",
    image: "/images/yellowvillaCard.png",
  },
  {
    id: "red-villa",
    title: "Red Villa",
    location: "Choman Road, Kurdistan",
    description:
      "Spacious hilltop stay with bold interiors and sweeping mountain views.",
    price: "$250/night",
    image: "/images/redVillaCard.png",
  },
  {
    id: "blue-villa",
    title: "Blue Villa",
    location: "Choman Road, Kurdistan",
    description:
      "Modern villa with cool tones, large terrace, and a relaxing atmosphere.",
    price: "$200/night",
    image: "/images/blueVillaCard.png",
  },
];

export default function FeaturedVillas() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 space-y-4">
          <p className="text-accent font-semibold text-sm tracking-wider">
            LUXURY ACCOMMODATIONS
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Featured Villas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Handpicked luxury villas offering comfort, elegance, and
            unforgettable experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {villas.map((villa) => (
            <VillaCard key={villa.id} {...villa} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/book-villa"
            className="inline-flex items-center gap-2 text-lg font-semibold text-accent hover:gap-3 transition-all"
          >
            View All Villas <ArrowRight size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
}
