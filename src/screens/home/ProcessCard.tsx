import { processesCard } from "../../constants/processesCard";
import { ArrowUpRight } from "@phosphor-icons/react";

export const ProcessCard = () => {
  return (
    <section className="flex gap-10">
      {processesCard.map((process, index) => (
        <div key={index} className="w-fit shadow-sm rounded-[41px] bg-gray-100">
          <div className="px-5 py-6">
            <div className="flex justify-between items0center">
              <span className="bg-gray-200 px-4 py-2 rounded-full">
                {process.tagline}
              </span>

              <span className="bg-white p-2 flex justify-center items-center rounded-full shadow">
                <ArrowUpRight size={18} weight="bold" />
              </span>
            </div>
            <h3 className="headerThree my-3">{process.title}</h3>
            <p className="fadeText">{process.description}</p>
          </div>
          <img
            src={process.image}
            alt={process.title}
            className="w-full h-90"
          />
        </div>
      ))}
    </section>
  );
};
