import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  Server,
  Cloud,
  Zap,
  Users,
  Database,
  FileCheck,
  AlertTriangle,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/offerings/enterprise.jpg";
import OfferingHeroSection from "./Offering-hero-Section";

const heroData = {
  backgroundImage: heroImage,
  title: "Enterprise Security Solutions",
  subtitle: "Protecting your business with cutting-edge cybersecurity",
  buttonText: "Learn More",
  buttonLink: "EnterpriseSecurityPage",
};

const managedServices = [
  { icon: Shield, title: "Identify and Control Digital assets" },
  { icon: Eye, title: "Log Analytics and threat identification" },
  {
    icon: AlertTriangle,
    title: "Security Incident – timely alerts & response",
  },
  { icon: FileCheck, title: "AV, Patch Management" },
  { icon: Cloud, title: "Cloud Misconfiguration check" },
  { icon: Zap, title: "Red Teaming" },
];

const securityArchitecture = [
  { icon: Lock, title: "Zero Trust Network Architecture (ZTNA)" },
  { icon: Shield, title: "Ransomware Protection Strategy" },
  { icon: FileCheck, title: "TOGFA, SABSA, OSA, NIST based framework" },
  { icon: Users, title: "Cybersecurity Consolidation" },
  { icon: Eye, title: "Privacy Protection" },
  { icon: Server, title: "Micro Segmentation" },
  { icon: Zap, title: "Mobile devices" },
  { icon: FileCheck, title: "ISMS Deployments" },
  { icon: Shield, title: "ISO based frameworks" },
  { icon: Eye, title: "Continuous Auditing" },
  { icon: Cloud, title: "Securing Cloud Assets" },
  { icon: AlertTriangle, title: "Protect from LLM threats" },
  { icon: Users, title: "Third party risks handling" },
  { icon: Lock, title: "Balance security with usability experiences" },
  { icon: Database, title: "Data Security" },
];

const enterpriseSecurityAdvisory = [
  { icon: FileCheck, title: "Advisory and Deployment support" },
  { icon: Users, title: "Help in framework selection process" },
  {
    icon: Shield,
    title: "Information Security Management System (ISMS) Development",
  },
  { icon: FileCheck, title: "Advisory ISO27001:2022" },
  { icon: Eye, title: "ISMS pre audits, Support in gap closures" },
  { icon: Users, title: "Interfacing with external auditing teams" },
  { icon: AlertTriangle, title: "Supporting non compliances closure" },
  { icon: Zap, title: "Supporting PDCA activities" },
];

const EnterpriseSecurityPage = () => {
  // Managed Services Section
  const ManagedServicesSection = () => (
    <section className="py-20 bg-gradient-to-r from-background via-secondary/5 to-background">
      <motion.div
        className="w-full px-4 lg:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-16 text-center text-primary">
          Managed Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {managedServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-card p-8 rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-primary"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground/90">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );

  // Security Architecture Section
  const SecurityArchitectureSection = () => (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <motion.div
        className="w-full px-4 lg:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-16 text-center text-primary">
          Security Architecture
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {securityArchitecture.map((item, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="bg-primary/10 p-4 rounded-full w-fit mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground/90">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );

  // Enterprise Security Advisory Section
  const EnterpriseAdvisorySection = () => (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-background">
      <motion.div
        className="w-full px-4 lg:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-16 text-center text-primary">
          Enterprise Security Advisory
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {enterpriseSecurityAdvisory.map((item, index) => (
            <motion.div
              key={index}
              className="bg-card p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-primary to-primary/50 p-4 rounded-2xl">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground/90">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );

  // Enhanced Call to Action
  const CallToAction = () => (
    <motion.section
      className="py-24 bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-[url('/path/to/pattern.png')] opacity-10" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="text-5xl font-bold mb-8"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >
          Ready to Secure Your Enterprise?
        </motion.h2>
        <motion.p
          className="text-xl mb-10 max-w-2xl mx-auto"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
        >
          Contact us today for a comprehensive security assessment and
          personalized solutions
        </motion.p>
        <Link to="/contact-us">
          <motion.button
            className="bg-white text-primary font-semibold py-4 px-12 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );

  return (
    <div className="bg-background text-foreground">
      <OfferingHeroSection data={heroData} />
      <div id="EnterpriseSecurityPage">
        <ManagedServicesSection />
        <SecurityArchitectureSection />
        <EnterpriseAdvisorySection />
      </div>
      <CallToAction />
    </div>
  );
};

export default EnterpriseSecurityPage;
