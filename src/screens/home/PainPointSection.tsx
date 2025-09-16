import { Link } from "react-router-dom";
import eventImage from "../../assets/images/events.svg";
import { ArrowUpRight, ArrowRight, ArrowLeft } from "@phosphor-icons/react";

export const PainPointSection = () => {
  return (
    <section className="py-10 md:py-20 bg-[#F6F6F6]">
      <main className="max-w-[1680px] mx-auto px-4 md:px-8">
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
          <div className="bg-[#F9ECC9] flex items-center justify-center p-10 md:p-20 tracking-widest">
            <div className="flex md:items-start items-center flex-col space-y-5">
              <Link
                to="/"
                className="flex items-center gap-1 bg-gray-100 w-fit px-5 py-2 rounded-full"
              >
                <span>Explore Experience</span>
                <ArrowUpRight size={18} className="text-gray-600" />
              </Link>
              <h3 className="headerSubText">
                Eliminates Bottlenecks at Events
              </h3>

              <div className="flex items-center gap-8">
                <button className="bg-white p-3 rounded-full hover:bg-gray-100 cursor-pointer transition-all duration-300">
                  <ArrowLeft />
                </button>
                <button className="bg-white p-3 rounded-full hover:bg-gray-100 cursor-pointer transition-all duration-300">
                  <ArrowRight />
                </button>
              </div>
            </div>
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
