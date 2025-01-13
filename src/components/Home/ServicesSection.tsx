import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Button } from "../ui/button";
import img1 from "../../assets/Home-page-images/img4.png";
import img2 from "../../assets/Home-page-images/img3.png";
import img3 from "../../assets/Home-page-images/img2.png";
import img4 from "../../assets/Home-page-images/img1.png";
import { Link } from "react-router-dom";

const services = [
  {
    icon: img1,
    title: "Cybersecurity Solutions",
    link: "/cyber-security-solutions",
    description: [
      {
        text: "Advanced protection systems for critical defense infrastructure",
      },
      {
        text: "Real-time threat monitoring and response capabilities",
      },
    ],
  },
  {
    icon: img2,
    title: "AI & ML Applications",
    link: "/ai-ml-applications",
    description: [
      {
        text: "State-of-the-art AI solutions for defense applications",
      },
      {
        text: "Machine learning powered predictive analytics",
      },
    ],
  },
  {
    icon: img3,
    title: "Digital Transformation",
    link: "/digital-transformations",
    description: [
      {
        text: "Industry 5.0 ready digital solutions",
      },
      {
        text: "Smart manufacturing and automation systems",
      },
    ],
  },
  {
    icon: img4,
    title: "Defense Innovations",
    link: "/defense-innovations",
    description: [
      {
        text: "Customized solutions for Indian Armed Forces",
      },
      {
        text: "Advanced military-grade technology integration",
      },
    ],
  },
];

function ServicesSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };
  return (
    <section className="bg-background lg:py-16 py-5 px-3 lg:px-20">
      <div className="container mx-auto">
        <h2 className="lg:text-4xl text-xl font-bold text-center mb-12 text-primary">
          Our Services
        </h2>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="mb-4 w-14 h-14 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                {service.title}
              </h3>
              <ul className="list-disc pl-6">
                {service.description.map((item, index) => (
                  <li
                    key={index}
                    className="lg:text-lg text-sm text-muted-foreground mb-2 leading-relaxed"
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
              <Button className="mt-4" asChild>
                <Link to={service.link}>Learn More</Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;
