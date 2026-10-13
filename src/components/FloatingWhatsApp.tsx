"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SITE_DATA } from "@/lib/site-data";

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const info = SITE_DATA.location.info;

  if (!info.isWhatsAppVerified || !info.whatsAppNumber) {
    return null;
  }

  const prompt =
    info.whatsAppPrompt || "Hello Rupali's Kitchen, what is cooking today?";
  const url = `https://wa.me/${info.whatsAppNumber}?text=${encodeURIComponent(
    prompt
  )}`;

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 print:hidden"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center bg-white hover:bg-[#FAF6ED] text-[#1E7E34] p-3 sm:p-3.5 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.16)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.35)] border border-[#38332D]/10 hover:border-[#25D366]/40 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        aria-label="Chat with Rupali's Kitchen on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0">
          <Image
            src={SITE_DATA.assets.whatsappIcon}
            alt="WhatsApp logo"
            fill
            sizes="36px"
            className="object-contain"
            priority
          />
        </div>

        {/* Expanding label on desktop hover */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-out whitespace-nowrap ${
            isHovered
              ? "max-w-xs pl-2.5 pr-1 opacity-100"
              : "max-w-0 pl-0 pr-0 opacity-0"
          } hidden sm:block`}
        >
          <span className="font-sans text-sm font-semibold tracking-wide text-[#1E7E34]">
            Chat on WhatsApp
          </span>
        </div>

        {/* Pulse ring animation */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none -z-10 group-hover:hidden"
          aria-hidden="true"
        />
      </a>
    </aside>
  );
}
