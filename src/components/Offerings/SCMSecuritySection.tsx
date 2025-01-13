import { motion } from "framer-motion";
import scm from "../../assets/Products/scm.jpg";

const scmSecurityData = {
  title: "SCM Security – Automotive",
  image: scm,
  description:
    "Our SCM Security solution for the automotive industry ensures robust protection throughout the supply chain, safeguarding critical components and data.",
  features: [
    "End-to-end supply chain visibility",
    "Secure communication protocols",
    "Counterfeit part detection",
    "Compliance management",
  ],
};

const SCMSecuritySection = () => {
  return (
    <section id="SCM-security-automotive" className="w-full px-3 lg:px-20">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-4">
            {scmSecurityData.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {scmSecurityData.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px]"
          >
            <img
              src={scmSecurityData.image}
              alt={scmSecurityData.title}
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {scmSecurityData.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-lg font-medium">{feature}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SCMSecuritySection;
