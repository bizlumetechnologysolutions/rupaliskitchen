import React from "react";
import Image from "next/image";
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
      className="py-16 sm:py-24 lg:py-32 bg-[#EAE0D0]/30 border-t border-[#38332D]/5"
      aria-label="Find Rupali's Kitchen location and details"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Storefront Photograph */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Paper background backing */}
              <div
                className="absolute -inset-3 bg-[#FAF6ED] rounded-3xl -rotate-1 shadow-sm border border-[#38332D]/5"
                aria-hidden="true"
              />

              <div className="relative bg-[#FAF6ED] p-3 sm:p-4 rounded-2xl sm:rounded-3xl shadow-[0_12px_36px_-6px_rgba(56,51,45,0.08)] border border-[#38332D]/10 overflow-hidden">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-[#EAE0D0]">
                  <Image
                    src={SITE_DATA.assets.storefront}
                    alt="Rupali's Kitchen storefront cafe with signboard and welcoming colourful seating"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover object-center"
                  />
                </div>

                <div className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-t border-[#38332D]/5 mt-2">
                  <div className="flex items-center gap-2">
                    <Store className="w-4 h-4 text-[#526B4D]" />
                    <span className="font-serif text-sm font-semibold text-[#526B4D]">
                      Rupali&apos;s Kitchen Storefront
                    </span>
                  </div>
                  <span className="text-xs text-[#38332D]/70 font-sans">
                    Nashta • Meal • Snacks
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Information Blocks */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#C87958] uppercase mb-2">
                <span className="w-6 h-[2px] bg-[#C87958]" />
                <span>{location.eyebrow}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#38332D]">
                {location.headline}
              </h2>

              <p className="font-sans text-base sm:text-lg text-[#38332D]/80 leading-relaxed mt-3">
                {location.copy}
              </p>
            </div>

            {/* Service badges (Verified from storefront photo) */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF6ED] text-[#526B4D] border border-[#526B4D]/20 text-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#526B4D]" />
                Dine-in Seating
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF6ED] text-[#526B4D] border border-[#526B4D]/20 text-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#526B4D]" />
                Takeaway / Tiffin
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF6ED] text-[#526B4D] border border-[#526B4D]/20 text-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#526B4D]" />
                Fresh Daily Preparation
              </span>
            </div>

            {/* Info Cards Grid */}
            <div className="space-y-4 pt-2">
              {/* Address Block */}
              <div className="bg-[#FAF6ED] p-5 rounded-2xl border border-[#38332D]/8 shadow-xs flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#EAE0D0]/60 text-[#526B4D] flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-[#38332D]">
                    Location &amp; Neighbourhood
                  </h3>
                  {info.isAddressVerified && info.address ? (
                    <p className="font-sans text-sm text-[#38332D]/80 mt-1 leading-relaxed">
                      {info.address}
                    </p>
                  ) : (
                    <p className="font-sans text-sm text-[#38332D]/75 mt-1 leading-relaxed">
                      {info.addressNote || "Walk-in neighbourhood cafe counter. Address confirmation pending official launch."}
                    </p>
                  )}
                </div>
              </div>

              {/* Hours Block */}
              <div className="bg-[#FAF6ED] p-5 rounded-2xl border border-[#38332D]/8 shadow-xs flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#EAE0D0]/60 text-[#526B4D] flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-[#38332D]">
                    Kitchen Timings
                  </h3>
                  {info.isOpenHoursVerified && info.openingHours ? (
                    <div className="space-y-1 mt-1 text-sm text-[#38332D]/80">
                      {info.openingHours.map((h, i) => (
                        <div key={i} className="flex justify-between gap-4">
                          <span>{h.days}</span>
                          <span className="font-medium">{h.timings}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="font-sans text-sm text-[#38332D]/75 mt-1 leading-relaxed">
                      Serving fresh morning nashta and everyday afternoon thali meals. Detailed weekly timings will be announced upon launch.
                    </p>
                  )}
                </div>
              </div>

              {/* Verified Contact or Pending Notice */}
              {(info.isPhoneVerified && info.phoneNumber) ||
              (info.isWhatsAppVerified && info.whatsAppNumber) ? (
                <div className="bg-[#FAF6ED] p-5 rounded-2xl border border-[#38332D]/8 shadow-xs flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-[#EAE0D0]/60 text-[#C87958] flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-[#38332D]">
                      Contact Details
                    </h3>
                    <div className="flex flex-wrap gap-4 mt-1 text-sm">
                      {info.isPhoneVerified && info.phoneNumber && (
                        <a
                          href={`tel:${info.phoneNumber}`}
                          className="text-[#526B4D] hover:underline flex items-center gap-1.5"
                        >
                          <Phone className="w-4 h-4" />
                          <span>{info.phoneDisplay || info.phoneNumber}</span>
                        </a>
                      )}
                      {info.isWhatsAppVerified && info.whatsAppNumber && (
                        <a
                          href={`https://wa.me/${info.whatsAppNumber}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#526B4D] hover:underline flex items-center gap-1.5"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>WhatsApp</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            {/* Directions Action */}
            <div className="pt-2">
              {info.isGoogleMapsVerified && info.googleMapsUrl ? (
                <a
                  href={info.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#526B4D] hover:bg-[#3F533B] text-[#FAF6ED] px-7 py-3.5 rounded-full text-base font-medium shadow-sm hover:shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#526B4D]"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 text-xs text-[#38332D]/60 bg-[#FAF6ED] px-4 py-2.5 rounded-xl border border-[#38332D]/10">
                  <MapPin className="w-4 h-4 text-[#C87958]" />
                  <span>
                    Verified Google Maps location will be linked upon owner confirmation.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
