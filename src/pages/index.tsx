import NavbarComponent from "@/components/fragments/navbar";
import AboutSection from "@/components/layouts/AboutSection";
import ContactSection from "@/components/layouts/ContactSection";
import Footer from "@/components/layouts/Footer";
import HomeSection from "@/components/layouts/HomeSection";
import PricingSection from "@/components/layouts/PricingSection";
import ReviewSection from "@/components/layouts/ReviewSection";

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <HomeSection />
      <AboutSection />
      <PricingSection />
      <ReviewSection />
      <ContactSection />
      <Footer />
    </>
  );
}
