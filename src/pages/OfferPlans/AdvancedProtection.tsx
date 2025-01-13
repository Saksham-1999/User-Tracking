import { motion } from "framer-motion";
import {
  FaUserShield,
  FaNetworkWired,
  FaDatabase,
  FaRobot,
  FaUserSecret,
  FaServer,
  FaLaptopCode,
  FaFingerprint,
  FaSatelliteDish,
  FaShieldAlt,
} from "react-icons/fa";

const advancedSecurityOffers = [
  {
    id: 1,
    title: "AI-Powered Threat Detection",
    description:
      "Advanced machine learning algorithms for real-time threat analysis",
    icon: FaRobot,
    price: "$7499/month",
    features: [
      "Behavioral Analysis",
      "Predictive Alerts",
      "Automated Response",
    ],
  },
  {
    id: 2,
    title: "Enterprise Network Security",
    description: "Complete network protection for large-scale operations",
    icon: FaNetworkWired,
    price: "$8999/month",
    features: ["DDOS Protection", "Network Monitoring", "Traffic Analysis"],
  },
  {
    id: 3,
    title: "Data Encryption Suite",
    description: "Military-grade encryption for sensitive data",
    icon: FaDatabase,
    price: "$6999/month",
    features: ["End-to-End Encryption", "Secure Storage", "Key Management"],
  },
  {
    id: 4,
    title: "Advanced Identity Protection",
    description: "Multi-factor authentication and identity verification",
    icon: FaUserShield,
    price: "$7999/month",
    features: ["Biometric Auth", "Zero Trust Security", "Identity Management"],
  },
  {
    id: 5,
    title: "Cyber Intelligence",
    description: "Proactive threat intelligence and monitoring",
    icon: FaUserSecret,
    price: "$9499/month",
    features: ["Dark Web Monitoring", "Threat Intelligence", "Risk Assessment"],
  },
  {
    id: 6,
    title: "Cloud Security Platform",
    description: "Comprehensive cloud infrastructure protection",
    icon: FaServer,
    price: "$8499/month",
    features: ["Cloud Firewall", "Asset Protection", "Compliance Management"],
  },
  {
    id: 7,
    title: "Security Operations Center",
    description: "24/7 dedicated security monitoring and response",
    icon: FaLaptopCode,
    price: "$10999/month",
    features: ["Incident Response", "Real-time Monitoring", "Threat Hunting"],
  },
  {
    id: 8,
    title: "Advanced Access Control",
    description: "Enterprise-grade access management system",
    icon: FaFingerprint,
    price: "$7999/month",
    features: ["Role-based Access", "SSO Integration", "Audit Trails"],
  },
  {
    id: 9,
    title: "Remote Security Management",
    description: "Comprehensive remote security infrastructure",
    icon: FaSatelliteDish,
    price: "$8999/month",
    features: ["Remote Monitoring", "Mobile Security", "Global Coverage"],
  },
  {
    id: 10,
    title: "Enterprise Security Bundle",
    description: "All-inclusive enterprise security solution",
    icon: FaShieldAlt,
    price: "$11999/month",
    features: ["All Advanced Features", "Priority Support", "Custom Solutions"],
  },
];

function AdvancedProtection() {
  return (
    <section className="bg-background lg:py-16 py-5 px-3 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-primary mb-4">
          Advanced Protection Solutions
        </h1>
        <p className="text-muted-foreground text-lg">
          Enterprise-grade security for maximum protection
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {advancedSecurityOffers.map((offer, index) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card rounded-xl p-6 shadow-lg hover:border-primary transition-all duration-300 border-2 border-primary/20 flex flex-col justify-between"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <offer.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold ml-4">{offer.title}</h3>
            </div>
            <p className="text-muted-foreground mb-4">{offer.description}</p>
            <div className="text-2xl font-bold text-primary mb-4">
              {offer.price}
            </div>
            <ul className="space-y-2">
              {offer.features.map((feature, i) => (
                <li key={i} className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full mt-6 bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors duration-300">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default AdvancedProtection;
