import { Images } from "../../lib/utils/Images";

const ExampleStory = () => {
  return (
    <div className="relative w-[674px] h-[304px] font-family-inter bg-white p-10 rounded-[30px]">
      <div className="w-[60%] flex flex-col justify-between h-full">
        <p>
          Working with this team has been a{" "}
          <span className="text-primary-text-blue font-bold">
            game-changer for our business.
          </span>{" "}
          Their expertise, strategic guidance, and personalized approach helped
          us streamline operations and expand into new markets seamlessly. Their{" "}
          <span className="text-primary-text-blue font-bold">
            commitment to our success
          </span>{" "}
          was evident at every step.
        </p>
        <p>
          -John Doe, CEO <strong>XYZ</strong> Enterprises
        </p>
      </div>
      <img
        className="absolute right-[-28px] bottom-0"
        src={Images.Person3.src}
        alt={Images.Person3.alt}
      />
      <img
        className="absolute right-[-22px] top-[-52px]"
        src={Images.ImageHighlighter.src}
        alt={Images.ImageHighlighter.alt}
      />
      <img
        className="absolute -z-10 left-[-98px] top-[-94px]"
        src={Images.PersonEffect.src}
        alt={Images.PersonEffect.alt}
      />
    </div>
  );
};

export default ExampleStory;
