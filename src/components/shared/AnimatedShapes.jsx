/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const AnimatedShape = ({ position, size, className, duration = 3 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration, // Use the passed duration prop
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
    className={`${className} absolute ${position} rounded-full bg-rose-100 opacity-10`}
    style={{ width: size.width, height: size.height }}
  />
);

const AnimatedShapes = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Top Left Shape */}
    <AnimatedShape
      position="top-1/4 left-1/2"
      size={{ width: "12rem", height: "12rem" }}
      duration={1} // Custom duration for this shape
    />
    <AnimatedShape
      position="top-1/4 left-10"
      size={{ width: "12rem", height: "12rem" }}
      duration={4} // Custom duration for this shape
    />
    {/* Bottom Right Shape */}
    <AnimatedShape
      position="bottom-1/4 right-1/4"
      size={{ width: "12rem", height: "12rem" }}
      duration={5} // Custom duration for this shape
    />
    {/* Middle Left Bottom Shape */}
    <AnimatedShape
      position="bottom-1/3 left-1/4"
      size={{ width: "10rem", height: "10rem" }}
      duration={3} // Default duration
    />
    {/* New Top Right Shape */}
    <AnimatedShape
      position="top-20 right-20"
      size={{ width: "6rem", height: "6rem" }}
      duration={2.5} // Shorter duration for faster animation
    />
    {/* New Bottom Right Shape */}
    <AnimatedShape
      position="bottom-20 right-20"
      size={{ width: "6rem", height: "6rem" }}
      duration={2} // Longer duration for slower animation
    />
  </div>
);

export default AnimatedShapes;
