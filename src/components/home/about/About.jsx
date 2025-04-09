/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { InfoIcon, X } from "lucide-react";
import Title from "../../shared/Title";
import photo from "../../../assets/img/about/about_img.jpg";
import LearnMode from "../../../views/learn-more/LearnMode";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const controls = useAnimation();

  const leftRef = useRef(null);
  const buttonRef = useRef(null);
  const rightRef = useRef(null);
  const modalRef = useRef(null);

  const isLeftInView = useInView(leftRef, { once: false });
  const isButtonInView = useInView(buttonRef, { once: false });
  const isRightInView = useInView(rightRef, { once: false });

  const handleReadMore = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Add ESC key listener to close modal
  useEffect(() => {
    const handleEscKey = (e) => {
      if (isModalOpen && e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscKey);

    // Add cursor styles to ensure cursor is visible
    if (isModalOpen) {
      document.body.style.cursor = "default";
    }

    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [isModalOpen]);

  // Outside click handler
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        isModalOpen
      ) {
        closeModal();
      }
    }

    // Add event listener when modal is open
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen, modalRef]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Modal animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Backdrop animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <main ref={rightRef} className=" py-10 md:py-0">
      <div className="max-w-6xl flex flex-col justify-center mx-auto px-4 sm:px-6 lg:px-8">
        <Title title="About Me" />
        <div className="rounded-md mt-8">
          <div className="mx-auto">
            <motion.div
              ref={leftRef}
              className="grid grid-cols-1 md:grid-cols-2 items-center gap-4"
              initial="hidden"
              animate={isLeftInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {/* Left side - Content */}
              <motion.div className="order-2 md:order-1">
                <motion.h2
                  className="text-sm font-semibold text-foreground mb-0 cursor-default"
                  variants={itemVariants}
                >
                  I am
                </motion.h2>
                <motion.h1
                  className="text-lg md:text-2xl font-bold text-primary mb-1 cursor-default"
                  variants={itemVariants}
                >
                  SHAKIL AHMMED JOY
                </motion.h1>
                <motion.h3
                  className="text-md text-muted-foreground text-gray-500 mb-0 cursor-default"
                  variants={itemVariants}
                >
                  Full Stack Developer
                </motion.h3>
                <motion.p
                  className="text-md text-muted-foreground mb-4 text-gray-500 cursor-default"
                  variants={itemVariants}
                >
                  Mymensingh, Bangladesh
                </motion.p>
                <motion.p
                  className="text-foreground mb-2 text-justify cursor-default"
                  variants={itemVariants}
                >
                  I am an ambitious, self-motivated, quick learner and able to
                  work with minimum supervision under tight schedules with an
                  aptitude for learning new technology. I excel in high-pressure
                  environments, consistently delivering quality results on time.
                </motion.p>
                <motion.p
                  className="text-foreground mb-6 text-justify cursor-default"
                  variants={itemVariants}
                >
                  My commitment to continuous improvement drives my desire to
                  stay current with industry trends and always push the
                  boundaries of {`what's`} possible in web development. I'm
                  passionate about creating efficient, scalable, and
                  user-friendly applications that make a real difference in
                  people's lives.
                </motion.p>

                {/* Button */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  ref={buttonRef}
                >
                  <motion.button
                    className="bg-primary text-white px-6 py-2 rounded-md text-md shadow-md transition-colors duration-200 flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.05, backgroundColor: "#c41e4a" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleReadMore}
                    initial={{ opacity: 0, y: 50 }}
                    animate={
                      isButtonInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 50 }
                    }
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    Learn More About Me
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-2"
                    >
                      <InfoIcon size={20} />
                    </motion.div>
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Right side - Image */}
              <motion.div className="order-1 md:order-2 mb-16 md:mb-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    isRightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 1, delay: 0.2 }}
                  className="relative w-full h-80 aspect-square max-w-md mx-auto cursor-default"
                >
                  <img
                    src={photo || "/placeholder.svg"}
                    alt="Shakil Ahmmed Joy"
                    className="rounded-lg shadow-lg h-[370px]"
                  />
                  <motion.div
                    className="absolute inset-0 rounded-lg"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modal/Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop - simplified, no onClick handler here */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm cursor-pointer"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={backdropVariants}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                ref={modalRef}
                className="bg-white dark:bg-slate-800 shadow-xl overflow-hidden w-full max-w-4xl max-h-[90vh] overflow-y-auto cursor-default"
                variants={modalVariants}
              >
                <div className="sticky top-0 z-10 flex justify-between items-center p-4 bg-white dark:bg-slate-800 border-b">
                  <h2 className="text-xl font-bold">About Me</h2>
                  <button
                    onClick={closeModal}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-1">
                  <LearnMode />
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
