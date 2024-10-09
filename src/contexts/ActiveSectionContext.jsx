/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// ActiveSectionContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const ActiveSectionContext = createContext();

export const ActiveSectionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // 60% of the section must be visible
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  console.log(activeSection);

  return (
    <ActiveSectionContext.Provider value={activeSection}>
      {children}
    </ActiveSectionContext.Provider>
  );
};
