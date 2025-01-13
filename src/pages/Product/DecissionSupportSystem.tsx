import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import OfferingHeroSection from "./Offering-hero-Section";
import dssHero from "../../assets/offerings/Decison-support.jpg";
import {
  Brain,
  LineChart,
  Globe2,
  Layers,
  Cpu,
  Database,
  Network,
  Workflow,
  ArrowUpRightSquare,
  Hexagon,
  Zap,
  Target,
  CheckCircle,
  Building2,
  Factory,
  CheckCircle2,
  Webhook,
  Cloud,
  CircleCheck,
} from "lucide-react";

const heroData = {
  backgroundImage: dssHero,
  title: "Intelligent Decision Support System",
  subtitle: "Next-Generation Analytics & Predictive Modeling Platform",
  buttonText: "Explore Capabilities",
  buttonLink: "decision-support",
};

const analyticsFeatures = [
  {
    icon: Brain,
    title: "Cognitive Analytics",
    description: "Advanced AI-driven data processing engine",
    capabilities: [
      "Neural network processing",
      "Pattern recognition",
      "Predictive modeling",
    ],
  },
  {
    icon: Globe2,
    title: "3D Geographical Interface",
    description: "Interactive spatial visualization system",
    capabilities: [
      "Real-time mapping",
      "Terrain analysis",
      "Location intelligence",
    ],
  },
  {
    icon: Cpu,
    title: "Real-time Processing",
    description: "Instant data analysis and visualization",
    capabilities: [
      "Live data streaming",
      "Dynamic updates",
      "Instant insights",
    ],
  },
];

const systemCapabilities = [
  {
    icon: Database,
    title: "Data Integration",
    description: "Seamless integration with multiple data sources",
    features: [
      "Multi-source data fusion",
      "Real-time synchronization",
      "Automated data cleaning",
    ],
  },
  {
    icon: Network,
    title: "Network Analysis",
    description: "Complex network relationship mapping",
    features: [
      "Relationship mapping",
      "Network visualization",
      "Connection analysis",
    ],
  },
  {
    icon: Layers,
    title: "Multi-layer Analysis",
    description: "Comprehensive data layer examination",
    features: ["Layer correlation", "Cross-data analysis", "Pattern detection"],
  },
];

const visualizationTools = [
  {
    title: "3D Terrain Mapping",
    description: "Interactive geographical visualization",
    icon: Globe2,
    metrics: ["High-resolution rendering", "Real-time updates"],
  },
  {
    title: "Data Flow Analysis",
    description: "Visual representation of data streams",
    icon: Workflow,
    metrics: ["Live streaming", "Flow monitoring"],
  },
  {
    title: "Predictive Charts",
    description: "Future trend visualization",
    icon: LineChart,
    metrics: ["Trend analysis", "Forecast modeling"],
  },
];

const DecisionSupportSystem = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/5">
      <OfferingHeroSection data={heroData} />
      <div id="decision-support">
        {/* Statistics Overview */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="container mx-auto px-4 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "97%", label: "Analysis Accuracy", icon: Target },
                { number: "<0.1s", label: "Processing Time", icon: Zap },
                { number: "24/7", label: "System Uptime", icon: Cpu },
                { number: "100+", label: "Active Deployments", icon: Globe2 },
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
                  <p className="text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      {/* Core Features */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center text-primary mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Innovative Analytics Features
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {analyticsFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-all duration-300" />
                <div className="relative bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-primary/20 backdrop-blur-sm">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-gradient-to-br from-primary to-primary/70 p-3 rounded-xl">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.capabilities.map((capability, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-2 text-sm text-muted-foreground"
                      >
                        <Hexagon className="w-4 h-4 text-primary" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* System Capabilities */}
      <section className="py-20 bg-gradient-to-r from-background via-secondary/5 to-background">
        <div className="container mx-auto px-3 lg:px-20">
          <motion.h2
            className="text-4xl font-bold text-center text-primary mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Advanced System Capabilities
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {systemCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="bg-primary/10 p-4 rounded-xl w-fit mb-6">
                  <capability.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground/90 mb-4">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {capability.description}
                </p>
                <ul className="space-y-3">
                  {capability.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visualization Tools */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-3 lg:px-20">
          <motion.h2
            className="text-4xl font-bold text-center text-primary mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Advanced Visualization Tools
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visualizationTools.map((tool, index) => (
              <motion.div
                key={index}
                className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <tool.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground/90">
                    {tool.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">{tool.description}</p>
                <ul className="space-y-2">
                  {tool.metrics.map((metric, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <ArrowUpRightSquare className="w-4 h-4 text-primary mr-2" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-gradient-to-r from-background to-secondary/5">
        <div className="container mx-auto px-3 lg:px-20">
          <motion.h2
            className="text-4xl font-bold text-center text-primary mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Success Stories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Smart City Implementation",
                description:
                  "Helped a metropolitan city reduce operational costs by 35% through intelligent data analysis",
                metrics: [
                  "35% cost reduction",
                  "50% faster response time",
                  "90% accuracy in predictions",
                ],
                icon: Building2,
              },
              {
                title: "Industrial Operations",
                description:
                  "Optimized manufacturing processes for a Fortune 500 company using real-time analytics",
                metrics: [
                  "40% efficiency increase",
                  "25% waste reduction",
                  "Real-time monitoring",
                ],
                icon: Factory,
              },
            ].map((study, index) => (
              <motion.div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <study.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground/90">
                    {study.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  {study.description}
                </p>
                <ul className="space-y-3">
                  {study.metrics.map((metric, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">{metric}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto px-3 lg:px-20">
          <motion.h2
            className="text-4xl font-bold text-center text-primary mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Seamless Integration Capabilities
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "API Integration", icon: Webhook },
              { title: "Cloud Services", icon: Cloud },
              { title: "Database Systems", icon: Database },
              { title: "IoT Devices", icon: Cpu },
            ].map((integration, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <integration.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground/90">
                  {integration.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-gradient-to-r from-background via-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center text-primary mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Technical Specifications
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                category: "Processing Power",
                specs: [
                  "Multi-threaded processing",
                  "GPU acceleration support",
                  "Real-time data processing",
                ],
              },
              {
                category: "Security Features",
                specs: [
                  "End-to-end encryption",
                  "Role-based access control",
                  "Audit trail logging",
                ],
              },
              {
                category: "Scalability",
                specs: [
                  "Horizontal scaling",
                  "Load balancing",
                  "Distributed processing",
                ],
              },
              {
                category: "Data Management",
                specs: [
                  "Automated backups",
                  "Data versioning",
                  "Recovery mechanisms",
                ],
              },
            ].map((spec, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold text-primary mb-4">
                  {spec.category}
                </h3>
                <ul className="space-y-3">
                  {spec.specs.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-2 text-muted-foreground"
                    >
                      <CircleCheck className="w-5 h-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
            Transform Your Decision Making
          </h2>
          <p className="text-2xl mb-12 max-w-3xl mx-auto">
            Harness the power of advanced analytics and AI to make informed
            strategic decisions
          </p>
          <Link to="/contact-us">
            <motion.button
              className="bg-white text-primary font-bold py-4 px-12 rounded-full hover:bg-opacity-90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Demo
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default DecisionSupportSystem;
