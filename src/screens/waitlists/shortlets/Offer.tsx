import { shortletsScroll } from "@/constants/processes";
import { Waitlist } from "@/components/ui/aceternity/waitlist/waitlistDesktop";
import { WaitlistMobile } from "@/components/ui/aceternity/waitlist/waitlistMobile";

export const Offer = () => {
  return (
    <section className="py-20 bg-black">
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
            <Waitlist data={shortletsScroll} direction="left" speed={120} />
          </div>
          {/* Mobile carousel */}
          <div className="block md:hidden">
            <WaitlistMobile data={shortletsScroll} />
          </div>
        </div>
      </main>
    </section>
  );
};
