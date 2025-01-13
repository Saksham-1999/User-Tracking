import { motion } from "framer-motion";
import ntpc from "../../assets/Customer/ntpc.png";
import brbcl from "../../assets/Customer/brbcl.jpg";
import nhpcl from "../../assets/Customer/nhpcl.jpg";
import idex from "../../assets/Customer/idex.jpg";
import voxomas from "../../assets/Customer/voxomos.png";

const clientsData = {
  sectionTitle:
    "Trusted by <span class='text-primary'>Companies</span>  since 2021",
  sectionDescription:
    "Our clients range from innovative startups to Fortune companies",
  clients: [
    { name: "IDEX", logo: idex },
    { name: "NTPC", logo: ntpc },
    { name: "BRBCL", logo: brbcl },
    { name: "NHPCL", logo: nhpcl },
    { name: "voxomas", logo: voxomas },
  ],
};

const ClientsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-3 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl font-bold mb-8 text-center text-gray-800"
            dangerouslySetInnerHTML={{ __html: clientsData.sectionTitle }}
          />
          <p className="text-xl text-center text-gray-600 mb-12">
            {clientsData.sectionDescription}
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {clientsData.clients.map((client, index) => (
            <motion.div
              key={client.name}
              className=""
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.5 }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 md:h-20 object-contain transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
