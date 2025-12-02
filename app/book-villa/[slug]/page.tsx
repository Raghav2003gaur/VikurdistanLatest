import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const yellowVilla = {
  id: "yellow-villa",
  title: "Yellow Villa",
  location: "Iraq, Kurdistan, Choman, Nawroen Resort",
  heroImage: "/images/yellowvillaCard.png",
  weekendPrice: "$150",
  weekdayPrice: "$100",
  intro:
    "A cozy mountain escape in the heart of Kurdistan, designed for comfort, relaxation, and unforgettable memories.",
  detailsLeft: [
    "Floors: 1 Floor",
    "Heating & Cooling: Fireplace, cooler, and oil heater",
    "Bedrooms: 2 (4×4 m) bedrooms with extra blankets and mattresses",
    "Kitchen: Counter, refrigerator, stove, and eating table",
  ],
  detailsRight: [
    "Outdoor: Swimming pool, garden, and barbecue grill",
    "Bathroom: One indoor bathroom with hot water, laundry, shampoo, soap, towels, and tissues",
    "Electricity: 24/7 electricity",
    "Guests: 5 – 8 persons",
  ],
  gallery: [
    "/images/yellowVillaImg/1.png",
    "/images/yellowVillaImg/2.png",
    "/images/yellowVillaImg/3.png",
    "/images/yellowVillaImg/4.png",
    "/images/yellowVillaImg/5.png",
    "/images/yellowVillaImg/6.png",
    "/images/yellowVillaImg/7.png",
    "/images/yellowVillaImg/8.png",
    "/images/yellowVillaImg/9.png",
    "/images/yellowVillaImg/10.png",
  ],
};

const redVilla = {
  id: "red-villa",
  title: "Red Villa",
  location: "Iraq, Kurdistan, Choman, Nawroen Resort",
  heroImage: "/images/redVillaCard.png",
  weekendPrice: "$250",
  weekdayPrice: "$200",
  intro:
    "A spacious villa with panoramic views, modern comforts, and plenty of room for large groups to relax and enjoy nature.",
  detailsLeft: [
    "Floors: 2 Floors + balcony",
    "Heating & Cooling: Second floor fireplace, AC and oil heater on both floors",
    "Bedrooms: 1 (4×4 m) bedroom with extra blankets and mattresses",
    "Living Room: First floor 1 (4×8 m) living room",
  ],
  detailsRight: [
    "Panoramic Room: Second floor 1 (8×8 m) panoramic room with 360° view of nature",
    "Kitchen: Kitchen with counter, refrigerator, stove, and eating table",
    "Outdoor: Second floor outdoor swimming pool with sun lounger and BBQ grill",
    "Guests: Suitable for 35+ persons",
  ],
  gallery: [
    "/images/redVillaImg/1.png",
    "/images/redVillaImg/2.png",
    "/images/redVillaImg/3.png",
    "/images/redVillaImg/4.png",
    "/images/redVillaImg/5.png",
    "/images/redVillaImg/6.png",
    "/images/redVillaImg/7.png",
    "/images/redVillaImg/8.png",
    "/images/redVillaImg/9.png",
    "/images/redVillaImg/10.png",
    "/images/redVillaImg/11.png",
    "/images/redVillaImg/12.png",
    "/images/redVillaImg/13.png",
    "/images/redVillaImg/14.png",
  ],
};

const blueVilla = {
  id: "blue-villa",
  title: "Blue Villa",
  location: "Iraq, Kurdistan, Choman, Nawroen Resort",
  heroImage: "/images/blueVillaCard.png",
  weekendPrice: "$200",
  weekdayPrice: "$150",
  intro:
    "A modern villa with indoor pool, generous living spaces, and all the comforts needed for a relaxing stay with friends and family.",
  detailsLeft: [
    "Floors: 2 Floors + balcony",
    "Heating & Cooling: Fireplace, AC, and oil heater",
    "Bedrooms: 1 (4×3 m) bedroom with extra blankets and mattresses",
    "Living Spaces: 1 (5×4 m) hall on the first floor extended to the kitchen",
  ],
  detailsRight: [
    "Second Floor Hall: 1 (5×4 m) hall on the second floor",
    "Kitchen: Kitchen with counter, refrigerator, stove, and eating table",
    "Outdoor: Indoor swimming pool, garden, and barbecue grill",
    "Guests: Ideal for 10 – 12 persons",
  ],
  gallery: [
    "/images/blueVillaImg/1.png",
    "/images/blueVillaImg/2.png",
    "/images/blueVillaImg/3.png",
    "/images/blueVillaImg/4.png",
    "/images/blueVillaImg/5.png",
    "/images/blueVillaImg/6.png",
    "/images/blueVillaImg/7.png",
    "/images/blueVillaImg/8.png",
    "/images/blueVillaImg/9.png",
    "/images/blueVillaImg/10.png",
    "/images/blueVillaImg/11.png",
    "/images/blueVillaImg/12.png",
  ],
};

const villas = {
  "yellow-villa": yellowVilla,
  "red-villa": redVilla,
  "blue-villa": blueVilla,
};

type PageProps = {
  params: { slug: string };
};

export default function VillaDetailPage({ params }: PageProps) {
  const villa = villas[params.slug as keyof typeof villas];

  if (!villa) {
    return notFound();
  }

  return (
    <main className="pt-24 pb-20 bg-background">
      <section className="relative py-10 md:py-16 bg-linear-to-b from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1.6fr_1fr] gap-10 items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-300">
              Choman Road
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold">
              {villa.title}
            </h1>
            <p className="text-base md:text-lg text-gray-200 max-w-2xl">
              {villa.intro}
            </p>
          </div>
          <div className="bg-background/10 border border-white/15 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2 text-sm text-gray-200">
              <MapPin size={16} />
              <span>{villa.location}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div>
                <p className="text-gray-300">Weekend</p>
                <p className="text-2xl font-serif font-bold text-accent">
                  {villa.weekendPrice}
                </p>
              </div>
              <div>
                <p className="text-gray-300">Other days</p>
                <p className="text-2xl font-serif font-bold text-accent">
                  {villa.weekdayPrice}
                </p>
              </div>
            </div>
            <Button
              asChild
              className="w-full mt-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              <Link href={`/contact?villa=${villa.id}`}>
                Check Availability
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Details & Gallery */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="grid lg:grid-cols-[1.4fr_1.2fr] gap-10">
            {/* Details */}
            <div className="bg-card rounded-2xl shadow-sm border border-border p-6 md:p-8">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                Villa Details
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-sm md:text-base text-muted-foreground">
                <ul className="space-y-3">
                  {villa.detailsLeft.map((item) => (
                    <li key={item}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-3">
                  {villa.detailsRight.map((item) => (
                    <li key={item}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 p-5 rounded-xl bg-muted/60 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Check-in &amp; Check-out
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Check-in at <span className="font-semibold">03:00 PM</span>{" "}
                  and check-out at{" "}
                  <span className="font-semibold">02:00 PM</span> the day after.
                  For more information, please contact customer service.
                </p>
              </div>
            </div>

            {/* Hero image & mini gallery snippet */}
            <div className="space-y-6">
              <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={villa.heroImage}
                  alt={villa.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Gallery
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {villa.gallery.map((src) => (
                    <div
                      key={src}
                      className="relative h-24 md:h-32 lg:h-36 rounded-lg overflow-hidden border border-border"
                    >
                      <Image
                        src={src}
                        alt={`${villa.title} image`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
