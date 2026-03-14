"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-glass-dark py-3 shadow-xl shadow-black/40"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: "var(--green-neon)" }}
          >
            <span
              className="font-display text-xl text-navy-950"
              style={{ color: "#060d1a" }}
            >
              PRO
            </span>
          </div>
          <span
            className="font-display text-2xl tracking-widest"
            style={{ letterSpacing: "0.2em" }}
          >
            CRICK
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="/#how-it-works"
            className="text-white/70 hover:text-white text-sm font-medium transition-colors"
          >
            How It Works
          </a>
          <a
            href="/#features"
            className="text-white/70 hover:text-white text-sm font-medium transition-colors"
          >
            Features
          </a>
          <a
            href="/#prizes"
            className="text-white/70 hover:text-white text-sm font-medium transition-colors"
          >
            Prizes
          </a>
          <Link
            href="/rules"
            className="text-white/70 hover:text-white text-sm font-medium transition-colors"
          >
            Rules
          </Link>
          <a
            href="/#download"
            className="text-white/70 hover:text-white text-sm font-medium transition-colors"
          >
            Download App
          </a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="https://app.procrick.com"
            target="_blank"
            className="text-white/70 hover:text-white text-sm font-medium transition-colors px-4 py-2"
          >
            Sign In
          </Link>
          <Link
            href="https://app.procrick.com"
            target="_blank"
            className="btn-primary !py-2.5 !px-6 !text-lg"
          >
            Play Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-white/80 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-glass-dark mt-2 mx-4 rounded-2xl p-6 flex flex-col gap-4">
          <a
            href="/#how-it-works"
            className="text-white/80 hover:text-white py-2 border-b border-white/5"
            onClick={() => setMenuOpen(false)}
          >
            How It Works
          </a>
          <a
            href="/#features"
            className="text-white/80 hover:text-white py-2 border-b border-white/5"
            onClick={() => setMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="/#prizes"
            className="text-white/80 hover:text-white py-2 border-b border-white/5"
            onClick={() => setMenuOpen(false)}
          >
            Prizes
          </a>
          <Link
            href="/rules"
            className="text-white/80 hover:text-white py-2 border-b border-white/5"
            onClick={() => setMenuOpen(false)}
          >
            Rules
          </Link>
          <a
            href="/#download"
            className="text-white/80 hover:text-white py-2"
            onClick={() => setMenuOpen(false)}
          >
            Download App
          </a>
          <Link
            href="https://app.procrick.com"
            target="_blank"
            className="btn-primary justify-center mt-2"
          >
            Play Now – It's Free
          </Link>
        </div>
      )}
    </nav>
  );
}
