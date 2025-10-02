import { SecondLayout as Layout } from "@/layouts/SecondLayout";
import { Hero } from "./Hero";
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
      <div className="relative overflow-hidden"></div>
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
