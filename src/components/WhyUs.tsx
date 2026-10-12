import React from "react";
import { Utensils, Heart, Store } from "lucide-react";
import { SITE_DATA } from "@/lib/site-data";

export default function WhyUs() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "EverydayComfort":
        return <Utensils className="w-6 h-6 text-[#526B4D]" />;
      case "MadeWithCare":
        return <Heart className="w-6 h-6 text-[#C87958]" />;
      case "NeighbourhoodKitchen":
        return <Store className="w-6 h-6 text-[#526B4D]" />;
      default:
        return <Utensils className="w-6 h-6 text-[#526B4D]" />;
    }
  };

  return (
    <section
      id="why-us"
      className="py-16 sm:py-24 bg-[#EAE0D0]/40 border-t border-[#38332D]/5"
      aria-label="Why people choose Rupali's Kitchen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#C87958] uppercase">
            <span className="w-6 h-[2px] bg-[#C87958]" />
            <span>OUR PHILOSOPHY</span>
            <span className="w-6 h-[2px] bg-[#C87958]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#38332D]">
            Simple food. Thoughtfully made.
          </h2>
        </div>

        {/* 3-Column Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SITE_DATA.values.map((item, index) => (
            <div
              key={item.id}
              className="bg-[#FAF6ED] rounded-3xl p-8 border border-[#38332D]/8 shadow-[0_4px_20px_-2px_rgba(56,51,45,0.04)] hover:shadow-[0_8px_30px_rgba(56,51,45,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-start relative group"
            >
              {/* Subtle card accent */}
              <div
                className="w-12 h-12 rounded-2xl bg-[#EAE0D0]/70 flex items-center justify-center mb-6 border border-[#38332D]/5 group-hover:scale-105 transition-transform"
                aria-hidden="true"
              >
                {getIcon(item.iconName)}
              </div>

              <span className="text-xs font-mono font-medium text-[#C87958] mb-2">
                0{index + 1}
              </span>

              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#38332D] mb-3">
                {item.title}
              </h3>

              <p className="font-sans text-sm sm:text-base text-[#38332D]/75 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
