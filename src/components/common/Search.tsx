import { IoChevronDown } from "react-icons/io5";
import RoundedDesign from "./RoundedDesign";
import { BiRightArrowAlt } from "react-icons/bi";

const Search = () => {
  const searchItems = [
    "Business Domain",
    "Region in Qatar",
    "Time slot for enquiry",
  ];
  return (
    <div className="font-family-inter flex flex-col md:flex-row items-center justify-between w-[95%] md:w-[90%] mx-auto p-4 md:p-8 backdrop-blur-md shadow-base rounded-search bg-white">
      <ul className="flex flex-col min-[1130px]:flex-row items-center justify-evenly w-full md:w-[60%] mb-4 md:mb-0">
        {searchItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-3 md:gap-5 mb-2 text-sm md:text-lg"
          >
            <span className="text-center md:text-left">{item}</span>
            <IoChevronDown className="text-sm md:text-base" />
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2 md:gap-3">
        <p className="text-secondary-text-blue text-sm md:text-base">
          Get Started
        </p>
        <RoundedDesign
          icon={
            <BiRightArrowAlt
              color="white"
              size={24}
              className="md:w-[30px] md:h-[30px]"
            />
          }
          size="large"
        />
      </div>
    </div>
  );
};

export default Search;
