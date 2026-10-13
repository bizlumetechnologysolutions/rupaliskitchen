import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Clock,
  Navigation,
  Phone,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  HelpCircle,
  ArrowRight,
  UtensilsCrossed,
  Share2,
} from "lucide-react";
import { SITE_DATA, getRestaurantSchema } from "@/lib/site-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

interface LocalityPageProps {
  params: Promise<{ locality: string }>;
}

export const instant = false;

export async function generateStaticParams() {
  return Object.keys(SITE_DATA.localities).map((slug) => ({
    locality: slug,
  }));
}

export async function generateMetadata({
  params,
}: LocalityPageProps): Promise<Metadata> {
  const { locality: slug } = await params;
  const localities = SITE_DATA.localities as Record<string, typeof SITE_DATA.localities[string] | undefined>;
  const locality = localities[slug];

  if (!locality) {
    return {
      title: "Locality Not Found | Rupali's Kitchen",
    };
  }

  return {
    title: `${locality.name} | Homestyle Food & Tiffin Service`,
    description: `Fresh home-cooked thalis, everyday pure veg lunch and dinner, and tiffin services in ${locality.name}, Pune. Located opp. Torna Sankul on Ambegaon Pathar Road.`,
    alternates: {
      canonical: `/areas/${slug}`,
    },
    openGraph: {
      title: `${locality.headline} | Rupali's Kitchen`,
      description: locality.description,
      url: `${SITE_DATA.seo.baseUrl}/areas/${slug}`,
      images: [
        {
          url: SITE_DATA.assets.storefront,
          width: 1200,
          height: 900,
          alt: `Rupali's Kitchen storefront serving ${locality.name}, Pune`,
        },
      ],
    },
  };
}

export default async function LocalityPage({ params }: LocalityPageProps) {
  const { locality: slug } = await params;
  const localities = SITE_DATA.localities as Record<string, typeof SITE_DATA.localities[string] | undefined>;
  const locality = localities[slug];

  if (!locality) {
    notFound();
  }

  const { location } = SITE_DATA;
  const info = location.info;
  const isWhatsAppConfigured =
    info.isWhatsAppVerified && Boolean(info.whatsAppNumber);

  const localDishes = SITE_DATA.foodGallery.items.filter((d) =>
    locality.popularDishes.includes(d.id)
  );

  // Local FAQ structured data
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: locality.faq.map((item: { q: string; a: string }) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main id="main-content" className="flex-1 bg-[#FAF6ED]">
        {/* Locality Header */}
        <section className="pt-10 pb-12 sm:pt-14 sm:pb-16 bg-[#EAE0D0]/30 border-b border-[#38332D]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#C87958] uppercase">
                <span className="w-6 h-[2px] bg-[#C87958]" />
                <span>NEIGHBOURHOOD GUIDE • {locality.name.toUpperCase()}</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#38332D] tracking-tight leading-tight">
                {locality.headline}
              </h1>
              <p className="font-sans text-base sm:text-lg text-[#38332D]/80 leading-relaxed">
                {locality.description}
              </p>

              {/* Verified landmark pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {locality.landmarks.map((landmark: string, i: number) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6ED] text-[#526B4D] border border-[#526B4D]/20 text-xs font-medium"
                  >
                    <MapPin className="w-3 h-3 text-[#C87958]" />
                    <span>{landmark}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Local Community Needs (Students / PGs / Office Tiffins) */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Student & PG Card */}
              <div className="bg-[#FAF6ED] p-6 sm:p-8 rounded-3xl border border-[#38332D]/10 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#526B4D]/15 text-[#526B4D]">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#C87958] uppercase tracking-wider">
                      Students &amp; Hostels
                    </span>
                    <h2 className="font-serif text-xl font-medium text-[#38332D]">
                      For Students Living Away from Home
                    </h2>
                  </div>
                </div>

                <p className="font-sans text-sm text-[#38332D]/80 leading-relaxed">
                  {locality.studentPGContext}
                </p>

                <div className="pt-2 flex flex-wrap gap-2 text-xs text-[#526B4D] font-medium">
                  <span className="bg-[#EAE0D0]/60 px-3 py-1 rounded-full">Non-greasy home cooking</span>
                  <span className="bg-[#EAE0D0]/60 px-3 py-1 rounded-full">Monthly meal plans</span>
                  <span className="bg-[#EAE0D0]/60 px-3 py-1 rounded-full">Budget-friendly</span>
                </div>
              </div>

              {/* Working Professional & Tiffin Card */}
              <div className="bg-[#FAF6ED] p-6 sm:p-8 rounded-3xl border border-[#38332D]/10 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#C87958]/15 text-[#C87958]">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#526B4D] uppercase tracking-wider">
                      Work &amp; Office Routine
                    </span>
                    <h2 className="font-serif text-xl font-medium text-[#38332D]">
                      Daily Lunch &amp; Dinner Tiffins
                    </h2>
                  </div>
                </div>

                <p className="font-sans text-sm text-[#38332D]/80 leading-relaxed">
                  {locality.officeTiffinContext}
                </p>

                <div className="pt-2 flex flex-wrap gap-2 text-xs text-[#526B4D] font-medium">
                  <span className="bg-[#EAE0D0]/60 px-3 py-1 rounded-full">Warm tiffin boxes</span>
                  <span className="bg-[#EAE0D0]/60 px-3 py-1 rounded-full">Quick takeaway parcels</span>
                  <span className="bg-[#EAE0D0]/60 px-3 py-1 rounded-full">Rotis from the tawa</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Popular Dishes */}
        <section className="py-12 sm:py-16 bg-[#EAE0D0]/20 border-y border-[#38332D]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#38332D]">
                  Neighbourhood Favourites in {locality.name}
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#38332D]/75 mt-1">
                  Popular thalis ordered regularly by local residents and students.
                </p>
              </div>
              <Link
                href="/menu"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#526B4D] hover:text-[#3F533B]"
              >
                <span>View Full Menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {localDishes.map((dish) => (
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
                        sizes="(max-width: 640px) 100vw, 280px"
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
                    <span className="text-[11px] font-semibold text-[#526B4D]">
                      {dish.category}
                    </span>
                    <Link
                      href="/menu"
                      className="text-xs text-[#526B4D] hover:underline font-medium"
                    >
                      Order &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Directions & Wayfinding */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#FAF6ED] rounded-3xl p-6 sm:p-10 border border-[#38332D]/10 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#38332D]/10">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#38332D]">
                    Directions from {locality.name} Landmarks
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-[#38332D]/75 mt-1">
                    {locality.directionsText}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {info.isGoogleMapsVerified && info.googleMapsUrl && (
                    <a
                      href={info.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#526B4D] hover:bg-[#3F533B] text-[#FAF6ED] px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-sm"
                    >
                      <Navigation className="w-4 h-4" />
                      <span>Google Maps Navigation</span>
                    </a>
                  )}

                  {isWhatsAppConfigured && (
                    <a
                      href={`https://wa.me/${info.whatsAppNumber}?text=${encodeURIComponent(
                        `Hello Rupali's Kitchen, I am in ${locality.name} and would like to ask about directions / meal service.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-sm"
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
                      <span>WhatsApp Location</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Local FAQs */}
              <div className="space-y-4 pt-2">
                <h3 className="font-serif text-lg font-medium text-[#38332D] flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#C87958]" />
                  <span>Frequently Asked Questions in {locality.name}</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {locality.faq.map((item: { q: string; a: string }, i: number) => (
                    <div
                      key={i}
                      className="bg-[#EAE0D0]/40 p-4 sm:p-5 rounded-2xl border border-[#38332D]/8 space-y-1.5"
                    >
                      <p className="font-serif text-sm font-semibold text-[#38332D]">
                        {item.q}
                      </p>
                      <p className="font-sans text-xs sm:text-sm text-[#38332D]/80 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
