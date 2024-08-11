import React, { useState } from "react";
import { categoires } from "../../constants/categoriesConfig";
import CategoryItem from "./CategoryItem";
const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="categories py-2">
      <div className="categories flex flex-row gap-3 pb-4 overflow-x-auto md:overflow-hidden">
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
