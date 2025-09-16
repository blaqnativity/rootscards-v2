import { carouselLogos } from "../../constants/carouseLogos";
import LogoLoop from "../ui/reactbits/LogoLoop";

export const Carousel = () => {
  return (
    <section className="w-full absolute bottom-8 bg-[#222222] flex justify-center items-center border border-[#444444] py-5">
      <div className="max-w-[1680px] px-4 md:px-8 mx-auto flex flex-col gap-4 md:flex-row justify-between items-center w-full">
        {/* Left side */}
        <div>
          <span className="headerFive text-white">
            Connect what you already use
          </span>
        </div>

        {/* Right side: animated logos */}
        <div className="md:w-[80%]">
          <LogoLoop
            logos={carouselLogos}
            speed={80}
            direction="left"
            logoHeight={28}
            gap={80}
            pauseOnHover
            fadeOut
            fadeOutColor="#222222"
            scaleOnHover
          />
        </div>
      </div>
    </section>
  );
};
