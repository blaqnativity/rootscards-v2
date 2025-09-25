import { MainLayout } from "@/layouts/MainLayout";
import { Hero } from "./Hero";
import { Features } from "./Features";
import { Steps } from "./Steps";
import { Pricing } from "@/components/utils/PricingPlans";
import { Kits } from "./Kits";
import { Testimonial } from "../../components/utils/Testimonial";
import { FAQ } from "@/components/utils/FAQ";
import { ShortletsFAQ } from "@/constants/FAQ";

export const Shortlets = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <Steps />
      <Pricing />
      <Kits />
      <Testimonial />
      <FAQ data={ShortletsFAQ} />
    </MainLayout>
  );
};
