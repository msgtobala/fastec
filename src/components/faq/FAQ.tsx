import { Images } from "../../lib/utils/Images";
import FAQAccordion from "./FAQAccordion";

const FAQ = () => {
  return (
    <div className="w-full text-white relative grid-cols-2 grid p-10 px-14 bg-gradient-secondary-to-primary rounded-[50px]">
      <div className="flex flex-col justify-evenly items-start mb-20 w-[60%] mx-auto leading-[1.3]">
        <h1 className="uppercase font-medium text-[52px]">
          Are you Facing these <span className="font-extrabold">problems</span>{" "}
        </h1>
        <p className="font-family-inter">
          With the right support, business challenges become easier. We offer
          <span className="font-bold">
            {" "}
            strategic, tailored solutions to boost growth, streamline
            operations, and stay competitive,
          </span>{" "}
          delivering expert, cost-effective guidance for success.
        </p>
      </div>
      <FAQAccordion />
      <img
        src={Images.BackgroundEffect.src}
        alt={Images.BackgroundEffect.alt}
        className="absolute left-0 bottom-0 w-full pointer-events-none"
      />
    </div>
  );
};

export default FAQ;
