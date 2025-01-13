// AboutSection.js
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import image from "../../assets/Home-page-images/tailored.png";
import { Link } from "react-router-dom";

const data = {
  title: "Empowering Your Business with Tailored Solutions",
  descriptions: [
    {
      id: 1,
      description: "Transform your business potential with our comprehensive suite of digital solutions. From advanced cybersecurity to AI-driven analytics, we deliver cutting-edge technologies that drive growth, innovation, and competitive advantage in today's dynamic market landscape.",
    },
    {
      id: 2,
      description: "Our expertise spans across critical domains including maritime security, defense innovations, and digital transformation. We combine deep industry knowledge with state-of-the-art technology to create solutions that not only protect but propel your business forward.",
    },
    {
      id: 3,
      description: "Partner with us to leverage intelligent analytics, real-time monitoring, and predictive capabilities that keep you ahead of the curve. Our tailored approach ensures your business doesn't just adapt to change – it leads it, setting new standards in operational excellence and digital innovation.",
    }
  ],
  
  image: image,
  button: {
    text: "Explore Our Solutions",
    link: "/offerings",
  },
};
function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex items-center justify-center lg:py-16 py-5 px-3 lg:px-20"
    >
      <div className="w-full flex flex-col md:flex-row items-center md:gap-20 gap-5">
        <div className="w-full h-[500px] flex justify-center rounded-md overflow-hidden">
          <img
            src={data.image}
            alt="Cybersecurity"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="w-full text-foreground text-center md:text-left">
          <h1 className="lg:text-3xl text-xl font-bold mb-4 text-primary">
            {data.title}
          </h1>
          {data.descriptions.map((item) => (
            <p
              key={item.id}
              className="lg:text-lg text-sm text-muted-foreground mb-8 leading-relaxed"
            >
              {item.description}
            </p>
          ))}
          <Button
            variant="default"
            size="lg"
            className="bg-primary text-primary-foreground text-lg px-8 py-3 rounded-md shadow-lg hover:shadow-xl"
          >
            <Link to={data.button.link}>{data.button.text}</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutSection;
