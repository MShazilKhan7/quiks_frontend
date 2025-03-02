import { IoMdStarOutline } from "react-icons/io";
import { HiOutlineLightBulb } from "react-icons/hi";
import { LuFileAudio } from "react-icons/lu";
import { FaCirclePlay } from "react-icons/fa6";
import DirectedButton from "../DirectedButtons/DirectedButton";
import { FcReadingEbook } from "react-icons/fc";
import { IoTimeOutline } from "react-icons/io5";


const BookStats = ({ book }) => {
  return (
    <div className="flex tablets:flex-col md:flex-row md:justify-between pt-3">
      <div className="tablets:w-full md:w-[calc(100%-150px)] grid grid-cols-2 gap-x-4 gap-y-4">
        <StatItem icon={<IoMdStarOutline size={20} />} value={book.rating} />
        <StatItem icon={<IoTimeOutline size={20} />} value={book.duration} />
        <StatItem icon={<HiOutlineLightBulb size={20} />} value={book.keyIdeas} />
        <StatItem icon={<LuFileAudio size={20} />} value={book.format} />
      </div>
      <ActionButtons />
    </div>
  );
};

export default BookStats;

const StatItem = ({ icon, value }) => (
  <div className="flex items-center gap-2">
    <div>{icon}</div>
    <h4 className="rating mt-1 text-sm">{value}</h4>
  </div>
);

const ActionButtons = () => (
  <div className="md:w-[150px] tablets:py-6 tablets:flex-row tablets:w-full flex flex-col items-end gap-4">
    <DirectedButton icon={<FaCirclePlay size={28} color="#03314B" />} text="Listen" />
    <DirectedButton icon={<FcReadingEbook size={28} className="bg-[#03314B] rounded-full" />} text="Read" />
  </div>
);