/* eslint-disable no-unused-vars */
import Contact from "../../components/home/contact/Contact";
import About from "../../components/home/about/About";
import Hero from "../../components/home/hero/Hero";
import Projects from "../../components/home/projects/Projects";
import TechStack from "../../components/home/tech-stack/TechStack";
import ContentLayout from "../../layouts/ContentLayout";
import AnimatedShapes from "../../components/shared/AnimatedShapes";
import { useEffect, useState } from "react";
// import Navbar from "../../layouts/navbar/Menu";

const Home = () => {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    console.log("🚀 ~ useEffect ~ sections:", sections);
    const observerOptions = {
      root: null, // use the viewport as root
      rootMargin: "0px",
      threshold: 0.5, // 50% of the section needs to be in view to trigger
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("id");
          if (sectionId) {
            setActiveSection(sectionId);
            window.history.replaceState(null, null, `#${sectionId}`);
          } else {
            window.history.replaceState = (null, null, null);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <div className="snap-container">
      <section
        className=" snap-section  bg-white flex flex-col justify-center p-0 m-0"
        id="home"
      >
        <Hero />
      </section>
      <section
        id="about"
        className="snap-section  bg-white flex flex-col justify-center p-0 m-0"
      >
        <About />
      </section>
      <section
        id="tech-stack"
        className=" snap-section  bg-white flex flex-col justify-center p-0 m-0"
      >
        <TechStack />
      </section>
      {/* <section
        id="projects"
        className=" snap-section  bg-white flex flex-col justify-center p-0 m-0"
      >
        <Projects />
      </section> */}
      <section
        id="contact"
        className=" snap-section  bg-white flex flex-col justify-center p-0 m-0"
      >
        <Contact />
      </section>
    </div>
  );
};

Home.getLayout = (page) => {
  return <ContentLayout>{page}</ContentLayout>;
};

export default Home;
