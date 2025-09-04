import vector from "../../assets/images/vector.svg";
import bgImage from "../../assets/images/gradientBg.png";
import { ArrowRight } from "@phosphor-icons/react";
import { BtnMain } from "../../components/buttons/BtnMain";
import { BtnSecondary } from "../../components/buttons/BtnSecondary";
// import { Carousel } from "./Carousel";

export const Hero = () => {
  //   const navigate = useNavigate();
  return (
    <section
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-[100vh] w-full flex items-center justify-center text-white"
    >
      {/* Centered headline */}
      <div className="relative max-w-7xl">
        <h1 className="headerText font-bold text-center relative">
          We make Queues
          <span className="ml-3 relative inline-block">
            {/* The image sits on top */}
            <img
              src={vector}
              alt="overlay"
              className="absolute top-1/2 -right-18 h-auto w-full md:h-auto max-w-none -translate-x-1/3 md:-translate-x-1/5 -translate-y-1/2 pointer-events-none"
            />
            {/* The text stays below */}
            <span className="relative z-0">disappear</span>
          </span>
        </h1>
        <p className="headerThree text-center px-10 my-10 tracking-wide">
          Process thousands in seconds with AI‑powered check‑ins, automated
          queue routing and live insights—built for events, clinics, coworking
          and retail.
        </p>

        <div className="flex gap-5 justify-center items-center">
          <BtnSecondary
            to="https://app.rootscards.com/signup"
            text="Start Free Trial"
            icon={ArrowRight}
          />
          <BtnMain
            to="https://app.rootscards.com/signup"
            text="Book a Demo"
            textColor="text-white"
            icon={ArrowRight}
            btnBg="bg-black"
            btnBorder="border border-white"
          />
        </div>
        {/* <Carousel /> */}
      </div>
    </section>
  );
};
