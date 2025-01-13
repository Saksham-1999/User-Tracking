import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import OfferingHeroSection from "./Offering-hero-Section";
import uid from "../../assets/offerings/uid.jpg";
import {
  Waves,
  Shield,
  Radar,
  Activity,
  Target,
  AlertCircle,
  Anchor,
  Map,
  Router,
  Server,
  Network,
  GitMerge,
  Video,
  GlassWater,
  Radio,
  CheckCircle,
} from "lucide-react";

const heroData = {
  backgroundImage: uid,
  title: "Underwater Intrusion Detection System",
  subtitle: "State-of-the-art Acoustic Vector Sensors for Maritime Security",
  buttonText: "Explore Technology",
  buttonLink: "underwater-detection",
};

const features = [
  {
    icon: Waves,
    title: "Advanced Acoustic Sensing",
    description: "Indigenous Acoustic Vector Sensors developed by IIT Delhi",
    benefits: [
      "High precision detection",
      "Real-time monitoring",
      "Deep water capabilities",
    ],
  },
  {
    icon: Shield,
    title: "Maritime Security",
    description: "Comprehensive underwater surveillance system",
    benefits: [
      "Port security",
      "Coastal monitoring",
      "Infrastructure protection",
    ],
  },
  {
    icon: Radar,
    title: "AI-Powered Detection",
    description: "Intelligent threat recognition and analysis",
    benefits: ["Pattern recognition", "Anomaly detection", "Automated alerts"],
  },
];

const technicalSpecs = [
  {
    category: "Sensor Capabilities",
    specs: [
      "Frequency range: 10Hz - 100kHz",
      "Depth rating: Up to 1000m",
      "360° coverage radius",
      "Multi-target tracking",
    ],
  },
  {
    category: "AI Processing",
    specs: [
      "Real-time signal processing",
      "Neural network classification",
      "Automated threat assessment",
      "Pattern recognition algorithms",
    ],
  },
];

// Add use cases
const useCases = [
  {
    title: "Port Security",
    description: "Protect critical port infrastructure from underwater threats",
    icon: Anchor,
  },
  {
    title: "Coastal Surveillance",
    description: "Monitor territorial waters for unauthorized intrusions",
    icon: Map,
  },
  {
    title: "Asset Protection",
    description: "Safeguard underwater pipelines and communication cables",
    icon: Shield,
  },
];
const statistics = [
  { number: "500m", label: "Detection Range", icon: Target },
  { number: "95%", label: "Detection Accuracy", icon: Activity },
  { number: "24/7", label: "Active Monitoring", icon: Radar },
  { number: "<0.1%", label: "False Alarm Rate", icon: AlertCircle },
];

const sensorOptions = [
  {
    icon: Waves,
    title: "Acoustic Vector Sensors (AVS)",
    description: "High-precision directional acoustic sensing",
    capabilities: [
      "Multi-dimensional acoustic detection",
      "Direction of arrival estimation",
      "Superior noise rejection",
      "Compact form factor",
    ],
  },
  {
    icon: Radio,
    title: "Hydrophone Arrays",
    description: "Traditional underwater acoustic monitoring",
    capabilities: [
      "Wide frequency coverage",
      "Depth-independent operation",
      "Multiple sensor configurations",
      "Cost-effective deployment",
    ],
  },
];

const deploymentLocations = [
  {
    icon: Anchor,
    title: "Deep Water",
    description: "Installations for offshore and deep-sea environments",
    features: [
      "Depth rating up to 1000m",
      "Pressure-resistant housing",
      "Long-term reliability",
      "Extended detection range",
    ],
  },
  {
    icon: Waves,
    title: "Coastal Areas",
    description: "Protection for near-shore and harbor environments",
    features: [
      "Shallow water optimization",
      "Tide compensation",
      "Weather-resistant design",
      "Quick deployment options",
    ],
  },
  {
    icon: GlassWater,
    title: "Estuaries",
    description: "Monitoring in mixed water environments",
    features: [
      "Salinity variation handling",
      "Current compensation",
      "Environmental adaptation",
      "Multiple sensor integration",
    ],
  },
];

const videoDetection = [
  {
    icon: Video,
    title: "AI-Powered Video Analysis",
    description: "Intelligent video processing system",
    features: [
      "Real-time object detection",
      "Underwater image enhancement",
      "Motion tracking",
      "Low-light capabilities",
    ],
  },
  {
    icon: GitMerge,
    title: "Signal Fusion",
    description: "Combined acoustic and video data processing",
    features: [
      "Multi-sensor correlation",
      "Enhanced threat validation",
      "Reduced false alarms",
      "Comprehensive situation awareness",
    ],
  },
];

const connectivityFeatures = [
  {
    icon: Network,
    title: "Remote Deployment",
    description: "Robust remote installation solutions",
    features: [
      "Autonomous operation",
      "Solar power options",
      "Battery backup systems",
      "Weather-resistant enclosures",
    ],
  },
  {
    icon: Server,
    title: "Central Command",
    description: "Centralized monitoring and control",
    features: [
      "Real-time data streaming",
      "Secure communications",
      "Multi-site integration",
      "Redundant servers",
    ],
  },
  {
    icon: Router,
    title: "Network Infrastructure",
    description: "Reliable communication backbone",
    features: [
      "Satellite connectivity",
      "4G/5G fallback",
      "Mesh networking",
      "End-to-end encryption",
    ],
  },
];
  const UnderwaterInstructionDetection = () => {
    return (
      <div className="bg-background text-foreground">
        <OfferingHeroSection data={heroData} />
        <div id="underwater-detection">
          {/* Statistics Section */}
          <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10">
            <div className="container mx-auto px-4 lg:px-20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {statistics.map((stat, index) => (
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
                    <p className="text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-r from-background via-secondary/5 to-background">
          <motion.div
            className="w-full px-4 lg:px-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-16 text-center text-primary">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-8 rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
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
                        <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 bg-gradient-to-r from-background to-primary/5">
          <div className="container mx-auto px-4 lg:px-20">
            <h2 className="text-4xl font-bold text-center text-primary mb-16">
              Technical Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technicalSpecs.map((spec, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-8 rounded-xl shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    {spec.category}
                  </h3>
                  <ul className="space-y-4">
                    {spec.specs.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>      
        <section className="py-20 bg-gradient-to-r from-background via-secondary/5 to-background">
          <div className="container mx-auto px-4 lg:px-20">
            <h2 className="text-4xl font-bold text-center text-primary mb-16">
              Choice of Sensors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sensorOptions.map((sensor, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                    <sensor.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground/90 mb-4">
                    {sensor.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {sensor.description}
                  </p>
                  <ul className="space-y-2">
                    {sensor.capabilities.map((capability, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-primary mr-2" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Deployment Locations */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-20">
            <h2 className="text-4xl font-bold text-center text-primary mb-16">
              Deployment Locations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {deploymentLocations.map((location, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                    <location.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground/90 mb-4">
                    {location.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {location.description}
                  </p>
                  <ul className="space-y-2">
                    {location.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Detection */}
        <section className="py-20 bg-gradient-to-r from-background via-secondary/5 to-background">
          <div className="container mx-auto px-4 lg:px-20">
            <h2 className="text-4xl font-bold text-center text-primary mb-16">
              Video Detection & Signal Fusion
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videoDetection.map((video, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                    <video.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground/90 mb-4">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {video.description}
                  </p>
                  <ul className="space-y-2">
                    {video.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Connectivity Features */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-20">
            <h2 className="text-4xl font-bold text-center text-primary mb-16">
              Connectivity & Infrastructure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {connectivityFeatures.map((connectivity, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                    <connectivity.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground/90 mb-4">
                    {connectivity.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {connectivity.description}
                  </p>
                  <ul className="space-y-2">
                    {connectivity.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-20">
            <h2 className="text-4xl font-bold text-center text-primary mb-16">
              Applications & Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                    <useCase.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground/90 mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Call to Action */}
        <motion.section
          className="py-24 bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold mb-8">
              Secure Your Maritime Infrastructure
            </h2>
            <p className="text-2xl mb-12 max-w-3xl mx-auto">
              Deploy cutting-edge underwater surveillance technology to protect
              your maritime assets
            </p>
            <Link to="/contact-us">
              <motion.button
                className="bg-white text-primary font-bold py-4 px-12 rounded-full hover:bg-opacity-90 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>
          </div>
        </motion.section>
      </div>
    );
  };

  export default UnderwaterInstructionDetection;
