import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaIndustry,
  FaShieldAlt,
  FaMicrochip,
  FaBolt,
  FaBuilding,
} from "react-icons/fa";

import ntpc from "../assets/Customer/ntpc.png";
import brbcl from "../assets/Customer/brbcl.jpg";
import nhpcl from "../assets/Customer/nhpcl.jpg";
import idex from "../assets/Customer/idex.jpg";
import voxomas from "../assets/Customer/voxomos.png";

const testimonials = [
  {
    company: "VOXOMAS.AI",
    logo: voxomas,
    icon: <FaMicrochip className="w-12 h-12 text-primary" />,
    quote:
      "Ekvayu's AI solutions have revolutionized our voice recognition systems. Their expertise in machine learning and dedication to innovation has made them an invaluable partner in our growth journey.",
    author: "Technical Director, VOXOMAS.AI",
  },
  {
    company: "NHPCL",
    logo: nhpcl,
    icon: <FaIndustry className="w-12 h-12 text-primary" />,
    quote:
      "The cybersecurity solutions provided by Ekvayu have significantly enhanced our infrastructure protection. Their state-of-the-art technology and professional support have been crucial for our operations.",
    author: "Chief Security Officer, NHPCL",
  },
  {
    company: "IDEX",
    logo: idex,
    icon: <FaShieldAlt className="w-12 h-12 text-primary" />,
    quote:
      "Working with Ekvayu has been transformative for our defense innovation initiatives. Their cutting-edge solutions and expertise in AI/ML have exceeded our expectations.",
    author: "Project Lead, IDEX",
  },
  {
    company: "NTPC",
    logo: ntpc,
    icon: <FaBolt className="w-12 h-12 text-primary" />,
    quote:
      "Ekvayu's innovative solutions have greatly improved our power generation monitoring systems. Their technical expertise and reliable support have made them a valuable partner.",
    author: "Senior Engineer, NTPC",
  },
  {
    company: "BRBCL",
    logo: brbcl,
    icon: <FaBuilding className="w-12 h-12 text-primary" />,
    quote:
      "The implementation of Ekvayu's advanced monitoring systems has significantly enhanced our operational efficiency. Their solutions have proven to be both innovative and reliable.",
    author: "Operations Manager, BRBCL",
  },
];
const customers = [
  { name: "IDEX", logo: idex },
  { name: "NTPC", logo: ntpc },
  { name: "BRBCL", logo: brbcl },
  { name: "NHPCL", logo: nhpcl },
  { name: "VOXOMAS.AI", logo: voxomas },
];

const Customers = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth;
      const animationDuration = scrollWidth / 300;
      scrollContainer.style.animation = `scroll ${animationDuration}s linear infinite`;
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <motion.section
        className="py-20 px-4 lg:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl lg:text-6xl font-bold text-primary text-center mb-6">
          Our Trusted Partners
        </h1>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
          We're proud to work with industry leaders who trust us to deliver
          innovative solutions
        </p>
      </motion.section>

      <section className="bg-gradient-to-br from-background to-accent py-16 overflow-hidden">
        <div className="w-full">
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex space-x-8 whitespace-nowrap"
              style={{ width: "200%" }}
            >
              {[...customers, ...customers, ...customers].map(
                (customer, index) => (
                  <motion.div
                    key={`${customer.name}-${index}`}
                    className="bg-card p-8 rounded-xl shadow-lg inline-block hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <img
                      src={customer.logo}
                      alt={customer.name}
                      className="w-40 h-20 object-contain mx-auto mb-6"
                    />
                    <h3 className="text-xl font-semibold text-primary text-center">
                      {customer.name}
                    </h3>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 lg:px-20 bg-secondary/30">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.logo}
                  alt={testimonial.company}
                  className="w-16 h-16 object-contain mr-4"
                />
                <h3 className="text-xl font-semibold text-primary">
                  {testimonial.company}
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.quote}"
              </p>
              <p className="text-sm text-primary font-medium">
                {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Customers;
