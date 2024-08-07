import React from "react";
import Categories from "../categories/Categories";
import PrimaryCards from "../primaryCard/PrimaryCards";
const Discover = () => {
  return (
    <div className="w-full p-2 py-4 lg:px-8 px-5 gap-5 mx-auto">
      <div>
        <Categories />
      </div>
      <div className="grid lg:flex gap-5">
        <PrimaryCards />
        {/* Audio Player - component will be made */}
        <div className="bg-primary flex flex-auto order-1 lg:order-2 rounded-md shadow-lg md:h-auto h-[200px]"></div>
      </div>
    </div>
  );
};

export default Discover;
