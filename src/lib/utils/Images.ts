import BackgroundEffect from "../../assets/images/background-effect.svg";
import ContactUsBackground from "../../assets/images/contact-us-background.svg";
import SuccessRate from "../../assets/images/success-rate.svg";
import Person1 from "../../assets/images/person-1.svg";
import PersonEffect from "../../assets/images/person-effect.svg";
import ImageHighlighter from "../../assets/images/image-highlighter.svg";
import Flag from "../../assets/images/flag.png";
import Gdp from "../../assets/images/gdp.svg";
import TallBuilding from "../../assets/images/tall-building.svg";
import HandShake from "../../assets/images/hand-shake.svg";
import ServicesBackground from "../../assets/images/services-background.svg";
import Person3 from "../../assets/images/person-3.svg";

interface ImageData {
  src: string;
  alt: string;
}

export const Images = {
  BackgroundEffect: {
    src: BackgroundEffect,
    alt: "Background effect image",
  },
  ContactUsBackground: {
    src: ContactUsBackground,
    alt: "Contact us background image",
  },
  SuccessRate: {
    src: SuccessRate,
    alt: "Success rate image",
  },
  Person1: {
    src: Person1,
    alt: "Person 1 image",
  },
  PersonEffect: {
    src: PersonEffect,
    alt: "Person effect image",
  },
  ImageHighlighter: {
    src: ImageHighlighter,
    alt: "Image highlighter",
  },
  Flag: {
    src: Flag,
    alt: "Flag image",
  },
  Gdp: {
    src: Gdp,
    alt: "GDP image",
  },
  TallBuilding: {
    src: TallBuilding,
    alt: "Tall building image",
  },
  HandShake: {
    src: HandShake,
    alt: "Handshake image",
  },
  ServicesBackground: {
    src: ServicesBackground,
    alt: "Services background image",
  },
  Person3: {
    src: Person3,
    alt: "Person 3 image",
  },
} as const satisfies Record<string, ImageData>;
