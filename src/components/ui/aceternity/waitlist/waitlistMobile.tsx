"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useId } from "react";
import { waitlist } from "@/constants/processes";
import logo from "@/assets/images/rc.svg";

type ProcessType = {
  description: string;
};

const ProcessSlide = ({
  process,
  index,
  current,
  handleSlideClick,
}: {
  process: ProcessType;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}) => {
  return (
    <div
      className="flex flex-col justify-between shadow-sm rounded-[32px] bg-[#222222] overflow-hidden transition-all duration-500 border border-[#555555] w-full mx-auto"
      onClick={() => handleSlideClick(index)}
      style={{
        opacity: current === index ? 1 : 0.6,
        transform: current === index ? "scale(1)" : "scale(0.95)",
        transition: "all 0.5s ease",
      }}
    >
      <div className="px-6 space-y-6 py-6">
        <div className="flex justify-between items-center">
          <span className="">
            <img src={logo} className="h-auto w-14" />
          </span>
        </div>
        <p className="hThree text-white">{process.description}</p>
      </div>
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

export const WaitlistMobile = ({
  data = waitlist.map((item) => ({
    ...item,
    image: item.image ?? "", // fallback to empty string if undefined
  })),
}: {
  data?: ProcessType[];
}) => {
  const [current, setCurrent] = useState(0);
  const id = useId();

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
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
          transform: `translateX(-${current * (100 / data.length)}%)`,
          width: `${data.length * 100}%`,
        }}
      >
        {data.map((process, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex justify-center w-full h-[250px]"
            style={{ width: `${100 / data.length}%` }}
          >
            <ProcessSlide
              process={process}
              index={index}
              current={current}
              handleSlideClick={handleSlideClick}
            />
          </div>
        ))}
      </ul>

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
};
