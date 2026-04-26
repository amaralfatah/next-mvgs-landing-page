import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import Hero from "@/components/sections/Hero";
import TrustBadges from "@/components/sections/TrustBadges";
import ProductSection from "@/components/sections/ProductSection";
import ServicesSection from "@/components/sections/ServicesSection";
import HowToBuySection from "@/components/sections/HowToBuySection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";
import InstagramSection from "@/components/sections/InstagramSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustBadges />
        <ProductSection />
        <InstagramSection />
        <ServicesSection />
        <HowToBuySection />
        <TestimonialSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
