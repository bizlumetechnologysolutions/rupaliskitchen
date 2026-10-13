import React from "react";
import { Star, ArrowUpRight, Heart } from "lucide-react";
import { SITE_DATA } from "@/lib/site-data";

export default function CustomerMoment() {
  const { googleReviews } = SITE_DATA;

  return (
    <section
      id="community"
      className="py-16 sm:py-24 bg-[#FAF6ED]"
      aria-label="Google customer reviews and shared moments"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EAE0D0]/40 rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#38332D]/10 relative overflow-hidden">
          {/* Background ambient accents */}
          <div
            className="absolute -top-12 -right-12 w-64 h-64 bg-[#C87958]/10 rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#38332D]/10">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#526B4D] uppercase">
                <Star className="w-4 h-4 text-[#C87958] fill-[#C87958]" />
                <span>4.9 RATING • 107 GOOGLE REVIEWS</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#38332D] tracking-tight">
                Loved by neighbours across Pune.
              </h2>

              <p className="font-sans text-base sm:text-lg text-[#38332D]/80 leading-relaxed">
                From college students and working professionals to local families, here is what our guests share about dining at Rupali&apos;s Kitchen.
              </p>
            </div>

            <div className="flex-shrink-0">
              <a
                href={googleReviews.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FAF6ED] hover:bg-[#FAF6ED]/80 text-[#526B4D] border border-[#526B4D]/25 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all shadow-xs"
              >
                <span>View all 107 Google Reviews</span>
                <ArrowUpRight className="w-4 h-4 text-[#526B4D]" />
              </a>
            </div>
          </div>

          {/* Customer Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
            {googleReviews.items.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="bg-[#FAF6ED] rounded-2xl p-6 border border-[#38332D]/10 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Stars */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#C87958]" aria-label="5 stars">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#C87958]" />
                      ))}
                    </div>
                    {review.tag && (
                      <span className="text-[11px] font-medium text-[#526B4D] bg-[#526B4D]/10 px-2.5 py-0.5 rounded-full">
                        {review.tag}
                      </span>
                    )}
                  </div>

                  {/* Review Text */}
                  <p className="font-sans text-sm text-[#38332D]/85 leading-relaxed italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                {/* Author attribution */}
                <div className="pt-4 mt-4 border-t border-[#38332D]/5 flex items-center justify-between">
                  <div>
                    <p className="font-serif text-sm font-semibold text-[#38332D]">
                      {review.name}
                    </p>
                    {review.role && (
                      <p className="font-sans text-[11px] text-[#38332D]/60">
                        {review.role}
                      </p>
                    )}
                  </div>
                  <span className="text-[11px] text-[#38332D]/50 font-sans">
                    Google Maps
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Warm closing tag */}
          <div className="pt-8 text-center">
            <p className="font-handwriting text-xl text-[#C87958] flex items-center justify-center gap-1.5">
              <span>A little kitchen with a whole lot of heart.</span>
              <Heart className="w-4 h-4 fill-[#C87958]/30" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
