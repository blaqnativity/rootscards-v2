import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { processesCard } from "@/constants/processesCard";
import { ArrowUpRight } from "@phosphor-icons/react";

export const ProcessesCarousel = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  gap = 40,
  fadeOut = true,
  fadeOutColor = "white",
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow" | number;
  pauseOnHover?: boolean;
  className?: string;
  gap?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );

      if (typeof speed === "number") {
        containerRef.current.style.setProperty(
          "--animation-duration",
          `${speed}s`
        );
      } else if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }

      setStart(true);
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 w-full overflow-hidden", className)}
      style={{
        WebkitMaskImage: fadeOut
          ? `linear-gradient(to right, transparent, ${fadeOutColor} 15%, ${fadeOutColor} 85%, transparent)`
          : undefined,
        maskImage: fadeOut
          ? `linear-gradient(to right, transparent, ${fadeOutColor} 15%, ${fadeOutColor} 85%, transparent)`
          : undefined,
      }}
    >
      <ul
        ref={scrollerRef}
        style={{ gap }}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap py-2",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {processesCard.map((process, index) => (
          <li
            key={index}
            className="min-w-[300px] md:min-w-[400px] flex-shrink-0 flex flex-col justify-between shadow-sm rounded-[41px] bg-gray-100 overflow-hidden transition-opacity duration-500"
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
          </li>
        ))}
      </ul>
    </div>
  );
};
