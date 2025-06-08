import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloatingButton = () => {
  return (
    <div className="fixed z-50 bg-primary-green w-[90px] h-[90px] left-0 bottom-[10%] flex justify-center items-center rounded-r-full shadow-lg">
      <FaWhatsapp className="text-white text-xl" size={40} />
    </div>
  );
};

export default WhatsAppFloatingButton;
