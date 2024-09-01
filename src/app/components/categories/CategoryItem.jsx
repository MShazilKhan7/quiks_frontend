import React from "react";

const CategoryItem = ({ name, icon, isActive, index, setActiveIndex }) => {
  const handleClick = () => {
    setActiveIndex(index);
  };
  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer px-2 py-3 min-w-20 rounded-2xl border shadow-md transition-all ease-out duration-1 flex flex-col items-center justify-center gap-2 border-[#E5E6EE] ${
        isActive ? "bg-white" : "bg-back"
      }`}
    >
      <div className="icon text-lg text-secondary">{icon}</div>
      <div className="text text-sm text-secondary">{name}</div>
    </div>
  );
};

export default CategoryItem;
