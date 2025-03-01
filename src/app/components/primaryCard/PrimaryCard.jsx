import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function PrimaryCard(props) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
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

  const handleCardClick = () => {
    navigate("books/1/");
  };
  return (
    <div
      onClick={handleCardClick}
      className="truncate book-primary-card w-full bg-white hover:bg-primary cursor-pointer p-3 rounded-[1rem] shadow-lg flex gap-3 text-gray-800 hover:text-white transition-all duration-300 relative"
    >
      <div className="rounded-md md:w-[120px] w-[120px] md:h-[100px] h-[100px]">
        <img
          className="w-[100%] h-[100%] rounded-[10px]"
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
        <div className="flex justify-between align-center">
          <p className="truncate max-w-[75%] font-semibold font-secondary text-[0.8rem] mt-2 text-gray-500 length">
            <i className="fa-regular fa-hourglass-half"></i>&nbsp;
            {props.length} mins
          </p>
          <button className="w-[40px] h-[40px] -mt-4 flex items-center justify-center rounded-full bg-gray-200 text-secondary hover:bg-secondary hover:text-white focus:outline-none mx-2 transition-all duration-300">
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
