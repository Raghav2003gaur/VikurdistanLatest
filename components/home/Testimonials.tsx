"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    role: "Traveler",
    text: "The service exceeded my expectations. The team was professional, and I couldn't be happier with the results. Highly recommended to everyone!",
    rating: 5,
    avatar: "/images/u1.jpg",
  },
  {
    name: "Jane Smith",
    role: "Traveler",
    text: "I am thoroughly impressed with the attention to detail and quality. They truly understand customer needs and deliver outstanding results.",
    rating: 5,
    avatar: "/images/u2.jpg",
  },
  {
    name: "Michael Brown",
    role: "Traveler",
    text: "Exceptional quality and fantastic customer service! The project was delivered on time and exactly as I wanted.",
    rating: 5,
    avatar: "/images/u3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 space-y-4 text-center">
          <p className="text-accent font-semibold text-sm tracking-wider">
            GUEST STORIES
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            What Our Guests Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
