import React from "react";
import Image from "next/image";

interface BrandBannerProps {
  className?: string;
}

export default function BrandBanner({ className = "" }: BrandBannerProps) {
  return (
    <section
      className={`py-6 sm:py-10 bg-[#FAF6ED] ${className}`}
      aria-label="Rupali's Kitchen — A little taste of home"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#38332D]/10 shadow-[0_12px_40px_rgba(56,51,45,0.08)] bg-[#FAF6ED] group">
          <div className="relative aspect-[16/9] w-full bg-[#FAF6ED]">
            <Image
              src="/images/rupalis-kitchen/og.jpg"
              alt="Rupali's Kitchen — A Little Taste of Home | Homemade • Heartfelt • Everyday"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 1200px"
              priority
              className="object-cover object-center group-hover:scale-[1.01] transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
