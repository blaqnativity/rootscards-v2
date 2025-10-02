import { properties } from "@/constants/processes";

export const Features = () => {
  return (
    <section className="py-12 bg-[#F6F6F6]">
      <div className="max-w-[1400px] mx-auto px-4">
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {properties.map((feature, index) => (
            <li key={index} className="p-6 flex flex-col gap-3 duration-200">
              <div
                className="w-10 h-10 flex items-center justify-center rounded-lg"
                style={{ backgroundColor: feature.color }}
              >
                {feature.image && (
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-5 h-5"
                  />
                )}
              </div>
              <h3 className="font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-sm text-gray-600 w-2/3">{feature.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
