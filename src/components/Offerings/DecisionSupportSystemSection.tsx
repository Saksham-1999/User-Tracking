import { motion } from "framer-motion";
import discussion from "../../assets/Products/discussion.jpg";
import { Shield, LineChart, BarChart3, Network } from "lucide-react";

const decisionSupportSystemData = {
  title: "Decision Support System",
  image: discussion,
  description:
    "Our advanced Cyber Intelligence System leverages AI and machine learning to provide real-time threat detection, risk assessment, and actionable security insights for your organization's digital infrastructure.",
  features: [
    "Real-time Threat Detection & Analysis",
    "AI-Powered Risk Prediction",
    "Security Intelligence Dashboard",
    "Incident Response Planning",
  ],
};

const featureIcons = [Shield, LineChart, BarChart3, Network];

const DecisionSupportSystemSection = () => {
  return (
    <section
      id="decision-support-system"
      className="w-full px-3 lg:px-20 py-16"
    >
      <div className="w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-left bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {decisionSupportSystemData.title}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <img
              src={decisionSupportSystemData.image}
              alt={decisionSupportSystemData.title}
              className="rounded-2xl  w-full h-auto "
            />
            <div className="absolute  rounded-2xl opacity-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <p className="text-xl text-foreground/80 leading-relaxed backdrop-blur-sm bg-secondary/50 p-6 rounded-xl border border-primary/10">
              {decisionSupportSystemData.description}
            </p>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary flex items-center gap-2">
                <Shield className="w-6 h-6" />
                Key Security Features
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {decisionSupportSystemData.features.map((feature, index) => {
                  const Icon = featureIcons[index];
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-secondary/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-secondary transition-all duration-300 border border-primary/10"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-foreground/80 font-medium">
                          {feature}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

};
export default DecisionSupportSystemSection;
