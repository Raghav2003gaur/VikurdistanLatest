"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

interface MobileNavbarProps {
  onClose: () => void
}

export default function MobileNavbar({ onClose }: MobileNavbarProps) {
  const links = [
    { label: "Home", href: "/" },
    { label: "About Kurdistan", href: "/about-kurdistan" },
    { label: "Book a Villa", href: "/book-villa" },
    { label: "Tours", href: "/tours" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={onClose}>
      <div
        className="fixed right-0 top-20 h-screen w-64 bg-secondary text-secondary-foreground p-6 space-y-6 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <nav className="space-y-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-lg font-medium hover:text-accent transition-colors py-2"
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base">
          <Link href="/book-villa" onClick={onClose}>
            Book Now
          </Link>
        </Button>
      </div>
    </div>
  )
}
