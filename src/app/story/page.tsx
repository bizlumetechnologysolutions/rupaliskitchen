import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Quote,
  Sparkles,
  ArrowRight,
  UtensilsCrossed,
  MapPin,
  HeartHandshake,
} from "lucide-react";
import { SITE_DATA } from "@/lib/site-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StoryShareWidget from "@/components/StoryShareWidget";

export const metadata: Metadata = {
  title: "Our Story — Meet Rupali & Shankar",
  description:
    "Do log. Ek chhoti si rasoi. Bahut saara pyaar. The story of Rupali & Shankar bringing honest, home-cooked Indian meals to Ambegaon Budruk, Pune.",
  alternates: {
    canonical: "/story",
  },
  openGraph: {
    title: "Our Story | Rupali's Kitchen Pune",
    description:
      "Some of the best meals come from people who put extra care into what they cook. Meet Rupali & Shankar.",
    url: `${SITE_DATA.seo.baseUrl}/story`,
    images: [
      {
        url: SITE_DATA.assets.ownersKitchen,
        width: 1200,
        height: 900,
        alt: "Rupali & Shankar in their home kitchen in Pune",
      },
    ],
  },
};

export default function StoryPage() {
  const { story, values } = SITE_DATA;

  return (
    <>
      <Navbar />

      <main id="main-content" className="flex-1 bg-[#FAF6ED]">
        {/* Story Header */}
        <section className="pt-10 pb-12 sm:pt-14 sm:pb-16 bg-[#EAE0D0]/30 border-b border-[#38332D]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#C87958] uppercase">
                <span className="w-6 h-[2px] bg-[#C87958]" />
                <span>{story.eyebrow}</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#38332D] tracking-tight">
                {story.headline}
              </h1>
              <p className="font-sans text-base sm:text-lg text-[#38332D]/80 leading-relaxed">
                A warm neighbourhood kitchen in Ambegaon Budruk born out of a simple belief: everyday food should feel comforting, familiar, and cooked with genuine affection.
              </p>
            </div>
          </div>
        </section>

        {/* Narrative & Photo Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Photo */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-lg lg:max-w-none">
                  <div
                    className="absolute -inset-2.5 sm:-inset-3 bg-[#EAE0D0] rounded-3xl -rotate-1 shadow-xs border border-[#38332D]/5"
                    aria-hidden="true"
                  />
                  <div className="relative bg-[#FAF6ED] p-3 rounded-3xl shadow-[0_8px_30px_rgba(56,51,45,0.08)] border border-[#38332D]/10 overflow-hidden">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#EAE0D0]">
                      <Image
                        src={SITE_DATA.assets.ownersKitchen}
                        alt="Rupali & Shankar smiling in their kitchen preparing fresh meals"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 42vw, 480px"
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="px-4 py-3 flex items-center justify-between border-t border-[#38332D]/5 mt-1.5">
                      <span className="font-serif text-sm font-semibold text-[#526B4D]">
                        Rupali &amp; Shankar
                      </span>
                      <span className="text-xs text-[#38332D]/60 font-sans">
                        Rupali&apos;s Kitchen Pune
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story Text */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-4 font-sans text-base sm:text-lg text-[#38332D]/85 leading-relaxed">
                  {story.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  <p>
                    From waking up early to source fresh vegetables from local markets, to slow-cooking yellow lentils and kneading whole wheat dough for chapatis — every dish is cooked without artificial coloring, excessive soda, or heavy restaurant gravies.
                  </p>
                </div>

                {/* Pull Quote */}
                <div className="p-6 bg-[#EAE0D0]/40 rounded-3xl border border-[#38332D]/10 relative">
                  <Quote className="w-8 h-8 text-[#C87958] mb-2 rotate-180" />
                  <p className="font-handwriting text-2xl sm:text-3xl text-[#526B4D] leading-snug">
                    &ldquo;{story.pullQuote}&rdquo;
                  </p>
                  <p className="font-sans text-xs text-[#38332D]/60 mt-2 font-medium">
                    — Shankar &amp; Rupali, Founders
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href="/menu"
                    className="inline-flex items-center gap-2 bg-[#526B4D] hover:bg-[#3F533B] text-[#FAF6ED] px-6 py-3 rounded-full text-sm font-medium transition-all shadow-sm"
                  >
                    <UtensilsCrossed className="w-4 h-4" />
                    <span>See What We Cook</span>
                  </Link>

                  <Link
                    href="/find-us"
                    className="inline-flex items-center gap-2 bg-[#FAF6ED] hover:bg-[#EAE0D0] text-[#38332D] border border-[#38332D]/15 px-6 py-3 rounded-full text-sm font-medium transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-[#C87958]" />
                    <span>Visit Our Kitchen</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-12 sm:py-16 bg-[#EAE0D0]/20 border-t border-[#38332D]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#38332D]">
                What We Care About
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#38332D]/75 mt-1">
                The three simple principles behind every meal we serve.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((val) => (
                <div
                  key={val.id}
                  className="bg-[#FAF6ED] p-6 rounded-3xl border border-[#38332D]/10 shadow-xs space-y-2.5"
                >
                  <div className="p-3 w-fit rounded-2xl bg-[#526B4D]/10 text-[#526B4D]">
                    <Sparkles className="w-5 h-5 text-[#C87958]" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-[#38332D]">
                    {val.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#38332D]/80 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommendation & Share Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <StoryShareWidget />
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
