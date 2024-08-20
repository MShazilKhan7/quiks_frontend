import React from "react";

const CategoryPill = ({ icon, category }) => {
  return (
    <div className="flex gap-2 cursor-pointer items-center rounded-full px-4 py-2 shadow-md bg-[#EDEDF4] w-fit ">
      <div>{icon}</div>
      <p className="text-gray-800">{category}</p>
    </div>
  );
};

export default CategoryPill;
