import { SecondLayout as Layout } from "@/layouts/SecondLayout";
import { Hero } from "./Hero";
import { Features } from "./Features";
import { Steps } from "./Steps";
import { Pricing } from "@/components/utils/PricingPlans";
import { Ratings } from "./Ratings";
import { FAQ } from "@/components/utils/FAQ";
import { ShortletsFAQ } from "@/constants/FAQ";
import { Newsletter } from "./Newsletter";

export const Shortlets = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Steps />
      <Pricing />
      <Ratings />
      <FAQ data={ShortletsFAQ} />
      <Newsletter />
    </Layout>
  );
};

export default Shortlets;
