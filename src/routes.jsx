/* eslint-disable no-unused-vars */
// routes.js
import {
  Bars3BottomLeftIcon,
  ComputerDesktopIcon,
  FaceSmileIcon,
  HomeIcon,
  InformationCircleIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import Hero from "./components/home/hero/Hero";
import About from "./components/home/about/About";
import TechStack from "./components/home/tech-stack/TechStack";
import Projects from "./components/home/projects/Projects";
import Contact from "./components/home/contact/Contact";
import Home from "./views/home/Home";
import { PersonStanding } from "lucide-react";
// import UserProfile from "./pages/UserProfile";
// import NotFoundPage from "./pages/NotFoundPage";

// export const routes = [
//   {
//     path: "/",
//     element: <Home />,
//     getLayout: (page) => <>{page}</>,
//     name: "Home", // Name for navigation
//     show: true,
//     icon: <HomeIcon className=" h-5 w-5 inline-block" />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//     getLayout: (page) => <>{page}</>,
//     name: "About Me", // Name for navigation
//     show: true,
//     icon: <FaceSmileIcon className=" h-5 w-5 inline-block" />,
//   },
//   {
//     path: "/projects",
//     element: <Projects />,
//     getLayout: (page) => <>{page}</>,
//     name: "Projects", // Name for navigation
//     show: true,
//     icon: <ComputerDesktopIcon className=" h-5 w-5 inline-block" />,
//   },
//   {
//     path: "/tech-stack",
//     element: <TechStack />,
//     getLayout: (page) => <>{page}</>,
//     name: "Tech Stack", // Name for navigation
//     show: true,
//     icon: <PersonStanding className=" h-5 w-5 inline-block" />,
//   },
//   {
//     path: "/experience",
//     element: <Experience />,
//     getLayout: (page) => <>{page}</>,
//     name: "Experience", // Name for navigation
//     show: true,
//     icon: <InformationCircleIcon className=" h-5 w-5 inline-block" />,
//   },
//   {
//     path: "/blog",
//     element: <Blogs />,
//     getLayout: (page) => <>{page}</>,
//     name: "Blogs", // Name for navigation
//     show: true,
//     icon: <Bars3BottomLeftIcon className=" h-5 w-5 inline-block" />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//     getLayout: (page) => <>{page}</>,
//     name: "Contact", // Name for navigation
//     show: true,
//     icon: <UserIcon className=" h-5 w-5 inline-block" />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//     name: "Login", // Name for navigation
//   },
//   // {
//   //   path: "/user/:id",
//   //   element: <UserProfile />,
//   //   getLayout: (page) => <UserLayout>{page}</UserLayout>,
//   //   name: "User Profile", // Name for navigation
//   // },
//   // {
//   //   path: "*",
//   //   element: <NotFoundPage />,
//   //   name: "Not Found", // Name for navigation
//   // },
// ];

export const routes = [
  {
    path: "/",
    element: <Home />,
    getLayout: (page) => <>{page}</>,
    name: "Home",
    show: false,
    icon: <HomeIcon className=" h-5 w-5 inline-block" />,
  },
  {
    path: "/#about",
    element: <About />, // If all sections are on the same page
    getLayout: (page) => <>{page}</>,
    name: "About Me",
    show: true,
    icon: <FaceSmileIcon className=" h-5 w-5 inline-block" />,
  },
  {
    path: "/#tech-stack",
    element: <TechStack />,
    getLayout: (page) => <>{page}</>,
    name: "Tech Stack", // Name for navigation
    show: true,
    icon: <PersonStanding className=" h-5 w-5 inline-block" />,
  },
  // {
  //   path: "/#projects",
  //   element: <Projects />, // Points to the same page, but scrolls to 'Projects'
  //   getLayout: (page) => <>{page}</>,
  //   name: "Projects",
  //   show: true,
  //   icon: <ComputerDesktopIcon className=" h-5 w-5 inline-block" />,
  // },
  {
    path: "/#contact",
    element: <Contact />,
    getLayout: (page) => <>{page}</>,
    name: "Contact", // Name for navigation
    show: true,
    icon: <UserIcon className=" h-5 w-5 inline-block" />,
  },

  // Add more sections as needed...
];
