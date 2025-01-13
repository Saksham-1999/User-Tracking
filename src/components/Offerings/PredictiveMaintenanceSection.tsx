import { motion } from "framer-motion";
import { Gauge, Brain, Calendar, BarChart } from "lucide-react";
import predictive from "../../assets/Products/predictivee.jpg";

const predictiveMaintenanceData = {
  title: "Predictive Maintenance for Machines",
  image: predictive,
  description:
    "Our Predictive Maintenance solution leverages advanced analytics and IoT sensors to optimize machine performance and prevent unexpected downtime.",
  features: [
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "Continuous equipment monitoring and analysis",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-driven Prediction",
      description: "Smart failure prediction using machine learning",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Maintenance Scheduling",
      description: "Optimized maintenance planning and scheduling",
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Comprehensive dashboard for data visualization",
    },
  ],
};

const PredictiveMaintenanceSection = () => {
  return (
    <section id="predictive-maintenance" className="w-full px-3 lg:px-20">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            {predictiveMaintenanceData.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {predictiveMaintenanceData.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[420px]"
          >
            <img
              src={predictiveMaintenanceData.image}
              alt={predictiveMaintenanceData.title}
              className="w-full h-full object-cover aspect-square rounded-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {predictiveMaintenanceData.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <div className="text-primary">{feature.icon}</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PredictiveMaintenanceSection;
