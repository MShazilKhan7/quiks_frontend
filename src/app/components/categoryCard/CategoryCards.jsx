import React, { useState } from "react";
import { categoires } from "../../constants/categoriesConfig";
import CategoryCard from "./CategoryCard";
import { BiCategoryAlt } from "react-icons/bi";


export default function CategoryCards() {
  const [categories, setCategories] = useState(categoires);

  return (
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
  );
}
