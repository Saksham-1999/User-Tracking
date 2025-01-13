import { useEffect, useRef } from "react";
import ntpc from "../../assets/Customer/ntpc.png";
import brbcl from "../../assets/Customer/brbcl.jpg";
import nhpcl from "../../assets/Customer/nhpcl.jpg";
import idex from "../../assets/Customer/idex.jpg";
import voxomas from "../../assets/Customer/voxomos.png";
function CustomersSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const customers = [
    { name: "IDEX", logo: idex },
    { name: "NTPC", logo: ntpc },
    { name: "BRBCL", logo: brbcl },
    { name: "NHPCL", logo: nhpcl },
    { name: "VOXOMAS.AI", logo: voxomas },
    { name: "IDEX", logo: idex },
    { name: "NTPC", logo: ntpc },
    { name: "BRBCL", logo: brbcl },
    { name: "NHPCL", logo: nhpcl },
    { name: "VOXOMAS.AI", logo: voxomas },
    { name: "IDEX", logo: idex },
    { name: "NTPC", logo: ntpc },
    { name: "BRBCL", logo: brbcl },
    { name: "NHPCL", logo: nhpcl },
    { name: "VOXOMAS.AI", logo: voxomas },
    
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    console.log("scrollContainer", scrollContainer);
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth;
      const animationDuration = scrollWidth / 300; // Adjust speed as needed

      scrollContainer.style.animation = `scroll ${animationDuration}s linear infinite`;
    }
  }, []);

  return (
    <section className="bg-gradient-to-br from-background to-accent lg:py-16 py-5 overflow-hidden">
      <div className="w-full">
        <h2 className="lg:text-4xl text-xl font-bold text-center mb-12 text-primary">
          Our Valued Customers
        </h2>
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex space-x-8 whitespace-nowrap"
            style={{ width: "200%" }}
          >
            {[...customers, ...customers].map((customer, index) => (
              <div
                key={`${customer.name}-${index}`}
                className="bg-card p-6 rounded-lg shadow-lg inline-block"
              >
                <img
                  src={customer.logo}
                  alt={customer.name}
                  className="w-full h-14 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-card-foreground text-center">
                  {customer.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomersSection;
