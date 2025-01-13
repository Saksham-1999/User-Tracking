import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, FileCheck, Target, CheckCircle, Award } from "lucide-react";
import heroImage from "../../assets/offerings/ciso.jpg";
import OfferingHeroSection from "./Offering-hero-Section";

const heroData = {
  backgroundImage: heroImage,
  title: "Virtual CISO Services",
  subtitle: "Strategic Cybersecurity Leadership for Modern Enterprises",
  buttonText: "Learn More",
  buttonLink: "VirtualCisoPage",
};

const salientFeatures = [
  {
    icon: <FileCheck className="w-6 h-6 text-primary" />,
    text: "You provide us with a job description for the CISO",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    text: "We provide you with a skilled CISO candidate for the role",
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    text: "The person undergoes the selection requirements, interview, and evaluation process",
  },
  {
    icon: <Award className="w-6 h-6 text-primary" />,
    text: "After selection, work begins based on your chosen engagement model",
  },
];

const responsibilities = [
  "Representing your organization as CISO with external and internal stakeholders",
  "Ensuring Cybersecurity policies, procedures and guidelines are prepared and authorized",
  "Selection and preparation for cybersecurity certifications",
  "Training stakeholders for cybersecurity competencies",
  "Managing external auditors and ensuring successful audit outcomes",
  "Handling compliance requirements in Cybersecurity",
];

const serviceModels = [
  {
    title: "Fully Outsourced",
    features: [
      "Traditional CISO services PLUS value-added services",
      "Dedicated Single Point of Contact",
      "Qualified and competent technical resource",
    ],
  },
  {
    title: "CISO Augmentation",
    features: [
      "Security professionals on payroll of EkVayu",
      "Cutting edge consulting services",
      "Complete services from Architecture to hiring",
    ],
  },
];

const VirtualCisoPage = () => {
  return (
    <div className="bg-background text-foreground">
      <OfferingHeroSection data={heroData} />

      {/* CISO Service Introduction */}
      <section id="VirtualCisoPage" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="w-full px-3 lg:px-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-primary">
              CISO as a Service
            </h2>
            <p className="text-xl text-foreground/80 leading-relaxed">
              We provide a solution for CISO staffing that offers unparalleled
              flexibility, quality of service at attractive rates. The service
              enables you to easily fulfill your requirements for a CISO.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {salientFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <p className="text-foreground/80">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CISO Responsibilities */}
      <section className="bg-secondary py-20">
        <div className="w-full px-3 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=""
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-primary">
              CISO Responsibilities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {responsibilities.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 bg-card p-6 rounded-xl shadow-md"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground/80">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Models */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="w-full px-3 lg:px-20">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">
            Service Models
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {serviceModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-6 text-primary">
                  {model.title}
                </h3>
                <ul className="space-y-4">
                  {model.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-primary-foreground"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Enhance Your Security Posture?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our Virtual CISO services can strengthen your
              organization
            </p>
            <Link to="/contact-us">
              <button className="bg-white text-primary font-semibold py-4 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl">
                Contact Us Today
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VirtualCisoPage;
