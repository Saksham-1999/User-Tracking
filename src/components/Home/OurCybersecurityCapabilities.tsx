import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const capabilitiesData = [
  {
    title: "Open Source and Proprietary Tool Integration",
    content: [
      "Free and Open-Source Software (FOSS) - Driven Flexibility",
      "Proprietary Innovation with DefPhy",
    ],
  },
  {
    title: "Adaptive Cyber Defense and Threat Intelligence",
    content: [
      "Real-Time Monitoring and Threat Detection",
      "Threat Intelligence Integration",
    ],
  },
  {
    title: "Industry-Specific Cybersecurity Solutions",
    content: [
      "Defense Sector",
      "Automotive and Railways",
      "Enterprise-Level Security for Other Sectors",
    ],
  },
  {
    title: "Penetration Testing and Vulnerability Assessments",
    content: ["Comprehensive Vulnerability Assessments", "Penetration Testing"],
  },
  {
    title: "Incident Response and Remediation",
    content: [
      "Rapid Response Teams",
      "Root Cause Analysis",
      "Remediation Planning",
    ],
  },
  {
    title: "Security Training and Awareness Programs",
    content: [
      "Phishing and Social Engineering Awareness",
      "Gamified Cybersecurity Training",
      "Continuous Learning and Engagement",
    ],
  },
];

function OurCybersecurityCapabilities() {
  return (
    <section className="w-full bg-gradient-to-br from-background to-secondary/20 px-3 lg:px-20">
      <div className="w-full">
        <h2 className="lg:text-4xl text-xl font-bold text-center mb-12 text-primary">
          Our Cybersecurity Capabilities
        </h2>
        <Tabs
          defaultValue={capabilitiesData[0].title}
          className="w-full flex flex-col lg:flex-row items-start justify-between gap-8"
        >
          <TabsList className="w-full h-full lg:w-1/3 flex flex-col items-start justify-start gap-4">
            {capabilitiesData.map((capability) => (
              <TabsTrigger
                value={capability.title}
                key={capability.title}
                className="w-full flex items-center justify-start md:p-4 p-2 rounded-lg transition-all duration-300 hover:bg-primary/10"
              >
                <motion.div
                  whileHover={{ x: 10 }}
                  className="w-full flex items-center text-[10px] sm:text-xs md:text-sm lg:text-xs xl:text-base font-semibold"
                >
                  <ChevronRight className="mr-2" />
                  {/* <a href="#content">{capability.title}</a> */}
                  {capability.title}
                </motion.div>
              </TabsTrigger>
            ))}
          </TabsList>
          <div id="content" className="w-full lg:w-2/3">
            <ScrollArea className="lg:h-[420px] h-[300px] rounded-md border md:p-4 p-2">
              {capabilitiesData.map((capability) => (
                <TabsContent value={capability.title} key={capability.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="md:text-2xl text-xl font-semibold mb-4">
                      {capability.title}
                    </h3>
                    <ul className="space-y-2">
                      {capability.content.map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center"
                        >
                          <ChevronRight className="mr-2 text-primary" />
                          <span className="lg:text-lg text-sm text-muted-foreground leading-relaxed">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </TabsContent>
              ))}
            </ScrollArea>
          </div>
        </Tabs>
      </div>
    </section>
  );
}

export default OurCybersecurityCapabilities;
