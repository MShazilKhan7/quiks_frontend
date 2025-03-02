import * as IoIcons from "react-icons/io"; 
import * as GiIcons from "react-icons/gi"; 

const CategoryList = ({ categories }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-2 py-4">
      {categories.map((category, index) => (
        <CategoryPill
          key={index}
          category={category.name}
          icon={category.icon}
        />
      ))}
    </div>
  );
};

export default CategoryList;

const CategoryPill = ({ icon, category }) => {
  const IconComponent = IoIcons[icon] || GiIcons[icon]; // Get the icon component dynamically

  return (
    <div className="flex gap-2 cursor-pointer items-center rounded-full px-4 py-2 shadow-md bg-[#EDEDF4] w-fit">
      {IconComponent ? <IconComponent className="text-accent text-lg" /> : null}
      <p className="text-gray-800 text-sm">{category}</p>
    </div>
  );
};
