import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import logo from "@/assets/images/rc.svg";

interface ProcessItem {
  description: string;
}

interface ProcessesCarouselProps {
  data: ProcessItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow" | number;
  pauseOnHover?: boolean;
  className?: string;
  gap?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
}

export const Waitlist = ({
  data,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  gap = 40,
  fadeOut = true,
  fadeOutColor = "white",
}: ProcessesCarouselProps) => {
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
          ? `linear-gradient(to right, transparent, ${fadeOutColor} 0.5%, ${fadeOutColor} 99%, transparent)`
          : undefined,
        maskImage: fadeOut
          ? `linear-gradient(to right, transparent, ${fadeOutColor} 0.5%, ${fadeOutColor} 99%, transparent)`
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
        onTouchStart={(e) => {
          (e.currentTarget as HTMLElement).style.animationPlayState = "paused";
        }}
        onTouchEnd={(e) => {
          (e.currentTarget as HTMLElement).style.animationPlayState = "running";
        }}
      >
        {data.map((item, index) => (
          <li
            key={index}
            className="w-[350px] h-[200px] md:w-[350px] flex-shrink-0 flex flex-col justify-between shadow-sm rounded-[32px] bg-[#222222] overflow-hidden transition-opacity duration-500 border border-[#555555]"
          >
            <div className="px-6 py-4 space-y-4">
              <div>
                <img src={logo} alt="Logo" />
              </div>

              <p className="hFour text-white">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
