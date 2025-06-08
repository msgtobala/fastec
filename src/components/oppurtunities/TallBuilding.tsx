import { Images } from "../../lib/utils/Images";

const TallBuilding = () => {
  return (
    <div className="relative w-[400px]">
      <div className="absolute right-[12px] top-[-96px]">
        <img src={Images.PersonEffect.src} alt={Images.PersonEffect.alt} />
      </div>
      <div className="absolute ">
        <img src={Images.TallBuilding.src} alt={Images.TallBuilding.alt} />
      </div>
      <div className="bg-white p-5 rounded-[30px] absolute top-[-67px] left-[-88px] ">
        <img src={Images.HandShake.src} alt={Images.HandShake.alt} />
      </div>
    </div>
  );
};

export default TallBuilding;
