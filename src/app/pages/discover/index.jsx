import React from "react";
import Categories from "../../components/categories/Categories";
import PrimaryCards from "../../components/primaryCard/PrimaryCards";
import AudioPlayer from "../../components/audioPlayer/AudioPlayer";
const Discover = () => {
  return (
    <>
      <div className="w-full py-2  lg:px-8 px-5  gap-5 mx-auto">
        <h2 className="text-[1.6rem] font-semibold font-secondary text-gray-800">
          Discover
        </h2>
      </div>
      <div className="w-full lg:px-8 px-5  gap-5 mx-auto">
        <div className="grid lg:flex gap-5 ">
          <div className="lg:w-[60%] order-2 lg:order-1">
            <div className="categories w-full overflow-x-auto py-2">
              <Categories />
            </div>
            <PrimaryCards />
          </div>
          {/* Audio Player */}
          <div className="lg:max-w-lg sm:w-full flex flex-auto order-1 lg:order-2 md:h-auto">
            <AudioPlayer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
