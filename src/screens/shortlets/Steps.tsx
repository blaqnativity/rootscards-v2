import { BtnMain } from "@/components/buttons/BtnMain";
import { ArrowRight } from "@phosphor-icons/react";
import video from "@/assets/images/video-frame.svg";

export const Steps = () => {
  return (
    <div className="max-w-[1680px] mx-auto px-4 py-12 bg-[#F6F6F6]">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
        <div className="flex flex-col space-y-6">
          <span>HOW IT WORKS</span>
          <h2 className="headerTwo font-semibold max-w-lg md:leading-14">
            From booking to checkout in 4 steps
          </h2>
          <p className="max-w-xs">
            Mirrors your current process — just faster, auditable, and less
            human error.
          </p>
          <BtnMain
            to="#"
            text="Start free trial"
            icon={ArrowRight}
            btnBg="bg-black"
            textColor="text-white"
          />
        </div>

        <div>
          <img src={video} alt={video} className="w-full" />
        </div>
      </section>
      <section></section>
    </div>
  );
};
