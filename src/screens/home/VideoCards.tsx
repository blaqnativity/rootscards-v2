export const VideoCards = () => {
  return (
    <>
      <section>
        <main className="py-10 md:py-20 max-w-[1680px] mx-auto px-4 md:px-8 overflow-hidden">
          <div className="flex justify-between items-center gap-10">
            <div className="flex gap-4 flex-col max-w-lg">
              <h1 className="headerTwo">
                From noise to <span className="font-bold">insight</span>
              </h1>
              <span className="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                tempore esse exercitationem? Nam cumque eveniet quos!
              </span>
            </div>

            <div className="hidden md:inline-flex line"></div>
            <span className="headerThree">1/4</span>
          </div>
        </main>
      </section>
    </>
  );
};
