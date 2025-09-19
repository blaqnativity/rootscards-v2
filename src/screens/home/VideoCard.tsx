import { VideoCards } from "@/components/utils/VideoCards";

export const VideoCard = () => {
  return (
    <section>
      <main className="py-10 md:py-20 max-w-[1680px] mx-auto px-4 md:px-8 overflow-hidden">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-10">
          <div className="flex gap-4 flex-col max-w-lg">
            <h1 className="headerTwo titleFont">
              From noise to <span className="font-bold">insight</span>
            </h1>
            <span className="text-sm tracking-wide leading-7">
              Generate Lorem Ipsum placeholder text for use in your graphic,
              print and web layouts, and discover plugins for your favorite
              writing.
            </span>
          </div>

          <div className="hidden md:inline-flex line"></div>
          <span className="headerTwo titleFont">1/4</span>
        </div>

        {/* Video Cards Carousel*/}
        <VideoCards />
      </main>
    </section>
  );
};
