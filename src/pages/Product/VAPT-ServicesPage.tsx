import { motion } from "framer-motion";
import {
  Shield,
  Server,
  Globe,
  Smartphone,
  Cloud,
  Cpu,
  Lock,
  CheckCircle,
} from "lucide-react";
import vpn from "../../assets/offerings/VPN.jpg";
import heroImage from "../../assets/offerings/VAPT.jpg";
import OfferingHeroSection from "./Offering-hero-Section";

const heroData = {
  backgroundImage: heroImage,
  title: "VAPT Services",
  subtitle: "Comprehensive Vulnerability Assessment and Penetration Testing",
  buttonText: "Learn More",
  buttonLink: "OutcomeDrivenMetrics",
};

const VAPTServicesPage = () => {
  return (
    <div className="bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="w-full">
        <OfferingHeroSection data={heroData} />
      </section>

      {/* What is VAPT Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <img
                src={vpn}
                alt="VAPT Illustration"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-primary mb-6">
                What is VAPT?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Vulnerability Assessment and Penetration Testing (VAPT) is a
                comprehensive security testing approach that identifies,
                analyzes, and helps mitigate security vulnerabilities in your
                systems and applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Coverage */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">
              VAPT Services Coverage
            </h2>
            <p className="text-xl text-muted-foreground">
              We carry out VAPT services for securing:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Globe />, title: "Web-based Infrastructure" },
              { icon: <Cloud />, title: "Cloud-based Applications" },
              { icon: <Smartphone />, title: "Mobile Applications" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-card p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group hover:bg-primary hover:text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-primary group-hover:text-white mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">
            Use Cases Supported
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Web Pages",
              "Web Applications",
              "APIs",
              "Applications",
              "Networks",
              "Configurations",
              "Servers / Infra",
              "Social Engineering",
            ].map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-primary/20 hover:bg-primary hover:text-white p-6 rounded-xl text-center transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <p className="font-semibold">{useCase}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VAPT Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">
            Our VAPT Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Server />,
                title: "Network VAPT",
                description:
                  "Comprehensive assessment of network infrastructure",
              },
              {
                icon: <Globe />,
                title: "Web Application VAPT",
                description:
                  "In-depth testing of web applications for vulnerabilities",
              },
              {
                icon: <Smartphone />,
                title: "Mobile App VAPT",
                description:
                  "Security assessment for iOS and Android applications",
              },
              {
                icon: <Cloud />,
                title: "Cloud VAPT",
                description:
                  "Vulnerability assessment for cloud-based infrastructure",
              },
              {
                icon: <Cpu />,
                title: "IoT VAPT",
                description: "Security testing for Internet of Things devices",
              },
              {
                icon: <Lock />,
                title: "API VAPT",
                description:
                  "Thorough testing of API endpoints and integrations",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-card p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border group hover:border-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">
            Benefits of Our VAPT Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="flex items-start gap-6 p-8 bg-card rounded-xl shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <Shield className="text-primary w-12 h-12 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4">Proactive Security</h3>
                <p className="text-muted-foreground">
                  Identify and address vulnerabilities before they can be
                  exploited
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-start gap-6 p-8 bg-card rounded-xl shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <CheckCircle className="text-primary w-12 h-12 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4">Compliance</h3>
                <p className="text-muted-foreground">
                  Meet regulatory requirements and industry standards
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Secure Your Systems?
          </h2>
          <button className="bg-white text-primary font-bold py-4 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default VAPTServicesPage;
