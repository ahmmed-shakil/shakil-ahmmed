"use client";

import { useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Title from "../../shared/Title";
import photo from "../../../assets/img/about/about_img.jpg";
import { useNavigate } from "react-router-dom";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const controls = useAnimation();

  const leftRef = useRef(null);
  const buttonRef = useRef(null);
  const rightRef = useRef(null);

  const navigate = useNavigate();

  const isLeftInView = useInView(leftRef, { once: false });
  const isButtonInView = useInView(buttonRef, { once: false });
  const isRightInView = useInView(rightRef, { once: false });

  const handleReadMore = () => {
    // setIsExpanded((prev) => !prev);
    controls.start({
      height: isExpanded ? "0px" : "auto",
      opacity: isExpanded ? 0 : 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    });
    navigate("/about-me");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Stagger time between each item
        delayChildren: 0.3, // Delay before starting the staggered animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main ref={rightRef}>
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
                  className="text-sm font-semibold text-foreground mb-0"
                  variants={itemVariants}
                >
                  I am
                </motion.h2>
                <motion.h1
                  className="text-lg md:text-2xl font-bold text-primary mb-1"
                  variants={itemVariants}
                >
                  SHAKIL AHMMED JOY
                </motion.h1>
                <motion.h3
                  className="text-md text-muted-foreground text-gray-500 mb-0"
                  variants={itemVariants}
                >
                  Full Stack Developer
                </motion.h3>
                <motion.p
                  className="text-md text-muted-foreground mb-4 text-gray-500"
                  variants={itemVariants}
                >
                  Mymensingh, Bangladesh
                </motion.p>
                <motion.p
                  className="text-foreground mb-2 text-justify"
                  variants={itemVariants}
                >
                  I am an ambitious, self-motivated, quick learner and able to
                  work with minimum supervision under tight schedules with an
                  aptitude for learning new technology. I excel in high-pressure
                  environments, consistently delivering quality results on time.
                </motion.p>
                <motion.p
                  className="text-foreground mb-6 text-justify"
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
                    className="bg-primary text-white px-6 py-2 rounded-md text-md shadow-md transition-colors duration-200 flex items-center justify-center"
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
                      <ChevronDown size={20} />
                    </motion.div>
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Right side - Image */}
              <motion.div className="order-1 md:order-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  // transition={{ type: "spring", stiffness: 300 }}
                  // ref={rightRef}
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    isRightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 1, delay: 0.2 }}
                  className="relative w-full h-80 aspect-square max-w-md mx-auto"
                >
                  <img
                    src={photo}
                    alt="Shakil Ahmmed Joy"
                    className="rounded-lg shadow-lg h-[370px]"
                  />
                  <motion.div
                    className="absolute inset-0  rounded-lg"
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
    </main>
  );
}
