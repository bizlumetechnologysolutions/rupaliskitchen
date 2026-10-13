/**
 * Rupali's Kitchen - Privacy-Conscious Event Tracking & Conversion Analytics
 *
 * Designed to track real user intent (menu views, directions, WhatsApp enquiries, shares)
 * without capturing PII or introducing heavy third-party bundles.
 * Compatible with Google Analytics (GA4 gtag), Plausible, Umami, or custom dataLayer.
 */

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js",
      action: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
    plausible?: (eventName: string, options?: { props?: Record<string, unknown> }) => void;
  }
}

export type AnalyticsEvent =
  | { name: "menu_view"; category?: string }
  | { name: "menu_share"; method: "native" | "clipboard" | "whatsapp" }
  | { name: "menu_filter"; category: string }
  | { name: "directions_click"; destination: string }
  | { name: "phone_call_click"; phone: string }
  | { name: "whatsapp_enquiry_click"; source: string; dish?: string }
  | { name: "recommend_share"; method: "native" | "clipboard" | "whatsapp" }
  | { name: "locality_page_view"; locality: string };

/**
 * Dispatch an analytics event safely. Never throws, never collects personal info.
 */
export function trackEvent(event: AnalyticsEvent): void {
  if (typeof window === "undefined") return;

  try {
    // 1. Google Analytics 4 (if configured via NEXT_PUBLIC_GA_ID or tag)
    if (typeof window.gtag === "function") {
      const { name, ...params } = event;
      window.gtag("event", name, {
        ...params,
        page_location: window.location.href,
        page_title: document.title,
      });
    }

    // 2. Plausible Analytics (if present)
    if (typeof window.plausible === "function") {
      const { name, ...props } = event;
      window.plausible(name, { props });
    }

    // 3. Optional local debug logging during development
    if (process.env.NODE_ENV === "development") {
      console.log(`[Analytics Event] ${event.name}:`, event);
    }
  } catch (err) {
    // Fail silently in production
    if (process.env.NODE_ENV === "development") {
      console.warn("Analytics dispatch warning:", err);
    }
  }
}

// Convenience helpers
export const analytics = {
  trackMenuView: (category?: string) => trackEvent({ name: "menu_view", category }),
  trackMenuShare: (method: "native" | "clipboard" | "whatsapp") =>
    trackEvent({ name: "menu_share", method }),
  trackMenuFilter: (category: string) => trackEvent({ name: "menu_filter", category }),
  trackDirectionsClick: (destination = "Ambegaon Budruk") =>
    trackEvent({ name: "directions_click", destination }),
  trackPhoneCall: (phone = "+917841988070") =>
    trackEvent({ name: "phone_call_click", phone }),
  trackWhatsApp: (source: string, dish?: string) =>
    trackEvent({ name: "whatsapp_enquiry_click", source, dish }),
  trackRecommendShare: (method: "native" | "clipboard" | "whatsapp") =>
    trackEvent({ name: "recommend_share", method }),
  trackLocalityView: (locality: string) =>
    trackEvent({ name: "locality_page_view", locality }),
};
