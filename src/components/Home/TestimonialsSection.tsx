import { useState } from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import img1 from "../../assets/testimonials/1.jpg";
import img2 from "../../assets/testimonials/2.jpg";
import img3 from "../../assets/testimonials/3.jpg";
import img4 from "../../assets/testimonials/4.jpg";
import img5 from "../../assets/testimonials/5.jpg";

const testimonials = [
  {
    name: "Sophia Williams",
    role: "CEO, BrightTech",
    content:
      "Ekjal's cybersecurity solutions have revolutionized our water treatment plant's security infrastructure. Their AI-powered threat detection system has successfully thwarted multiple attempted breaches, ensuring the safety of our critical operations. The team's expertise in SCADA system protection and their commitment to regulatory compliance have given us peace of mind. We've seen a significant reduction in vulnerabilities and improved overall system resilience since partnering with Ekjal.",
    avatar: img1,
  },
  {
    name: "Liam Johnson",
    role: "Lead Developer, DevSolutions",
    content:
      "Implementing Ekjal's comprehensive cybersecurity framework has been a game-changer for our municipal water authority. Their tailored approach to IoT security has secured our smart water meters and sensors, preventing potential data breaches. The incident response plan they developed for us has proven invaluable during simulated attack scenarios, significantly reducing our potential downtime. Ekjal's employee training program has also noticeably improved our staff's cybersecurity awareness and readiness.",

    avatar: img2,
  },
  {
    name: "Olivia Brown",
    role: "Marketing Head, MarketMasters",
    content:
      "Ekjal's expertise in water management cybersecurity is unparalleled. Their network security solutions have fortified our infrastructure against evolving cyber threats. The vulnerability assessment they conducted revealed critical weaknesses we were unaware of, and their remediation strategies were both effective and cost-efficient. Ekjal's proactive approach to security, combined with their deep understanding of water management systems, has significantly enhanced our overall security posture and operational efficiency.",

    avatar: img3,
  },
  {
    name: "Noah Davis",
    role: "Product Manager, InnovateX",
    content:
      "Ekjal's cybersecurity solutions have transformed how we approach the security of our urban water supply network. Their AI-powered anomaly detection system has proven invaluable in identifying potential threats before they escalate. The team's expertise in securing SCADA systems has greatly improved the reliability of our water distribution processes. Ekjal's comprehensive approach, from network security to employee training, has created a robust defense against cyber threats.",

    avatar: img4,
  },
  {
    name: "Ava Martinez",
    role: "UI/UX Designer, CreativeFlow",
    content:
      "Working with Ekjal has significantly streamlined our cybersecurity compliance processes. Their in-depth knowledge of water industry regulations and standards is impressive. Ekjal's compliance assessment tools and documentation support have made audits much more manageable. Their proactive approach to staying ahead of regulatory changes ensures that our cybersecurity measures are always up-to-date. The team's ability to translate complex technical requirements into actionable strategies has been invaluable for our organization.",

    avatar: img5,
  },
];

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 3
  );
  const buttonCount = Math.ceil(testimonials.length / 3);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="lg:py-16 py-5 px-3 lg:px-20"
    >
      <div className="w-full">
        <h2 className="lg:text-4xl text-xl font-bold text-center mb-12 text-primary">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.5 }}
              className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {testimonial.content}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="w-full flex justify-center mt-8 space-x-2">
          {Array.from({ length: buttonCount }).map((_, index) => (
            <Button
              key={index}
              size={"icon"}
              onClick={() => handleClick(index * 3)}
              className={`w-4 h-4 rounded-full ${
                currentIndex === index * 3 ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default TestimonialsSection;
