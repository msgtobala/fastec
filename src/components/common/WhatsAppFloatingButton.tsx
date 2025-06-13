import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloatingButton = () => {
  return (
    <div className="fixed z-50 left-0 bottom-[10%] rounded-r-full shadow-lg bg-primary-green sm:p-5 p-2 cursor-pointer">
      <FaWhatsapp className="text-white" size={40} />
    </div>
  );
};

export default WhatsAppFloatingButton;
