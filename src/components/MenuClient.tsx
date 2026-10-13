"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Share2,
  Check,
  Eye,
  X,
  ChevronRight,
  Leaf,
  Info,
  Sparkles,
} from "lucide-react";
import { SITE_DATA, FoodItem } from "@/lib/site-data";
import { analytics } from "@/lib/analytics";

const CATEGORIES = [
  "All Dishes",
  "Thalis & Meals",
  "Nashta & Snacks",
  "Homestyle Sabzi & Dal",
] as const;

export default function MenuClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Dishes");
  const [selectedDish, setSelectedDish] = useState<FoodItem | null>(null);
  const [copied, setCopied] = useState(false);

  const { foodGallery, location } = SITE_DATA;
  const isWhatsAppConfigured =
    location.info.isWhatsAppVerified && Boolean(location.info.whatsAppNumber);

  const filteredItems =
    selectedCategory === "All Dishes"
      ? foodGallery.items
      : foodGallery.items.filter((item) => item.category === selectedCategory);

  const handleShareMenu = async () => {
    const shareUrl = `${SITE_DATA.seo.baseUrl}/menu`;
    const shareData = {
      title: "Rupali's Kitchen — Food Menu",
      text: "Check out the homestyle Indian thalis, nashta, and daily meals at Rupali's Kitchen in Ambegaon Budruk, Pune:",
      url: shareUrl,
    };

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
        analytics.trackMenuShare("native");
        return;
      } catch (err) {
        // User cancelled or share failed, fallback to copy
      }
    }

    // Clipboard fallback
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      analytics.trackMenuShare("clipboard");
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  const getWhatsAppDishUrl = (dishTitle: string) => {
    const prompt = `Hello Rupali's Kitchen, I would like to ask about "${dishTitle}". Is it available?`;
    return `https://wa.me/${location.info.whatsAppNumber}?text=${encodeURIComponent(
      prompt
    )}`;
  };

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Minimal Header & Share CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#38332D]/10">
        <div>
          <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#38332D]">
            All Dishes
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#38332D]/60 mt-0.5">
            Wholesome, pure-veg home food prepared fresh daily.
          </p>
        </div>

        <button
          type="button"
          onClick={handleShareMenu}
          className="inline-flex items-center gap-2 self-start sm:self-auto bg-[#526B4D] hover:bg-[#3F533B] text-[#FAF6ED] px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all shadow-xs cursor-pointer"
          aria-label="Share full food menu"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#FAF6ED]" />
              <span>Link Copied</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Menu</span>
            </>
          )}
        </button>
      </div>

      {/* Category Tabs */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const count =
              cat === "All Dishes"
                ? foodGallery.items.length
                : foodGallery.items.filter((item) => item.category === cat).length;
            const isActive = selectedCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  analytics.trackMenuFilter(cat);
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#526B4D] text-[#FAF6ED] shadow-sm scale-105"
                    : "bg-[#EAE0D0]/60 text-[#38332D]/80 hover:bg-[#EAE0D0]"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? "bg-[#3F533B] text-[#FAF6ED]"
                      : "bg-[#FAF6ED] text-[#38332D]/70"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Food Items Layout */}
        {selectedCategory === "All Dishes" ? (
          <div className="space-y-14 sm:space-y-16">
            {/* 1. Thalis & Meals */}
            <div>
              <div className="flex items-center justify-between pb-3 mb-6 sm:mb-8 border-b border-[#38332D]/10">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#38332D] flex items-center gap-2">
                    <span>🍛</span>
                    <span>Thalis &amp; Everyday Meals</span>
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#38332D]/70 mt-0.5">
                    Complete wholesome thalis served with fresh chapatis, dal, sabzi &amp; steamed rice
                  </p>
                </div>
                <span className="text-xs font-semibold text-[#526B4D] bg-[#526B4D]/10 px-3 py-1 rounded-full whitespace-nowrap hidden sm:inline-block">
                  8 Hearty Meals
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
                {foodGallery.items
                  .filter((item) => item.category === "Thalis & Meals")
                  .map((item, idx) => (
                    <div
                      key={item.id}
                      className={`group bg-[#FAF6ED] rounded-3xl p-3.5 sm:p-4 border border-[#38332D]/10 shadow-[0_8px_30px_rgba(56,51,45,0.06)] hover:shadow-[0_16px_40px_rgba(56,51,45,0.12)] transition-all duration-300 flex flex-col justify-between h-full ${
                        idx === 0 ? "lg:col-span-2" : ""
                      }`}
                    >
                      <div className="flex-1 flex flex-col">
                        <div
                          role="button"
                          tabIndex={0}
                          onClick={() => setSelectedDish(item)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") setSelectedDish(item);
                          }}
                          className={`relative ${
                            idx === 0 ? "aspect-[4/3] lg:aspect-[16/9]" : "aspect-[4/3]"
                          } w-full overflow-hidden rounded-2xl bg-[#EAE0D0] cursor-pointer flex-shrink-0`}
                          aria-label={`View photo of ${item.title}`}
                        >
                          <Image
                            src={item.imageSrc}
                            alt={item.title}
                            fill
                            sizes={
                              idx === 0
                                ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 760px"
                                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                            }
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                          />

                          <div className="absolute top-3 left-3 bg-[#FAF6ED]/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-[#526B4D] border border-[#38332D]/10 shadow-xs flex items-center gap-1.5">
                            {item.featured && <Sparkles className="w-3.5 h-3.5 text-[#C87958]" />}
                            <span>{idx === 0 ? "Signature House Favourite" : item.category}</span>
                          </div>

                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="bg-[#FAF6ED]/95 text-[#38332D] px-3.5 py-1.5 rounded-full text-xs font-medium shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                              <Eye className="w-3.5 h-3.5 text-[#526B4D]" />
                              <span>View Dish</span>
                            </span>
                          </div>
                        </div>

                        <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-start">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#526B4D] bg-[#526B4D]/10 px-2 py-0.5 rounded-md">
                              <Leaf className="w-3 h-3 text-[#526B4D]" />
                              Pure Veg
                            </span>
                            {item.portionNote && (
                              <span className="text-[11px] text-[#38332D]/60 font-sans">
                                • {item.portionNote}
                              </span>
                            )}
                          </div>

                          <h3 className="font-serif text-lg sm:text-xl font-normal text-[#38332D] mb-1.5 line-clamp-2 h-[3.25rem] sm:h-[3.5rem] flex items-start">
                            {item.title}
                          </h3>

                          <p className="font-sans text-xs sm:text-sm text-[#38332D]/80 leading-relaxed line-clamp-3 min-h-[3.75rem] sm:min-h-[4rem]">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="pt-3 px-3.5 sm:px-4 pb-1 border-t border-[#38332D]/5 flex items-center justify-between mt-auto">
                        <button
                          type="button"
                          onClick={() => setSelectedDish(item)}
                          className="font-sans text-xs text-[#526B4D] hover:text-[#3F533B] font-medium flex items-center gap-1 cursor-pointer"
                        >
                          <span>See details</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>

                        {isWhatsAppConfigured && (
                          <a
                            href={getWhatsAppDishUrl(item.title)}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => analytics.trackWhatsApp("menu_card", item.title)}
                            className="inline-flex items-center gap-1.5 bg-[#25D366]/10 hover:bg-[#25D366] text-[#1E7E34] hover:text-white px-3 py-1.5 rounded-full text-xs font-medium transition-all"
                          >
                            <div className="relative w-3.5 h-3.5 flex-shrink-0">
                              <Image
                                src={SITE_DATA.assets.whatsappIcon}
                                alt="WhatsApp"
                                fill
                                sizes="14px"
                                className="object-contain"
                              />
                            </div>
                            <span>Ask / Order</span>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* 2. Nashta & Snacks */}
            <div>
              <div className="flex items-center justify-between pb-3 mb-6 sm:mb-8 border-b border-[#38332D]/10">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#38332D] flex items-center gap-2">
                    <span>☕</span>
                    <span>Morning Nashta &amp; Fasting Snacks</span>
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#38332D]/70 mt-0.5">
                    Fresh morning masala chai, soft theplas, sabudana khichdi &amp; vegetable maggi
                  </p>
                </div>
                <span className="text-xs font-semibold text-[#526B4D] bg-[#526B4D]/10 px-3 py-1 rounded-full whitespace-nowrap hidden sm:inline-block">
                  3 Fresh Snacks
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
                {foodGallery.items
                  .filter((item) => item.category === "Nashta & Snacks")
                  .map((item, idx) => (
                    <div
                      key={item.id}
                      className={`group bg-[#FAF6ED] rounded-3xl p-3.5 sm:p-4 border border-[#38332D]/10 shadow-[0_8px_30px_rgba(56,51,45,0.06)] hover:shadow-[0_16px_40px_rgba(56,51,45,0.12)] transition-all duration-300 flex flex-col justify-between h-full ${
                        idx === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                      }`}
                    >
                      <div className="flex-1 flex flex-col">
                        <div
                          role="button"
                          tabIndex={0}
                          onClick={() => setSelectedDish(item)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") setSelectedDish(item);
                          }}
                          className={`relative ${
                            idx === 0 ? "aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3]" : "aspect-[4/3]"
                          } w-full overflow-hidden rounded-2xl bg-[#EAE0D0] cursor-pointer flex-shrink-0`}
                          aria-label={`View photo of ${item.title}`}
                        >
                          <Image
                            src={item.imageSrc}
                            alt={item.title}
                            fill
                            sizes={
                              idx === 0
                                ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 380px"
                                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                            }
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                          />

                          <div className="absolute top-3 left-3 bg-[#FAF6ED]/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-[#526B4D] border border-[#38332D]/10 shadow-xs flex items-center gap-1.5">
                            {item.featured && <Sparkles className="w-3.5 h-3.5 text-[#C87958]" />}
                            <span>{item.category}</span>
                          </div>

                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="bg-[#FAF6ED]/95 text-[#38332D] px-3.5 py-1.5 rounded-full text-xs font-medium shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                              <Eye className="w-3.5 h-3.5 text-[#526B4D]" />
                              <span>View Dish</span>
                            </span>
                          </div>
                        </div>

                        <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-start">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#526B4D] bg-[#526B4D]/10 px-2 py-0.5 rounded-md">
                              <Leaf className="w-3 h-3 text-[#526B4D]" />
                              Pure Veg
                            </span>
                            {item.portionNote && (
                              <span className="text-[11px] text-[#38332D]/60 font-sans">
                                • {item.portionNote}
                              </span>
                            )}
                          </div>

                          <h3 className="font-serif text-lg sm:text-xl font-normal text-[#38332D] mb-1.5 line-clamp-2 h-[3.25rem] sm:h-[3.5rem] flex items-start">
                            {item.title}
                          </h3>

                          <p className="font-sans text-xs sm:text-sm text-[#38332D]/80 leading-relaxed line-clamp-3 min-h-[3.75rem] sm:min-h-[4rem]">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="pt-3 px-3.5 sm:px-4 pb-1 border-t border-[#38332D]/5 flex items-center justify-between mt-auto">
                        <button
                          type="button"
                          onClick={() => setSelectedDish(item)}
                          className="font-sans text-xs text-[#526B4D] hover:text-[#3F533B] font-medium flex items-center gap-1 cursor-pointer"
                        >
                          <span>See details</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>

                        {isWhatsAppConfigured && (
                          <a
                            href={getWhatsAppDishUrl(item.title)}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => analytics.trackWhatsApp("menu_card", item.title)}
                            className="inline-flex items-center gap-1.5 bg-[#25D366]/10 hover:bg-[#25D366] text-[#1E7E34] hover:text-white px-3 py-1.5 rounded-full text-xs font-medium transition-all"
                          >
                            <div className="relative w-3.5 h-3.5 flex-shrink-0">
                              <Image
                                src={SITE_DATA.assets.whatsappIcon}
                                alt="WhatsApp"
                                fill
                                sizes="14px"
                                className="object-contain"
                              />
                            </div>
                            <span>Ask / Order</span>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* 3. Homestyle Sabzi & Dal */}
            <div>
              <div className="flex items-center justify-between pb-3 mb-6 sm:mb-8 border-b border-[#38332D]/10">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#38332D] flex items-center gap-2">
                    <span>🥬</span>
                    <span>Homestyle Sabzi &amp; Dal</span>
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#38332D]/70 mt-0.5">
                    Authentic Maharashtrian sprouted usal, tadka dal palak &amp; nutritious methi moong dal bhaji
                  </p>
                </div>
                <span className="text-xs font-semibold text-[#526B4D] bg-[#526B4D]/10 px-3 py-1 rounded-full whitespace-nowrap hidden sm:inline-block">
                  3 Fresh Sabzis
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
                {foodGallery.items
                  .filter((item) => item.category === "Homestyle Sabzi & Dal")
                  .map((item, idx) => (
                    <div
                      key={item.id}
                      className={`group bg-[#FAF6ED] rounded-3xl p-3.5 sm:p-4 border border-[#38332D]/10 shadow-[0_8px_30px_rgba(56,51,45,0.06)] hover:shadow-[0_16px_40px_rgba(56,51,45,0.12)] transition-all duration-300 flex flex-col justify-between h-full ${
                        idx === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                      }`}
                    >
                      <div className="flex-1 flex flex-col">
                        <div
                          role="button"
                          tabIndex={0}
                          onClick={() => setSelectedDish(item)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") setSelectedDish(item);
                          }}
                          className={`relative ${
                            idx === 0 ? "aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3]" : "aspect-[4/3]"
                          } w-full overflow-hidden rounded-2xl bg-[#EAE0D0] cursor-pointer flex-shrink-0`}
                          aria-label={`View photo of ${item.title}`}
                        >
                          <Image
                            src={item.imageSrc}
                            alt={item.title}
                            fill
                            sizes={
                              idx === 0
                                ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 380px"
                                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                            }
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                          />

                          <div className="absolute top-3 left-3 bg-[#FAF6ED]/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-[#526B4D] border border-[#38332D]/10 shadow-xs flex items-center gap-1.5">
                            {item.featured && <Sparkles className="w-3.5 h-3.5 text-[#C87958]" />}
                            <span>{item.category}</span>
                          </div>

                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="bg-[#FAF6ED]/95 text-[#38332D] px-3.5 py-1.5 rounded-full text-xs font-medium shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                              <Eye className="w-3.5 h-3.5 text-[#526B4D]" />
                              <span>View Dish</span>
                            </span>
                          </div>
                        </div>

                        <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-start">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#526B4D] bg-[#526B4D]/10 px-2 py-0.5 rounded-md">
                              <Leaf className="w-3 h-3 text-[#526B4D]" />
                              Pure Veg
                            </span>
                            {item.portionNote && (
                              <span className="text-[11px] text-[#38332D]/60 font-sans">
                                • {item.portionNote}
                              </span>
                            )}
                          </div>

                          <h3 className="font-serif text-lg sm:text-xl font-normal text-[#38332D] mb-1.5 line-clamp-2 h-[3.25rem] sm:h-[3.5rem] flex items-start">
                            {item.title}
                          </h3>

                          <p className="font-sans text-xs sm:text-sm text-[#38332D]/80 leading-relaxed line-clamp-3 min-h-[3.75rem] sm:min-h-[4rem]">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="pt-3 px-3.5 sm:px-4 pb-1 border-t border-[#38332D]/5 flex items-center justify-between mt-auto">
                        <button
                          type="button"
                          onClick={() => setSelectedDish(item)}
                          className="font-sans text-xs text-[#526B4D] hover:text-[#3F533B] font-medium flex items-center gap-1 cursor-pointer"
                        >
                          <span>See details</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>

                        {isWhatsAppConfigured && (
                          <a
                            href={getWhatsAppDishUrl(item.title)}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => analytics.trackWhatsApp("menu_card", item.title)}
                            className="inline-flex items-center gap-1.5 bg-[#25D366]/10 hover:bg-[#25D366] text-[#1E7E34] hover:text-white px-3 py-1.5 rounded-full text-xs font-medium transition-all"
                          >
                            <div className="relative w-3.5 h-3.5 flex-shrink-0">
                              <Image
                                src={SITE_DATA.assets.whatsappIcon}
                                alt="WhatsApp"
                                fill
                                sizes="14px"
                                className="object-contain"
                              />
                            </div>
                            <span>Ask / Order</span>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ) : (
          /* Filtered single category view */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className={`group bg-[#FAF6ED] rounded-3xl p-3.5 sm:p-4 border border-[#38332D]/10 shadow-[0_8px_30px_rgba(56,51,45,0.06)] hover:shadow-[0_16px_40px_rgba(56,51,45,0.12)] transition-all duration-300 flex flex-col justify-between h-full ${
                  selectedCategory === "Thalis & Meals" && idx === 0
                    ? "lg:col-span-2"
                    : filteredItems.length === 3 && idx === 0
                    ? "sm:col-span-2 lg:col-span-1"
                    : ""
                }`}
              >
                <div className="flex-1 flex flex-col">
                  {/* Image */}
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setSelectedDish(item)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") setSelectedDish(item);
                    }}
                    className={`relative ${
                      selectedCategory === "Thalis & Meals" && idx === 0
                        ? "aspect-[4/3] lg:aspect-[16/9]"
                        : filteredItems.length === 3 && idx === 0
                        ? "aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3]"
                        : "aspect-[4/3]"
                    } w-full overflow-hidden rounded-2xl bg-[#EAE0D0] cursor-pointer flex-shrink-0`}
                    aria-label={`View photo of ${item.title}`}
                  >
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    <div className="absolute top-3 left-3 bg-[#FAF6ED]/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-[#526B4D] border border-[#38332D]/10 shadow-xs flex items-center gap-1.5">
                      {item.featured && <Sparkles className="w-3.5 h-3.5 text-[#C87958]" />}
                      <span>{item.category}</span>
                    </div>

                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-[#FAF6ED]/95 text-[#38332D] px-3.5 py-1.5 rounded-full text-xs font-medium shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-3.5 h-3.5 text-[#526B4D]" />
                        <span>View Dish</span>
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-start">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#526B4D] bg-[#526B4D]/10 px-2 py-0.5 rounded-md">
                        <Leaf className="w-3 h-3 text-[#526B4D]" />
                        Pure Veg
                      </span>
                      {item.portionNote && (
                        <span className="text-[11px] text-[#38332D]/60 font-sans">
                          • {item.portionNote}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-normal text-[#38332D] mb-1.5 line-clamp-2 h-[3.25rem] sm:h-[3.5rem] flex items-start">
                      {item.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-[#38332D]/80 leading-relaxed line-clamp-3 min-h-[3.75rem] sm:min-h-[4rem]">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Action */}
                <div className="pt-3 px-3.5 sm:px-4 pb-1 border-t border-[#38332D]/5 flex items-center justify-between mt-auto">
                  <button
                    type="button"
                    onClick={() => setSelectedDish(item)}
                    className="font-sans text-xs text-[#526B4D] hover:text-[#3F533B] font-medium flex items-center gap-1 cursor-pointer"
                  >
                    <span>See details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  {isWhatsAppConfigured && (
                    <a
                      href={getWhatsAppDishUrl(item.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => analytics.trackWhatsApp("menu_card", item.title)}
                      className="inline-flex items-center gap-1.5 bg-[#25D366]/10 hover:bg-[#25D366] text-[#1E7E34] hover:text-white px-3 py-1.5 rounded-full text-xs font-medium transition-all"
                    >
                      <div className="relative w-3.5 h-3.5 flex-shrink-0">
                        <Image
                          src={SITE_DATA.assets.whatsappIcon}
                          alt="WhatsApp"
                          fill
                          sizes="14px"
                          className="object-contain"
                        />
                      </div>
                      <span>Ask / Order</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Dish Lightbox Modal */}
      {selectedDish && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dish-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedDish(null);
          }}
        >
          <div className="bg-[#FAF6ED] rounded-3xl max-w-2xl w-full border border-[#38332D]/15 shadow-2xl relative overflow-hidden animate-in fade-in zoom-in-95 duration-200 my-auto">
            <button
              type="button"
              onClick={() => setSelectedDish(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#FAF6ED]/80 hover:bg-[#FAF6ED] text-[#38332D] shadow-md transition-all cursor-pointer"
              aria-label="Close dish preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/11] w-full bg-[#EAE0D0]">
              <Image
                src={selectedDish.imageSrc}
                alt={selectedDish.title}
                fill
                sizes="(max-width: 768px) 100vw, 680px"
                className="object-cover object-center"
              />
              <div className="absolute bottom-3 left-3 bg-[#FAF6ED]/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#526B4D] border border-[#38332D]/10">
                {selectedDish.category}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#526B4D] bg-[#526B4D]/10 px-2.5 py-0.5 rounded-md">
                  <Leaf className="w-3.5 h-3.5 text-[#526B4D]" />
                  100% Pure Veg Homestyle
                </span>
                {selectedDish.portionNote && (
                  <span className="text-xs text-[#38332D]/60">• {selectedDish.portionNote}</span>
                )}
              </div>

              <h3
                id="dish-modal-title"
                className="font-serif text-2xl sm:text-3xl font-medium text-[#38332D]"
              >
                {selectedDish.title}
              </h3>

              <p className="font-sans text-sm sm:text-base text-[#38332D]/85 leading-relaxed">
                {selectedDish.description}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-[#38332D]/10">
                <span className="font-handwriting text-lg text-[#C87958]">
                  Made with love, served with warmth
                </span>

                <div className="flex gap-2.5">
                  <button
                    type="button"
                    onClick={() => setSelectedDish(null)}
                    className="px-4 py-2.5 rounded-full text-sm font-medium text-[#38332D]/70 hover:text-[#38332D] transition-colors"
                  >
                    Close
                  </button>

                  {isWhatsAppConfigured ? (
                    <a
                      href={getWhatsAppDishUrl(selectedDish.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => analytics.trackWhatsApp("menu_modal", selectedDish.title)}
                      className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm"
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
                      <span>Ask on WhatsApp</span>
                    </a>
                  ) : (
                    <Link
                      href="/find-us"
                      onClick={() => setSelectedDish(null)}
                      className="inline-flex items-center justify-center gap-2 bg-[#526B4D] hover:bg-[#3F533B] text-[#FAF6ED] px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm"
                    >
                      <span>Find Our Kitchen</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
