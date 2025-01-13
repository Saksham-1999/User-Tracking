import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroSection from "@/components/Offerings/HeroSection";
import PhishingPreventionSection from "@/components/Offerings/PhishingPreventionSection";
import SecureKnowledgeManagementSection from "@/components/Offerings/SecureKnowledgeManagementSection";
import DecisionSupportSystemSection from "@/components/Offerings/DecisionSupportSystemSection";
import SCMSecuritySection from "@/components/Offerings/SCMSecuritySection";
import PredictiveMaintenanceSection from "@/components/Offerings/PredictiveMaintenanceSection";
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AnimatedSection = ({ children, className }: { children: React.ReactNode, className?: string }) => {
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
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};

function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white pt-5">
      <HeroSection />

      <AnimatedSection className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Innovative Products
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Discover our cutting-edge cybersecurity solutions designed to
            protect your digital assets and empower your business.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-gradient-to-r from-blue-100 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <PhishingPreventionSection />
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <SecureKnowledgeManagementSection />
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-gradient-to-r from-purple-100 to-pink-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <DecisionSupportSystemSection />
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto">
          <SCMSecuritySection />
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-gradient-to-r from-blue-100 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <PredictiveMaintenanceSection />
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white mt-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Secure Your Digital Future?
          </h2>
          <p className="text-xl mb-8">
            Contact us today to learn more about our innovative cybersecurity
            solutions.
          </p>
          <Link to={"/contact-us"}>
            <button className="bg-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full ">
              Get Started
            </button>
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}

export default ProductsPage;
