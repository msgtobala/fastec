import { ArrowLeftIcon, ArrowRightIcon, ChevronDownIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import { Textarea } from "../../components/ui/textarea";
import { Header } from "../../components/Header";

export const Desktop = (): JSX.Element => {
  // Service cards data
  const serviceCards = [
    { id: "01", title: "Tailored solutions", isHighlighted: false },
    { id: "02", title: "Expertise in corporation", isHighlighted: true },
    { id: "03", title: "Public Relations Management", isHighlighted: true },
    { id: "04", title: "Maximised Efficiency", isHighlighted: false },
    { id: "05", title: "Tailored solutions", isHighlighted: false },
    { id: "06", title: "Tailored solutions", isHighlighted: false },
    { id: "07", title: "Personalised consultancy", isHighlighted: false },
  ];

  // Business challenges data
  const businessChallenges = [
    {
      title: "MARKET CHALLENGES",
      content:
        "Startups in Qatar face hurdles like regulations, competition, funding, & hiring, making local insight key.",
    },
    { title: "SMART SUGGESTIONS", content: "" },
    { title: "OPERATIONAL INEFFICIENCIES", content: "" },
    { title: "HIGH CONSULTANCY RATES", content: "" },
    { title: "PERSONALISED CONSULTANCY", content: "" },
  ];

  return (
    <div className="bg-[#f7f7f7] flex flex-row justify-center w-full">
      <div className="bg-[#f7f7f7] overflow-hidden w-full relative max-w-[2560px]">
        <Header />

        {/* Hero Section */}
        <section className="pt-[120px] px-8 lg:px-[120px] flex flex-col">
          <div className="w-[295px] h-[41px] relative">
            <div className="absolute w-[292px] h-[41px] top-0 left-px bg-[#5cc4e333] rounded-[60px]" />
            <div className="absolute h-[17px] top-3 left-[53px] [font-family:'Inter',Helvetica] font-medium text-[#000000] text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
              Top notch business consultancy
            </div>
            <div className="absolute w-[41px] h-[41px] top-0 left-0 rounded-[20.5px] [background:linear-gradient(246deg,rgba(0,200,255,1)_0%,rgba(0,100,196,1)_100%)]" />
            <img
              className="absolute w-4 h-4 top-[13px] left-[13px]"
              alt="Group"
              src="/group.svg"
            />
          </div>

          <div className="flex flex-col lg:flex-row mt-[73px] gap-8">
            <div className="flex-1 max-w-xl">
              <div className="[font-family:'Inter',Helvetica] font-normal text-black text-lg tracking-[-0.36px] leading-[23.4px]">
                <span className="text-[#1a202c] tracking-[-0.06px]">
                  Guiding your business journey with{" "}
                </span>
                <span className="font-bold text-[#0173cd] tracking-[-0.06px]">
                  unwavering expertise, cutting-edge innovation
                </span>
                <span className="text-[#1a202c] tracking-[-0.06px]">
                  , and a dedicated commitment to driving your success every
                  step of the way.
                </span>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="absolute w-[340px] h-[329px] top-[-636px] left-[264px]">
                <img
                  className="top-0 left-0 absolute w-[259px] h-[259px]"
                  alt="Layer"
                  src="/layer-1.svg"
                />
                <Card className="absolute w-52 h-[243px] top-[86px] left-[91px] bg-[#131313] rounded-[30px] text-white">
                  <CardContent className="p-6">
                    <div className="h-[68px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[52px] tracking-[0] leading-[67.6px] whitespace-nowrap">
                      <span className="font-semibold">99</span>
                      <span className="font-light text-2xl leading-[31.2px]">
                        %
                      </span>
                    </div>
                    <div className="w-[119px] h-7 mt-5 opacity-40 [font-family:'Inter',Helvetica] font-normal text-xs tracking-[-0.24px] leading-[14.4px]">
                      Business up-liftment and success rate
                    </div>
                    <div className="flex gap-4 mt-[33px]">
                      {[43, 31, 47, 37].map((height, index) => (
                        <div
                          key={index}
                          className="w-[25px] h-[60px] rounded-[20px] relative"
                        >
                          <div className="absolute w-[25px] h-[60px] top-0 left-0 bg-[#717171] rounded-[20px] opacity-20" />
                          <div
                            className="absolute w-[25px] bottom-0 left-0 rounded-[40px] [background:linear-gradient(0deg,rgba(1,177,242,1)_0%,rgba(1,177,242,1)_100%)]"
                            style={{ height: `${height}px` }}
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <div className="absolute w-28 h-28 top-[35px] left-[228px] rounded-[70px] bg-[100%_100%]" />
              </div>

              <div className="absolute w-[612px] h-[621px] top-[-621px] left-[486px]">
                <img
                  className="top-[359px] left-[353px] absolute w-[259px] h-[259px]"
                  alt="Layer"
                  src="/layer-1.svg"
                />
                <img
                  className="absolute w-[389px] h-[479px] top-[38px] left-[122px]"
                  alt="Mask group"
                  src="/mask-group-1.svg"
                />
                <Card className="absolute w-[221px] h-[225px] top-[396px] left-0 bg-white rounded-[30px] shadow-[5px_14px_45px_#00000008]">
                  <CardContent className="p-6 relative h-full">
                    <div className="opacity-30 text-[#000000] absolute h-[19px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
                      01
                    </div>
                    <div className="absolute w-[154px] h-[58px] top-[138px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#000000] text-2xl tracking-[0] leading-[28.8px]">
                      Smart Suggestions
                    </div>
                    <div className="absolute w-[60px] h-[60px] top-6 left-[133px] rounded-[30px]">
                      <img
                        className="absolute w-6 h-6 top-[18px] left-[18px]"
                        alt="Group"
                        src="/group-icon.svg"
                      />
                    </div>
                  </CardContent>
                </Card>
                <img
                  className="absolute w-[53px] h-[45px] top-0 left-[491px]"
                  alt="Group"
                  src="/group-quote.svg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mt-[100px] relative">
          <img
            className="h-[726px] w-full object-cover"
            alt="Adobestock"
            src="/adobestock-background.jpg"
          />
          <img
            className="absolute w-full h-[266px] bottom-0 left-0"
            alt="Group"
            src="/group-gradient.svg"
          />

          <div className="absolute w-[calc(100%-104px)] max-w-[1336px] h-[142px] top-[-71px] left-1/2 -translate-x-1/2 rounded-[70px] border border-solid border-white shadow-[5px_14px_45px_#0000000f] backdrop-blur-[52px] bg-white/80">
            <div className="flex items-center justify-between px-8 lg:px-[67px] h-full">
              <div className="flex gap-6 lg:gap-[78px]">
                {[
                  "Business Domain",
                  "Region in Qatar",
                  "Time slot for enquiry",
                ].map((label, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="[font-family:'Inter',Helvetica] font-normal text-black text-base lg:text-lg tracking-[-0.36px] leading-[21.6px]">
                      {label}
                    </div>
                    <ChevronDownIcon className="w-6 h-6" />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-6">
                <div className="[font-family:'Inter',Helvetica] font-medium text-[#016eca] text-base tracking-[0] leading-[19.2px]">
                  Get Started
                </div>
                <Button className="w-[78px] h-[78px] rounded-[39px] bg-white border border-[#e2e2e2]">
                  <ArrowRightIcon className="w-6 h-6 text-[#016eca]" />
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute w-full max-w-[405px] h-[115px] top-[491px] left-8 lg:left-[120px] [font-family:'Inter',Helvetica] font-normal text-white text-lg tracking-[-0.36px] leading-[23.4px]">
            <span className="tracking-[-0.06px]">
              We offer tailored business incorporation services for a{" "}
            </span>
            <span className="font-bold tracking-[-0.06px]">
              smooth setup, strategic PR to boost brand presence, and efficient
              processes
            </span>
            <span className="tracking-[-0.06px]">
              {" "}
              to streamline operations. Our personalized consultancy ensures
              expert guidance at every stage.
            </span>
          </div>

          <div className="absolute grid grid-cols-2 lg:grid-cols-3 gap-4 top-[290px] right-8 lg:right-[120px]">
            {serviceCards.map((card, index) => (
              <Card
                key={index}
                className={`w-[187px] h-[193px] rounded-[30px] shadow-[5px_14px_45px_#00000008] ${
                  card.isHighlighted
                    ? "bg-[#ffffffb2] backdrop-blur-[52px]"
                    : "bg-white"
                }`}
              >
                <CardContent className="p-5">
                  <div
                    className={`h-[19px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-base tracking-[0] leading-[19.2px] whitespace-nowrap ${
                      card.isHighlighted
                        ? "text-white"
                        : "opacity-30 text-[#000000]"
                    }`}
                  >
                    {card.id}
                  </div>
                  <div className="mt-[96px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#000000] text-base tracking-[0] leading-[19.2px]">
                    {card.title}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Business Challenges Section */}
        <section className="mt-[100px] relative">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-[721px] h-[617px] relative">
              <img
                className="absolute w-full lg:w-[719px] h-[505px] top-0 left-0 object-cover"
                alt="Flag"
                src="/flag.jpg"
              />
              {/* <img
                className="absolute w-[150px] h-[92px] top-[469px] left-[65px]"
                alt="Flag"
                src="/flag-small.jpg"
              />
              <img
                className="absolute w-[175px] h-24 top-[522px] left-[75px]"
                alt="Flag"
                src="/flag-tiny.jpg"
              /> */}
            </div>

            <div className="w-full lg:w-[592px] ml-0 lg:ml-[15px] mt-8 lg:mt-[100px] px-8 lg:px-0">
              <div className="[font-family:'Inter',Helvetica] font-normal text-black text-lg tracking-[-0.36px] leading-[23.4px]">
                <span className="text-[#1a202c] tracking-[-0.06px]">
                  Qatar is an ideal place to start a business, offering a{" "}
                </span>
                <span className="font-bold text-[#0173cd] tracking-[-0.06px]">
                  strong economy, investor-friendly policies, and top-tier
                  infrastructure
                </span>
                <span className="text-[#1a202c] tracking-[-0.06px]">
                  . Its strategic location, tax benefits, and government support
                  create a dynamic environment for growth. Whether you&#39;re a
                  startup or an established firm,{" "}
                </span>
                <span className="font-bold text-[#0173cd] tracking-[-0.06px]">
                  Qatar&#39;s innovation-driven market offers great
                  opportunities to launch and expand
                </span>
                <span className="text-[#0173cd] tracking-[-0.06px]">.</span>
              </div>
            </div>
          </div>

          <div className="w-[273px] h-[311px] absolute top-[187px] left-[752px]">
            <div className="absolute w-[210px] h-[246px] top-[65px] left-[63px]">
              <Card className="relative w-[205px] h-[246px] -left-px bg-[#131313] rounded-[30px] text-white">
                <CardContent className="p-0">
                  <div className="h-[68px] mt-[22px] ml-[53px] [font-family:'Plus_Jakarta_Sans',Helvetica] text-center leading-[67.6px] whitespace-nowrap">
                    <span className="tracking-[-0.81px] font-semibold text-[52px]">
                      4.2
                    </span>
                    <span className="font-light text-2xl tracking-[0] leading-[31.2px]">
                      %
                    </span>
                  </div>
                  <div className="h-3.5 mt-[18px] text-center [font-family:'Inter',Helvetica] font-normal text-xs tracking-[-0.24px] leading-[14.4px] whitespace-nowrap">
                    2024
                  </div>
                  <div className="relative mt-[20px] h-[121px]">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-px h-[70px] top-[105px] left-[39px]"
                          style={{ left: `${39 + i * 32}px` }}
                        >
                          <img
                            className="w-px h-[70px] object-cover"
                            alt="Line"
                            src="/line-12.svg"
                          />
                        </div>
                      ))}
                    <img
                      className="absolute w-[204px] h-[121px] top-0 left-px"
                      alt="Vector"
                      src="/vector-3.svg"
                    />
                    {/* <img
                      className="absolute w-[205px] h-[60px] top-[-2px] left-0"
                      alt="Vector"
                      src="/vector-4.svg"
                    /> */}
                    <div className="absolute w-[15px] h-[15px] top-[6px] left-[95px] rounded-[7.5px] [background:linear-gradient(244deg,rgba(0,200,255,1)_0%,rgba(0,100,196,1)_100%)]" />
                  </div>
                  <div className="h-3.5 mt-[2px] ml-[59px] [font-family:'Inter',Helvetica] font-normal text-xs text-center tracking-[-0.24px] leading-[14.4px] whitespace-nowrap">
                    GDP growth rate
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="absolute w-28 h-28 top-0 left-0 rounded-[70px] bg-gradient-to-br from-[#00c8ff] to-[#0064c4]">
              <img
                className="absolute w-[62px] h-[62px] top-[25px] left-[25px]"
                alt="Trending up"
                src="/trending-up.svg"
              />
            </div>
          </div>

          <div className="w-full h-auto lg:h-[760px] mt-[100px] bg-[#131313] rounded-[50px] text-white">
            <div className="flex flex-col lg:flex-row p-8 lg:p-[120px] gap-8">
              <div className="w-full lg:w-[423px]">
                <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-4xl lg:text-[52px] tracking-[0] leading-[1.3] lg:leading-[67.6px]">
                  <span className="font-medium">
                    Are you Facing&nbsp;&nbsp;these{" "}
                  </span>
                  <span className="font-extrabold">problems</span>
                </h2>
                <p className="mt-8 lg:mt-[80px] w-full lg:w-[389px] [font-family:'Inter',Helvetica] font-normal text-lg tracking-[-0.36px] leading-[23.4px]">
                  <span className="tracking-[-0.06px]">
                    With the right support, business challenges become easier.
                    We offer{" "}
                  </span>
                  <span className="font-bold tracking-[-0.06px]">
                    strategic, tailored solutions to boost growth, streamline
                    operations, and stay competitive,{" "}
                  </span>
                  <span className="tracking-[-0.06px]">
                    delivering expert, cost-effective guidance for success.
                  </span>
                </p>
              </div>

              <div className="w-full lg:w-[592px] lg:ml-[123px]">
                <Accordion type="single" collapsible className="w-full">
                  {businessChallenges.map((challenge, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-0"
                    >
                      <Separator className="mb-[40px]" />
                      <AccordionTrigger className="py-2 px-0 hover:no-underline">
                        <div className="flex justify-between w-full">
                          <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-white text-xl lg:text-2xl tracking-[0] leading-[28.8px]">
                            {challenge.title}
                          </h3>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-[40px] pb-[40px]">
                        <p className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[-0.32px] leading-[20.8px]">
                          {challenge.content}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="mt-[100px] relative">
          <img
            className="h-[830px] w-full object-cover"
            alt="Adobestock"
            src="/adobestock-contact.jpg"
          />
          <img
            className="absolute w-full h-[266px] bottom-0 left-0"
            alt="Group"
            src="/group-gradient.svg"
          />

          <div className="absolute top-[118px] left-8 lg:left-[120px]">
            <div className="w-[295px] h-[41px] relative">
              <div className="absolute w-[292px] h-[41px] top-0 left-px bg-[#ffffff33] rounded-[60px] backdrop-blur-[17px]" />
              <div className="absolute h-[17px] top-3 left-[53px] [font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
                Top notch business consultancy
              </div>
              <div className="absolute w-[41px] h-[41px] top-0 left-0 rounded-[20.5px] [background:linear-gradient(246deg,rgba(0,200,255,1)_0%,rgba(0,100,196,1)_100%)]" />
              <img
                className="absolute w-4 h-4 top-[13px] left-[13px]"
                alt="Group"
                src="/group-white.svg"
              />
            </div>

            <h2 className="mt-[79px] w-full lg:w-[574px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white text-4xl lg:text-[52px] tracking-[0] leading-[1.3] lg:leading-[67.6px]">
              <span className="font-medium">Helping you gain a </span>
              <span className="font-extrabold">competitive edge</span>
              <span className="font-medium"> for your business</span>
            </h2>

            <p className="mt-[51px] w-full lg:w-[491px] [font-family:'Inter',Helvetica] font-normal text-white text-lg tracking-[-0.36px] leading-[23.4px]">
              <span className="tracking-[-0.06px]">
                Leading your business journey with{" "}
              </span>
              <span className="font-bold tracking-[-0.06px]">
                expert guidance, innovative solutions
              </span>
              <span className="tracking-[-0.06px]">, and a </span>
              <span className="font-bold tracking-[-0.06px]">
                steadfast commitment
              </span>
              <span className="tracking-[-0.06px]">
                {" "}
                to your success at every stage.
              </span>
            </p>
          </div>

          <Card className="absolute w-full max-w-[491px] h-[563px] top-[120px] right-8 lg:right-[120px] rounded-[30px] backdrop-blur-[42px] [background:linear-gradient(180deg,rgba(255,255,255,0.36)_0%,rgba(255,255,255,0)_100%)] border-0">
            <CardContent className="p-8">
              <h3 className="w-full lg:w-[304px] h-[29px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[28.8px]">
                Send Us a Message
              </h3>

              <div className="mt-[41px] grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="[-webkit-text-stroke:1px_#707070] [font-family:'Inter',Helvetica] font-medium text-white text-xs tracking-[0] leading-[14.4px]">
                    First Name
                  </label>
                  <Input className="h-[55px] bg-[#ffffff4c] rounded-xl border-0" />
                </div>
                <div className="space-y-2">
                  <label className="[-webkit-text-stroke:1px_#707070] [font-family:'Inter',Helvetica] font-medium text-white text-xs tracking-[0] leading-[14.4px]">
                    Last Name
                  </label>
                  <Input className="h-[55px] bg-[#ffffff4c] rounded-xl border-0" />
                </div>
                <div className="space-y-2">
                  <label className="[-webkit-text-stroke:1px_#707070] [font-family:'Inter',Helvetica] font-medium text-white text-xs tracking-[0] leading-[14.4px]">
                    Email Address
                  </label>
                  <Input className="h-[55px] bg-[#ffffff4c] rounded-xl border-0" />
                </div>
                <div className="space-y-2">
                  <label className="[-webkit-text-stroke:1px_#707070] [font-family:'Inter',Helvetica] font-medium text-white text-xs tracking-[0] leading-[14.4px]">
                    Phone No.
                  </label>
                  <Input className="h-[55px] bg-[#ffffff4c] rounded-xl border-0" />
                </div>
                <div className="space-y-2 col-span-1 lg:col-span-2">
                  <label className="[-webkit-text-stroke:1px_#707070] [font-family:'Inter',Helvetica] font-medium text-white text-xs tracking-[0] leading-[14.4px]">
                    Business Requirement
                  </label>
                  <Textarea className="h-[118px] bg-[#ffffff4c] rounded-xl border-0 resize-none" />
                
                </div>
              </div>

              <Button className="mt-[32px] ml-auto w-[202px] h-[42px] rounded-3xl [background:linear-gradient(246deg,rgba(0,200,255,1)_0%,rgba(0,100,196,1)_100%)] flex items-center justify-between px-6">
                <span className="[font-family:'Inter',Helvetica] font-medium text-white text-xs tracking-[0] leading-[14.4px]">
                  Request Call Back
                </span>
                <div className="w-[30px] h-[30px] bg-[#132e44] rounded-[15px] flex items-center justify-center">
                  <ArrowRightIcon className="w-4 h-4 text-white" />
                </div>
              </Button>
            </CardContent>
          </Card>

          <div className="absolute w-[81px] h-[66px] top-[594px] left-[674px] rotate-[53.42deg]">
            <img
              className="absolute w-[101px] h-[104px] top-[-19px] -left-2.5 rotate-[-53.42deg]"
              alt="Scribble final"
              src="/scribble-final.svg"
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-[80px] px-8 lg:px-[120px] pb-[80px]">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
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
            <div className="flex gap-8">
              <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-black text-base text-right tracking-[-0.32px] leading-6">
                Copy Rights
              </div>
              <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-black text-base text-right tracking-[-0.32px] leading-6">
                Privacy &amp; Policy
              </div>
              <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-black text-base text-right tracking-[-0.32px] leading-6">
                Terms &amp; Condition
              </div>
            </div>
          </div>
        </footer>

        {/* WhatsApp Button */}
        <div className="fixed w-[89px] h-[90px] bottom-8 left-0 bg-[#25d366] flex items-center justify-center">
          <img className="w-10 h-10" alt="WhatsApp" src="/whatsapp-icon.svg" />
        </div>
      </div>
    </div>
  );
};