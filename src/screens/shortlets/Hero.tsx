import desktop from "@/assets/images/desktop.svg";
import mobileBg from "@/assets/images/mobileBg.svg";
import { BtnMain } from "@/components/buttons/BtnMain";
import { BtnSecondary } from "@/components/buttons/BtnSecondary";
import { ArrowRightIcon } from "@phosphor-icons/react";

export const Hero = () => {
  return (
    <section className="relative flex items-center bg-white py-10 md:py-20 h-[720px] md:h-screen w-full overflow-hidden">
      {/* Desktop background */}
      <div className="absolute inset-0 hidden md:flex justify-center items-center">
        <div
          className="min-w-[1600px] max-w-[1680px] h-[720px] bg-no-repeat bg-center bg-contain"
          style={{ backgroundImage: `url(${desktop})` }}
        />
      </div>

      {/* Mobile background */}
      <div className="absolute inset-0 flex md:hidden justify-center items-center">
        <div
          className="w-full max-w-[420px] h-[920px] bg-no-repeat bg-bottom bg-cover"
          style={{ backgroundImage: `url(${mobileBg})` }}
        />
      </div>

      {/* Foreground content */}
      <div className="relative grid md:grid-cols-[3fr_2fr] gap-10 z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        <div>
          <h1 className="headingText  md:leading-21 text-white ">
            Make your shortlets self-serve, fraud-proof, and queue-free.
          </h1>
        </div>
        <div className="flex flex-col gap-6">
          <span className="headerThree md:w-md text-white">
            RootsCards handles identity, access codes, deposits, and
            housekeeping—so guests check in on WhatsApp, and you stop
            babysitting arrivals.
          </span>

          <div className="flex items-center gap-4">
            <BtnMain
              text="Start free trial"
              icon={ArrowRightIcon}
              btnBg="bg-black"
              textColor="text-white"
            />
            <BtnSecondary
              to="/"
              text="Book a Demo"
              icon={ArrowRightIcon}
              btnBg="bg-white"
              textColor="text-black"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
