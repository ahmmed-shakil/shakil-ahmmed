import ContentLayout from "../../layouts/ContentLayout";

const About = () => {
  return <div>About</div>;
};

About.getLayout = (page) => {
  return <ContentLayout>{page}</ContentLayout>;
};

export default About;
