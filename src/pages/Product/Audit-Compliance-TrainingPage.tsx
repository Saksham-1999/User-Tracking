import { motion } from "framer-motion";
import cyber from "../../assets/offerings/cyber.jpg";
import { Link } from "react-router-dom";
import OfferingHeroSection from "./Offering-hero-Section";
// import heroImage from "../../assets/offerings/special-operations-soldier-allocating-resources-based-mission-needs.jpg";
import heroImage from "../../assets/offerings/Audit.jpg";
import {
  Shield,
  Server,
  Cloud,
  Smartphone,
  Users,
  Lock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const heroData = {
  backgroundImage: heroImage,
  title: "Audit, Compliance & Training",
  subtitle:
    "Empowering your organization with comprehensive security solutions",
  buttonText: "Learn More",
  buttonLink: "AuditComplianceTrainingPage",
};

const AuditComplianceTrainingPage = () => {
  const auditStandards = [
    { title: "ISO 27001", icon: Shield },
    { title: "SSAE18 / SOC 2", icon: Server },
    { title: "HIPAA", icon: Lock },
    { title: "PCI/DSS", icon: CheckCircle },
    { title: "GDPR", icon: Users },
    { title: "NIST CSF", icon: Cloud },
    { title: "CIS/SANS 20", icon: Smartphone },
    { title: "HiTRUST CSF", icon: Shield },
  ];

  const trainingPrograms = [
    {
      title: "Cybersecurity Awareness",
      description: "Comprehensive training for all employees",
      icon: Shield,
    },
    {
      title: "Phishing Defense",
      description: "Advanced simulation and prevention techniques",
      icon: Lock,
    },
    {
      title: "Incident Response",
      description: "Real-world scenario training",
      icon: Server,
    },
    {
      title: "Secure Coding",
      description: "Best practices for developers",
      icon: Cloud,
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <OfferingHeroSection data={heroData} />

      {/* Audit Section */}
      <section id="AuditComplianceTrainingPage" className="py-10 px-3 lg:px-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-primary mb-6">
              Security Audits
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive security assessments tailored to your organization's
              needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={cyber}
                alt="Security Audit"
                className="rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {[
                "Network Security",
                "Application Security",
                "Cloud Infrastructure",
                "IoT Security",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item}</h3>
                    <p className="text-muted-foreground">
                      Comprehensive assessment and vulnerability detection
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-10 px-3 lg:px-20 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent">
        <div className="container mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center text-primary mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Compliance Standards
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {auditStandards.map((standard, index) => (
              <motion.div
                key={index}
                className="group backdrop-blur-md bg-white/30 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <standard.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {standard.title}
                </h3>
                <p className="text-muted-foreground">
                  Industry-standard compliance and certification
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-10 px-3 lg:px-20">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-5xl font-bold text-primary mb-6">
              Training Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empower your team with cutting-edge security knowledge
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <program.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {program.description}
                </p>
                <button className="flex items-center text-primary font-semibold hover:gap-2 transition-all duration-300">
                  Learn More <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/path/to/pattern.svg')] opacity-10" />
        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-5xl font-bold mb-8 text-white">
            Ready to Secure Your Future?
          </h2>
          <p className="text-2xl mb-12 text-white/90 max-w-2xl mx-auto">
            Let's build a robust security framework together
          </p>
          <Link to="/contact-us">
            <motion.button
              className="bg-white text-primary font-bold py-4 px-12 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default AuditComplianceTrainingPage;
