import React from "react";
import SidebarItem from "./SidebarItem";
import { navigation } from "../../constants/navigationMenusConfig";

export default function Sidebar(props) {
  return (
    <nav
      className={`h-full transition-all duration-300 bg-primary flex flex-col justify-between`}
    >
      <div>
        {navigation.map((menu) => {
          return <SidebarItem {...menu} />;
        })}
      </div>
      <div className="relative">
        <button
          className={
            "absolute md:hidden bottom-4 left-1/2 transform text-white w-8 h-8 flex items-center justify-center rounded-full shadow-lg toggle-btn close bg-accent"
          }
          onClick={props.onToggle}
          aria-label="Toggle Sidebar"
        >
          {props.isOpen ? (
            <i className="fas fa-arrow-left text-sm"></i>
          ) : (
            <i className="fas fa-arrow-right text-sm"></i>
          )}
        </button>
      </div>
    </nav>
  );
}
