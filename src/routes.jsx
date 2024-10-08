// routes.js
import {
  Bars3BottomLeftIcon,
  ComputerDesktopIcon,
  FaceSmileIcon,
  HomeIcon,
  InformationCircleIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import About from "./views/about/About";
import { PersonStanding } from "lucide-react";
import Projects from "./views/projects/Projects";
import TechStack from "./views/tech-stack/TechStack";
import Blogs from "./views/blogs/Blogs";
import Experience from "./views/experience/Experience";
import Contact from "./views/contact/Contact";
// import UserProfile from "./pages/UserProfile";
// import NotFoundPage from "./pages/NotFoundPage";

export const routes = [
  {
    path: "/",
    element: <Home />,
    getLayout: (page) => <>{page}</>,
    name: "Home", // Name for navigation
    show: true,
    icon: <HomeIcon className=" h-5 w-5 inline-block" />,
  },
  {
    path: "/about",
    element: <About />,
    getLayout: (page) => <>{page}</>,
    name: "About Me", // Name for navigation
    show: true,
    icon: <FaceSmileIcon className=" h-5 w-5 inline-block" />,
  },
  {
    path: "/projects",
    element: <Projects />,
    getLayout: (page) => <>{page}</>,
    name: "Projects", // Name for navigation
    show: true,
    icon: <ComputerDesktopIcon className=" h-5 w-5 inline-block" />,
  },
  {
    path: "/tech-stack",
    element: <TechStack />,
    getLayout: (page) => <>{page}</>,
    name: "Tech Stack", // Name for navigation
    show: true,
    icon: <PersonStanding className=" h-5 w-5 inline-block" />,
  },
  {
    path: "/experience",
    element: <Experience />,
    getLayout: (page) => <>{page}</>,
    name: "Experience", // Name for navigation
    show: true,
    icon: <InformationCircleIcon className=" h-5 w-5 inline-block" />,
  },
  {
    path: "/blog",
    element: <Blogs />,
    getLayout: (page) => <>{page}</>,
    name: "Blogs", // Name for navigation
    show: true,
    icon: <Bars3BottomLeftIcon className=" h-5 w-5 inline-block" />,
  },
  {
    path: "/contact",
    element: <Contact />,
    getLayout: (page) => <>{page}</>,
    name: "Contact", // Name for navigation
    show: true,
    icon: <UserIcon className=" h-5 w-5 inline-block" />,
  },
  {
    path: "/login",
    element: <Login />,
    name: "Login", // Name for navigation
  },
  // {
  //   path: "/user/:id",
  //   element: <UserProfile />,
  //   getLayout: (page) => <UserLayout>{page}</UserLayout>,
  //   name: "User Profile", // Name for navigation
  // },
  // {
  //   path: "*",
  //   element: <NotFoundPage />,
  //   name: "Not Found", // Name for navigation
  // },
];
