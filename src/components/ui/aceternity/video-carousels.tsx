import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import type { VideoCard } from "@/constants/videoCards";
import { Play, Stack, ArrowRight } from "@phosphor-icons/react";
import { BtnMain } from "@/components/buttons/BtnMain";
// import vector from "@/assets/images/vector.svg";

export const VideoCarousel = ({
  cards,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  gap = 40,
  fadeOut = true,
  fadeOutColor = "white",
}: {
  cards: VideoCard[];
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
          ? `linear-gradient(to right, transparent, ${fadeOutColor} 15%, ${fadeOutColor} 99%, transparent)`
          : undefined,
        maskImage: fadeOut
          ? `linear-gradient(to right, transparent, ${fadeOutColor} 15%, ${fadeOutColor} 99%, transparent)`
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
        {cards.map((card, index) => (
          <li key={index} className="w-fit md:max-w-7xl mx-auto flex-shrink-0">
            <div className="relative">
              {/* Badge */}
              <span className="absolute top-4 left-4 bg-black/20 text-white text-xs px-4 py-2 rounded-full z-10 flex items-center gap-2">
                <Stack />
                {card.badgeText}
              </span>

              {/* Background image */}
              <img
                src={card.image}
                alt="Video preview"
                className="w-full h-[400px] object-cover object-center"
              />

              {/* Play button */}
              <button className="absolute inset-0 flex items-center justify-center">
                <span className="bg-black/60 p-6 rounded-full">
                  <Play className="w-8 h-8 text-white" />
                </span>
              </button>

              {/* Optional testimonial */}
              {card.testimonial && (
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                  <blockquote className="text-white text-xl md:text-2xl font-light max-w-2xl">
                    “
                    {card.testimonial.quote.replace(
                      card.testimonial.highlight,
                      ""
                    )}
                    <span className="font-semibold text-2xl text-white">
                      {card.testimonial.highlight}
                    </span>
                    ”
                  </blockquote>

                  <div className="mt-4 flex items-center gap-3">
                    <img
                      src={card.testimonial.avatar}
                      alt={card.testimonial.name}
                      className="w-10 h-10 rounded-full border border-white/20"
                    />
                    <div>
                      <p className="text-white font-medium">
                        {card.testimonial.name}
                      </p>
                      <p className="text-gray-300 text-sm">
                        {card.testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom text + button */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
              <p className="max-w-sm">{card.description}</p>
              <BtnMain
                text={card.ctaText}
                btnBg="bg-black"
                textColor="text-white"
                icon={ArrowRight}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
