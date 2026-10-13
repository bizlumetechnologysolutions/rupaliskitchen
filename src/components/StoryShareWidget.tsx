"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Share2, Check, Copy, MessageCircle, Heart } from "lucide-react";
import { SITE_DATA } from "@/lib/site-data";
import { analytics } from "@/lib/analytics";

export default function StoryShareWidget() {
  const [copied, setCopied] = useState(false);
  const shareConfig = SITE_DATA.share;

  const fullShareText = `${shareConfig.text} ${SITE_DATA.seo.baseUrl}`;

  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: shareConfig.title,
          text: shareConfig.text,
          url: SITE_DATA.seo.baseUrl,
        });
        analytics.trackRecommendShare("native");
        return;
      } catch {
        // User cancelled or unsupported
      }
    }

    handleCopyLink();
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(fullShareText);
      setCopied(true);
      analytics.trackRecommendShare("clipboard");
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="bg-[#FAF6ED] rounded-3xl p-6 sm:p-8 border border-[#38332D]/10 shadow-xs space-y-4">
      <div className="flex items-center gap-2 text-[#C87958]">
        <Heart className="w-5 h-5 fill-[#C87958]/20" />
        <h3 className="font-serif text-lg font-medium text-[#38332D]">
          Know Someone Missing Ghar Ka Khana?
        </h3>
      </div>

      <p className="font-sans text-xs sm:text-sm text-[#38332D]/80 leading-relaxed">
        If you have friends, college roommates, or colleagues in Pune who miss honest home-cooked food, send them a quick recommendation. No apps, no fuss — just real food.
      </p>

      {/* Editable recommendation preview */}
      <div className="bg-[#EAE0D0]/50 p-4 rounded-2xl border border-[#38332D]/10 text-xs text-[#38332D]/85 font-mono">
        &ldquo;{shareConfig.text} {SITE_DATA.seo.baseUrl}&rdquo;
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          type="button"
          onClick={handleNativeShare}
          className="inline-flex items-center gap-2 bg-[#526B4D] hover:bg-[#3F533B] text-[#FAF6ED] px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-sm cursor-pointer"
        >
          <Share2 className="w-4 h-4" />
          <span>Share with a Friend</span>
        </button>

        <a
          href={`https://wa.me/?text=${encodeURIComponent(fullShareText)}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => analytics.trackRecommendShare("whatsapp")}
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
          <span>Share on WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={handleCopyLink}
          className="inline-flex items-center gap-1.5 bg-[#FAF6ED] hover:bg-[#EAE0D0] text-[#38332D] border border-[#38332D]/15 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-[#526B4D]" />
              <span>Copied to Clipboard!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy Message</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
