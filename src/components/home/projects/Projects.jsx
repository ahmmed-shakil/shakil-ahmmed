import { ChevronLeft } from "lucide-react";
import ProjectCard from "../../shared/ProjectCard";
import Title from "../../shared/Title";
import { motion, useAnimation } from "framer-motion";

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

  return (
    <div className="snap-section bg-white flex flex-col justify-center items-center w-full">
      <main className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <section>
          <Title title={"Projects"} />
          <div className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {projectsData.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>
        <div className=" mt-14 flex justify-center">
          <motion.button
            className="bg-primary text-white px-6 py-2 rounded-md text-md shadow-md transition-colors duration-200 flex items-center justify-center"
            whileHover={{ scale: 1.05, backgroundColor: "#c41e4a" }}
            whileTap={{ scale: 0.95 }}
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
        </div>
      </main>
    </div>
  );
};

export default Projects;
