import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeartHandshake, Quote, ArrowRight } from "lucide-react";
import { SITE_DATA } from "@/lib/site-data";

export default function Story() {
  return (
    <section
      id="story"
      className="py-14 sm:py-20 lg:py-24 bg-[#EAE0D0]/30 border-y border-[#38332D]/5"
      aria-label="About Rupali's Kitchen owners"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Image Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative warm frame */}
              <div
                className="absolute -inset-2.5 sm:-inset-3 bg-[#FAF6ED] rounded-2xl sm:rounded-3xl rotate-1 shadow-xs border border-[#38332D]/5"
                aria-hidden="true"
              />

              <div className="relative bg-[#FAF6ED] p-2.5 sm:p-3 rounded-2xl sm:rounded-3xl shadow-[0_8px_30px_rgba(56,51,45,0.08)] border border-[#38332D]/10 overflow-hidden">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-xl sm:rounded-2xl">
                  <Image
                    src={SITE_DATA.assets.ownersKitchen}
                    alt="Rupali and Shankar smiling together in their kitchen"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 42vw, 480px"
                    className="object-cover object-center"
                  />
                </div>

                {/* Caption / subtle badge */}
                <div className="px-3 py-2.5 sm:px-4 sm:py-3 flex items-center justify-between border-t border-[#38332D]/5 mt-1.5">
                  <span className="font-serif text-sm font-semibold text-[#526B4D]">
                    Rupali &amp; Shankar
                  </span>
                  <span className="text-xs text-[#38332D]/60 font-sans">
                    Rupali&apos;s Kitchen
                  </span>
                </div>
              </div>

              {/* Terracotta Accent Corner Badge */}
              <div
                className="absolute -bottom-3.5 -left-2 sm:-bottom-4 sm:-left-3 bg-[#C87958] text-[#FAF6ED] px-3.5 py-1.5 rounded-2xl shadow-md flex items-center gap-1.5"
                aria-hidden="true"
              >
                <HeartHandshake className="w-3.5 h-3.5" />
                <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-wide uppercase">
                  Made With Care
                </span>
              </div>
            </div>
          </div>

          {/* Story Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col space-y-5 lg:pl-2">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#C87958] uppercase">
              <span className="w-6 h-[2px] bg-[#C87958]" />
              <span>{SITE_DATA.story.eyebrow}</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#38332D] leading-[1.18]">
              {SITE_DATA.story.headline}
            </h2>

            {/* Story Paragraphs */}
            <div className="space-y-4 font-sans text-base sm:text-lg text-[#38332D]/85 leading-relaxed">
              {SITE_DATA.story.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Pull Quote */}
            <div className="pt-4 border-t border-[#38332D]/10">
              <div className="flex items-start gap-3 bg-[#FAF6ED] p-5 sm:p-6 rounded-2xl border border-[#38332D]/5 shadow-sm">
                <Quote className="w-7 h-7 text-[#C87958] flex-shrink-0 mt-0.5 rotate-180" />
                <div>
                  <p className="font-handwriting text-2xl sm:text-3xl text-[#526B4D] leading-tight">
                    &ldquo;{SITE_DATA.story.pullQuote}&rdquo;
                  </p>
                  <p className="font-sans text-xs text-[#38332D]/60 mt-1.5 font-medium tracking-wide">
                    — From our kitchen to your plate
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-1">
                <Link
                  href="/story"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#526B4D] hover:text-[#3F533B] hover:translate-x-0.5 transition-all"
                >
                  <span>Read our journey &amp; why we started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
