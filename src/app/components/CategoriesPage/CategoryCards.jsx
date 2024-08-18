import React, { useState } from "react";
import { categoires } from "../../constants/categoriesConfig";
import CategoryCard from "./CategoryCard";


export default function CategoryCards() {
  const [categories, setCategories] = useState(categoires);

  return (
    <div className="w-full py-2 lg:px-8 px-5  gap-5 mx-auto">
      <h2 className="text-[1.6rem] font-semibold font-secondary text-gray-800 my-5">
        Categories
      </h2>
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
