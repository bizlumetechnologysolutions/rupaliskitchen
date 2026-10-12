import React from "react";
import Image from "next/image";
import { HeartHandshake, Quote } from "lucide-react";
import { SITE_DATA } from "@/lib/site-data";

export default function Story() {
  return (
    <section
      id="story"
      className="py-16 sm:py-24 lg:py-28 bg-[#EAE0D0]/30 border-y border-[#38332D]/5"
      aria-label="About Rupali's Kitchen owners"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              {/* Decorative warm frame */}
              <div
                className="absolute -inset-3 sm:-inset-4 bg-[#FAF6ED] rounded-3xl sm:rounded-[36px] rotate-1 shadow-sm border border-[#38332D]/5"
                aria-hidden="true"
              />

              <div className="relative bg-[#FAF6ED] p-2.5 sm:p-3 rounded-2xl sm:rounded-[32px] shadow-[0_12px_36px_-6px_rgba(56,51,45,0.09)] border border-[#38332D]/10 overflow-hidden">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-xl sm:rounded-[24px]">
                  <Image
                    src={SITE_DATA.assets.ownersKitchen}
                    alt="The couple behind Rupali's Kitchen smiling together in their home-style kitchen"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover object-center"
                  />
                </div>

                {/* Caption / subtle badge */}
                <div className="p-3 text-center sm:text-left flex items-center justify-between">
                  <span className="font-serif text-sm font-medium text-[#526B4D]">
                    Rupali&apos;s Kitchen
                  </span>
                  <span className="text-xs text-[#38332D]/60 font-sans">
                    Everyday homestyle cooking
                  </span>
                </div>
              </div>

              {/* Terracotta Accent Corner Badge */}
              <div
                className="absolute -bottom-4 -left-2 sm:-bottom-5 sm:-left-3 bg-[#C87958] text-[#FAF6ED] px-4 py-2 rounded-2xl shadow-md flex items-center gap-2"
                aria-hidden="true"
              >
                <HeartHandshake className="w-4 h-4" />
                <span className="font-sans text-xs font-semibold tracking-wide uppercase">
                  Made With Care
                </span>
              </div>
            </div>
          </div>

          {/* Story Content Column */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col space-y-6 lg:pl-4">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
