import { ProcessesMobileCarousel } from "@/components/ui/aceternity/processes-mobile-carousel";
import { waitlist, processesCard } from "@/constants/processes";
import { Waitlist } from "@/components/ui/aceternity/waitlistDesktop";

export const Offer = () => {
  return (
    <section className="py-10 md:py-20 bg-black">
      <main className="max-w-screen mx-auto px-4 md:px-8 overflow-hidden">
        <div className="mb-15">
          <h2 className="hOne text-white font-bold leading-10 md:leading-20">
            What you get
          </h2>
        </div>
        <div className="grid gap-10 grid-cols-1">
          {/* Right section */}
          <div className="hidden md:block overflow-hidden w-full">
            {/* Mobile: show as carousel, Desktop: show normally */}
            <Waitlist data={waitlist} direction="left" speed={120} />
          </div>
          {/* Mobile carousel */}
          <div className="block md:hidden">
            <ProcessesMobileCarousel data={processesCard} />
          </div>
        </div>
      </main>
    </section>
  );
};
