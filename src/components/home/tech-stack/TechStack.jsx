"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaVuejs,
  FaMobileAlt,
  FaNodeJs,
  FaJsSquare,
  FaDatabase,
  FaDocker,
  FaAws,
  FaGithub,
  FaChartLine,
} from "react-icons/fa"; // Importing FontAwesome icons
import Title from "../../shared/Title";

const techStack = [
  {
    name: "React",
    icon: <FaReact className="text-4xl" />,
    color: "bg-blue-500",
  }, // React icon
  {
    name: "Vue",
    icon: <FaVuejs className="text-4xl" />,
    color: "bg-green-500",
  }, // Vue icon
  {
    name: "React Native",
    icon: <FaMobileAlt className="text-4xl" />,
    color: "bg-blue-600",
  }, // React Native icon
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-4xl" />,
    color: "bg-green-600",
  }, // Node.js icon
  {
    name: "TypeScript",
    icon: <FaJsSquare className="text-4xl" />,
    color: "bg-blue-700",
  }, // TypeScript icon
  {
    name: "PostgreSQL",
    icon: <FaDatabase className="text-4xl" />,
    color: "bg-yellow-500",
  }, // PostgreSQL icon
  {
    name: "MongoDB",
    icon: <FaDatabase className="text-4xl" />,
    color: "bg-green-700",
  }, // MongoDB icon
  {
    name: "Mongoose",
    icon: <FaDatabase className="text-4xl" />,
    color: "bg-green-600",
  }, // Mongoose icon
  {
    name: "Prisma",
    icon: <FaDatabase className="text-4xl" />,
    color: "bg-blue-500",
  }, // Prisma icon
  {
    name: "GraphQL",
    icon: <FaChartLine className="text-4xl" />,
    color: "bg-pink-500",
  }, // GraphQL icon
  {
    name: "Docker",
    icon: <FaDocker className="text-4xl" />,
    color: "bg-blue-400",
  }, // Docker icon
  { name: "AWS", icon: <FaAws className="text-4xl" />, color: "bg-orange-600" }, // AWS icon
  {
    name: "Github",
    icon: <FaGithub className="text-4xl" />,
    color: "bg-purple-500",
  }, // Github icon
  {
    name: "Superset",
    icon: <FaChartLine className="text-4xl" />,
    color: "bg-orange-500",
  }, // Superset icon
];

const TechStack = () => {
  const [githubPushes, setGithubPushes] = useState(0);

  useEffect(() => {
    // Simulating GitHub push data fetching
    const interval = setInterval(() => {
      setGithubPushes((prev) => prev + Math.floor(Math.random() * 3));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="snap-section flex bg-white flex-col justify-center">
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title title={"Tech Stack"} />
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-8">
            <div className="md:col-span-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className={`${tech.color} rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-white cursor-pointer`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      rotate: 5,
                      boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      className="text-4xl mb-2"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {tech.icon}
                    </motion.span>
                    <h3 className="text-lg font-semibold">{tech.name}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
