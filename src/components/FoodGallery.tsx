"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Info, Sparkles, X, ChevronRight, Eye } from "lucide-react";
import { SITE_DATA, FoodItem } from "@/lib/site-data";

const CATEGORIES = [
  "All Dishes",
  "Thalis & Meals",
  "Nashta & Snacks",
  "Homestyle Sabzi & Dal",
];

export default function FoodGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All Dishes");
  const [selectedDish, setSelectedDish] = useState<FoodItem | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);

  const isModalOpen = Boolean(selectedDish || showContactModal);

  // Background scroll lock when modal or card preview is opened
  useEffect(() => {
    if (isModalOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setSelectedDish(null);
          setShowContactModal(false);
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow || "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isModalOpen]);

  const isWhatsAppConfigured =
    SITE_DATA.location.info.isWhatsAppVerified &&
    Boolean(SITE_DATA.location.info.whatsAppNumber);

  const filteredItems =
    selectedCategory === "All Dishes"
      ? SITE_DATA.foodGallery.items
      : SITE_DATA.foodGallery.items.filter(
          (item) => item.category === selectedCategory
        );


  const getWhatsAppDishUrl = (dishTitle: string) => {
    const prompt = `Hello Rupali's Kitchen, I would like to order or ask about "${dishTitle}". Is it available today?`;
    return `https://wa.me/${SITE_DATA.location.info.whatsAppNumber}?text=${encodeURIComponent(prompt)}`;
  };

  return (
    <section
      id="food"
      className="py-16 sm:py-24 lg:py-32 bg-[#FAF6ED]"
      aria-label="The Food at Rupali's Kitchen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 sm:mb-14">
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

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {CATEGORIES.map((cat) => {
              const count =
                cat === "All Dishes"
                  ? SITE_DATA.foodGallery.items.length
                  : SITE_DATA.foodGallery.items.filter(
                      (item) => item.category === cat
                    ).length;

              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#526B4D] text-[#FAF6ED] shadow-sm scale-105"
                      : "bg-[#EAE0D0]/60 text-[#38332D]/80 hover:bg-[#EAE0D0] hover:text-[#38332D]"
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
        </div>

        {/* Authentically arranged food layout */}
        {selectedCategory === "All Dishes" ? (
          <div className="space-y-14 sm:space-y-18">
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
                {SITE_DATA.foodGallery.items
                  .filter((item) => item.category === "Thalis & Meals")
                  .map((item, idx) => (
                    <div
                      key={item.id}
                      className={`group bg-[#FAF6ED] rounded-3xl p-3 sm:p-4 border border-[#38332D]/10 shadow-[0_8px_30px_rgba(56,51,45,0.06)] hover:shadow-[0_16px_40px_rgba(56,51,45,0.12)] transition-all duration-300 flex flex-col justify-between h-full ${
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
                          <h3 className="font-serif text-lg sm:text-xl font-normal text-[#38332D] mb-1.5 line-clamp-2 h-[3.25rem] sm:h-[3.5rem] flex items-start">
                            {item.title}
                          </h3>
                          <p className="font-sans text-xs sm:text-sm text-[#38332D]/80 leading-relaxed line-clamp-3 min-h-[3.75rem] sm:min-h-[4rem]">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="pt-3 px-3 sm:px-4 pb-1 border-t border-[#38332D]/5 flex items-center justify-between mt-auto">
                        <button
                          type="button"
                          onClick={() => setSelectedDish(item)}
                          className="font-sans text-xs text-[#526B4D] hover:text-[#3F533B] font-medium flex items-center gap-1 cursor-pointer"
                        >
                          <span>See details</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>

                        {isWhatsAppConfigured ? (
                          <a
                            href={getWhatsAppDishUrl(item.title)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 bg-[#25D366]/10 hover:bg-[#25D366] text-[#1E7E34] hover:text-[#FAF6ED] px-3 py-1.5 rounded-full text-xs font-medium transition-all"
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
                        ) : (
                          <button
                            type="button"
                            onClick={() => setShowContactModal(true)}
                            className="inline-flex items-center gap-1.5 bg-[#25D366]/10 hover:bg-[#25D366] text-[#1E7E34] hover:text-[#FAF6ED] px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer"
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
                          </button>
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
                {SITE_DATA.foodGallery.items
                  .filter((item) => item.category === "Nashta & Snacks")
                  .map((item, idx) => (
                    <div
                      key={item.id}
                      className={`group bg-[#FAF6ED] rounded-3xl p-3 sm:p-4 border border-[#38332D]/10 shadow-[0_8px_30px_rgba(56,51,45,0.06)] hover:shadow-[0_16px_40px_rgba(56,51,45,0.12)] transition-all duration-300 flex flex-col justify-between h-full ${
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
                          <h3 className="font-serif text-lg sm:text-xl font-normal text-[#38332D] mb-1.5 line-clamp-2 h-[3.25rem] sm:h-[3.5rem] flex items-start">
                            {item.title}
                          </h3>
                          <p className="font-sans text-xs sm:text-sm text-[#38332D]/80 leading-relaxed line-clamp-3 min-h-[3.75rem] sm:min-h-[4rem]">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="pt-3 px-3 sm:px-4 pb-1 border-t border-[#38332D]/5 flex items-center justify-between mt-auto">
                        <button
                          type="button"
                          onClick={() => setSelectedDish(item)}
                          className="font-sans text-xs text-[#526B4D] hover:text-[#3F533B] font-medium flex items-center gap-1 cursor-pointer"
                        >
                          <span>See details</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>

                        {isWhatsAppConfigured ? (
                          <a
                            href={getWhatsAppDishUrl(item.title)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 bg-[#25D366]/10 hover:bg-[#25D366] text-[#1E7E34] hover:text-[#FAF6ED] px-3 py-1.5 rounded-full text-xs font-medium transition-all"
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
                        ) : (
                          <button
                            type="button"
                            onClick={() => setShowContactModal(true)}
                            className="inline-flex items-center gap-1.5 bg-[#25D366]/10 hover:bg-[#25D366] text-[#1E7E34] hover:text-[#FAF6ED] px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer"
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
                          </button>
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
                {SITE_DATA.foodGallery.items
                  .filter((item) => item.category === "Homestyle Sabzi & Dal")
                  .map((item, idx) => (
                    <div
                      key={item.id}
                      className={`group bg-[#FAF6ED] rounded-3xl p-3 sm:p-4 border border-[#38332D]/10 shadow-[0_8px_30px_rgba(56,51,45,0.06)] hover:shadow-[0_16px_40px_rgba(56,51,45,0.12)] transition-all duration-300 flex flex-col justify-between h-full ${
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
                          <h3 className="font-serif text-lg sm:text-xl font-normal text-[#38332D] mb-1.5 line-clamp-2 h-[3.25rem] sm:h-[3.5rem] flex items-start">
                            {item.title}
                          </h3>
                          <p className="font-sans text-xs sm:text-sm text-[#38332D]/80 leading-relaxed line-clamp-3 min-h-[3.75rem] sm:min-h-[4rem]">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="pt-3 px-3 sm:px-4 pb-1 border-t border-[#38332D]/5 flex items-center justify-between mt-auto">
                        <button
                          type="button"
                          onClick={() => setSelectedDish(item)}
                          className="font-sans text-xs text-[#526B4D] hover:text-[#3F533B] font-medium flex items-center gap-1 cursor-pointer"
                        >
                          <span>See details</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>

                        {isWhatsAppConfigured ? (
                          <a
                            href={getWhatsAppDishUrl(item.title)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 bg-[#25D366]/10 hover:bg-[#25D366] text-[#1E7E34] hover:text-[#FAF6ED] px-3 py-1.5 rounded-full text-xs font-medium transition-all"
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
                        ) : (
                          <button
                            type="button"
                            onClick={() => setShowContactModal(true)}
                            className="inline-flex items-center gap-1.5 bg-[#25D366]/10 hover:bg-[#25D366] text-[#1E7E34] hover:text-[#FAF6ED] px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer"
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
                          </button>
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
                className={`group bg-[#FAF6ED] rounded-3xl p-3 sm:p-4 border border-[#38332D]/10 shadow-[0_8px_30px_rgba(56,51,45,0.06)] hover:shadow-[0_16px_40px_rgba(56,51,45,0.12)] transition-all duration-300 flex flex-col justify-between h-full ${
                  selectedCategory === "Thalis & Meals" && idx === 0
                    ? "lg:col-span-2"
                    : filteredItems.length === 3 && idx === 0
                    ? "sm:col-span-2 lg:col-span-1"
                    : ""
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

                  <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-start">
                    <h3 className="font-serif text-lg sm:text-xl font-normal text-[#38332D] mb-1.5 line-clamp-2 h-[3.25rem] sm:h-[3.5rem] flex items-start">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#38332D]/80 leading-relaxed line-clamp-3 min-h-[3.75rem] sm:min-h-[4rem]">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 px-3 sm:px-4 pb-1 border-t border-[#38332D]/5 flex items-center justify-between mt-auto">
                  <button
                    type="button"
                    onClick={() => setSelectedDish(item)}
                    className="font-sans text-xs text-[#526B4D] hover:text-[#3F533B] font-medium flex items-center gap-1 cursor-pointer"
                  >
                    <span>See details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  {isWhatsAppConfigured ? (
                    <a
                      href={getWhatsAppDishUrl(item.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#25D366]/10 hover:bg-[#25D366] text-[#1E7E34] hover:text-[#FAF6ED] px-3 py-1.5 rounded-full text-xs font-medium transition-all"
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
                  ) : (
                    <button
                      type="button"
                      onClick={() => setShowContactModal(true)}
                      className="inline-flex items-center gap-1.5 bg-[#25D366]/10 hover:bg-[#25D366] text-[#1E7E34] hover:text-[#FAF6ED] px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer"
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
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to action bar */}
        {/* Minimal CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#526B4D] hover:text-[#FAF6ED] bg-[#FAF6ED] hover:bg-[#526B4D] px-7 py-3 rounded-full border border-[#526B4D]/30 transition-all shadow-xs hover:shadow-sm"
          >
            <span>View Full Food Menu</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Dish Lightbox / Preview Modal */}
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

            {/* Modal Image */}
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

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-4">
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
                      href="#find-us"
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

      {/* Helpful Informational Modal for unconfigured WhatsApp */}
      {showContactModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowContactModal(false);
          }}
        >
          <div className="bg-[#FAF6ED] rounded-3xl p-6 sm:p-8 max-w-md w-full border border-[#38332D]/15 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 my-auto">
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
              <h3
                id="contact-modal-title"
                className="font-serif text-xl font-medium text-[#38332D]"
              >
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
