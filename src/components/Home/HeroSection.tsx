import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import cyber from "../../assets/Home-page-images/cyber.png";
import aiml from "../../assets/Home-page-images/aiml.png";
import digital from "../../assets/Home-page-images/digital.png";
import defense from "../../assets/Home-page-images/defense.png";
import phishing from "../../assets/Home-page-images/phishinggg.png";
import { Link } from "react-router-dom";
import dss from "../../assets/Home-page-images/dss.png";
import udi from "../../assets/Home-page-images/udi.png";

const carouselItems = [
  {
    subHeading: "Advanced Security Solution",
    heading: "Anti Phishing Browser Mail",
    paragraph:
      "Our cutting-edge AI-powered solution provides multilayered adaptive protection against sophisticated phishing attacks. Featuring real-time threat detection, machine learning algorithms, and automated response mechanisms to keep your communications secure.",
    image: phishing,
    buttonText: "Explore Security Features",
    buttonLink: "/phishing-prevention-tool",
  },
  {
    subHeading: "Intelligent Analytics",
    heading: "Decision Support System",
    paragraph:
      "Experience next-generation decision making with our AI-powered information collation system. Featuring advanced 3D geographical interface visualization, real-time data analytics, and predictive modeling to empower informed strategic decisions.",
    image: dss,
    buttonText: "See It In Action",
    buttonLink: "/decission-support-system",
  },
  {
    subHeading: "Maritime Innovation",
    heading: "Underwater Intrusion Detection",
    paragraph:
      "Leveraging state-of-the-art indigenous Acoustic Vector Sensors developed by IIT Delhi's Underwater Lab, our AI-powered detection system provides unparalleled underwater surveillance capabilities. Perfect for maritime security and underwater infrastructure protection.",
    image: udi,
    buttonText: "Discover Technology",
    buttonLink: "/underwaterinstructiondetection",
  },

  {
    subHeading: "Digital Defense",
    heading: "Cyber Security Solutions",
    paragraph:
      "Comprehensive cyber security services protecting your digital assets with advanced threat detection, incident response, and security infrastructure. Our solutions ensure robust protection against evolving cyber threats while maintaining operational efficiency.",
    image: cyber,
    buttonText: "Explore Security",
    buttonLink: "/cyber-security-solutions",
  },
  {
    subHeading: "Future Technology",
    heading: "AI & ML Solutions",
    paragraph:
      "Cutting-edge artificial intelligence and machine learning solutions designed to transform your business operations. From predictive analytics to automated decision-making systems, we help organizations harness the power of AI for competitive advantage.",
    image: aiml,
    buttonText: "Discover AI Solutions",
    buttonLink: "/ai-ml-applications",
  },
  {
    subHeading: "Business Evolution",
    heading: "Digital Transformation",
    paragraph:
      "End-to-end digital transformation services helping organizations modernize their operations and embrace digital innovation. Our solutions streamline processes, enhance customer experience, and drive operational excellence through technology.",
    image: digital,
    buttonText: "Transform Now",
    buttonLink: "/digital-transformations",
  },
  {
    subHeading: "Strategic Security",
    heading: "Defense Innovations",
    paragraph:
      "Advanced defense technology solutions incorporating cutting-edge innovations for enhanced security and protection. Our defense systems utilize state-of-the-art technology to provide comprehensive security solutions for critical infrastructure.",
    image: defense,
    buttonText: "Learn More",
    buttonLink: "/defense-innovations",
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
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="flex items-center bg-gradient-to-br from-blue-200 via-white to-purple-200 px-3 lg:px-20 pt-5"
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
              className="flex flex-col md:flex-row items-center bg-transparent"
            >
              <motion.div
                variants={itemVariants}
                className="w-full md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0"
              >
                <motion.h3
                  variants={itemVariants}
                  className="lg:text-xl text-sm font-semibold text-muted-foreground mb-3"
                >
                  {item.subHeading}
                </motion.h3>
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
                  {item.buttonLink ? (
                    <Link to={item.buttonLink}>
                      <Button
                        size="lg"
                        className="bg-primary text-primary-foreground text-lg px-8 py-3 rounded-md shadow-lg hover:shadow-xl"
                      >
                        {item.buttonText}
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      size="lg"
                      className="bg-primary text-primary-foreground text-lg px-8 py-3 rounded-md shadow-lg hover:shadow-xl"
                    >
                      {item.buttonText}
                    </Button>
                  )}
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] relative rounded-md overflow-hidden"
              >
                <img
                  src={item.image}
                  alt="Hero"
                  className="rounded-2xl w-full h-full object-contain aspect-video mix-blend-overlay opacity-90 bg-transparent"
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
