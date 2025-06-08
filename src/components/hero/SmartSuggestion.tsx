import { Images } from "../../lib/utils/Images";
import Card from "./Card";

const SmartSuggestion = () => {
  return (
    <div className=" relative">
      <div className="smart-suggestion-image-highlighter absolute -top-8 -right-10">
        <img
          src={Images.ImageHighLighter.src}
          alt={Images.ImageHighLighter.alt}
          className="w-full h-full"
        />
      </div>
      <div className="smart-suggestion-person">
        <img src={Images.Person2.src} alt={Images.Person2.alt} />
        <div className="absolute -bottom-22 -left-28">
          <Card
            cardSize="large"
            cardtext="Smart Suggestions"
            cardImage={true}
            cardNumber="01"
            highlighted={false}
          />
        </div>
      </div>
      <div className="smart-suggestion-effect absolute -bottom-25 -right-26 ">
        <img
          src={Images.PersonEffect.src}
          alt={Images.PersonEffect.alt}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default SmartSuggestion;
