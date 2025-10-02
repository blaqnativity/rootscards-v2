import desktop from "@/assets/images/desktop.svg";
// import { ArrowRight } from "@phosphor-icons/react";
// import { BtnMain } from "../../components/buttons/BtnMain";
// import { BtnSecondary } from "../../components/buttons/BtnSecondary";
// import { scheduleDemo } from "../../services/useCalendly";
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
      {/* <div></div> */}

      {/* Carousel */}
      <div className="absolute bottom-5 left-0 w-full bg-[#222] border border-[#444] py-5 flex justify-center">
        <Carousel logos={carousel} />
      </div>
    </section>
  );
};
