import { LogoCarousel } from "../ui/aceternity/logo-carousel";

interface CarouselProps {
  title?: string;
  logos: { src: string; alt: string }[];
  speed?: "fast" | "normal" | "slow";
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  gap?: number;
  scaleOnHover?: boolean;
  logoHeight?: number;
  className?: string; // for section
  innerClassName?: string; // for inner container
}

export const Carousel: React.FC<CarouselProps> = ({
  title = "Connect what you already use",
  logos,
  speed = "normal",
  direction = "left",
  pauseOnHover = true,
  gap = 80,
  scaleOnHover = true,
  logoHeight = 30,
  // commented out for now but to be used where it is rendered
  // className = "w-full absolute bottom-0 bg-[#222222] flex justify-center items-center border border-[#444444] py-5",
  innerClassName = "max-w-[1400px] px-4 md:px-8 mx-auto flex flex-col gap-4 md:flex-row justify-between items-center w-full",
}) => {
  return (
    <section>
      <div className={innerClassName}>
        {/* Left side (optional) */}
        {title && (
          <div>
            <span className="headerFive text-white">{title}</span>
          </div>
        )}

        {/* Right side: animated logos */}
        <div className="md:w-[80%]">
          <LogoCarousel
            logos={logos}
            speed={speed}
            direction={direction}
            pauseOnHover={pauseOnHover}
            gap={gap}
            scaleOnHover={scaleOnHover}
            logoHeight={logoHeight}
          />
        </div>
      </div>
    </section>
  );
};
