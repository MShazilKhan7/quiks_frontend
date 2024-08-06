import React, { useState, useEffect, useRef } from "react";

export default function PrimaryCard(props) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (
      event.target == document.querySelector(`.menu-btn-${props.id}`) ||
      event.target == document.querySelector(`.menu-${props.id}`)
    ) {
      return;
    }
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="truncate book-primary-card w-full bg-white hover:bg-primary cursor-pointer p-3 rounded-[1rem] shadow-lg flex gap-3 text-gray-800 hover:text-white transition-all duration-300 ">
      <div className=" rounded-md shadow-md md:w-[120px] w-[80px] md:h-[120px] h-[80px] bg-secondary">
        <img
          className="w-[100%] h-[100%] rounded-[10px] shadow-md"
          src={props.image}
          alt="book"
        />
      </div>
      <div className="truncate w-full">
        <div className="rounded-md justify-between flex">
          <div className="lg:max-w-[90%] max-w-[80%]">
            <small className="category text-[0.75rem]">{props.category}</small>
            <h2 className="text-[1.25rem] font-bold book-title truncate ellipses">
              {props.title}
            </h2>
            <p className="category text-[0.85rem] mt-1">
              by <span className="font-semibold">{props.author}</span>
            </p>
          </div>
          <button
            className={`text-lg p-3  h-[40px] menu-btn-${props.id}`}
            onClick={toggleDropdown}
          >
            <i className={`fa-solid fa-ellipsis-vertical menu-${props.id}`}></i>
          </button>
        </div>
        <div className="flex justify-between align-center truncate">
          <p className="truncate max-w-[75%] font-semibold font-secondary text-sm mt-3 text-gray-500 length">
            <i className="fa-regular fa-hourglass-half"></i>&nbsp;{" "}
            {props.length} mins
          </p>
          <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gray-200 text-secondary hover:bg-secondary hover:text-white focus:outline-none mx-2 transition-all duration-300">
            <i className="fa-solid fa-play"></i>
          </button>
        </div>
      </div>
      <div
        ref={dropdownRef}
        className={`menu absolute rounded-lg text-sm leading-6 top-[3.25rem] right-5 bg-white shadow-md ${
          isDropdownOpen ? "block" : "hidden"
        }`}
      >
        <a
          href="#"
          className="flex group items-center gap-x-2 px-3 py-2 box-shadow-md hover:bg-gray-50 rounded-lg"
        >
          <i className="fa-regular fa-heart"></i>
          <div className="flex-auto font-semibold text-gray-900">
            Add to Wishlist
          </div>
        </a>
      </div>
    </div>
  );
}
