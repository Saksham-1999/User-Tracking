import { motion } from "framer-motion";
import cyber from "../../assets/offerings/rb_51106.png";
import { Link } from "react-router-dom";
import heroImage from "../../assets/offerings/automotive.jpg";
import OfferingHeroSection from "./Offering-hero-Section";
import {
  Shield,
  Lock,
  Car,
  Settings,
  Users,
  Clock,
  Activity,
  FileSearch,
} from "lucide-react";

const heroData = {
  backgroundImage: heroImage,
  title: "Automotive Cybersecurity Solutions",
  subtitle:
    "Protecting the future of connected and autonomous vehicles in compliance with UNECE 155/UNECE 156 mandate",
  buttonText: "Learn More",
  buttonLink: "AutomotiveCyberSecurityPage",
};

const services = [
  {
    title: "Cyber Security Management System (CSMS) Development",
    description: "Supporting the development and implementation of CSMS",
    icon: <Shield className="w-6 h-6 text-primary" />,
  },
  {
    title: "Project Dependent Cybersecurity Management",
    description: "Tailored cybersecurity management for specific projects",
    icon: <Settings className="w-6 h-6 text-primary" />,
  },
  {
    title: "Distributed Development Cybersecurity Management",
    description: "Managing cybersecurity across distributed development teams",
    icon: <Users className="w-6 h-6 text-primary" />,
  },
  {
    title: "Regular Cybersecurity Management Support",
    description: "Ongoing support for continued cybersecurity management",
    icon: <Clock className="w-6 h-6 text-primary" />,
  },
  {
    title: "Product Lifecycle Cybersecurity",
    description:
      "Supporting cybersecurity in concept, development, and post-production phases",
    icon: <Activity className="w-6 h-6 text-primary" />,
  },
  {
    title: "Threat And Risk Analysis (TARA) Support",
    description: "Comprehensive threat and risk analysis for automotive systems",
    icon: <FileSearch className="w-6 h-6 text-primary" />,
  },
];

const AutomotiveCyberSecurityPage = () => {
  return (
    <div className="bg-background text-foreground">
      <section className="w-full">
        <OfferingHeroSection data={heroData} />
      </section>

      <section id="AutomotiveCyberSecurityPage" className="py-16">
        <div className="w-full px-4 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-16"
          >
            <Shield className="w-16 h-16 text-primary mb-4" />
            <h2 className="text-4xl font-bold mb-4 text-primary text-center">
              Automotive Cybersecurity Mandate
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <p className="text-lg leading-relaxed">
                As per UNECE 155/UNECE 156 mandate, all passenger vehicles
                need to be certified to be cyber safe. It is the
                responsibility of the OEM to ensure certification and have
                processes in place to manage the entire lifecycle to be cyber
                safe.
              </p>
              <div className="bg-background p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-6 text-primary">
                  Key Requirements
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Lock className="w-6 h-6 mr-4 text-primary" />
                    <span className="text-lg">Comprehensive vehicle certification</span>
                  </li>
                  <li className="flex items-center">
                    <Car className="w-6 h-6 mr-4 text-primary" />
                    <span className="text-lg">Lifecycle management processes</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px]"
            >
              <img
                src={cyber}
                alt="Automotive Cybersecurity"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="w-full px-4 lg:px-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-16 text-center text-primary"
          >
            Our Automotive Cybersecurity Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-background p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-primary/10 p-4 rounded-lg w-fit mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Secure Your Automotive Future?
            </h2>
            <p className="text-xl mb-8">
              Contact us today for comprehensive automotive cybersecurity
              solutions and UNECE 155/156 compliance support
            </p>
            <Link to="/contact-us">
              <button className="bg-background text-primary font-semibold py-4 px-10 rounded-xl hover:bg-background/90 transition-all duration-300">
                Get Started
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AutomotiveCyberSecurityPage;
