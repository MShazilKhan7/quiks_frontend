import React from "react";
import { BiSolidLeftArrow } from "react-icons/bi";

const DirectedButton = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <div className="px-4 py-1 w-[100px] justify-center hover:scale-105 hover:shadow-xl transition-all duration-75 ease-in-out text-white cursor-pointer bg-[#03314B] rounded-md relative flex items-center">
        <BiSolidLeftArrow
          className="absolute -left-2"
          color="#03314B"
        />
        <h3 className="text-sm">{text}</h3>
      </div>
    </div>
  );
};
// size={28} color="#03314B"

export default DirectedButton;
