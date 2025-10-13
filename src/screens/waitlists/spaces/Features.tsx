import { spaces, spacesTwo } from "@/constants/processes";

export const Features = () => {
  return (
    <section className="py-10 md:py-20 bg-[#111111] text-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="hTwo titleFont mb-10">How it works</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {spaces.map((space, index) => (
            <li
              key={index}
              className="p-6 flex flex-col gap-4 border border-[#f0f0f0f0]/20 rounded-2xl"
            >
              <div
                className="w-fit p-4 rounded-2xl"
                style={{ backgroundColor: space.color }}
              >
                {space.image && (
                  <img
                    src={space.image}
                    alt={space.title}
                    className="w-8 h-auto"
                  />
                )}
              </div>
              <p className="hFive w-full">{space.desc}</p>
            </li>
          ))}
        </ul>
        <ul className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-6">
          {spacesTwo.map((space, index) => (
            <li
              key={index}
              className="p-6 flex flex-col gap-4 border border-[#f0f0f0f0]/20 rounded-2xl"
            >
              <div
                className="w-fit p-4 rounded-2xl"
                style={{ backgroundColor: space.color }}
              >
                {space.image && (
                  <img
                    src={space.image}
                    alt={space.title}
                    className="w-8 h-auto"
                  />
                )}
              </div>
              <p className="hFive text-sm w-full">{space.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
