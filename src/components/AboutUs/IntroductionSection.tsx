import { motion } from "framer-motion";

const introductionData = {
  title: "About Us",
  mission: {
    title: "Our Mission",
    paragraphs: [
      "In an era where digital transformation is not merely a trend but a necessity, the need for robust cybersecurity measures has never been more critical. EkJal and EkVayu, two pioneering startups founded on the principles of empowerment, knowledge, vigilance, and adaptability, are dedicated to reshaping the landscape of cybersecurity.",
      "Our frameworks, WAVE and FLOW, encapsulate our holistic approach to cybersecurity, providing comprehensive service offerings including vCISO Services, Business Continuity and Resilience Engineering, Analyst Consultation and Advisory Services, Cybersecurity Innovation Services, and Penetration Testing and Vulnerability Assessments."
    ]
  },
  whyChooseUs: {
    title: "Why Choose Us?",
    description: "At EkJal and EkVayu, we stand apart from conventional cybersecurity firms through a combination of our differentiators and unique selling proposition:",
    items: [
      "Empowerment through Knowledge",
      "Focus on Vigilance and Adaptability",
      "Proprietary Tools and Open-Source Solutions",
      "Outcome-Driven Metrics (ODM)"
    ]
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const IntroductionSection = () => {
  return (
    <section id="IntroductionSection" className="py-5 px-3 lg:px-20">
      <div className="w-full">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center text-primary"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          {introductionData.title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <motion.div
            className="bg-card p-6 sm:p-8 rounded-lg shadow-lg"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-primary">{introductionData.mission.title}</h3>
            {introductionData.mission.paragraphs.map((paragraph, index) => (
              <p key={index} className="lg:text-lg text-sm text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>
          <motion.div
            className="bg-secondary p-6 sm:p-8 rounded-lg shadow-lg"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-primary">{introductionData.whyChooseUs.title}</h3>
            <p className="mb-4 sm:mb-6 text-muted-foreground leading-relaxed lg:text-lg text-sm">
              {introductionData.whyChooseUs.description}
            </p>
            <ul className="space-y-3 sm:space-y-4">
              {introductionData.whyChooseUs.items.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start space-x-3 text-secondary-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="lg:text-lg text-sm text-muted-foreground leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
