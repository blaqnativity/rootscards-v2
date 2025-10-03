import vector from "../../assets/images/vector.svg";
import bgImage from "../../assets/images/gradientBg.png";
import { ArrowRight, Lightning } from "@phosphor-icons/react";
import { BtnMain } from "../../components/buttons/BtnMain";
import { BtnSecondary } from "../../components/buttons/BtnSecondary";
import Aurora from "../../components/ui/reactbits/Aurora";
import { scheduleDemo } from "@/services/useCalendly";
import useCalendlyLoader from "@/hooks/useCalendlyLoader";
import { Carousel } from "../../components/utils/LogoCarousel";
import { carouselTwo as carousels } from "@/constants/carouseLogos";
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
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <div className="max-w-7xl text-center mb-10">
          <h1 className="headerText font-bold relative">
            Make your shortlets self-serve, fraud-proof, and queue-free
          </h1>
          <p className="headerThree px-10 max-w-4xl my-10 tracking-wide mx-auto">
            RootsCards handles identity, access codes, deposits, and
            housekeeping—so guests check in on WhatsApp, and you stop
            babysitting arrivals.
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
