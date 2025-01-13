const visionMissionData = {
  title: "Our Vision and Mission",
  vision: {
    title: "Vision",
    content:
      "To become a global leader in delivering resilient cybersecurity solutions, empowering organizations through knowledge, vigilance, and measurable outcomes to face the ever-evolving cyber threat landscape.",
  },
  mission: {
    title: "Mission",
    content:
      "Empowering organizations to build and sustain robust cybersecurity defences by leveraging open-source solutions (OSS/FOSS), proprietary innovations, and adaptive strategies that minimize costs while maximizing protection.",
  },
};

const VisionMissionSection = () => {
  return (
    <section className="py-5 px-3 lg:px-20">
      <div className="w-full">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">
          {visionMissionData.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-secondary p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl text-primary font-semibold mb-4">
              {visionMissionData.vision.title}
            </h3>
            <p className="lg:text-lg text-sm text-muted-foreground leading-relaxed">{visionMissionData.vision.content}</p>
          </div>
          <div className="bg-secondary p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl text-primary font-semibold mb-4">
              {visionMissionData.mission.title}
            </h3>
            <p className="lg:text-lg text-sm text-muted-foreground leading-relaxed">{visionMissionData.mission.content}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
