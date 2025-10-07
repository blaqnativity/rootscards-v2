import vector from "../../assets/images/vector.svg";
import bgImage from "../../assets/images/gradientBg.png";
import { ArrowRight, Lightning } from "@phosphor-icons/react";
import { BtnMain } from "../../components/buttons/BtnMain";
import { BtnSecondary } from "../../components/buttons/BtnSecondary";
import Aurora from "../../components/ui/reactbits/Aurora";
import { scheduleDemo } from "@/services/useCalendly";
import useCalendlyLoader from "@/hooks/useCalendlyLoader";
import { Carousel } from "../../components/utils/LogoCarousel";
import { carouselOne as carousels } from "@/constants/carouseLogos";
export const Hero = () => {
  useCalendlyLoader();
  return (
    <section
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="py-10 md:py-15 relative h-screen w-full overflow-hidden"
    >
      {/* Aurora full screen background */}
      <div className="hidden md:block absolute inset-0 z-0">
        <Aurora
          colorStops={["#7CFF67", "#B19EEF", "#5227FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <div className="pill mb-10">
          <Lightning weight="fill" size={15} />
          <span className="text-xs shadow-2xl">
            AI-Powered Smart Infrastructure
          </span>
        </div>

        <div className="max-w-6xl space-y-10 text-center">
          <h1 className="hOne font-bold relative">
            We make Queues
            <div className="ml-3 relative inline-block">
              <img
                src={vector}
                alt="overlay"
                className="absolute top-1/2 -right-18 h-auto w-full max-w-none -translate-x-1/3 md:-translate-x-1/5 -translate-y-1/2 pointer-events-none"
              />
              <span className="relative z-0">disappear</span>
            </div>
          </h1>
          <p className="hFour max-w-3xl mx-auto tracking-normal">
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
              onClick={scheduleDemo}
            />
          </div>
        </div>
        <div className="w-full absolute -bottom-10 bg-[#222222] flex justify-center items-center border border-[#444444] py-4">
          <Carousel logos={carousels} />
        </div>
      </div>
    </section>
  );
};
