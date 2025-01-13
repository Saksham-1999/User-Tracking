import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { send } from "emailjs-com";
import jobs from "../../assets/Contact-Us/jobs.jpg";
import OfferingHeroSection from "@/pages/Product/Offering-hero-Section";
interface JobOpening {
  title: string;
  experience: string;
  location: string;
  description: string;
  roles: string[];
  positions: string[];
}

const heroData = {
  backgroundImage: jobs,
  title: "Join Our Team",
  subtitle:
    "We are looking for energetic candidates with relevant experience in the following areas",
  buttonText: "View Openings",
  buttonLink: "Jobcards",
};
const jobOpeningsData: JobOpening[] = [
  {
    title: "Cyber Security Consultant",
    experience: "2-5 years",
    location: "Noida UP, Onsite",
    description:
      "We are seeking skilled Cyber Security Consultants to join our team and help protect our clients' digital assets.",
    roles: ["Junior Consultant", "Senior Consultant", "Team Lead"],
    positions: ["Full-time", "Part-time", "Contract"],
  },
  {
    title: "VAPT Tester",
    experience: "3-6 years",
    location: "Noida UP, Onsite",
    description:
      "Join our VAPT team to conduct thorough vulnerability assessments and penetration testing for our clients.",
    roles: ["Junior Tester", "Senior Tester", "VAPT Lead"],
    positions: ["Full-time", "Contract"],
  },
  {
    title: "Embedded Security Specialist",
    experience: "4-7 years",
    location: "Noida UP, Onsite",
    description:
      "We're looking for an Embedded Security Specialist to secure IoT and embedded systems for our clients.",
    roles: ["Security Engineer", "Senior Security Engineer", "Technical Lead"],
    positions: ["Full-time"],
  },
  {
    title: "Threat Intelligence Analyst",
    experience: "2-4 years",
    location: "Noida UP, Onsite",
    description:
      "Join our Threat Intelligence team to analyze and respond to emerging cyber threats and vulnerabilities.",
    roles: ["Junior Analyst", "Senior Analyst", "Team Coordinator"],
    positions: ["Full-time", "Part-time"],
  },
  {
    title: "Security Operations Center (SOC) Analyst",
    experience: "1-3 years",
    location: "Noida UP, Onsite",
    description:
      "We're seeking SOC Analysts to monitor, detect, and respond to security incidents in real-time.",
    roles: ["L1 Analyst", "L2 Analyst", "SOC Team Lead"],
    positions: ["Full-time", "Shift-based"],
  },
  {
    title: "Cloud Security Architect",
    experience: "5-8 years",
    location: "Noida UP, Onsite",
    description:
      "Design and implement secure cloud infrastructure and solutions for our enterprise clients.",
    roles: ["Cloud Security Engineer", "Senior Cloud Security Architect"],
    positions: ["Full-time", "Contract"],
  },
  {
    title: "Python Developer",
    experience: "5-8 years",
    location: "Noida UP, Onsite",
    description:
      "Design and implement secure cloud infrastructure and solutions for our enterprise clients.",
    roles: ["Cloud Security Engineer", "Senior Cloud Security Architect"],
    positions: ["Full-time", "Contract"],
  },
  {
    title: "AI/ML Engineer",
    experience: "3-5 years",
    location: "Noida UP, Onsite",
    description:
      "Design and implement secure cloud infrastructure and solutions for our enterprise clients.",
    roles: ["Cloud Security Engineer", "Senior Cloud Security Architect"],
    positions: ["Full-time", "Contract"],
  },
  {
    title: "Django developer",
    experience: "3-5 years",
    location: "Noida UP, Onsite",
    description:
      "Design and implement secure cloud infrastructure and solutions for our enterprise clients.",
    roles: ["Cloud Security Engineer", "Senior Cloud Security Architect"],
    positions: ["Full-time", "Contract"],
  },
];

const JobCard: React.FC<{ job: JobOpening; onApply: () => void }> = ({
  job,
  onApply,
}) => (
  <motion.div
    className="bg-secondary rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
      <div className="flex items-center text-gray-600 mb-2">
        <FaClock className="mr-2" />
        <span>{job.experience} experience</span>
      </div>
      <div className="flex items-center text-gray-600 mb-4">
        <FaMapMarkerAlt className="mr-2" />
        <span>{job.location}</span>
      </div>
      <p className="text-gray-600 mb-4">{job.description}</p>
      <button
        className="bg-primary text-secondary py-2 px-4 rounded hover:bg-primary/70 transition duration-300"
        onClick={onApply}
      >
        Apply Now
      </button>
    </div>
  </motion.div>
);

const ApplyPopup: React.FC<{ job: JobOpening; onClose: () => void }> = ({
  job,
  onClose,
}) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    job_title: job.title,
    user_name: "",
    user_email: "",
    user_phone: "",
    selected_roles: [] as string[],
    selected_positions: [] as string[],
    resume: null as File | null,
  });

  const handleRoleChange = (role: string) => {
    setFormData((prev) => ({
      ...prev,
      selected_roles: prev.selected_roles.includes(role)
        ? prev.selected_roles.filter((r) => r !== role)
        : [...prev.selected_roles, role],
    }));
  };

  const handlePositionChange = (position: string) => {
    setFormData((prev) => ({
      ...prev,
      selected_positions: prev.selected_positions.includes(position)
        ? prev.selected_positions.filter((p) => p !== position)
        : [...prev.selected_positions, position],
    }));
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        resume: e.target.files![0],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const emailData = {
      ...formData,
      selected_roles: formData.selected_roles.join(", "),
      selected_positions: formData.selected_positions.join(", "),
      resume: formData.resume?.name || "No resume attached",
    };

    send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      emailData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        toast.success("Application submitted successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        onClose();
      })
      .catch((error) => {
        console.error("Failed to submit application:", error);
        toast.error("Failed to submit application. Please try again.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ToastContainer />
      <motion.div
        className="bg-secondary rounded-lg p-8 max-w-md w-full m-4"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <h2 className="text-xl font-bold mb-4">
          Apply for <span className="text-primary">{job.title}</span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
              onChange={(e) =>
                setFormData({ ...formData, user_name: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
              onChange={(e) =>
                setFormData({ ...formData, user_email: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone"
              required
              className="w-full p-2 border rounded focus:ring-2 focus:ring-primary"
              onChange={(e) =>
                setFormData({ ...formData, user_phone: e.target.value })
              }
            />
          </div>

          <div>
            <h3 className="font-semibold mb-2">Select Roles:</h3>
            {job.roles.map((role) => (
              <label key={role} className="block mb-2">
                <input
                  type="checkbox"
                  checked={formData.selected_roles.includes(role)}
                  onChange={() => handleRoleChange(role)}
                  className="mr-2"
                />
                {role}
              </label>
            ))}
          </div>

          <div>
            <h3 className="font-semibold mb-2">Select Positions:</h3>
            {job.positions.map((position) => (
              <label key={position} className="block mb-2">
                <input
                  type="checkbox"
                  checked={formData.selected_positions.includes(position)}
                  onChange={() => handlePositionChange(position)}
                  className="mr-2"
                />
                {position}
              </label>
            ))}
          </div>

          <div>
            <h3 className="font-semibold mb-2">Upload Resume:</h3>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeChange}
              className="w-full"
              required
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-secondary rounded hover:bg-primary/90 transition duration-300"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};
const Jobs: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

  return (
    <div className="w-full">
      <OfferingHeroSection data={heroData} />

      {/* Job Listings Section */}
      <div id="Jobcards" className="px-3 lg:px-20 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobOpeningsData.map((job, index) => (
            <JobCard
              key={index}
              job={job}
              onApply={() => setSelectedJob(job)}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedJob && (
            <ApplyPopup
              job={selectedJob}
              onClose={() => setSelectedJob(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Jobs;
