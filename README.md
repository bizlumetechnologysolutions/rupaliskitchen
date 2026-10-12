# Rupali's Kitchen — A Warm, Story-Driven Food Website

> **"Door ghar se ho? Khane mein nahi."**  
> *A little taste of home, everyday.*

Rupali's Kitchen is a neighbourhood food spot serving comforting, home-style Indian meals, morning nashta, and snacks in Ambegaon Budruk, Pune. This website introduces the couple behind the kitchen, showcases their actual food, communicates the brand's personality, and helps people discover their physical location.

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

## 🚀 Technical Stack

- **Framework:** Next.js (App Router, Turbopack)
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS v4 with custom theme tokens
- **Icons:** Lucide React
- **Images:** `next/image` with responsive sizing and optimization
- **SEO & Structured Data:** `Metadata` API + Schema.org `Restaurant` / `LocalBusiness` JSON-LD

---

## 📍 Verified Business Information

- **Address:** 02, Ambegaon Pathar Rd, opp. TORNA SANKUL, near CHINTAMANI PRIME ENGLISH SCH5, Tanaji Nagar, Ambegaon Budruk, Pune, Maharashtra 411046
- **Phone:** `078419 88070` (`+917841988070`)
- **Google Maps:** [Find on Google Maps](https://share.google/Hilc0OJ0Lsl5hYA0l)
- **Services:** Dine-in, Takeaway, Daily Tiffin Service

---

## 🛠️ Project Structure

```
rupalisKitchen/
├── public/
│   └── images/
│       └── rupalis-kitchen/
│           ├── logo.png                # Full brand logo asset
│           ├── logo-mark.png           # Home pot logo icon
│           ├── logo-wordmark.png       # Friendly serif wordmark
│           ├── owners-kitchen.png      # Genuine photograph of owners
│           ├── thali-feast.png         # Traditional Indian thali feast
│           ├── roti-sabzi.png          # Sunlit phulkas, sabzi & pickle
│           ├── storefront.png          # Physical cafe counter & seating
│           └── customer-moment.png     # Customer shared meal photography
├── src/
│   ├── app/
│   │   ├── globals.css                 # Brand theme variables & utilities
│   │   ├── icon.png                    # Brand favicon icon
│   │   ├── layout.tsx                  # Fonts, SEO metadata, JSON-LD
│   │   └── page.tsx                    # Assembled homepage
│   ├── components/
│   │   ├── Navbar.tsx                  # Accessible responsive navbar
│   │   ├── Hero.tsx                    # Two-column editorial hero
│   │   ├── Story.tsx                   # The people behind the plate
│   │   ├── FoodGallery.tsx             # Editorial food showcase + WhatsApp CTA
│   │   ├── WhyUs.tsx                   # Three core values
│   │   ├── CustomerMoment.tsx          # Shared tables & community
│   │   ├── FindUs.tsx                  # Verified location, phone, directions
│   │   ├── FinalCTA.tsx                # Kitchen-green full-width CTA
│   │   └── Footer.tsx                  # Compact footer with dynamic copyright
│   └── lib/
│       └── site-data.ts                # Central typed data configuration
└── package.json
```

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

4. Build for production:
   ```bash
   npm run build
   ```
