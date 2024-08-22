import React, { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { IoMdStarOutline } from "react-icons/io";
import { FaRegLightbulb } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { motion } from "framer-motion";
import { LuFileAudio } from "react-icons/lu";
import { LuFileText } from "react-icons/lu";
import { FaCirclePlay } from "react-icons/fa6";
import { BiSolidLeftArrow } from "react-icons/bi";
import DirectedButton from "../DirectedButtons/DirectedButton";
import { FaReadme } from "react-icons/fa6";
import { FcReadingEbook } from "react-icons/fc";
import CategoryPill from "../CategoryPill/CategoryPill";
import { GiHealing } from "react-icons/gi";
const BookDetails = () => {
  const [bookmarked, setBookmarked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isAudio, setIsAudio] = useState(true);
  const BookMarked = () => {
    setBookmarked(true);
  };
  const removeBookMarked = () => {
    setBookmarked(false);
  };
  return (
    <div className="flex w-full flex-col md:flex-row justify-between py-4 md:px-12 md:py-8">
      <div
        className="image   w-full h-[300px] md:w-[32%] md:h-[38%] relative transition-all ease-out duration-300 flex justify-center items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="/image.png"
          className={`w-full h-full object-contain ${
            isHovered ? "opacity-50" : ""
          }`}
          alt=""
        />
        <motion.div
          initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
          animate={{ scale: isHovered ? 2 : 0, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 0.4,
          }}
          className={`read flex items-center cursor-pointer justify-center rounded-full absolute w-12 h-12 bg-[#03314B] shadow-lg ${
            isHovered ? "visible" : "invisible"
          }`}
        >
          <h2 className="text-xs text-white font-bold select-none">Read</h2>
        </motion.div>
      </div>
      <div className="details w-full md:w-[68%] px-4 py-4 md:pl-8">
        <div className="flex gap-4 justify-start">
          <h1 className="heading font-bold text-3xl md:text-4xl text-gray-800">
            How to Talk to Anyone
          </h1>
          <div className="py-2">
            {bookmarked ? (
              <BsBookmarkCheckFill
                size={32}
                className={`cursor-pointer`}
                onClick={removeBookMarked}
              />
            ) : (
              <CiBookmark
                size={32}
                className={`cursor-pointer`}
                onClick={BookMarked}
              />
            )}
          </div>
        </div>
        <h3 className="author font-semibold text-lg mt-4 text-gray-800">
          Leil Lowndes
        </h3>
        <h3 className="subtitle text-xl mt-4 text-gray-800">
          92 Little Tricks for Big Success in Relationships
        </h3>
        <hr className="w-full h-[1.5px] bg-[#a8a7a7] mt-4" />
        <div className="flex tablets:flex-col md:flex-row md:justify-between pt-3">
          <div className="tablets:w-full md:w-[calc(100%-150px)] grid grid-cols-2 gap-x-4 gap-y-4 ">
            <div className="flex items-center gap-2">
              <div>
                <IoMdStarOutline size={28} />
              </div>
              <h1 className="rating mt-1">4.3 (2341 ratings)</h1>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <IoTimeOutline size={28} />
              </div>
              <h4 className="rating mt-1">32 min</h4>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <HiOutlineLightBulb size={28} />
              </div>
              <h4 className="rating mt-1">15 Key Ideas </h4>
            </div>
            <div className="flex items-center gap-2">
              {isAudio ? <LuFileAudio size={28} /> : <LuFileText size={28} />}
              <h4 className="rating mt-1">{isAudio ? "Audio & " : ""}Text</h4>
            </div>
          </div>
          <div className="md:w-[150px] tablets:py-6 tablets:flex-row tablets:w-full flex flex-col items-end gap-4">
            <DirectedButton
              icon={<FaCirclePlay size={28} color="#03314B" />}
              text={"Listen"}
            />
            <DirectedButton
              icon={
                <FcReadingEbook
                  size={28}
                  className="bg-[#03314B] rounded-full"
                />
              }
              text={"Read"}
            />
          </div>
        </div>
        <hr className="w-full h-[1.5px] bg-[#a8a7a7] mt-5" />
        <div className="categories-details py-6">
          <p className="text-xl font-semibold text-gray-800">What's it About</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <CategoryPill
              category={"Personal Development"}
              icon={<IoMdStarOutline size={28} />}
            />
            <CategoryPill category={"Health"} icon={<GiHealing size={28} />} />
          </div>
        </div>
        <div className="about-the-book py-4">
          <p>
            AI Needs You (2024), explores the transformative power of Artificial
            Intelligence and the urgent need for public engagement in shaping
            its future.It argues that everyone, regardless of technical
            expertise, has a crucial role to play in guiding AI's development to
            ensure it benefits humanity as a whole.{" "}
          </p>
        </div>
        <div className="about-the-book py-4">
          <p className="text-xl font-semibold text-gray-800">
            About the Author
          </p>
          <p>
            Verity Harding is a prominent figure in the field of AI policy and
            ethics, recognized as one of TIME's 100 Most Influential People in
            AI. She currently serves as the Director of the AI & Geopolitics
            Project at the University of Cambridge's Bennett Institute for
            Public Policy and is the founder of Formation Advisory, a
            consultancy firm focused on the future of technology and society.
            Harding's expertise stems from her experience as Google DeepMind's
            inaugural Global Head of Policy and her prior role as a political
            adviser to Britain's deputy prime minister.
          </p>
        </div>
      </div>
    </div>
  );
};

// bg-[#DBE0EA] p-2 rounded-md shadow-md
export default BookDetails;
