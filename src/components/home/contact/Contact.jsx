/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import Title from "../../shared/Title";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle"); // Corrected line

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/shakilahmmed252@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formState),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormState({ name: "", email: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2> */}
        <Title title={"Get In Touch"} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mt-10">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="flex items-center space-x-4 text-md"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-primary rounded-full p-3">
                <Mail className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">hello@example.com</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center space-x-4 text-md"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-primary rounded-full p-3">
                <Phone className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center space-x-4 text-md"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-primary rounded-full p-3">
                <Phone className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold">WhatsApp</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center space-x-4 text-md"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-primary rounded-full p-3">
                <MapPin className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-muted-foreground">New York, NY</p>
              </div>
            </motion.div>
          </motion.div>
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 col-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                className="peer w-full border-b border-gray-300 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-primary outline outline-0 transition-all focus:border-primary focus:outline-0"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-muted-foreground transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-primary before:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:before:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-primary"
              >
                Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                className="peer w-full border-b border-gray-300 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-primary outline outline-0 transition-all focus:border-primary focus:outline-0"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-muted-foreground transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-primary before:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:before:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-primary"
              >
                Email
              </label>
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                className="peer w-full border-b border-gray-300 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-primary outline outline-0 transition-all focus:border-primary focus:outline-0 min-h-[100px]"
                placeholder=" "
                required
              />
              <label
                htmlFor="message"
                className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-muted-foreground transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-primary before:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:before:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-primary"
              >
                Message
              </label>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white px-6 py-2 rounded-md text-md shadow-md transition-colors duration-200 flex items-center justify-center disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </button>
            </motion.div>
            <AnimatePresence>
              {submitStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-green-600 text-center"
                >
                  I have received your message! I will get back to you soon.
                  Thank you.
                </motion.p>
              )}
              {submitStatus === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-600 text-center"
                >
                  Failed to send message. Please try again.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
