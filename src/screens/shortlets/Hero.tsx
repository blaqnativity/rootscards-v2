import desktop from "@/assets/images/desktop.svg";
import mobile from "@/assets/images/mobileBg.svg";
import { BtnMain } from "@/components/buttons/BtnMain";
import { BtnSecondary } from "@/components/buttons/BtnSecondary";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { scheduleDemo } from "../../services/useCalendly";
import useCalendlyLoader from "@/hooks/useCalendlyLoader";

export const Hero = () => {
  useCalendlyLoader();
  return (
    <section className="relative flex items-center bg-black py-10 md:py-20 h-[65vh] md:h-[110vh] w-full overflow-hidden">
      {/* Desktop background */}
      <img
        src={desktop}
        className="hidden md:block absolute top-20 left-1/2 -translate-x-1/2 
             w-full max-w-[1450px] h-auto object-cover"
      />

      {/* Mobile background */}
      <img
        src={mobile}
        className="w-[96%] h-[90%] md:hidden absolute inset-0 mx-auto top-15 object-contain"
      />

      {/* Foreground content */}
      <div className="relative grid items-start md:grid-cols-[3fr_2fr] gap-10 z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        <div>
          <h1 className="headingText md:leading-23 text-white">
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
              to="https://app.rootscards.com/signup"
            />
            <BtnSecondary
              text="Book a Demo"
              icon={ArrowRightIcon}
              btnBg="bg-white"
              textColor="text-black"
              onClick={scheduleDemo}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
