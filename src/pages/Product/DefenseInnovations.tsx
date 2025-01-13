import { motion } from "framer-motion";
import defense from "../../assets/offerings/defenceee.jpg";
import { Link } from "react-router-dom";
import OfferingHeroSection from "./Offering-hero-Section";
import {
  Radio,
  Radar,
  Satellite,
  Eye,
  Map,
  Cpu,
  Plane,
  Command,
} from "lucide-react";

const heroData = {
  backgroundImage: defense,
  title: "Defense Innovations",
  subtitle: "Advanced technologies for modern defense capabilities",
  buttonText: "Explore Solutions",
  buttonLink: "DefenseInnovations",
};

const DefenseInnovations = () => {
  const defenseSolutions = [
    {
      title: "Tactical Communications",
      description: "Secure battlefield communication systems",
      icon: Radio,
    },
    {
      title: "Surveillance Systems",
      description: "Advanced monitoring and detection",
      icon: Eye,
    },
    {
      title: "Command & Control",
      description: "Integrated command center solutions",
      icon: Command,
    },
    {
      title: "Unmanned Systems",
      description: "Autonomous defense platforms",
      icon: Plane,
    },
  ];

  const capabilities = [
    {
      title: "Radar Systems",
      description: "Long-range detection and tracking",
      icon: Radar,
    },
    {
      title: "Satellite Integration",
      description: "Space-based defense capabilities",
      icon: Satellite,
    },
    {
      title: "Combat AI",
      description: "Intelligent battlefield analysis",
      icon: Cpu,
    },
    {
      title: "Tactical Mapping",
      description: "Real-time terrain intelligence",
      icon: Map,
    },
  ];
  const defenseAdvantages = [
    {
      title: "Advanced Encryption",
      description: "Military-grade security protocols",
      icon: Command,
    },
    {
      title: "Real-time Analytics",
      description: "Instant battlefield intelligence",
      icon: Cpu,
    },
    {
      title: "Network Resilience",
      description: "Robust communication infrastructure",
      icon: Radio,
    },
    {
      title: "Precision Systems",
      description: "High-accuracy targeting solutions",
      icon: Radar,
    },
  ];

  const certifications = [
    "ISO 27001 Certified",
    "Military Standards Compliant",
    "NATO Compatible Systems",
    "Cyber Defense Certified",
  ];

  return (
    <div className="bg-background text-foreground">
      <OfferingHeroSection data={heroData} />
      <div id="DefenseInnovations">
        {/* Core Defense Solutions */}
        <section className="py-16 px-3 lg:px-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="container mx-auto relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl font-bold text-primary mb-6">
                Defense Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                State-of-the-art defense technologies for modern military
                operations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {defenseSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="group bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <solution.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {solution.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      {/* Strategic Capabilities */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-3 lg:px-20"> 
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-5xl font-bold text-primary mb-6">
              Strategic Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enhanced defense capabilities for strategic advantage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6 bg-card p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-primary/10 p-4 rounded-lg">
                  <capability.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {capability.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Success Metrics */}
      <section className="py-16 px-3 lg:px-20">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-5xl font-bold text-primary mb-6">
              Mission Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven results in defense operations
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { metric: "99.9%", label: "Operation Success Rate" },
              { metric: "24/7", label: "Mission Support" },
              { metric: "100+", label: "Deployments" },
              { metric: "5000+", label: "Training Hours" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-card rounded-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-4xl font-bold text-primary mb-2">
                  {stat.metric}
                </h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Advanced Technologies Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container mx-auto px-3 lg:px-20">
          <motion.div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-6">
              Advanced Defense Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Next-generation solutions for modern warfare
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {defenseAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="bg-card p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <advantage.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="py-16 px-3 lg:px-20">
        <div className="container mx-auto">
          <motion.div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-6">
              System Integration
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Seamless integration with existing defense infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Command Centers",
                description:
                  "Integrated command and control systems for enhanced situational awareness",
                icon: Command,
              },
              {
                title: "Field Operations",
                description: "Mobile tactical solutions for ground forces",
                icon: Map,
              },
              {
                title: "Air Defense",
                description: "Advanced air surveillance and defense systems",
                icon: Plane,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-card p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <item.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-3 lg:px-20">
          <motion.div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-6">
              Certifications & Standards
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meeting the highest defense industry standards
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Command className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-primary">{cert}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-5xl font-bold mb-8 text-white">
            Enhance Your Defense Capabilities
          </h2>
          <p className="text-2xl mb-12 text-white/90 max-w-2xl mx-auto">
            Partner with us for advanced defense solutions
          </p>
          <Link to="/contact-us">
            <motion.button
              className="bg-white text-primary font-bold py-4 px-12 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Consultation
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default DefenseInnovations;
