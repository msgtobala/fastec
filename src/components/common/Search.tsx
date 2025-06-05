import { IoChevronDown } from "react-icons/io5";
import RoundedDesign from "./RoundedDesign";
import { BiRightArrowAlt } from "react-icons/bi";

const Search = () => {
  const searchItems = [
    "Business Domain",
    " Region in Quatar",
    "Time slot for enquiry",
  ];
  return (
    <div className="font-family-inter flex items-center justify-between w-[90%] mx-auto p-8 backdrop-blur-md shadow-base  rounded-search bg-white">
      <ul className="flex items-center justify-evenly w-[60%]">
        {searchItems.map((item, index) => (
          <li key={index} className="flex items-center gap-5 mb-2 text-lg">
            <span>{item}</span>
            <IoChevronDown />
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3">
        <p className="text-secondary-text-blue">Get Started</p>
        <RoundedDesign
          icon={<BiRightArrowAlt color="white" size={30} />}
          size="large"
        />
      </div>
    </div>
  );
};

export default Search;
