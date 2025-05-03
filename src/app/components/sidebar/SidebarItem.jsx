import React from "react";
import { useNavigate } from "react-router-dom";

export default function SidebarItem({
  icon,
  title,
  isActive,
  path,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };
  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer p-2 rounded-xl  ${
        isActive ? "bg-focused_menu_bg shadow-md" : ""
      }`}
    >
      <div
        className={`text-sm flex flex-col gap-1 justify-center items-center  ${
          isActive ? "text-focused_menu" : "text-menu"
        }`}
      >
        <div className="text-[24px] font-bold text-secondary">{icon}</div>
        <p className="text-[12px] text-secondary">{title}</p>
      </div>
    </div>
  );
}
