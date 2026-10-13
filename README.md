# Rupali's Kitchen — Growth & Local Discovery Platform

> **"Door ghar se ho? Khane mein nahi."**  
> *A little taste of home, everyday.*

Rupali's Kitchen is a warm neighbourhood food spot serving comforting, authentic pure-veg Indian lunch, dinner, and daily tiffins in Ambegaon Budruk, Pune. Founded and lovingly run by Rupali and Shankar, this platform is engineered for local discovery, shareable menus, word-of-mouth referral, and technical SEO.

---

## 🍛 Brand Identity & Visual Design

- **Tagline:** *A little taste of home.*
- **Subtagline:** *HOMEMADE • HEARTFELT • EVERYDAY*
- **Hero Headline:** *Door ghar se ho? Khane mein nahi.*
- **Typography:**
  - Headings: `Lora` (warm, literary serif)
  - Body & UI: `DM Sans` (clean, accessible sans-serif)
  - Handwritten Accents: `Kalam` (friendly hand-lettering)
- **Brand Palette:**
  - Warm Cream: `#FAF6ED` (Background)
  - Kitchen Green: `#526B4D` (Primary brand color & buttons)
  - Terracotta: `#C87958` (Warm accents & highlights)
  - Oat Beige: `#EAE0D0` (Cards & secondary backgrounds)
  - Coffee Brown: `#38332D` (Body text)

---

## 🚀 Technical Stack & Architecture

- **Framework:** Next.js (App Router, Turbopack)
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS v4 with custom brand tokens
- **Icons:** Lucide React
- **Images:** `next/image` with responsive sizing, LCP optimization (`priority` + `loading="eager"`), and zero AI placeholders (100% authentic kitchen photographs)
- **SEO & Structured Data:** Next.js Metadata API, dynamic `sitemap.xml`, `robots.txt`, Schema.org `Restaurant`, `LocalBusiness`, `Menu`, and `FAQPage` JSON-LD
- **Analytics:** Typed privacy-conscious event tracker with zero PII and Google Analytics measurement hook

---

## 🌐 Routes & Growth Features

| Route | Purpose | Key Features |
| :--- | :--- | :--- |
| `/` | Brand Homepage | Warm hero, storytelling, food gallery, why us, customer moment, and location summary |
| `/find-us` | Local Discovery & Navigation | Storefront photograph, verified address, timings, one-click Google Maps directions, and WhatsApp ordering |
| `/menu` | Shareable Food Menu | Categorised dishes, Web Share API, clipboard fallback toast, WhatsApp dish enquiry, and daily specials |
| `/story` | Kitchen Journey & Referral | Rupali & Shankar's story, values, and non-pushy recommendation sharing widget |
| `/areas/[locality]` | Locality Landing Architecture | Deep local context (`/areas/ambegaon-budruk`), student/PG guidance, office tiffins, landmarks, and FAQ schema |
| `/sitemap.xml` | Dynamic Search Sitemap | Dynamic XML sitemap listing all published canonical routes |
| `/robots.txt` | Crawler Directives | Allows public crawling while protecting internal assets |

---

## 🗺️ How to Add a New Verified Locality

To prevent mass-generated thin SEO pages, locality pages are only generated for confirmed areas with genuine local value:

1. Open `src/lib/site-data.ts`.
2. Add a new entry to the `localities` dictionary:
   ```typescript
   "new-locality-slug": {
     slug: "new-locality-slug",
     name: "Area Name",
     headline: "Homestyle Food in Area Name",
     landmarks: ["Landmark 1", "Landmark 2"],
     description: "Genuine local description...",
     studentPGContext: "Local PG / college details...",
     officeTiffinContext: "Office delivery / pickup details...",
     directionsText: "Specific directions...",
     popularDishes: ["rupalis-special-thali"],
     faq: [
       { q: "Is delivery available in Area?", a: "Details..." }
     ]
   }
   ```
3. Next.js `generateStaticParams()` will automatically prerender the new route and include it in `sitemap.xml`.

---

## 📊 Analytics & Privacy-Conscious Tracking

Interactions are tracked via `src/lib/analytics.ts` with zero personally identifiable information (PII):

- `analytics.trackMenuView()` — Menu page views and category filters
- `analytics.trackMenuShare()` — Native Web Share and clipboard copy actions
- `analytics.trackDirectionsClick()` — Google Maps directions clicks
- `analytics.trackPhoneCall()` — Direct telephone clicks
- `analytics.trackWhatsApp()` — WhatsApp ordering and dish enquiry clicks
- `analytics.trackRecommendShare()` — Word-of-mouth referral widget shares

To connect Google Analytics in production, add `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` to your environment variables.

---

## 📍 Verified Business Information

- **Brand Name:** Rupali's Kitchen
- **Address:** 02, Ambegaon Pathar Rd, opp. TORNA SANKUL, near CHINTAMANI PRIME ENGLISH SCH5, Tanaji Nagar, Ambegaon Budruk, Pune, Maharashtra 411046
- **Phone:** `078419 88070` (`+917841988070`)
- **WhatsApp:** `+917841988070`
- **Google Maps:** [Find on Google Maps](https://share.google/Hilc0OJ0Lsl5hYA0l)
- **Services:** Dine-in, Takeaway, Daily Tiffin Service

---

## 📝 Business Owner Handoff Checklist

To complete full production readiness, provide or verify:

1. **Verified Production URL:** Active on `https://rupaliskitchen.vercel.app` (configured as canonical URL for sitemaps, Open Graph, and search indexing).
2. **Weekly Timings Confirmation:** Current kitchen hours are set to Monday–Sunday 11:30 AM – 3:30 PM & 7:00 PM – 10:30 PM. Adjust in `site-data.ts` if schedule changes.
3. **Delivery Radius:** If you partner with local delivery riders, update the `serviceOptions` in `site-data.ts`.
4. **Google Search Console:** Submit `https://rupaliskitchen.vercel.app/sitemap.xml` in Google Search Console to index the new discovery and menu routes immediately.

---

## 💻 Getting Started Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Build and validate for production:
   ```bash
   npm run build
   ```
