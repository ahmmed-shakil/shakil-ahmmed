/* eslint-disable no-unused-vars */
import { ChevronLeft } from "lucide-react";
import ProjectCard from "../../shared/ProjectCard";
import Title from "../../shared/Title";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const projectsData = [
    {
      title: "Project 1",
      image: "/path/to/image1.jpg",
      description: "A brief description of project 1.",
      techStack: ["React", "Node.js", "MongoDB"],
      clientLink: "https://client-link-1.com",
      serverLink: "https://server-link-1.com",
      githubLink: "https://github.com/user/project1",
    },
    {
      title: "Project 2",
      image: "/path/to/image2.jpg",
      description: "A brief description of project 2.",
      techStack: ["Next.js", "Prisma", "PostgreSQL"],
      clientLink: "https://client-link-2.com",
      serverLink: "https://server-link-2.com",
      githubLink: "https://github.com/user/project2",
    },
    {
      title: "Project 3",
      image: "/path/to/image3.jpg",
      description: "A brief description of project 3.",
      techStack: ["Next.js", "Prisma", "PostgreSQL"],
      clientLink: "https://client-link-3.com",
      serverLink: "https://server-link-3.com",
      githubLink: "https://github.com/user/project3",
    },
    // Add more projects as needed
  ];

  const ref = useRef(null);
  const isStackInView = useInView(ref, { once: false });

  return (
    <div className=" py-10 md:py-0">
      <main className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <Title title={"Projects"} />
        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-6">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} i={index} />
            ))}
          </div>
        </div>
        {/* <div className=" mt-14 flex justify-center">
          <motion.button
            ref={ref}
            className="bg-primary text-white px-6 py-2 rounded-md text-md shadow-md transition-colors duration-200 flex items-center justify-center"
            whileHover={{ scale: 1.05, backgroundColor: "#c41e4a" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={
              isStackInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.4, delay: 1 }}
            // onClick={handleReadMore}
          >
            View All
            <motion.div
              animate={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="ml-2"
            >
              <ChevronLeft size={20} />
            </motion.div>
          </motion.button>
        </div> */}
      </main>
    </div>
  );
};

export default Projects;
