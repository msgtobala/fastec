import { Icons } from "../../lib/utils/Icons";

interface CardProps {
  cardSize: "medium" | "large";
  cardtext?: string;
  cardImage?: boolean;
  cardNumber?: string;
  highlighted?: boolean;
}

const Card = ({
  cardSize,
  cardtext,
  cardImage,
  cardNumber,
  highlighted,
}: CardProps) => {
  return (
    <div
      className={`${
        highlighted ? "bg-white/70 backdrop-blur-[104px] " : "bg-white"
      }
        ${
          cardSize === "large" ? "w-[217px] h-[225px]" : "w-[187px] h-[193px]"
        } rounded-3xl p-4 flex flex-col justify-between shadow-[5px_14px_45px_#00000008]`}
    >
      <div className="flex justify-between items-start">
        <span className="text-sm text-gray-400 font-semibold">
          {cardNumber}
        </span>
        {cardImage ? (
          <div className="w-[60px] h-[60px] rounded-full bg-gradient-secondary-to-primary flex items-center justify-center">
            <img
              src={Icons.Star.src}
              alt={Icons.Star.alt}
              className="w-6 h-6"
            />
          </div>
        ) : null}
      </div>
      <div className="rounded-[20px] w-fit p-1">
        <h2 className="text-xl font-semibold">
          <span>{cardtext}</span>
        </h2>
      </div>
    </div>
  );
};

export default Card;
