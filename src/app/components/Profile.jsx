import React, { useState } from "react";

export default function Profile() {
  const [image, setImage] = useState(
    "https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?t=st=1723506283~exp=1723509883~hmac=ca14e50c2b127f828d41dbfe9c45c39748bc9b8c18e9aa5b278b4d26819c15c6&w=740"
  );
  const [isHovered, setIsHovered] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleDeleteImage = () => {
    setImage(
      "https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?t=st=1723506283~exp=1723509883~hmac=ca14e50c2b127f828d41dbfe9c45c39748bc9b8c18e9aa5b278b4d26819c15c6&w=740"
    );
  };

  return (
    <div className="w-full py-2 lg:px-8 px-5 gap-5 mx-auto">
      <h2 className="text-[1.6rem] font-semibold font-secondary text-gray-800 my-5">
        Profile
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {/* Left */}
        <div className="bg-white max-h-[320px] shadow-md rounded-md sm:col-span-1 lg:col-span-1 p-5">
          <div className="relative flex justify-center">
            <img
              className="object-cover w-40 h-40 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
              src={image}
              alt="Bordered avatar"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>
          <div className="flex justify-center">
            <div>
              <button
                type="button"
                className="block py-2 px-5 mt-5 mb-2 min-w-[150px] font-medium text-indigo-100 focus:outline-none bg-secondary rounded-md hover:bg-indigo-600 focus:z-10"
                onClick={() =>
                  document.getElementById("profileImageInput").click()
                }
              >
                Change Picture
              </button>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="profileImageInput"
                onChange={handleImageChange}
              />
              <button
                type="button"
                className="block py-2 px-5 mt-3 min-w-[150px] text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142]"
                onClick={handleDeleteImage}
              >
                Delete picture
              </button>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="bg-white p-5 px-8 shadow-md rounded-md sm:col-span-1 lg:col-span-2">
          <div className="items-center text-[#202142]">
            <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
              <div className="w-full">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-md text-secondary"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="border border-secondary text-sm rounded-md focus:outline-none block w-full p-2.5"
                  placeholder="Your first name"
                  defaultValue="Jane"
                  required=""
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-md text-secondary"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="border border-secondary text-sm rounded-md focus:outline-none block w-full p-2.5"
                  placeholder="Your last name"
                  defaultValue="Ferguson"
                  required=""
                />
              </div>
            </div>
            <div className="mb-2 sm:mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-md text-secondary"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-secondary text-sm rounded-md focus:outline-none block w-full p-2.5"
                placeholder="your.email@mail.com"
                required=""
              />
            </div>
            <div className="mb-2 sm:mb-6">
              <label
                htmlFor="profession"
                className="block mb-2 text-sm font-md text-secondary"
              >
                Profession
              </label>
              <input
                type="text"
                id="profession"
                className="border border-secondary text-sm rounded-md focus:outline-none block w-full p-2.5"
                placeholder="your profession"
                required=""
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-md text-secondary"
              >
                Bio
              </label>
              <textarea
                id="message"
                rows={4}
                className="border border-secondary text-sm rounded-md focus:outline-none block w-full p-2.5"
                placeholder="Write your bio here..."
                defaultValue={""}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="text-white bg-indigo-700  hover:bg-secondary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
