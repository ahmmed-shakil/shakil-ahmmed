/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
"use client";

import { motion } from "framer-motion";

const Title = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative inline-block"
    >
      <h4 className="section-title section-title2 rounded-md p-2 font-semibold text-lg md:text-2xl relative">
        {title}
      </h4>
    </motion.div>
  );
};

export default Title;
