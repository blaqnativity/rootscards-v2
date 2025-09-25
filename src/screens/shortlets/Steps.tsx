import { BtnMain } from "@/components/buttons/BtnMain";
import { ArrowRight } from "@phosphor-icons/react";
import video from "@/assets/images/video-frame.svg";
import { cards } from "@/constants/processes";

export const Steps = () => {
  return (
    <div className="max-w-[1680px] mx-auto px-4 py-10 md:py-20 bg-[#F6F6F6]">
      {/* top section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
        <div className="flex flex-col space-y-6">
          <span className="text-sm uppercase tracking-wide text-gray-600">
            HOW IT WORKS
          </span>
          <h2 className="headerTwo font-semibold max-w-lg md:leading-14">
            From booking to checkout in 4 steps
          </h2>
          <p className="max-w-xs text-gray-700">
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
          <img src={video} alt="Video preview" className="w-full rounded-lg" />
        </div>
      </section>

      {/* cards section */}
      <section className="mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-2 rounded-2xl border border-[#DDDDDD] flex flex-col space-y-4"
          >
            <img src={card.image} alt={card.title} className="w-full h-auto" />
            <div className="p-4">
              <h3 className="">{card.title}</h3>
              <p className="">{card.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
