import { useState } from "react";
import { Play } from "@phosphor-icons/react";
import videoPrev from "@/assets/images/videoPrev.svg";
import line from "@/assets/images/line.svg";

export interface Step {
  description: string;
}

interface VideoCardProps {
  info: Step[];
}

export const VideoCard = ({ info }: VideoCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-[#F6F1C14D]">
      <div className="max-w-[1400px] mx-auto px-4 py-10 md:py-20">
        <section>
          <div className="grid gap-10 md:gap-12 md:grid-cols-[35%_65%] items-start">
            {/* Info text section */}
            <div className="grid gap-6 mt-10 titleFont">
              <h3 className="hTwo text-black font-bold mb-2">Why it matters</h3>

              <ul className="grid gap-5 text-start w-3/4">
                {info.map((step, index) => (
                  <li key={index} className="hFour blackFade">
                    {step.description}
                  </li>
                ))}
              </ul>
            </div>

            {/* Video section */}
            <div className="relative rounded-2xl overflow-hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="absolute top-6 left-6 bg-white/20 backdrop-blur-lg text-white text-sm px-4 py-2 rounded-full z-20 hover:bg-white/30 transition"
              >
                See a 3-min demo →
              </button>

              {!isOpen ? (
                <>
                  <img
                    src={videoPrev}
                    alt="Demo Video Thumbnail"
                    className="w-full h-[500px] md:h-[600px] object-cover rounded-2xl"
                  />

                  <button
                    onClick={() => setIsOpen(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition"
                  >
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center">
                      <Play size={48} color="white" />
                    </div>
                  </button>

                  <div className="absolute bottom-5 left-5 md:bottom-10 md:left-10 text-white z-10 w-[80%] md:w-[75%]">
                    <p className="relative hThree font-semibold leading-10 md:leading-15">
                      “How Rootscard eliminates wait time and improves user{" "}
                      <img
                        src={line}
                        className="-z-20 w-40 md:w-70 -translate-x-3 translate-y-0.5 md:-translate-x-5 md:translate-y-2 h-auto absolute pointer-events-none"
                      />
                      <span>experience"</span>
                    </p>
                  </div>
                </>
              ) : (
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
          </div>
        </section>
      </div>
    </div>
  );
};
