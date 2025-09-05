import { carouselLogos } from "../../constants/carouseLogos";

export const Carousel = () => {
  return (
    <section className="w-full absolute bottom-8 bg-[#222222] flex justify-center items-center border border-[#444444] py-5">
      <div className="max-w-[1680px] mx-auto flex justify-evenly items-center w-full">
        {/* Left side */}
        <div className="items-start">
          <span>Connect what you already use</span>
        </div>

        {/* Right side */}
        <div className="flex gap-20">
          {carouselLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="h-8 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
