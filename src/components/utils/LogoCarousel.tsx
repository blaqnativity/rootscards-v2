import { carouselLogos } from "../../constants/carouseLogos";
import { LogoCarousel } from "../ui/aceternity/logo-carousel";

export const Carousel = () => {
  return (
    <section className="w-full absolute bottom-0 bg-[#222222] flex justify-center items-center border border-[#444444] py-5">
      <div className="max-w-[1680px] px-4 md:px-8 mx-auto flex flex-col gap-4 md:flex-row justify-between items-center w-full">
        {/* Left side */}
        <div>
          <span className="headerFive text-white">
            Connect what you already use
          </span>
        </div>

        {/* Right side: animated logos */}
        <div className="md:w-[80%]">
          <LogoCarousel
            logos={carouselLogos}
            speed="normal"
            direction="left"
            pauseOnHover
            gap={80}
            scaleOnHover={true}
            logoHeight={30}
          />
        </div>
      </div>
    </section>
  );
};
