import Navbar from "@/components/fragments/navbar";
import AboutPage from "@/components/layouts/AboutPage";
import HomePage from "@/components/layouts/HomePage";
import ServicePage from "@/components/layouts/ServicePage";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <AboutPage />
      <ServicePage />
    </>
  );
}
