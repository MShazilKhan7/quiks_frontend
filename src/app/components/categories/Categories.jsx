import React, { useState } from "react";
import { categoires } from "../../constants/categoriesConfig";
import CategoryItem from "./CategoryItem";
const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="categories py-2">
      <div>
        <h2 className="text-[1.6rem] font-semibold font-secondary text-gray-800">
          Discover
        </h2>
      </div>
      <div className="categories flex flex-row gap-3 py-4 overflow-x-auto md:overflow-hidden">
        {categoires.map((item, index) => {
          return (
            <CategoryItem
              {...item}
              isActive={activeIndex === index}
              setActiveIndex={setActiveIndex}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
