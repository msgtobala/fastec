import BackgroundEffect from "../../assets/images/background-effect.svg";
import ContactUsBackground from "../../assets/images/contact-us-background.svg";
import SuccessRate from "../../assets/images/success-rate.svg";
import Person1 from "../../assets/images/person-1.svg";
import PersonEffect from "../../assets/images/person-effect.svg";
import Person2 from "../../assets/images/person-2-large.svg";
import ImageHighLighter from "../../assets/images/image-highlighter.svg";
import ServiceBackground from "../../assets/images/services-background.svg";

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
  Person2: {
    src: Person2,
    alt: "Smart suggestion image",
  },
  ImageHighLighter: {
    src: ImageHighLighter,
    alt: "Image highlighter",
  },
  ServiceBackground: {
    src: ServiceBackground,
    alt: "Service background image",
  },
} as const satisfies Record<string, ImageData>;
