/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import js from "../../../assets/img/hero/js.png";

const AnimatedShape = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);

const FloatingTechIcon = ({ src, alt }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: [0, 1, 0],
      x: [
        Math.random() * window.innerWidth,
        Math.random() * window.innerWidth,
        Math.random() * window.innerWidth,
      ],
      y: [
        Math.random() * window.innerHeight,
        Math.random() * window.innerHeight,
        Math.random() * window.innerHeight,
      ],
      transition: {
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [controls]);

  return (
    <motion.img
      src={src}
      alt={alt}
      className="w-8 h-8 absolute"
      animate={controls}
    />
  );
};

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: { duration: 1.5, repeat: Infinity },
    });
  }, [controls]);

  const techIcons = [
    { src: js, alt: "Node.js" },
    { src: js, alt: "JavaScript" },
    { src: js, alt: "Prisma" },
    { src: js, alt: "PostgreSQL" },
    { src: js, alt: "AWS" },
    { src: js, alt: "React" },
    { src: js, alt: "TypeScript" },
    { src: js, alt: "TypeScript" },
    { src: js, alt: "TypeScript" },
    { src: js, alt: "TypeScript" },
    { src: js, alt: "TypeScript" },
    { src: js, alt: "TypeScript" },
    { src: js, alt: "TypeScript" },
    { src: js, alt: "TypeScript" },
    { src: js, alt: "TypeScript" },
    { src: js, alt: "TypeScript" },
    { src: js, alt: "TypeScript" },
    { src: js, alt: "TypeScript" },
    { src: js, alt: "TypeScript" },
    { src: js, alt: "TypeScript" },
    { src: js, alt: "TypeScript" },
    { src: js, alt: "TypeScript" },
    { src: js, alt: "TypeScript" },
    { src: js, alt: "TypeScript" },
    { src: js, alt: "TypeScript" },
  ];

  return (
    <div className=" snap-section">
      <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-white to-gray-100 text-primary p-4">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <AnimatedShape>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary opacity-5" />
          </AnimatedShape>
          <AnimatedShape>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-primary opacity-5" />
          </AnimatedShape>
          <AnimatedShape>
            <div className="absolute top-3/4 left-1/2 w-32 h-32 rounded-full bg-primary opacity-5" />
          </AnimatedShape>
        </div>

        {/* Floating tech icons */}
        {/* <div className="absolute inset-0 overflow-hidden">
          {techIcons.map((icon, index) => (
            <FloatingTechIcon key={index} src={icon.src} alt={icon.alt} />
          ))}
        </div> */}

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <motion.h1
            className="text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-800 to-primary"
            whileHover={{ scale: 1.05 }}
          >
            Full Stack Develo<span className="text-primary">p</span>er
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 mt-7 bg-clip-text text-transparent bg-gradient-to-r from-rose-800 to-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Crafting digital experiences with code and creativity
          </motion.p>
        </motion.div>

        <motion.div className="flex flex-col md:flex-row items-center gap-3 z-10">
          <motion.button
            className="bg-primary text-white px-8 py-3 border border-primary rounded-md text-md font-semibold shadow-lg transition-colors duration-200"
            whileHover={{
              backgroundColor: "white",
              color: "#dd2c5b",
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Download Resume
          </motion.button>
          <motion.button
            className="bg-slate-100 text-primary px-8 py-3 rounded-md text-md font-semibold shadow-lg border border-primary transition-colors duration-200"
            whileHover={{
              backgroundColor: "#dd2c5b",
              color: "white",
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Explore Projects
          </motion.button>
        </motion.div>

        <motion.div className="flex space-x-6 mt-8 z-10">
          {[Github, Linkedin, Mail].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              className="text-primary hover:text-primary-foreground transition-colors duration-200"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          animate={controls}
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </motion.div>
      </div>
    </div>
  );
}
