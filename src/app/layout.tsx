import type { Metadata, Viewport } from "next";
import { Lora, DM_Sans, Kalam } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const kalam = Kalam({
  subsets: ["latin"],
  variable: "--font-kalam",
  display: "swap",
  weight: ["300", "400", "700"],
});

export const viewport: Viewport = {
  themeColor: "#FAF6ED",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rupaliskitchen.com"),
  title: "Rupali's Kitchen | A Little Taste of Home",
  description:
    "Discover Rupali's Kitchen, a neighbourhood food spot for everyday Indian meals, nashta, and snacks.",
  keywords: [
    "Rupali's Kitchen",
    "Ghar ka khana",
    "Indian meals",
    "Homestyle thali",
    "Nashta",
    "Everyday Indian food",
    "Neighbourhood kitchen",
  ],
  authors: [{ name: "Rupali's Kitchen" }],
  openGraph: {
    title: "Rupali's Kitchen | A Little Taste of Home",
    description:
      "Simple, comforting ghar ka khana, made with care. Everyday meals that bring a little comfort to your day.",
    type: "website",
    locale: "en_IN",
    siteName: "Rupali's Kitchen",
    images: [
      {
        url: "/images/rupalis-kitchen/thali-feast.png",
        width: 1343,
        height: 1171,
        alt: "Authentic Indian Thali at Rupali's Kitchen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupali's Kitchen | A Little Taste of Home",
    description:
      "Simple, comforting ghar ka khana, made with care. Everyday meals that bring a little comfort to your day.",
    images: ["/images/rupalis-kitchen/thali-feast.png"],
  },
  icons: {
    icon: "/images/rupalis-kitchen/favicon-64.png",
    apple: "/images/rupalis-kitchen/favicon-64.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Rupali's Kitchen",
    description:
      "Neighbourhood food business serving everyday Indian meals, homestyle thali, nashta, and snacks in Pune.",
    image: "https://rupaliskitchen.com/images/rupalis-kitchen/thali-feast.png",
    telephone: "+917841988070",
    servesCuisine: ["Indian", "Homestyle", "Ghar ka Khana"],
    priceRange: "₹",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "02, Ambegaon Pathar Rd, opp. TORNA SANKUL, near CHINTAMANI PRIME ENGLISH SCH5, Tanaji Nagar",
      addressLocality: "Ambegaon Budruk, Pune",
      addressRegion: "Maharashtra",
      postalCode: "411046",
      addressCountry: "IN",
    },
    hasMap: "https://share.google/Hilc0OJ0Lsl5hYA0l",
    url: "https://rupaliskitchen.com",
  };

  return (
    <html
      lang="en"
      className={`${lora.variable} ${dmSans.variable} ${kalam.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-warm-cream text-coffee-brown font-sans antialiased flex flex-col selection:bg-terracotta selection:text-warm-cream">
        {children}
      </body>
    </html>
  );
}
