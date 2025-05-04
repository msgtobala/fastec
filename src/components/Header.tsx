import { Button } from "./ui/button";

interface NavItem {
  name: string;
  isActive: boolean;
}

export const Header = (): JSX.Element => {
  const navItems: NavItem[] = [
    { name: "Home", isActive: true },
    { name: "About Us", isActive: false },
    { name: "Services", isActive: false },
    { name: "Contact Us", isActive: false },
  ];

  return (
    <div className="fixed w-full top-0 left-0 z-50">
      <header className="h-[120px] bg-[#fffefd] rounded-[40px] overflow-hidden shadow-[5px_14px_45px_#00000005]">
        <div className="flex items-center justify-between h-full mx-auto px-8 lg:px-[120px] max-w-[2560px]">
          <div className="flex items-center">
            <img
              className="w-[41px] h-10"
              alt="Fastec logo"
              src="/fastec-logo.svg"
            />
            <img
              className="w-[136px] h-10"
              alt="Mask group"
              src="/mask-group.svg"
            />
          </div>

          <nav className="flex items-center gap-6 lg:gap-10">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                <div
                  className={`relative w-fit mt-[-1.00px] ${
                    item.isActive
                      ? "[background:linear-gradient(213deg,rgba(96,201,230,1)_0%,rgba(0,85,166,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-bold"
                      : "font-light text-[#000000]"
                  } [font-family:'Inter',Helvetica] text-sm tracking-[0] leading-[16.8px] whitespace-nowrap`}
                >
                  {item.name}
                </div>
                {item.isActive && (
                  <div className="absolute w-1 h-1 top-[25px] left-[17px] rounded-sm [background:linear-gradient(213deg,rgba(96,201,230,1)_0%,rgba(0,85,166,1)_100%)]" />
                )}
              </div>
            ))}
          </nav>

          <Button className="h-[42px] rounded-3xl [background:linear-gradient(246deg,rgba(0,200,255,1)_0%,rgba(0,100,196,1)_100%)]">
            <span className="[font-family:'Inter',Helvetica] font-medium text-white text-xs tracking-[0] leading-[14.4px] whitespace-nowrap">
              Request Call Back
            </span>
          </Button>
        </div>
      </header>
    </div>
  );
};