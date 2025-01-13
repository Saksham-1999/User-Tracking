import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import OfferingHeroSection from "./Offering-hero-Section";
import heroImage from "../../assets/offerings/phishinggg.jpg";
import {
  Shield,
  Mail,
  AlertTriangle,
  Brain,
  Eye,
  Lock,
  Users,
  BarChart,
  Network,
  Database,
  Fingerprint,
  ChartBar,
  ShieldAlert,
  MessageSquare,
  Target,
  CheckCircle,
} from "lucide-react";

const heroData = {
  backgroundImage: heroImage,
  title: "Phishing Plugin Tool",
  subtitle:
    "Enterprise-grade Email Security powered by Advanced AI & Machine Learning",
  buttonText: "Discover Protection",
  buttonLink: "PhishingPreventionTool",
};

// Enhanced phishing features with detailed descriptions
const phishingFeatures = [
  {
    icon: Brain,
    title: "AI-Powered Spam Detection",
    description:
      "Advanced neural networks identify sophisticated phishing patterns",
    benefits: [
      "Real-time pattern recognition",
      "Self-learning algorithms",
      "Behavioral analysis",
    ],
  },
  {
    icon: Mail,
    title: "Real-time Email Defense",
    description: "Instant scanning and blocking of malicious emails",
    benefits: [
      "Zero-second response",
      "Automated quarantine",
      "Smart filtering",
    ],
  },
  {
    icon: Network,
    title: "Network Behavior Analysis",
    description: "Monitor and detect suspicious network patterns",
    benefits: ["Traffic analysis", "Anomaly detection", "Pattern matching"],
  },
  {
    icon: Database,
    title: "Spam Intelligence Database",
    description: "Global threat database with real-time updates",
    benefits: [
      "Global threat feeds",
      "Real-time updates",
      "Historical analysis",
    ],
  },
  {
    icon: Fingerprint,
    title: "Digital Fingerprinting",
    description: "Unique identification of known attack patterns",
    benefits: [
      "Pattern recognition",
      "Attack chain analysis",
      "Threat correlation",
    ],
  },
  {
    icon: Shield,
    title: "Multi-Layer Protection",
    description: "Comprehensive security through multiple defense mechanisms",
    benefits: [
      "Deep content inspection",
      "URL reputation checking",
      "Attachment sandboxing",
    ],
  },
];

// Enhanced security capabilities with additional details
const securityCapabilities = [
  {
    icon: Shield,
    title: "Zero-Day Attack Prevention",
    description: "Protection against unknown threats",
    details: "Advanced heuristic analysis and behavioral monitoring",
  },
  {
    icon: Eye,
    title: "Deep Content Inspection",
    description: "Advanced payload analysis",
    details: "Multi-layer scanning of all email components",
  },
  {
    icon: Lock,
    title: "Multi-Factor Authentication",
    description: "Enhanced access security",
    details: "Multiple verification layers for secure access",
  },
  {
    icon: BarChart,
    title: "Advanced Analytics Dashboard",
    description: "Real-time threat monitoring",
    details: "Comprehensive visibility into security events",
  },
  {
    icon: AlertTriangle,
    title: "Incident Response System",
    description: "Automated threat mitigation",
    details: "Immediate action on detected threats",
  },
  {
    icon: Users,
    title: "User Behavior Analytics",
    description: "ML-based anomaly detection",
    details: "Pattern analysis of user activities",
  },
];

// Additional threat types with descriptions
const threatTypes = [
  {
    title: "Advanced Persistent Threats (APT)",
    description: "Long-term targeted attacks",
    icon: ShieldAlert,
  },
  {
    title: "Business Email Compromise (BEC)",
    description: "Sophisticated email fraud attempts",
    icon: MessageSquare,
  },
  {
    title: "Spear Phishing Attacks",
    description: "Targeted phishing campaigns",
    icon: Target,
  },
  {
    title: "Social Engineering Attempts",
    description: "Psychological manipulation tactics",
    icon: Users,
  },
  {
    title: "Ransomware Prevention",
    description: "Protection against encryption attacks",
    icon: Lock,
  },
  {
    title: "Zero-Day Exploits",
    description: "Unknown vulnerability protection",
    icon: AlertTriangle,
  },
];
const PhishingPreventionTool = () => {
  const StatisticsSection = () => (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: "95%", label: "Threat Detection Rate", icon: Shield },
            { number: "<5%", label: "False Positive Rate", icon: ChartBar },
            { number: "24/7", label: "Active Monitoring", icon: Eye },
            { number: "100M+", label: "Threats Blocked", icon: ShieldAlert },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-4xl font-bold text-primary mb-2">
                {stat.number}
              </h3>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const FeaturesSection = () => (
    <section className="py-20 bg-gradient-to-r from-background via-secondary/5 to-background">
      <motion.div
        className="w-full px-4 lg:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold mb-16 text-center text-primary">
          Advanced Security Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {phishingFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card p-8 rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-primary hover:scale-105"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground/90 mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );

  const CapabilitiesSection = () => (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <motion.div
        className="w-full px-4 lg:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold text-center text-primary mb-16">
          Security Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityCapabilities.map((capability, index) => (
            <motion.div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                <capability.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground/90 mb-4">
                {capability.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {capability.description}
              </p>
              <p className="text-sm text-muted-foreground/80 italic">
                {capability.details}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );

  const ThreatProtectionSection = () => (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 lg:px-20">
        <motion.h2
          className="text-5xl font-bold text-center text-primary mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Comprehensive Threat Protection
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {threatTypes.map((threat, index) => (
            <motion.div
              key={index}
              className="bg-card p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <threat.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground/90">
                  {threat.title}
                </h3>
              </div>
              <p className="text-muted-foreground">{threat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const WorkflowSection = () => (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-4 lg:px-20">
        <motion.h2
          className="text-5xl font-bold text-center text-primary mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: "1",
              title: "Email Detection",
              description: "Incoming emails are intercepted",
            },
            {
              step: "2",
              title: "Analysis",
              description: "AI-powered threat/spam detection",
            },
            {
              step: "3",
              title: "Verification",
              description: "Multi-layer security checks",
            },
            {
              step: "4",
              title: "Action",
              description: "Automated threat response",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-card p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground/90">
                {item.title}
              </h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

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
          Secure Your Organization Today
        </motion.h2>
        <motion.p
          className="text-2xl mb-12 max-w-3xl mx-auto text-white/90"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
        >
          Join thousands of organizations protecting their communications with
          our advanced phishing defense platform
        </motion.p>
        <Link to="/contact-us">
          <motion.button
            className="bg-white text-primary font-bold py-4 px-12 rounded-full  text-lg"
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
      <div id="PhishingPreventionTool">
        <StatisticsSection />

        <ThreatProtectionSection />
        <CapabilitiesSection />
        <FeaturesSection />
        <WorkflowSection />
      </div>
      <CallToAction />
    </div>
  );
};

export default PhishingPreventionTool;
