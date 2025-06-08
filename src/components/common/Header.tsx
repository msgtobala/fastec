import { Icons } from "../../lib/utils/Icons";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-30 py-8 text-header-bg bg-red-400  shadow-[5px_14px_45px_0_rgba(0,0,0,0.02)] rounded-3xl">
      <div className="flex items-center space-x-2">
        <img src={Icons.Logo.src} alt={Icons.Logo.alt} />
        <img src={Icons.Fastec.src} alt={Icons.Fastec.alt} />
      </div>
      <nav className="flex items-center space-x-8 font-family-inter font-light text-[14px]">
        <a className="text-black font-light">Home</a>
        <a>About Us</a>
        <a>Services</a>
        <a>Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;
