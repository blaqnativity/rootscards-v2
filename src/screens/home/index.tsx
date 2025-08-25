import { MainLayout } from "../../layouts/MainLayout";
import { FeatureCards } from "./FeatureCards";
import { Hero } from "./Hero";
import { PainPointSection } from "./PainPointSection";
import { Processes } from "./Processes";

export const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <FeatureCards />
      <PainPointSection />
      <Processes />
    </MainLayout>
  );
};
