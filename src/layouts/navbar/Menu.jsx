"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`${
        isSticky ? "fixed top-0 left-0 right-0 bg-white shadow-md" : ""
      } transition-all duration-300 ease-in-out z-50 py-4 mb-4`}
    >
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
      <div className="">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <div className=" font-bold text-gray-800 logo">
              <span className=" text-2xl block">BONDHON</span>
              <span className=" text-sm">M u l t i m e d i a</span>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {routes
                .filter((route) => route.name) // Filter out routes without names
                .map((route) => (
                  <Link
                    key={route.path}
                    to={route.path}
                    className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {route.name}
                  </Link>
                ))}
            </div>
          </div>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`sm:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-16 right-0 bottom-0 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {routes
            .filter((route) => route.name) // Filter out routes without names
            .map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                {route.name}
              </Link>
            ))}
        </div>
      </div>
    </nav>
  );
}
