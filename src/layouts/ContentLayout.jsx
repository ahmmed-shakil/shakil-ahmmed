/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../routes";
import "../styles/Logo.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  // const defaultMmenuItems = [
  //   { href: "/", label: "Home" },
  //   { href: "/about", label: "About" },
  //   { href: "/services", label: "Services" },
  //   { href: "/contact", label: "Contact" },
  // ];

  // const [menuItems, setMenuItems] = useState(defaultMmenuItems);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const menu = routes
      ?.filter((r) => r.show)
      ?.map((r) => ({
        href: r?.path,
        label: r?.name,
        ...r,
      }));
    setMenuItems(menu);
  }, []);

  // Get the current location
  const location = useLocation();

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
          {/* <div className=" logo p-1 rounded-md"> */}
          <div className=" ">
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
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={` py-2 font-medium text-sm px-4 rounded transition duration-150 ease-in-out flex items-center gap-2 ${
                    location.pathname === item.href
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <p className=" m-0 p-0"> {item?.icon}</p>
                  <p className=" m-0 p-0 mt-1">{item.label}</p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

const ContentLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

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
