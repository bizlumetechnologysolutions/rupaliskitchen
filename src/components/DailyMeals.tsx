"use client";

import React from "react";
import Image from "next/image";
import { Check, Sparkles, UtensilsCrossed } from "lucide-react";
import { SITE_DATA, DailyMealPackage } from "@/lib/site-data";
import { analytics } from "@/lib/analytics";

interface DailyMealsProps {
  className?: string;
  showHeading?: boolean;
  compact?: boolean;
}

export default function DailyMeals({
  className = "",
  showHeading = true,
  compact = false,
}: DailyMealsProps) {
  const { dailyMeals, location } = SITE_DATA;
  const isWhatsAppConfigured =
    location.info.isWhatsAppVerified && Boolean(location.info.whatsAppNumber);

  const getWhatsAppMealUrl = (meal: DailyMealPackage) => {
    return `https://wa.me/${location.info.whatsAppNumber}?text=${encodeURIComponent(
      meal.whatsAppPrompt
    )}`;
  };

  return (
    <section
      id="daily-meals"
      className={`relative ${compact ? "py-8 sm:py-12" : "py-14 sm:py-20 lg:py-24"} bg-[#FAF6ED] ${className}`}
      aria-label="Everyday Homestyle Meals & Combos"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#C87958] uppercase">
              <span className="w-6 h-[2px] bg-[#C87958]" />
              <span className="flex items-center gap-1.5">
                <UtensilsCrossed className="w-3.5 h-3.5" />
                <span>ROZ KA KHANA • DAILY HOMESTYLE MEALS</span>
              </span>
              <span className="w-6 h-[2px] bg-[#C87958]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#38332D] tracking-tight">
              Wholesome Meals, Honest Pricing.
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#38332D]/80 leading-relaxed">
              Piping-hot phulkas off the tawa, daily changing sabzis, slow-cooked comforting daal, and steamed rice. Everyday ghar ka khana at transparent neighbourhood prices.
            </p>
          </div>
        )}

        {/* 3-Column Meals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {dailyMeals.map((meal) => {
            const isFullMeal = meal.id === "full-meal";

            return (
              <div
                key={meal.id}
                className={`relative group bg-[#FAF6ED] rounded-3xl p-5 sm:p-6 border transition-all duration-300 flex flex-col justify-between ${
                  isFullMeal
                    ? "border-[#526B4D]/40 shadow-[0_12px_40px_rgba(82,107,77,0.12)] ring-1 ring-[#526B4D]/25 md:-translate-y-2"
                    : "border-[#38332D]/10 shadow-[0_6px_25px_rgba(56,51,45,0.05)] hover:shadow-[0_12px_35px_rgba(56,51,45,0.1)] hover:-translate-y-1"
                }`}
              >
                {/* Popular / Featured Badge */}
                {meal.badge && (
                  <div className="absolute -top-3.5 left-6 z-10">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold shadow-sm ${
                        isFullMeal
                          ? "bg-[#526B4D] text-[#FAF6ED]"
                          : "bg-[#EAE0D0] text-[#38332D] border border-[#38332D]/10"
                      }`}
                    >
                      {isFullMeal && <Sparkles className="w-3 h-3 text-[#FAF6ED]" />}
                      <span>{meal.badge}</span>
                    </span>
                  </div>
                )}

                <div>
                  {/* Photo Container */}
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#EAE0D0] mb-5 border border-[#38332D]/5">
                    <Image
                      src={meal.imageSrc}
                      alt={`${meal.name} at Rupali's Kitchen`}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium">
                      <span className="bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-lg">
                        100% Pure Veg
                      </span>
                      <span className="font-serif tracking-wide text-white/90">
                        {meal.marathiName}
                      </span>
                    </div>
                  </div>

                  {/* Header & Pricing */}
                  <div className="pb-3 border-b border-[#38332D]/10 mb-4">
                    <div className="flex items-baseline justify-between gap-2">
                      <div>
                        <h3 className="font-serif text-2xl font-normal text-[#38332D]">
                          {meal.name}
                        </h3>
                        <p className="font-sans text-xs text-[#38332D]/60 mt-0.5">
                          {meal.shortDescription}
                        </p>
                      </div>

                      <div className="text-right flex-shrink-0">
                        <div className="flex items-baseline justify-end gap-0.5">
                          <span className="font-serif text-3xl sm:text-4xl font-normal text-[#526B4D]">
                            {meal.priceDisplay}
                          </span>
                          <span className="text-xs text-[#38332D]/60 font-sans font-medium">
                            /-
                          </span>
                        </div>
                        <span className="text-[11px] text-[#38332D]/50 block">
                          per plate
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Visual Formula Pill */}
                  <div className="bg-[#EAE0D0]/40 rounded-xl px-3 py-2 border border-[#38332D]/5 mb-4">
                    <div className="text-[11px] font-semibold tracking-wider text-[#C87958] uppercase mb-1">
                      Meal Formula
                    </div>
                    <div className="font-mono text-xs sm:text-sm font-semibold text-[#38332D] tracking-tight">
                      {meal.formula}
                    </div>
                  </div>

                  {/* What is included */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-semibold tracking-wider text-[#38332D]/60 uppercase">
                      What&apos;s Included
                    </div>
                    <ul className="space-y-2">
                      {meal.includes.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-[#38332D]/85"
                        >
                          <div className="w-4 h-4 rounded-full bg-[#526B4D]/15 text-[#526B4D] flex items-center justify-center flex-shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* WhatsApp Action Button */}
                <div className="pt-4 border-t border-[#38332D]/10">
                  {isWhatsAppConfigured && (
                    <a
                      href={getWhatsAppMealUrl(meal)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        analytics.trackWhatsApp("daily_meal_card", `${meal.name} - ${meal.priceDisplay}`)
                      }
                      className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs ${
                        isFullMeal
                          ? "bg-[#526B4D] hover:bg-[#3F533B] text-[#FAF6ED] shadow-[0_4px_12px_rgba(82,107,77,0.25)] hover:shadow-[0_6px_16px_rgba(82,107,77,0.35)]"
                          : "bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-xs"
                      }`}
                    >
                      <div className="relative w-4 h-4 flex-shrink-0">
                        <Image
                          src={SITE_DATA.assets.whatsappIcon}
                          alt="WhatsApp"
                          fill
                          sizes="16px"
                          className="object-contain"
                        />
                      </div>
                      <span>Order {meal.name} ({meal.priceDisplay})</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust & Quality Reassurance Bar */}
        <div className="mt-10 sm:mt-14 bg-[#EAE0D0]/40 rounded-2xl p-4 sm:p-5 border border-[#38332D]/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
            <div className="space-y-0.5">
              <span className="text-base sm:text-lg block">🫓</span>
              <p className="text-xs sm:text-sm font-medium text-[#38332D]">
                Fresh Tawa Chapatis
              </p>
              <p className="text-[11px] text-[#38332D]/60">Rolled fresh per order</p>
            </div>

            <div className="space-y-0.5">
              <span className="text-base sm:text-lg block">🌱</span>
              <p className="text-xs sm:text-sm font-medium text-[#38332D]">
                100% Pure Veg
              </p>
              <p className="text-[11px] text-[#38332D]/60">Homestyle, low-oil cooking</p>
            </div>

            <div className="space-y-0.5">
              <span className="text-base sm:text-lg block">🍱</span>
              <p className="text-xs sm:text-sm font-medium text-[#38332D]">
                Daily Tiffins &amp; Takeaway
              </p>
              <p className="text-[11px] text-[#38332D]/60">Lunch &amp; Dinner service</p>
            </div>

            <div className="space-y-0.5">
              <span className="text-base sm:text-lg block">📍</span>
              <p className="text-xs sm:text-sm font-medium text-[#38332D]">
                Ambegaon Pathar Road
              </p>
              <p className="text-[11px] text-[#38332D]/60">Opp. Torna Sankul</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
