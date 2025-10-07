import { ArrowUpRight } from "@phosphor-icons/react";

export const ProcessesMobileCarousel = ({
  process,
  isActive,
  onClick,
}: {
  process: {
    tagline: string;
    title: string;
    description: string;
    image: string;
    color: string;
  };
  isActive: boolean;
  onClick?: () => void;
}) => {
  return (
    <div
      className="flex flex-col justify-between shadow-sm rounded-[49px] bg-[#222222] 
        overflow-hidden transition-all duration-500 border border-[#555555] w-full mx-auto"
      onClick={onClick}
      style={{
        opacity: isActive ? 1 : 0.6,
        transform: isActive ? "scale(1)" : "scale(0.95)",
        transition: "all 0.5s ease",
      }}
    >
      <div className="px-6 space-y-2 py-6">
        <div className="flex justify-between items-center">
          <span className="bg-[#111111] text-white px-4 py-2 rounded-full">
            {process.tagline}
          </span>
          <span
            className="p-2 flex justify-center items-center rounded-full"
            style={{ backgroundColor: process.color }}
          >
            <ArrowUpRight size={18} weight="bold" />
          </span>
        </div>
        <h3 className="text-white font-semibold">{process.title}</h3>
        <p className="text-white tracking-widest">{process.description}</p>
      </div>

      {/* Image section */}
      <img
        src={process.image}
        alt={process.title}
        className="w-full block object-cover rounded-b-[49px] h-auto md:h-60"
      />
    </div>
  );
};
