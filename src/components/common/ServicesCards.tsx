import Card from "../hero/Card";
import { Images } from "../../lib/utils/Images";

const cardData = [
  { number: "01", title: "Tailored solutions" },
  { number: "02", title: "Expertise in corporation" },
  null,
  { number: "03", title: "Public Relations Management" },
  { number: "04", title: "Maximised Efficiency" },
  { number: "05", title: "Tailored solutions" },
  null,
  { number: "06", title: "Tailored solutions" },
  { number: "07", title: "Personalised consultancy" },
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
          const isHighlighted = [1, 2, 4].includes(index);
          console.log(isHighlighted, index);

          return (
            <Card
              key={index}
              cardtext={card?.title}
              cardSize="medium"
              cardImage={false}
              cardNumber={card?.number}
              highlighted={isHighlighted}
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
