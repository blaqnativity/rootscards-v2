import { useState } from "react";
import { Play } from "@phosphor-icons/react";
import videoPrev from "@/assets/images/videoPrev.svg";
import vector from "@/assets/images/vector.svg";

export interface Step {
  tagline: string;
  description: string;
}

const info: Step[] = [
  {
    tagline: "Dream outcome",
    description: "Zero bottlenecks, clean logs, happier people.",
  },
  {
    tagline: "Likelihood",
    description: "Live pilots, real numbers, responsive support.",
  },
  {
    tagline: "Time delay",
    description: "Go live in < 10 minutes.",
  },
  {
    tagline: "Effort & Sacrifice",
    description: "No hardware required, zero training drama.",
  },
];

export const VideoCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-[#F6F1C14D]">
      <div className="max-w-[1400px] mx-auto px-4 py-10 md:py-20">
        {/* Top section */}
        <section className="grid gap-10 md:gap-16">
          {/* Header row */}
          <div className="grid gap-10 md:gap-12 md:grid-cols-[70%_30%] items-center">
            <h2 className="hOne font-bold leading-tight text-3xl md:text-5xl">
              Why this wins
            </h2>
            <p className="hFive max-w-xs text-gray-700 text-base">
              Mirrors your current process, just faster, with less human error.
            </p>
          </div>

          {/* Main content row */}
          <div className="grid gap-10 md:gap-12 md:grid-cols-[70%_30%] items-center">
            {/* Video section */}
            <div className="relative rounded-2xl overflow-hidden">
              {/* “See a 3-min demo” button */}
              <button
                onClick={() => setIsOpen(true)}
                className="absolute top-6 left-6 bg-white/20 backdrop-blur-lg text-white text-sm px-4 py-2 rounded-full z-20 hover:bg-white/30 transition"
              >
                See a 3-min demo →
              </button>

              {/* Thumbnail */}
              {!isOpen && (
                <>
                  <img
                    src={videoPrev}
                    alt="Demo Video Thumbnail"
                    className="w-full h-[500px] md:h-[600px] object-cover rounded-2xl"
                  />

                  {/* Play button overlay */}
                  <button
                    onClick={() => setIsOpen(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition"
                  >
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center">
                      <Play size={48} color="white" />
                    </div>
                  </button>

                  {/* Caption overlay */}
                  <div className="absolute bottom-5 left-5 md:bottom-10 md:left-10 text-white z-10 max-w-2xl">
                    <p className="hThree font-semibold leading-snug">
                      “How Rootscard eliminates wait time and improves user{" "}
                      <span className="relative inline-block">
                        <img
                          src={vector}
                          alt="underline"
                          className="absolute -bottom-6 left-1/4 w-[120%] pointer-events-none"
                        />
                        <span className="relative z-10">experience"</span>
                      </span>
                    </p>
                  </div>
                </>
              )}

              {/* Video player */}
              {isOpen && (
                <div className="w-full h-[500px] md:h-[600px] bg-black">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/fkA5bKihJRw?autoplay=1&mute=1&playsinline=1&loop=1&rel=0&controls=1"
                    title="Demo Video"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>

            {/* Info text section */}
            <div className="grid gap-6">
              {info.map((item, index) => (
                <div key={index}>
                  <h3 className="hFour text-black font-bold mb-2">
                    {item.tagline}
                  </h3>
                  <p className="hFive blackFade leading-relaxed w-1/2">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
