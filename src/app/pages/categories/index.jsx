import CategoryCards from "../../components/categoryCard/CategoryCards";
import Heading from "../../components/Heading/Heading";
import { BiCategoryAlt } from "react-icons/bi";
import { useState } from "react";
import { categoires } from "../../constants/categoriesConfig";

export default function Categories() {
  // Backend Data
  const [categories, setCategories] = useState(categoires);

  return (
    <div className="w-full py-2 lg:px-8 px-5  gap-5 mx-auto">
      <Heading title="Categories" itemCount={categories.length} icon={<BiCategoryAlt size={24} />}/>
      <CategoryCards categories={categories} />
    </div>
  );
}
