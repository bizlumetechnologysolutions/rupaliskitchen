import React from "react";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { SITE_DATA } from "@/lib/site-data";

export default function FinalCTA() {
  const { finalCta } = SITE_DATA;

  return (
    <section
      className="relative overflow-hidden bg-[#526B4D] text-[#FAF6ED] py-20 sm:py-28"
      aria-label="Call to action"
    >
      {/* Background ambient accents */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-[#FAF6ED]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#C87958]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF6ED]/10 text-[#FAF6ED] text-xs font-semibold tracking-wider uppercase mb-6">
          <Heart className="w-3.5 h-3.5 text-[#C87958] fill-[#C87958]" />
          <span>EVERYDAY TASTE OF HOME</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#FAF6ED] leading-tight mb-6">
          {finalCta.headline}
        </h2>

        <p className="font-sans text-lg sm:text-xl text-[#FAF6ED]/90 max-w-2xl mx-auto leading-relaxed mb-10">
          {finalCta.supportingCopy}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/find-us"
            className="inline-flex items-center justify-center gap-2.5 bg-[#FAF6ED] hover:bg-[#FAF6ED]/90 text-[#526B4D] px-8 py-4 rounded-full text-base font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FAF6ED]"
          >
            <span>{finalCta.buttonText}</span>
            <ArrowRight className="w-4 h-4 text-[#526B4D]" />
          </Link>
        </div>

        <p className="font-handwriting text-xl text-[#FAF6ED]/80 mt-8">
          A little kitchen with a whole lot of heart.
        </p>
      </div>
    </section>
  );
}
