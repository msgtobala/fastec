import { Icons } from "../../lib/utils/Icons";
import { Images } from "../../lib/utils/Images";
import RoundedDesign from "../common/RoundedDesign";

const Gdp = () => {
  return (
    <div className="relative w-[204px] h-[246px] overflow-visible">
      <div>
        <img src={Images.Gdp.src} alt={Images.Gdp.alt} className="absolute" />
      </div>
      <div className="absolute left-[-44px] top-[-41px]">
        <RoundedDesign
          size="xlarge"
          icon={
            <img
              src={Icons.Grow.src}
              alt={Icons.Grow.alt}
              className="w-[40px] h-[40px]"
            />
          }
        />
      </div>
    </div>
  );
};

export default Gdp;
