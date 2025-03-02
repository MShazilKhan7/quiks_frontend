import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const BookImage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  console.log(`${location.pathname}read/`);
  return (
    <div
      className="relative flex justify-center items-center w-full h-[300px] md:w-[32%] md:h-[38%] transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="/image.png"
        className={`w-full h-full object-contain ${
          isHovered ? "opacity-50" : ""
        }`}
        alt="Book Cover"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isHovered ? 2 : 0, opacity: isHovered ? 1 : 0 }}
        transition={{ ease: "linear", duration: 0.4 }}
        className="absolute w-12 h-12 flex items-center justify-center bg-[#03314B] shadow-lg rounded-full cursor-pointer"
      >
        <Link to={`${location.pathname}read/`}>
          <h2 className="text-xs text-white font-bold">Read</h2>
        </Link>
      </motion.div>
    </div>
  );
};

export default BookImage;
