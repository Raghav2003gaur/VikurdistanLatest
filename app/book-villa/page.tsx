"use client";

import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Real villas adapted from travel_startup (Yellow, Red, Blue)
const villas = [
  {
    id: "yellow-villa",
    title: "Yellow Villa",
    location: "Choman Road, Kurdistan",
    price: "$150/night",
    description:
      "A cozy, sunlit villa perfect for families and small groups, close to valleys and village life.",
    features: [
      "3 Bedrooms",
      "Valley Views",
      "Fireplace",
      "Outdoor Terrace",
      "Wi‑Fi",
    ],
    image: "/villa-valley-landscape-peaceful-nature.jpg",
    rating: 4.9,
    reviews: 120,
  },
  {
    id: "red-villa",
    title: "Red Villa",
    location: "Choman Road, Kurdistan",
    price: "$250/night",
    description:
      "Spacious hilltop villa with bold interiors, large living areas, and panoramic mountain scenery.",
    features: [
      "4 Bedrooms",
      "Mountain Views",
      "Private Parking",
      "Large Kitchen",
      "Outdoor Seating",
    ],
    image: "/luxury-villa-mountain-view-modern-architecture.jpg",
    rating: 4.8,
    reviews: 95,
  },
  {
    id: "blue-villa",
    title: "Blue Villa",
    location: "Choman Road, Kurdistan",
    price: "$200/night",
    description:
      "Modern villa with cool tones, generous windows, and a relaxing garden environment.",
    features: ["3 Bedrooms", "Garden", "Modern Design", "Workspace", "Wi‑Fi"],
    image: "/villa-gardens-luxury-residence-oasis.jpg",
    rating: 4.7,
    reviews: 88,
  },
];

export default function BookVillaPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-linear-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white">
            Luxury Villas
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Handpicked luxury accommodations with stunning views and world-class
            amenities.
          </p>
        </div>
      </section>

      {/* Villas Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {villas.map((villa) => (
              <div
                key={villa.id}
                className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={villa.image || "/placeholder.svg"}
                    alt={villa.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold">
                    {villa.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  {/* Header */}
                  <div>
                    <div className="flex items-center gap-2 text-accent text-sm font-semibold mb-2">
                      <MapPin size={16} />
                      {villa.location}
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-foreground mb-2">
                      {villa.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-lg ${
                              i < Math.floor(villa.rating)
                                ? "text-accent"
                                : "text-muted"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {villa.rating} ({villa.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground leading-relaxed">
                    {villa.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3">
                    {villa.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <span className="text-accent">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  >
                    <Link href={`/book-villa/${villa.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
