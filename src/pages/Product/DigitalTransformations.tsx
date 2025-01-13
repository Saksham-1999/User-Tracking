import { motion } from "framer-motion";
import digital from "../../assets/offerings/digital.jpg";
import { Link } from "react-router-dom";
import OfferingHeroSection from "./Offering-hero-Section";
import {
  Cloud,
  BarChart,
  Smartphone,
  Settings,
  Target,
  Zap,
  Database,
  Globe,
  Layers,
} from "lucide-react";

const heroData = {
  backgroundImage: digital,
  title: "Digital Transformation",
  subtitle: "Revolutionize your business with cutting-edge digital solutions",
  buttonText: "Transform Now",
  buttonLink: "DigitalTransformations",
};
const successMetrics = [
  { number: "98%", label: "Digital Adoption Rate" },
  { number: "60%", label: "Cost Reduction" },
  { number: "3x", label: "Faster Time-to-Market" },
  { number: "200%", label: "ROI Achievement" },
];

const industryExpertise = [
  {
    title: "Healthcare",
    description: "Digital health records and telemedicine solutions",
    icon: Target,
  },
  {
    title: "Finance",
    description: "Digital banking and fintech innovations",
    icon: Database,
  },
  {
    title: "Manufacturing",
    description: "Smart factory and IoT integration",
    icon: Settings,
  },
  {
    title: "Retail",
    description: "E-commerce and omnichannel solutions",
    icon: Globe,
  },
];

const DigitalTransformations = () => {
  const transformationServices = [
    {
      title: "Cloud Migration",
      description: "Seamless transition to cloud infrastructure",
      icon: Cloud,
    },
    {
      title: "Process Automation",
      description: "Streamline operations with smart automation",
      icon: Settings,
    },
    {
      title: "Digital Analytics",
      description: "Data-driven insights for better decisions",
      icon: BarChart,
    },
    {
      title: "Mobile Solutions",
      description: "Enterprise-grade mobile applications",
      icon: Smartphone,
    },
  ];

  const benefits = [
    {
      title: "Enhanced Efficiency",
      description: "Optimize operations and reduce costs",
      icon: Zap,
    },
    {
      title: "Global Reach",
      description: "Expand your market presence",
      icon: Globe,
    },
    {
      title: "Data Integration",
      description: "Unified data ecosystem",
      icon: Database,
    },
    {
      title: "Scalable Growth",
      description: "Future-proof your business",
      icon: Target,
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <OfferingHeroSection data={heroData} />
      <div id="DigitalTransformations">
        {/* Core Services Section */}
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
                Digital Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive digital transformation services for modern
                enterprises
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {transformationServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="group bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <service.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      {/* Benefits Section */}
      <section className="py-16 px-3 lg:px-20">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-5xl font-bold text-primary mb-6">
              Transformation Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Drive growth through digital innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6 bg-card p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-primary/10 p-4 rounded-lg">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container mx-auto px-3 md:px-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-5xl font-bold text-primary mb-6">
              Transformation Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable results from our digital solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-card rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-4xl font-bold text-primary mb-2">
                  {metric.number}
                </h3>
                <p className="text-muted-foreground">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="py-16 px-3 lg:px-20">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-5xl font-bold text-primary mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored digital transformation for every sector
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryExpertise.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-card p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <industry.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-3 lg:px-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-5xl font-bold text-primary mb-6">
              Our Tech Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto ">
              Cutting-edge technologies powering your transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Cloud Native", icon: Cloud },
              { name: "Big Data", icon: Database },
              { name: "IoT", icon: Layers },
              { name: "AI/ML", icon: Zap },
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-card rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <tech.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold">{tech.name}</h3>
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
            Start Your Digital Journey Today
          </h2>
          <p className="text-2xl mb-12 text-white/90 max-w-2xl mx-auto">
            Transform your business for the digital age
          </p>
          <Link to="/contact-us">
            <motion.button
              className="bg-white text-primary font-bold py-4 px-12 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Begin Transformation
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default DigitalTransformations;
