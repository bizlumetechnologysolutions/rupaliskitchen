import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Phone,
  Navigation,
  CheckCircle2,
  Store,
  UtensilsCrossed,
  ArrowRight,
  Share2,
  Car,
  Footprints,
} from "lucide-react";
import { SITE_DATA, getRestaurantSchema } from "@/lib/site-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Find Us in Ambegaon Budruk | Location, Timings & Directions",
  description:
    "Visit Rupali's Kitchen on Ambegaon Pathar Road, opposite Torna Sankul, near Chintamani Prime English School, Pune. Dine-in, takeaway & tiffin services.",
  alternates: {
    canonical: "/find-us",
  },
  openGraph: {
    title: "Find Rupali's Kitchen in Ambegaon Budruk, Pune",
    description:
      "Opposite Torna Sankul on Ambegaon Pathar Road. Serving fresh homestyle lunch and dinner daily.",
    url: `${SITE_DATA.seo.baseUrl}/find-us`,
    images: [
      {
        url: SITE_DATA.assets.storefront,
        width: 1200,
        height: 900,
        alt: "Rupali's Kitchen storefront in Ambegaon Budruk, Pune",
      },
    ],
  },
};

export default function FindUsPage() {
  const { location } = SITE_DATA;
  const info = location.info;
  const jsonLd = getRestaurantSchema();

  const featuredDishes = SITE_DATA.foodGallery.items.slice(0, 3);

  return (
    <>
      <Navbar />

      <main id="main-content" className="flex-1 bg-[#FAF6ED]">
        {/* Page Header */}
        <section className="pt-10 pb-12 sm:pt-14 sm:pb-16 bg-[#EAE0D0]/30 border-b border-[#38332D]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#C87958] uppercase mb-2">
                <span className="w-6 h-[2px] bg-[#C87958]" />
                <span>LOCAL DISCOVERY &amp; LOCATION</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#38332D] tracking-tight">
                Come Find Rupali&apos;s Kitchen
              </h1>
              <p className="font-sans text-base sm:text-lg text-[#38332D]/80 mt-3 leading-relaxed">
                Your friendly neighbourhood food counter in Ambegaon Budruk. Hot homestyle meals, wholesome thalis, and daily tiffins prepared fresh daily by Rupali and Shankar.
              </p>

              <div className="pt-3">
                <a
                  href={SITE_DATA.googleReviews.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6ED] text-[#38332D] border border-[#38332D]/15 text-xs font-medium hover:border-[#526B4D] transition-colors shadow-xs"
                >
                  <span className="text-[#C87958]">★</span>
                  <span className="font-semibold text-[#526B4D]">4.9 Rating</span>
                  <span className="text-[#38332D]/70">(107 Reviews on Google Maps)</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Core Discovery Grid */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Authentic Storefront & Quick Overview */}
              <div className="lg:col-span-5 space-y-6">
                <div className="relative bg-[#FAF6ED] p-3 rounded-3xl shadow-[0_8px_30px_rgba(56,51,45,0.08)] border border-[#38332D]/10 overflow-hidden">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#EAE0D0]">
                    <Image
                      src={SITE_DATA.assets.storefront}
                      alt="Rupali's Kitchen storefront cafe on Ambegaon Pathar Road, Pune"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 42vw, 500px"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="p-4 flex items-center justify-between border-t border-[#38332D]/5 mt-2">
                    <div className="flex items-center gap-2">
                      <Store className="w-4 h-4 text-[#526B4D]" />
                      <span className="font-serif text-sm font-semibold text-[#526B4D]">
                        Storefront &amp; Seating
                      </span>
                    </div>
                    <span className="text-xs text-[#38332D]/70 font-sans font-medium">
                      Ambegaon Budruk, Pune
                    </span>
                  </div>
                </div>

                {/* Service Options */}
                <div className="bg-[#FAF6ED] p-5 sm:p-6 rounded-3xl border border-[#38332D]/10 shadow-xs space-y-3.5">
                  <h3 className="font-serif text-base font-semibold text-[#38332D]">
                    Available Services
                  </h3>
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-3 text-sm text-[#38332D]/85">
                      <CheckCircle2 className="w-4 h-4 text-[#526B4D] flex-shrink-0" />
                      <span><strong>Dine-In:</strong> Comfortable, clean neighbourhood seating</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#38332D]/85">
                      <CheckCircle2 className="w-4 h-4 text-[#526B4D] flex-shrink-0" />
                      <span><strong>Takeaway:</strong> Fast parcel service packed hot for home</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#38332D]/85">
                      <CheckCircle2 className="w-4 h-4 text-[#526B4D] flex-shrink-0" />
                      <span><strong>Daily Tiffin:</strong> Wholesome lunch and dinner tiffin for students &amp; professionals</span>
                    </div>
                  </div>
                </div>

                {/* Landmark wayfinding card */}
                <div className="bg-[#EAE0D0]/50 p-5 sm:p-6 rounded-3xl border border-[#38332D]/10 space-y-3">
                  <div className="flex items-center gap-2 text-[#526B4D] font-serif text-sm font-semibold">
                    <Footprints className="w-4 h-4" />
                    <span>How to Reach Us</span>
                  </div>
                  <ul className="text-xs sm:text-sm text-[#38332D]/80 space-y-2 list-disc list-inside">
                    <li>Directly opposite <strong>Torna Sankul</strong> building.</li>
                    <li>2-minute walk from <strong>Chintamani Prime English School</strong>.</li>
                    <li>Easily accessible from Katraj-Dehu Road bypass &amp; Sinhgad College road.</li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Address, Map, Timings & Actions */}
              <div className="lg:col-span-7 space-y-6">
                {/* Action Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {info.isGoogleMapsVerified && info.googleMapsUrl && (
                    <a
                      href={info.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#526B4D] hover:bg-[#3F533B] text-[#FAF6ED] px-4 py-3 rounded-2xl text-sm font-medium transition-all shadow-sm hover:shadow-md"
                    >
                      <Navigation className="w-4 h-4" />
                      <span>Directions</span>
                    </a>
                  )}

                  {info.isPhoneVerified && info.phoneNumber && (
                    <a
                      href={`tel:${info.phoneNumber}`}
                      className="inline-flex items-center justify-center gap-2 bg-[#FAF6ED] hover:bg-[#EAE0D0] text-[#38332D] border border-[#38332D]/15 px-4 py-3 rounded-2xl text-sm font-medium transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#C87958]" />
                      <span>Call Kitchen</span>
                    </a>
                  )}

                  <Link
                    href="/menu"
                    className="inline-flex items-center justify-center gap-2 bg-[#FAF6ED] hover:bg-[#EAE0D0] text-[#38332D] border border-[#38332D]/15 px-4 py-3 rounded-2xl text-sm font-medium transition-colors"
                  >
                    <UtensilsCrossed className="w-4 h-4 text-[#526B4D]" />
                    <span>View Menu</span>
                  </Link>
                </div>

                {/* Address Card */}
                <div className="bg-[#FAF6ED] p-6 rounded-3xl border border-[#38332D]/10 shadow-xs space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-[#EAE0D0]/70 text-[#526B4D] flex-shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="font-serif text-lg font-semibold text-[#38332D]">
                        Kitchen Address
                      </h2>
                      <p className="font-sans text-sm sm:text-base text-[#38332D]/85 mt-1 leading-relaxed">
                        {info.address}
                      </p>
                      <p className="font-sans text-xs text-[#526B4D] mt-2 font-medium">
                        Landmark: {info.addressNote}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timings Card & WhatsApp Enquiry */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#FAF6ED] p-5 sm:p-6 rounded-3xl border border-[#38332D]/10 shadow-xs space-y-3">
                    <div className="flex items-center gap-2.5 text-[#526B4D]">
                      <Clock className="w-4 h-4" />
                      <h3 className="font-serif text-base font-semibold text-[#38332D]">
                        Kitchen Timings
                      </h3>
                    </div>
                    <div className="text-xs sm:text-sm text-[#38332D]/85 space-y-1">
                      {info.openingHours?.map((h, i) => (
                        <div key={i} className="flex justify-between py-1 border-b border-[#38332D]/5">
                          <span className="font-medium text-[#526B4D]">{h.days}</span>
                          <span>{h.timings}</span>
                        </div>
                      ))}
                      <p className="text-[11px] text-[#38332D]/60 pt-1">
                        Fresh batch prepared before lunch and dinner service daily.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#FAF6ED] p-5 sm:p-6 rounded-3xl border border-[#38332D]/10 shadow-xs space-y-3 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2.5 text-[#25D366]">
                        <div className="relative w-4 h-4 flex-shrink-0">
                          <Image
                            src={SITE_DATA.assets.whatsappIcon}
                            alt="WhatsApp"
                            fill
                            sizes="16px"
                            className="object-contain"
                          />
                        </div>
                        <h3 className="font-serif text-base font-semibold text-[#38332D]">
                          WhatsApp Orders
                        </h3>
                      </div>
                      <p className="text-xs text-[#38332D]/75 mt-2 leading-relaxed">
                        Ask today&apos;s sabzi, reserve a thali, or inquire about daily student and PG monthly tiffin rates.
                      </p>
                    </div>

                    {info.isWhatsAppVerified && info.whatsAppNumber && (
                      <a
                        href={`https://wa.me/${info.whatsAppNumber}?text=${encodeURIComponent(
                          "Hello Rupali's Kitchen, I would like to know about today's meals / tiffin service."
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-4 py-2.5 rounded-full text-xs font-semibold transition-all mt-2"
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
                        <span>Message on WhatsApp</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Google Maps Visual Embed / Direct Card */}
                <div className="bg-[#FAF6ED] p-6 rounded-3xl border border-[#38332D]/10 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-[#C87958]" />
                      <h3 className="font-serif text-base font-semibold text-[#38332D]">
                        Google Maps &amp; Navigation
                      </h3>
                    </div>
                    <span className="text-xs text-[#526B4D] font-medium">Verified Location</span>
                  </div>

                  <div className="p-4 bg-[#EAE0D0]/40 rounded-2xl border border-[#38332D]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <p className="font-serif text-sm font-medium text-[#38332D]">
                        Rupali&apos;s Kitchen • Ambegaon Budruk
                      </p>
                      <p className="font-sans text-xs text-[#38332D]/70 mt-0.5">
                        Open in Google Maps for live driving, walking, or transit directions.
                      </p>
                    </div>
                    {info.googleMapsUrl && (
                      <a
                        href={info.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-[#526B4D] hover:bg-[#3F533B] text-[#FAF6ED] px-4 py-2 rounded-full text-xs font-medium transition-all flex-shrink-0"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Open Maps</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Clusters & 100 Pockets Directory */}
        <section className="py-12 sm:py-16 bg-[#FAF6ED] border-t border-[#38332D]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#C87958] uppercase mb-2">
                <MapPin className="w-4 h-4 text-[#C87958]" />
                <span>COVERAGE &amp; LOCAL DISCOVERY</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#38332D]">
                Neighbourhoods &amp; Areas We Serve
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#38332D]/80 mt-2 leading-relaxed">
                Whether you live nearby in Ambegaon, attend lectures in Bharati Vidyapeeth or Sinhgad Narhe, or work along Sinhagad Road and Satara Road, Rupali&apos;s Kitchen is your neighbourhood source for honest home-cooked food.
              </p>
            </div>

            <div className="space-y-6">
              {SITE_DATA.serviceClusters?.map((cluster) => (
                <div
                  key={cluster.id}
                  className="bg-[#EAE0D0]/30 rounded-3xl p-6 sm:p-8 border border-[#38332D]/10 shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#38332D]/10">
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#526B4D]">
                        {cluster.clusterName}
                      </h3>
                      <p className="font-sans text-xs text-[#38332D]/70 mt-0.5">
                        {cluster.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-[#C87958] bg-[#C87958]/10 px-3 py-1 rounded-full whitespace-nowrap">
                        {cluster.distanceRange}
                      </span>
                      {cluster.leadLocalitySlug && (
                        <Link
                          href={`/areas/${cluster.leadLocalitySlug}`}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#526B4D] hover:underline"
                        >
                          <span>Area Guide</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Pockets Grid */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {cluster.pockets.map((pocket, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF6ED] text-[#38332D]/85 border border-[#38332D]/10 text-xs font-medium hover:border-[#526B4D] transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#526B4D]/60" />
                        <span>{pocket}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Inquire for Tiffin from your pocket */}
            <div className="mt-8 bg-[#526B4D] text-[#FAF6ED] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
              <div>
                <h4 className="font-serif text-lg sm:text-xl font-normal">
                  Looking for daily tiffin delivery to your PG or society?
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#FAF6ED]/85 mt-1">
                  Send Shankar &amp; Rupali a WhatsApp message with your pocket or landmark name to check tiffin availability.
                </p>
              </div>

              {info.isWhatsAppVerified && info.whatsAppNumber && (
                <a
                  href={`https://wa.me/${info.whatsAppNumber}?text=${encodeURIComponent(
                    "Hello Rupali's Kitchen, I would like to inquire about daily tiffin service to my area."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-md flex-shrink-0"
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
                  <span>Inquire on WhatsApp</span>
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Featured Food Preview before visiting */}
        <section className="py-12 sm:py-16 bg-[#EAE0D0]/20 border-t border-[#38332D]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#38332D]">
                  Fresh From Our Kitchen
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#38332D]/75 mt-1">
                  Here are some of the comforting meals waiting for you today.
                </p>
              </div>
              <Link
                href="/menu"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#526B4D] hover:text-[#3F533B] transition-colors"
              >
                <span>View Full Menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {featuredDishes.map((dish) => (
                <div
                  key={dish.id}
                  className="bg-[#FAF6ED] rounded-3xl p-3.5 border border-[#38332D]/10 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#EAE0D0]">
                      <Image
                        src={dish.imageSrc}
                        alt={dish.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 360px"
                        className="object-cover object-center"
                      />
                    </div>
                    <h3 className="font-serif text-base font-semibold text-[#38332D] mt-3">
                      {dish.title}
                    </h3>
                    <p className="font-sans text-xs text-[#38332D]/75 mt-1 line-clamp-2">
                      {dish.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#38332D]/5 mt-3 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#526B4D] bg-[#526B4D]/10 px-2.5 py-0.5 rounded-full">
                      {dish.category}
                    </span>
                    <Link
                      href="/menu"
                      className="text-xs text-[#526B4D] hover:underline font-medium"
                    >
                      Details &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
