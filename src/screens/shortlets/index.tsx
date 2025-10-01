import { SecondLayout as Layout } from "@/layouts/SecondLayout";
import { Hero } from "./Hero";
import { Carousel } from "@/components/utils/LogoCarousel";
import { carouselTwo } from "@/constants/carouseLogos";
import { Features } from "./Features";
import { Steps } from "./Steps";
import { Pricing } from "@/components/utils/PricingPlans";
import { Ratings } from "./Ratings";
import { FAQ } from "@/components/utils/FAQ";
import { ShortletsFAQ } from "@/constants/FAQ";
import { Newsletter } from "./Newsletter";
import { Waitlist } from "@/components/utils/Waitlist";

export const Shortlets = () => {
  return (
    <Layout>
      <Hero />
      <div className="relative overflow-hidden">
        <div className="w-full bg-[#222222] flex justify-center items-center border border-[#444444] mt-4 py-5">
          <Carousel logos={carouselTwo} title="Works with" />
        </div>
      </div>
      <Features />
      <Steps />
      <Pricing />
      <Ratings />
      <FAQ data={ShortletsFAQ} />
      <Newsletter />
      <Waitlist />
    </Layout>
  );
};

export default Shortlets;
