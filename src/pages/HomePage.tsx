import AboutSection from "@/components/Home/AboutSection";
import CustomersLocatedSection from "@/components/Home/CustomersLocatedSection";
import CustomersSection from "@/components/Home/CustomersSection";
import HeroSection from "@/components/Home/HeroSection";
import ServicesSection from "@/components/Home/ServicesSection";
// import TestimonialsSection from "@/components/Home/TestimonialsSection";
import Faq from "./Faq";
import Offers from "@/components/Home/Offers";

function HomePage() {
  return (
    <div className="flex flex-col gap-5">
      {/* Primary sections */}
      <HeroSection />
      <AboutSection />

      {/* Core offerings */}
      <ServicesSection />

      {/* Social proof */}
      {/* <TestimonialsSection /> */}
      <CustomersSection />
      <CustomersLocatedSection />
      <Offers />
      <Faq />
    </div>
  );
}

export default HomePage;
