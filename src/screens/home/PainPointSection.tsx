import eventImage from "../../assets/images/events.svg";

export const PainPointSection = () => {
  return (
    <section className="md:py-20 bg-[#F6F6F6]">
      <main className="max-w-[1680px] mx-auto px-8">
        <span className="headerFive fadeText uppercase">the need</span>
        <h2 className="headerTwo max-w-7xl my-10">
          Long waits erode revenue and trust. RootsCards eliminates bottlenecks
          with{" "}
          <span className="fadeText">
            instant arrivals, smart queues, and real insights.
          </span>
        </h2>

        <div className="grid md:grid-cols-[40%_60%]">
          {/* text box */}
          <div className="bg-[#F9ECC9] flex items-center justify-center p-20 tracking-widest">
            <h3 className="headerSubText">Eliminates Bottlenecks at Events</h3>
          </div>

          {/* image box */}
          <div>
            <img
              src={eventImage}
              alt="Events hall background"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>
    </section>
  );
};
