import { Images } from "../../lib/utils/Images";

const Flag = () => {
  return (
    <div className=" flex items-center justify-center relative">
      <div className="absolute top-[-59px] right-[110px]">
        <img
          src={Images.ImageHighlighter.src}
          alt={Images.ImageHighlighter.alt}
        />
      </div>
      <div>
        <img
          src={Images.Flag.src}
          alt={Images.Flag.alt}
          className="w-[700px] h-[400px] object-cover"
        />
      </div>
    </div>
  );
};

export default Flag;
