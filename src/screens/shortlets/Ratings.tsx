import ratings from "@/assets/images/ratings.svg";
import avatar from "@/assets/images/avatar.svg";

export const Ratings = () => {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* image div */}
        <div>
          <img
            src={ratings}
            alt="ratings showcase"
            className="rounded-2xl object-cover w-full"
          />
        </div>

        {/* text div */}
        <div className="flex flex-col gap-6 max-w-96">
          <div className="flex flex-col gap-4">
            <span className="headerFour uppercase tracking-wide text-gray-500">
              BUSINESS FEEDBACK
            </span>
            <h3 className="headerTwo font-bold">Success Stories</h3>
            <p className="headerFive text-gray-600 max-w-xs">
              Mirrors your current process—just faster, auditable, and less
              human error.
            </p>

            {/* stats */}
            <div className="flex items-start gap-12">
              <div className="flex flex-col gap-2">
                <span className="headerThree font-bold">+42%</span>
                <span className="headerFive text-gray-600">
                  Average income growth
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="headerThree font-bold">5.0</span>
                <span className="headerFive text-gray-600">
                  Feedback rating
                </span>
              </div>
            </div>
          </div>

          {/* line */}
          <div className="border-t border-gray-300 w-full"></div>

          {/* testimonial */}
          <div className="flex flex-col gap-4">
            <span className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</span>
            <p className="headerFive text-gray-700 max-w-xs">
              “Cleaning SLAs improved because tasks fire themselves.”
            </p>
            <div className="flex items-center gap-3">
              <img
                src={avatar}
                alt="Bisi Oladejo"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <span className="headerFour block">BISI OLADEJO</span>
                <span className="headerFive text-gray-500">OPS Lead</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
