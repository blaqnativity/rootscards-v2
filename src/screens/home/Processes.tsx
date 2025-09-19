import { BtnSecondary } from "@/components/buttons/BtnSecondary";
import { ProcessesCard } from "@/components/utils/ProcessesCarousel";
import { ArrowRight } from "@phosphor-icons/react";

export const Processes = () => {
  return (
    <section className="py-10 md:py-20 bg-black">
      <main className="max-w-[1680px] mx-auto px-4 md:px-8 overflow-hidden">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-[30%_70%]">
          {/* Left section */}
          <div className="flex flex-col justify-start gap-6">
            <span className="headerFive text-white fadeText uppercase">
              how it works
            </span>
            <h2 className="headerTwo text-white">
              Check-In. Route. Optimize. Report.
            </h2>
            <span className="fadeText text-white md:mb-6">
              RootsCards turns messy arrivals into streamlined experiences. From
              the moment someone checks in, AI handles the flow of segmenting,
              routing, and optimizing in real time — while giving your team the
              insights to act with confidence.
            </span>
            <BtnSecondary
              to="https://app.rootscards.com/signup"
              text="Create an account"
              icon={ArrowRight}
              btnBg="bg-white"
              iconBg="bg-black"
              iconColor="text-white"
              textColor="text-black"
            />
          </div>

          {/* Right section */}
          <div className="overflow-hidden w-full">
            {/* Mobile: show as carousel, Desktop: show normally */}
            <ProcessesCard />
          </div>
        </div>
      </main>
    </section>
  );
};
