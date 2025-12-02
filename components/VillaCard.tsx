"use client";

import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface VillaCardProps {
  id: string;
  title: string;
  location: string;
  description: string;
  price: string;
  image: string;
}

export default function VillaCard({
  id,
  title,
  location,
  description,
  price,
  image,
}: VillaCardProps) {
  return (
    <div className="rounded-2xl overflow-hidden bg-card shadow-sm hover:shadow-lg transition-shadow group">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <div className="flex items-center gap-2 text-accent text-sm font-semibold mb-2">
            <MapPin size={16} />
            {location}
          </div>
          <h3 className="text-xl font-serif font-bold text-foreground">
            {title}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="text-2xl font-serif font-bold text-accent">
            {price}
          </span>
          <Button
            asChild
            size="sm"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link href={`/book-villa/${id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
