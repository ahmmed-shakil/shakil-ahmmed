/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import { HomeIcon, Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { routes } from "../routes";
import "../styles/Logo.css";
import { HashLink } from "react-router-hash-link";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [menuItems, setMenuItems] = useState([]);
  const location = useLocation();
  console.log("🚀 ~ location:", location);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const menu = routes
      ?.map((r) => {
        return {
          href: r?.path,
          label: r?.name,
          ...r,
        };
      })
      ?.filter((r) => r.show);
    setMenuItems(menu);
  }, []);

  // Set up Intersection Observer to detect active section
  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Replace with your section selectors
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry.target, "TARGET");
            if (entry.target.id) {
              setActiveSection(entry.target.id);
            } else {
              setActiveSection("");
            } // Set active section based on the element's id
          }
        });
      },
      {
        threshold: 0.5, // Adjust this value based on when you want the section to be considered "active"
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  console.log(activeSection, "ACTIVE SECTION");

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-slate-800 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="">
            <h2 className="text-xl font-semibold text-primary bg-white px-3 rounded">
              P O R T F O L I O
            </h2>
          </div>
          <button onClick={toggleSidebar} className="lg:hidden">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-6">
            <li>
              <HashLink
                smooth
                to={"/#home"}
                className={`py-2 font-medium text-sm px-4 rounded transition duration-150 ease-in-out flex items-center gap-2 ${
                  // (location.pathname === "/" && !location.hash) ||
                  activeSection === "home"
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
                onClick={toggleSidebar} // Close the sidebar after navigation on mobile
              >
                <span className="m-0 p-0">
                  <HomeIcon className=" h-5 w-5 inline-block" />
                </span>
                <span className="m-0 p-0 mt-1">Home</span>
              </HashLink>
            </li>
            {menuItems.map((item) => {
              return (
                <li key={item.href}>
                  <HashLink
                    smooth
                    to={item.href}
                    className={`py-2 font-medium text-sm px-4 rounded transition duration-150 ease-in-out flex items-center gap-2 ${
                      activeSection === item.href.split("#")[1]
                        ? "bg-primary text-white"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                    }`}
                    onClick={toggleSidebar} // Close the sidebar after navigation on mobile
                  >
                    <span className="m-0 p-0">{item?.icon}</span>
                    <span className="m-0 p-0 mt-1">{item.label}</span>
                  </HashLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

const ContentLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("clicked");
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm lg:hidden">
          <div className="px-4 py-2">
            <button
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-gray-600"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default ContentLayout;
