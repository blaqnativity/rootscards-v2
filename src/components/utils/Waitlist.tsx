import { BtnSecondary } from "@/components/buttons/BtnSecondary";
import { ArrowRightIcon } from "@phosphor-icons/react";
import vector from "@/assets/images/bg-vector.svg";

export const Waitlist = () => {
  return (
    <section className="relative overflow-hidden py-10 md:py-20 w-full px-4 md:px-8 bg-[#F6F6F6]">
      <div
        className="bg-gradient-to-br from-[#3A98FD] to-[#0453A9]
 max-w-[1200px] rounded-4xl h-[50vh] mx-auto bg-no-repeat md:bg-cover flex items-center p-5 md:p-10"
      >
        <div className="w-full md:w-[50%]">
          <h2 className="headerTwo text-white">Join our Waitlist</h2>
          <span className="headerFive text-white my-6 block">
            Be among the first to experience what we’re building. By joining our
            waitlist, you’ll get early access, insider updates, and exclusive
            perks designed just for our first supporters. Don’t miss your chance
            to be part of something exciting from the very beginning.
          </span>
          <form className="flex items-center gap-2 p-2 rounded-4xl border border-gray-200 max-w-lg">
            <input
              type="email"
              placeholder="Work email"
              className="placeholder-white text-white flex-1 px-4 py-2 text-sm outline-none rounded-lg"
            />
            <BtnSecondary
              to="#"
              text="Join the waitlist"
              btnBg="bg-white"
              textColor="text-black"
              icon={ArrowRightIcon}
            />
          </form>
        </div>

        <img
          src={vector}
          className="absolute w-2xl -bottom-40 md:bottom-20 md:right-20"
        />
      </div>
    </section>
  );
};
