import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../assets/offerings/ODM.jpg";
import OfferingHeroSection from "./Offering-hero-Section";

const heroData = {
  backgroundImage: heroImage,
  title: "Outcome-Driven Metrics (ODM)",
  subtitle:
    "Empowering Cyber Resilience Through Evangelism, Vigilance, and Metrics",
  buttonText: "Learn More",
  buttonLink: "OutcomeDrivenMetrics",
};

const metrics = [
  {
    title: "Incident Detection and Response Time",
    description:
      "Measure the speed and efficiency of identifying and addressing security incidents.",
  },
  {
    title: "Phishing Defense",
    description:
      "Evaluate the effectiveness of anti-phishing tools and user awareness.",
  },
  {
    title: "User Awareness and Engagement",
    description:
      "Track the level of employee participation and knowledge in security practices.",
  },
  {
    title: "Vulnerability Remediation Efficiency",
    description:
      "Assess the speed and thoroughness of addressing identified vulnerabilities.",
  },
  {
    title: "System Adaptability and Scalability",
    description:
      "Measure the ability of security systems to grow and adapt to new threats.",
  },
  {
    title: "Compliance and Regulatory Performance",
    description:
      "Track adherence to industry standards and regulatory requirements.",
  },
  {
    title: "Risk Reduction and Threat Intelligence",
    description:
      "Evaluate the effectiveness of threat prevention and risk mitigation strategies.",
  },
  {
    title: "Advanced Persistent Threat (APT) Prevention",
    description:
      "Measure the ability to detect and prevent sophisticated, long-term attacks.",
  },
  {
    title: "Ransomware Defense and Recovery",
    description:
      "Assess the effectiveness of ransomware prevention and recovery capabilities.",
  },
  {
    title: "Endpoint Security Effectiveness",
    description:
      "Evaluate the protection of individual devices within the network.",
  },
];

function OutcomeDrivenMetrics() {
  return (
    <div className="bg-gradient-to-b from-secondary/50 to-secondary/30 min-h-screen">
      <section className="w-full">
        <OfferingHeroSection data={heroData} />
      </section>

      {/* Metrics Grid with Animation */}
      <section id="OutcomeDrivenMetrics" className="py-20">
        <div className="w-full px-3 lg:px-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-12 text-center text-primary"
          >
            Key Performance Indicators
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-primary/10"
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    {metric.title}
                  </h3>
                  <p className="text-foreground/80 text-lg leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Frameworks with Glass Effect */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="w-full px-3 lg:px-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-12 text-center text-primary"
          >
            Strategic Frameworks
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-primary/10"
            >
              <h3 className="text-3xl font-bold mb-6 text-primary">
                WAVE Framework
              </h3>
              <ul className="space-y-4">
                {[
                  "Wisdom: Empowering employees with knowledge",
                  "Awareness: Cultivating a vigilant mindset",
                  "Vigilance: Encouraging continuous monitoring",
                  "Engagement: Fostering collaboration",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-3 text-lg"
                  >
                    <span className="text-primary font-bold">{item[0]}</span>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-primary/10"
            >
              <h3 className="text-3xl font-bold mb-6 text-primary">
                FLOW Framework
              </h3>
              <ul className="space-y-4">
                {[
                  "Focus: Prioritizing effective security measures",
                  "Learning: Promoting continuous education",
                  "Observation: Keenly monitoring systems",
                  "Well-being: Ensuring a safe digital environment",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-3 text-lg"
                  >
                    <span className="text-primary font-bold">{item[0]}</span>
                    <span className="text-foreground/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to Enhance Your Cybersecurity Metrics?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Contact us today to learn how our Outcome-Driven Metrics can
            transform your security posture.
          </p>
          <Link to="/contact-us">
            <button className="bg-white text-primary font-bold py-4 px-10 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

export default OutcomeDrivenMetrics;
