import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Navigation,
  CheckCircle2,
  Store,
} from "lucide-react";
import { SITE_DATA } from "@/lib/site-data";

export default function FindUs() {
  const { location } = SITE_DATA;
  const info = location.info;

  return (
    <section
      id="find-us"
      className="py-14 sm:py-20 lg:py-24 bg-[#EAE0D0]/30 border-t border-[#38332D]/5"
      aria-label="Find Rupali's Kitchen location and details"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Storefront Photograph (Properly sized col-span-5) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Paper backing accent */}
              <div
                className="absolute -inset-2.5 sm:-inset-3 bg-[#FAF6ED] rounded-2xl sm:rounded-3xl -rotate-1 shadow-xs border border-[#38332D]/5"
                aria-hidden="true"
              />

              <div className="relative bg-[#FAF6ED] p-2.5 sm:p-3 rounded-2xl sm:rounded-3xl shadow-[0_8px_30px_rgba(56,51,45,0.08)] border border-[#38332D]/10 overflow-hidden">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-[#EAE0D0]">
                  <Image
                    src={SITE_DATA.assets.storefront}
                    alt="Rupali's Kitchen storefront cafe with signboard and welcoming seating in Ambegaon Budruk, Pune"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 42vw, 480px"
                    className="object-cover object-center hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                <div className="px-3 py-2.5 sm:px-4 sm:py-3 flex items-center justify-between gap-2 border-t border-[#38332D]/5 mt-1.5">
                  <div className="flex items-center gap-2">
                    <Store className="w-4 h-4 text-[#526B4D]" />
                    <span className="font-serif text-xs sm:text-sm font-semibold text-[#526B4D]">
                      Rupali&apos;s Kitchen Storefront
                    </span>
                  </div>
                  <span className="text-[11px] sm:text-xs text-[#38332D]/70 font-sans font-medium">
                    Lunch • Dinner • Homestyle Meals
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Information Blocks (col-span-7) */}
          <div className="lg:col-span-7 flex flex-col space-y-5">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#C87958] uppercase mb-1.5">
                <span className="w-6 h-[2px] bg-[#C87958]" />
                <span>{location.eyebrow}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-4xl font-normal text-[#38332D] tracking-tight leading-tight">
                {location.headline}
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#38332D]/80 leading-relaxed mt-2 max-w-xl">
                {location.copy}
              </p>
            </div>

            {/* Service badges */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6ED] text-[#526B4D] border border-[#526B4D]/20 text-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#526B4D]" />
                Dine-in Seating
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6ED] text-[#526B4D] border border-[#526B4D]/20 text-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#526B4D]" />
                Takeaway / Tiffin
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6ED] text-[#526B4D] border border-[#526B4D]/20 text-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#526B4D]" />
                Fresh Daily Preparation
              </span>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {/* Address Block - spans full width on sm */}
              <div className="sm:col-span-2 bg-[#FAF6ED] p-4 sm:p-4.5 rounded-2xl border border-[#38332D]/8 shadow-xs flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-[#EAE0D0]/60 text-[#526B4D] flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-sm font-semibold text-[#38332D]">
                    Location &amp; Neighbourhood
                  </h3>
                  {info.isAddressVerified && info.address ? (
                    <p className="font-sans text-xs sm:text-sm text-[#38332D]/80 mt-1 leading-relaxed">
                      {info.address}
                    </p>
                  ) : (
                    <p className="font-sans text-xs sm:text-sm text-[#38332D]/75 mt-1 leading-relaxed">
                      {info.addressNote || "Walk-in neighbourhood cafe counter. Ambegaon Budruk, Pune."}
                    </p>
                  )}
                </div>
              </div>

              {/* Hours Block */}
              <div className="bg-[#FAF6ED] p-4 rounded-2xl border border-[#38332D]/8 shadow-xs flex items-start gap-3.5 h-full">
                <div className="p-2 rounded-xl bg-[#EAE0D0]/60 text-[#526B4D] flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-sm font-semibold text-[#38332D]">
                    Kitchen Timings
                  </h3>
                  {info.isOpenHoursVerified && info.openingHours ? (
                    <div className="mt-1 text-xs sm:text-sm text-[#38332D]/80 space-y-0.5">
                      {info.openingHours.map((h, i) => (
                        <div key={i}>
                          <span className="font-medium text-[#526B4D]">{h.days}:</span>{" "}
                          <span>{h.timings}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="font-sans text-xs sm:text-sm text-[#38332D]/75 mt-1 leading-relaxed">
                      Serving homestyle lunch and dinner thali meals.
                    </p>
                  )}
                </div>
              </div>

              {/* Verified Contact Details Block */}
              {(info.isPhoneVerified && info.phoneNumber) ||
              (info.isWhatsAppVerified && info.whatsAppNumber) ? (
                <div className="bg-[#FAF6ED] p-4 rounded-2xl border border-[#38332D]/8 shadow-xs flex items-start gap-3.5 h-full">
                  <div className="p-2 rounded-xl bg-[#EAE0D0]/60 text-[#C87958] flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-sm font-semibold text-[#38332D]">
                      Contact Details
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      {info.isPhoneVerified && info.phoneNumber && (
                        <a
                          href={`tel:${info.phoneNumber}`}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#526B4D] hover:text-[#3F533B] bg-[#EAE0D0]/50 hover:bg-[#EAE0D0] px-2.5 py-1 rounded-full transition-colors"
                        >
                          <Phone className="w-3 h-3" />
                          <span>{info.phoneDisplay || info.phoneNumber}</span>
                        </a>
                      )}
                      {info.isWhatsAppVerified && info.whatsAppNumber && (
                        <a
                          href={`https://wa.me/${info.whatsAppNumber}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E7E34] hover:text-[#155724] bg-[#25D366]/15 hover:bg-[#25D366]/25 px-2.5 py-1 rounded-full transition-colors"
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
                          <span>WhatsApp</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            {/* Directions Action */}
            <div className="pt-1 flex flex-wrap items-center gap-3">
              {info.isGoogleMapsVerified && info.googleMapsUrl ? (
                <a
                  href={info.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#526B4D] hover:bg-[#3F533B] text-[#FAF6ED] px-6 py-3 rounded-full text-sm sm:text-base font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#526B4D]"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 text-xs text-[#38332D]/60 bg-[#FAF6ED] px-4 py-2 rounded-xl border border-[#38332D]/10">
                  <MapPin className="w-4 h-4 text-[#C87958]" />
                  <span>Verified Google Maps location available upon request.</span>
                </div>
              )}

              <Link
                href="/find-us"
                className="inline-flex items-center justify-center gap-2 bg-[#FAF6ED] hover:bg-[#FAF6ED]/80 text-[#526B4D] border border-[#526B4D]/30 px-5 py-3 rounded-full text-sm sm:text-base font-medium transition-all"
              >
                <span>Full Location Guide</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
