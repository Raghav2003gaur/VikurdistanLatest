"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    travelDates: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for reaching out! We will contact you soon.")
    setFormData({ name: "", email: "", message: "", travelDates: "" })
  }

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold">Get in Touch</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Have questions? Let's plan your perfect Kurdish adventure together.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-foreground">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-accent focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-accent focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Travel Dates</label>
                <input
                  type="text"
                  name="travelDates"
                  value={formData.travelDates}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-accent focus:outline-none transition-colors"
                  placeholder="When are you planning to visit?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your ideal trip..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base py-3"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-serif font-bold text-foreground">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Mail className="text-accent flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-foreground mb-1">Email</p>
                  <a
                    href="mailto:info@vik-kurdistan.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    info@vik-kurdistan.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-accent flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-foreground mb-1">Phone</p>
                  <a href="tel:+9647701234567" className="text-muted-foreground hover:text-accent transition-colors">
                    +964 (770) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-accent flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-foreground mb-1">Office</p>
                  <p className="text-muted-foreground">Erbil, Kurdistan Region, Iraq</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-muted rounded-xl p-6 space-y-3">
              <h4 className="font-semibold text-foreground">Business Hours</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 10:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
