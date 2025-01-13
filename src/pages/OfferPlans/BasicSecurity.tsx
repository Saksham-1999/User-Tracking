import { motion } from "framer-motion";
import {
  FaVideo,
  FaFingerprint,
  FaBell,
  FaShieldAlt,
  FaUsers,
  FaLock,
  FaEye,
  FaClock,
  FaKey,
} from "react-icons/fa";

const basicSecurityOffers = [
  {
    id: 1,
    title: "24/7 Surveillance",
    description:
      "Round-the-clock monitoring of your premises with advanced camera systems",
    icon: FaVideo,
    price: "$2499/month",
    features: ["HD Cameras", "Night Vision", "Motion Detection"],
  },
  {
    id: 2,
    title: "Access Control",
    description: "Secure entry management system with biometric authentication",
    icon: FaFingerprint,
    price: "$1999/month",
    features: ["Fingerprint Scanner", "Key Card Access", "Visitor Management"],
  },
  {
    id: 3,
    title: "Intrusion Detection",
    description: "Advanced sensor network to detect unauthorized access",
    icon: FaBell,
    price: "$2999/month",
    features: ["Motion Sensors", "Window Sensors", "Door Contacts"],
  },
  {
    id: 4,
    title: "Cyber Security Basic",
    description: "Essential digital security package for small businesses",
    icon: FaShieldAlt,
    price: "$3999/month",
    features: ["Firewall Protection", "Antivirus", "Email Security"],
  },
  {
    id: 5,
    title: "Guard Patrol",
    description: "Professional security personnel for physical premises",
    icon: FaUsers,
    price: "$5999/month",
    features: ["Trained Guards", "Regular Patrols", "Incident Response"],
  },
  {
    id: 6,
    title: "Smart Locks",
    description: "IoT-enabled smart locking systems for all entry points",
    icon: FaLock,
    price: "$2499/month",
    features: ["Remote Access", "Activity Logs", "Emergency Override"],
  },
  {
    id: 7,
    title: "Video Analytics",
    description: "AI-powered video monitoring and analysis",
    icon: FaEye,
    price: "$4499/month",
    features: ["Face Recognition", "Object Detection", "Behavioral Analysis"],
  },
  {
    id: 8,
    title: "Emergency Response",
    description: "Quick response system for security emergencies",
    icon: FaClock,
    price: "$3499/month",
    features: ["24/7 Support", "Mobile App", "Priority Response"],
  },
  {
    id: 9,
    title: "Key Management",
    description: "Secure key storage and management system",
    icon: FaKey,
    price: "$2999/month",
    features: ["Digital Vault", "Access Logging", "Key Tracking"],
  },
  {
    id: 10,
    title: "Basic Security Bundle",
    description: "Complete security package for essential protection",
    icon: FaShieldAlt,
    price: "$6999/month",
    features: [
      "All Basic Features",
      "Monthly Reports",
      "Security Consultation",
    ],
  },
];

function BasicSecurity() {
  return (
    <section className="bg-background lg:py-16 py-5 px-3 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-primary mb-4">
          Basic Security Solutions
        </h1>
        <p className="text-muted-foreground text-lg">
          Comprehensive security packages for your peace of mind
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {basicSecurityOffers.map((offer, index) => (
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

export default BasicSecurity;
