import React from "react";
import { motion } from "framer-motion";
import pravin from "../../assets/AboutUs/pravin.png";
import neeraj from "../../assets/AboutUs/neeraj.jpg";
import sandeep from "../../assets/AboutUs/Sandeep.png";
import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const teamData = {
  title: "Meet our Team",
  members: [
    {
      name: "Pravin Kumar",
      role: "Founder & CEO",
      image: pravin,
      linkedin: "https://www.linkedin.com/in/pravin-kumar-noida",
      description:
        "He has led the program for ‘Jaguar Land Rover’ to ensure compliance to UNECE 155/156 mandate. Has in-depth technical and legal/compliance knowledge in this domain. Has consulting experience in the supply chain domain as well.",
    },
    {
      name: "Neeraj Kumar",
      role: "CTO",
      image: neeraj,
      linkedin: "https://www.linkedin.com/in/neeraj-kumar-38aa65107",
      description:
        "Certified Project Management Professional with incredible experience acquired over the years in diverse areas of Program Management and end‐to‐end Business Delivery including Government Process Re-engineering.",
    },
    {
      name: "Sandeep Kumar",
      role: "",
      image: sandeep,
      linkedin: "https://www.linkedin.com/in/sandeepkumariitk",
      description:
        "IIT-Kanpur (IIT-K), Former Cadence/Synopsys, Deep Learning, Non-Linear Signal Processing.",
    },
  ],
};

const OurTeamsSection: React.FC = () => {
  return (
    <section className="px-3 lg:px-20">
      <div className="w-full">
        <motion.h2
          className="text-5xl font-bold mb-16 text-primary text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {teamData.title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamData.members.map((member, index) => (
            <motion.div
              key={index}
              className="bg-card p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative mb-8">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-primary"
                />
                <Link
                  to={member.linkedin}
                  target="_blank"
                  className="absolute bottom-0 right-1/4 bg-primary p-2 rounded-full hover:bg-primary-dark transition-colors duration-300"
                >
                  <Linkedin className="text-secondary w-6 h-6" />
                </Link>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-primary text-center">
                {member.name}
              </h3>
              <p className="text-foreground/80 font-semibold mb-4 text-center">
                {member.role}
              </p>
              <p className="lg:text-base text-sm text-muted-foreground leading-relaxed text-center">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamsSection;