import type { Metadata, Viewport } from "next";
import { Lora, DM_Sans, Kalam } from "next/font/google";
import { SITE_DATA, getRestaurantSchema } from "@/lib/site-data";
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
  metadataBase: new URL(SITE_DATA.seo.baseUrl),
  title: {
    default: SITE_DATA.seo.defaultTitle,
    template: SITE_DATA.seo.titleTemplate,
  },
  description: SITE_DATA.seo.defaultDescription,
  keywords: [
    "Rupali's Kitchen",
    "Ghar ka khana Pune",
    "Homestyle thali Ambegaon Budruk",
    "Pure veg meals Pune",
    "Daily tiffin service Ambegaon",
    "Til bhakri thali",
    "Student meals Katraj Ambegaon",
    "Everyday Indian food",
    "Neighbourhood kitchen Pune",
  ],
  authors: [{ name: "Rupali's Kitchen" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_DATA.seo.defaultTitle,
    description: SITE_DATA.seo.defaultDescription,
    url: SITE_DATA.seo.baseUrl,
    type: "website",
    locale: "en_IN",
    siteName: SITE_DATA.brand.name,
    images: [
      {
        url: `${SITE_DATA.seo.baseUrl}/images/rupalis-kitchen/og.jpg`,
        width: 1200,
        height: 675,
        type: "image/jpeg",
        alt: "Rupali's Kitchen — Pure Veg Homestyle Food in Ambegaon Budruk, Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_DATA.seo.defaultTitle,
    description: SITE_DATA.seo.defaultDescription,
    images: [`${SITE_DATA.seo.baseUrl}/images/rupalis-kitchen/og.jpg`],
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
  const jsonLd = getRestaurantSchema();

  return (
    <html
      lang="en"
      className={`${lora.variable} ${dmSans.variable} ${kalam.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
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
