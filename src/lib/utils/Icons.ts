import Arrow from "../../assets/icons/arrow.svg";
import Star from "../../assets/icons/star-1.svg";
import Grow from "../../assets/icons/grow.svg";
import Logo1 from "../../assets/icons/fastec-logo-1.svg";
import Logo2 from "../../assets/icons/fastec-logo-2.svg";

interface IconData {
  src: string;
  alt: string;
}

export const Icons = {
  Arrow: {
    src: Arrow,
    alt: "Arrow navigation icon",
  },
  Star: {
    src: Star,
    alt: "Star rating icon",
  },
  Grow: {
    src: Grow,
    alt: "Grow icon",
  },
  Logo1: {
    src: Logo1,
    alt: "Fastec logo 1",
  },
  Logo2: {
    src: Logo2,
    alt: "Fastec logo 2",
  },
} as const satisfies Record<string, IconData>;
