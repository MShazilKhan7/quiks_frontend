import { useState, useRef, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Carousel({ data, title, icon }) {

  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    if (carousel.current !== null) {
      const totalWidth = carousel.current.scrollWidth;
      const viewWidth = carousel.current.offsetWidth;

      maxScrollWidth.current = totalWidth - viewWidth;

      // Check if the content is scrollable
      setIsScrollable(totalWidth > viewWidth);
    }
  }, [data]);

  return (
    <div className="w-full py-2 lg:px-8 px-5 gap-5 mx-auto">
      {/* Title */}
      <div className="flex items-center mb-4">
        <div className="bg-greyaccent w-12 h-12 flex items-center justify-center p-2 rounded mr-2 my-5">
          {icon}
        </div>
        <div>
          <h2 className="text-[1.6rem] font-semibold font-secondary text-gray-800">
            &nbsp;{title}
          </h2>
          <p className="">&nbsp;{data.resources.length} items</p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        {isScrollable && (
          <div className="flex justify-between absolute top left w-full h-full">
            <button
              onClick={movePrev}
              className="text-secondary w-10 h-full text-center disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
              disabled={isDisabled("prev")}
            >
              <FaChevronLeft size={30} />
              <span className="sr-only">Prev</span>
            </button>
            <button
              onClick={moveNext}
              className="text-secondary w-10 h-full text-center disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
              disabled={isDisabled("next")}
            >
              <FaChevronRight size={30} />
              <span className="sr-only">Next</span>
            </button>
          </div>
        )}
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {data.resources.map((resource, index) => (
            <div
              key={index}
              className="carousel-item text-center relative w-52 h-52 mx-2 pt-2 snap-start hover:bg-greyaccent"
            >
              <Link
                to={`/books/${resource.id}`}
                className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                style={{ backgroundImage: `url(${resource.imageUrl || ""})` }}
              >
                <img
                  src={resource.imageUrl || ""}
                  alt={resource.title}
                  className="w-full aspect-square hidden"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
