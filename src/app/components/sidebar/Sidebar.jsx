import React from "react";
import SidebarItem from "./SidebarItem";
import { navigation } from "../../constants/navigationMenusConfig";
import { useState } from "react";

export default function Sidebar({ isOpen, onToggle }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav
      className={`h-full relative overflow-hidden z-10 rounded-r-[0.5rem] md:rounded-r-[0] transition-all duration-300 bg-[#DBE0EA] flex flex-col justify-center `}
    >
      <div className="flex flex-col gap-4">
        {navigation.map((menu, index) => {
          return (
            <SidebarItem
              {...menu}
              icon={menu.icon}
              title={menu.title}
              path={menu.path}
              index={index}
              isActive={index === activeIndex}
              setActiveIndex={setActiveIndex}
            />
          );
        })}
      </div>
      <div className="absolute bottom-0 p-1">
        <h2 className="hidden lg:flex text-[12px] font-semibold text-gray-800 items-center justify-center cursor-pointer hover:underline text-center">
          Login As Admin
        </h2>
      </div>
    </nav>
  );
}
