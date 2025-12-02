"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 90);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/95 shadow-md backdrop-blur-sm" : "bg-black/90"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="/images/logo.png"
                alt="VIK Kurdistan Logo"
                className="h-8 w-auto md:h-9"
              />
              <span className="text-lg md:text-xl font-serif font-bold text-white tracking-wide">
                VIK Kurdistan
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center flex-1 justify-center">
              <NavigationMenu viewport={false}>
                <NavigationMenuList className="gap-1 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10 backdrop-blur">
                  {/* Home mega menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 data-[state=open]:bg-white/10 data-[state=open]:text-white">
                      Home
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="mt-2 bg-white text-foreground border border-border rounded-2xl shadow-2xl z-60">
                      <div className="w-[560px] p-6 grid grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                            Welcome to VIK Kurdistan
                          </p>
                          <h3 className="font-serif text-2xl font-bold text-foreground">
                            Discover the Heart of Kurdistan
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Luxury villas, curated tours, and unforgettable
                            journeys across the mountains, valleys, and cities
                            of Kurdistan.
                          </p>
                        </div>
                        <div className="space-y-2 text-sm">
                          <Link
                            href="/about-kurdistan"
                            className="block rounded-lg px-3 py-2 hover:bg-muted/40 transition-colors"
                          >
                            <p className="font-semibold text-foreground">
                              About Kurdistan
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Learn about the region, its people, and its
                              landscapes.
                            </p>
                          </Link>
                          <Link
                            href="/book-villa"
                            className="block rounded-lg px-3 py-2 hover:bg-muted/40 transition-colors"
                          >
                            <p className="font-semibold text-foreground">
                              Book a Villa
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Handpicked villas in Choman and across the region.
                            </p>
                          </Link>
                          <Link
                            href="/tours"
                            className="block rounded-lg px-3 py-2 hover:bg-muted/40 transition-colors"
                          >
                            <p className="font-semibold text-foreground">
                              All Tours
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Explore trekking, culture, and adventure
                              itineraries.
                            </p>
                          </Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Experiences dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 data-[state=open]:bg-white/10 data-[state=open]:text-white">
                      Experiences
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="mt-2 bg-white text-foreground border border-border rounded-2xl shadow-2xl z-60">
                      <div className="w-[640px] p-6 grid grid-cols-2 gap-6">
                        <Link
                          href="/tours#mountain-escapes"
                          className="space-y-2 hover:bg-muted/40 rounded-lg p-3 transition-colors"
                        >
                          <h4 className="font-semibold text-foreground">
                            Mountain Escapes
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Halgurd, Zagros trails, alpine lakes, and
                            high‑altitude adventures.
                          </p>
                        </Link>
                        <Link
                          href="/tours#city-experiences"
                          className="space-y-2 hover:bg-muted/40 rounded-lg p-3 transition-colors"
                        >
                          <h4 className="font-semibold text-foreground">
                            City Experiences
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Erbil citadel, bazaars, galleries, and cultural
                            neighborhoods.
                          </p>
                        </Link>
                        <Link
                          href="/book-villa"
                          className="space-y-2 hover:bg-muted/40 rounded-lg p-3 transition-colors"
                        >
                          <h4 className="font-semibold text-foreground">
                            Villas & Stays
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Yellow, Red, and Blue villas along the Choman road.
                          </p>
                        </Link>
                        <Link
                          href="/tours#activities"
                          className="space-y-2 hover:bg-muted/40 rounded-lg p-3 transition-colors"
                        >
                          <h4 className="font-semibold text-foreground">
                            Day Activities
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Ski rally, mountain biking, and guided day trips.
                          </p>
                        </Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Simple links matching site sections */}
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={`${navigationMenuTriggerStyle()} bg-transparent text-sm font-medium text-white/80 hover:text-white hover:bg-white/10`}
                    >
                      <Link href="/about-kurdistan">About Kurdistan</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={`${navigationMenuTriggerStyle()} bg-transparent text-sm font-medium text-white/80 hover:text-white hover:bg-white/10`}
                    >
                      <Link href="/book-villa">Book a Villa</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={`${navigationMenuTriggerStyle()} bg-transparent text-sm font-medium text-white/80 hover:text-white hover:bg-white/10`}
                    >
                      <Link href="/tours">Tours</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={`${navigationMenuTriggerStyle()} bg-transparent text-sm font-medium text-white/80 hover:text-white hover:bg-white/10`}
                    >
                      <Link href="/about-us">About Us</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={`${navigationMenuTriggerStyle()} bg-transparent text-sm font-medium text-white/80 hover:text-white hover:bg-white/10`}
                    >
                      <Link href="/contact">Contact</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right: Book Now + Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                asChild
                className="hidden lg:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                <Link href="/book-villa">Book Now</Link>
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden text-white hover:text-accent transition-colors"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
              >
                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileOpen && <MobileNavbar onClose={() => setIsMobileOpen(false)} />}

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
}
