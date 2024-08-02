import React from "react";
import { useNavigate } from "react-router-dom";

export default function SidebarItem({
  icon,
  title,
  index,
  setActiveIndex,
  isActive,
  path,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    setActiveIndex(index);
    navigate(path);
  };
  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer p-2 rounded-xl ${
        isActive ? "bg-focused_menu_bg" : ""
      }`}
    >
      <div
        className={`text-sm flex flex-col gap-1 justify-center items-center text-menu ${
          isActive ? "text-focused_menu" : ""
        }`}
      >
        <div className="text-[24px] font-bold">{icon}</div>
        <p className="text-[12px]">{title}</p>
      </div>
    </div>
  );
}
