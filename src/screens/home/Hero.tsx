import vector from "../../assets/images/vector.svg";
import bgImage from "../../assets/images/gradientBg.png";
import { ArrowRight } from "@phosphor-icons/react";
import { BtnMain } from "../../components/buttons/BtnMain";
import { BtnSecondary } from "../../components/buttons/BtnSecondary";
import { Carousel } from "../../components/utils/Carousel";
import Aurora from "../../components/reactbits/Aurora";

export const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Aurora full screen background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#7CFF67", "#B19EEF", "#5227FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <div className="max-w-7xl text-center">
          <h1 className="headerText font-bold relative">
            We make Queues
            <span className="ml-3 relative inline-block">
              <img
                src={vector}
                alt="overlay"
                className="absolute top-1/2 -right-18 h-auto w-full max-w-none -translate-x-1/3 md:-translate-x-1/5 -translate-y-1/2 pointer-events-none"
              />
              <span className="relative z-0">disappear</span>
            </span>
          </h1>
          <p className="headerThree px-10 my-10 tracking-wide">
            Process thousands in seconds with AI-powered check-ins, automated
            queue routing and live insights—built for events, clinics, coworking
            and retail.
          </p>

          <div className="flex gap-5 justify-center items-center">
            <BtnSecondary
              to="https://app.rootscards.com/signup"
              text="Start Free Trial"
              icon={ArrowRight}
            />
            <BtnMain
              to="https://app.rootscards.com/signup"
              text="Book a Demo"
              textColor="text-white"
              icon={ArrowRight}
              btnBg="bg-black"
              btnBorder="border border-white"
            />
          </div>
        </div>
        <Carousel />
      </div>
    </section>
  );
};
