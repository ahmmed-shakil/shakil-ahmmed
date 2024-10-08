/* eslint-disable no-unused-vars */
import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedShapes from "../../shared/AnimatedShapes";

const About = () => {
  //   const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: { duration: 1.5, repeat: Infinity },
    });
  }, [controls]);
  return <div className="snap-section">{/* <AnimatedShapes /> */}</div>;
};

export default About;
