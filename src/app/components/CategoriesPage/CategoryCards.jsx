import React, { useState } from "react";
import { categoires } from "../../constants/categoriesConfig";
import CategoryCard from "./CategoryCard";
import { BiCategoryAlt } from "react-icons/bi";


export default function CategoryCards() {
  const [categories, setCategories] = useState(categoires);

  return (
    <div className="w-full py-2 lg:px-8 px-5  gap-5 mx-auto">
      <div className="flex items-center">
        <div class="bg-greyaccent w-12 h-12 flex items-center justify-center p-2 rounded mr-2 my-5">
          <BiCategoryAlt size={24} />
        </div>
        <div>
          <h2 className="text-[1.6rem] font-semibold font-secondary text-gray-800">
            &nbsp;Categories
          </h2>
          <p className="">&nbsp;5 items</p>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 xl:gap-x-8">
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            image={category.image}
            color={category.color}
          />
        ))}
      </div>
    </div>
  );
}
