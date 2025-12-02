"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src="/images/hero1.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          Discover the <span className="text-accent">Heart of Kurdistan</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Luxury villas, curated tours, and unforgettable journeys through
          mountains, cities, and ancient cultures.
        </p>

        <div className="flex gap-4 justify-center flex-col sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base"
          >
            <Link href="/book-villa" className="flex items-center gap-2">
              Book a Villa
              <ArrowRight size={20} />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 font-semibold text-base bg-transparent"
          >
            <Link href="/tours">Explore Tours</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}
