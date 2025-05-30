import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@material-tailwind/react";
import { UserContext } from "../../context/UserContext";

const formatDate = (date) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = days[date.getDay()];
  const dateNum = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const time = `${hours}:${minutes}`;
  const dayDate = `${day}, ${dateNum} ${month} ${year}`;

  return { time, dayDate };
};

export default function Header() {
  const navigate = useNavigate();
  const { user, setUser, logout } = useContext(UserContext);
  
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  console.log("user", user);

  function toggleAccountDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  const handleClickOutside = (event) => {
    if (event.target == document.querySelector(`.profile-icon-img`)) {
      return;
    }
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  function handleLogout() {
    logout();
  }

  const { time, dayDate } = formatDate(currentDateTime);

  return (
    <header className="rounded-l-[0.5rem] shadow-sm h-[96px]" id="header">
      <nav
        className="mx-auto flex items-center justify-between p-2 py-4 md:px-8 px-5 gap-5"
        aria-label="Global"
      >
        <div className="flex-none min-w-[100px] hidden sm:flex">
          <div className="flex-none">
            <div className="block font-semibold text-gray-800" id="time">
              {time}
            </div>
            <p className="text-gray-600 -mt-2 text-sm">{dayDate}</p>
          </div>
        </div>
        <div className="max-w-[500px] min-w-[120px] flex-grow flex items-center justify-start lg:justify-end w-full shadow-md bg-white rounded-md">
          <input
            id="search-bar"
            name="search"
            type="text"
            required
            placeholder="Search Here"
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2.5 focus:outline-none ring-white/10 sm:text-sm sm:leading-6"
          />
          <button className="p-2 pr-3" type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="flex-none hidden md:flex justify-end gap-6 min-w-[50px] ">
          {!user ?
            <h2 className="hidden lg:flex font-semibold text-gray-800 items-center justify-center cursor-pointer hover:underline"
              onClick={() => { navigate("/login"); }}
            >
              Login
            </h2> :
            <h2 className="hidden lg:flex font-semibold text-gray-800 items-center justify-center cursor-pointer hover:underline"
              onClick={handleLogout}
            >
              Logout
            </h2>
          }

          {
            user && (
              <Tooltip content={user?.name} >
                {
                  user?.profile_pic ? <button
                    id="profile-icon"
                    className="shadow-lg h-11 w-11 rounded-full"
                    onClick={() => { navigate("/profile"); }}
                  >
                    <img
                      alt="profile"
                      src={user?.profile_pic}
                      className="h-11 w-11 rounded-full"
                    />
                  </button> : <button
                      onClick={() => { navigate("/profile"); }}
                    id="profile-icon"
                    className="hidden sm:flex h-11 w-11 flex-none items-center justify-center bg-greyaccent hover:bg-accent hover:text-white rounded-full shadow-md"
                  >
                    {user?.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()}
                  </button>
                }
              </Tooltip>
            )
          }
          <Tooltip content="favourites">
            <button className="hidden sm:flex h-11 w-11 flex-none items-center justify-center bg-greyaccent hover:bg-accent text-accent hover:text-white rounded-full shadow-md">
              <i className="fa-solid fa-heart"></i>
            </button>
          </Tooltip>
          <Tooltip content="Notification">
            <button className="hidden sm:flex h-11 w-11 flex-none items-center justify-center bg-greyaccent text-accent hover:bg-accent hover:text-white rounded-full shadow-md">
              <i className="fa-regular fa-bell"></i>
            </button>
          </Tooltip>
        </div>

        {/* Mobile Profile */}
        <div className="flex-none flex md:hidden justify-end gap-4 min-w-[50px] rounded-full">
          <button
            id="profile-icon"
            className="shadow-lg h-11 w-11 rounded-full"
            onClick={toggleAccountDropdown}
          >
            <img
              alt="profile"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="h-11 w-11 rounded-full profile-icon-img"
            />
          </button>
          <div
            ref={dropdownRef}
            className={`absolute rounded-lg text-sm leading-6 top-[4.5rem] right-3 bg-white shadow-md ${isDropdownOpen ? "block" : "hidden"
              }`}
          >
            <a
              href="#"
              className="flex group items-center gap-x-2 px-5 pt-2 pb-1 box-shadow-md hover:bg-gray-50"
            >
              <i className="fa-regular fa-bell"></i>
              <div className="flex-auto font-semibold text-gray-900">
                Notifications
              </div>
            </a>
            <a
              href="#"
              className="flex group items-center gap-x-2 px-5 pb-2 pt-1 box-shadow-md hover:bg-gray-50"
            >
              <i className="fa-regular fa-heart"></i>
              <div className="flex-auto font-semibold text-gray-900">Wishlist</div>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
