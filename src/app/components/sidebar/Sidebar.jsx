import React from "react";
import SidebarItem from "./SidebarItem";
import { navigation } from "../../constants/navigationMenusConfig";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function Sidebar({ isOpen, onToggle }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(UserContext);

  // Filter out the profile link if user is not authenticated
  const filteredNavigation = navigation.filter(menu => {
    if (menu.path === "/profile") {
      return user !== null; // Only show profile if user exists
    }
    return true; // Show all other menu items
  });

  return (
    <nav
      className={`h-full relative overflow-hidden z-10 rounded-r-[0.5rem] md:rounded-r-[0] transition-all duration-300 bg-[#DBE0EA] flex flex-col justify-center`}
    >
      <div className="flex flex-col gap-4">
        {filteredNavigation.map((menu, index) => {
          return (
            <SidebarItem
              key={index}
              {...menu}
              icon={menu.icon}
              title={menu.title}
              path={menu.path}
              isActive={menu.path === location.pathname}
            />
          );
        })}
      </div>
      <div
        className="absolute bottom-0 p-1"
        onClick={() => {
          navigate("/dashboard/");
        }}
      >
        <h2 className="hidden lg:flex text-[12px] font-semibold text-gray-800 items-center justify-center cursor-pointer hover:underline text-center">
          Login As Admin
        </h2>
      </div>
    </nav>
  );
}
