import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Compass, UtensilsCrossed, MapPin } from "lucide-react";
import { SITE_DATA } from "@/lib/site-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Page Not Found | Rupali's Kitchen",
  description: "The page you are looking for might have moved, but warm ghar ka khana is always ready at Rupali's Kitchen in Ambegaon Budruk, Pune.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-20 sm:py-28 bg-[#FAF6ED] px-4 sm:px-6">
        <div className="max-w-xl w-full text-center space-y-6 bg-[#EAE0D0]/40 p-8 sm:p-12 rounded-3xl border border-[#38332D]/10 shadow-sm">
          {/* Logo emblem */}
          <div className="relative w-20 h-20 mx-auto">
            <Image
              src={SITE_DATA.assets.logoMark}
              alt="Rupali's Kitchen"
              fill
              sizes="80px"
              className="object-contain"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE0D0] text-[#526B4D] text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>404 • Kitchen Wayfinding</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl text-[#38332D]">
            Thoda rasta bhatak gaye?
          </h1>

          <p className="font-sans text-sm sm:text-base text-[#38332D]/80 leading-relaxed">
            The page you requested might have been moved. Don&apos;t worry — delicious hot rotis, thalis, and tea are waiting right here.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 bg-[#526B4D] hover:bg-[#3F533B] text-[#FAF6ED] px-5 py-3 rounded-full text-sm font-medium transition-all shadow-sm"
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>Explore Menu</span>
            </Link>

            <Link
              href="/find-us"
              className="inline-flex items-center justify-center gap-2 bg-[#FAF6ED] hover:bg-[#EAE0D0] text-[#38332D] border border-[#38332D]/15 px-5 py-3 rounded-full text-sm font-medium transition-all"
            >
              <MapPin className="w-4 h-4 text-[#C87958]" />
              <span>Find Our Kitchen</span>
            </Link>
          </div>

          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-[#526B4D] hover:text-[#3F533B] font-medium transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Homepage</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
