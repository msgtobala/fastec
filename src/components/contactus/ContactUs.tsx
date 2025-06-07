import InputField from "./InputField";
import { BiRightArrowAlt } from "react-icons/bi";
import { Images } from "../../lib/utils/Images";
import { Icons } from "../../lib/utils/Icons";

const formFields = [
  "First Name",
  "Last Name",
  "Email Address",
  "Phone No.",
  "Business Requirement",
];

const formFieldTypes = ["text", "text", "email", "tel", "textarea"];

const ContactUs = () => {
  return (
    <div className="relative min-h-screen w-full">
      <img
        src={Images.ContactUsBackground.src}
        alt={Images.ContactUsBackground.alt}
        className="w-full h-full"
      />
      <div className="absolute left-65 top-70">
        <div>
          <h1 className="text-white font-family-jakarta font-[52px] text-5xl leading-tight mb-6">
            HELPING YOU GAIN A<br />
            <span className="font-family-jakarta font-bold">
              COMPETITIVE EDGE
            </span>
            <br />
            FOR YOUR BUSINESS
          </h1>
        </div>
      </div>
      <div className=" absolute left-90 bottom-100 px-1 mt-6 text-white font-family-inter max-w-lg ">
        <p className="text-lg">
          Leading your business journey with{" "}
          <span className="font-bold">expert guidance</span>,{" "}
          <span className="font-bold">innovative solutions</span>, and a{" "}
          <span className="font-bold">steadfast commitment</span> to your
          success at every stage.
        </p>
      </div>
      <div className=" absolute bottom-70 left-200 ">
        <img src={Icons.Arrow.src} alt={Icons.Arrow.alt} />
      </div>
      <div className=" absolute bottom-0 left-0 ">
        <img
          src={Images.BackgroundEffect.src}
          alt={Images.BackgroundEffect.alt}
        />
      </div>
      <div className="w-[491px] h-[563px] p-8 rounded-4xl bg-contact-us-gradient backdrop-blur-md font-family-jakarta text-white absolute top-40 right-35 ">
        <form>
          <h2 className="font-family-jakarta font-bold text-2xl mb-8">
            Send Us a Message
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {formFields.slice(0, 4).map((field, index) => (
              <InputField
                key={index}
                label={field}
                type={formFieldTypes[index]}
              />
            ))}
          </div>
          <div className="w-full mb-4">
            <InputField label={formFields[4]} type={formFieldTypes[4]} />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="mt-4 w-full sm:w-auto px-6 py-3 bg-gradient-secondary-to-primary text-white font-semibold rounded-full flex items-center gap-3"
            >
              Request Call Back
              <div className="w-8 h-8 bg-[#132E44] bg-opacity-20 rounded-full flex items-center justify-center">
                <BiRightArrowAlt className="w-5 h-5" />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
