import React, { useState } from "react";
import { categoires } from "../../constants/categoriesConfig";
import CategoryItem from "./CategoryItem";
const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="categories flex flex-row gap-3 pb-4">
      {categoires.map((item, index) => {
        return (
          <CategoryItem
            key={index}
            {...item}
            isActive={activeIndex === index}
            setActiveIndex={setActiveIndex}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default Categories;
