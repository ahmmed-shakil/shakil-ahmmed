import ContentLayout from "../../layouts/ContentLayout";

const Projects = () => {
  return <div>Projects</div>;
};

Projects.getLayout = (page) => {
  return <ContentLayout>{page}</ContentLayout>;
};

export default Projects;
