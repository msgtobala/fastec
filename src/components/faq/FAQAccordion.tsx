import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

function FAQAccordion() {
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(1);

  const faqs = [
    {
      question: "Smart Suggestions",
      answer:
        "Our Smart Suggestions feature uses AI to provide personalized recommendations based on your preferences and past interactions.",
    },
    {
      question: "Market Challenges",
      answer:
        "Startups in Qatar face hurdles like regulations, competition, funding, & hiring, making local insight key.",
    },
    {
      question: "Operational Inefficiencies",
      answer:
        "Our Smart Suggestions feature uses AI to provide personalized recommendations based on your preferences and past interactions.",
    },
    {
      question: "High Consultancy Rates",
      answer:
        "Our Smart Suggestions feature uses AI to provide personalized recommendations based on your preferences and past interactions.",
    },
    {
      question: "Personalized Consultancy",
      answer:
        "Our Smart Suggestions feature uses AI to provide personalized recommendations based on your preferences and past interactions.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItemIndex((prevOpenIndex) =>
      prevOpenIndex === index ? null : index
    );
  };

  return (
    <div className="w-full mx-auto mt-10 text-white">
      <div>
        {faqs.map((faq, index) => {
          const isOpen = openItemIndex === index;
          return (
            <div
              key={index}
              className={`accordion-item ${
                isOpen ? "bg-gradient-accordion-overlay" : ""
              }`}
            >
              <button
                className="flex w-full items-center justify-between px-6 py-8 text-left cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                <span
                  className={`${
                    isOpen ? "font-extrabold" : "font-light"
                  } text-2xl uppercase`}
                >
                  {faq.question}
                </span>
                <IoChevronDown
                  className={`${
                    isOpen ? "rotate-180" : ""
                  } h-5 w-5 transition-transform duration-300 ease-in-out`}
                />
              </button>

              <div
                className={`overflow-hidden duration-500 ease-out ${
                  isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
                style={{
                  transitionProperty: "max-height, opacity",
                  willChange: "max-height, opacity",
                }}
              >
                <div className="px-6 pb-8 pt-10 font-family-inter text-base w-[80%]">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQAccordion;
