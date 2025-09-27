import { properties } from "@/constants/processes";

export const Features = () => {
  return (
    <section className="py-12">
      <div className="max-w-[1400px] mx-auto px-4">
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {properties.map((feature, index) => (
            <li
              key={index}
              className="rounded-2xl border border-gray-200 p-6 bg-white flex flex-col gap-3 hover:shadow-md transition-shadow duration-200"
            >
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
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
