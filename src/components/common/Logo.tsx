import { Icons } from "../../lib/utils/Icons";

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <img src={Icons.Logo1.src} alt={Icons.Logo1.alt} />
      <img src={Icons.Logo2.src} alt={Icons.Logo2.alt} />
    </div>
  );
};

export default Logo;
