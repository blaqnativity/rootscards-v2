import { Play, ArrowRight, Stack } from "@phosphor-icons/react";
import videoBg from "../../assets/images/bg-image.svg";
import { BtnMain } from "@/components/buttons/BtnMain";

export const VideoCards = () => {
  return (
    <section>
      {/* Top section - keep your original styling */}
      <main className="py-10 md:py-20 max-w-[1680px] mx-auto px-4 md:px-8 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-10">
          <div className="flex gap-4 flex-col max-w-lg">
            <h1 className="headerTwo">
              From noise to <span className="font-bold">insight</span>
            </h1>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              tempore esse exercitationem? Nam cumque eveniet quos!
            </span>
          </div>

          {/* keep your line exactly */}
          <div className="hidden md:inline-flex line"></div>
          <span className="headerThree">1/4</span>
        </div>

        {/* Video Cards */}
        <div className="mt-10 flex items-center gap-5 overflow-hidden">
          {/* card one */}
          <div className="w-fit md:max-w-4xl mx-auto flex-shrink-0">
            <div className="relative">
              {/* Badge */}
              <span className="absolute top-4 left-4 bg-black/20 text-white text-xs px-4 py-2 rounded-full z-10 flex items-center gap-2">
                <Stack />
                RootsCard Suite
              </span>

              {/* Background image / video preview */}
              <img
                src={videoBg}
                alt="Video preview"
                className="w-full h-[400px] object-cover object-center rounded-2xl"
              />

              {/* Play button overlay */}
              <button className="absolute inset-0 flex items-center justify-center">
                <span className="bg-black/60 p-6 rounded-full">
                  <Play className="w-8 h-8 text-white" />
                </span>
              </button>

              {/* Overlay content */}
              {/* <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                <blockquote className="text-white text-xl md:text-2xl font-light max-w-2xl">
                  “Rootscard helped us save
                  <span className="font-semibold text-2xl text-white">
                    $2.1M
                  </span>{" "}
                  in hidden risk and cut analysis time by 50%”
                </blockquote>

                <div className="mt-4 flex items-center gap-3">
                  <img
                    src="/avatars/sam-smith.jpg" // replace with avatar
                    alt="Sam Smith"
                    className="w-10 h-10 rounded-full border border-white/20"
                  />
                  <div>
                    <p className="text-white font-medium">Sam Smith</p>
                    <p className="text-gray-300 text-sm">CTO, Microsoft</p>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Bottom text + button */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
              <p className="max-w-sm">
                We’re helping companies extract their data and turn it into
                actions applicable today, not in months.
              </p>
              <BtnMain
                text="Book a Demo"
                btnBg="bg-black"
                textColor="text-white"
                icon={ArrowRight}
              />
            </div>
          </div>
          <div className="w-fit md:max-w-4xl mx-auto flex-shrink-0">
            <div className="relative">
              {/* Badge */}
              <span className="absolute top-4 left-4 bg-black/20 text-white text-xs px-4 py-2 rounded-full z-10 flex items-center gap-2">
                <Stack />
                RootsCard Suite
              </span>

              {/* Background image / video preview */}
              <img
                src={videoBg}
                alt="Video preview"
                className="w-full h-[400px] object-cover object-center rounded-2xl"
              />

              {/* Play button overlay */}
              <button className="absolute inset-0 flex items-center justify-center">
                <span className="bg-black/60 p-6 rounded-full">
                  <Play className="w-8 h-8 text-white" />
                </span>
              </button>

              {/* Overlay content */}
              {/* <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                <blockquote className="text-white text-xl md:text-2xl font-light max-w-2xl">
                  “Rootscard helped us save
                  <span className="font-semibold text-2xl text-white">
                    $2.1M
                  </span>{" "}
                  in hidden risk and cut analysis time by 50%”
                </blockquote>

                <div className="mt-4 flex items-center gap-3">
                  <img
                    src="/avatars/sam-smith.jpg" // replace with avatar
                    alt="Sam Smith"
                    className="w-10 h-10 rounded-full border border-white/20"
                  />
                  <div>
                    <p className="text-white font-medium">Sam Smith</p>
                    <p className="text-gray-300 text-sm">CTO, Microsoft</p>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Bottom text + button */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
              <p className="max-w-sm">
                We’re helping companies extract their data and turn it into
                actions applicable today, not in months.
              </p>
              <BtnMain
                text="Book a Demo"
                btnBg="bg-black"
                textColor="text-white"
                icon={ArrowRight}
              />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
