import { Images } from "../../lib/utils/Images";

const SuccessRate = () => {
  return (
    <div className="relative w-96 h-96 flex justify-center items-center">
      <div className="absolute bottom-[37%] right-[32%] w-[259px] h-[259px]">
        <img src={Images.PersonEffect.src} alt={Images.PersonEffect.alt} />
      </div>
      <div className="w-[200px] h-[243px]">
        <img
          src={Images.SuccessRate.src}
          alt={Images.SuccessRate.alt}
          className="w-fit h-fit"
        />
      </div>
      <div className="absolute top-[5%] right-[10%] w-[112px] h-[112px]">
        <img src={Images.Person1.src} alt={Images.Person1.alt} />
      </div>
    </div>
  );
};

export default SuccessRate;
