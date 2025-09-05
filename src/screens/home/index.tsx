import { MainLayout } from "../../layouts/MainLayout";
// import { FeatureCards } from "./FeatureCards";
import { Hero } from "./Hero";
import { PainPointSection } from "./PainPointSection";
// import { PricingPlan } from "./pricing/PricingPlan";
import { Processes } from "./processes/Processes";
import { FAQ } from "../../components/utils/FAQ";

export const Home = () => {
  return (
    <MainLayout>
      <Hero />
      {/* <FeatureCards /> */}
      <PainPointSection />
      <Processes />
      {/* <PricingPlan /> */}
      <FAQ />
    </MainLayout>
  );
};
