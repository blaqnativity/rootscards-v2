import newsletter from "@/assets/images/newsletter.svg";
import { BtnSecondary } from "@/components/buttons/BtnSecondary";
import { ArrowRightIcon } from "@phosphor-icons/react";

export const Newsletter = () => {
  return (
    <section className="bg-white py-10 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl bg-[#F6F6F6] mx-auto rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left side image */}
        <div>
          <img
            src={newsletter}
            alt="newsletter"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        {/* Right side content */}
        <div className="flex flex-col gap-6">
          {/* Headline */}
          <h2 className="headerTwo font-bold w-lg">
            Ready to make keys and coordinators optional?
          </h2>

          {/* Subtext */}
          <p className="headerFive text-gray-700">
            Spin up your first unit in minutes. No credit card required.
          </p>

          {/* Input + Button */}
          <form className="flex items-center gap-2 p-2 rounded-xl border border-gray-200 max-w-lg">
            <input
              type="email"
              placeholder="Work email"
              className="flex-1 px-4 py-2 text-sm outline-none rounded-lg"
            />
            <BtnSecondary
              to="/signup"
              text="Create Account"
              btnBg="bg-black"
              textColor="text-white"
              icon={ArrowRightIcon}
            />
          </form>

          {/* Small link */}
          <a href="#" className="text-blue-600 text-sm underline">
            Prefer a walkthrough? Book a 15-min demo.
          </a>
        </div>
      </div>
    </section>
  );
};
