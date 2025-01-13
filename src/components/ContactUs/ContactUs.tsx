import { ChangeEvent, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import contact from "../../assets/Contact-Us/contact.jpg";
import contactImg from "../../assets/Contact-Us/contact-us.jpg";
import { toast } from "react-toastify";
import { send } from "emailjs-com";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "+91 98731 34795",
    subDetails: "Mon-Fri 9am-6pm",
  },
  {
    icon: Mail,
    title: "Email",
    details: "contact@ekvayu.com",
    subDetails: "Online support",
  },
  {
    icon: MapPin,
    title: "Office",
    details: "Jss Step Incubator",
    subDetails: "Sector-62, Noida 201301, UP",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Monday - Friday",
    subDetails: "9:00 AM - 6:00 PM",
  },
];

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        toast.success("Message sent successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setFormData({
          user_name: "",
          user_email: "",
          user_phone: "",
          message: "",
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        toast.error("Failed to send message. Please try again.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setLoading(false);
      });
  };

  const scrollToForm = () => {
    const formSection = document.getElementById("contactForm");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section with Background Image */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${contact})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <div className="absolute inset-0 bg-black opacity-60" />

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
              We're here to help and answer any questions you might have
            </p>
            <motion.button
              onClick={scrollToForm}
              className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-10 px-3 lg:px-20 bg-secondary/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-card p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-primary/10 p-4 rounded-lg w-fit mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                <p className="text-muted-foreground mb-1">{info.details}</p>
                <p className="text-sm text-muted-foreground">
                  {info.subDetails}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10 px-3 lg:px-20 bg-white">
        <div className="container mx-auto">
          <motion.div
            className="rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              title="Office Location"
              className="w-full h-[400px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5790646743535!2d77.35669767495601!3d28.612402184995545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56a46bcf20d%3A0xb8dae57f4172c44e!2sJSS%20STEP%20Incubator!5e0!3m2!1sen!2sin!4v1727675976657!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contactForm"
        className="py-10 px-3 lg:px-20 flex flex-col lg:flex-row items-center justify-center gap-5"
      >
        <div className="w-full h-[500px]">
          <img
            src={contactImg}
            alt="Contact Us"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-full">
          <motion.div
            className="bg-card p-8 rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  id="user_phone"
                  name="user_phone"
                  value={formData.user_phone}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your phone number"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Your message"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <svg
                    className="animate-spin mr-2 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    ></path>
                  </svg>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
