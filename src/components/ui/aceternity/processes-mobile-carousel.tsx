"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useId } from "react";
import { processesCard } from "@/constants/processes";
import { ArrowUpRight } from "@phosphor-icons/react";

const ProcessSlide = ({
  process,
  index,
  current,
  handleSlideClick,
}: {
  process: (typeof processesCard)[0];
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}) => {
  return (
    <div
      className="flex flex-col justify-between shadow-sm rounded-[49px] bg-[#222222] overflow-hidden transition-all duration-500 border border-[#555555] w-full mx-auto"
      onClick={() => handleSlideClick(index)}
      style={{
        opacity: current === index ? 1 : 0.6,
        transform: current === index ? "scale(1)" : "scale(0.95)",
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
        <h3 className="headerThree text-white font-semibold">
          {process.title}
        </h3>
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

const CarouselControl = ({
  type,
  title,
  handleClick,
}: {
  type: "previous" | "next";
  title: string;
  handleClick: () => void;
}) => {
  return (
    <button
      onClick={handleClick}
      title={title}
      className={`w-8 h-8 flex items-center justify-center mx-1 
        bg-black/40 hover:bg-black/60 text-white rounded-full 
        transition duration-200 pointer-events-auto shadow-md
        ${type === "previous" ? "rotate-180" : ""}`}
    >
      <IconArrowNarrowRight size={16} />
    </button>
  );
};

export function ProcessesMobileCarousel() {
  const [current, setCurrent] = useState(0);
  const id = useId();

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev === 0 ? processesCard.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev === processesCard.length - 1 ? 0 : prev + 1));
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) setCurrent(index);
  };

  return (
    <div
      className="relative w-full mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / processesCard.length)}%)`,
          width: `${processesCard.length * 100}%`,
        }}
      >
        {processesCard.map((process, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex justify-center w-full"
            style={{ width: `${100 / processesCard.length}%` }} // each slide takes equal fraction
          >
            <div className="">
              <ProcessSlide
                process={process}
                index={index}
                current={current}
                handleSlideClick={handleSlideClick}
              />
            </div>
          </div>
        ))}
      </ul>

      {/* Floating controls */}
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}
