// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronDown } from 'lucide-react';
// import faqImage from "../assets/faq.jpg";

// const faqData = [
//   {
//     question: "What is your Phishing Prevention Tool?",
//     answer: "Our advanced Phishing Prevention Tool uses AI-powered algorithms to detect and block sophisticated phishing attempts in real-time. It provides multi-layer protection including email scanning, URL analysis, and user behavior monitoring to ensure maximum security for your organization."
//   },
//   {
//     question: "How does your Decision Support System enhance cybersecurity?",
//     answer: "Our Decision Support System combines threat intelligence, machine learning, and expert knowledge to provide real-time security recommendations. It helps security teams make informed decisions quickly during incidents, prioritize threats, and optimize resource allocation."
//   },
//   {
//     question: "Tell me about your Underwater Detection System",
//     answer: "Our cutting-edge Underwater Detection System utilizes advanced sonar technology and AI algorithms to detect and classify underwater threats. It provides comprehensive maritime security for naval operations, port security, and critical infrastructure protection."
//   },
//   {
//     question: "What makes your cybersecurity solutions different?",
//     answer: "Our solutions are built with defense-grade security standards, leveraging AI/ML capabilities while focusing on Make in India initiative. We're proud winners of two iDEX challenges for IAF, demonstrating our commitment to innovation and excellence in defense technology."
//   },
//   {
//     question: "Do you provide implementation support and training?",
//     answer: "Yes, we provide comprehensive implementation support, regular updates, and specialized training programs for all our security solutions. Our expert team ensures smooth deployment and knowledge transfer to your security personnel."
//   }
// ];

// const Faq = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   return (
//     <div className="min-h-screen py-12 px-3 lg:px-20">
//       <motion.div
//         className="text-center mb-12"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h1 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h1>
//         <p className="text-xl text-muted-foreground">Find answers to common questions about our cybersecurity solutions</p>
//       </motion.div>

//       <div className="flex flex-col lg:flex-row lg:space-x-8">
//         <div className="max-w-3xl mx-auto lg:w-1/2">
//           {faqData.map((faq, index) => (
//             <motion.div
//               key={index}
//               className="mb-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//             >
//               <button
//                 className="w-full bg-card p-4 rounded-lg flex justify-between items-center hover:bg-secondary transition-all duration-300"
//                 onClick={() => setActiveIndex(activeIndex === index ? null : index)}
//               >
//                 <span className="font-semibold text-left text-lg">{faq.question}</span>
//                 <ChevronDown
//                   className={`w-5 h-5 transition-transform duration-300 ${
//                     activeIndex === index ? 'rotate-180' : ''
//                   }`}
//                 />
//               </button>
//               <AnimatePresence>
//                 {activeIndex === index && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: 'auto', opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="overflow-hidden"
//                   >
//                     <div className="p-4 bg-secondary/50 rounded-b-lg text-muted-foreground">
//                       {faq.answer}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </div>
//         <div className="hidden lg:block lg:w-1/2">
//           <motion.img
//             src={faqImage}
//             alt="FAQ"
//             className="rounded-lg "
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Faq;
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import faqImage from "../assets/faq.jpg";

const faqData = [
  {
    question: "What is your Phishing Prevention Tool?",
    answer: "Our advanced Phishing Prevention Tool uses AI-powered algorithms to detect and block sophisticated phishing attempts in real-time. It provides multi-layer protection including email scanning, URL analysis, and user behavior monitoring to ensure maximum security for your organization."
  },
  {
    question: "How does your Decision Support System enhance cybersecurity?",
    answer: "Our Decision Support System combines threat intelligence, machine learning, and expert knowledge to provide real-time security recommendations. It helps security teams make informed decisions quickly during incidents, prioritize threats, and optimize resource allocation."
  },
  {
    question: "Tell me about your Underwater Detection System",
    answer: "Our cutting-edge Underwater Detection System utilizes advanced sonar technology and AI algorithms to detect and classify underwater threats. It provides comprehensive maritime security for naval operations, port security, and critical infrastructure protection."
  },
  {
    question: "What makes your cybersecurity solutions different?",
    answer: "Our solutions are built with defense-grade security standards, leveraging AI/ML capabilities while focusing on Make in India initiative. We're proud winners of two iDEX challenges for IAF, demonstrating our commitment to innovation and excellence in defense technology."
  },
  {
    question: "Do you provide implementation support and training?",
    answer: "Yes, we provide comprehensive implementation support, regular updates, and specialized training programs for all our security solutions. Our expert team ensures smooth deployment and knowledge transfer to your security personnel."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen py-12 px-3 lg:px-20">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-muted-foreground">Find answers to common questions about our cybersecurity solutions</p>
      </motion.div>

      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="hidden lg:block lg:w-1/2">
          <motion.img
            src={faqImage}
            alt="FAQ"
            className="rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="max-w-3xl mx-auto lg:w-1/2">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className="w-full bg-card p-4 rounded-lg flex justify-between items-center hover:bg-secondary transition-all duration-300"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-semibold text-left text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-secondary/50 rounded-b-lg text-muted-foreground">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
