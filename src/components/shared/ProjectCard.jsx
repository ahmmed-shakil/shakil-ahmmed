/* eslint-disable react/prop-types */
"use client";

import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      initial={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Front side of the card */}
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <div className="flex space-x-2 mt-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Back side of the card (shown on hover) */}
      <motion.div
        className="absolute top-0 left-0 right-0 bottom-0 bg-primary text-white p-4 flex flex-col justify-between opacity-0 hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <div>
          <h3 className="text-md font-semibold">{project.title}</h3>
          <p className="mt-2">{project.description}</p>
        </div>
        <div className="flex space-x-2 mt-2">
          <a
            href={project.clientLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 px-2 py-1 rounded"
          >
            Client
          </a>
          <a
            href={project.serverLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 px-2 py-1 rounded"
          >
            Server
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-600 px-2 py-1 rounded"
          >
            GitHub
          </a>
          <a
            href={project.githubLink2}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-600 px-2 py-1 rounded"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
