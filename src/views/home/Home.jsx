import Contact from "../../components/home/contact/Contact";
import About from "../../components/home/about/About";
import Hero from "../../components/home/hero/Hero";
import Projects from "../../components/home/projects/Projects";
import TechStack from "../../components/home/tech-stack/TechStack";
import ContentLayout from "../../layouts/ContentLayout";
// import Navbar from "../../layouts/navbar/Menu";

const Home = () => {
  return (
    <div className=" snap-container">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
};

Home.getLayout = (page) => {
  return <ContentLayout>{page}</ContentLayout>;
};

export default Home;
