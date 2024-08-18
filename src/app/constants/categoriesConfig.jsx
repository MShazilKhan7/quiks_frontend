// icons
import { MdBusinessCenter } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlinePsychologyAlt } from "react-icons/md";
import { MdOutlineInsights } from "react-icons/md";
import { CiMoneyBill } from "react-icons/ci";

// Images
import businessImage from "../../assets/categories/business.svg";
import healthImage from "../../assets/categories/health.svg";
import socialImage from "../../assets/categories/social.svg";
import psychologyImage from "../../assets/categories/psychology.svg";
import insightsImage from "../../assets/categories/insights.svg";
import financeImage from "../../assets/categories/finance.svg";

export const categoires = [
  {
    name: "Business",
    icon: <MdBusinessCenter />,
    image: businessImage,
    color: "#7bc2da"
  },
  {
    name: "Healthy",
    icon: <GiHealthNormal />,
    image: healthImage,
    color: "#53bab5"
  },
  {
    name: "Social",
    icon: <FaUserFriends />,
    image: socialImage,
    color: "#f29795"
  },
  {
    name: "Psychology",
    icon: <MdOutlinePsychologyAlt />,
    image: psychologyImage,
    color: "#acd195"
  },
  {
    name: "Insights",
    icon: <MdOutlineInsights />,
    image: insightsImage,
    color: "#b78dc0"
  },
  {
    name: "Financial",
    icon: <CiMoneyBill />,
    image: financeImage,
    color: "#f0c95e"
  },
];
