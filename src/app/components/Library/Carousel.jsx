import { useState, useRef, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import CarouselItem from "./CarouselItem";
import Heading from "../Heading/Heading";

// Main Carousel Component
export default function Carousel({ data, title, icon }) {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const moveNext = () => {
    if (carousel.current && carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") return currentIndex <= 0;
    if (direction === "next" && carousel.current) {
      return carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current;
    }
    return false;
  };

  useEffect(() => {
    if (carousel.current) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    if (carousel.current) {
      const totalWidth = carousel.current.scrollWidth;
      const viewWidth = carousel.current.offsetWidth;
      maxScrollWidth.current = totalWidth - viewWidth;
      setIsScrollable(totalWidth > viewWidth);
    }
  }, [data]);

  return (
    <div className="w-full py-2 lg:px-8 px-5 gap-5 mx-auto">
      <Heading title={title} itemCount={data.resources.length} icon={icon} />
      <div className="relative overflow-hidden">
        {isScrollable && (
          <div className="flex justify-between absolute top left w-full h-full">
            <CarouselButton direction="prev" onClick={movePrev} isDisabled={isDisabled("prev")} />
            <CarouselButton direction="next" onClick={moveNext} isDisabled={isDisabled("next")} />
          </div>
        )}
        <CarouselContainer carouselRef={carousel}>
          {data.resources.map((resource, index) => (
            <CarouselItem key={index} resource={resource} />
          ))}
        </CarouselContainer>
      </div>
    </div>
  );
}

// Carousel Navigation Button Component
const CarouselButton = ({ direction, onClick, isDisabled }) => {
  const Icon = direction === "prev" ? FaChevronLeft : FaChevronRight;
  return (
    <button
      onClick={onClick}
      className="text-secondary w-10 h-full text-center disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
      disabled={isDisabled}
    >
      <Icon size={30} />
      <span className="sr-only">{direction === "prev" ? "Prev" : "Next"}</span>
    </button>
  );
};

// Carousel Container Component
const CarouselContainer = ({ children, carouselRef }) => {
  return (
    <div
      ref={carouselRef}
      className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
    >
      {children}
    </div>
  );
};
