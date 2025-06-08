import Card from "../hero/Card";
import { Images } from "../../lib/utils/Images";

const cardData = [
  { number: "01", title: "Tailored solutions", isHighlighted: false },
  { number: "02", title: "Expertise in corporation", isHighlighted: true },
  null,
  { number: "03", title: "Public Relations Management", isHighlighted: true },
  { number: "04", title: "Maximised Efficiency", isHighlighted: false },
  { number: "05", title: "Tailored solutions", isHighlighted: true },
  null,
  { number: "06", title: "Tailored solutions", isHighlighted: false },
  { number: "07", title: "Personalised consultancy", isHighlighted: false },
];

const ServicesCards = () => {
  return (
    <div className="relative min-h-screen w-full">
      <img
        src={Images.ServiceBackground.src}
        alt={Images.ServiceBackground.alt}
        className="w-full h-full"
      />
      <div className="absolute left-65 top-70">
        <div>
          <h1 className="text-white font-family-jakarta font-[52px] text-5xl leading-tight mb-6">
            WHAT MAKES US
            <br />
            <span className="font-family-jakarta font-[52px]">EXCEPTIONAL</span>
          </h1>
        </div>
      </div>
      <div className="absolute left-65 bottom-60   text-white font-family-inter max-w-lg">
        <p>
          We offer tailored business incorporation services for a{" "}
          <strong>
            smooth setup, strategic PR to boost brand presence, and efficient
            processes
          </strong>{" "}
          to streamline operations. Our personalized consultancy ensures expert
          guidance at every stage.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6 absolute right-20 top-72">
        {cardData.map((card, index) => {
          if (!card) {
            return <div key={`empty-${index}`} />;
          }

          return (
            <Card
              key={index}
              cardtext={card?.title}
              cardSize="medium"
              cardImage={false}
              cardNumber={card?.number}
              highlighted={card?.isHighlighted}
            />
          );
        })}
      </div>
      <div className=" absolute bottom-0 left-0 ">
        <img
          src={Images.BackgroundEffect.src}
          alt={Images.BackgroundEffect.alt}
        />
      </div>
    </div>
  );
};

export default ServicesCards;
