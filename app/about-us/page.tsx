export default function AboutUsPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold">Our Story</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Connecting travelers with the authentic beauty and culture of Kurdistan.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-bold text-foreground">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At VIK Kurdistan, we believe travel should be transformative. We craft curated experiences that go beyond
              typical tourism, connecting you with the authentic soul of Kurdistan—its people, culture, landscapes, and
              history.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-bold text-foreground">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Authenticity",
                  desc: "Real experiences with local communities and genuine cultural immersion.",
                },
                {
                  title: "Sustainability",
                  desc: "Responsible tourism that respects and preserves Kurdistan's heritage.",
                },
                { title: "Excellence", desc: "World-class service and attention to every detail of your journey." },
                { title: "Innovation", desc: "Fresh perspectives on travel that create unforgettable memories." },
              ].map((val, idx) => (
                <div key={idx} className="bg-card rounded-xl p-6 space-y-3">
                  <h4 className="text-2xl font-serif font-bold text-accent">{val.title}</h4>
                  <p className="text-muted-foreground">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-serif font-bold text-foreground">Our Team</h2>
            <p className="text-lg text-muted-foreground">
              Passionate experts dedicated to creating extraordinary experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Aziz Hassan", role: "Founder & CEO", bio: "Travel entrepreneur with 20+ years of experience." },
              { name: "Layla Mustafa", role: "Head of Operations", bio: "Expert in logistics and guest satisfaction." },
              { name: "Karim Rashid", role: "Cultural Director", bio: "Specialist in authentic cultural experiences." },
            ].map((member, idx) => (
              <div key={idx} className="bg-background rounded-xl overflow-hidden text-center space-y-4">
                <img
                  src={`/placeholder.svg?height=300&width=300&query=professional-portrait-${idx}`}
                  alt={member.name}
                  className="w-full h-56 object-cover"
                />
                <div className="px-6 pb-6 space-y-2">
                  <h4 className="text-xl font-serif font-bold text-foreground">{member.name}</h4>
                  <p className="text-accent font-semibold text-sm">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
