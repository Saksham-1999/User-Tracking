import { motion } from "framer-motion";

const cardsData = [
  {
    title: "Ekvayu: Defense Sector Focus",
    content:
      "Ekvayu has demonstrated a unique capacity to deliver under stringent government regulations. We developed a proprietary anti-phishing tool from scratch to comply with restrictions on third-party solutions.",
  },
  {
    title: "Ekjal: Global and Multi-Industry Reach",
    content:
      "While Ekvayu has been a Defense-oriented focus, Ekjal is expanding into all industries, particularly enterprise cybersecurity and the automotive sector, including railways. With a focus on deploying highly adaptable and measurable security solutions.",
  },
  {
    title: "Combined Concept: Evangelism, Vigilance, and ODM",
    content:
      "By combining Ekvayu's Defense-focused expertise with Ekjal's vigilant, adaptive, and results-oriented approach, we offer a unique and comprehensive cybersecurity solution.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const Card = ({
  title,
  content,
  index,
}: {
  title: string;
  content: string;
  index: number;
}) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg"
    variants={cardVariants}
    custom={index}
    whileHover={{
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
      transition: { duration: 0.3 },
    }}
    whileTap={{ scale: 0.95 }}
  >
    <h3 className="text-xl font-semibold mb-4 text-primary">{title}</h3>
    <p className="lg:text-lg text-sm text-muted-foreground leading-relaxed">
      {content}
    </p>
  </motion.div>
);

const AnimatedCardsSection = () => {
  return (
    <motion.section
      className="py-20  px-3 lg:px-20"
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-full">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              content={card.content}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AnimatedCardsSection;
