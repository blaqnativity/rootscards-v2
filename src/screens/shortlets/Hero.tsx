import desktop from "@/assets/images/desktop.svg";
import { ArrowRight, Lightning } from "@phosphor-icons/react";
import { BtnMain } from "../../components/buttons/BtnMain";
import { BtnSecondary } from "../../components/buttons/BtnSecondary";
import { scheduleDemo } from "../../services/useCalendly";
import useCalendlyLoader from "@/hooks/useCalendlyLoader";
import { Carousel } from "../../components/utils/LogoCarousel";
import { carouselTwo as carousel } from "@/constants/carouseLogos";
export const Hero = () => {
  useCalendlyLoader();
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 flex justify-center items-center">
        <img
          src={desktop}
          alt="background"
          className="max-w-[1500px] h-[70vh] object-contain"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-center h-full px-6 text-white">
        <div className="flex-1 flex flex-col justify-center max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Make your shortlets self-serve, fraud-proof, and queue-free.
          </h1>
        </div>

        <div className="flex-1 flex flex-col justify-center max-w-md">
          <p className="text-lg text-gray-300 mb-6">
            RootsCards handles identity, access codes, deposits, and
            housekeeping — so guests check in on WhatsApp, and you stop
            babysitting arrivals.
          </p>
          <div className="flex gap-4">
            <BtnMain text="Start free trial" icon={ArrowRight} />
            <BtnSecondary
              text="Book a Demo"
              icon={ArrowRight}
              onClick={scheduleDemo}
            />
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="absolute bottom-5 left-0 w-full bg-[#222] border border-[#444] py-5 flex justify-center">
        <Carousel logos={carousel} />
      </div>
    </section>
  );
};
