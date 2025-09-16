import { processesCard } from "../../../constants/processesCard";
import { ArrowUpRight } from "@phosphor-icons/react";

export const ProcessCard = () => {
  return (
    <section className="flex gap-10 w-full">
      {processesCard.map((process, index) => (
        <div
          key={index}
          className="min-w-full md:h-[500px] md:min-w-0 flex-shrink-0 flex justify-between flex-col shadow-sm rounded-[41px] bg-gray-100 overflow-hidden transition-opacity duration-500"
        >
          <div className="px-6 space-y-2 py-6">
            <div className="flex justify-between items-center">
              <span className="bg-gray-200 px-4 py-2 rounded-full">
                {process.tagline}
              </span>
              <span className="bg-white p-2 flex justify-center items-center rounded-full">
                <ArrowUpRight size={18} weight="bold" />
              </span>
            </div>
            <h3 className="headerThree font-semibold md:w-40">
              {process.title}
            </h3>
            <p className="fadeText">{process.description}</p>
          </div>

          {/* Image section */}
          <img
            src={process.image}
            alt={process.title}
            className="w-full h-auto"
          />
        </div>
      ))}
    </section>
  );
};
