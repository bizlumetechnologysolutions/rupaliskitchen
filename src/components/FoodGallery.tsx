"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Info, Sparkles, X } from "lucide-react";
import { SITE_DATA } from "@/lib/site-data";

export default function FoodGallery() {
  const [showContactModal, setShowContactModal] = useState(false);
  const isWhatsAppConfigured =
    SITE_DATA.location.info.isWhatsAppVerified &&
    Boolean(SITE_DATA.location.info.whatsAppNumber);

  const handleCtaClick = (e: React.MouseEvent) => {
    if (!isWhatsAppConfigured) {
      e.preventDefault();
      setShowContactModal(true);
    }
  };

  return (
    <section
      id="food"
      className="py-16 sm:py-24 lg:py-32 bg-[#FAF6ED]"
      aria-label="The Food at Rupali's Kitchen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#C87958] uppercase">
            <span className="w-6 h-[2px] bg-[#C87958]" />
            <span>{SITE_DATA.foodGallery.eyebrow}</span>
            <span className="w-6 h-[2px] bg-[#C87958]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#38332D]">
            {SITE_DATA.foodGallery.headline}
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#38332D]/80 leading-relaxed">
            {SITE_DATA.foodGallery.supportingText}
          </p>
        </div>

        {/* Editorial Food Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Card 1: Featured Everyday Thali (Large Editorial Span 7) */}
          <div className="md:col-span-7 group">
            <div className="bg-[#FAF6ED] rounded-3xl p-3 sm:p-4 border border-[#38332D]/10 shadow-[0_8px_30px_rgba(56,51,45,0.06)] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(56,51,45,0.1)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#EAE0D0]">
                <Image
                  src={SITE_DATA.assets.thaliFeast}
                  alt="Complete Indian thali feast with fresh rotis, rice, dal, and sabzi"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-[#FAF6ED]/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#526B4D] border border-[#38332D]/10 shadow-xs flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C87958]" />
                  <span>Everyday Thali</span>
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-2xl font-normal text-[#38332D]">
                    Everyday Thali Feast
                  </h3>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#EAE0D0] text-[#526B4D]">
                    Homestyle Meal
                  </span>
                </div>
                <p className="font-sans text-sm sm:text-base text-[#38332D]/80 leading-relaxed">
                  A wholesome plate featuring soft rotis, steaming rice, slow-simmered dal, seasonal sabzi, crispy roasted papad, and tangy pickle — simple, balanced ghar ka khana.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 2 Stacked Cards (Span 5) */}
          <div className="md:col-span-5 space-y-8">
            {/* Card 2: Roti, Sabzi & Pickle */}
            <div className="group bg-[#FAF6ED] rounded-3xl p-3 sm:p-4 border border-[#38332D]/10 shadow-[0_8px_30px_rgba(56,51,45,0.06)] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(56,51,45,0.1)]">
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-[#EAE0D0]">
                <Image
                  src={SITE_DATA.assets.rotiSabzi}
                  alt="Hot phulkas with freshly cooked cabbage peas sabzi and spicy pickle"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 500px"
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-[#FAF6ED]/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#526B4D] border border-[#38332D]/10 shadow-xs">
                  <span>Homestyle Meals</span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-xl font-normal text-[#38332D]">
                    Phulka &amp; Seasonal Sabzi
                  </h3>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#EAE0D0] text-[#526B4D]">
                    Everyday Comfort
                  </span>
                </div>
                <p className="font-sans text-sm text-[#38332D]/80 leading-relaxed">
                  Tender rotis paired with vibrant, lightly spiced sabzi and homemade pickle. Light on the stomach and comforting every single day.
                </p>
              </div>
            </div>

            {/* Card 3: Nashta, Meals & Snacks Counter */}
            <div className="group bg-[#FAF6ED] rounded-3xl p-3 sm:p-4 border border-[#38332D]/10 shadow-[0_8px_30px_rgba(56,51,45,0.06)] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(56,51,45,0.1)]">
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-[#EAE0D0]">
                <Image
                  src={SITE_DATA.assets.storefront}
                  alt="Rupali's Kitchen neighbourhood cafe counter with Nashta, Meal and Snacks sign"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 500px"
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-[#FAF6ED]/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#526B4D] border border-[#38332D]/10 shadow-xs">
                  <span>Nashta &amp; Chai</span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-xl font-normal text-[#38332D]">
                    Nashta, Meals &amp; Snacks
                  </h3>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#EAE0D0] text-[#526B4D]">
                    Fresh Counter
                  </span>
                </div>
                <p className="font-sans text-sm text-[#38332D]/80 leading-relaxed">
                  From morning breakfast routines to afternoon tiffin boxes, freshly served straight from our neighbourhood counter.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action bar */}
        <div className="mt-14 sm:mt-18 text-center flex flex-col items-center">
          <div className="bg-[#EAE0D0]/50 border border-[#38332D]/10 rounded-2xl p-6 sm:p-8 max-w-xl w-full flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="text-center sm:text-left">
              <p className="font-serif text-lg font-medium text-[#38332D]">
                Freshly prepared each morning
              </p>
              <p className="font-sans text-xs sm:text-sm text-[#38332D]/70 mt-0.5">
                Our daily sabzi and dal change with market-fresh produce.
              </p>
            </div>

            {isWhatsAppConfigured ? (
              <a
                href={`https://wa.me/${SITE_DATA.location.info.whatsAppNumber}?text=${encodeURIComponent(
                  SITE_DATA.location.info.whatsAppPrompt || "Hello Rupali's Kitchen, what is cooking today?"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#526B4D] hover:bg-[#3F533B] text-[#FAF6ED] px-5 py-3 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 flex-shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{SITE_DATA.foodGallery.ctaText}</span>
              </a>
            ) : (
              <button
                type="button"
                onClick={handleCtaClick}
                className="inline-flex items-center justify-center gap-2 bg-[#526B4D] hover:bg-[#3F533B] text-[#FAF6ED] px-5 py-3 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 flex-shrink-0 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{SITE_DATA.foodGallery.ctaText}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Helpful Informational Modal for unconfigured WhatsApp */}
      {showContactModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <div className="bg-[#FAF6ED] rounded-3xl p-6 sm:p-8 max-w-md w-full border border-[#38332D]/15 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={() => setShowContactModal(false)}
              className="absolute top-5 right-5 p-1 rounded-full text-[#38332D]/60 hover:text-[#38332D] hover:bg-[#EAE0D0] transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-[#526B4D] mb-4">
              <div className="p-2.5 rounded-full bg-[#EAE0D0]">
                <Info className="w-5 h-5" />
              </div>
              <h3 id="contact-modal-title" className="font-serif text-xl font-medium text-[#38332D]">
                What&apos;s Cooking Today?
              </h3>
            </div>

            <p className="font-sans text-sm text-[#38332D]/80 leading-relaxed mb-6">
              Our meals are freshly prepared daily in small batches with seasonal ingredients.
              Direct WhatsApp order lines are being configured for launch. In the meantime, please visit our neighbourhood counter in person to enjoy today&apos;s hot meal!
            </p>

            <div className="flex justify-end gap-3">
              <Link
                href="#find-us"
                onClick={() => setShowContactModal(false)}
                className="bg-[#526B4D] hover:bg-[#3F533B] text-[#FAF6ED] px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
              >
                Find Our Kitchen
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
