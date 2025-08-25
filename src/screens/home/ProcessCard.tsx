import { processesCard } from "../../constants/processesCard";

export const ProcessCard = () => {
  return (
    <section className="flex gap-10">
      {processesCard.map((process, index) => (
        <div key={index} className="w-full shadow-sm rounded-4xl bg-gray-100">
          <div className="px-5 py-6">
            <span className="headerFive">{process.tagline}</span>
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
