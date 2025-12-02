"use client"

import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"

interface TourCardProps {
  id: string
  title: string
  description: string
  duration: string
  image: string
  link: string
}

export default function TourCard({ id, title, description, duration, image, link }: TourCardProps) {
  return (
    <Link href={link}>
      <div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer">
        {/* Background Image */}
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Clock size={16} />
              {duration}
            </div>

            <h3 className="text-2xl font-serif font-bold">{title}</h3>

            <p className="text-sm text-gray-200 group-hover:line-clamp-none line-clamp-2 transition-all">
              {description}
            </p>

            <div className="flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pt-2">
              Explore <ArrowRight size={18} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
