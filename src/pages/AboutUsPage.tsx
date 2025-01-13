import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import IntroductionSection from "@/components/AboutUs/IntroductionSection";
import OurStorySection from "@/components/AboutUs/OurStorySection";
import AnimatedCardsSection from "@/components/AboutUs/AnimatedCardsSection";
import VisionMissionSection from "@/components/AboutUs/VisionMissionSection";
import ClientsSection from "@/components/AboutUs/ClientsSection";
import OurTeamsSection from "@/components/AboutUs/OurTeamsSection";
import OfferingHeroSection from "./Product/Offering-hero-Section";
import heroImage from "../assets/AboutUs/hero.jpg";
import GallerySection from "@/components/AboutUs/GallerySection";
// import VideoSection from "@/components/AboutUs/VideoSection";
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  );
};

const heroData = {
  backgroundImage: heroImage,
  title: "Empowering Digital Security",
  subtitle: "EkJal and EkVayu: Reshaping the Cybersecurity Landscape",
  buttonText: "Learn More",
  buttonLink: "IntroductionSection",
};
const AboutUsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <OfferingHeroSection data={heroData} />

      <AnimatedSection>
        <div className="py-16">
          <IntroductionSection />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="bg-gray-100 py-16">
          <OurStorySection />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="py-16">
          <AnimatedCardsSection />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="bg-blue-50 py-16">
          <VisionMissionSection />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="py-16">
          <ClientsSection />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="bg-gray-100 py-16">
          <OurTeamsSection />
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="py-16">
          <GallerySection />
        </div>
      </AnimatedSection>

      {/* <AnimatedSection>
        <div className="bg-blue-50 py-16">
          <VideoSection />
        </div>
      </AnimatedSection> */}
    </div>
  );
};

export default AboutUsPage;
