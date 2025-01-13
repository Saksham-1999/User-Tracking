import groupImg from "../../assets/Products/group.avif";

const ourStoryData = {
  image: groupImg,
  imageAlt: "EKVAYU",
  title: "EKVAYU",
  paragraphs: [
    "Ekvayu, founded in 2021 by IIT Kanpur alumni with over three decades of IT industry experience, is a cybersecurity solutions provider. Leveraging state-of-the-art technologies such as AI/ML, digital security, and embedded systems, we offer complete services designed to meet diverse cybersecurity needs. Our expertise spans Automotive Cyber Security (ISO 21434), VAPT of Applications/Infra, ISMS design & implementation, PCI DSS, HIPAA, ISO 27001 compliance, data center audits, and Virtual CISO services. At Ekvayu, we are committed to safeguarding your digital assets with innovative and reliable cybersecurity solutions.",
  ],
};

const OurStorySection = () => {
  return (
    <section className="py-5 px-3 lg:px-20">
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={ourStoryData.image}
              alt={ourStoryData.imageAlt}
              className="h-full w-full object-cover rounded-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl font-bold mb-6 text-primary">
              {ourStoryData.title}
            </h2>
            {ourStoryData.paragraphs.map((paragraph, index) => (
              <p key={index} className="lg:text-lg text-sm text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
