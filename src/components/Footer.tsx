"use client";

import React, { useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { SITE_DATA } from "@/lib/site-data";

const subscribe = () => () => {};

export default function Footer() {
  const currentYear = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => 2026
  );

  return (
    <footer
      className="bg-[#FAF6ED] border-t border-[#38332D]/10 pt-12 pb-8"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-[#38332D]/8">
          {/* Brand Info */}
          <div className="md:col-span-6 flex items-center gap-4">
            <div className="relative w-12 h-12 flex-shrink-0 bg-[#EAE0D0]/60 rounded-xl p-1 border border-[#38332D]/10">
              <Image
                src={SITE_DATA.assets.logoMark}
                alt="Rupali's Kitchen pot mark"
                fill
                sizes="48px"
                className="object-contain p-0.5"
              />
            </div>
            <div>
              <span className="font-serif text-xl font-bold text-[#526B4D]">
                Rupali&apos;s Kitchen
              </span>
              <p className="font-sans text-xs text-[#38332D]/70 font-medium">
                {SITE_DATA.brand.tagline}
              </p>
            </div>
          </div>

          {/* Nav links */}
          <div className="md:col-span-6 flex flex-wrap md:justify-end gap-x-8 gap-y-2">
            {SITE_DATA.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-sm text-[#38332D]/75 hover:text-[#526B4D] transition-colors py-1"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#38332D]/65">
          <p className="flex items-center gap-1.5 font-sans">
            <span>&copy; {currentYear} Rupali&apos;s Kitchen. All rights reserved.</span>
          </p>

          <p className="font-handwriting text-base text-[#C87958] flex items-center gap-1.5">
            <span>Made with love</span>
            <Heart className="w-3.5 h-3.5 fill-[#C87958]" />
            <span>served with warmth</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
