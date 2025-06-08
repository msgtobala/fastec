import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import RoundedDesign from "../common/RoundedDesign";
import ExampleStory from "./ExampleStory";

const ClientStories = () => {
  return (
    <div className="flex flex-col gap-10 p-10 mt-10 w-[90%] mx-auto">
      <div className="text-left">
        <h1 className="text-[52px] font-medium uppercase">
          Client <br />
          <span className="font-extrabold text-gradient-secondary-to-primary">
            success stories
          </span>
        </h1>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <RoundedDesign
            icon={
              <BiLeftArrowAlt size={20} className="text-primary-icon-blue" />
            }
            size="large"
            isTransparent={true}
            isPointer={true}
          />
          <RoundedDesign
            icon={<BiRightArrowAlt size={20} color="white" />}
            size="large"
            isPointer={true}
          />
        </div>
        <ExampleStory />
      </div>
    </div>
  );
};

export default ClientStories;
