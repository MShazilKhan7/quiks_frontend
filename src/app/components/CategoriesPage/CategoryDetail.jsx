import React from "react";
import { useParams } from "react-router-dom";
import CategoryDetailSingle from "./CategoryDetailSingle";

export default function CategoryDetail() {
  const { category } = useParams();
  return (
    <div className="w-full py-2 lg:px-8 px-5 gap-5 mx-auto">
      <h2 className="text-[1.6rem] font-semibold font-secondary text-gray-800 my-5">
        {category}
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
        <CategoryDetailSingle category={category} />
        <CategoryDetailSingle category={category} />
        <CategoryDetailSingle category={category} />
        <CategoryDetailSingle category={category} />
        <CategoryDetailSingle category={category} />
        <CategoryDetailSingle category={category} />
      </div>
    </div>
  );
}
