import Navbar from "@/components/fragments/navbar";
import AboutSection from "@/components/layouts/AboutSection";
import ContactSection from "@/components/layouts/ContactSection";
import Footer from "@/components/layouts/Footer";
import HomeSection from "@/components/layouts/HomeSection";
import ServiceSection from "@/components/layouts/ServiceSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ServiceSection />
      <ContactSection />
      <Footer />
    </>
  );
}
