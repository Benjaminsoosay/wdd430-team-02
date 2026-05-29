"use client";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-haven-primary text-haven-background mt-12 sm:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold font-heading mb-2">Handcrafted Haven</h3>
            <p className="text-sm opacity-90">Celebrating artisan craftsmanship and unique creations.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-haven-secondary transition-colors">Shop Products</Link></li>
              <li><Link href="/sellers" className="hover:text-haven-secondary transition-colors">Our Artisans</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-3">About</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-haven-secondary transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-haven-secondary transition-colors">Mission</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-haven-secondary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-haven-secondary transition-colors">Newsletter</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-haven-secondary opacity-30 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; {currentYear} Handcrafted Haven. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-haven-secondary transition-colors">Privacy</a>
              <a href="#" className="hover:text-haven-secondary transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
