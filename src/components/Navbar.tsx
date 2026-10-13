"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { SITE_DATA } from "@/lib/site-data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Our Story", href: "/story" },
    { label: "Find Us", href: "/find-us" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF6ED]/95 backdrop-blur-md border-b border-[#38332D]/10 shadow-[0_4px_20px_-4px_rgba(56,51,45,0.06)]"
          : "bg-[#FAF6ED] border-b border-[#38332D]/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#526B4D] rounded-lg p-1 transition-transform"
            aria-label="Rupali's Kitchen - Home"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 bg-[#EAE0D0]/50 rounded-xl p-1 border border-[#38332D]/10 group-hover:border-[#526B4D]/30 transition-colors">
              <Image
                src={SITE_DATA.assets.logoMark}
                alt="Rupali's Kitchen Logo"
                fill
                sizes="48px"
                className="object-contain p-0.5 group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#526B4D] group-hover:text-[#3F533B] transition-colors leading-tight">
                Rupali&apos;s Kitchen
              </span>
              <span className="font-sans text-[11px] sm:text-xs tracking-wider text-[#38332D]/70 font-medium -mt-0.5">
                A little taste of home
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main Navigation"
          >
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-sm font-medium text-[#38332D]/80 hover:text-[#526B4D] transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#526B4D] rounded"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-[#526B4D] hover:bg-[#3F533B] text-[#FAF6ED] px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#526B4D]"
            >
              <span>Explore Menu</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#38332D] hover:text-[#526B4D] hover:bg-[#EAE0D0]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#526B4D] transition-colors"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close main menu" : "Open main menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        id="mobile-navigation"
        className={`md:hidden fixed inset-x-0 top-20 bg-[#FAF6ED] border-b border-[#38332D]/10 shadow-xl transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 pt-4 pb-8 space-y-4">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-serif text-lg font-medium text-[#38332D] hover:text-[#526B4D] py-2 border-b border-[#38332D]/5 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="pt-2">
            <Link
              href="/menu"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#526B4D] hover:bg-[#3F533B] text-[#FAF6ED] py-3.5 px-6 rounded-xl font-medium text-base shadow-sm transition-colors text-center"
            >
              <span>Explore Menu</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-4 text-center">
            <p className="font-handwriting text-base text-[#C87958]">
              HOMEMADE • HEARTFELT • EVERYDAY
            </p>
          </div>
        </div>
      </div>

      {/* Backdrop overlay for mobile menu */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 top-[280px] bg-black/20 backdrop-blur-xs z-[-1]"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
