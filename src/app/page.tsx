import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import BrandBanner from "@/components/BrandBanner";
import DailyMeals from "@/components/DailyMeals";
import FoodGallery from "@/components/FoodGallery";
import WhyUs from "@/components/WhyUs";
import CustomerMoment from "@/components/CustomerMoment";
import FindUs from "@/components/FindUs";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#526B4D] focus:text-[#FAF6ED] focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1 flex flex-col">
        <Hero />
        <Story />
        <BrandBanner />
        <DailyMeals />
        <FoodGallery />
        <WhyUs />
        <CustomerMoment />
        <FindUs />
        <FinalCTA />
      </main>

      <Footer />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </>
  );
}
