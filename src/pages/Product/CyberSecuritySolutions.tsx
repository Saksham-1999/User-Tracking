import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import OfferingHeroSection from "./Offering-hero-Section";
import heroImage from "../../assets/offerings/cyber.jpg";
import {
  Shield,
  Server,
  Cloud,
  Smartphone,
  Users,
  Lock,
  CheckCircle,

} from "lucide-react";

const heroData = {
  backgroundImage: heroImage,
  title: "Cyber Security Solutions",
  subtitle: "Protecting your digital assets with advanced security measures",
  buttonText: "Learn More",
  buttonLink: "CyberSecuritySolutions",
};

const CyberSecuritySolutions = () => {
  const securityServices = [
    {
      title: "Threat Detection",
      description: "Advanced threat monitoring and detection systems",
      icon: Shield,
    },
    {
      title: "Network Security",
      description: "Comprehensive network protection solutions",
      icon: Server,
    },
    {
      title: "Cloud Security",
      description: "Secure cloud infrastructure and applications",
      icon: Cloud,
    },
    {
      title: "Mobile Security",
      description: "Enterprise mobility security solutions",
      icon: Smartphone,
    },
  ];
  const advancedFeatures = [
    {
      title: "24/7 Security Monitoring",
      description: "Round-the-clock surveillance and threat detection",
      icon: Shield,
    },
    {
      title: "Incident Response",
      description: "Rapid response to security incidents and breaches",
      icon: Lock,
    },
    {
      title: "Vulnerability Assessment",
      description: "Regular security audits and penetration testing",
      icon: CheckCircle,
    },
    {
      title: "Security Consulting",
      description: "Expert guidance on security strategy and implementation",
      icon: Users,
    },
  ];

  const securityStats = [
    { number: "96%", label: "Threat Detection Rate" },
    { number: "24/7", label: "Monitoring Coverage" },
    { number: "500+", label: "Satisfied Clients" },
    { number: "<1hr", label: "Response Time" },
  ];

  return (
    <div className="bg-background text-foreground">
      <OfferingHeroSection data={heroData} />
<div id="CyberSecuritySolutions">
      {/* Main Security Solutions Section */}
      <section className="py-10 px-3 lg:px-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-primary mb-6">
              Our Security Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions to protect your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityServices.map((service, index) => (
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
      {/* Security Features Section */}
      <section className="py-16 px-3 lg:px-20 bg-secondary/5">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-5xl font-bold text-primary mb-6">
              Advanced Security Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade security features to protect your infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advancedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6 bg-card p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-primary/10 p-4 rounded-lg">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {securityStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-5xl font-bold mb-2">{stat.number}</h3>
                <p className="text-lg text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Process Section */}
      <section className="py-16 px-3 lg:px-20">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-5xl font-bold text-primary mb-6">
              Our Security Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive approach to securing your digital assets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Assessment", "Implementation", "Monitoring"].map(
              (step, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-8 rounded-xl text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-primary">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step}</h3>
                  <p className="text-muted-foreground">
                    {`Comprehensive ${step.toLowerCase()} of your security needs and implementation strategy`}
                  </p>
                </motion.div>
              )
            )}
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
            Protect Your Digital Assets Today
          </h2>
          <p className="text-2xl mb-12 text-white/90 max-w-2xl mx-auto">
            Let's secure your business against cyber threats
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

export default CyberSecuritySolutions;



// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import OfferingHeroSection from "./Offering-hero-Section";
// import heroImage from "../../assets/offerings/cyber.jpg";
// import {
//   Shield,
//   Server,
//   Cloud,
//   Smartphone,

// } from "lucide-react";

// const heroData = {
//   backgroundImage: heroImage,
//   title: "Cyber Security Solutions",
//   subtitle: "Protecting your digital assets with advanced security measures",
//   buttonText: "Learn More",
//   buttonLink: "CyberSecuritySolutions",
// };

// const CyberSecuritySolutions = () => {
//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0 },
//     hover: {
//       y: -15,
//       scale: 1.05,
//       boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
//     },
//   };

//   const iconVariants = {
//     hover: {
//       rotate: 360,
//       scale: 1.2,
//       transition: { duration: 0.5 },
//     },
//   };

//   const securityServices = [
//     {
//       title: "Threat Detection",
//       description: "Advanced threat monitoring and detection systems",
//       icon: Shield,
//     },
//     {
//       title: "Network Security",
//       description: "Comprehensive network protection solutions",
//       icon: Server,
//     },
//     {
//       title: "Cloud Security",
//       description: "Secure cloud infrastructure and applications",
//       icon: Cloud,
//     },
//     {
//       title: "Mobile Security",
//       description: "Enterprise mobility security solutions",
//       icon: Smartphone,
//     },
//   ];
 

//   const securityStats = [
//     { number: "96%", label: "Threat Detection Rate" },
//     { number: "24/7", label: "Monitoring Coverage" },
//     { number: "500+", label: "Satisfied Clients" },
//     { number: "<1hr", label: "Response Time" },
//   ];

//   return (
//     <div className="bg-background text-foreground">
//       <OfferingHeroSection data={heroData} />
//       <div id="CyberSecuritySolutions">
      
//       </div>
//       {/* Security Features Section */}
//       {/* Enhanced Main Security Solutions Section */}
//       <section className="py-16 px-3 lg:px-20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent animate-gradient" />
//         <div className="container mx-auto px-4 relative z-10">
//           <motion.div
//             className="text-center mb-20"
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <h2 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
//               Our Security Solutions
//             </h2>
//             <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//               Comprehensive cybersecurity solutions to protect your business
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//             <AnimatePresence>
//               {securityServices.map((service, index) => (
//                 <motion.div
//                   key={index}
//                   variants={cardVariants}
//                   initial="hidden"
//                   animate="visible"
//                   whileHover="hover"
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="group bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-primary/10"
//                 >
//                   <motion.div
//                     variants={iconVariants}
//                     whileHover="hover"
//                     className="bg-primary/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 mx-auto"
//                   >
//                     <service.icon className="w-8 h-8 text-primary" />
//                   </motion.div>
//                   <h3 className="text-2xl font-bold text-primary mb-4 text-center">
//                     {service.title}
//                   </h3>
//                   <p className="text-muted-foreground text-center">
//                     {service.description}
//                   </p>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//         </div>
//       </section>

//       {/* Statistics Section */}
//       <section className="py-20 bg-primary text-white">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {securityStats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 className="text-center"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <h3 className="text-5xl font-bold mb-2">{stat.number}</h3>
//                 <p className="text-lg text-white/80">{stat.label}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Security Process Section */}
//       <section className="py-16 px-3 lg:px-20">
//         <div className="container mx-auto">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             <h2 className="text-5xl font-bold text-primary mb-6">
//               Our Security Process
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//               A comprehensive approach to securing your digital assets
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {["Assessment", "Implementation", "Monitoring"].map(
//               (step, index) => (
//                 <motion.div
//                   key={index}
//                   className="bg-card p-8 rounded-xl text-center"
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.2 }}
//                 >
//                   <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
//                     <span className="text-3xl font-bold text-primary">
//                       {index + 1}
//                     </span>
//                   </div>
//                   <h3 className="text-2xl font-bold mb-4">{step}</h3>
//                   <p className="text-muted-foreground">
//                     {`Comprehensive ${step.toLowerCase()} of your security needs and implementation strategy`}
//                   </p>
//                 </motion.div>
//               )
//             )}
//           </div>
//         </div>
//       </section>
//       {/* CTA Section */}
//       <section className="py-24 bg-primary relative overflow-hidden">
//         <motion.div
//           className="container mx-auto px-4 text-center relative z-10"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           <h2 className="text-5xl font-bold mb-8 text-white">
//             Protect Your Digital Assets Today
//           </h2>
//           <p className="text-2xl mb-12 text-white/90 max-w-2xl mx-auto">
//             Let's secure your business against cyber threats
//           </p>
//           <Link to="/contact-us">
//             <motion.button
//               className="bg-white text-primary font-bold py-4 px-12 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-2xl"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Get Started
//             </motion.button>
//           </Link>
//         </motion.div>
//       </section>
//     </div>
//   );
// };
// export default CyberSecuritySolutions;
