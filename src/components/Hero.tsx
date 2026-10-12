import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import { SITE_DATA } from "@/lib/site-data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-32 bg-[#FAF6ED]"
      aria-label="Welcome to Rupali's Kitchen"
    >
      {/* Subtle organic background elements */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#EAE0D0]/40 rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-80 h-80 bg-[#C87958]/5 rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Story & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8 pr-0 lg:pr-8">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE0D0] text-[#526B4D] border border-[#526B4D]/15 text-xs sm:text-sm font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#C87958]" />
              <span>{SITE_DATA.brand.heroEyebrow}</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#38332D] tracking-tight leading-[1.12]">
              Door ghar se ho?{" "}
              <span className="italic text-[#526B4D] font-medium block sm:inline">
                Khane mein nahi.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="font-sans text-lg sm:text-xl text-[#38332D]/85 leading-relaxed max-w-2xl font-normal">
              {SITE_DATA.brand.heroSupporting}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <Link
                href="#food"
                className="inline-flex items-center justify-center gap-2.5 bg-[#526B4D] hover:bg-[#3F533B] text-[#FAF6ED] px-7 py-4 rounded-full text-base font-medium shadow-[0_4px_14px_rgba(82,107,77,0.25)] hover:shadow-[0_6px_20px_rgba(82,107,77,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#526B4D]"
              >
                <span>Discover Our Kitchen</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#story"
                className="inline-flex items-center justify-center gap-2 bg-[#FAF6ED] hover:bg-[#EAE0D0]/60 text-[#38332D] border border-[#38332D]/20 hover:border-[#38332D]/40 px-7 py-4 rounded-full text-base font-medium transition-all text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#526B4D]"
              >
                <span>Meet Rupali&apos;s Kitchen</span>
              </Link>
            </div>

            {/* Supporting Subline */}
            <div className="pt-2 flex items-center gap-2 text-sm text-[#38332D]/75">
              <Heart className="w-4 h-4 text-[#C87958] fill-[#C87958]/30" />
              <span className="font-handwriting text-lg text-[#C87958] tracking-wide">
                {SITE_DATA.brand.heroSmallSupporting}
              </span>
            </div>
          </div>

          {/* Right Column: Hero Thali Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Paper-like matting backdrop */}
              <div
                className="absolute -inset-3 sm:-inset-4 bg-[#EAE0D0] rounded-3xl sm:rounded-[36px] -rotate-1.5 transition-transform duration-500 shadow-sm"
                aria-hidden="true"
              />

              {/* Main photograph container */}
              <div className="relative bg-[#FAF6ED] p-2.5 sm:p-3 rounded-2xl sm:rounded-[32px] shadow-[0_12px_40px_-8px_rgba(56,51,45,0.12)] border border-[#38332D]/10 overflow-hidden group">
                <div className="relative aspect-[4/3.6] sm:aspect-square w-full overflow-hidden rounded-xl sm:rounded-[24px]">
                  <Image
                    src={SITE_DATA.assets.thaliFeast}
                    alt="Authentic Indian Thali feast with fresh rotis, rice, dal, sabzi, papad, and pickle prepared by Rupali's Kitchen"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Refined authentic badge */}
                <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 bg-[#FAF6ED]/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#38332D]/10 shadow-[0_4px_16px_rgba(56,51,45,0.08)] max-w-[240px]">
                  <p className="font-serif text-xs font-semibold text-[#526B4D]">
                    Everyday Indian Thali
                  </p>
                  <p className="font-sans text-[11px] text-[#38332D]/75 leading-tight mt-0.5">
                    Fresh rotis, dal, sabzi &amp; steamed rice, cooked daily.
                  </p>
                </div>
              </div>

              {/* Terracotta leaf accent pin */}
              <div
                className="hidden sm:flex absolute -top-3 -right-3 w-10 h-10 bg-[#C87958] text-[#FAF6ED] rounded-full items-center justify-center shadow-md rotate-12"
                aria-hidden="true"
              >
                <span className="font-serif text-xs font-bold">स्वाद</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
