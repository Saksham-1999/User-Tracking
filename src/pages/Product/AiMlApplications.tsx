import { motion } from "framer-motion";
import aiml from "../../assets/offerings/aiml.jpg";
import { Link } from "react-router-dom";
import OfferingHeroSection from "./Offering-hero-Section";
import {
  Brain,
  Bot,
  Database,
  LineChart,
  Cpu,
  Network,
  Microscope,
  Sparkles,
  Code,
  Workflow,
  Lightbulb,
} from "lucide-react";

const heroData = {
  backgroundImage: aiml,
  title: "AI & ML Applications",
  subtitle: "Transforming businesses with intelligent solutions",
  buttonText: "Explore Solutions",
  buttonLink: "AiMlApplications",
};

const AiMlApplications = () => {
  const aiSolutions = [
    {
      title: "Machine Learning",
      description: "Custom ML models for predictive analytics",
      icon: Brain,
    },
    {
      title: "Natural Language Processing",
      description: "Advanced text and speech processing",
      icon: Bot,
    },
    {
      title: "Computer Vision",
      description: "Intelligent image and video analysis",
      icon: Microscope,
    },
    {
      title: "Deep Learning",
      description: "Neural networks for complex pattern recognition",
      icon: Network,
    },
  ];

  const useCases = [
    {
      title: "Predictive Analytics",
      description: "Forecast trends and business outcomes",
      icon: LineChart,
    },
    {
      title: "Process Automation",
      description: "Streamline operations with AI",
      icon: Workflow,
    },
    {
      title: "Data Mining",
      description: "Extract valuable insights from data",
      icon: Database,
    },
    {
      title: "Smart Solutions",
      description: "Intelligent decision-making systems",
      icon: Lightbulb,
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <OfferingHeroSection data={heroData} />
  <div id="AiMlApplications">
      {/* AI Solutions Section */}
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
              AI-Powered Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leverage the power of artificial intelligence for your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiSolutions.map((solution, index) => (
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
                <p className="text-muted-foreground">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </div>
      {/* Technology Stack Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-5xl font-bold text-primary mb-6">
              Our Tech Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built with cutting-edge AI/ML technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Cpu, label: "TensorFlow" },
              { icon: Code, label: "PyTorch" },
              { icon: Database, label: "Scikit-learn" },
              { icon: Sparkles, label: "OpenAI" },
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-card rounded-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <tech.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold">{tech.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-3 lg:px-20">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-5xl font-bold text-primary mb-6">
              Industry Use Cases
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world applications of our AI/ML solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6 bg-card p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-primary/10 p-4 rounded-lg">
                  <useCase.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </div>
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-2xl mb-12 text-white/90 max-w-2xl mx-auto">
            Let's build intelligent solutions together
          </p>
          <Link to="/contact-us">
            <motion.button
              className="bg-white text-primary font-bold py-4 px-12 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default AiMlApplications;



// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import OfferingHeroSection from "./Offering-hero-Section";
// import aiml from "../../assets/offerings/aiml.jpg";
// import {
//   Database, LineChart, Cpu, Sparkles, Code
// } from "lucide-react";

// const heroData = {
//   backgroundImage: aiml,
//   title: "AI & ML Applications",
//   subtitle: "Transforming businesses with intelligent solutions",
//   buttonText: "Explore Solutions",
//   buttonLink: "AiMlApplications",
// };

// const AiMlApplications = () => {
//   const card3DVariants = {
//     hidden: { 
//       opacity: 0,
//       y: 50,
//       rotateX: -15,
//       perspective: 1000
//     },
//     visible: { 
//       opacity: 1,
//       y: 0,
//       rotateX: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15
//       }
//     },
//     hover: { 
//       scale: 1.05,
//       rotateX: 5,
//       rotateY: 5,
//       translateZ: 20,
//       boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
//       transition: {
//         duration: 0.3
//       }
//     }
//   };

//   const iconAnimation = {
//     hidden: { scale: 0, rotate: -180 },
//     visible: { 
//       scale: 1, 
//       rotate: 0,
//       transition: {
//         type: "spring",
//         stiffness: 200,
//         damping: 15
//       }
//     },
//     hover: { 
//       scale: 1.2,
//       rotate: 360,
//       transition: {
//         duration: 0.8,
//         ease: "easeInOut"
//       }
//     }
//   };

//   interface AiSolution {
//     icon: React.ElementType;
//     title: string;
//     description: string;
//   }

//   const aiSolutions: AiSolution[] = [
//     // Add your AI solutions here
//     // Example:
//     // { icon: Brain, title: "Machine Learning", description: "Advanced algorithms for data analysis" },
//     // { icon: Bot, title: "Chatbots", description: "Intelligent conversational interfaces" },
//     // Add more solutions as needed
//   ];

//   interface UseCase {
//     icon: React.ElementType;
//     title: string;
//     description: string;
//   }

//   const useCases: UseCase[] = [
//     // Add your use cases here
//     // Example:
//     // { icon: LineChart, title: "Predictive Analytics", description: "Forecast trends and make data-driven decisions" },
//     // { icon: Microscope, title: "Medical Diagnosis", description: "AI-assisted disease detection and diagnosis" },
//     // Add more use cases as needed
//   ];

//   return (
//     <div className="bg-background text-foreground perspective-1000">
//       <OfferingHeroSection data={heroData} />
//       <div id="AiMlApplications">
//         <section className="py-20 px-3 lg:px-20 relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent animate-gradient" />
//           <div className="container mx-auto relative z-10">
//             <motion.div
//               className="text-center mb-20"
//               initial={{ opacity: 0, y: -30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
//                 AI-Powered Solutions
//               </h2>
//               <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//                 Leverage the power of artificial intelligence for your business
//               </p>
//             </motion.div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//               <AnimatePresence>
//                 {aiSolutions.map((solution, index) => (
//                   <motion.div
//                     key={index}
//                     variants={card3DVariants}
//                     initial="hidden"
//                     animate="visible"
//                     whileHover="hover"
//                     className="group bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-primary/10 transform-gpu"
//                     style={{ transformStyle: "preserve-3d" }}
//                   >
//                     <motion.div
//                       className="bg-primary/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 mx-auto"
//                       variants={iconAnimation}
//                     >
//                       <solution.icon className="w-8 h-8 text-primary" />
//                     </motion.div>
//                     <h3 className="text-2xl font-bold text-primary mb-4 text-center transform translateZ(20px)">
//                       {solution.title}
//                     </h3>
//                     <p className="text-muted-foreground text-center transform translateZ(10px)">
//                       {solution.description}
//                     </p>
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//             </div>
//           </div>
//         </section>

//         {/* Tech Stack Section with 3D Cards */}
//         <section className="py-20 bg-secondary/5 px-3 lg:px-20">
//           <div className="container mx-auto">
//             <motion.div
//               className="text-center mb-20"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-6xl font-bold text-primary mb-8">
//                 Our Tech Stack
//               </h2>
//               <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
//                 Built with cutting-edge AI/ML technologies
//               </p>
//             </motion.div>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//               {[
//                 { icon: Cpu, label: "TensorFlow" },
//                 { icon: Code, label: "PyTorch" },
//                 { icon: Database, label: "Scikit-learn" },
//                 { icon: Sparkles, label: "OpenAI" },
//               ].map((tech, index) => (
//                 <motion.div
//                   key={index}
//                   variants={card3DVariants}
//                   initial="hidden"
//                   whileInView="visible"
//                   whileHover="hover"
//                   viewport={{ once: true }}
//                   className="text-center p-8 bg-card rounded-xl transform-gpu"
//                   style={{ transformStyle: "preserve-3d" }}
//                 >
//                   <motion.div
//                     variants={iconAnimation}
//                     className="transform translateZ(30px)"
//                   >
//                     <tech.icon className="w-16 h-16 text-primary mx-auto mb-4" />
//                   </motion.div>
//                   <h3 className="text-xl font-bold transform translateZ(20px)">
//                     {tech.label}
//                   </h3>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Use Cases Section with Enhanced 3D Effects */}
//         <section className="py-20 px-3 lg:px-20">
//           <div className="container mx-auto">
//             <motion.div
//               className="text-center mb-20"
//               initial={{ opacity: 0, y: -20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-6xl font-bold text-primary mb-8">
//                 Industry Use Cases
//               </h2>
//               <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
//                 Real-world applications of our AI/ML solutions
//               </p>
//             </motion.div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//               {useCases.map((useCase, index) => (
//                 <motion.div
//                   key={index}
//                   variants={card3DVariants}
//                   initial="hidden"
//                   whileInView="visible"
//                   whileHover="hover"
//                   viewport={{ once: true }}
//                   className="flex items-start space-x-6 bg-card p-10 rounded-2xl transform-gpu"
//                   style={{ transformStyle: "preserve-3d" }}
//                 >
//                   <motion.div 
//                     className="bg-primary/10 p-4 rounded-xl transform translateZ(30px)"
//                     variants={iconAnimation}
//                   >
//                     <useCase.icon className="w-10 h-10 text-primary" />
//                   </motion.div>
//                   <div className="transform translateZ(20px)">
//                     <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
//                     <p className="text-lg text-muted-foreground">{useCase.description}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Enhanced CTA Section */}
//         <section className="py-32 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
//           <div className="absolute inset-0 bg-[url('/path/to/pattern.svg')] opacity-10" />
//           <motion.div
//             className="container mx-auto px-4 text-center relative z-10"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-6xl font-bold mb-8 text-white">
//               Ready to Transform Your Business?
//             </h2>
//             <p className="text-3xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
//               Let's build intelligent solutions together
//             </p>
//             <Link to="/contact-us">
//               <motion.button
//                 className="bg-white text-primary font-bold py-6 px-16 rounded-full text-xl hover:bg-opacity-90 transition-all duration-300"
//                 whileHover={{ 
//                   scale: 1.05,
//                   boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
//                   translateY: -5
//                 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Get Started Now
//               </motion.button>
//             </Link>
//           </motion.div>
//         </section>
//       </div>
//     </div>
//   );

// };
// export default AiMlApplications;