import { GoHomeFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { BiCategoryAlt } from "react-icons/bi";
import { IoMdPerson } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
export const navigation = [
  {
    path: "/",
    title: "Discover",
    icon: <GoHomeFill />,
  },
  {
    path: "categories",
    title: "Categories",
    icon: <BiCategoryAlt />,
  },
  {
    path: "library",
    title: "Library",
    icon: < CiBookmark />,
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
