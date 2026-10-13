import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { SITE_DATA } from "@/lib/site-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MenuClient from "@/components/MenuClient";

export const metadata: Metadata = {
  title: "Food Menu — Homestyle Thalis, Nashta & Daily Meals",
  description:
    "Explore Rupali's Kitchen authentic pure veg menu: Signature Thalis, Til Bhakri, Sabudana Khichdi, Varan Bhaat, Paneer Bhurji & daily sabzi in Ambegaon Budruk, Pune.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: "Food Menu | Rupali's Kitchen Pune",
    description:
      "Comforting homemade Maharashtrian and North Indian thalis, morning nashta, and daily tiffins.",
    url: `${SITE_DATA.seo.baseUrl}/menu`,
    images: [
      {
        url: `${SITE_DATA.seo.baseUrl}/images/rupalis-kitchen/og.jpg`,
        width: 1200,
        height: 675,
        type: "image/jpeg",
        alt: "Homestyle Food Menu at Rupali's Kitchen Pune",
      },
    ],
  },
};

export default function MenuPage() {
  const domain = SITE_DATA.seo.baseUrl;

  // Schema.org Menu structured data
  const menuJsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${domain}/menu#menu`,
    name: "Rupali's Kitchen Homestyle Food Menu",
    description:
      "Freshly prepared everyday Maharashtrian and North Indian pure veg meals, thalis, and nashta.",
    inLanguage: "en-IN",
    hasMenuItem: SITE_DATA.foodGallery.items.map((dish) => ({
      "@type": "MenuItem",
      name: dish.title,
      description: dish.description,
      image: `${domain}${dish.imageSrc}`,
      suitableForDiet: "https://schema.org/VegetarianDiet",
      category: dish.category,
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        ...(dish.priceDisplay ? { price: dish.priceDisplay.replace(/[^\d]/g, "") } : {}),
        availability: "https://schema.org/InStock",
      },
    })),
  };

  return (
    <>
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd) }}
      />

      <main id="main-content" className="flex-1 bg-[#FAF6ED]">
        {/* Menu Hero Header */}
        <section className="pt-10 pb-12 sm:pt-14 sm:pb-16 bg-[#EAE0D0]/30 border-b border-[#38332D]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#C87958] uppercase mb-2">
                <span className="w-6 h-[2px] bg-[#C87958]" />
                <span>ROZ KA KHANA • SHAREABLE MENU</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#38332D] tracking-tight">
                Our Food Menu
              </h1>
              <p className="font-sans text-base sm:text-lg text-[#38332D]/80 mt-3 leading-relaxed">
                Simple, honest ghar ka khana prepared with unhurried care. From wholesome Til Bhakri and Executive Thalis to comforting afternoon Varan Bhaat.
              </p>

              <div className="pt-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 text-xs text-[#526B4D] hover:text-[#3F533B] font-medium"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Homepage</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Client Interactivity (Filters, Share, Modals) */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MenuClient />
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
