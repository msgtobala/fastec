import Flag from "./Flag";
import Gdp from "./Gdp";
import TallBuilding from "./TallBuilding";

const Oppurtunities = () => {
  return (
    <div className="flex flex-wrap items-start relative justify-between px-5 py-7 h-[800px] max-md:h-[2000px] overflow-hidden w-[90%] mx-auto gap-20">
      <div className="flex flex-col items-start justify-center flex-1">
        <h1 className="uppercase text-[52px] leading-[1.3] font-medium max-w-[60%] ml-10 mt-5">
          {" "}
          <span className="text-secondary-blue font-extrabold">Qatar</span> the
          land of opportunities
        </h1>
        <div className="absolute left-[-60px] bottom-0">
          <Flag />
        </div>
      </div>
      <div className="flex flex-col justify-around flex-1 h-full items-center gap-10">
        <p className="font-family-inter text-lg leading-[1.3]">
          Qatar is an ideal place to start a business, offering a{" "}
          <span className="text-secondary-blue font-bold">
            strong economy, investor-friendly policies, and top-tier
            infrastructure.{" "}
          </span>{" "}
          Its strategic location, tax benefits, and government support create a
          dynamic environment for growth. Whether you're a startup or an
          established firm,{" "}
          <span className="text-secondary-blue font-bold">
            Qatar's innovation-driven market offers great opportunities to
            launch and expand.
          </span>{" "}
        </p>
        <div className="flex relative gap-5">
          <div className="mt-24">
            <Gdp />
          </div>
          <div>
            <TallBuilding />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oppurtunities;
