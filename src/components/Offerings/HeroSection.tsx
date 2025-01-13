import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import phishing from "../../assets/Products/phishing.png";
import SecureKnowledgeManagement from "../../assets/Products/SecureKnowledgeManagement.png";
import DecisionSupportSystem from "../../assets/Products/Decision Support System.png";
import SCMSecurityAutomotive from "../../assets/Products/SCM Security - Automotive.png";
import PredictiveMaintenanceforMachines from "../../assets/Products/predictivee.png";

const carouselItems = [
  {
    subHeading: "Welcome to",
    heading: "Phishing Prevention Tool",
    paragraph:
      "Our advanced Phishing Prevention Tool employs cutting-edge AI and machine learning algorithms to protect your organization from sophisticated phishing attacks. We provide real-time threat detection, email filtering, and user awareness training to create a robust defense against social engineering attempts. With automated scanning, suspicious link detection, and detailed reporting, our solution ensures your team stays protected from evolving phishing threats.",
    image: phishing,
    sectionId: "phishing-prevention",
  },
  {
    subHeading: "Threat Detection",
    heading: "Secure Knowledge Management",
    paragraph:
      "Transform your organization's knowledge sharing with our Secure Knowledge Management system. We provide end-to-end encryption, granular access controls, and secure collaboration tools to protect your intellectual property. Our platform enables safe document sharing, version control, and audit trails while ensuring compliance with data protection regulations. Experience seamless knowledge transfer without compromising security.",
    image: SecureKnowledgeManagement,
    sectionId: "secure-knowledge-management",
  },
  {
    subHeading: "Data Protection",
    heading: "Decision Support System",
    paragraph:
      "Empower your decision-making process with our intelligent Decision Support System. Leveraging advanced analytics and secure data processing, our platform provides real-time insights while maintaining data integrity. From risk assessment to resource allocation, our system helps you make informed decisions based on protected, accurate data, ensuring both security and operational efficiency.",
    image: DecisionSupportSystem,
    sectionId: "decision-support-system",
  },
  {
    subHeading: "Network Security",
    heading: "SCM Security - Automotive",
    paragraph:
      "Secure your automotive supply chain with our specialized SCM Security solution. We offer comprehensive protection for your entire supply chain network, from component tracking to delivery verification. Our system includes secure vendor management, real-time monitoring, and blockchain integration to ensure transparency and security across your automotive supply chain operations.",
    image: SCMSecurityAutomotive,
    sectionId: "SCM-security-automotive",
  },
  {
    subHeading: "Incident Response",
    heading: "Predictive Maintenance for Machines",
    paragraph:
      "Optimize your machine performance with our AI-powered Predictive Maintenance system. Using secure IoT sensors and advanced analytics, we help prevent equipment failures before they occur. Our solution monitors machine health, predicts maintenance needs, and provides actionable insights while maintaining robust security protocols to protect your operational data.",
    image: PredictiveMaintenanceforMachines,
    sectionId: "predictive-maintenance",
  },
];

function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const offset = 150; // Adjust this value based on your header height
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="flex items-center lg:h-96 pl-2 rounded-md px-3 lg:px-20 bg-gradient-to-br from-cyan-100 via-white to-purple-100 shadow-inner"
    >
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full bg-transparent"
      >
        <CarouselContent className="bg-transparent">
          {carouselItems.map((item, index) => (
            <CarouselItem
              key={index}
              className="flex flex-col md:flex-row items-center bg-transparent "
            >
              <motion.div
                variants={itemVariants}
                className="w-full md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0"
              >
                <motion.h2
                  variants={itemVariants}
                  className="lg:text-4xl text-2xl md:text-6xl font-bold text-primary mb-6 leading-tight"
                >
                  {item.heading}
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="lg:text-lg text-sm text-muted-foreground mb-8 leading-relaxed"
                >
                  {item.paragraph}
                </motion.p>
                <motion.div variants={itemVariants}>
                  <Button
                    size="lg"
                    onClick={() => scrollToSection(item.sectionId)}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 text-lg px-8 py-3 rounded-md shadow-lg hover:shadow-xl"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="w-full md:w-1/2 h-60 lg:h-96 relative rounded-md overflow-hidden"
              >
                <img
                  src={item.image}
                  alt="Hero"
                  className="rounded-md w-full h-full object-contain aspect-video"
                />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute right-16 bottom-8 flex space-x-4">
          <CarouselPrevious className="w-10 h-10 rounded-full bg-white/90 shadow-lg text-foreground hover:bg-primary hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center" />
          <CarouselNext className="w-10 h-10 rounded-full bg-white/90 shadow-lg text-foreground hover:bg-primary hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center" />
        </div>
      </Carousel>
    </motion.div>
  );
}

export default HeroSection;
