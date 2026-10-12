import React from "react";
import Image from "next/image";
import { Users } from "lucide-react";
import { SITE_DATA } from "@/lib/site-data";

export default function CustomerMoment() {
  const hasConsent = SITE_DATA.customerMoment.photoConsentVerified;

  return (
    <section
      id="community"
      className="py-16 sm:py-24 bg-[#FAF6ED]"
      aria-label="Community and shared moments"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EAE0D0]/50 rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#38332D]/10 relative overflow-hidden">
          {/* Subtle background blur accent */}
          <div
            className="absolute -top-12 -right-12 w-64 h-64 bg-[#C87958]/10 rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Story text */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#526B4D] uppercase">
                <Users className="w-4 h-4 text-[#C87958]" />
                <span>SHARED TABLES</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#38332D]">
                {SITE_DATA.customerMoment.heading}
              </h2>

              <p className="font-sans text-base sm:text-lg text-[#38332D]/85 leading-relaxed">
                {SITE_DATA.customerMoment.supportingCopy}
              </p>

              <p className="font-sans text-sm sm:text-base text-[#38332D]/70 leading-relaxed">
                Whether you drop in for a quick morning chai, pack a daily tiffin for work, or sit down with friends after a long day — our kitchen table is always open.
              </p>

              <div className="pt-2">
                <span className="font-handwriting text-2xl text-[#C87958]">
                  Sabka swaagat hai.
                </span>
              </div>
            </div>

            {/* Visual element (Respects child privacy & consent) */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full rounded-2xl overflow-hidden shadow-md border border-[#38332D]/10 bg-[#FAF6ED]">
                {hasConsent ? (
                  <Image
                    src={SITE_DATA.assets.customerMoment}
                    alt="Family sharing a warm meal together at the cafe table"
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover object-center"
                  />
                ) : (
                  <Image
                    src={SITE_DATA.assets.thaliFeast}
                    alt="Wholesome Indian thali meal ready to be shared with loved ones"
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover object-center"
                  />
                )}

                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-[#FAF6ED]/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full text-xs font-serif text-[#526B4D] border border-[#38332D]/10 shadow-xs">
                  {hasConsent ? "Sunny table moment" : "Everyday gathering around food"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
