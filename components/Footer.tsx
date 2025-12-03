import Link from "next/link";
import { Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/images/logo.png"
                alt="VIK Kurdistan Logo"
                className="h-8 w-auto"
              />
              <h3 className="text-xl font-serif font-bold">VIK Kurdistan</h3>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Luxury travel experiences across Kurdistan's mountains, cities,
              and cultural heartlands.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/tours"
                  className="hover:text-accent transition-colors"
                >
                  Tours
                </Link>
              </li>
              <li>
                <Link
                  href="/book-villa"
                  className="hover:text-accent transition-colors"
                >
                  Villas
                </Link>
              </li>
              <li>
                <Link
                  href="/about-kurdistan"
                  className="hover:text-accent transition-colors"
                >
                  About Kurdistan
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:info@vik-kurdistan.com"
                  className="hover:text-accent transition-colors"
                >
                  info@vik-kurdistan.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a
                  href="tel:+9647701234567"
                  className="hover:text-accent transition-colors"
                >
                  +964 (770) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-sm text-secondary-foreground/80">
              © 2025 VIK Kurdistan. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
