import BackgroundEffect from "../../assets/images/background-effect.svg";
import BusinessRate from "../../assets/images/business-rate.svg";
import ContactUsBackground from "../../assets/images/contact-us-background.svg";

interface ImageData {
  src: string;
  alt: string;
}

export const Images = {
  BackgroundEffect: {
    src: BackgroundEffect,
    alt: "Background effect image",
  },
  BusinessRate: {
    src: BusinessRate,
    alt: "Business rate image",
  },
  ContactUsBackground: {
    src: ContactUsBackground,
    alt: "Contact us background image",
  },
} as const satisfies Record<string, ImageData>;
