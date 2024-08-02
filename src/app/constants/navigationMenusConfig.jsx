import { GoHomeFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { BiCategoryAlt } from "react-icons/bi";
import { IoMdPerson } from "react-icons/io";
import { CiSettings } from "react-icons/ci";

export const navigation = [
  {
    path: "/",
    title: "Discover",
    icon: <GoHomeFill />,
  },
  {
    path: "search",
    title: "Search",
    icon: <CiSearch />,
  },
  {
    path: "categories",
    title: "Categories",
    icon: <BiCategoryAlt />,
  },
  {
    path: "profile",
    title: "Profile",
    icon: <IoMdPerson />,
  },
  {
    path: "settings",
    title: "Settings",
    icon: <CiSettings />,
  },
];
