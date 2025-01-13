import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const newsUpdates = [
  {
    date: "March 2024",
    title: "EkVayu Tech Wins Defense Innovation Award",
    description:
      "Our AI-powered phishing prevention tool received recognition at the National Defense Innovation Summit.",
    category: "Awards",
    link: "/news/defense-innovation-award",
  },
  {
    date: "February 2024",
    title: "New Partnership with Naval Defense Forces",
    description:
      "Strategic collaboration to enhance underwater detection systems for maritime security.",
    category: "Partnerships",
    link: "/news/naval-partnership",
  },
  {
    date: "January 2024",
    title: "Launch of Advanced Decision Support System",
    description:
      "Introducing our next-generation DSS with enhanced AI capabilities for cyber threat analysis.",
    category: "Product Launch",
    link: "/news/dss-launch",
  },
];

const LatestNews = () => {
  return (
    <div className="min-h-screen py-12 px-3 lg:px-20">
      {/* Latest Updates Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-primary">Latest Updates</h2>
        <div className="space-y-6">
          {newsUpdates.map((update, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Calendar className="w-4 h-4" />
                <span>{update.date}</span>
                <span className="px-2 py-1 bg-secondary rounded-full text-xs">
                  {update.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{update.title}</h3>
              <p className="text-muted-foreground mb-4">{update.description}</p>
              <a
                href={update.link}
                className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-200"
              >
                Read More <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
