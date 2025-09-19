import vector from "@/assets/images/vector.svg";
import { ArrowRight, Lightning } from "@phosphor-icons/react";
import { BtnMain } from "@/components/buttons/BtnMain";
import { BtnSecondary } from "@/components/buttons/BtnSecondary";
import { scheduleDemo } from "@/services/useCalendly";
import { Carousel } from "@/components/utils/LogoCarousel";

export const HeroContent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white">
      <div className="pill">
        <Lightning weight="fill" size={26} />
        <span>AI-Powered Smart Infrastructure</span>
      </div>

      <div className="max-w-7xl text-center mb-10">
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
            text="Start free trial"
            icon={ArrowRight}
          />

          <BtnMain
            text="Book a demo"
            textColor="text-white"
            icon={ArrowRight}
            btnBg="bg-black"
            btnBorder="border border-white"
            onClick={scheduleDemo}
          />
        </div>
      </div>
      <Carousel />
    </div>
  );
};
