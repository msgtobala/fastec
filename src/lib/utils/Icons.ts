import Arrow from "../../assets/icons/arrow.svg";
import Star from "../../assets/icons/star-1.svg";
import Grow from "../../assets/icons/grow.svg";

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
} as const satisfies Record<string, IconData>;
