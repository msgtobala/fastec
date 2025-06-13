import { BiRightArrowAlt } from "react-icons/bi";

import { Images } from "../../lib/utils/Images";
import { Icons } from "../../lib/utils/Icons";
import DynamicFormBuilder from "../common/DynamicFormBuilder";
import TopNotch from "../common/TopNotch";

type FormField = {
  type: "text" | "email" | "tel" | "textarea";
  label: string;
  required: boolean;
};

const formFields: FormField[] = [
  { type: "text", label: "First Name", required: true },
  { type: "text", label: "Last Name", required: true },
  { type: "email", label: "Email", required: true },
  { type: "tel", label: "Phone Number", required: true },
  { type: "textarea", label: "Business Requirements", required: true },
];

const ContactUs = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center  lg:py-10 md:py-10 md:justify-center xl:px-5  max-[860px]:flex max-[860px]:flex-col py-5">
      <img
        src={Images.ContactUsBackground.src}
        alt={Images.ContactUsBackground.alt}
        className="w-full h-full absolute top-0 left-0 -z-10 object-cover"
      />
      <div className="absolute left-0 bottom-0 w-full pointer-events-none">
        <img
          src={Images.BackgroundEffect.src}
          alt={Images.BackgroundEffect.alt}
          className="w-full"
        />
      </div>
      <div className="flex-1 flex flex-col items-center justify-evenly w-full">
        <div>
          <TopNotch isTransparent={true} />
        </div>
        <div>
          <h1 className="text-white font-family-jakarta font-[52px] text-5xl leading-tight mt-20 md:mt-10 md:text-[24px] lg:text-[30px] max-sm:text-[14px] max-sm:mt-10">
            HELPING YOU GAIN A<br />
            <span className="font-family-jakarta font-bold md:font-[20px]">
              COMPETITIVE EDGE
            </span>
            <br />
            FOR YOUR BUSINESS
          </h1>
        </div>

        <p className=" text-white font-family-inter font-regular px-20 mt-10 md:px-0 md:text-[12px] lg:text-[16px] xl:text-[11px] xl:px-8 max-sm:text-[14px] max-sm:px-9">
          Leading your business journey with{" "}
          <span className="font-bold">expert guidance</span>,<br />
          <span className="font-bold">innovative solutions</span>, and a{" "}
          <span className="font-bold">steadfast commitment</span> to your
          <br />
          <span className="font-family-inter font-thin leading-[23px]">
            success at every stage.
          </span>
        </p>
        <div className="flex justify-end md:justify-center lg:justify-center xl:justify-end max-sm:h-[60px]">
          <img src={Icons.Arrow.src} alt={Icons.Arrow.alt} />
        </div>
      </div>
      <div className="flex-1">
        <form className="w-[491px] h-[563px] p-8 rounded-4xl bg-contact-us-gradient backdrop-blur-md font-family-jakarta text-white md:h-[548px]  md:px-6 md:w-[400px] max-sm:w-[300px] max-sm:h-[500px]">
          <h2 className="font-family-jakarta font-bold text-2xl mb-8">
            Send Us a Message
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {formFields.map((field) => (
              <div
                key={field.label}
                className={`w-full ${
                  field.type === "textarea" ? "col-span-2" : ""
                }`}
              >
                <DynamicFormBuilder
                  key={field.label}
                  label={field.label}
                  type={field.type}
                  required={field.required}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="mt-4 w-full sm:w-auto px-6 py-3 bg-gradient-secondary-to-primary text-white font-semibold rounded-full flex items-center gap-3 max-sm:mt-0 max-sm:px-5 max-sm:py-2"
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
