import { useState } from "react";
import { BtnMain } from "@/components/buttons/BtnMain";
import { ArrowRight, Play } from "@phosphor-icons/react";
import videoPrev from "@/assets/images/videoPrev.svg";
import vector from "@/assets/images/vector.svg";
import { cards } from "@/constants/processes";

export const Steps = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="max-w-[1400px] mx-auto px-4 py-10 md:py-20">
        {/* Top section */}
        <section className="grid gap-10 md:gap-15">
          <div className="flex flex-col items-start gap-3 md:gap-0 md:flex-row justify-between">
            {/* Left side: heading */}
            <div>
              <span className="text-sm uppercase tracking-wide text-gray-600">
                HOW IT WORKS
              </span>
              <h2 className="headingText font-bold max-w-2xl leading-10 md:leading-20">
                <span className="text-black/50">From booking to </span>
                <br className="hidden md:block" />
                checkout in 4 steps
              </h2>
            </div>

            {/* Right side: text + CTA */}
            <div className="space-y-3 text-start">
              <p className="max-w-xs text-gray-700">
                Mirrors your current process — just faster, auditable, and less
                human error.
              </p>
              <BtnMain
                to="https://app.rootscards.com/signup"
                text="Start free trial"
                icon={ArrowRight}
                btnBg="bg-black"
                textColor="text-white"
              />
            </div>
          </div>

          {/* Video card */}
          <div className="relative rounded-2xl overflow-hidden">
            {/* "See a 3-min demo" button */}
            <button
              onClick={() => setIsOpen(true)}
              className="absolute top-6 left-6 bg-white/20 backdrop-blur-lg text-white text-sm px-4 py-2 rounded-full z-20"
            >
              See a 3-min demo →
            </button>

            {/* Thumbnail (shown only if video not open) */}
            {!isOpen && (
              <>
                <img
                  src={videoPrev}
                  alt="Demo Video Thumbnail"
                  className="w-full h-[500px] md:h-[600px] rounded-2xl"
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

                {/* Caption */}
                <div className="absolute bottom-5 left-5 md:bottom-10 md:left-10 text-white w-xs md:w-2xl z-10">
                  <p className="headerTwo leading-14">
                    “How Rootscard eliminates wait time and improves user{" "}
                    <div className="ml-3 relative inline-block">
                      <img
                        src={vector}
                        alt="overlay"
                        className="absolute -bottom-10 md:-bottom-20 left-10 h-auto w-full max-w-none -translate-x-1/3 md:-translate-x-1/5 -translate-y-1/2 pointer-events-none"
                      />
                      <span className="relative z-0">experience"</span>
                    </div>
                  </p>
                </div>
              </>
            )}

            {/* Video player (replaces thumbnail when open) */}
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
        </section>

        {/* Steps cards section */}
        <section className="mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-2 rounded-2xl border border-[#DDDDDD] flex flex-col space-y-4"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-auto rounded-lg"
              />
              <div className="p-4">
                <h3 className="font-semibold">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.desc}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};
