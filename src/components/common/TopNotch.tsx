import { Icons } from "../../lib/utils/Icons";
import RoundedDesign from "./RoundedDesign";

interface TopNotchProps {
  isTransparent?: boolean;
}

const TopNotch = ({ isTransparent }: TopNotchProps) => {
  return (
    <div className="w-[295px] h-[41px] relative">
      <div
        className={`absolute w-[292px] h-[41px] top-0 left-px ${
          isTransparent ? " bg-white/20" : "bg-tertiary-blue/20"
        } rounded-[60px]`}
      />
      <div className="absolute h-[17px] top-3 left-[53px] [font-family:'Inter',Helvetica] font-medium text-[#000000] text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
        Top notch business consultancy
      </div>
      <div className="absolute w-[41px] h-[41px] top-0 left-0 bg-gradient-secondary-to-primary rounded-full">
        <RoundedDesign
          size="small"
          icon={
            <img
              className="absolute w-4 h-4 top-[13px] left-[13px]"
              alt={Icons.Star.alt}
              src={Icons.Star.src}
            />
          }
        />
      </div>
    </div>
  );
};

export default TopNotch;
