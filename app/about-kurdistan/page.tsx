export default function AboutKurdistanPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-linear-to-b from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold">
            About Kurdistan
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            A land of ancient civilizations, stunning mountains, and vibrant
            culture.
          </p>
        </div>
      </section>

      {/* Geography */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/images/RegionOfIraq.png"
            alt="Kurdistan geography map"
            className="rounded-2xl object-cover"
          />
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-bold text-foreground">
              Geography & Landscape
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kurdistan spans across northern Iraq, Syria, Turkey, and Iran,
              covering a diverse landscape of towering mountains, deep valleys,
              and fertile plains. The region is home to some of the world's
              highest peaks and most pristine natural environments.
            </p>
            <ul className="space-y-3">
              {[
                "Snow-capped mountain ranges",
                "Alpine lakes and waterfalls",
                "Ancient river valleys",
                "Diverse ecosystems",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="text-accent">✓</span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:order-2">
            <h2 className="text-4xl font-serif font-bold text-foreground">
              Rich Culture & Heritage
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Kurdish people have a distinct culture, language, and
              traditions spanning millennia. From traditional crafts and
              textiles to world-renowned cuisine, Kurdistan offers a deep
              cultural experience unlike any other destination.
            </p>
            <ul className="space-y-3">
              {[
                "Ancient languages and traditions",
                "Authentic Kurdish cuisine",
                "Traditional handicrafts",
                "Warm hospitality",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="text-accent">✓</span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <img
            src="/images/kurdishClothes1.png"
            alt="Kurdish culture and traditional clothes"
            className="rounded-2xl md:order-1 object-cover"
          />
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-serif font-bold text-foreground">
              Best Time to Visit
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kurdistan offers different experiences throughout the year. Here's
              when to visit for the best experience.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                season: "Spring",
                months: "Apr-May",
                desc: "Flowers bloom, mild weather, perfect hiking",
              },
              {
                season: "Summer",
                months: "Jun-Aug",
                desc: "Warm days, cool mountain nights, ideal for activities",
              },
              {
                season: "Autumn",
                months: "Sep-Oct",
                desc: "Golden landscapes, comfortable temperatures, harvest season",
              },
              {
                season: "Winter",
                months: "Nov-Mar",
                desc: "Snow sports, fewer crowds, unique mountain vistas",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-card rounded-xl p-6 text-center space-y-3"
              >
                <h4 className="text-2xl font-serif font-bold text-accent">
                  {item.season}
                </h4>
                <p className="text-sm font-semibold text-muted-foreground">
                  {item.months}
                </p>
                <p className="text-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Attractions */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-serif font-bold text-foreground">
              Must-See Attractions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Erbil Citadel",
                desc: "UNESCO World Heritage site with 5,500 years of history.",
                image: "/images/kurdistantour.png",
              },
              {
                title: "Halgurd Mountain",
                desc: "Dramatic peaks offering stunning panoramic views.",
                image: "/images/halgurd.png",
              },
              {
                title: "Darbandikhan Lake",
                desc: "Pristine alpine lake surrounded by mountains.",
                image: "/images/halgurdImg/15.png",
              },
              {
                title: "Rawandiz Gorge",
                desc: "Dramatic canyon with ancient geological formations.",
                image: "/images/zorgosMountain.png",
              },
            ].map((attr, idx) => (
              <div
                key={idx}
                className="bg-background rounded-xl overflow-hidden"
              >
                <img
                  src={attr.image}
                  alt={attr.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8 space-y-3">
                  <h4 className="text-2xl font-serif font-bold text-foreground">
                    {attr.title}
                  </h4>
                  <p className="text-muted-foreground">{attr.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
