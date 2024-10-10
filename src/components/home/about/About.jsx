/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Title from "../../shared/Title";

const About = () => {
  // console.log("🚀 ~ About ~ activeSection:", activeSection);
  const [isExpanded, setIsExpanded] = useState(false);
  const controls = useAnimation();

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const isLeftInView = useInView(leftRef, { once: false });
  const isRightInView = useInView(rightRef, { once: false });

  // useEffect(() => {
  //   if (activeSection === "about") {
  //     controls.start(  { opacity: 1, y: 0 });
  //   } else {
  //     controls.start({ opacity: 0, y: 50 });
  //   }
  // }, [activeSection, controls]);

  const handleReadMore = () => {
    setIsExpanded((prev) => !prev);
    controls.start({
      height: isExpanded ? "0px" : "auto",
      opacity: isExpanded ? 0 : 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    });
  };

  return (
    <main className="">
      <div className="max-w-6xl flex flex-col justify-center mx-auto px-4 sm:px-6 lg:px-8">
        <Title title={"About Me"} />
        <div className="rounded-md mt-8 ">
          <div className=" mx-auto ">
            <motion.div
              ref={leftRef}
              className="grid grid-cols-1 md:grid-cols-2 items-center gap-4"
              // initial={{ opacity: 0, y: 50 }}
              // animate={
              //   isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              // } // Use animation controls here
              // transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Left side - Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={
                  isLeftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{ duration: 1, delay: 0 }}
                className="order-2 md:order-1"
              >
                <motion.h2
                  className="text-sm font-semibold text-gray-800 mb-0"
                  // initial={{ opacity: 0, x: -50 }}
                  // animate={
                  //   isLeftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                  // }
                  // transition={{ duration: 0.5, delay: 0.2 }}
                >
                  I am
                </motion.h2>
                <motion.h1
                  className="text-lg md:text-2xl font-bold text-primary mb-1"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  SHAKIL AHMMED JOY
                </motion.h1>
                <motion.h3
                  className="text-md text-gray-600 mb-0"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Full Stack Developer
                </motion.h3>
                <motion.p
                  className="text-md text-gray-500 mb-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Mymensingh, Bangladesh
                </motion.p>
                <motion.p
                  className="text-gray-700 mb-2 text-justify"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  I am an ambitious, self-motivated, quick learner and able to
                  work with minimum supervision under tight schedules with an
                  aptitude for learning new technology. I excel in high-pressure
                  environments, consistently delivering quality results on time.
                </motion.p>
                <motion.p
                  className="text-gray-700 mb-6 text-justify"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  My commitment to continuous improvement drives my desire to
                  stay current with industry trends and always push the
                  boundaries of {`what's`} possible in web development. {`I'm`}
                  passionate about creating efficient, scalable, and
                  user-friendly applications that make a real difference in
                  {`people's`} lives.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.4, delay: 1 }}
                >
                  <motion.button
                    className="bg-primary text-white px-6 py-2 rounded-md text-md shadow-md transition-colors duration-200 flex items-center justify-center"
                    whileHover={{ scale: 1.05, backgroundColor: "#c41e4a" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleReadMore}
                  >
                    {isExpanded ? "Show Less" : "Learn More About Me"}
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-2"
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </motion.button>
                  {/* Uncomment if you want a resume button */}
                  {/* <motion.button
                    className="bg-white text-primary px-6 py-2 rounded-md text-lg font-semibold shadow-md border border-primary transition-colors duration-200"
                    whileHover={{ scale: 1.05, backgroundColor: "#f8f8f8" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Download Resume
                  </motion.button> */}
                </motion.div>
              </motion.div>

              {/* Right side - Image */}
              <motion.div
                className="order-1 md:order-2"
                initial={{ opacity: 0, x: 50 }}
                animate={
                  isLeftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                }
                transition={{ duration: 1, delay: 0 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-full h-80 aspect-square max-w-md mx-auto"
                >
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Shakil Ahmmed Joy"
                    className="rounded-lg shadow-lg"
                  />
                  <motion.div
                    className="absolute inset-0 bg-primary rounded-lg"
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
};

export default About;
