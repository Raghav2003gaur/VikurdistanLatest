"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutTeaser() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full rounded-2xl overflow-hidden group">
            <img
              src="/images/aboutVIKurdistan.png"
              alt="Kurdistan cultural heritage"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-accent font-semibold text-sm tracking-wider mb-2">
                DISCOVER THE REGION
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                About Kurdistan
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Kurdistan is a land of stunning contrasts—from snow-capped
              mountains and lush valleys to vibrant cities steeped in history
              and culture. Home to ancient civilizations, breathtaking natural
              landscapes, and warm hospitality, Kurdistan offers experiences
              unlike anywhere else in the world.
            </p>

            <ul className="space-y-3">
              {[
                "Ancient historical sites and ruins",
                "World-class mountain adventures",
                "Authentic Kurdish cuisine and culture",
                "Welcoming local communities",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about-kurdistan"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
            >
              Learn More <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
