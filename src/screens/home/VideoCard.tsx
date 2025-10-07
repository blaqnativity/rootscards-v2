import { VideoCards } from "@/components/utils/VideoCards";

export const VideoCard = () => {
  return (
    <section className="py-10 md:py-20 px-4 md:px-8">
      <main className="max-w-[1400px] mx-auto overflow-hidden">
        {/* Top section */}
        <div className="grid items-center gap-4 grid-cols-[50%_30%_20%]">
          <div className="flex gap-4 flex-col max-w-lg">
            <h1 className="hThree titleFont">
              From noise to <span className="font-bold">insight</span>
            </h1>
            <span className="hFive tracking-wide">
              Generate Lorem Ipsum placeholder text for use in your graphic,
              print and web layouts, and discover plugins for your favorite
              writing.
            </span>
          </div>

          <div className="line"></div>
          <span className="hThree titleFont">1/4</span>
        </div>

        {/* Video Cards Carousel*/}
      </main>
      <VideoCards />
    </section>
  );
};
