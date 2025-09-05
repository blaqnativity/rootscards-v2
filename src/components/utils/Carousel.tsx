import { carouselLogos } from "../../constants/carouseLogos";
import LogoLoop from "../reactbits/LogoLoop";

export const Carousel = () => {
  return (
    <section className="w-full absolute bottom-8 bg-[#222222] flex justify-center items-center border border-[#444444] py-5">
      <div className="max-w-[1680px] px-8 mx-auto flex justify-between items-center w-full">
        {/* Left side */}
        <div>
          <span className="headerFive text-white">
            Connect what you already use
          </span>
        </div>

        {/* Right side: animated logos */}
        <div className="w-[80%]">
          <LogoLoop
            logos={carouselLogos}
            speed={120}
            direction="left"
            logoHeight={32}
            gap={40}
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
